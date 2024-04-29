Aula 27/03

- Virtual box 
- Microsof imagine site do if

Windows Xp 512mb (escolha do dami 1)
é melhor o dinâmico 
justificar se é pro ou home 
ler todas as telas 
splash box 
dispositivos e clicar na ultima opção, inserir imagem de...




Aula 28/03
- Pré-instalação   Instalação     Pós instalação
Antes de fazer a formatação fazer um backup(copia de segurança) , do "meus documentos" ou desktop ou outros (afinal provavelmente vai ter mais coisas importantes suas salvas em outros lugares)
Não esquecer de perguntar para o cliente se ele vai querer q rebaixe ou n,
porque se a pessoa perde a foto do casamento dela, ela vai ficar um pouco brava com vc

F.A.T. --  Clusters
Aplicativos file scavenger ou file recovery 
HD (Hard Disk), o disco flexível era o diskat
Hoje no lugar do HD é usado SSD (Solid State Disk)
Sem disco = Terminal Burro  ou Thin Client -- sem HD ele faz isso, então quando ele vai iniciar o sistema operacional (dar o boot), ira usar a rede para armazenar os dados (ele armazena nos discos do servidor)

1. Pré-instalação - Backup, Software
2. Instalação - particiona, formata e instala

Particiona: (carpe e deixa a terra plana) o hd, transformar ele em 2 ou mais, C: e D: ...
Formatar: (define as trilhas, o tamanho dos espaços) apaga os arquivos do hd
Instala: (levantar os muros)


Aula 10/04
Windows | Ubuntu
--- | ---
C: | / ->  diretório raiz
Administrador | root  -> super usuário
Documentos | /home
Arquivos de programas | /etc
Logs | Var



Formas que a Maquina virtual acessa a internet:
  Bridge (ponte) - ip próprio 
  NAT -  da vm para o host do host para o switch e depois para a web - ip da maquina host, mesmo que a vm peça uma informação aparece que foi a host 

Aula 17/04
Dual boot 
1. Ligar a maquina
2. Post - Cpu,Ram,Uga,teclado,... (modo de ver se está tudo funcionando)
3. boot -  Mrb <- gerenciador de boot no linux -> grub ou lilo
4. primeiro instalar o windows e depois os outros sistemas ou instalar o windows mais velho para o mais novo
5. Lembrar de particionar o HD de forma lógica
6. Gparted para particionar o HD no linux ou no windows gerenciamento de disco 
 

Aula 24/04
 Conversa sobre o trabalho




Aula 14/08
Backup:
- equipamento
- dados
          - segurança é o mais importante neles  ( senhas fortes, criptografia )
Dispositivos amovíveis ( pendrive, dispositivos de tirar e por )
Nuvem ( rede mundial )
   -Datacenter
Gestão de Ti ( contratam a empresa que faz o backup )

Aula 28/08
                                                                Aplicações 
Móveis

Desktop
- ERP (aplicação integrada, que conecta varias afirmações; faz uma compra, vai para o software financeiro, depois vai para o do controle fiscal,...)

Bom para desenvolvedores jovens, ex  fazer uma aplicação playstore
programação móvel 
Banco de dados
                                                                 Software
                                                         Pratica x Legalidade

Aula 30/10
 
Linux 

	Guia Foca ( Excelente para aprender Linux )
	Comandos do Linux :      Comando parâmetros
	Carlos Eduado Morimoto ( Livro de Linux Biblioteca )
	
permissões de arquivos no Linux é super importante
- R - Read           = 4
- W - Write         = 2
- X - Execution   = 1
1. Usuário R W X = 7
2. Grupo   R      X  = 5
3. Outros  R           = 4  (ou pode deixar vazia tbm)    = 1 
  Você pode mudar as permissões dos 3 tipos de usuários como quiser, desde que tenha permissão

