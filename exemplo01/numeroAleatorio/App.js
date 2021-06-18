import React, { useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {

  // useState inicia com valor padrão 0
  // dois parametros de retorno
  // numero é o estado e o segundo é a função que vai fazer alteração no estado
  // geralmente é chamado de set + nome do estado - exemplo setNumero
  // mutabilidade => estado nunca pode ter seu valor MUDADO e sim ALTERADO
  const [numero, setNumero] = useState(0);

  // handle para tudo que for ação do usuário (lidar)
  function handleNumero() {

    // Math.random() - gera um número aleatório (decimal)
    // O * 10 para indicar um número de 0 a 10.
    // Math.floor() - arrendondar número
    const novoNumero = Math.floor(Math.random() * 100);

    setNumero(numero + novoNumero)


  }


  return (
    // JSX Fragments <> </> - para startar mais de um componente no return
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.botao}>
        <Text style={style.botaoText}>Gerar número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const style = StyleSheet.create({
  container: {
    backgroundColor: '#FF0000',
    fontSize: 24,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  numero: {
    fontSize: 38,
    color: '#FFF',
    fontWeight: 'bold',

  },
  botao: {
    backgroundColor: '#FFF',
    width: '65%',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  botaoText: {
    fontSize: 19,
    fontWeight: 'bold',
  }

});

export default App;