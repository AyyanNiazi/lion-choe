
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Chat_Bottom from './chat_bottom'
export default class Chat extends Component {
    render() {
        return (
            <View>
                <Text> Chat tops </Text>

                <Chat_Bottom/>
            </View>
        )
    }
}

