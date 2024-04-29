https://programacaodescomplicada.wordpress.com/indice/linguagem-c/

http://virtualpiano.net/

codeblocks
Visual Studios 2016

Onde eu posso ir em algoritmos?? 






---

Professor:  Modestto


Marks tuto gamers
Concert 2
RPG maker





Struct ficha {
      Int Nascimento:
      String Nacionalidade:
      String Emprego:
};
 Struct ficha usuário [10];

Scanf ("%i%c%c", usuário.Nascimento, usuário.Nacionalidade, usuário.Emprego);




29/11


- Interface do Usuário (UI)
- protótipo de telas
- ideia de um software
fazem parte do pencil que é uma derivação do smartdraw e visio.

Tipo de arquivo de imagem: Bitmap e Vetorial 

Bitmap ( mapa de Bits)
-  BMP
-  JPG
-  TIFF
-  PNJ
Softwares:
-  Editores de Foto como   Photoshop

Vetorial  (Eq. matemática )
-  SVG ( Grafic Vetorial Simple )
Softwares:
-  Coreldraw
-  Inkscape

---

								2018

---

AMS
(Analise e Modelagem de Sistemas )

 Alan Kay - associou a célula a objeto


a) Pessoa Física, Pessoa Jurídica
Concreto e abstrato

b) Aluno do técnico, Aluno do tecnólogo
Escolaridade, disciplinas, horários 

c) Carro, Avião, Navio
Modo de atuação ( comportamento, anda, voa, navega )

d) Analista, Gerente, Diretor, Secretaria
Área de atuação, Formação


---


20/02

C# - linguagem orientada a objetos.

Instancia, cria um espaço na memoria.
Declarar, mostra q tipo é a variável.

Tudo, em C#, q tem inicial maiúscula é uma classe, já o que tem a inicial minuscula é um obejto, variável simples.

this n é necessário, ele se refere a classe atual, utilizamos para facilitar;
super se refere a classe total.


Ex. 1:

        void BtnTransfereClick(object sender, EventArgs e)
        {
            String s;
            
            s= this.txtTexto.Text; // captura o texto do textbox
            this.lblTexto.Text=s;  // coloca o texto dentro do label
            this.txtTexto.Clear(); // limpa o textbox, o "()" indica q é um metodo ( faz alguma coisa )
            this.txtTexto.Focus(); // coloca o foco no textbox
        }

a variável "s" tbm é um objeto. 
pra comparar um objeto usar o .comparate ( pq se fizer "s == s", ele vai comparar o endereço de memoria e n o conteúdo q tem )
Objeto guarda um endereço, q dentro dele tem conteúdos. 

Ex. 2: 

        void BtnJuntarClick(object sender, EventArgs e)
        {
            String P,M,F;
            
            P=this.txtPrimeiro.Text;
            M=this.txtMeio.Text;
            F=this.txtFim.Text;
            
            this.txtResultado.Text= P + " " + M + " "+ F;
            
            this.txtPrimeiro.Clear();
            this.txtMeio.Clear();
            this.txtFim.Clear();
        }

Ex 3: 

void BtnSoma1Click(object sender, EventArgs e)
        {
            int n;
            String s;
            
            s= this.txtN.Text; //captura o texto do textBox
            n= Convert.ToInt32(s); //converte a string s para o inteiro n
            n++;
            this.txtN.Text=n.ToString(); // ou para converter n+""
        }
  void BtnZerarClick(object sender, EventArgs e)
        {
            this.txtN.Text = 0.ToString();
        }
   void BtnMilionClick(object sender, EventArgs e)
        {
            int n;
            
            n=Convert.ToInt32(this.txtN.Text);
            n= n + 1000000;
            this.txtN.Text=n.ToString();
        }


using System.Globalization;
"F3", CultureInfo.InvariantCulture

Math.Pow(x,2)
Faz a função exponencial

concatenar = agrupar
Ex: ( "5" + "7" = "57") !=  (5 + 7 = 12)


"this.txt.AppendetText" == "this.txt.Text +=" 
Environment.newline // pula linha


pseudo - compilado
framework te dá portabilidade


  Button b = (Button)sender;
  b.Text = "Lindo"

---

New - aloca espaço na memória 
cor = 10
int cor += 1 ( VOCÊ NÃO CONCATENA,vc soma a variável com o que estiver depois do "=" ,no caso vai ficar 10 + 1)

ComboBox - lista dinâmica = vetor que cresce em tempo de execução e não tempo de compilação, mas sua memória não é continua é alocada
---
Enter é quando coloca o foco e live é quando tira o foco.

Label = lbl
TextBox = txt
CheckBox = chk
comboBox = cmb
Listbox = lst
---

Key down
if (!((Char.IsDigit((char)e.KeyValue)) || (e.KeyCode == Keys.Back)))
{
e.SuppressKeyPress = true;
}


