
# Projeto de Banco de Dados MySQL com Docker

## Visão Geral

Este projeto fornece um tutorial passo a passo para configurar um banco de dados MySQL usando Docker, incluindo a criação de tabelas e inserção de dados iniciais. 

## Pré-requisitos

- Docker instalado na máquina.

## Passos para Configuração

### 1. Puxar Container do MySQL

Para poder usar o banco, execute o comando:

```sh
docker pull mysql
```

#### 1.1 Verificar se o MySQL foi baixado

```sh
docker images
```

### 2. Criar Conexão

Execute o comando abaixo para criar a conexão:

```sh
docker run --name atv4 -e MYSQL_ROOT_PASSWORD=123 -p 3306:3306 -d mysql
```

#### 2.1 Entrar no banco

Use a senha `123` depois de executar o comando abaixo:

```sh
docker exec -it atv4 mysql -u root -p
```

### 3. Conexão Criada

Entre no seu MySQL com as seguintes credenciais:

- Hostname: `127.0.0.1`
- Port: `3306`
- Username: `root`
- Password: `123`

### 4. Criar seus Scripts das Tabelas

No MySQL, use os seguintes comandos:

```sql
USE sys;

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
('Aluno', 'CRISTIANO DE CARVALHO PARANGABA', 'cparangaba@unoeste.edu.br', '8765-4321');

SELECT * FROM Pessoas;
```

### 5. Puxar a Imagem do Docker Hub

Use o comando para puxar a imagem:

```sh
docker pull carvalhotkeys/atv4:latest
```

### 6. Rodar os Scripts e Fazer o Projeto Funcionar

```sh
docker run --name atv4Banco -p 3001:3001 -d carvalhotkeys/atv4:latest
```

### 7. Acessar os Links

- [http://localhost:3001/](http://localhost:3001/)
- [http://localhost:3001/consulta-dados](http://localhost:3001/consulta-dados)
- [http://localhost:3001/liveness](http://localhost:3001/liveness)
- [http://localhost:3001/readiness](http://localhost:3001/readiness)
- [http://localhost:3001/redirect](http://localhost:3001/redirect)

## Caso Você Já Tenha Instalado Todos os Containers e Só Quer Rodar

#### 1. Iniciar o Container MySQL

Se você já criou o container `atv4` anteriormente, pode iniciá-lo novamente usando o comando:

```sh
docker start atv4
```

#### 2. Caso o Container Não Tenha Sido Criado Anteriormente

Use o comando de criação que você mencionou:

```sh
docker run --name atv4 -e MYSQL_ROOT_PASSWORD=123 -p 3306:3306 -d mysql
```

#### 3. Verificar se o Container Está Rodando

Para garantir que o container MySQL está rodando, use:

```sh
docker ps
```

#### 4. Acessar o MySQL Dentro do Container

Digite a senha `123` quando solicitado:

```sh
docker exec -it atv4 mysql -u root -p
```

#### 5. Puxar a Imagem do Docker Hub

Certifique-se de que você tem a imagem `carvalhotkeys/atv4:latest`. Se ainda não a puxou, use:

```sh
docker pull carvalhotkeys/atv4:latest
```

#### 6. Iniciar o Container do Projeto

Se o container `atv4Banco` já foi criado, você pode iniciá-lo com:

```sh
docker start atv4Banco
```

#### 7. Caso o Container do Projeto Não Tenha Sido Criado Anteriormente

Use o comando para criar e rodar o container:

```sh
docker run --name atv4Banco -p 3001:3001 -d carvalhotkeys/atv4:latest
```

#### 8. Verificar se o Container do Projeto Está Rodando

```sh
docker ps
```

#### 9. Acessar os Links para o Seu Projeto

- [http://localhost:3001/](http://localhost:3001/)
- [http://localhost:3001/consulta-dados](http://localhost:3001/consulta-dados)
- [http://localhost:3001/liveness](http://localhost:3001/liveness)
- [http://localhost:3001/readiness](http://localhost:3001/readiness)
- [http://localhost:3001/redirect](http://localhost:3001/redirect)
