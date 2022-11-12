import React from 'react'
import Categories from './Categories/Categories'
import List from './List/List'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function Search() {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}>
            <Stack.Screen name="Search_Categories" component={Categories}/>
            <Stack.Screen name="Search_List" component={List}/>
        </Stack.Navigator>
    )
}
