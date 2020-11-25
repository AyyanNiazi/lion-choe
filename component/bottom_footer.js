import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import styles from  './style/bottom_footer_style'

export default class Text_area extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={{textAlign:'center'}}>
                <View style={styles.footer_main} >
                    <View style={styles.element}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/gallery.png')}
                        />
                        <Text  style={{
                                color:'#8D8D8D',
                                fontFamily:'roboto',
                                weight:400,
                                fontSize:11,
                                textAlign:'center',
                                padding:10,
                                marginLeft:10
                              
                        }} >사진</Text>
                    </View>
                    <View style={styles.element} >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/file.png')}
                        />
                        <Text   style={{
                                color:'#8D8D8D',
                                fontFamily:'roboto',
                                weight:400,
                                fontSize:11,
                                textAlign:'center',
                                padding:10,
                                marginLeft:10
                              
                        }} >파일</Text>
                    </View>
                    <View style={styles.element}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/add.png')}
                        />
                        <Text  style={styles.text} >결과물 요청</Text>
                    </View>
                    <View style={styles.element} >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/envelope.png')}
                        />
                        <Text  style={styles.text} >결과물 제출</Text>
                    </View>

                    <View style={styles.element} >
                        <Image
                            style={styles.tinyLogo}
                            
                            source={require('../assets/image/person.png')}
                        />
                        <Text  style={styles.text} >수행완료</Text>
                    </View>
                    <View style={styles.element}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/restrict.png')}
                        />
                        <Text  style={styles.text} >거래종료</Text>
                    </View>
                    <View style={styles.element}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/cancel.png')}
                        />
                        <Text  style={styles.text} >제안종료</Text>
                    </View>
                    <View style={styles.element}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/next.png')}
                        />
                        <Text  style={styles.text} >채팅종료</Text>
                    </View>
                  </View>
                
                <View style={styles._dots_divider} >
                    <View style={styles._dots}></View>
                    <View style={styles._unfill_dots}></View>
                </View>
            </View>
        )
    }
}
