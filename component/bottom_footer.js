import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import styles from  './style/bottom_footer_style'

export default class Text_area extends Component {
    render() {
        return (
            <View>
                <View style={styles.footer_main} >
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/gallery.png')}
                        />
                        <Text>사진</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/file.png')}
                        />
                        <Text>파일</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/add.png')}
                        />
                        <Text>결과물 요청</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/envelope.png')}
                        />
                        <Text>결과물 제출</Text>
                    </View>
                 </View>

                <View style={styles.footer_main} >
                <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/person.png')}
                        />
                        <Text>수행완료</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/restrict.png')}
                        />
                        <Text>거래종료</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/cancel.png')}
                        />
                        <Text>제안종료</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/image/next.png')}
                        />
                        <Text>채팅종료</Text>
                    </View>
                </View>
            </View>
        )
    }
}
