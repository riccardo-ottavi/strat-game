//inizializzazione server
const express = require('express')
const app = express()
const port = 3000

// importiamo modulo router 
const gameDataRouter = require("./routers/gameData")

// usiamo il middleware static di express (per rendere disponibile i file statici)
app.use(express.static('public'));

//body parser
app.use(express.json());

// rotte 
app.use("/gameData", gameDataRouter);

// impostiamo la rotta di home
app.get("/", (req, res) => {
    console.log("hai richiesto la rotta di index");

    res.send('<h1>Ecco la home della API del gioco</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})