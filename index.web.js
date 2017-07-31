import { AppRegistry } from 'react-native';
import App from './source/components/App';

AppRegistry.registerComponent('AwesomeProject', () => App);

AppRegistry.runApplication('AwesomeProject', {
	rootTag: document.getElementById('react-root')
});