Um snapshot de banco de dados provê uma visão estática e somente leitura de um outro banco de dados (origem) num determinado ponto no tempo. Podemos criar múltiplos snapshots a partir de um banco de dados, que serão armazenados na mesma instância de servidor que o banco de dados de origem.

Snapshots podem ser usados para criar cópias de um banco de dados e usar estas cópias como fonte de consultas e relatórios. Durante um evento de erro, o snapshot também pode ser usado como uma cópia de segurança (backup) dos dados, permitindo que o um banco de dados seja restaurado ao estado em que este se encontrava quando da criação do snapshot. A perda de informações está limitada às transações de atualização ocorridas no banco de dados desde a criação do snapshot.


### Diferença entre backups e snapshots


Backups e snapshots são dois conceitos relacionados à proteção e recuperação de dados em bancos de dados, mas têm propósitos e características distintas. 

**Backup**

Um backup é uma cópia dos dados do banco de dados em um determinado momento, armazenada separadamente do banco de dados principal, sua principal função são de garantir a recuperação dos dados em caso de falhas, erros ou perdas de dados. Eles são uma medida essencial para a recuperação de desastres. O backup geralmente é uma cópia completa do banco de dados ou uma cópia incremental que contém apenas as alterações desde o último backup.

**Snapshot**

Um snapshot é uma imagem instantânea dos dados em um determinado momento. No contexto de bancos de dados, um snapshot é uma representação consistente do estado do banco de dados em um ponto específico no tempo.São úteis para criar pontos de referência para análise, testes ou consultas específicas. Eles não são necessariamente criados com o propósito principal de recuperação de desastres. No geral são cópias leves e rápidas, capturando o estado do banco de dados sem a necessidade de copiar todos os dados. Eles podem ser usados para criar ambientes de teste ou para consultar dados específicos sem impactar o ambiente de produção.

Em resumo, backups são cópias completas ou incrementais dos dados, destinadas principalmente à recuperação de desastres, enquanto snapshots são imagens instantâneas leves do estado do banco de dados, frequentemente usadas para fins de análise e testes.


### Referências


overview em pt - https://www.devmedia.com.br/database-snapshots/3252
overview - https://learn.microsoft.com/en-us/sql/relational-databases/databases/database-snapshots-sql-server?view=sql-server-ver16
create, view, revert, drop, view size - https://learn.microsoft.com/en-us/sql/relational-databases/databases/create-a-database-snapshot-transact-sql?view=sql-server-ver16
explicação de termos usados no artigo da microsoft - https://learn.microsoft.com/en-us/sql/t-sql/statements/create-database-transact-sql?view=sql-server-ver16&tabs=sqlpool#database_snapshot_name


### Conceito inicial


1. Nome do Banco de Dados (Database Name): O nome do banco de dados é o identificador único usado para referenciar um banco de dados específico no servidor SQL. Quando você se conecta a um banco de dados, usa o nome do banco de dados para acessar suas tabelas, exibições, procedimentos armazenados e outras informações.
2. Nome Lógico do Banco de Dados (Logical Name): O nome lógico do banco de dados, por outro lado, é uma propriedade interna dos arquivos de banco de dados físicos. Cada banco de dados no SQL Server é composto de pelo menos um arquivo de dados e um arquivo de log. O nome lógico é um nome interno usado para identificar esses arquivos no contexto do banco de dados.
3. SELECT * FROM sys.database_files: Esta consulta retorna informações sobre os arquivos físicos que compõem um banco de dados específico. Ele fornece detalhes sobre os diferentes arquivos de dados e arquivos de log associados a um banco de dados em particular. Isso inclui informações como o nome do arquivo, o tipo de arquivo, o tamanho atual e o caminho físico do arquivo no sistema de arquivos.
4. SELECT * FROM sys.master_files: Esta consulta retorna informações sobre todos os arquivos de dados e arquivos de log de todos os bancos de dados no servidor SQL. Ela fornece uma visão geral de todos os arquivos mestres relacionados aos bancos de dados no servidor. As informações incluem o nome do banco de dados associado, o nome lógico do arquivo, o nome físico do arquivo, o tipo de arquivo, o tamanho atual do arquivo e outros detalhes relevantes.
5. SELECT * FROM sys.databases: Esta consulta retorna informações sobre todos os bancos de dados presentes no servidor SQL. Ela fornece uma lista de todos os bancos de dados disponíveis, incluindo o banco de dados do sistema e quaisquer outros bancos de dados de usuário criados. As informações podem incluir o nome do banco de dados, seu identificador de banco de dados, data de criação, estado de recuperação, entre outros detalhes.

Para entender melhor a diferença entre sys.master_file e sysaltfiles, ler https://learn.microsoft.com/pt-br/sql/relational-databases/system-tables/mapping-system-tables-to-system-views-transact-sql?view=sql-server-ver16.
Durante a leitura do arquivo interpretar "ss" e "snaps" como sinônimos para "snapshot".


#### Criar


