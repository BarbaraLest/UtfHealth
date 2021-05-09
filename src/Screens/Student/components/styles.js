import { DefaultTheme } from 'react-native-paper'


export default {
  background: {
    flex: 1,
    backgroundColor: '#ffff',
    //  flexDirection: 'column',
  },

  buttonsView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'flex-start',
  },

  buttonNewAcc: {
    width: '40%',
    textAlign: 'center',
    backgroundColor: '#c85b53',
    fontFamily: 'sans-serif',
    marginTop: 20

  },

  componentsView: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '85%',
    //justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
  componentsHMView: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '85%',

    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },

  textTouchableOpacity: {
    fontSize: 20,
    fontFamily: 'sans-serif',
    color: '#404040',
    marginLeft: 20
  },

  textError: {
    fontSize: 15,
    color: '#ef3340',
    fontFamily: 'sans-serif',
  },

  textInput: {
    // flex: ,
    paddingLeft: 10,
    backgroundColor: '#FFFF',
    height: 62,
  },

  touchableOpacity: {
    width: '100%',
    height: '15%',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
