**Código Final**

```
from scipy.optimize import linprog 
obj = [-2, -3] 
lhs_ineq = [[3, 3], 
	    [1.5, 3], 
	    [5, 3]] 
rhs_ineq = [210, 
	    180, 
	    330] 
bnd = [(0, float("inf")), 
       (0, float("inf"))] 
opt = linprog(c=obj, A_ub=lhs_ineq, b_ub=rhs_ineq, 
               A_eq=lhs_eq, b_eq=rhs_eq, bounds=bnd, 
               method="revised simplex") 
opt
```

### Roteiro do vídeo
**Título: Resolvendo problema de otimização com o uso da biblioteca SciPy.optimize e a função linprog**

Iremos resolver um problema de otimização em programação linear  usando a biblioteca SciPy do Python. 
Nesse começo falaremos sobre o que é o Python e o que é a sua biblioteca SciPy, caso você já possua essa noção 
e queira ir direto para o problema e resolução, basta avançar o vídeo, estaremos deixando as marcações de tempo na barra de navegação.

**O que é Python?**
O Python é uma linguagem de programação de alto nível, interpretada e orientada a objetos. Ele é bastante popular entre os programadores, pois é fácil de aprender e possui uma sintaxe clara e concisa. Além disso, é uma linguagem muito versátil e pode ser usada para diversos fins, desde a criação de sites até a análise de dados e inteligência artificial.

**O que é o SciPy?**
SciPy é uma das biblioteca de software livre para Python, que fornece algoritmos e ferramentas para solucionar problemas de ciência e engenharia. Ele contém diversas sub-bibliotecas, cada uma com suas próprias funções específicas. E hoje, vamos utilizar a sub-biblioteca de otimização para resolver problemas de programação linear.

**Como instalar o Python e VsCode?**
Vamos começar instalando o Python pelo site oficial. Pronto, agora iremos baixar o VsCode para poder escrever nossos programas em Python, o VsCode é simplesmente um famoso editor de texto usado no mundo da programação, iremos baixar o VsCode pelo site oficial e configurar.
Agora com o VsCode instalado e aberto, iremos clicar na aba de extensão pesquisaremos por pytho, iremos instalar essa extensão (mostrar na tela), agora só falta testar se está tudo funcionando vamos criar nosso primeiro programa. 
Iremos criar um arquivo chamado "programa.py" e em seguida iremos escrever nossa primeira linha print("ola mundo"), agora é só executar é para aparecer na parte de baixo um terminal com noss mensgem.

**Como instalar o SciPy?**
Existe algumas formas, a que iremos utilizar é pelo terminal esse modo de instalação é chamado de pip.
Vamos abrir o terminal e digitar o seguinte comando:
```
python -m pip install -U scipy
```
Depois de que terminar a instalação vamos testar para ver se deu certo digite o seguinte comando
```
print(scipy.__file__)
```
ele vai msotrar o caminho que foi instalado o Scipy.

Obs: Caso o comando python não esteja dando certo e a sua instalação do python foi concluida com exito, verifique se no momento de instalação do python você tenha instalado em local de armazenamento, caso tenha feito isso, precisará informar no terminal qual é o caminho em que o python está instalado, ao executar um programa .py no VsCode ele já encontra o caminho do python, então ele mostrará algo como exemplo:
```
& D:/Users/ale/AppData/Local/Programs/Python/Python39/python.exe "c:/Users/ale/Área de Trabalho/programa.py"
```


**Apresentação do problema**

fazer uma breve leitura do enunciado e mostrar como ficaria o modelo matemático.

Max z = 2 P1 + 3 P2 (verbo de otimização)
 Sujeito à: (restrição do problema)
  3  P1 +  3 P2 ≤ 210 
 1,5 P1 +  3 P2 ≤ 180
  5  P1 +  3 P2 ≤ 330
 P1, P2 ≥ 0 (restrição de não negativa)

---------------------------------------------

O nosso problema é de máximo e o lingprog, até o presente momento, apenas trabalha com problemas de minimização e não permite restrições de desigualdade com sinal de maior ou igual (≥), então o que precisaremos fazer é modificar nosso modelo matemático para utilizar a função.
Começaremos transformar nosso verbo de otimização de máximo para mínimo, o que mudará é que o resultado de máximo será o mesmo de mínimo,  só terá o sinal invertido. Para isso precisamos multiplicar -1 apenas a linha do máx e as linhas que possuem o sinal de maior ou igual (≥). 

Min -z = - 2 P1 - 3 P2
 Sujeito à:
  3  P1 +  3 P2 ≤ 210 
 1,5 P1 +  3 P2 ≤ 180
  5  P1 +  3 P2 ≤ 330
 P1, P2 ≥ 0

Só relembrando esse sistema é equivalente ao original e terá a mesma solução.
-------------------------------------------

**Começando a programar**

Então com nosso modelo matemático em mãos vamos transcrever para o programa para que ele possa solucionar.
Primeiro precisamos informar que iremos usar a biblioteca scipy.optimize a função linprog.

```
from scipy.optimize import linprog
```

Agora começaremos a transformar nosso sistema de uma forma que o lingprog possa receber e resolver. Para isso vamos passar nossos coeficiêntes da nossa função objetivo (a que possui o verbo de otimização) e em seguida os nossos limites.

```
obj = [-2, -3]

lhs_ineq = [[3, 3],
	    [1.5, 3],
	    [5, 3]]

rhs_ineq = [210,
	    180,
	    330]
```

Tenha cuidado ao declarar as colunas, as colunas do lado direito devem ser declaradas respeitando a mesma ordem
das colunas declaradas do lado esquerdo. Ou seja, no nosso problema a linha "3  P1 +  3 P2 ≤ 210" está declarada
exatamente na mesma posição (mostrar com o mouse)

Obs: caso no seu problema tenha uma linha com o sinal "=", como por exemplo -x + 5y = 15, a implementação
será lhs_eq = [[-1,5]] e  rhs_eq = [15] para um exemplo mais detalhado olhar a bibliografia na descrição.

```
bnd = [(0, float("inf")),
       (0, float("inf"))]
```

Por padrão o linprog deixa os limites de zero ao infinito positivo, mas acho importante essa linha, mesmo sendo redundante, pois permite uma melhor visualização de que tudo realmente foi declarado e está como planejamos.

```
opt = linprog(c=obj, A_ub=lhs_ineq, b_ub=rhs_ineq,
               A_eq=lhs_eq, b_eq=rhs_eq, bounds=bnd,
               method="revised simplex")
opt
```

c = se refere aos coeficientes da função objetiva
A_ub e b_ub = se referem respectivamente aos coeficientes da esquerda e direita das restrições de desigualdade.
> A_eq e b_eq = se referem aos coeficientes da igualdade
bounds = se refere aos limites (bounds on the decision variables.)
method = é o métodod escolhido na programação linear que será usado para resolver, tendo 3 opções
[mehod="interior-point"; method="revised simplex", method="simplex"]

**Entendendo o Retorno**

explicar o que ele mostra no retorno

Bibliografia:
https://docs.scipy.org/doc/scipy/reference/optimize.html#optimization
https://realpython.com/python-scipy-cluster-optimize/
https://realpython.com/linear-programming-python/
https://medium.com/porto-seguro/otimiza%C3%A7%C3%A3o-linear-e-inteira-com-python-e-pulp-c42404ba9a5c
https://datalivre.medium.com/quebrando-a-banca-com-python-probabilidade-e-estatistica-3e6ba6d09065