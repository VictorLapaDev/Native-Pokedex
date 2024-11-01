import { Menu } from '@gluestack-ui/themed';
import { Text } from "@gluestack-ui/themed";
import { MenuItemLabel } from "@gluestack-ui/themed"
import { MenuItem } from "@gluestack-ui/themed"
import { Button } from "@gluestack-ui/themed"

interface props {
    setSelected : (key: string) => void;
    selected: string
}

const GenMenu = ({setSelected, selected}: props) => {
    
  return (
    
    <Menu 
    placement="bottom"
    selectedKeys={selected}
    onSelectionChange={(keys: object) => {
        console.log("onSelectionChange", keys)
        setSelected(keys)
   }}

    trigger={({ ...triggerProps }) => {
      return (
        <Button w={200}{...triggerProps}>
          <Text>Menu</Text>
        </Button>
      )
    }}>

        <MenuItem key="limit=151&offset=0" textValue="limit=151&offset=0">
            <MenuItemLabel size="sm">1° Gen</MenuItemLabel>
        </MenuItem>

        <MenuItem key="limit=100&offset=151" textValue="limit=100&offset=151">
            <MenuItemLabel size="sm">2° Gen</MenuItemLabel>
        </MenuItem>
        
        <MenuItem key="limit=135&offset=251" textValue="limit=135&offset=251">
            <MenuItemLabel size="sm">3° Gen</MenuItemLabel>
        </MenuItem>
        
        <MenuItem key="limit=107&offset=386" textValue="limit=107&offset=386">
            <MenuItemLabel size="sm">4° Gen</MenuItemLabel>
        </MenuItem>
        
        <MenuItem key="limit=156&offset=493" textValue="limit=156&offset=493">
            <MenuItemLabel size="sm">5° Gen</MenuItemLabel>
        </MenuItem>
        
        <MenuItem key="limit=72&offset=649" textValue="limit=72&offset=649">
            <MenuItemLabel size="sm">6° Gen</MenuItemLabel>
        </MenuItem>
        
        <MenuItem key="limit=88&offset=721" textValue="limit=88&offset=721">
            <MenuItemLabel size="sm">7° Gen</MenuItemLabel>
        </MenuItem>
        
        <MenuItem key="limit=96&offset=809" textValue="limit=96&offset=809">
            <MenuItemLabel size="sm">8° Gen</MenuItemLabel>
        </MenuItem>
        
        <MenuItem key="limit=120&offset=905" textValue="limit=120&offset=905">
            <MenuItemLabel size="sm">9° Gen</MenuItemLabel>
        </MenuItem>
        
        <MenuItem key="limit=277&offset=1025" textValue="limit=277&offset=1025">
            <MenuItemLabel size="sm">Variados</MenuItemLabel>
        </MenuItem>

    </Menu>

  )
}

export default GenMenu