
Exemplos


create table medico(
codigo serial primary key,
nome varchar(40) not null);

create table paciente(
codigo serial primary key,
nome varchar(40) not null);

create table sala(
codigo serial primary key,
nome varchar(20) not null);

create table atende(
dia date not null,
codmedico int not null references medico(codigo) on delete cascade,
codpaciente int not null references paciente(codigo) on update cascade,
codsala int not null references sala(codigo),
constraint atende_r01 primary key(dia,codmedico,codpaciente,codsala));


---

create table agencia(
nomeAgencia varchar(30) primary key,
cidadeAgencia varchar(30) not null,
ativo bool not null);
 
create table cliente(
nomeCliente varchar(30) primary key,
ruaCliente varchar(20) not null,
cidadeCliente varchar(20) not null);
 
create table conta ( 
numeroConta varchar(10) primary key,
nomeAgencia varchar(20) not null references agencia(nomeAgencia),
numeroEmprestimo int primary key,
nomeAgencia varchar(20) not null references agencia(nomeAgencia),
quantia money not null);
 
create table depositante(
nomeCliente varchar(30) not null references cliente(nomeCliente),
numeroConta varchar(10) not null references conta(numeroConta),
constraint depositante_r01 primary key(nomeCliente,numeroConta));
 
create table tomador(
nomeCliente varchar(30) not null references cliente(nomeCliente),
numeroEmprestimo int not null references emprestimo(numeroEmprestimo),
constraint depositante_r01 primary key(nomeCliente,numeroEmprestimo));

insert into agencia(nomeagencia,cidadeagencia,ativo) values ('A2','Salto',true);
select * from agencia;

delete from agencia where nomeagencia = 'A2';

drop table conta cascade; -- drop table nome cascade, apaga a tabela e as referencias
-- float com 8 bytes
-- money e real com 4 bytes

Estudar

DER
É um modelo, uma representação da realidade, normalmente adjetivos são atributos das entidades 

Aluno - Realiza - Prova
Realiza (nota)

Esquema Relacional
Converte o DER em um conjunto de relações vinculadas por setas.
    Regras de conversão de esquema relacional
    Normalização é um processo de eliminação de redundância. Redundância é cara
  

SQL

- not null quando a relação do DER precisa estar vinculado a pelo menos 1 na outra tabela


Dependência Funcional.
Normalização.
Produto cartesiano ( select * from tabela1, tabela2).
incluir campo: alter table ...
