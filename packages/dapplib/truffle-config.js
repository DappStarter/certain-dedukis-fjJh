require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth muscle prosper install forget fresh genuine'; 
let testAccounts = [
"0xb5af89bcc4ad7c61cbb6da65fff25857c46dc3bc926a87e9eb2507b6b5455868",
"0x2f61767d7b0d935cae6ca5db4d7a9cd81e18f5985b54b0768f08fb229085e6a7",
"0x1420c39d4b8e12b4b8aeecc06e6aa80ab26c78dc4618f27cdba6a24eaf973ba0",
"0x65c65ebcad7875b22c615d9a1dd1809d72cac1403091516ba4bb98f3fa76029b",
"0xaf4e36142d7869279a288b3c4ce3752ca7aee2f23dbe24d4231ab857e82d3c4c",
"0xe2007aa8a5fea0ba4be7d2cb02096f97b7ee34025d66392424034990667777b2",
"0x493ceadfc7b2e2936e4ecca15fe5b5c8ca0f3452a68e8f5715db4c81bbfb7486",
"0x0173b052edf9f1df016fdefe6eb2c3dad5e6e68ba5ae5ed7f91adc9e07a0dd1c",
"0xa5fe27f6b2dd2fb7d57bb98c28fe81518c5a266cd85a6e265fe0749b82b8ca22",
"0xa0a33f184bf21ed63727c8a982316b336a34b411d8e3ed60988da76a89d54008"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


