import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {colors} from '../../../utils';

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
          <MenuOption style={styles.menuOption} value={data.value}>
            <Text style={styles.textLabel}>{data.label}</Text>
          </MenuOption>
        ))}
      </MenuOptions>
    </Menu>
  );
};

export default PopupMenu;

const styles = StyleSheet.create({
  menuOption: {backgroundColor: colors.secondary},
  textLabel: {color: colors.text.default},
});
