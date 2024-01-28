import {IconSortAscending, IconSortAZ, IconSortDescending, IconSortZA} from "@tabler/icons-react";
import {rem} from "@mantine/core";

export const PROXY_URL = 'https://corsproxy.xyz'
export const MORALIS_URL = 'https://deep-index.moralis.io/api/v2/ipfs/uploadFolder'

export enum CHAINS {
    MAINNET = '0x1cf',
    TESTNET = '0x1ce',
}

export const MINT_CHAINS: Record<CHAINS, {
    nativeName: string,
    name: string,
    rpc: string;
    chainId: string,
    rpcFetch: string,
    type: string
}> = {
    [CHAINS.MAINNET]: {
        rpc: 'https://mainnet-rpc.areon.network',
        rpcFetch: `${PROXY_URL}/https://mainnet-rpc.areon.network`,
        chainId: '463',
        type: 'mainnet',
        name: 'Areon Mainnet',
        nativeName: 'AREA'
    },
    [CHAINS.TESTNET]: {
        rpc: 'https://testnet-rpc.areon.network',
        rpcFetch: `${PROXY_URL}/https://testnet-rpc.areon.network`,
        chainId: '462',
        type: 'testnet',
        name: 'Areon Testnet',
        nativeName: 'TAREA'
    }
}

export const TESTNET_MINT_NFT_CONTRACT = '0x26267daB293E445D14797583a10DcB7c3936E40a'
export const IPFS_GATEWAY = 'https://ipfs.moralis.io:2053/ipfs/'

export const TESTNET_TOKEN_IMAGES: Record<string, string> = {
}

export const MAINNET_TOKENS_IMAGES: Record<string, string> = {
}

export const SortOrder = [
    {
        label: 'Name',
        value: 'name',
        order: 'asc',
        iconLeft: <IconSortAscending style={{width: rem(14), height: rem(14)}}/>,
        iconRight: <IconSortAZ/>
    },
    {
        label: 'Name',
        value: 'name',
        order: 'desc',
        iconLeft: <IconSortDescending style={{width: rem(14), height: rem(14)}}/>,
        iconRight: <IconSortZA/>
    },
]