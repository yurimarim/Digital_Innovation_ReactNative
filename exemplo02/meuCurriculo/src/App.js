import React from 'react';
import { StyleSheet, View, Image, Text, Alert, TouchableOpacity } from 'react-native';

import iconGitHub from '../src/scripts.js';

import yuriyuri from './assets/yuriyuri.jpeg';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';
import instagram from './assets/instagram.png';


// Importou pacote de icones -> yarn add react-native-vector-icons
// ou -> npm install react-native-vector-icons
// expo:
// import { Feather } from 'expo/vector-icons';


const App = () => {


  function handleRedeSocial(rede_social) {

    switch (rede_social) {

      case 'github':
        Alert.alert('GitHub', 'https://github.com/yurimarim')
        break
      case 'linkedin':
        Alert.alert('LinkedIn', 'https://www.linkedin.com/in/yuri-marim-6b6130197/')
        break
      case 'instagram':
        Alert.alert('Instagram', 'https://www.instagram.com/yuri_marim/')
        break
    }
  }


  return (
    <>
      <View style={style.page}>

        <View style={style.container_cabecalho}>
          <Image source={yuriyuri} style={style.yuriyuriImage} />
          <Text style={style.nome}>YURI MARIM</Text>
          <Text style={style.funcao}>Desenvolvedor Front-end | WEB e Mobile</Text>
          <View style={style.RedesSociais}>
            {/* Estamos usando arrow function para evitar a função inicie quando o projeto carregar
            Objetivo é só chamar quando executada, no caso o botão apertado */}
            <TouchableOpacity onPress={() => handleRedeSocial('github')}>
              <Image source={github} style={style.github} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
              <Image source={linkedin} style={style.linkedin} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRedeSocial('instagram')}>
              <Image source={instagram} style={style.instagram} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Experiência Profissional</Text>
            </View>

            <View style={style.card_content}>
              <Text style={style.card_content_text}>ADVOCACIA BELLINATI PEREZ</Text>
              <Text style={style.card_content_text}>[ Insira sua experiência aqui ...]</Text>
              <Text style={style.card_content_text}>[ Insira sua experiência aqui ...]</Text>
            </View>
          </View>
        </View>

        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Formação Acadêmica</Text>
            </View>

            <View style={style.card_content}>
              <Text style={style.card_content_text}>ADS - UniFCV</Text>
              <Text style={style.card_content_text}>HTML e CSS</Text>
              <Text style={style.card_content_text}>JavaScript</Text>
            </View>
          </View>
        </View>

      </View>
    </>
  );
};


const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  yuriyuriImage: {
    width: 150,
    height: 150,
    borderRadius: 125,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  funcao: {
    color: '#939393',
    marginBottom: 10,
  },
  github: {
    width: 30,
    height: 30,
  },
  linkedin: {
    width: 30,
    height: 30,
  },
  instagram: {
    width: 30,
    height: 30,
  },
  RedesSociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '45%',
    marginTop: 13,
  },
  card_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF'
  },
  card_content: {
    marginTop: 10,
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
    textAlign: 'center',
  },

})



export default App;
