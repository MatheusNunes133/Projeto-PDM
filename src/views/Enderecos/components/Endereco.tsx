import React from "react";
import { View, Image , Text , StyleSheet, TouchableOpacity} from "react-native";
import seta from '../../../../assets/images/ponto.png'


export default function Endereco( {item: { numero, rua, bairro}}){
    return <View style={styles.container}>
        <Image style={styles.imagem} source={ seta }/>
        <Text>{ numero } - { rua } - { bairro }</Text>
        <TouchableOpacity style={styles.opcao}>
            <View className="bola" style={styles.bola}/>
            <View className="bola" style={styles.bola}/>
            <View className="bola" style={styles.bola}/>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container : {
        width: "90%",
        height: 88,
        backgroundColor: 'white',  
        borderRadius: 6,
        fontSize: 15,
        flexDirection: "row",
        alignItems: "center",
        padding: 24,
        alignSelf: 'center',
        borderBottomColor: '#e5e5e5',
        borderBottomWidth: 2,
    },
    imagem: {
        marginRight: 8,
    },
    bola: {
        backgroundColor: '#6a7d8b',
        width: 5,
        height: 5,
        borderRadius: 50,

    },
    opcao : {
        width: 24,
        height: 24,
        justifyContent: 'space-around',
        position: 'absolute',
        right: 0,
    }

})