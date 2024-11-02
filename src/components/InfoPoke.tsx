import { HStack, Icon, ImageBackground, Modal, ModalCloseButton, ModalContent } from "@gluestack-ui/themed"
import { ModalBackdrop } from "@gluestack-ui/themed"
import { Image } from "@gluestack-ui/themed"
import { ArrowLeftIcon } from "@gluestack-ui/themed"
import { Heading } from "@gluestack-ui/themed"
import { ModalHeader } from "@gluestack-ui/themed"
import { ModalBody, Text } from "@gluestack-ui/themed"

interface props{
    poke: object,
    isModal: boolean,
    setIsModal: (args: boolean) => void
}

const InfoPoke = ({poke, isModal, setIsModal}: props) => {

    const image = poke.sprites?.other?.['official-artwork']?.front_default;
    const imageShyne = poke.sprites?.other?.['official-artwork']?.front_shiny;


  return (

        <Modal
            isOpen={isModal}
            onClose={() => {
                setIsModal(false)
            }}
        >
                <ModalBackdrop />

                

                <ModalContent w={'100%'} h={'100%'} bgColor="#1E1E1E">
                <ModalHeader borderRadius={10}>
                    <ImageBackground source={require('../assets/fundoPoke.jpg')} style={{ width: '100%', height: 300 }} >
                        <HStack justifyContent="space-between" p={4}>
                            <ModalCloseButton>
                                <Icon as={ArrowLeftIcon} color="$white"/>
                            </ModalCloseButton>
                            <Heading size="lg" color="$white" right={10}>{poke.name}</Heading>
                        </HStack>

                        <Image w={'100%'} h={'90%'} source={{uri: imageShyne}} alt={poke.name} resizeMode="contain" />

                    </ImageBackground>
                </ModalHeader>




                    <ModalBody bgColor={"$white"}>
                        <Text color="$black" fontSize={30}>{poke.id}</Text>
                    </ModalBody>
                

                </ModalContent>
            </Modal>

  )
}

export default InfoPoke