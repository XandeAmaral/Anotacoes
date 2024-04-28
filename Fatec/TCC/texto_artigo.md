Título: Inteligência artificial como ferramentas para detecção de discursos de ódio em textos de redes sociais: uma análise da precisão e imparcialidade.

Resumo v.01
Este trabalho tem o intuito de criar uma API para receber um texto e retornar um JSON informando se o texto possui ou não algum trecho verificado como um possível discurso de ódio, podendo receber após o envio um retorno se a avaliação foi condizente ou não. Com um número de retornos sendo negativo, o trecho entra em uma lista chamada de “análise” onde profissionais tem acesso para julgar se aquele tipo de trecho e no contexto utilizado é considerado um discurso ofensivo ou não. É necessário ter uma quantidade X de aceitações para o trecho ou ser removido ou voltar a ser considerado discurso de ódio
Plavras-Chaves: Comunicação não-violenta; Inteligência Artificial; Redes Sociais.

Resumo v.02
Este trabalho propõe apresentar uma ferramenta para aplicativos que utilizam chats ou comunicação entre usuários aplicarem, auxiliando na diminuição de discursos de ódio ao analisar textos escritos em português e retornar se há algum indício de uma possível interpretação ofensiva. Para realização do projeto, uma inteligência artificial junto a uma base de dados criada analizam todo o texto e retornam caso em algum momento um discurso de ódio tenha sido encontrado.

Resumo V.03



Com o crescente aumento de necessidades de controle de conteúdos em mídia social, os paises e a humanidade como um todo percebeu o impacto que discursos de ódio trazem para as pessoas, que não somente pode ferir de forma emocional mas levar a incidentes como os genocidios que ocorreram nos ultimos anos ( referenciar ataque a islamicos, negros e crianças). Pensando nisso a ONU em 2019 em uma reunião internacional solta um plano de combate a violência difamada por todas as redes sociais, pedindo ajuda a todos os paises membros, empresas e individuos; o Brasil não ficou de fora em 2023 começou o debate sobre a PL XXXXX, que tem o intuito de discursos como será feita a fiscalização dos meios sociais para abater essa crescente desenfreada do ódio. Mas um problema ainda persiste, como será feito o controle sem impactar na liberdade do individuo? Com quem ficará o controle de tais regulações, estado, empresa privada, governo?
Com base em todos esses fatores proponho nesse trabalho a criação de uma IA democrática para analisar de discurso de ódio, com código aberto e acessada através de uma API, assim a IA receberia apenas um texto e retornaria se nele há ou não a presença de algum possível trecho ofensivo. Utilizando API o sistema poderia ser implementado por todos os programas com acesso a internet e que possuam textos, se tornando um ferramenta de fácil implementação e ficando a cargo da empresa a responsabilidade do que fazer após a reposta da API, sendo essas algumas das possibilidades:
não enviar a mensagem e alertar ao usuário que o texto seja revisado (não aconselhado, pois é uma forma de censura)
enviar a mensagem e alertar em tela que pode existir um possível trecho ofensivo na mensagem (aconselhado)

Definição discurso de ódio e o porque o debate sobre cresceu e vem se tornando importante, trazer as referências dos aumentos de caso durante a pandemia e como isso tem levado pessoas ao suicidio e a genocidios. Trazer a referencia do youtube de que geralmente as pessoas tendem a ter um olhar mais complacente do que odioso as coisas, mas os sistemas as influẽnciam.

O que seria uma IA democrática. É um termo recente e pouco utilizado, alguns dos autores que discutem sobre o tema são Glitzbertungen, que diz que a ...

**Ideia de funcionamento**
Existem 5 atores no projeto, primeiro "Cliente Usuário", "Cliente Site", "Cliente Dev", "Administrador", "Jurado".
Administrador são a equipe que tem permissão para alterar código fonte.
Cliente site são as pessoas que acessam o site para votação.
Jurado são além de cliente site, como também possui um peso de voto maior.

O projeto possuirá um site em que mostrará a ideia do projeto, existirá as abas de "se conscientize", "saiba mais sobre o projeto", "fórum", "guia de implementação", "relatórios" e "sistema de votação".
Ao abrir a aba do sistema de votação haverá algumas novas opções: 
	pesquisar por jurado: Nome, Email, Data Nasc; 
	pesquisa por palavra: Palavra, Tipo (nesse trabalho não interessa a qual "categoria" pertence a ofensa, apenas que é uma ofensa), Status - removido, acrescentado, em análise -, data, palavras removidas recentemente, palavras adicionadas recentemente;
	palavras em análise;
	gráfico de uso e mensagens capturadas como ofensiva nas últimas horas;

Sistema de votação
Ao selecionar uma palavra, haverá a indicação de quantas pessoas votaram numa escala de likert e se a palavra é ofensiva ou não. Caso seja uma palavra que haja discussão de ser ou não ofensiva simplesmente será mostrado na tela o porquê. Junto também haverá um relatório de histórico de alteração da palavra.

BDA (banco relacional?)
Palavra (id, palavra, similares, status, votos, aberto a votação?)
a tabela de status e votos terão que ser uma tabela aperte pois poderam ter vários status ao longo da história e os votos são de várias pessoas.


Arquitetura da IA

Arquitetura da API

Arquitetura do Site

Termo de uso (lei LGPD)