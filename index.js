const express = require('express');
const app = express();

const phones = [
    {
        "id": 1,
        "product image":"https://res.cloudinary.com/sbl9/image/upload/v1645542596/phone1_sp0bfc.jpg",
        "title": "Iphone 1",
        "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
        "color": "Blue",
        "price": "2124.4$"
    },
    {
        "id": 2,
        "product image":"https://res.cloudinary.com/sbl9/image/upload/v1645542596/phone2_hi6pwh.jpg",
        "title": "Iphone 2",
        "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "color": "Black",
        "price": "134.4$"
    },
    {
        "id": 3,
        "product image":"https://res.cloudinary.com/sbl9/image/upload/v1645542596/phone3_b1a21f.jpg",
        "title": "Iphone 3",
        "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "color": "White",
        "price": "344.6$"
    },
    {
        "id": 4,
        "product image":"https://res.cloudinary.com/sbl9/image/upload/v1645542596/phone4_dshwu9.jpg",
        "title": "Iphone 4",
        "description": "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        "color": "Gray",
        "price": "125.4$"
    }

]


app.get('/', (request, response) => {
    response.send('<h1>Hello World</h1>');

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


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
