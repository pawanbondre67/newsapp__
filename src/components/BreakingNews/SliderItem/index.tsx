import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NewsDataType } from '../../../types';
type Props = {
    slideItem : NewsDataType;
    index: number;
}


const {width} = Dimensions.get('screen');


const SliderItem = ({slideItem}:Props) => {
  return (
    <View style={styles.slideWrapper}>
     <Image source={{uri: slideItem.image_url}} style={styles.image}  />
     <Text>{slideItem.title}</Text>
         </View>
  );
};

export default SliderItem;

const styles = StyleSheet.create({
    slideWrapper:{
        position: 'relative',
        width: width,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginRight: 5,
    },
    image:{
        flex: 1,
        width: 350,
        height: '100%',
        borderRadius: 20,
        gap: 10,
        resizeMode : 'cover',
    },
});
