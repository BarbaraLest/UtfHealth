var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=Home;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativePaper=require("react-native-paper");var _styles=_interopRequireDefault(require("./styles"));var _fundoR=_interopRequireDefault(require("./../../../assets/imgs/fundoR1.png"));var _formik=require("formik");var _MaterialCommunityIcons=_interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));var _jsxFileName="C:\\Users\\barba\\Documents\\TDS 2020.2\\ProjetoFinal\\Projeto\\UtfHealth\\src\\Screens\\Home\\Home.js";function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||typeof obj!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function Home(_ref){var navigation=_ref.navigation;var initialState={isDoctor:false};var _useState=(0,_react.useState)(initialState),_useState2=(0,_slicedToArray2.default)(_useState,2),user=_useState2[0],setUser=_useState2[1];(0,_react.useEffect)(function(){{}console.log(user);},[]);function HomeDoctor(){return _react.default.createElement(_reactNative.View,{style:_styles.default.background,__self:this,__source:{fileName:_jsxFileName,lineNumber:41,columnNumber:7}},_react.default.createElement(_reactNative.View,{style:_styles.default.homeHeaderContainer,__self:this,__source:{fileName:_jsxFileName,lineNumber:42,columnNumber:9}},_react.default.createElement(_reactNativePaper.IconButton,{icon:"menu",color:"#FFFF",size:30,onPress:function onPress(){return navigation.openDrawer();},__self:this,__source:{fileName:_jsxFileName,lineNumber:43,columnNumber:11}})));}function HomeUser(){return _react.default.createElement(_reactNative.View,{style:_styles.default.background,__self:this,__source:{fileName:_jsxFileName,lineNumber:57,columnNumber:7}},_react.default.createElement(_reactNative.ImageBackground,{source:_fundoR.default,style:{width:'100%',height:'100%',alignItems:'center',marginTop:-3},__self:this,__source:{fileName:_jsxFileName,lineNumber:58,columnNumber:9}},_react.default.createElement(_reactNative.View,{style:_styles.default.homeHeaderContainer,__self:this,__source:{fileName:_jsxFileName,lineNumber:59,columnNumber:11}},_react.default.createElement(_reactNativePaper.IconButton,{icon:"menu",color:"#FFBCAF",size:30,onPress:function onPress(){return navigation.openDrawer();},__self:this,__source:{fileName:_jsxFileName,lineNumber:60,columnNumber:13}})),_react.default.createElement(_reactNative.View,{style:_styles.default.homeContainer,__self:this,__source:{fileName:_jsxFileName,lineNumber:67,columnNumber:11}},_react.default.createElement(_reactNative.View,{style:_styles.default.homeCardContainer,__self:this,__source:{fileName:_jsxFileName,lineNumber:68,columnNumber:13}},_react.default.createElement(_reactNative.View,{style:_styles.default.homeCardViewTallTop,__self:this,__source:{fileName:_jsxFileName,lineNumber:69,columnNumber:15}},_react.default.createElement(_reactNativePaper.Card,{style:_styles.default.card1,elevation:3,onPress:function onPress(){return navigation.navigate('Appointment');},__self:this,__source:{fileName:_jsxFileName,lineNumber:70,columnNumber:17}},_react.default.createElement(_MaterialCommunityIcons.default,{name:"calendar-clock",size:60,color:"#00baca",style:{alignSelf:'center',marginTop:15},__self:this,__source:{fileName:_jsxFileName,lineNumber:75,columnNumber:19}}),_react.default.createElement(_reactNativePaper.Card.Content,{__self:this,__source:{fileName:_jsxFileName,lineNumber:76,columnNumber:19}},_react.default.createElement(_reactNativePaper.Title,{style:{alignSelf:'center',color:'#00baca'},__self:this,__source:{fileName:_jsxFileName,lineNumber:77,columnNumber:21}},"Marcar consulta")))),_react.default.createElement(_reactNative.View,{style:_styles.default.homeCardViewSmall,__self:this,__source:{fileName:_jsxFileName,lineNumber:83,columnNumber:15}},_react.default.createElement(_reactNativePaper.Card,{style:_styles.default.card2,elevation:3,onPress:function onPress(){return navigation.navigate('Consultations');},__self:this,__source:{fileName:_jsxFileName,lineNumber:84,columnNumber:17}},_react.default.createElement(_MaterialCommunityIcons.default,{name:"calendar-multiselect",size:60,color:"#00cf43",style:{alignSelf:'center',marginTop:15},__self:this,__source:{fileName:_jsxFileName,lineNumber:89,columnNumber:19}}),_react.default.createElement(_reactNativePaper.Card.Content,{__self:this,__source:{fileName:_jsxFileName,lineNumber:90,columnNumber:19}},_react.default.createElement(_reactNativePaper.Title,{style:{alignSelf:'center',color:'#00cf43'},__self:this,__source:{fileName:_jsxFileName,lineNumber:91,columnNumber:21}},"Minhas consultas")))),_react.default.createElement(_reactNative.View,{style:_styles.default.homeCardViewTallBottom,__self:this,__source:{fileName:_jsxFileName,lineNumber:96,columnNumber:15}},_react.default.createElement(_reactNativePaper.Card,{style:_styles.default.card4,elevation:3,onPress:function onPress(){return navigation.navigate('Clinical');},__self:this,__source:{fileName:_jsxFileName,lineNumber:97,columnNumber:17}},_react.default.createElement(_MaterialCommunityIcons.default,{name:"ballot",size:60,color:"#f47806",style:{alignSelf:'center',marginTop:15},__self:this,__source:{fileName:_jsxFileName,lineNumber:102,columnNumber:19}}),_react.default.createElement(_reactNativePaper.Card.Content,{__self:this,__source:{fileName:_jsxFileName,lineNumber:103,columnNumber:19}},_react.default.createElement(_reactNativePaper.Title,{style:{alignSelf:'center',color:'#f47806'},__self:this,__source:{fileName:_jsxFileName,lineNumber:104,columnNumber:21}},"Hist\xF3rico m\xE9dico"))))))));}return user.isDoctor=='true'?_react.default.createElement(HomeDoctor,{__self:this,__source:{fileName:_jsxFileName,lineNumber:117,columnNumber:36}}):_react.default.createElement(HomeUser,{__self:this,__source:{fileName:_jsxFileName,lineNumber:117,columnNumber:53}});}