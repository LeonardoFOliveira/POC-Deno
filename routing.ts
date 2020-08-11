import {Application, Router} from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

const apresentacoes = new Map([[1,{id: 1, nome: 'Deno', apresentador: 'Leonardo Fernandes de Oliveira', data: new Date()}]])

router
.get('/', (context) => {
    context.response.body = ''
})
.get('/apresentacoes/:id', (context) => {
    context.response.body = apresentacoes.get(Number(context.params.id))
})

app.use(router.routes());
await app.listen({port:80});
