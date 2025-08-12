# Table

## Create

Right-click on the table in the database object tree and select **New**. Fill in the table name, fields, indexes and
other information, then click OK. An SQL preview box will pop up. Click OK again to complete the creation.
![table_create_1.png](/v1.1.0/guide/images/database/table_create_1.png)
![table_create_2.png](/v1.1.0/guide/images/database/table_create_2.png)

## Edit

Right-click on the table in the database object tree and select **Edit**. Modify the table information in the form, then
click OK. An SQL preview box will pop up. Click OK again to complete the modification.
![table_edit_1.png](/v1.1.0/guide/images/database/table_edit_1.png)
![table_edit_2.png](/v1.1.0/guide/images/database/table_edit_2.png)

## Rename

Right-click on the table in the database object tree and select **Rename**. Modify the table name in the pop-up box and
click OK to complete the rename.
![table_rename.png](/v1.1.0/guide/images/database/table_rename.png)

## Drop

Right-click on the table in the database object tree and select **drop**. A confirmation pop-up will appear. Click OK
to drop the table.
![table_delete.png](/v1.1.0/guide/images/database/table_delete.png)

## Index

Expand the table node and right-click on **Index**. Currently supports index edit, rename, drop, and viewing
index DDL operations. When modifying an index, you need to uncomment the drop index statement, otherwise it will not be
executed.
![table_index.png](/v1.1.0/guide/images/database/table_index.png)

## Script

### View DDL

Right-click on the table in the database object tree and select **Script** -> **View DDL**. You can view and copy the
DDL statement in the pop-up box.
![table_ddl_1.png](/v1.1.0/guide/images/database/table_ddl_1.png)
![table_ddl_2.png](/v1.1.0/guide/images/database/table_ddl_2.png)

### Generate SQL

Right-click on the table in the database object tree and select **Script** -> Generate.... Supports generating insert,
update, delete, and select statements.
![table_dml.png](/v1.1.0/guide/images/database/table_dml.png)