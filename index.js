/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './src/theme/Login';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => Login);
