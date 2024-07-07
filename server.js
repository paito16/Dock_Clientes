const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());  // Habilita CORS

const clienteSchema = new mongoose.Schema({
    nombre: String,
    telefono: String
});

const Cliente = mongoose.model('Cliente', clienteSchema);

mongoose.connect('mongodb+srv://admin:admin@data3apps.owzveqi.mongodb.net/Data3apps?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.find();
    res.json(clientes);
});

app.listen(3001, () => {
    console.log('App de Clientes escuchando en el puerto 3001');
});
