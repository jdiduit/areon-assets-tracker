import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

const main = async () => {
    await prisma.chain.create({
        data: {
            name: 'Areon Testnet',
            type: 'TESTNET',
            nativeTokenSymbol: 'TAREA',
            chainId: '0x1ce',
            rpc: 'https://testnet-rpc.areon.network'
        }
    })

    await prisma.chain.create({
        data: {
            name: 'Areon Mainnet',
            type: 'MAINNET',
            nativeTokenSymbol: 'AREA',
            chainId: '0x1cf',
            rpc: 'https://mainnet-rpc.areon.network'
        }
    })
};

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })