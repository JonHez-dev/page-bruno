const express = require("express");

const app = express();
const users = [];

app.use(express.json());

app.get('/hello', (request, response)=>{
    response.send("Hello world");
});

app.post('/users', (request, response) => {
    users.push(request.body);
    response.send("Usuario agregado exitosamente");
});

app.get("/users", (request, response) => {
    response.send(users);
});

app.listen(3000, () => {
    console.log("Example app on port" + 3000);
});

app.delete("/users/:id", (request, response)=>{
    const id = request.params.id;
    const user = users.find((user)=>user.id === id);
    users.splice(users.indexOf(user), 1);
    response.send("Usuario eliminado");
});

app.put("/users/:id", (request, response)=>{
    //const id = request.params.id;
    const id = request.params.id;
    const user = users.find((user)=>user.id==id);
    const newPassword = request.body.password;

    user.password = newPassword;
    //users.push(user);

    response.send("Usuario actualizado");
});