## COMANDO LINUX PARA CRIAR BANCO DE DADOS MYSQL

### sudo docker run -p 3306:3306 -v /tmp:/tmp --name teste-api --detach -e MYSQL_ROOT_PASSWORD="apiteste" -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=social -d mysql/mysql-server:latest --lower_case_table_names=1 --init-connect='GRANT CREATE USER ON . TO 'root'@'%';FLUSH PRIVILEGES;'

## A configuração do banco de dados está no arquivo config/database.js

## Necessario executar o comando npx sequelize-cli db:migrate
