## Ref
[TronDApp](https://github.com/alant/tron-starter)
[Tron Get Started](https://github.com/TRON-US/eCommerce-hello-world)

## build steps

```npm install```

Create .env file and save your private key: ```export PK=be821xxxxxx``` Get your private key from the shasta test network. Follow the section[Though you wallet exists in your browser, it is not yet on the blockchain network.](https://github.com/TRON-US/eCommerce-hello-world)

Migrate the contracts
```source .env && tronbox migrate --network shasta```

Reset existing migrations
```source .env && tronbox  migrate --reset --network shasta```

Link contract build directory to react client

# For MacOS and Linux
```cd web-client && ln -s ../../build/contracts ./src```

Run / build the react client
# run the client
```npm start```
# build the client
```npm build```

## Contract addresses
[Update contract addresses in client utils folder](client/src/utils/index.js)

### Message
```414ab72df7ff2a6fa287ec0f1fc98894db19b363b7```
### Ecommerce
```41ef57a8b5a8fa63051b5fd2735b87c41723dd92b6```