```
CREATE DATABASE database_snapshot_name
ON
(
    NAME = logical_file_name
    , FILENAME = 'os_file_name'
) [ , ...n ]
AS SNAPSHOT OF source_database_name
[;]
O "database_snapshot_name" é o nome usado para manipular o snapshot.
O "logical_file_name" tem que corresponder a um dos nomes listado na coluna "name" do comando: SELECT * FROM sys.master_files.
O "os_file_name" é o lugar em que ficara armazenado o arquivo do snapshot.
O "source_database_name" é o nome da base que sera feito o snapshot.

-- uma visao mais facil do sys.master_files, removendo os bancos padrões do sql e os bancos de log:
SELECT database_id, name, physical_name,size FROM sys.master_files
  where database_id NOT IN (1,2,3,4) and type_desc = 'ROWS';
```

```
CREATE DATABASE join_dbss1 ON  ( 
    NAME = joinrh,
    FILENAME = '/snaps/join_dat_Tarefa.ss'
  ) AS SNAPSHOT OF JoinRH;

CREATE DATABASE join_dbss2 ON  ( 
    NAME = JoinRH,
    FILENAME = '/snaps/join_dat_Tarefa22.ss'
  ) AS SNAPSHOT OF JoinRH;
```

```
CREATE DATABASE demo_dbss ON  ( 
    NAME = Demo_Data,
    FILENAME = '/snaps/demo_dat_Tarefa.ss'
  ) AS SNAPSHOT OF JoinRH_Demo;

CREATE DATABASE linkedrh_dbss ON  ( 
    NAME = JoinRH_Extra_Data,
    FILENAME = '/snaps/linkedrh_dat_Tarefa.ss'
  ) AS SNAPSHOT OF JoinRH_LinkedRH;

CREATE DATABASE join_dbss ON  ( 
    NAME = joinrh,
    FILENAME = '/snaps/join_dat_Tarefa.ss'
  ) AS SNAPSHOT OF JoinRH;
```

criação com condicional
```
IF EXISTS (SELECT database_id FROM sys.databases WHERE name='join_dbss')
  BEGIN
    DROP DATABASE join_dbss;
  END;
CREATE DATABASE join_dbss ON  (
      NAME = joinrh,
      FILENAME = '/snaps/join_dat_Tarefa.ss'
    ) AS SNAPSHOT OF JoinRH;
```


#### Deletar


```
DROP DATABASE SalesSnapshot0600;
DROP DATABASE join_dbss;
DROP DATABASE demo_dbss;
DROP DATABASE linkedrh_dbss;
DROP DATABASE join_dbss, demo_dbss, linkedrh_dbss;
```


#### View de snapshot


visão geral dos dados do banco
```
SELECT * FROM sys.master_files;
SELECT * FROM sys.database_files;

-- sendo 1,2,3,4 os ids dos bancos ('master', 'tempdb', 'model', 'msdb')
SELECT * FROM sys.master_files where database_id NOT IN (1,2,3,4)
```

Os arquivos ss estao normalmente em pastas diferentes, que são as pastas de snapshots
```
SELECT physical_name FROM sys.master_files where database_id NOT IN (1,2,3,4);
-- SELECT physical_name FROM sys.database_files; desatualizado
```

Arquivos ss tem o is_sparse = 1
```
SELECT is_sparse FROM sys.master_files where database_id NOT IN (1,2,3,4);
-- SELECT is_sparse FROM sys.database_files;
```

Para ss o source_database_id  faz referência ao id do banco do qual foi gerado
```
SELECT database_id, db.name, db.source_database_id FROM sys.databases db 
  WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb')
  ORDER BY database_id;

-- podemos trocar o id do database pelo nome usando 
SELECT database_id, db.name, db_name(db.source_database_id) source_database FROM sys.databases db 
  WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb')
  ORDER BY database_id;
```

Para listar todos os ids dos bancos
```
SELECT * FROM sys.databases
SELECT * FROM sys.databases WHERE name NOT IN ('master', 'tempdb', 'model', 'msdb');
```

Para listar apenas os ss
```
SELECT
 db_name(db.source_database_id) source_database,
 db.name AS snapshot_db_name,
 db.database_id,
 db.source_database_id,
 db.create_date,
 db.compatibility_level,
 db.is_read_only,
 mf.physical_name
FROM sys.databases db
INNER JOIN sys.master_files mf
 ON db.database_id = mf.database_id
WHERE db.source_database_id is not null
 AND mf.is_sparse =1
ORDER BY db.name;
```

Para lsitar apenas os nomes dos ss e junto com um filtro para validar que ao executar em um servidor com muitas bases apenas exclua os snapshots da base em que a pessoa seja responsável (ou seja, o nome da base que está no .env do arquivo cypress)

```
SELECT db_name(db.database_id) as snapshot_name  FROM sys.databases db
    INNER JOIN sys.master_files mf
        ON db.database_id = mf.database_id
    WHERE db.source_database_id is not null
        AND mf.is_sparse = 1
        AND db_name(db.source_database_id) 
            IN ('JoinRH', 'JoinRH_Demo', 'JoinRH_LinkedRH');
```


#### Restore de database por snaps


