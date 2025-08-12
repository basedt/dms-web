# 快速开始

## 安装Docker环境

进入[Docker官网](https://www.docker.com/)下载并安装Docker Desktop

## 启动项目

1. 创建或下载[docker-compose.yml](https://github.com/basedt/dms-web/blob/main/docker/docker-compose.yml)文件

```yaml

services:

  db:
    image: postgres:15.1-alpine
    container_name: dms_postgres
    restart: always
    environment:
      POSTGRES_USER: root
      POSTGRES_PASSWORD: 123456
      POSTGRES_DB: dms
    ports:
      - 5432:5432
    volumes:
      - ./db/data:/var/lib/postgresql/data
    healthcheck:
      test: [ "CMD", "pg_isready", "-q", "-d", "dms", "-U", "-u$$POSTGRES_USER" ]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 10s
    networks:
      - dms
  redis:
    image: redis:7.0.7
    container_name: dms_redis
    restart: always
    ports:
      - 6379:6379
    networks:
      - dms
  minio:
    image: bitnami/minio:2024
    container_name: dms_minio
    environment:
      - MINIO_ROOT_USER=admin
      - MINIO_ROOT_PASSWORD=password
      - MINIO_DEFAULT_BUCKETS=dms
    ports:
      - 9000:9000
      - 9001:9001
    networks:
      - dms
  dms-backend:
    image: basedt/dms-backend
    container_name: dms_backend
    depends_on:
      redis:
        condition: service_started
      minio:
        condition: service_started
      db:
        condition: service_healthy
    healthcheck:
      test: [ "CMD", "curl", "-f", "http://dms-backend:8080/dms/api/health/status" ]
    ports:
      - 8080:8080
      - 8366:8366
    networks:
      - dms
  dms-frontend:
    image: basedt/dms-frontend
    container_name: dms_frontend
    depends_on:
      dms-backend:
        condition: service_healthy
    ports:
      - 80:80
    networks:
      - dms

networks:
  dms:
    driver: bridge

```

2. 执行以下命令启动项目

```shell
docker compose -p dms up -d
```

3. 打开浏览器进入 http://localhost 访问系统。成功访问后可自行注册账号或者使用管理员账号密码(admin/123456)登录

![login.png](/images/start/login.png)