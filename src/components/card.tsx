import { Box, CloseIcon, HStack, Icon, Image, ImageBackground, Modal, ModalContent, Text} from "@gluestack-ui/themed"
import axios from "axios"
import { useEffect, useState } from "react"
import { TouchableOpacity } from "react-native"
import InfoPoke from "./InfoPoke"
import { B } from "@expo/html-elements"
import { ModalBackdrop } from "@gluestack-ui/themed"
import { Heading } from "@gluestack-ui/themed"
import { ModalCloseButton } from "@gluestack-ui/themed"
import { ModalHeader } from "@gluestack-ui/themed"
import { ArrowLeftIcon } from "@gluestack-ui/themed"

interface props{
    url: string
}


const CardPoke = ({url} : props) => {

    const [uniquePoke, setUniquePoke] = useState(null)
    const [infoPokeBoolean, setInfoPokeBoolean] = useState(false)

    const fetchUniquePoke = async (url: string) => {
        const reponse = await axios.get(url)
        .then((json) => {
            setUniquePoke(json.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchUniquePoke(url)
    }, [])

    if(!uniquePoke){
        return null;
    }

    const image = uniquePoke.sprites?.other?.['official-artwork']?.front_default;

  return (

        <Box>
            <TouchableOpacity onPress={() => setInfoPokeBoolean(true)}>
                <Box w={190} h={175} bgColor="#a6a6a6"  mr={3} ml={3} mt={10} mb={10} borderRadius={20} overflow="hidden">
                    <ImageBackground borderRadius={20} source={require('../assets/pokeballFundo.jpg')} w={'100%'} h={'100%'} alignItems="center" justifyContent="center" flexDirection="column">
                        
                        <Image  source={image ? { uri: image } : require('../assets/erro404.png')} alt={uniquePoke.name} resizeMode="center"/>

                        <HStack  bottom={-20} gap={10}>
                            <Text right={0} color="$white" fontWeight={"$bold"}>{uniquePoke.name}</Text>
                            <Text left={0} color="$white" fontWeight={"$bold"}>{uniquePoke.id}#</Text>
                        </HStack>

                    </ImageBackground>
                </Box>  
            </TouchableOpacity>

            <InfoPoke isModal={infoPokeBoolean} setIsModal={setInfoPokeBoolean} poke={uniquePoke}/>
            
        </Box>


  )
}

export default CardPoke
