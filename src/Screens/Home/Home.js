import React, { Component, useState, useEffect } from 'react';
import { View, Image, ScrollView, StyleSheet, Text, ImageBackground } from 'react-native';
import { Card, Title, IconButton } from 'react-native-paper';
import styles from './styles';

import fundo from './../../../assets/imgs/fundoR1.png'
import { setNestedObjectValues } from 'formik';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import styles from './styles';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Home({ navigation }) {

  //CONSTS, FUNCTIONS AND HOOKS
  const initialState = {
    isDoctor: false,
  };

  const [user, setUser] = useState(initialState);

  useEffect(() => {
    {/**
    async function User() {
    
      setUser({
        isDoctor: await AsyncStorage.getItem('@UtfApi:typeUser'),
      });
     
    }
     
    User();
      */}
    console.log(user);
  }, []);

  //COMPONENT
  function HomeDoctor() {
    return (
      <View style={styles.background}>
        <View style={styles.homeHeaderContainer}>
          <IconButton
            icon="menu"
            color="#FFFF"
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        </View>
      </View>
    );
  }

  //COMPONENT
  function HomeUser() {
    return (
      <View style={styles.background}>
        <ImageBackground source={fundo} style={{ width: '100%', height: '100%', alignItems: 'center', marginTop:-3}} >
          <View style={styles.homeHeaderContainer}>
            <IconButton
              icon="menu"
              color="#FFBCAF"
              size={30}
              onPress={() => navigation.openDrawer()}
            />
          </View>
          <View style={styles.homeContainer}>
            <View style={styles.homeCardContainer}>
              <View style={styles.homeCardViewTallTop}>
                <Card
                  style={styles.card1}
                  elevation={3}
                  onPress={() => navigation.navigate('Appointment')}
                >
                 <Icon name="calendar-clock" size={60} color="#00baca" style={{alignSelf:'center', marginTop:15}}/>
                  <Card.Content > 
                    <Title style={{alignSelf:'center', color:'#00baca'}}>Marcar consulta</Title>

                  </Card.Content>
                </Card>
              </View>

              <View style={styles.homeCardViewSmall}>
                <Card
                  style={styles.card2}
                  elevation={3}
                >
                  <Icon name="calendar-multiselect" size={60} color="#00cf43" style={{alignSelf:'center', marginTop:15}}/>
                  <Card.Content > 
                    <Title style={{alignSelf:'center', color:'#00cf43'}}>Calendário</Title>

                  </Card.Content>
                </Card>

                <Card
                  style={styles.card3}
                  elevation={3}
                >
                  <Icon name="rocket" size={60} color="#cb005c" style={{alignSelf:'center', marginTop:15}}/>
                  <Card.Content > 
                    <Title style={{alignSelf:'center', color:'#cb005c'}}>Calendário</Title>

                  </Card.Content>
                </Card>
              </View>

              <View style={styles.homeCardViewTallBottom}>
                <Card
                  style={styles.card4}
                  elevation={3}
                  onPress={() => navigation.navigate('Clinical')}
                >
                  <Icon name="ballot" size={60} color="#f47806" style={{alignSelf:'center', marginTop:15}}/>
                  <Card.Content > 
                    <Title style={{alignSelf:'center', color:'#f47806'}}>Histórico médico</Title>

                  </Card.Content>
                </Card>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

    );
  }

  return user.isDoctor == 'true' ? <HomeDoctor /> : <HomeUser />;
}

