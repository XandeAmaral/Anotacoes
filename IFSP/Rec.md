Aula 04/05

IPV6
IEE padrão de engenhara eletronica
IETF
RFC como se fosse uma iso

ipv4 em 1983 - cerca de 4 bilhões de endreços
iana ->  NIR (cgi.br) -> lacin
ipv4 é algo pago
aplicativo byebye v4 -> ver quantos ipv4 ainda restam
CIRD
*NAT -  ainda não é muito util, pq sobrecarrega o carregador e faz com q diminua a qualidade (ipv6 n tem, já q todas as pessoas tem ips próprios)

---

ipv6 tem 340 undecilhôes de ips
ipv6 publico - chamado de global ou unicast 
ipv6 privado - unique local address -  existe por segurança 
ipv6 linha local: começo fe80 - serve para comunicação 


endereço loopback 127.0.0.1 é um ip para testar a conectividade com a placa de rede do pc
cabeçalho do pacote ipv4 12 bits de 20 a  60 
                              ipv6  8 bits fixo de 40
novidades:
ipv6 stateless - atribuição automática de endereço
path MTU discovery - ele mesmo fragmenta os pacotes e n os roteadores
jumbograms 

---

tracert "site" - ver quantidades de rotiadores que passam 
http://ipv6.br/curso/
https://ipv6.he.net/certification/
http://test-ipv6.com/index.html.pt_BR

contato:
 danieldamito@outlook.com


---

Aula 18/05

Modelo OSI   -   Função. internet

1-física
2-enlace
3-rede ( protocolos de rotiamento  )
4-transporte ( eliminação de erros da ccadamas inferiores, ordenação,   comunicação direta )
5-sessão ( 2 processos em máquinas diferentes )
6-apresentação ( converte os formatos de caracteres e criptografias )
7-aplicação ( protocolos de nível alto das aplicações )

incapsular
desencapsular

Camada A      PCI + SDU = PDU
      //      B       PCI + SDU(soma do PCI + SDU passado) = PDU  
     //       C          PCI + SDU = PDU  
     //       D        PCI + SDU = PDU

roteadores de switch vão até a 2, os mais caros e melhor processador vão até  a camada 3

"8          usuário" 
7          aplicação
6          aplicação
5          aplicação
4          transporte
3            transparente  
2          internet
1           rede


Aula 22/05

Universidade federal - Sempre esteve no mercado academico, mas não no de trabalho

Instituto federal - finalidade de produzir uma ciência e aplicar ela, colocar no mercado, fazer com nós nos acostumemos com empresas