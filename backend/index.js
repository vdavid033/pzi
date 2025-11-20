/*
Kreirati GET metodu getdatum koja će vraćati trenutni datum i sat
Pozvati metodu preko RESTED klijenta

U bazi:
CREATE TABLE knjiga(
    id int(11) primary key AUTO_INCREMENT, 
    naslov varchar(100), 
    autor varchar(100), 
    slika varchar(700))
INSERT INTO knjiga(naslov, autor, slika) VALUES("Istkano kraljevstvo","Tahereh Mafi","https://znanje.hr/product-images/aad12c05-d5db-4961-97f9-b0eec753fd47.jpg")
INSERT INTO knjiga(naslov, autor, slika) VALUES("Violinistica","Harriet Constable","images/violinistica.jpg")
*/
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = {
    host:"xxx",
    database:"xxx",
    user:"xxx",
    password:"xxx"
}
conn = mysql.createConnection(connection);

app.get('/getknjige', (request, response) => {
    conn.query("SELECT * FROM knjiga", (error, results) => {
    if (error) {
        console.log(error)
    }
    return response.send(results);
    })
});

app.post('/addknjiga', (request, response) => {
    const data = request.body;
    console.log(data.autor);
    console.log(data.naslov);
    return response.send('POST metoda -> Add '+data.autor+" "+data.naslov);
});
app.put('/updateknjiga', (request, response) => {
    const data = request.body;
    console.log(data.autor);
    console.log(data.naslov);
    return response.send('PUT metoda -> Change '+data.autor+" "+data.naslov);
});
app.delete('/deleteknjiga', (request, response) => {
    const data = request.body;
    console.log('Delete '+data.id);
    return response.send('Delete '+data.id);
});
app.get('/hello', (request, response) => {
    return response.send('Hello world');
});
app.get('/getdatum', (request, response) => {
    let datum ='13.11.2025'
    console.log(datum);
    return response.send('datum '+datum);
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});