const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require("./database/database");
const PerguntaModel = require('./database/Models')
const RespostaModel = require("./database/Resposta")

// Database
connection
    .authenticate()
    .then(() => {
        console.log("Conexão feita com sucesso!");
    })
    .catch((msgErro) => {
        console.log(msgErro);
    });



//Estou dizendo para o EXPRESS usar o EJS como 'view engine'
app.set('view engine', 'ejs')

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())




// ----------------------------------------   Rotas
app.get('/', (req,res)=>{

    PerguntaModel.findAll({raw: true, order:[['id', 'DESC']]}) // ex:  SELECT * FROM tabela e decrecente

    .then((resultado)=>{                               
        res.render('index', {respostas: resultado});   //<-- var (respostas) recebe a callback do then()     
    }); 
   
});


app.get('/perguntar', (req, res) => {
    res.render('perguntar.ejs')
})


app.post('/salvarPergunta', (req, res)=>{
    var titulo = req.body.titulo
    var descricao = req.body.descricao

    PerguntaModel.create({              // ex: (INSERT INTO tabela) como seria no mysql
        titulo: titulo,
        descricao: descricao
    }).then(()=> {
        res.redirect('/')
    });
    
});


app.get('/pergunta/:id', (req, res) => {
    const id = req.params.id
    PerguntaModel.findOne({
        where: {id: id}
    }).then(call => {

        if(call != undefined) {                 // Pergunta encontrada (id: )
            RespostaModel.findAll({
                where: {pergunta_id: call.id}, order:[['id', 'DESC']]
            }).then((respostas)=>{
                 res.render("pergunta.ejs", { pergunta: call, respostas: respostas});
            })
           
        }else{
            res.redirect("/")
        }
    })
})


app.post('/responder', (req, res) => {
    var corpo = req.body.corpo
    var pergunta_id = req.body.id
    RespostaModel.create({
        corpo: corpo,
        pergunta_id: pergunta_id
    }).then(()=> {
        res.redirect('/pergunta/' + pergunta_id)
    })
})




// ---------------------------------   Localhost
app.listen(4000, (err)=>{
    if (err){
        console.log("Erro ao Processar!")
    }else{
        console.log("Servidor rodando com sucesso!")
    }
})