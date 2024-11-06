import { Box, Button, Center, HStack, Icon, ImageBackground, Modal, ModalCloseButton, ModalContent, VStack } from "@gluestack-ui/themed"
import { ModalBackdrop } from "@gluestack-ui/themed"
import { Image } from "@gluestack-ui/themed"
import { ButtonText } from "@gluestack-ui/themed"
import { ArrowLeftIcon } from "@gluestack-ui/themed"
import { Heading } from "@gluestack-ui/themed"
import { ModalHeader } from "@gluestack-ui/themed"
import { ModalBody, Text } from "@gluestack-ui/themed"
import { useState } from "react"
import { SafeAreaView, Touchable, TouchableOpacity } from "react-native"

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

    const statsColor = {
        'HP': '#FF0000', 
        'ATK': '#FFA500', 
        'DEF': '#0000FF', 
        'SP.DEF': '#800080', 
        'SP.ATK': '#FFC0CB', 
        'SPD': '#008000' 
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

                <SafeAreaView/>

                <ModalHeader borderRadius={10}>
                    <ImageBackground source={require('../assets/fundoPoke.jpg')}  style={{ width: '100%', height: 300 }}  >
                        <HStack justifyContent="space-between" p={4}>
                            <HStack gap={10}>
                                <ModalCloseButton>
                                    <Icon as={ArrowLeftIcon} color="$white"/>
                                </ModalCloseButton>
                                <Heading size="lg" color="$white" right={10}>{poke.name}</Heading>
                            </HStack>
                        <Text color="white">#{poke.id}</Text>
                        </HStack>

                        <Image w={'100%'} h={'90%'} source={{uri: shiny? imageShyne : image}} alt={poke.name} resizeMode="contain" />

                    </ImageBackground>
                </ModalHeader>

                <ModalBody bgColor={"$warmGray300"}>

                    <Center mt={10}>
                        <Text mb={5} color="black" fontWeight="$normal" fontSize={40}>{poke.name}</Text>
                        <HStack>
                            {poke.types.map((type: object, index) => { 
                                            const tipo = type.type.name;
                                            const bgTipo = typeColors[tipo] || 'gray';
                                            return(
                                                <Center key={index} w={100} borderRadius={20}  ml={3} bgColor={bgTipo}>
                                                    <Text  padding={10} color="white" fontWeight="$bold" >
                                                        {tipo}
                                                    </Text>
                                                </Center>
                                            )
                                            }
                                        )}
                        </HStack>
                    </Center>


                    <Center  mt={10}>
                        <HStack gap={100}>
                            <VStack alignItems="center">
                                <Text color="black" fontSize={25}>{(poke.weight)/10} KG</Text>
                                <Text>Weight</Text>
                            </VStack>
                            <VStack alignItems="center">
                                <Text color="black" fontSize={25}>{(poke.height)/10} M</Text>
                                <Text>Height</Text>
                            </VStack>
                        </HStack>
                    </Center>

                    <Center mt={10}>
                        <Text color="black" fontSize={25} mb={5}>Base Stats</Text>

                        <Center>
                            {poke.stats.map((stat: object, index) => {
                                let statName = stat.stat.name
                                let baseStat = stat.base_stat

                                switch(statName){
                                    case 'hp':
                                        statName = 'HP'
                                        break;
                                    case 'attack' :
                                        statName = 'ATK'
                                        break;
                                    case 'defense' :
                                        statName = 'DEF'
                                        break;
                                    case 'special-attack' :
                                        statName = 'SP.ATK'
                                        break;
                                    case 'special-defense' :
                                        statName = 'SP.DEF'
                                        break;
                                    case 'speed' :
                                        statName = 'SPD'
                                        break;
                                }

                                const BarUncolor = 300-baseStat;
                                const barColor = statsColor[statName] || 'black'

                                return(
                                    <HStack gap={20} mb={10} key={index} w="90%" justifyContent="space-between">
                                        <Text flex={1} textAlign="left">{statName}</Text>
                                  
                                        <HStack flex={4} bgColor="white" borderRadius={10} overflow="hidden">
                                            <Box flex={baseStat / 300} bgColor={barColor} alignItems="flex-end" justifyContent="center" borderRadius={10}>
                                                {baseStat >= 60 ? <Text right={2} fontSize={12} color="white">{baseStat}/300</Text> : ''}
                                            </Box>

                                            <Box flex={(300 - baseStat) / 300} bgColor="white" justifyContent="center" alignItems="flex-start" borderTopRightRadius={10} borderBottomRightRadius={10}>
                                                {baseStat < 60 ? <Text left={2} fontSize={12} color="black">{baseStat}/300</Text> : ''}
                                            </Box>
                                        </HStack>
                                  </HStack>
                                  
                                )
                                
                            })}
                        </Center>
                    </Center>

                       
                        
                        <Center mt={10}>
                            <Text color="black">Cheque o pokemon shiny</Text>
                            <TouchableOpacity  onPress={() => setShiny(prevShiny => !prevShiny)} >
                                <Center mt={5} w={80} bgColor={shiny ? 'black' : '$warmGray300'} borderColor={shiny ? '$warmGray300' : 'black'} borderWidth={2} borderRadius={10}>  
                                    <Text padding={10} color={shiny ? '$warmGray300' : 'black'}>{shiny ? 'Shiny' : 'Normal'}</Text>
                                </Center>
                            </TouchableOpacity>
                        </Center>

                </ModalBody>
                

                </ModalContent>
        </Modal>

  )
}

export default InfoPoke