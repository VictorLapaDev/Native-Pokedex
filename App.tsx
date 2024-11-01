
import { config } from '@gluestack-ui/config';
import { Box, FlatList, GluestackUIProvider, HStack, Image, Input, InputField, ScrollView, StatusBar, Text } from '@gluestack-ui/themed';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Keyboard, TouchableWithoutFeedback } from 'react-native';
import CardPoke from './src/components/card';
import GenMenu from './src/components/GenMenu';

export default function App() {

  const [pokeList, setPokeList] = useState([]);
  const [pokeListFiltred, setPokeListFiltred] = useState([]);
  const [search, setSearch] = useState('');
  const [genPoke, setGenPoke] = useState('limit=151&offset=0')
  const [load, setLoad] = useState(false);


  const handleSearch  = (e: string) => {
    setLoad(true)
    setSearch(e); 
    if(e === ''){
      setPokeListFiltred(pokeList)
    } else{
      const filteredList = pokeList.filter((pokemon) => pokemon.name.toLowerCase().includes(e.toLowerCase()));
      setPokeListFiltred(filteredList) 
  }
    setLoad(false)
}


  const fetchPoke = async () => {
    setLoad(true)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?${genPoke}`)
    .then((json) => {
      setPokeList(json.data.results);
      setPokeListFiltred(json.data.results)
    })
    .catch((err) => {
      console.log(err)
    })
    setLoad(false)
  }

  useEffect(() => {
    fetchPoke()
  }, [])

  return (
    <GluestackUIProvider config={config}>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Box bgColor='$white'>

          <StatusBar />

          <HStack w={'100%'} backgroundColor='$black' gap={20} alignItems='center' borderBottomLeftRadius={15} borderBottomRightRadius={15} >
            <Text left={10} color='$white' fontSize={30} fontWeight='$semibold' fontFamily='$mono'>Pokedex</Text>
            <Input mr={22} ml={22} w={200} mb={10} mt={10} borderRadius={20} left={10} borderColor='$white'>
              <InputField placeholder='Pesquise um pokemon' textAlign='center' type='text' color='white' onChangeText={handleSearch} value={search}/>
            </Input>
          </HStack>
          
          <GenMenu setSelected={setGenPoke} selected={genPoke}/>
          
        </Box>
      </TouchableWithoutFeedback>
        
        {load ? (

            <Box w={'100%'} h={'100%'} alignItems='center' justifyContent='center'>
              <ActivityIndicator color="#000" size="lg" />
            </Box>

        ) : (

          <Box>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView >
            <Box mt={10} mb={120} alignItems='center' > 

              {pokeListFiltred.length === 0 ? (
                <Box alignItems='center' justifyContent='center'>
                  <Image source={require('./src/assets/erro404.png')} alt='pokenon nao encontrado' width={300} h={300}/>
                  <Text color='$black' fontWeight='$bold'>Pokemon não encontrado!!</Text>
                </Box>
              ) : (
                 <FlatList
                 data={pokeListFiltred}
                 keyExtractor={(poke) => poke.url}
                 scrollEnabled={false}
                 renderItem={(item) => {
                   return <CardPoke url={item.item.url}/>;
                 }}
                 numColumns={2}
                 />
              )}
               

            </Box>
            </ScrollView>
          </TouchableWithoutFeedback>
        </Box>
        )}
        
        
    </GluestackUIProvider>
  );
}


