// Quando o projeto é criado direto pelo npx
// npx react-native init 'nome do projeto' o index.js
// é primeira tela a ser carregada

/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
