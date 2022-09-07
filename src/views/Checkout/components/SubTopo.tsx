import React from "react";
import { View , Text , StyleSheet} from "react-native"

export default function SubTopo ({ props }) {
    return <>
        <View style={styles.quantItens}>
            <Text> { props } </Text>
        </View>
    </>
}

const styles = StyleSheet.create({
    quantItens: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 2,
        borderTopColor: '#e5e5e5',
        borderTopWidth: 2,
        height: 56,
        justifyContent: 'center',
        fontSize: 16,
        marginTop: 40,
    },
    
},)