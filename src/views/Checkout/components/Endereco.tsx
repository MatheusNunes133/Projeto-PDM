import React from "react";
import { View, Image , Text , StyleSheet, TouchableOpacity } from "react-native"
import ponto from '../../../../assets/images/ponto.png'
import next from '../../../../assets/images/next.png'

export default function SubTopo (props) {
    return <>
    <View style={styles.container}>
        <Text>Endereço</Text>
        <View style={styles.card}>

            <View style={styles.imagem}>
                <Image source={ponto}></Image>
            </View>
            
            <Text>321 - Rua das Flores - Jardins...</Text>
            <TouchableOpacity onPress={()=>props.navegacao.navigate("Endereco")}>
                <Image source={next}></Image>   
            </TouchableOpacity>
           
        </View>
    </View>
    </>
}

const styles = StyleSheet.create({
    container : {
        marginTop: 26,
    },
    
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 60,
        backgroundColor: '#f9f9fb',
        borderRadius: 4,
        alignItems: 'center',
    },
    imagem: {
        backgroundColor: 'white',
        borderRadius: 4,
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
    },
})