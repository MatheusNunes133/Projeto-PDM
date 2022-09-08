import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function Troco( {troco} ){
    return <>
        <Text style={styles.textoPrincial}>Troco</Text>
        <View style={styles.container}>
            <Text style={styles.valor}>R$ { troco }</Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    textoPrincial: {
        marginTop: 24,

    },
    container: {
        backgroundColor: '#f9f9fb',
        height: 60,
        borderRadius: 4,
        paddingHorizontal: 16,
        justifyContent: 'center',
        marginTop: 8,
    }

})