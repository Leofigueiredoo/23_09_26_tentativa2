CREATE TABLE Usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(15) NOT NULL
);
-- Inserir um usuário
INSERT INTO Usuarios (nome, telefone) VALUES ('João', '(11) 1234-5678');

-- Inserir outro usuário
INSERT INTO Usuarios (nome, telefone) VALUES ('Maria', '(21) 9876-5432');

-- Inserir mais usuários
INSERT INTO Usuarios (nome, telefone) VALUES ('Carlos', '(31) 5555-9999');
INSERT INTO Usuarios (nome, telefone) VALUES ('Ana', '(41) 7777-1234');

