import React, {useState} from 'react';
import api from '../../../../Api'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ValorTotal( {navegacao, itens, subtotal, frete, total}){
  const [token, setToken] = useState()
  const [name, setName] = useState()

  async function getToken(){
    let tokenUser = await AsyncStorage.getItem("Token")
    if(tokenUser){
      setToken(tokenUser)
    }
  }
  getToken()

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': token
  }

  let data = {
	"formaPagamento":"DINHEIRO",
	"idEndereco":1,
	"cpfCliente":"12345678910",
	"cnpjEmpresa":"11111111111",
	"troco":210,
	"itens":[{
		"id":{
			"itemId":2
		},
		"quantItem":2
	},
		{
		"id":{
			"itemId":4
		},
		"quantItem":1
	},
					 {
		"id":{
			"itemId":5
		},
		"quantItem":3
	}
	]
}


console.log(data)

  function createPost() {
    api.post(`/pedidos/`, data, {
        headers: headers
      }).then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  
    return <View style={styles.container}>

        <View style={styles.grid}>
            <Text>Subtotal</Text>
            <Text style={styles.valor}>R$ {subtotal}</Text>
        </View>

        <View style={[styles.grid, styles.frete]}>
            <Text>Frete</Text>
            <Text style={styles.valor}>R$ {frete}</Text>
        </View>

        <View style={[styles.grid, styles.total]}>
            <Text>Total</Text>
            <Text style={styles.valorTotal}>R$ {total}</Text>
        </View>

        <TouchableOpacity style={styles.botao}
        onPress={() => {
            createPost();
            navegacao.navigate('Pedidos');
            
            }}>
            <Text style={styles.textoBotao}>Finalizar Pedido</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9f9fb',
        borderRadius: 8,
        paddingHorizontal: 32,
        paddingVertical: 48,
        marginVertical: 40,
    },
    grid: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
    },
    frete: {
        borderBottomColor: '#e5e5e5',
        paddingBottom: 24,
        borderBottomWidth: 2,
        borderStyle: 'dashed',
    },
    total: {
        marginTop: 5,
        marginBottom: 20,
    },
    valor : {
        fontWeight: 'bold',
    },
    valorTotal: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#fb9400'
    },
    botao: {
        backgroundColor: '#fb9400',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
    },
    textoBotao: {
        color: 'white',
        fontSize: 16,
    }
})
