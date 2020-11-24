import React, { Component } from 'react'
import { Text, View } from 'react-native'
import style from  './style/text_Area_style'

export default class Text_area extends Component {
    render() {
        return (
            <View style={style.area_main} >
                <Text> First </Text>
                <Text>Second</Text>
                <Text>Third</Text>
            </View>
        )
    }
}
