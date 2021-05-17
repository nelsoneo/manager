import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const Spinner = () => {
    return (
        <View style= {styles.container}>
            <ActivityIndicator size='large' color="#0000ff"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});

export {Spinner};