const express = require('express');


const port = process.env.PORT || 3030;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.listen(port, () => {
    console.log('Le serveur est lancé sur le port ' + port);
});

// Eviter les erreurs CORS 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


app.get('/', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 


//Dish
app.get('/api/dish', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 

app.get('/api/dish/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.post('/api/dish', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.patch('/api/dish/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
});
app.delete('/api/dish/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 


//Dish-order
app.get('/api/dish-order', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 

app.get('/api/dish-order/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.post('/api/dish-order', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.patch('/api/dish-order/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
});
app.delete('/api/dish-order/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 


//Dish-customer
app.get('/api/dish-customer', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.get('/api/dish-customer/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.post('/api/dish-customer', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.patch('/api/dish-customer/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
});
app.delete('/api/dish-customer/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 


//Person
app.get('/api/person', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 

app.get('/api/person/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.post('/api/person', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.patch('/api/person/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
});
app.delete('/api/person/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 


//Customer
app.get('/api/customer', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 

app.get('/api/customer/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.post('/api/customer', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.patch('/api/customer/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
});
app.delete('/api/customer/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 


//Administrator
app.get('/api/administrator', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 

app.get('/api/administrator/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.post('/api/administrator', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.patch('/api/administrator/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
});
app.delete('/api/administrator/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 


//order
app.get('/api/order', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 

app.get('/api/order/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.post('/api/order', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
app.patch('/api/order/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
});
app.delete('/api/order/:id', (req, res) => {
    res.send('Bienvenue sur mon site');
}); 
