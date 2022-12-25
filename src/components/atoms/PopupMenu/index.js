import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

export const PopupMenu = ({label, options, onSelect}) => {
  const [opened, setOpened] = useState(false);

  function onOptionSelect(value) {
    onSelect(value);
    setOpened(false);
  }

  function onTriggerPress() {
    setOpened(true);
  }

  function onBackdropPress() {
    setOpened(false);
  }

  return (
    <Menu
      opened={opened}
      onBackdropPress={() => onBackdropPress()}
      onSelect={value => onOptionSelect(value)}>
      <MenuTrigger onPress={() => onTriggerPress()}>{label}</MenuTrigger>
      <MenuOptions>
        {options.map(data => (
          <MenuOption style={{backgroundColor: '#3d3c3c'}} value={data.value}>
            <Text style={{color: 'white'}}>{data.label}</Text>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
};

export default PopupMenu;
