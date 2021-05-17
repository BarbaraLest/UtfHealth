import { DefaultTheme } from 'react-native-paper'


export default {
  background: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },

  buttonLogin: {
    width: '80%',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#C85A54',
    fontFamily: 'sans-serif',
    alignSelf: 'center',
    marginTop: 10
  },

  buttonNewAcc: {
    width: '40%',
    textAlign: 'center',
    backgroundColor: '#c85b53',
    fontFamily: 'sans-serif',
    marginTop: 20

  },

  buttonsView: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    flex: 1,
    alignItems: 'flex-start',
  },

  componentsViewLogin: {
    backgroundColor: 'transparent',
    flex: 5,
    width: '87%',
    justifyContent: 'center',
    alignSelf: 'center'

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

 
  labelMenuOptions: {
    color: '#C85A54',
    fontSize: 18,
    alignSelf: 'center'
  },
  
  labelUsernameMenu: {
    color: '#C85A54',
    fontSize: 25,
    alignSelf: 'center'

  },

  labelRegisterMenu: {
    color: '#404040',
    fontSize: 22,
    alignSelf: 'center',
    marginBottom:25
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

  theme: {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ff8b80',
      accent: '#c85b53',
      background: '#f5f5f6',
      backdrop:'#c85b53',
      text: '#404040'
    },
    fonts: 'regular'
  },



};
