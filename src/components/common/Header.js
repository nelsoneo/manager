import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = (props) => (
        <View style={styles.viewStyle}>
            <Text style={styles.textHead}>{props.headText}</Text>    
        </View>
    );

const styles = StyleSheet.create({
    textHead: {
        fontSize: 30,
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 10,
        elevation: 5,
        position: 'relative'
    }
});

export {Header};
