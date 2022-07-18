
import * as React from 'react';
import { Text, StyleSheet, View, Settings, Image } from 'react-native';

const SettingsScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
          <Image style={ styles.tinyIcons } resizeMode={ 'contain' } source={require('../../assets/images/home.png')}></Image> 
        </View>
    );
}

const styles = StyleSheet.create({
  tinyIcons: {
    width: 20,
    height: 20
  }
})

export default SettingsScreen;