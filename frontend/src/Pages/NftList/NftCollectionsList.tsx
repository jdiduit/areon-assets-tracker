import PageWrapper from "../../components/PageWrapper";
import {Alert, Grid, List, Stack} from "@mantine/core";
import useAuthStore from "@/store/useAuthStore.tsx";
import {NftCollectionCard} from "@/Pages/NftList/NftCollectionCard/NftCollectionCard.tsx";
import {ChainTypeEnum} from "@/store/useChainStore.tsx";
import {TESTNET_MINT_NFT_CONTRACT} from "@/utils/constants.tsx";
import CustomCollectionImg from '../../assets/images/collection-img.png'
import {useAddressStore} from "@/store/useAddressStore.tsx";
import {IconInfoCircle} from "@tabler/icons-react";

const NftCollectionsList = () => {
    const {selectedChain} = useAuthStore()
    const {selectedAddress} = useAddressStore()
    return (
        <PageWrapper title={'NFT Collections'}>
            {selectedAddress
                ? <>
                    <Stack>
                        {selectedChain?.type === ChainTypeEnum.MAINNET
                            ? <Alert p={'xs'} color={'red'}>
                                There are currently no collections on the mainnet.
                            </Alert>
                            : <Alert p={'xs'} color={'red'}>
                                Supported collections at the moment:
                                <List>
                                    <List.Item>- Free To Mint NFTs</List.Item>
                                </List>
                            </Alert>
                        }
                        <Grid>
                            {selectedChain?.type === ChainTypeEnum.MAINNET
                                ? <>
                                </>
                                : <>
                                    <Grid.Col span={6}>
                                        <NftCollectionCard
                                            key={1}
                                            isCustom={true}
                                            nftAddress={TESTNET_MINT_NFT_CONTRACT}
                                            symbol={'AreonNFT'}
                                            img={CustomCollectionImg}
                                            name={'Free To Mint Collection'}
                                        />
                                    </Grid.Col>
                                </>
                            }
                        </Grid>
                    </Stack>
                </>
                : <Alert p={'xs'} variant="light" color="red" icon={<IconInfoCircle/>}>
                    No selected address
                </Alert>
            }
        </PageWrapper>
    );
};

export default NftCollectionsList;