const BumoSDK = require('bumo-sdk');
const BigNumber = require('big-number');

const options = {
    host: '127.0.0.1:36002'
};

const sdk = new BumoSDK(options);

/**
 *
 *
     privateKey: 'privbx2EH5EAVPXHqg5NkEyVrBJmCzV7QWMXggbs5mfQDiCbgd8drY4X',
     publicKey: 'b00187df67650b639c5b58451085ca15202b2c01a1554f15756a09526a6d1256c8247656a66d',
     address: 'buQdKdy3unrCEgkdUQDB3Xbjra3o5oJZA2ts'


    address : buQeJKcC6SFRVmc8ftdHSbEFDKZidVs4BG6h,
    private_key : privbySHe15vQBNnreYtKfmbxpsJmgyPcQzqMkoxUThf2VtFm3WL8f4r,
    public_key : b001deb50e81a778f6875bb5ae654126d0ee4b85a79bbe38c7a5cdad022e3534a4f6de64b4a4,

 */
// --------------------- 生成公私钥对及地址 ---------------------
// sdk.account.create().then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err.message);
// });


const address = 'buQeJKcC6SFRVmc8ftdHSbEFDKZidVs4BG6h';

// --------------------- 获取账号信息 ---------------------
sdk.account.getInfo(address).then( info => {
    console.log(info);
}).catch(err => {
    console.log(err.message);
});
