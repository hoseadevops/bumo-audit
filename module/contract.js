const BumoSDK = require('bumo-sdk');
const BigNumber = require('big-number');
const FS = require("fs");

const options = {
    host: '127.0.0.1:36002'
};

const sdk = new BumoSDK(options);


var contract_data = FS.readFileSync('contracts/contractBasedToken.js','utf-8');


// ====================================
// Send BU contains 4 steps:
// 1. build operation (buSendOperation)
// 2. build blob
// 3. sign blob with sender private key
// 4. submit transaction
// ====================================
(async function () {
    const senderPrivateKey = 'privbx2EH5EAVPXHqg5NkEyVrBJmCzV7QWMXggbs5mfQDiCbgd8drY4X';
    const senderAddress = 'buQdKdy3unrCEgkdUQDB3Xbjra3o5oJZA2ts';

    const accountInfo = await sdk.account.getNonce(senderAddress);

    if (accountInfo.errorCode !== 0) {
        console.log(accountInfo);
        return;
    }
    let nonce = accountInfo.result.nonce;
    // nonce + 1
    nonce = new BigNumber(nonce).plus(1).toString(10);

    // ====================================
    // 1. build operation (buSendOperation)
    // ====================================
    const operationInfo = sdk.operation.contractCreateOperation({
        initBalance: '100000000',
        payload: contract_data,
        sourceAddress: senderAddress,
        metadata: '创建合约',
    });

    if (operationInfo.errorCode !== 0) {
        console.log(operationInfo);
        return;
    }

    const operationItem = operationInfo.result.operation;

    // ====================================
    // 2. build blob
    // ====================================
    const blobInfo = sdk.transaction.buildBlob({
        sourceAddress: senderAddress,
        gasPrice: '1000',
        feeLimit: '1000000',
        nonce,
        operations: [operationItem],
    });

    if (blobInfo.errorCode !== 0) {
        console.log(blobInfo);
        return;
    }

    const blob = blobInfo.result.transactionBlob;

    // ====================================
    // 3. sign blob with sender private key
    // ====================================
    let signatureInfo = sdk.transaction.sign({
        privateKeys: [senderPrivateKey],
        blob,
    });

    if (signatureInfo.errorCode !== 0) {
        console.log(signatureInfo);
        return;
    }

    const signature = signatureInfo.result.signatures;

    // ====================================
    // 4. submit transaction
    // ====================================
    const transactionInfo = await sdk.transaction.submit({
        blob,
        signature: signature,
    });

    if (transactionInfo.errorCode !== 0) {
        console.log(transactionInfo);
    }

    console.log(transactionInfo);

} ())

