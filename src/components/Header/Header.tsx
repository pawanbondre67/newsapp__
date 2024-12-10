import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../constants/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userinfo}>
        <Image source={{uri : 'https://xsgames.co/randomusers/avatar.php?g=male'}}
         style={styles.userImg}
     />
      <View style={{gap:2}}>
      <Text style={styles.welcometext}>Welcome ! </Text>
      <Text style={styles.username}>John Doe</Text>
      </View>

     </View>

      <TouchableOpacity onPress={()=>{}}>
      <Ionicons name="notifications-outline" size={24} color={Colors.black} />
      </TouchableOpacity>

    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    userImg: {
        width: 50,
        height: 50,
        borderRadius: 30,
    },
    userinfo:{
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        alignItems: 'center',
    },
    welcometext:{
        fontSize: 16,
        color: Colors.darkGrey,
        fontWeight: 'bold',
    },
    username:{
        fontSize: 18,
        color: Colors.black,
    },
});
