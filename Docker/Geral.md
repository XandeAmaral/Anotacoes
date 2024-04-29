Docker manual - https://docs.docker.com/desktop/

docker in nutshell - https://medium.com/dev-jam/docker-in-a-nutshell-f2e315211195

a brief about docker - https://www.docker.com/blog/getting-started-with-docker-desktop/

Docker run vs docker start - https://cursos.alura.com.br/forum/topico-docker-run-x-docker-start-46010

Get docker container id - https://stackoverflow.com/questions/34496882/get-docker-container-id-from-container-name

instanciar em multiplas instancias de uma imagem em portas diferentes - https://pt.stackoverflow.com/questions/390720/como-executar-v%C3%A1rias-inst%C3%A2ncias-de-uma-imagem-em-portas-diferentes

https://www.zup.com.br/blog/o-que-e-docker-e-conteiner#:~:text=Docker%20%C3%A9%20uma%20ferramenta%20Open,possa%20entregar%20um%20software%20rapidamente.

docker build and buildx - https://docs.docker.com/build/architecture/#install-buildx

Overview e diferença de container e vm - https://www.docker.com/resources/what-container/

Container
what are containerized applications? - https://cloud.google.com/discover/what-are-containerized-applications

historia dos containers - https://blog.aquasec.com/a-brief-history-of-containers-from-1970s-chroot-to-docker-2016

O que é container - https://esr.rnp.br/administracao-de-sistemas/containers-docker-como-utilizar/


---
docker videos

docker na prática Canal Ilhama -  https://www.youtube.com/watch?v=znMmlL28b3Q
docker networking - https://www.youtube.com/watch?v=bKFMS5C4CG0
docker in 1 hour - https://www.youtube.com/watch?v=pg19Z8LL06w
kubernets in 1 hour -  https://www.youtube.com/watch?v=s_o8dwzRlu4

---
primeiros passos
https://www.freecodecamp.org/portuguese/news/um-guia-para-iniciantes-em-docker-como-criar-sua-primeira-aplicacao-com-o-docker/
https://4linux.com.br/primeiro-passos-container-docker/

documentação docker run
https://docs.docker.com/engine/reference/run/#detached--d

Comunicação entre containers
https://www.tutorialworks.com/container-networking/
https://docs.docker.com/network/network-tutorial-standalone/#other-networking-tutorials

container tomcat
https://charith.xyz/docker/accessing-tomcat-manager-of-an-app-deployed-on-docker/
https://medium.com/@vishal.sharma./deploy-a-sample-war-java-application-on-docker-25729d4840d5
https://learn.microsoft.com/en-us/azure/service-fabric/service-fabric-get-started-tomcat
https://cloud.google.com/architecture/migrate-tomcat-to-containers-with-migrate-to-containers
Connection tomcat and mysql - https://stackoverflow.com/questions/29679661/connecting-tomcat-webapp-running-in-docker-container-to-mysql

Tomcat e eclipse
https://training.play-with-docker.com/java-debugging-eclipse/
https://www.youtube.com/watch?v=BxUWYN1JgmY
https://crunchify.com/step-by-step-guide-to-setup-and-install-apache-tomcat-server-in-eclipse-development-environment-ide/
https://www.theserverside.com/video/How-to-test-and-deploy-WARs-with-Tomcat-and-Eclipse
https://stackoverflow.com/questions/46153340/setting-up-java-svn-eclipse-tomcat-development-environment-with-docker
https://coderanch.com/t/686017/ide/Eclipse-Developing-Tomcat-Application-Docker

exemplo de desenho de arquitetura
https://docs.oracle.com/en/solutions/deploy-tomcat-mysql/index.html#GUID-317E7AF3-554B-440C-9840-740E35AA9975


---
docker composition

docker compose para iniciar multiplas instancias de uma imagem - https://stack.desenvolvedor.expert/appendix/docker/compose.html
https://herewecode.io/blog/a-beginners-guide-to-docker-how-to-create-a-client-server-side-with-docker-compose/
workdir - https://www.macoratti.net/20/09/docker_wordir1.htm
livro bom - https://livro.descomplicandodocker.com.br/chapters/chapter_07.html
difference betwwen expose and prots - https://www.baeldung.com/ops/docker-compose-expose-vs-ports

---
config mssql dockerfile - https://learn.microsoft.com/en-us/sql/linux/sql-server-linux-docker-container-configure?view=sql-server-ver16&pivots=cs1-bash
example mssql dockerfile - https://github.com/twright-msft/mssql-node-docker-demo-app/blob/master/Dockerfile

Nginx em container
config nginx em docker - https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Docker-Nginx-reverse-proxy-setup-example
proxy_pass cannot have URI part in location - https://stackoverflow.com/questions/53353572/proxy-pass-cannot-have-uri-part-in-location-given-by-regular-expression
nginx container how use localhost for other containers
https://stackoverflow.com/questions/24319662/from-inside-of-a-docker-container-how-do-i-connect-to-the-localhost-of-the-mach
https://stackoverflow.com/questions/29076194/using-add-host-or-extra-hosts-with-docker-compose
https://stackoverflow.com/questions/62648724/nginx-reverse-proxy-not-finding-other-internal-docker-container-using-hostname
https://forums.docker.com/t/nginx-does-not-resolve-hostname/115859
https://forums.docker.com/t/nginx-swarm-redeploy-timeouts/68904
https://forums.docker.com/t/trying-to-make-to-different-hosts-of-the-same-nginx-container-to-communicate/44256
https://github.com/docker/for-linux/issues/676
https://serverfault.com/questions/1147982/configure-nginx-running-locally-to-server-the-port-running-docker-container-loca
add host flag for dns mapping - https://www.cloudbees.com/blog/using-the-add-host-flag-for-dns-mapping-within-docker-containers


---

Docker com tomcat e eclipse

https://training.play-with-docker.com/java-debugging-eclipse/
https://www.youtube.com/watch?v=BxUWYN1JgmY
https://crunchify.com/step-by-step-guide-to-setup-and-install-apache-tomcat-server-in-eclipse-development-environment-ide/
https://www.theserverside.com/video/How-to-test-and-deploy-WARs-with-Tomcat-and-Eclipse
https://stackoverflow.com/questions/46153340/setting-up-java-svn-eclipse-tomcat-development-environment-with-docker
https://coderanch.com/t/686017/ide/Eclipse-Developing-Tomcat-Application-Docker
https://docs.docker.com/build/architecture/
https://www.appsloveworld.com/eclipse/100/12/tomcat-and-java-sdk-problem




ultimos links

nginx 499 - https://wetopi.com/error-code-499-client-closed-request/
volumes - https://docs.docker.com/storage/volumes/
copy - https://docs.docker.com/engine/reference/builder/#copy
wait a container x before starting y - https://stackoverflow.com/questions/31746182/docker-compose-wait-for-container-x-before-starting-y
https://blog.4linux.com.br/docker-compose-explicado/
https://www.devmedia.com.br/definicao-de-papeis-no-processo-de-engenharia-de-software-revista-engenharia-de-software-magazine-53/26290
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
https://github.com/NicholasBoll/cypress-pipe
https://refactoring.guru/refactoring
https://docs.npmjs.com/cli/v8/commands/npm-install
https://github.com/orgs/Homebrew/discussions/3315
https://ohmyposh.dev/docs/installation/linux
https://262.ecma-international.org/6.0/#sec-ordinary-object-internal-methods-and-internal-slots-enumerate
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
https://developer.mozilla.org/pt-BR/docs/Web/API/URL/hash
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/#6-bound-function
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#objects_vs._maps