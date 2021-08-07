import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import img1 from './../../../assets/imgs/app.png'
import img2 from './../../../assets/imgs/doctors.png'
import img3 from './../../../assets/imgs/health.png'
import img4 from './../../../assets/imgs/start.png'


// @flow

export default function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      skipLabel="Pular"
      nextLabel="Próximo"
      onSkip={() => navigation.navigate('Home')}
      onDone={() => navigation.navigate('Home')}
      transitionAnimationDuration={1000}
      containerStyles={{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}
      imageContainerStyles={{
        paddingBottom: 0,
        justifyContent: 'center',
      }}
      pages={[
        {
          backgroundColor: '#ffff',
          title: 'Bem vindo (a)!',
          subtitle: 'Antes de começar, conheça o UtfHealth',
          titleStyles: {
            fontFamily: 'sans-serif',
            fontSize: 35,
            fontWeight: 'bold',
            color: '#c85b53',
          },
          subTitleStyles: {
            fontFamily: 'sans-serif',
            fontSize: 20,
            //fontWeight: 'bold',
            color: '#404040',
          },
          image: (
            <Image
              source={img1}
              resizeMode="center"
              style={{ width: '100%', height: '70%' }}
            />
          ),
        },
        {
          backgroundColor: '#ffff',
          image: (
            <Image
              source={img2}
              style={{ width: '100%', height: '70%' }}
              resizeMode="center"
            />
          ),
          title: 'Agendamento',
          subtitle: 'Agende suas consultas de forma rápida e prática pelo aplicativo. ',
          titleStyles: {
            fontFamily: 'sans-serif',
            fontSize: 35,
            fontWeight: '800',
            color: '#c85b53',
          },
          subTitleStyles: {
            fontFamily: 'sans-serif',
            fontSize: 20,
            //fontWeight: 'bold',
            color: '#404040',
          },
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={img3}
              style={{ width: '90%', height: '65%' }}
              resizeMode="center"
            />
          ),
          title: 'Histórico médico',
          subtitle:
            'Crie históricos médicos e tenha-os sempre na palma da mão',
          titleStyles: {
            fontFamily: 'sans-serif',
            fontSize: 35,
            fontWeight: '800',
            color: '#c85b53',
          },
          subTitleStyles: {
            fontFamily: 'sans-serif',
            fontSize: 20,
            //fontWeight: 'bold',
            color: '#404040',
          },
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image
              source={img4}
              style={{ width: '90%', height: '65%' }}
              resizeMode="center"
            />
          ),
          title: 'Tudo pronto!',
          subtitle:
            'Vamos começar?',
          titleStyles: {
            fontFamily: 'sans-serif',
            fontSize: 35,
            fontWeight: '800',
            color: '#c85b53',
          },
          subTitleStyles: {
            fontFamily: 'sans-serif',
            fontSize: 20,
            //fontWeight: 'bold',
            color: '#404040',
          },
        },
      ]}
    />
  );
}
