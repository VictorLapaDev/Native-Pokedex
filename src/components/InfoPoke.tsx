import { Box, Button, Center, HStack, Icon, ImageBackground, Modal, ModalCloseButton, ModalContent } from "@gluestack-ui/themed"
import { ModalBackdrop } from "@gluestack-ui/themed"
import { Image } from "@gluestack-ui/themed"
import { ButtonText } from "@gluestack-ui/themed"
import { ArrowLeftIcon } from "@gluestack-ui/themed"
import { Heading } from "@gluestack-ui/themed"
import { ModalHeader } from "@gluestack-ui/themed"
import { ModalBody, Text } from "@gluestack-ui/themed"
import { useState } from "react"
import { Touchable, TouchableOpacity } from "react-native"

interface props{
    poke: object,
    isModal: boolean,
    setIsModal: (args: boolean) => void
}

const InfoPoke = ({poke, isModal, setIsModal}: props) => {

    const[shiny, setShiny] = useState(false);

    const image = poke.sprites?.other?.['official-artwork']?.front_default;
    const imageShyne = poke.sprites?.other?.['official-artwork']?.front_shiny;

    const typeColors = {
        normal: "#A8A878",
        fighting: "#C03028",
        flying: "#A890F0",
        poison: "#A040B0",
        ground: "#E0C068",
        rock: "#B8A038",
        bug: "#A8B820",
        ghost: "#705898",
        steel: "#B8B8D0",
        fire: "#F08030",
        water: "#6890F0",
        grass: "#78C850",
        electric: "#F8D030",
        psychic: "#F85888",
        ice: "#98D8D8",
        dragon: "#7038F8",
        dark: "#705848",
        fairy: "#F0B6B6"
    }


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

                        <Image w={'100%'} h={'90%'} source={{uri: shiny? imageShyne : image}} alt={poke.name} resizeMode="contain" />

                    </ImageBackground>
                </ModalHeader>




                    <ModalBody bgColor={"$white"}>

                        <Text color="$black" fontSize={30}>#{poke.id}</Text>
                        <Text>Altura: {(poke.height)/10} M</Text>       
                        <Text>Peso: {(poke.weight)/10} kg</Text>         

                        <Box mt={10}>
                            <Text>Type:</Text>
                            <HStack mt={5}>
                                    {poke.types.map((type: object, index) => { 
                                        const tipo = type.type.name;
                                        const bgTipo = typeColors[tipo] || 'gray';
                                        return(
                                            <Center key={index} w={80} borderRadius={10}  ml={3} bgColor={bgTipo}>
                                                <Text  padding={10} color="white" fontWeight="$bold" >
                                                    {tipo}
                                                </Text>
                                            </Center>
                                        )
                                        }
                                    )}
                            </HStack>
                        </Box>  
                        
                        <Box mt={10}>
                            <Text color="black">Cheque o pokemon shiny</Text>
                            <TouchableOpacity  onPress={() => setShiny(prevShiny => !prevShiny)} >
                                <Center mt={5} w={80} bgColor={shiny ? 'black' : '$warmGray300'} borderColor={shiny ? '$warmGray300' : 'black'} borderWidth={2} borderRadius={10}>  
                                    <Text padding={10} color={shiny ? '$warmGray300' : 'black'}>{shiny ? 'Shiny' : 'Normal'}</Text>
                                </Center>
                            </TouchableOpacity>
                        </Box>

                    </ModalBody>
                

                </ModalContent>
            </Modal>

  )
}

export default InfoPoke