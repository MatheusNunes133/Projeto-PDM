import React from "react";
import { View , Text , StyleSheet} from "react-native"

export default function SubTopo ({ props , status}) {
    return <>
        <View style={styles.quantItens}>
            <Text> { props } </Text>
            <View style={styles.status}>
                <Text style={styles.statusText}> { status } </Text>
            </View>
        </View>
    </>
}

const styles = StyleSheet.create({
    quantItens: {
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 2,
        height: 55,
        justifyContent: 'center',
        fontSize: 16,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    status: {
        backgroundColor: '#edf1f8',
        borderRadius: 4,
        width: 78,
        height: 26,
        justifyContent:"center",
        
    },
    statusText: {
        textAlign: 'center',
        color: '#4f77be',
        fontSize: 11,
    },
    
},)