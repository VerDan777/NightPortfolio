const mongoose = require('mongoose');
const config = require('../config.json');

// connection
mongoose.connection.on('conntected',()=>{
    console.log(`Mongoose connect on open mongodb:// ${config.db.host}:${config.db.port}/${config.db.name}`);
});

// throw errors
mongoose.connection.on('error',(err)=> {
    console.log('Mongoose default connection error'+err);
});

// disconnect
mongoose.connection.on('disconnect',()=> {
    console.log('Mongoose default connection disconnect');

})

// If node process has been finished, but need Mongoose connection

process.on('SIGINT',()=> {
    mongoose.connection.close(()=>{
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
}
);