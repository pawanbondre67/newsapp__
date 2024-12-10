import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '../../../components/Header/Header'
import SearchBar from '../../../components/searchBar'
import { NewsDataType } from '../../../types'
import BreakingNews from '../../../components/BreakingNews'
// type Props = {}

const apikey = 'pub_619274f1178f61f2fe6800581f8ca7bb7e17f';
const HomeScreen = ( ) => {
  const {top : safetop} = useSafeAreaInsets();

  const [breakingNews, setBreakingNews] = useState<NewsDataType[]>([]);

  const getreakingNews = async () => {
    try {
      const response = await fetch(`https://newsdata.io/api/1/latest?apikey=${apikey}&country=in&language=en&image=1&removeduplicate=1&size=5`);
    const data = await response.json();
    console.log(data);
   if(data.status === 'success'){
     setBreakingNews(data.results);

    } }catch (error) {
      console.log(error);
    }
  }
  React.useEffect(() => {
    getreakingNews();
  }, []);
  return (
    <View style={[styles.container ,{paddingTop:safetop}]}>
     <Header />
     <SearchBar/>
     <BreakingNews newslist={breakingNews} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})