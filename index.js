const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

let phones = [
    {
        "id": 1,
        "image":"https://res.cloudinary.com/sbl9/image/upload/v1645542596/phone1_sp0bfc.jpg",
        "title": "Iphone 1",
        "description": " Iphone 1 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        "color": "White",
        "price": "2124.4$",
        "url":"http://localhost:3001/api/phones/1"
    },
    {
        "id": 2,
        "image":"https://res.cloudinary.com/sbl9/image/upload/v1645542596/phone2_hi6pwh.jpg",
        "title": "Iphone 2",
        "description": "Iphone 2 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "color": "Black",
        "price": "134.4$",
        "url":"http://localhost:3001/api/phones/2"
    },
    {
        "id": 3,
        "image":"https://res.cloudinary.com/sbl9/image/upload/v1645542596/phone3_b1a21f.jpg",
        "title": "Iphone 3",
        "description": "Iphone 3 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "color": "Black",
        "price": "344.6$",
        "url":"http://localhost:3001/api/phones/3"
    },
    {
        "id": 4,
        "image":"https://res.cloudinary.com/sbl9/image/upload/v1645542596/phone4_dshwu9.jpg",
        "title": "Iphone 4",
        "description": "Iphone 4 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "color": "Black",
        "price": "125.4$",
        "url":"http://localhost:3001/api/phones/4"
    }

]


app.get('/', (request, response) => {
    response.send('<h1>json-> http://localhost:3001/api/phones/</h1>');

}); 

app.get('/api/phones', (request, response) => {
    response.json(phones);
});


app.get('/api/phones/:id', (request, response) => {
    const id = Number(request.params.id);
    const phone = phones.find(phone => phone.id === id);

    if (phone) {
        response.json(phone);
    } else {
        response.status(404).end();
    }
    
});


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
