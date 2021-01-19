/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from "./UI/Screens/App"
import CreateScreen from './UI/Screens/CreateScreen'
import ExploreScreen from './UI/Screens/ExploreScreen'
import TimelineScreen from './UI/Screens/TimelineScreen'
import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => App);
