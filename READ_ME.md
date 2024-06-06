
1. Para instalção do MYSQL no DOCKER:
docker pull mysql

2. Para executar o banco de dados, rode o script abaixo
docker run --name atv -e MYSQL_ROOT_PASSWORD=123 -p 3306:3306 -d mysql

3. Execute os scripts abaixo de INSERT:

CREATE DATABASE universidade;

USE universidade;

CREATE TABLE Pessoas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    categoria VARCHAR(100),
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20)
);

INSERT INTO Pessoas (categoria, nome, email, telefone) VALUES 
('Professor', 'RENATO GARCIA DE CAMPOS', 'renato.campos@unoeste.edu.br', '1234-5678'),
('Professor', 'MÁRIO AUGUSTO PAZOTI', 'mario@unoeste.br', '1122-3178'),
('Professor', 'DIONE JONATHAN FERRARI', 'dferrari@unoeste.br', '8721-1322'),
('Aluno', 'CRISTIANO DE CARVALHO PARANGABA', 'cparangaba@unoeste.edu.br', '8765-4321'),
('Aluno', 'EVANDRO PRATES SANTOS', 'vandoo.ps@gmail.com', '1415-5678'),
('Aluno', 'FABIANO PEREIRA FUZETTO', 'fabiano@operative.com.br', '1731-2322');

4. Para executar a aplicação, rode o script abaixo:

docker run --name atv2 -e MYSQL_ROOT_PASSWORD=123 -p 3307:3306 -d mysql

5. Abra a URL:
http://localhost:3001/
http://localhost:3001/liveness
http://localhost:3001/readiness
http://localhost:3001/consulta-dados
http://localhost:3001/redirect

6. GitHub
https://github.com/carvalhotkeys/unoeste-atv-4


PRECISA INSTALAR NO TERMIAL
npm install mysql2

SE TIVER PROBLEMA COM CONEXAO entre o banco e o mysql:

7. Acessar o Contêiner MySQL
Primeiro, acesse o contêiner MySQL:

docker exec -it atv mysql -u root -p
Digite a senha 123 quando solicitado.

8. Alterar o Método de Autenticação do Usuário
Dentro do MySQL shell, altere o método de autenticação do usuário root para caching_sha2_password (corrigido):

ALTER USER 'root'@'%' IDENTIFIED WITH caching_sha2_password BY '123';
FLUSH PRIVILEGES;