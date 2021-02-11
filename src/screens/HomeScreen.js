import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function HomeScreen() {
    return (
        <View>
            <Text style={styles.text}>
                Welcome to Stonks!
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
    text: {
        fontSize: 20
    }

})