Lista Dinâmica
É um conjunto de variáveis do mesmo tipo, com tamanho variável em tempo de execução.
 Declaração
   list<tipo> nomelista;
 Exemplo
   list<int> lista;


Instanciação
 nomelista = new list<tipo>();
 Exemplo
    lista = new list<int>();
 uso -> como vetor
    lista[0] = 7;
     ° índice [0,lista.count-1]
 inclusão 
    lista.add(valor)
 remoção
    lista.removeAt(posição)
 ordenar
    lista.sort()

Função (15/05/18)
  É um bloco de código que realiza uma tarefa específica, pode receber dados através dos parâmetros e retornar pelo seu tipo.

Sintaxe
 Modificador tipo nome(par1,par2)
 {
  bloco de codigo;
  [return(valor);]
 }

Exemplo
 public int soma (int A, int B)
 {
  int R;
  R = A + B;
  return(R);
 }

Função Recursiva chama a sí mesma, e deve ter m teste de parada.
Os parâmetros podem ser passados por:
Valor - a função trabalha com a cópia do valor passado.
Referência - a função trabalha com o endereço da variável passada.

testar - vê se tem erro
debugar - verifica onde está o erro

05/06
Encapsulamento    - public,private...
Polimórfico é quando tem o mesmo nome (normalmente funções), mas funções diferentes
Arquivo é um ponteiro para o disco rígido 

31/07

Driver
Protocolo
Socket
TCP/IP

Driver: 
Pacote de bibliotecas
Bibliotecas dinâmicas (dll - Ligação Dinamica).
Biblioteca static [Ex: stdio.h]

Socket:
São dois tubos de comunicação. um de leitura e outra de escrita, liga a aplicação ao servidor.

Protocolo:
Regras de comunicação.

Servidor -> presta um serviço.
Computador tem portas por prestar vários serviços, tem 64K portas.

Objeto instanciado:
Ao criar uma variável o computador aloca espaço na memoria para guardar um ponteiro, então ele vale null ( Null = ponteiro vazio )
Ex: quando vc comprou o apartamento vc só tem a planta dele, quando ele é construído vc pode alterar ele.
Sempre que testar um Null que ele seja o primeiro

Ponteiro:
Ponteiro guarda endereço de memória.
Variáveis guardam valores das quais elas foram criadas.

Interface Gráfica usa Messabox.show, fora dela utiliza Throw.

ORM (Mapeamento Relacional a Objeto)

Função Polimórfica tem funções com o mesmo nome e fazem a mesma coisa, mas utilizam variáveis de entrada de tipo diferente.

Persistência:
Pega seu objeto numa região volátil (RAM) e coloca em uma memoria estável (Disco[mesmo o banco não sendo )


Função construtor:
tem o mesmo nome da classe e é o primeiro a ser executado quando o objeto um novo objeto é instanciado.

Função destrutor:
Não existe no C# por ter o GC que já limpa as coisas caso não tenha mais função
Garbejo Colector (GC)

bb.comando.Parameters.AddWithValue("@n",this.nome) // deixa a desejar por não ter como escolher o tipo, como no Add.

Cast não uma conversão é uma formatação
Busca com expressão lógica 

---
16/10

Socket

     É um canal de comunicação entre clientes e servidores, por isso existe o socket client e o socket server. O sockt cliente recebe IP e porta do "lugar" em que está o servidor. O socket server só precisa da porta e a utiliza para receber chamados.
     Com base nos sockets são criados streams (de leitura e escrita), que são objetos que enviam e recebem pacotes através dos sockets.

(duto de conexão entre duas máquinas)

ORM (Object Relational Mapping)

É o mapeamento de uma base de dados em um conjunto de classes. Este mapeamento pode ser redirecional ou seja, com a base pronto as classes são criadas ou com as classes prontas a base é criada.

LinQ - Language Integrated Query.

---
  30/10
Thread                     

É um processo leve, que roda de forma "quase" independente do processo que o originou. Assim, se oi processo 1 que roda no processador P1 dispara o thread T1, este ode rodar em qualquer processador da máquina. Por isto o thread está envolvido em programação paralela.

Conceitos Básico
Programação Paralela;
Programação concorrente;
Processador Hiper-Threading;
Pipeline;
Região Crítica;
Gerenciador de Processos (SO).

Processo:
Código Objeto -> Dados-> Pilha -> <- Heap.

---

if (anoN < ano){
    idade = ano - anoN;
        if (mesN > mes) idade--;
        if (mesN == mes){
            if (dataN > data) idade--;
        }
} else (data invalida);


Duvida:
https://msdn.microsoft.com/pt-br/library/ms131058(v=vs.110).aspx?cs-save-lang=1&cs-lang=csharp#code-snippet-2

