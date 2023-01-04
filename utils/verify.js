const { run } = require('hardhat')

async function verify(contractAddress, args) {
    console.log('Verifying contract...')
    try {
        await run('verify:verify', {
            address: contractAddress,
            constructorArguments: args,
        })
        console.log('Verfied! (Y)')
    } catch (e) {
        if (e.message.toLowerCase().includes('already verified')) {
            console.log('Already verified!')
        } else {
            console.log(e)
        }
    }
}

module.exports = { verify }
