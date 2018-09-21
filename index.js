'use strict';

const BumoSDK = require('bumo-sdk');
const BigNumber = require('big-number');

const options = {
    host: '127.0.0.1:36002'
};

const sdk = new BumoSDK(options);

const address = 'buQs9npaCq9mNFZG18qu88ZcmXYqd6bqpTU3';

// --------------------- 获取账号信息 ---------------------
// sdk.account.getInfo(address).then( info => {
//     console.log(info);
// }).catch(err => {
//     console.log(err.message);
// });


// --------------------- 获取 nonce + 1 ---------------------
// sdk.account.getNonce(address).then(info => {
//
//     if (info.errorCode !== 0) {
//         console.log(info);
//         return;
//     }
//
//     const nonce = new BigNumber(info.result.nonce).plus(1).toString(10);
//
//     console.log(nonce);
//
// });


// --------------------- 生成公私钥对及地址 ---------------------
// sdk.account.create().then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err.message);
// });


// --------------------- 检测账户地址的有效性 ---------------------
// sdk.account.checkValid(address).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err.message);
// });

// --------------------- 获取账户信息 ---------------------
// sdk.account.getInfo(address).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err.message);
// });

// --------------------- 获取账户余额 ---------------------
// sdk.account.getBalance(address).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err.message);
// });


// --------------------- 获取账户所有资产信息 ---------------------
// sdk.account.getAssets(address).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err.message);
// });

// --------------------- 激活账户 ---------------------
// var res = sdk.operation.accountActivateOperation({
//     "destAddress":"buQX9HbMhSZcHF62K2WtQAChQvcGHgy9jxNW",
//     "initBalance":"1000000000000"
// });
//  console.log(res);


// --------------------- 转账BU ---------------------
// var res = sdk.operation.buSendOperation({
//     "destAddress":"buQX9HbMhSZcHF62K2WtQAChQvcGHgy9jxNW",
//     "buAmount":"100"
// });
//  console.log(res);


// --------------------- 获取账户所有资产信息 ---------------------
// const address_test = 'buQX9HbMhSZcHF62K2WtQAChQvcGHgy9jxNW';
// sdk.account.getAssets(address_test).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err.message);
// });

