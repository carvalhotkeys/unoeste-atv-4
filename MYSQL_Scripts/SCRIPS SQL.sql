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



SELECT * FROM Pessoas