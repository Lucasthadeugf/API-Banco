const bancodedados = require('./bancodedados');
const rotas = require('./rotas');
const app = require('./servidor');
app.use(rotas);

app.listen(3000);
d