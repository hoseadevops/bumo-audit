'use strict';

const BumoSDK = require('bumo-sdk');

const options = {
    host: '127.0.0.1:36002'
};

const sdk = new BumoSDK(options);

const address = 'buQs9npaCq9mNFZG18qu88ZcmXYqd6bqpTU3';

sdk.account.getInfo(address).then( info => {
    console.log(info);
}).catch(err => {
    console.log(err.message);
});
