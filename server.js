import express from 'express' ;
import dados from './src/data/dados.js' ;

const app = express();
app.use(express.json());

const serverPort= 3000;

const{ bruxos, casas, pocoes, animais, varinhas } = dados ;

app.get("/", (req, res) => {
    res.send ("Bem vindo ao mundo de Hogwarts!! 🪄🏰 Minha API de Harry Potter está ativa!⚡")
});

app.get("/bruxos",(req, res) =>{
    res.json(bruxos);
});

app.get("/bruxos/id/:id",(req, res) => {
    let id = req.params.id;
    id = parseInt(id);

    const bruxo = bruxos.find(b => b.id === id);
    console.log(bruxo);

    if(bruxo) {
        res.status(200).json(bruxo);
    } else {
        res.status(400).json ({
        mensagem: "Ops! Bruxo nao encontrado 🪄"
    })
    }
});

app.get("/bruxos/nome/:nome", (req, res) => {
    let nome = req.params.nome.toLocaleLowerCase() ;

    const bruxosEncontrados = bruxos.filter (b =>b.nome.toLocaleLowerCase().includes(nome)) ;

    if(bruxosEncontrados.length > 0){
        res.status(200).json (bruxosEncontrados) ;
    } else {
        res.status (404).json ({
            mensagem: "Ops!Bruxo não encontado!🪄"
        })
    }
});

app.get("/bruxos/casa/:casa", (req, res) => {
    let casa = req.params.casa.toLocaleLowerCase();
  
    const casasEncontradas = bruxos.filter(b => b.casa.toLocaleLowerCase().includes (casa));

    if (casasEncontradas.length > 0) {
        res.status(200).json(casasEncontradas);
    } else {
      res.status(404).json({
            mensagem: "Ops! Casa não encontrada!🪄"
        })
    }
});

app.get("/casas", (req, res) => {
if (casas.length > 0) {
    res.status(200).json(casas) ;   
} else {
    res.status(404).json ({
        mensagem: "Ops! Casa de bruxos nao encontrado 🪄"
    })
}
});

app.get("/casas/id/:id", (req, res) => {
    let id= req.params.id;
    id= parseInt(id);
    const casa= casas.find (c => c.id === id);
    console.log (casa);

    if (casa) {
        res.status (200).json (casa) ;
    } else {
        res.status (400).json ({
            mensagem: "Ops! id da casa não encontrado"
        })
    }
    }) ;

app.get("/animais" , (req, res) => {
    if (animais.lenght > 0) {
        res.status (200).json (animais) ;
    } 
});

app.get("/animais/id/:id", (req,res) => {
    let id = req.params.id;
    id = parseInt (id);
    const animal = animais.find (c => c.id === id);
    console.log (animal);

    if (animal) {
        res.status(200).json(animal);
    }else {
        res.status (400).json ({
            mensagem: "Ops! id do animal não encontado!🪄"
        })
    }
});

app.get("/varinhas" , (req, res) => {
    if (varinhas.lenght > 0) {
        res.status (200).json (varinhas) ;
    } 
});

app.get("/varinhas/id/:id" , (req, res) => {
    let id= req.params.id ;
    id= parseInt(id) ;
    const varinha = varinhas.find (v => v.id ===id) ;
    console.log (varinha) ;

    if (varinha) {
        res.status (200).json (varinha) ;
    } else {
        res.status (404).json ({
            mensagem: "Ops!nenhuma varinha encontrada!🪄"
        })
    }
    }) ;


app.get("/pocoes" , (req, res) => {
    if (pocoes.lenght > 0) {
        res.status (200).json (pocoes) ;
    } 
});

app.get("/pocoes/id/:id", (req, res) =>{
    let id= req.params.id;
    id= parseInt(id) ;
    const pocao= pocoes.find(c.id === id);
    console.log (pocao);

    if(pocao) {
        res.status(200).json(pocao);
    }else {
        res.status (400).json ({
            mensagem:"Ops! poção não encontrada🪄"
        })
    }
});

app.listen(serverPort, () => {
    console.log (`API mágica funcionando em http://localhost:${serverPort} ⚡`)
});