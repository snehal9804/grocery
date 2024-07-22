import React, { useEffect } from 'react';
import { View,Text, StatusBar,Image} from 'react-native';
import { myColors } from '../utilities/MyColors';
import { useNavigation } from '@react-navigation/native';
const Splash=()=>{
  const nav=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      nav.replace('SignUp')
    },2000);
  },[]);

  return (
   <View style={{backgroundColor:myColors.primary,flex:1,justifyContent:'center'}}>
    <StatusBar style='light'/>
    <View style={{
      flexDirection:"row",
      alignItems:'center',
      justifyContent:'center',
      gap:15
    }}>
      <Image style={{tintColor:'white',height:75,width:65}} source={require('../assets/mainIcon.png')}></Image>
      <View>
        <Text style={{fontSize:75,color:myColors.secondary}}>nectar</Text>
        <Text style={{color:myColors.secondary,fontSize:17,textAlign:'center',letterSpacing:5,top:-15}}>online groceries</Text>
      </View>
    </View>
   </View>
  );
};

export default Splash;