Wine é um emulador do Windows para o Linux
Apertar crt+alt + f1 até f6 é o modo texto (são diversos usuários), f7 modo gráfico 
crt+ l = limpa tela
whoami (responde quem é o seu usuário, "who am I" )
pwd ( mostra qual é a pasta que está no momento )
exit ( sai do seu usuário  ) 
su ( super user, transforma o usuario em root )
ifconfig = ipconfig windows (precisa ser su ) (lo é o própio computador [Loop Back] que significa "Eu")
sudo 'comando' (ele já faz o comando como root sem ser, e não precisa de senha nem nada; é uma falha na segurança )
ls   [listen scream] (ver dentro dela) 
ls -l (mostra em lista)
ls - s (ver arquivos ocultos)
ls -lah [l = lista, a = atributos do arquivo, 'h' = humano, sem o 'h' ele mostra em bit, com 'h' ele mostra em Kb,Mb,...] (lista em colunas todos os diretórios, até os escondidos)
O ' . ' é a pasta que está no momento e o ' .. ' é a pasta anterior  
Ocultar a pasta no Linux é só colocar um ' . ' antes do nome 
cd "nome da pasta" (mudar de pasta)
passwd "nome do user" ( muda a senha )
mkdir "nome da pasta" [maker] (construir um diretório)
chmod (altera as permissões, ex: u = r;
                                                       u + x;
                                                       u - w;... 
lembrar do UGO ( User,Group,Others ))
letra + tab + tab ele mostra todos os comandos q comecem com aquelas letras
man  "comando" (manual)


No Ubuntu sempre vai ter o "SWAP" ( temporário, só  grava nele de modo indiretamente ) e o "/" ( diretório raiz ).
Quanto de espaço deixa para aquela unidade ? Windows com 100GB, se coloca normalmente no C: ( onde fica o Windows ) uns 30 - 40 GB e no D: ( Que aqui no caso vai ter ) 60 - 70 GB. Já no Linux se deixa no SWAP normalmente o mesmo número da memória RAM, fica no máximo uns 4 GB
Putty app para acesso remoto a um computador
apt-get update
Apt-get install "nome do aplicativo" (para baixar um aplicativo) em outros Linux pode ser yum no lugar de apt-get

apt-get install openssh-server ( baixar pacote server para acesso remoto, já o cliente acessa qualquer outro computador service que já é padrão, openssh )

init 6 ( reiniciar pc )
init 0 ( desligar pc )

man "comando" ( manual do comando )
rm "nome do arquivo" ( para apagar arquivo e não pasta )
cp "nome do arquivo" e para qual pasta ele vai 
~  =  /home/nomedousuario 
cd - = volta para o diretório q estava
rm -rf = apaga as pastas mesmo que tenha coisas dentro ( -r [aplica em todas as pastas subsequentes dentro daquela] e -f [força, não pergunta se tem certeza] ) 
ls -R  "nome da pasta ( mostra todas as subpastas dentro da que vc colocar )
mv [move] "o que quer alterar" e a pasta, pode renomear ou mudar 

/etc/init.d/ ( pasta onde fica a maioria das coisas do pc, como as pastas de áudio, internet, etc... )
/etc/init.d/networking restart ( para reiniciar o serviço de internet ) 
etc/network/interfaces.d/
repositores são servidores localizados em varias partes do planeta que armazena todos os pacotes que podem ser instalado no Linux ( Não todos todos, mas os mais utilizados e oficiais )



Prova 
mkdir  ( criar pasta )
rmdir  ( apagar pasta )
cd ( entrar )
cd ( sair )
ls  ( visualizar )

como instalar um programa
porque apt-get update, serve para reler a lista de pacotes disponíveis, instalar updates no sistema 
como criar um arquivo de texto e como editar ele ( Touch e Vim )


ls -R / >> /home/user/Desafio/Pasta2/IamHacker.tudo
( O >> diz onde ele vai mostrar isso )
> - apaga e adiciona o arquivo
>> - não apaga e adiciona no fim do arquivo

Italc programa que a CTI usa para ver os computadores, ele aparece com o nome ica nos processos 

Service msconfig
Lição:
