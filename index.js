const app = require('express')();
const handler = require('serve-handler');
const port = parseInt(process.env.PORT) || 3000;

app.all("*", (req, res) => handler(req, res, {public: "public"}));
app.listen(port, () => console.log(`Running at http://localhost:${port}`));
