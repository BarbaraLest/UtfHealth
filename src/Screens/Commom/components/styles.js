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

  card1:{
    height: '70%', 
    borderRadius: 15, 
    //backgroundColor: '#ffc17b'
    backgroundColor: '#ffff'
  },

  card2:{
    height: '70%', 
    width:'45%', 
    borderRadius: 15,  
   //backgroundColor: '#ff7bbc'
   backgroundColor: '#ffff'
  },

  card3: {
    height: '70%', 
    width:'45%', 
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

  drawerSection: {
    marginTop: 20,
    fontFamily: 'sans-serif',
    backgroundColor: 'transparent',
    //alignItems:'center',
    //flexDirection:'row'.

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
    justifyContent:'flex-end' 
  },

  homeCardViewTallBottom: {
    flex: 2, 
    justifyContent:'flex-start' 
  },

  homeCardViewSmall: {
    flex: 2, 
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center' 
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
