require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-etherscan')
require('hardhat-deploy')
require('solidity-coverage')
require('hardhat-gas-reporter')
require('hardhat-contract-sizer')
require('dotenv').config()

const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL || 'https://eth-mainnet.alchemyapi.io/v2/your-api-key'
const PRIVATE_KEY =
    process.env.PRIVATE_KEY || '0x11ee3108a03081fe260ecdc106554d09d9d1209bcafd46942b10e02943effc4a'
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ''
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ''

module.exports = {
    solidity: '0.8.17',
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmations: 1,
        },
        goerli: {
            chainId: 5,
            blockConfirmations: 1,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
        },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        user: {
            default: 1,
        },
    },
}
