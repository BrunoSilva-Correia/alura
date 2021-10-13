## Criando e Inserindo em uma coleção

O MongoDB diferente dos bancos relacionais, não necessita de uma estrutura previamente criada para que sejam inseridos dados

Analise a seguinte tabela:
| id | nome | data_nasccimento
| --- | --- | --- |
| 1 | Felipe | 1990/06/22
| 2 | Guilherme | 1981/09/18
| 3 | Paulo | 1979/12/31

CRIANDO-A EM SQL:
```sql
CREATE TABLE ALUNOS (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    data_nascimento DATE
)

INSERT INTO alunos VALUES ("Felipe", 19940226)
```

FAZENDO USO DO MONGO
```json
db.createCollection("alunos")

//como pode ser visto, apenas a table precisa ser definida, porem seus campos(colunas), não precisam ser definidos.
db.alunos.insert({
   "nome": "Felipe",
   "data_nascimento": new Date(1994,02,26)
})

//criando mais relacionamentos dentro do aluno Felipe
db.alunos.insert({
    "nome": "Felipe",
    "data_nascimento": new Date(1994,02,26),
    "curso": {
        "nome": "Sistemas de Informação"
    },
    "notas": [10.0, 9.0, 4.5],
    "habilidades": [
        {
            "nome": "inglês",
            "nível": "avançado"
        },
        {
            "nome": "taekwondo",
            "nível": "básico"
        }
    ]
})

//procurando alunos
db.alunos.find()
{ "_id" : ObjectId("61672e359a5852cb0275dfe4"), "nome" : "Felipe", "data_nascimento" : ISODate("1994-03-26T03:00:00Z") }
{ "_id" : ObjectId("61672e3e9a5852cb0275dfe5"), "nome" : "Felipe", "data_nascimento" : ISODate("1994-03-26T03:00:00Z"), "curso" : { "nome" : "Sistemas de Informação" }, "notas" : [ 10, 9, 4.5 ], "habilidades" : [ { "nome" : "inglês", "nível" : "avançado" }, { "nome" : "taekwondo", "nível" : "básico" } ] }

//removendo um registro
db.alunos.remove({_id: ObjectId("61672e359a5852cb0275dfe4")})
WriteResult({ "nRemoved" : 1 }) 

//incluindo mais registros
db.alunos.insert({
    "nome": "Julio",
    "data_nascimento": new Date(1954,10,15),
    "curso": {
        "nome": "Medicina"
    },
    "habilidades": [
        {
            "nome": "inglês",
            "nível": "avançado"
        }
    ]
})
db.alunos.insert({
    "nome": "Alberto",
    "data_nascimento": new Date(1969,11,05),
    "curso": {
        "nome": "Engenharia Química"
    },
    "habilidades": [
        {
            "nome": "inglês",
            "nível": "intermediário"
        }
    ]
})
db.alunos.insert({
    "nome": "Daniela",
    "data_nascimento": new Date(1995,06,11),
    "curso": {
        "nome": "Engenharia Elétrica"
    },
    "habilidades": [
        {
            "nome": "alemão",
            "nível": "básico"
        }
    ]
})

//Vale salientar que:
// - Não é OBRIGATÓRIO o uso de aspas na chave do objeto, porém o uso se é recomendado a fim de evitar catactéres inválidos
// - Boas práticas:
// ---- fazer o uso das aspas
// ---- evitar o uso de caracteres especiais
// ---- utilizar-se de caracteres em minusculo
// ---- ex: "padrao_de_uso"

```