import { Button, CloseIcon, Divider, Heading, Icon, Modal, ModalBackdrop, ModalBody, ModalContent, Radio } from "@gluestack-ui/themed"
import { useState } from "react";
import { Center } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { ModalCloseButton } from "@gluestack-ui/themed";
import { RadioGroup } from "@gluestack-ui/themed";
import { RadioLabel } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { MenuIcon } from "@gluestack-ui/themed";
import { AddIcon } from "@gluestack-ui/themed";


interface props {
    setSelected: (key: string) => void;
    selected: string;
}


const PokeMenu = ({selected, setSelected}: props) => {

    const[modal, setModal] = useState(false)

  return (
        <Center h={20} w={20}>
            
          <Button bgColor="$black" onPress={() => setModal(true)}>
            <Icon as={MenuIcon} color="$white" size="lg"/>
          </Button>

          <Modal
            isOpen={modal}
            onClose={() => {
              setModal(false)
            }}
          >
            <ModalBackdrop />
            <ModalContent>
              <ModalHeader>
                <Heading size="lg">Escolha a geração:</Heading>
                <ModalCloseButton>
                  <Icon as={CloseIcon} />
                </ModalCloseButton>
              </ModalHeader>

              <ModalBody>
                <VStack>
                    <RadioGroup value={selected} onChange={setSelected} >

                        <Radio value="limit=151&offset=0" size="md" >                            
                            <RadioLabel h={30} color={"$black"} fontWeight={selected === 'limit=151&offset=0' ? '$bold' : '$light'} backgroundColor={selected === 'limit=151&offset=0' ? '$coolGray200' : '$warmGray100'} w={300} >1º Gen</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=100&offset=151" size="md" >                            
                            <RadioLabel h={30}  color={"$black"} fontWeight={selected === 'limit=100&offset=151' ? '$bold' : '$light'} backgroundColor={selected === 'limit=100&offset=151' ? '$coolGray200' : '$warmGray100'} w={300}  >2º Gen</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=135&offset=251" size="md">                            
                            <RadioLabel h={30}  color={"$black"} fontWeight={selected === 'limit=135&offset=251' ? '$bold' : '$light'} backgroundColor={selected === 'limit=135&offset=251' ? '$coolGray200' : '$warmGray100'} w={300} >3º Gen</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=107&offset=386" size="md">                            
                            <RadioLabel h={30}  color={"$black"} fontWeight={selected === 'limit=107&offset=386' ? '$bold' : '$light'} backgroundColor={selected === 'limit=107&offset=386' ? '$coolGray200' : '$warmGray100'} w={300} >4º Gen</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=156&offset=493" size="md">                            
                            <RadioLabel h={30} color={"$black"} fontWeight={selected === 'limit=156&offset=493' ? '$bold' : '$light'} backgroundColor={selected === 'limit=156&offset=493' ? '$coolGray200' : '$warmGray100'} w={300} >5º Gen</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=72&offset=649" size="md">                            
                            <RadioLabel h={30} color={"$black"} fontWeight={selected === 'limit=72&offset=649' ? '$bold' : '$light'} backgroundColor={selected === 'limit=72&offset=649' ? '$coolGray200' : '$warmGray100'} w={300} >6º Gen</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=88&offset=721" size="md">                            
                            <RadioLabel h={30} color={"$black"} fontWeight={selected === 'limit=88&offset=721' ? '$bold' : '$light'} backgroundColor={selected === 'limit=88&offset=721' ? '$coolGray200' : '$warmGray100'} w={300} >7º Gen</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=96&offset=809" size="md">                            
                            <RadioLabel h={30} color={"$black"} fontWeight={selected === 'limit=96&offset=809' ? '$bold' : '$light'} backgroundColor={selected === 'limit=96&offset=809' ? '$coolGray200' : '$warmGray100'} w={300} >8º Gen</RadioLabel>
                        </Radio>
                        <Divider/>   
                        <Radio value="limit=120&offset=905" size="md">                            
                            <RadioLabel h={30} color={"$black"} fontWeight={selected === 'limit=120&offset=905' ? '$bold' : '$light'} backgroundColor={selected === 'limit=120&offset=905' ? '$coolGray200' : '$warmGray100'} w={300} >9º Gen</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=277&offset=1025" size="md">                            
                            <RadioLabel h={30}  color={"$black"} fontWeight={selected === 'limit=277&offset=1025' ? '$bold' : '$light'} backgroundColor={selected === 'limit=277&offset=1025' ? '$coolGray200' : '$warmGray100'} w={300} >Variados</RadioLabel>
                        </Radio>
                        <Divider/>
                        <Radio value="limit=10000" size="md">                            
                            <RadioLabel h={30} color={"$black"} fontWeight={selected === 'limit=10000' ? '$bold' : '$light'} backgroundColor={selected === 'limit=10000' ? '$coolGray200' : '$warmGray100'} w={300} >Todos</RadioLabel>
                        </Radio>

                    </RadioGroup>
                </VStack>
              </ModalBody>

            </ModalContent>
          </Modal>
        </Center>
      )
   
  
}

export default PokeMenu
