import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NewsDataType } from '../../types';
import SliderItem from './SliderItem';

type Props ={
    newslist : NewsDataType[];
}

const BreakingNews = ({newslist} : Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Breaking News</Text>
      <View>
        <FlatList data={newslist}
        horizontal={true}
        keyExtractor={(_,index) =>`list_item${index}`}
        renderItem={({item,index}) => (
          <SliderItem slideItem={item} index={index}/>
        )}
      />
      </View>
    </View>
  );
};

export default BreakingNews;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    heading:{
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 10,
    },
});
