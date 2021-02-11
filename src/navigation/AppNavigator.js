import React from 'react'

import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'

// --------------------------------------------------------------------------

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

// --------------------------------------------------------------------------

import HomeScreen from '../screens/HomeScreen'

// --------------------------------------------------------------------------

function HomeNavigator() {
    <Stack.Navigator>
        <Stack.Screen name="Home" component={ HomeScreen } options={{ title: 'Stonks' }} />
    </Stack.Navigator>
}

// --------------------------------------------------------------------------
// --------------------------------------------------------------------------

function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Home" component={ HomeNavigator } />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator