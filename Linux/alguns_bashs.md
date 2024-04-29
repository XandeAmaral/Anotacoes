
```
#!/bin/bash

diretoria_atual=$(pwd)
script_path=$(dirname "$0")

echo "Diretorio atual: $diretoria_atual"
echo "script_path: $script_path"
```


```
#!/bin/bash

t=$(ls | grep -E 't[0-9]+\.sql')

#for f in /home/LinkedRH0322/Documentos/Lab/SQLScripts/$t; do
cd /home/LinkedRH0322/Documentos/Lab/SQLScripts/
for f in $t ; do
  #tras o nome do arquivo completo exemplo.sql
  echo $f
  #tras o nome do arquivo sem o final .sql
  echo "${f%.*}"
done;
```

ls -t /var/www/html/ | grep -e 'ng' | head -n 1

User confirmation in shell script - https://stackoverflow.com/questions/1885525/how-do-i-prompt-a-user-for-confirmation-in-bash-script

Returning value script - https://stackoverflow.com/questions/8742783/returning-value-from-called-function-in-a-shell-script

Access variable in a script - https://stackoverflow.com/questions/63349333/how-to-access-a-variable-in-a-shell-script

shell script tomcat - https://www.linkedin.com/pulse/automate-your-tomcat-server-shell-scripting
wait tomcat start - https://stackoverflow.com/questions/19155549/wait-till-tomcat-startup-is-over
wait serve in localhost:8080 - https://stackoverflow.com/questions/68848963/nodejs-how-to-wait-for-server-start-at-http-localhost8000
