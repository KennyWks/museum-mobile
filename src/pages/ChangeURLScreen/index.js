import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Input, Loading} from '../../components';
import {colors} from '../../utils';
import {showMessage} from 'react-native-flash-message';
//redux toolkit
import {connect, useDispatch, useSelector} from 'react-redux';
import ActionType from '../../redux/reducer/globalActionType';

function ChangeURLScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const languages = useSelector(state => state.languages);
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const onSave = () => {
    setLoading(true);
    dispatch({type: ActionType.CHANGE_SERVER, option: url});
    setLoading(false);
    handleErrorMessage(languages.success);
  };

  const handleErrorMessage = message => {
    showMessage({
      message: message,
      type: 'success',
    });
  };

  return (
    <View style={styles.container}>
      {!loading && (
        <View style={styles.container}>
          <View style={styles.page(tabBarHeight)}>
            <Input
              label={`${languages.example} : 192.168.1.1`}
              value={url}
              onChangeText={value => setUrl(value)}
              numKeyboardPad={true}
            />
            <Gap height={5} />
            <Button
              onPress={onSave}
              title={languages.button.buttonSave.label}
              type="dark"
            />
          </View>
        </View>
      )}
      {loading && <Loading />}
    </View>
  );
}

export default connect()(ChangeURLScreen);

const styles = StyleSheet.create({
  container: {backgroundColor: colors.dark, flex: 1},
  page: tabBarHeight => ({
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    backgroundColor: colors.dark,
    marginBottom: tabBarHeight + 15,
  }),
});
