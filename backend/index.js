/*
Kreirati GET metodu getdatum koja će vraćati trenutni datum i sat
Pozvati metodu preko RESTED klijenta
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/hello', (request, response) => {
    return response.send('Hello world');
});
app.get('/getdatum', (request, response) => {
    let datum ='13.11.2025'
    console.log(datum);
    return response.send('datum '+datum);
});
app.post('/getkontakt', (request, response) => {
    return response.send('GET metoda -> Read');
});

app.post('/addkontakt', (request, response) => {
    const data = request.body;
    console.log(data.kontakt);
    console.log(data.ime);
    return response.send('POST metoda -> Add '+data.kontakt+" "+data.ime);
});
app.put('/updatekontakt', (request, response) => {
    const data = request.body;
    console.log(data.kontakt);
    return response.send('PUT metoda -> Change '+data.kontakt);
});
app.delete('/deletekontakt', (request, response) => {
    const data = request.body;
    console.log('Delete '+data.kontakt);
    return response.send('Delete '+data.kontakt);
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});