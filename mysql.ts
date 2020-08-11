import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: "localhost",
  username: "root",
  db: "poc",
  password: "mysql@10",
  port: 3307
});

await client.execute(`CREATE DATABASE IF NOT EXISTS poc`);
await client.execute(`USE poc`);

await client.execute(`CREATE TABLE IF NOT EXISTS apresentacoes(
    id int(11) NOT NULL AUTO_INCREMENT,
    tema varchar(100) NOT NULL,
    apresentador varchar(100) NOT NULL,
    data datetime NOT NULL,
    PRIMARY KEY (id)
)`)

//let result = await client.execute(`INSERT INTO apresentacoes(tema,apresentador,data) VALUES (?,?,?)`, ['Deno','Leonardo Fernandes de Oliveira',new Date()])
//console.log(result);

const listaApresentacoes = await client.query(`SELECT * FROM apresentacoes WHERE id = ?`, [2]);
console.log(listaApresentacoes);

await client.close();