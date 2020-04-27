import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.background}>
            <Feather
            style={styles.iconStyle} 
            name="search"
            size={30} />

            <TextInput 
             value={term}
             onChangeText={onTermChange}
             onEndEditing={onTermSubmit}
            
             autoCapitalize='none'
             autoCorrect={false}
             style={styles.inputStyle}
             placeholder="Search"
             />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor:'#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;