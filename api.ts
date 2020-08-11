import {Application, Router} from "https://deno.land/x/oak/mod.ts";
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

const app = new Application();
const router = new Router();
app.use(router.allowedMethods());

router
.get('/', (context) => {
    context.response.body = ''
})
.get('/apresentacoes', async (context) => {
    const listaApresentacoes = await client.query(`SELECT * FROM apresentacoes`);
    context.response.body = listaApresentacoes
})
.get('/apresentacoes/:id', async (context) => {
    const apresentacao = await client.query(`SELECT * FROM apresentacoes WHERE id = ?`, [Number(context.params.id)]);
    console.log(apresentacao);
    context.response.body = apresentacao;
})
.post('/apresentacoes/add', async (context) => {
    if(context.request.hasBody) {
        const body = await context.request.body();
        const data = body.value;
        let result = await client.execute(`INSERT INTO apresentacoes(tema,apresentador,data) VALUES (?,?,?)`,[data.tema,data.apresentador,new Date()]);
        console.log(result);
        context.response.body = {"message":"Successo","error":0}
    }
    else {
        context.response.body = {"message":"Request inválido","error":1}
    }
})

app.use(router.routes());
await app.listen({port:80});

await client.close();