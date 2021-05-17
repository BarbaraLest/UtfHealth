import { DefaultTheme } from 'react-native-paper'


export default {
  background: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },


  card1: {
    height: '70%',
    borderRadius: 15,
    //backgroundColor: '#ffc17b'
    backgroundColor: '#ffff'
  },

  card2: {
    height: '70%',
    width: '45%',
    borderRadius: 15,
    //backgroundColor: '#ff7bbc'
    backgroundColor: '#ffff'
  },

  card3: {
    height: '70%',
    width: '45%',
    borderRadius: 15,
    //backgroundColor: '#8befaa'
    backgroundColor: '#ffff'
  },

  card4: {
    height: '70%',
    borderRadius: 15,
    //backgroundColor: '#84f6e6'
    backgroundColor: '#ffff'
  },

  cardView: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },


  componentsView: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '87%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },

  footerContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  homeContainer: {
    backgroundColor: 'transparent',
    width: '100%',
    flex: 3,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  homeHeaderContainer: {
    flex: 1,
    backgroundColor: '#0000',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },

  homeCardContainer: {
    backgroundColor: 'transparent',
    width: '90%',
    justifyContent: 'space-around',
    flex: 3,
    // flexDirection:'column'
  },

  homeCardViewTallTop: {
    flex: 2,
    justifyContent: 'flex-end'
  },

  homeCardViewTallBottom: {
    flex: 2,
    justifyContent: 'flex-start'
  },

  homeCardViewSmall: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },


  theme: {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ff8b80',
      accent: '#c85b53',
      background: '#f5f5f6',
      backdrop: '#c85b53',
      text: '#404040'
    },
    fonts: 'regular'
  },



};
