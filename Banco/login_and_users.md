server authentication - https://learn.microsoft.com/en-us/sql/database-engine/configure-windows/change-server-authentication-mode?view=sql-server-ver16
sqlcmd new login/user - https://dba.stackexchange.com/questions/170762/sqlcmd-new-login-user
sqcmd new login/user - https://learn.microsoft.com/en-us/sql/relational-databases/security/authentication-access/create-a-login?view=sql-server-ver16

list login
https://dataedo.com/kb/query/sql-server/list-logins-on-server
https://www.techonthenet.com/sql_server/questions/find_logins.php
```
select sp.name as login,
       sp.type_desc as login_type,
       sp.type,
       case when sp.is_disabled = 1 then 'Disabled'
            else 'Enabled' end as status
from sys.server_principals sp
left join sys.sql_logins sl
          on sp.principal_id = sl.principal_id
where sp.type not in ('G', 'R')
order by sp.name;
```

list users
https://dataedo.com/kb/query/sql-server/list-users-in-database
```
select name as username,
       type_desc as type,
       type,
       authentication_type_desc as authentication_type
from sys.database_principals
where type not in ('A', 'G', 'R', 'X')
      and sid is not null
      and name != 'guest'
order by username;
```

all databases in sql server
https://stackoverflow.com/questions/147659/get-list-of-databases-from-sql-server
```
SELECT name FROM master.sys.databases;

SELECT * FROM master.sys.databases;
```

Sqlcmd to generate file without dashed line under header, without row count
 https://stackoverflow.com/questions/24497970/sqlcmd-to-generate-file-without-dashed-line-under-header-without-row-count (SET NOCOUNT ON)