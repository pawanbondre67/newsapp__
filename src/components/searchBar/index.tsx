import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchbar}>
        <Ionicons name="search-outline" size={20} color={Colors.lightGrey} />
        <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.lightGrey}
        style={styles.searchtext}
        autoCapitalize="none" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    searchbar:{
        backgroundColor: '#E4E4E4',
        paddingHorizontal: 15,
        borderRadius: 10,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    searchtext:{
        flex: 1,
        fontSize: 16,
        color: Colors.darkGrey,
    },
});
