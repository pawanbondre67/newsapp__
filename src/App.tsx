import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import BottomTabs from './screens/bottomTabs';
import { Colors } from './constants/Colors';

export type RootStackParamList = {
  Welcome: undefined;
  BottomTabs: undefined;
};
type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;



const Stack = createNativeStackNavigator();

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../src/assets/images/getting-started.jpg')}
          style={{ flex : 1 }}
          resizeMode="cover"
    >
            <View style={styles.wrapper}> 
                  <Text style={styles.title}>Welcome Page</Text>
                  <Text style={styles.description}>Get Breaking news and personlized updates directly to your feed.</Text>
                  <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('BottomTabs')}>
                    <Text style={styles.btntext}>Get Started..</Text>
                  </TouchableOpacity>
            </View>
      </ImageBackground>
  
    </View>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen options={
          { headerShown: false }
        } name="Welcome" component={WelcomeScreen} />

        <Stack.Screen
         options={
          { headerShown: false }
        } name="BottomTabs" component={BottomTabs} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  wrapper:{
    flex:1,
    justifyContent:'flex-end',
    paddingBottom:50,
    paddingHorizontal:30,
    gap:20,
    backgroundColor:'rgba(0,0,0,0.5)',

  },
  title:{
    fontSize:24,
    color: Colors.white,
    fontWeight:600,
    textAlign:'center',
  },
  description:{
    fontSize:16,
    fontWeight:400,
    color: Colors.white,
    textAlign:'center',
    letterSpacing:1,
    lineHeight:22,
  },
  btn:{
    backgroundColor:Colors.tint,
    paddingVertical:15,
    marginVertical:10,
    borderRadius:5,
  },
  btntext:{
    color:Colors.white,
    textAlign:'center',
    fontSize:16,
    fontWeight:700,
  }
});
