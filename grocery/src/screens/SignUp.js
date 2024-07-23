import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { myColors } from '../utilities/MyColors';
import { ScrollView, StatusBar, Image, Text, View, TextInput,Button, TouchableOpacity }
 from 'react-native';
 import { Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const SignUp=()=> {
  const[isVisible,setisVisible]=useState(true);
  const nav=useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: myColors.secondary }}>
      <StatusBar />
      <ScrollView style={{ flex: 1, paddingTop: 30 }}>
        <Image style={{ alignSelf: 'center' }} source={require('../assets/mainIcon.png')}></Image>
        <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
          <Text style={{ color: myColors.third, fontSize: 24, fontWeight: 500 }}>Sign Up</Text>
          <Text
            style={{
              fontSize: 16, fontWeight: 400, color: 'grey', marginTop: 10
            }}
          >Enter your credentials here</Text>
          <Text style={{
            fontSize: 16, fontWeight: 500, color: 'grey', marginTop: 40
          }}>Username</Text>
          <TextInput
            maxLength={9}
            keyboardType='name-phone-pad'
            style={{
              backgroundColor: '#E3E3E3',
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15
            }}></TextInput>

            
            <Text style={{
            fontSize: 16, fontWeight: 500, color: 'grey', marginTop: 30
          }}>Email</Text>
          <TextInput
            
            keyboardType='email-address'
            style={{
              backgroundColor: '#E3E3E3',
              borderBottomWidth: 2,
              fontSize: 16,
              marginTop: 15
            }}></TextInput>


            <Text style={{
            fontSize: 16, fontWeight: 500, color: 'grey', marginTop: 40
          }}>Password</Text>
          <View 
          style={{borderColor:'#E3E3E3',
            borderBottomWidth:2,
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
          }}
          >
          <TextInput
          secureTextEntry={isVisible}
            maxLength={6}
            keyboardType='ascii-capable'
            style={{
              flex:0.9,
              fontSize: 17,
              marginTop: 15
            }}></TextInput>
             <Icon
             onPress={()=>{
              setisVisible(isVisible);
             }}
              source={isVisible==true ? "eye-off-outline" : "eye-outline"}color='black' size={24}
  />
            </View>
            <Text numberOfLines={2} style={{fontSize:14,fontWeight:400,color:'black',marginTop:15,letterSpacing:0.7,lineHeight:25,width:'95%',opacity:0.7}}>
              By continuing you agree to our terms of Services and Privacy Policy
            </Text>
            <TouchableOpacity 
            onPress={()=>{
              console.log('Press')
            }}
            style={{backgroundColor:myColors.primary,marginTop:30,height:70,borderRadius:20,justifyContent:'center',alignItems:'center'}} >
              <Text style={{fontSize:19,color:myColors.secondary,fontWeight:500}}>SignUp</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:20,gap:5}}>
              <Text style={{fontSize:16}}>Already have an account?</Text>
              <TouchableOpacity 
              onPress={()=>{
                nav.navigate('Login')
              }}
              >
              <Text style={{fontSize:15,color:myColors.primary,fontWeight:600}}>Login Now</Text>

              </TouchableOpacity>
             
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
