
Paradigmas da Programação

Algoritmo != programação?

FrameWork

Shell

RPC (procedimento remoto)

IPC(comunicação entre processos)

Website 

Desktop

Aplicações nativas

Refatoração- 

Clean could

SOLID- são 5 princípios utilizados na programação orientada a objetos tornando-a mais fácil de manter e evoluir, sendo eles:
	Single responsibility principle (SPR) ~ principio da responsabilidade única
	Open-closed principle (OCP) ~ principio aberto-fechado
	Liskov substitution principle (LSP)~ principio da substituição de Liskov
	Interface Segregation principle (ISP)~ principio da segregação de interface
	Dependency inversion principle (DIP)~ principio da inversão da dependência

	  SPR- uma classe (método ou função- tudo que é responsável por executar uma ação) deve ter um e somente um motivo para mudar, essa classe deve ser especializada em um único assunto e possuir apenas uma responsabilidade dentro do software, evitando as chamadas God Class, classes que fazem de tudo, ou seja, possuem muitas funções em todo o software.  Assim uma classe não poderia, por exemplo, lidar com as informações, exibição e manipulação dos dados, o que pode gerar alguns problemas como falta de coesão, alto acoplamento, dificuldade de gerar testes automatizados, dificuldades de reutilizar códigos.
	
	  OCP- objetos ou entidades devem estar abertos a extensão, mas fechados para modificação, quando um novo recurso ou comportamento precisa ser adicionado ao software é necessário estender e não alterar o código fonte original.
	
	  LSP- uma classe derivada deve ser substituível por sua classe base.
	
	  ISP- uma classe não deve ser forçada a implementar interfaces e métodos que não irão utilizar, é melhor utilizar interfaces mais especificas ao em vez de utilizar uma genérica.
	
	  DIP- devemos depender de abstrações e não de implantações, "módulos de alto nível não devem depender de módulos de alto baixo nível, ambos devem depender da abstração e que abstrações não devem depender de talhes, detalhes devem depender de abstrações", Uncle Bob. É comum confundir a inversão de dependência com a injeção de dependência, as duas têm objetivos de desacoplar o código, mas são coisas diferentes.
	
https://www.youtube.com/watch?v=mkx0CdWiPRA&ab_channel=C%C3%B3digoFonteTVREST-

Design Patterns (Padrões de projeto)- focam na reutilização de soluções já feitas, achando similaridades entre os erros para não ter que sempre refazer as soluções, para implementar um padrão é necessário saber os conceitos que está por trás dele, para ver se faz sentido naquela aplicação, são aplicados normalmente durante a refatoração. Se tornou muito famoso com a programação orientada a objetos, já que a padronização de códigos permite que sejam mais legíveis e expansíveis, um grupo de 4 pessoas chamados de GoF criaram um livro com 23 padrões de projetos e dai surgiu a divisão de 3 grupos os Creational Patterns (padrões de criação), trata da construção do objeto e de referência, esse grupo sustenta o principio de programação para Interface e não para implementações. Structural Patterns (padrões estruturais), trata da relação entre os objetos e como eles interagem entre si para formarem grandes objetos complexos. Behavioral Patterns (padrões comportamentais), tratam da comunicação entre os objetos especialmente em termo de responsabilidade e algoritmo.

https://www.electronjs.org/
https://blog.rocketseat.com.br/electron-construindo-aplicacoes-desktop-com-javascript/


https://pt.wikipedia.org/wiki/Comunica%C3%A7%C3%A3o_entre_processos
https://pt.wikipedia.org/wiki/Chamada_de_procedimento_remoto
https://en.wikipedia.org/wiki/Shell_(computing)#:~:text=In%20computing%2C%20a%20shell%20is,computer's%20role%20and%20particular%20operation.)



TOMCAT
LINGUAGEM ELIXIR

---
Paradigmas
Funcional -
Objeto -
Classe - 
XXX -

---
Bad Smells e Clean code

SonarLint VsCode para code smells - https://linuxuserind.medium.com/sonarlint-vs-code-extension-for-code-quality-c2c5186f5680
https://rules.sonarsource.com/javascript/type/Code%20Smell



https://levelup.gitconnected.com/why-i-keep-failing-candidates-during-google-interviews-dc8f865b2c19
https://artificialcorner.com/youre-using-chatgpt-wrong-here-s-how-to-be-ahead-of-99-of-chatgpt-users-886a50dabc54
https://iamalexmathers.medium.com/14-things-i-wish-i-knew-at-25-now-that-im-38-13daabe0c9cd

---
Curiosidades com matemática - https://code.visualstudio.com/blogs/2021/09/29/bracket-pair-colorization

alterar cor das bracket - https://dev.to/killshot13/configuring-vscode-colorized-brackets-5733
```
"workbench.colorCustomizations": {
        "editorBracketHighlight.foreground1": "#5bb3b3",
        "editorBracketHighlight.foreground2": "#fac863",
        "editorBracketHighlight.foreground3": "#75db56",
        "editorBracketHighlight.foreground4": "#e76b6b",
    }
```

vertical ruler  in vscode https://stackoverflow.com/questions/29968499/vertical-rulers-in-visual-studio-code

---

LER: https://www.sonarsource.com/docs/CognitiveComplexity.pdf
LER: http://cleancoder.com/products

---
