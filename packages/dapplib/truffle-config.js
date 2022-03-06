require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remain exchange give clog outer sketch'; 
let testAccounts = [
"0x3e81ec5790753f4840a7daa59d5e836c69dd0fbbd6608f801d26441acbb34922",
"0x16b3d1ecf0a6a8721b6e69af73f952009b21320a96514afeb55a13266f185f6d",
"0xcd96300bb3f16feefd9b200609137f8c27b1d5353e70352426af2c5cdea77c09",
"0xa9b41035e483dc88beca4247015154693330f05eb21d5edf2a8904aa309993ef",
"0xb5a30cd6d301f82e8d47bc15ec762f402145d4d10df22817b52e81730e63d519",
"0xc0c6176e895cc7e1360841687e2c8afed281feb675b9b7b38945a0bd45ad9690",
"0xc03b5455a06ecb12a44b064f5587645be1a8bc9092ceb465ad3f355e0a607c0c",
"0x098990a98609d2525d32bb749919bcc2e216753252cac479f7e2a101ac845ae8",
"0x2e41cac74d86c558d4b5198f5ba3a299c00ca251f5505dbb715d26c0732ae7a8",
"0x3b5d0e18f3e7b3579b9b60c3836dff8c9d8adbf4f296dc3fdd66762333490117"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

