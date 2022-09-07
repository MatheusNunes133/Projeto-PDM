import React from 'react';
import Topo from '../../components/Topo/Topo';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Endereco from "./components/Endereco"
import itens from '../../components/mock/enderecos'

export default function Enderecos() {
    


    return  <>
    
    <FlatList
        data={itens}
        renderItem={Endereco}
        keyExtractor={() => {}}
        ListHeaderComponent={() => {
            return <Topo children={'Meus Endereços'}/>
        }}
        style = {styles.container}
    />
    <TouchableOpacity style={styles.botao}
        onPress={() => {}}>
        <Text style={styles.textoBotao} >Novo Endereco</Text>
    </TouchableOpacity>
</>
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#FFF"
    },
    botao: {
        width: '90%',
        backgroundColor: '#fb9400',
        height: 60,
        borderRadius: 4,
        color: 'white',
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }

},)