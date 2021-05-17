import React from 'react';
import { View, Text, Image } from 'react-native';
import {
  Title,
  Caption,
  Drawer,
  Provider as PaperProvider,
  Divider,
  DefaultTheme,
} from 'react-native-paper';
import { DrawerItem } from '@react-navigation/drawer';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from './../../Navigation/Context';

export default function DrawerContent(props) {
    const {signOut} = React.useContext(AuthContext);

  const FakeUser = {
    name: 'Barbara Rodrigues',
    register: '2041707'
  }

  return (
    <PaperProvider theme={styles.theme}>
      <View style={styles.menuOptionsGlobalView}>
        <View style={styles.menuOptionsView}>
          <View style={styles.menuTextView}>
            <Text style={styles.labelUsernameMenu}>{FakeUser.name}</Text>
            <Text style={styles.labelRegisterMenu}>{FakeUser.register}</Text>
     
          </View>
          <View style={{ flex: 2, marginTop:100}}>
          <Divider />
            <Drawer.Section>
              <DrawerItem
                style={styles.drawerSection}
                icon={({ color, size }) => (
                  <Icon name="home" color="#C85A54" size={size} />
                )}
                label="Home"
                labelStyle={styles.labelMenuOptions}
                onPress={() => {
                  props.navigation.navigate('Home');
                }}
              />
              <DrawerItem
                style={styles.drawerSection}
                icon={({ color, size }) => (
                  <Icon name="account" color="#C85A54" size={size} />
                )}
                label="Perfil"
                labelStyle={styles.labelMenuOptions}
                onPress={() => {
                  // props.navigation.navigate('Profile');
                }}
              />
              <DrawerItem
                style={styles.drawerSection}
                icon={({ color, size }) => (
                  <Icon name="help-circle-outline" color="#C85A54" size={size} />
                )}
                label="Ajuda"
                labelStyle={styles.labelMenuOptions}
                onPress={() => {
                  // props.navigation.navigate('Help');
                }}
              />
            </Drawer.Section>
          </View>

        </View>

      </View>
      <View style={styles.logoutView}>
        <Drawer.Section>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color="#C85A54" size={size} />
            )}
            label="Encerrar sessão"
            labelStyle={styles.labelLogout}
            onPress={() => {
                signOut();
            }}
          />
        </Drawer.Section>
      </View>

    </PaperProvider>
  );
}

const theme = {
  ...DefaultTheme,
  // roundness: 2,
  colors: {
    text: '#ffff',
  },
};
