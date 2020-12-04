import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import App from './App'
import Details from './Details'

const screens = {
    Home: {
        screen: App
    },
    Details: {
        screen: Details
    }
}
const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack)