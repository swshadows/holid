# holid

> 🏝 Uma API de feriados e datas comemorativas

## Inicialização

<div align=center>

### Requisitos

[Node.js](https://nodejs.org/en/)

</div>

- Use os comandos para clonar o repositório

  ```
    git clone https://github.com/swshadows/holid.git
    cd holid
  ```

- Baixe as requisições do projeto com o comando `npm install`
- Inicialize o projeto com o comando `npm start`

### Endpoints

| 🎯 Endpoint | 🌎 Método HTTP | 📄 Descrição                                                 |
| ----------- | -------------- | ------------------------------------------------------------ |
| `/`         | `GET`          | Retorna todos os meses e dados relacionados                  |
| `/:id`      | `GET`          | Retorna dados do mês com `:id` relacionado (ex: 1 = Janeiro) |
| `/ref`      | `GET`          | Retorna a referência para as datas                           |
