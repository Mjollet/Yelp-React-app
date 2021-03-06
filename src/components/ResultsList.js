import React from 'react' ;
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
   if (!results.length){
       return null;
   }
   
   
    return (
    <View style= {styles.container}>
        <Text style= {styles.title}>{title}</Text>
        <Text style= {styles.total}> Results: {results.length}</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            return (
               <TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', { id: item.id })}> 
                <ResultsDetail result={item} />
               </TouchableOpacity>
            )
        }}
        />

    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },

    total: {
        fontSize: 13,
        marginLeft: 15,
        marginBottom: 5
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default withNavigation(ResultsList);