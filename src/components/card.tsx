import { Box, HStack, Image, ImageBackground, Text} from "@gluestack-ui/themed"
import axios from "axios"
import { useEffect, useState } from "react"

interface props{
    url: string
}


const CardPoke = ({url} : props) => {

    const [uniquePoke, setUniquePoke] = useState(null)

    const fetchUniquePoke = (url: string) => {
        const reponse = axios.get(url)
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
    

    <Box w={190} h={175} bgColor="#a6a6a6"  mr={3} ml={3} mt={10} mb={10} borderRadius={20} overflow="hidden">
        <ImageBackground borderRadius={20} source={require('../assets/pokeballFundo.jpg')} w={'100%'} h={'100%'} alignItems="center" justifyContent="center" flexDirection="column" fi>
            
            <Image  source={{uri: image}} alt={uniquePoke.name} resizeMode="center"/>

            <HStack  bottom={-20}>
                <Text right={10} color="$white" fontWeight={"$bold"}>{uniquePoke.name}</Text>
                <Text left={10} color="$white" fontWeight={"$bold"}>{uniquePoke.id}#</Text>
            </HStack>

        </ImageBackground>
    </Box>  
  )
}

//other.official-artwork.front_default
export default CardPoke
