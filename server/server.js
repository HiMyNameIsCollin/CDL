const express = require('express');
const cors = require('cors');

const app = express();
const myPort = process.env.PORT || 3000;

const db = {
    pickup: [],
    delivery: [],
};

app.use(cors());
app.use(express.json());

const createOrder = (type) => {
    const { pickup, delivery } = db;
    const id = pickup.length + delivery.length;
    const order_number = type === 'delivery' ? delivery.length : pickup.length;
    const order = {
        type: type,
        order_id: id + 1,
        order_number: order_number + 1,
        created: Date.now(),
    };
    return order;
}

const saveOrder = (order) => {
    db[order.type].push(order);
}

app.get('/', (req, res) => {
    const arr = [...db.delivery, ...db.pickup].sort((x,y) => x.order_id - y.order_id)
    console.log(arr)
    res.json(arr);
});

app.get('/:id', (req, res) => {
    const { id } = req.params
    const arr = [...db.pickup, ...db.delivery]
    const result = arr.find(x => x.order_id == id)
    if(result){
        res.json(result)
    }else {
        res.status(500).json({err: 'No order by that ID'})
    }
    
});

app.post('/new', (req, res) => {
    const { type } = req.body;
    const order = createOrder(type);
    saveOrder(order);
    res.json(order)
});



app.listen(myPort, () => {
    console.log('SERVER RUNNING ON:', myPort);
});