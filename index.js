const app = require("./app");
const UserModel = require('./modules/user.model'); // Adjust the path accordingly
const db = require('./config/db');

const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello Ashrith");
});

app.listen(port, () => {
    console.log(`Server Listening on Port http://localhost:${port}`);
});
