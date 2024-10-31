//@ts-nocheck

import { config } from '@gluestack-ui/config';
import { Box, FlatList, GluestackUIProvider, HStack, Input, InputField, ScrollView, StatusBar, Text } from '@gluestack-ui/themed';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import CardPoke from './src/components/card';

export default function App() {

  const [pokeList, setPokeList] = useState([]);
  const [pokeListFiltred, setPokeListFiltred] = useState([]);
  const [search, setSearch] = useState('');


  const handleSearch  = (e: string) => {
    setSearch(e); 
    if(e === ''){
      setPokeListFiltred(pokeList)
    } else{
      const filteredList = pokeList.filter((pokemon) => pokemon.name.toLowerCase().includes(e.toLowerCase()));
      setPokeListFiltred(filteredList) 
  }
  
}


  const fetchPoke = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20000')
    .then((json) => {
      setPokeList(json.data.results);
      setPokeListFiltred(json.data.results)
    })
    .catch((err) => {
      console.log(err)
    })

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

        </Box>
      </TouchableWithoutFeedback>
        
        <Box>

          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView >
            <Box mt={10} mb={120} alignItems='center' > 

                <FlatList
                data={pokeListFiltred}
                keyExtractor={(poke) => poke.name}
                scrollEnabled={false}
                renderItem={(item) => {
                  return <CardPoke url={item.item.url}/>;
                }}
                numColumns={2}
                />

            </Box>
            </ScrollView>
          </TouchableWithoutFeedback>
        </Box>
    </GluestackUIProvider>
  );
}