```
RESTORE DATABASE AdventureWorks FROM DATABASE_SNAPSHOT = 'AdventureWorks_dbss1800';
RESTORE DATABASE JoinRH FROM DATABASE_SNAPSHOT = 'join_dbss';
```

```
USE [master]
ALTER DATABASE JoinRH SET SINGLE_USER WITH ROLLBACK IMMEDIATE
RESTORE DATABASE JoinRH FROM DATABASE_SNAPSHOT = 'join_dbss';
ALTER DATABASE JoinRH SET MULTI_USER
GO
```

---

### Código atual


As variaveis "nomeSnapshot", "nomeLogicoBase", "nomeBase" e "caminhoSnapshot" são enviadas como parâmetros através da chamada do sqlcmd.

Exemplo:
nomeBase = JoinRH;
nomeLogicoBase = joinrh;
nomeSnapshot = join_dbss;
caminhoArquivoSnapshot = 'snaps/join_dat_tarefa.ss';
nomeArquivoSnapshot = 'join_dat_tarefa.ss'
caminhoCompletoSnapshot = caminhoSnapshot + '/' + nomeArquivoSnapshot

Controle de arquivos snaps

```
BEGIN TRY
  USE [master];
  ALTER DATABASE $(nomeBase) SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
  IF EXISTS (SELECT database_id FROM sys.databases WHERE name = '$(nomeSnapshot)')
  BEGIN
    DROP DATABASE $(nomeSnapshot);
  END;

  CREATE DATABASE $(nomeSnapshot) ON  (
    NAME = $(nomeLogicoBase),
    FILENAME = '$(caminhoArquivoSnapshot)'
  ) AS SNAPSHOT OF $(nomeBase);
  PRINT 'Criado com sucesso.';
  ALTER DATABASE $(nomeBase) SET MULTI_USER;
END TRY
BEGIN CATCH
  DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
  PRINT 'Falha ao executar o script de controle de arquivos snaps. Detalhes do erro:';
  PRINT 'Mensagem de erro: ' + @ErrorMessage;
  PRINT 'Linha com erro: ' + CAST(ERROR_LINE() AS NVARCHAR(10));
END CATCH;
```

#### Restore

```
IF EXISTS (SELECT database_id FROM sys.databases WHERE name = '$(nomeSnapshot)')
  BEGIN
    BEGIN TRY
      USE [master];
      ALTER DATABASE $(nomeBase) SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
        RESTORE DATABASE $(nomeBase) from DATABASE_SNAPSHOT = '$(nomeSnapshot)';
        PRINT 'Fim do restore.'
      ALTER DATABASE $(nomeBase) SET MULTI_USER;
    END TRY
    BEGIN CATCH
      DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
      PRINT 'Falha ao tentar restaurar o snapshot. Detalhes do erro:';
      PRINT 'Mensagem de erro: ' + @ErrorMessage;
      PRINT 'Linha com erro: ' + CAST(ERROR_LINE() AS NVARCHAR(10));
    END CATCH;
  END;
ELSE
  BEGIN
    PRINT 'O snapshot ainda não foi criado, portanto não é possível executar a tarefa de restaurar';
  END;
```

Excluir os snapshots no começo do dia para fazer o restore do backup do banco

```
BEGIN TRY
  DECLARE @sqlCommand NVARCHAR(128);
  DECLARE @snapshotName NVARCHAR(128);
  DECLARE snapshot_cursor CURSOR FOR
  SELECT db_name(db.database_id) as snapshot_name FROM sys.databases db
    INNER JOIN sys.master_files mf
      ON db.database_id = mf.database_id
    WHERE db.source_database_id is not null
      AND mf.is_sparse = 1
      AND db_name(db.source_database_id) 
        IN ('JoinRH', 'JoinRH_Demo', 'JoinRH_LinkedRH');

  OPEN snapshot_cursor;
  FETCH NEXT FROM snapshot_cursor INTO @snapshotName;

  WHILE @@FETCH_STATUS = 0
  BEGIN
    SET @sqlCommand = 'DROP DATABASE ' + @snapshotName;
    EXEC sp_executesql @sqlCommand;

    FETCH NEXT FROM snapshot_cursor INTO @snapshotName;
  END;

  CLOSE snapshot_cursor;
  DEALLOCATE snapshot_cursor;
END TRY
BEGIN CATCH
    DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
    PRINT 'Falha ao tentar excluir snapshots. Detalhes do erro:';
    PRINT 'Mensagem de erro: ' + @ErrorMessage;
    PRINT 'Linha com erro: ' + CAST(ERROR_LINE() AS NVARCHAR(10));
END CATCH;
```

---

### Cenários de possíveis erros


- Alterar o nome do snapshot, mas não alterar o nome do arquivo snapshot. No momento da criação do snaps o sql irá verificar se no caminho dos arquivos snaps existe algum arquivo com o mesmo nome que está tentando ser criado agora. Exemplo:


titulo | 1 | 2
 --- | --- | ---
Nome snapshot | join_dbss | join_snaps
Nome arquivo snapshot | join_dat.ss | join_dat.ss
Resultado | Ok | Error: "Cannot create file '/snaps/join_dat.ss' because it already exists."
