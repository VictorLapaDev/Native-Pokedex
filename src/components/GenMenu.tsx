import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from "react-native-popup-menu";
import { Entypo} from "@expo/vector-icons"

interface props {
    setSelected : (key: string) => void;
    selected: string
}

const GenMenu = ({setSelected, selected}: props) => {
    
  return (
    <MenuProvider style={{justifyContent: 'center', alignItems: 'center'}}>
        <Menu>
            <MenuTrigger >
                <Entypo name="dots-three-vertical" size={20} color='white'/>
            </MenuTrigger>

            <MenuOptions >
                <MenuOption onSelect={() => setSelected('limit=151&offset=0')} value={selected} text="1º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=100&offset=151')} value={selected} text="2º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=135&offset=251')} value={selected} text="3º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=107&offset=386')} value={selected} text="4º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=156&offset=493')} value={selected} text="5º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=72&offset=649')} value={selected} text="6º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=88&offset=721')} value={selected} text="7º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=96&offset=809')} value={selected} text="8º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=120&offset=905')} value={selected} text="9º Gen"/>
                <MenuOption onSelect={() => setSelected('limit=277&offset=1025')} value={selected} text="Variados"/>
            </MenuOptions>
        </Menu>
    </MenuProvider>
  

  )
}

export default GenMenu