import { DefaultTheme } from 'react-native-paper'


export default {
  background: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
  },

  componentsView: {
    backgroundColor: 'transparent',
    flex: 1,
    width: '87%',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },

  drawerSection: {
    marginTop: 20,
    fontFamily: 'sans-serif',
    backgroundColor: 'transparent',
    //alignItems:'center',
    //flexDirection:'row'.

  },
 
  labelMenuOptions: {
    color: '#C85A54',
    fontSize: 18,
    alignSelf: 'center'
  },

  labelLogout: {
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

  logoutView: {
    backgroundColor: '#FFBCAF',
    height: '9%',
    justifyContent: 'space-around',
  },

  menuBackground: {
    flex: 1,
    backgroundColor: '#F5F5F6',
    //flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  menuOptionsView: {
    flexDirection: 'column',
    width: '80%',
    height: '100%',
    justifyContent: 'space-around'
  },

  menuOptionsGlobalView: {
    backgroundColor: '#F5F5F6',
    justifyContent: 'space-around',
    //height: '91%',
    alignItems: 'center',
    flex: 1
  },

  menuTextView: {
    backgroundColor: '#F5F5F6',
    flex: 1,
    justifyContent: 'flex-end',
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
      backdrop:'#c85b53',
      text: '#404040'
    },
    fonts: 'regular'
  },



};
