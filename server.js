const mongoose = require('mongoose');
const app = require('./app');

const port = 3000;


mongoose
.connect('mongodb://localhost:27017/backend-api', {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(() => {
    app.listen(port, () => { // as the variable // listening to the 
        console.log(`Server is connected on port: ${port}`);
        console.log(`MongoDB connected`);
    });
})
.catch((e) => {
    console.log(e);
});