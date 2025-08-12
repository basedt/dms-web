# 表

## 新建

右键点击数据库对象树中的表选择**新建**,填写表名、字段、索引等信息点击确定后弹出SQL预览框，再次点击确定完成创建。
![table_create_1.png](/dev/guide/images/database/table_create_1.png)
![table_create_2.png](/dev/guide/images/database/table_create_2.png)

## 编辑

右键点击数据库对象树中的表选择**编辑**,在表单中修改表信息点击确定后弹出SQL预览框，再次点击确定完成修改。
![table_edit_1.png](/dev/guide/images/database/table_edit_1.png)
![table_edit_2.png](/dev/guide/images/database/table_edit_2.png)

## 重命名

右键点击数据库对象树中的表选择**重命名**,在弹出框中修改表名点击确定完成重命名。
![table_rename.png](/dev/guide/images/database/table_rename.png)

## 删除

右键点击数据库对象树中的表选择**删除**,弹出框二次确认后删除表。
![table_delete.png](/dev/guide/images/database/table_delete.png)

## 索引

展开表节点，右键点击**索引**，目前支持索引编辑、重命名、删除、查看索引DDL等操作。修改索引时需将删除索引语句注释去掉，否则将无法执行。
![table_index.png](/dev/guide/images/database/table_index.png)

## Script

### 查看DDL

右键点击数据库对象树中的表选择**Script**->**查看DDL**，在弹出框中可查看复制DDL语句。
![table_ddl_1.png](/dev/guide/images/database/table_ddl_1.png)
![table_ddl_2.png](/dev/guide/images/database/table_ddl_2.png)

### 生成SQL
右键点击数据库对象树中的表选择**Script**->生成...，支持生成insert、update、delete、select语句
![table_dml.png](/dev/guide/images/database/table_dml.png)