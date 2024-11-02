import { HStack, Icon, ImageBackground, Modal, ModalCloseButton, ModalContent } from "@gluestack-ui/themed"
import { ModalBackdrop } from "@gluestack-ui/themed"
import { ArrowLeftIcon } from "@gluestack-ui/themed"
import { Heading } from "@gluestack-ui/themed"
import { ModalHeader } from "@gluestack-ui/themed"
import { Center, ModalBody, Text, View } from "@gluestack-ui/themed"

interface props{
    poke: object,
    isModal: boolean,
    setIsModal: (args: boolean) => void
}

const InfoPoke = ({poke, isModal, setIsModal}: props) => {

  return (

        <Modal
            isOpen={isModal}
            onClose={() => {
                setIsModal(false)
            }}
        >
                <ModalBackdrop />

                <ModalContent w={'100%'} h={'100%'} borderColor="black]">

                    <ModalHeader>
                        <ImageBackground source={require('../assets/pokeballFundo.jpg')} w={'100%'} h={300}>
                            <HStack justifyContent="space-between">
                                <ModalCloseButton>
                                    <Icon as={ArrowLeftIcon} color="$white"/>
                                </ModalCloseButton>
                                <Heading size="lg" color="$white" right={10}>{poke.name}</Heading>
                                </HStack>
                            </ImageBackground>
                    </ModalHeader>

                    <ModalBody>
                        <Text color="$black" fontSize={30}>{poke.id}</Text>
                    </ModalBody>
                

                </ModalContent>
            </Modal>

  )
}

export default InfoPoke