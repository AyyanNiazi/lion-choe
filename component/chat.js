import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import Chat_Bottom from "./chat_bottom";
import styles from "./style/chatTop";
export default class Chat extends Component {
  state = {
    message: ""
  };

  render() {
    return (
      <View style={{flex:1}} >
        <ScrollView style={styles.chatTopContainer}>
          <View>
            <Image
              source={require("../assets/image/Ellipse.jpeg")}
              style={styles.avatar}
            />{" "}
          </View>
          <View style={styles.receiveBody}>
            <Text style={styles.receiveText}> 검토 후 연락드리겠습니다. </Text>
            <Text style={styles.time}>오전 10:13</Text>
          </View>
          <View style={styles.sendBody}>
            <Text style={styles.time}>오전 10:13</Text>
            <Text style={styles.sendText}> 네 알겠습니다. </Text>
          </View>
        </ScrollView>
        <View style={styles.inputContainer}>
          <View style={{ width: "10%", }}>
            <Image
              source={require("../assets/image/Frame.png")}
              style={styles.inputAdd}
            />{" "}
          </View>
          <View style={{ width: "80%" }}>
            <TextInput
              style={styles.inputBox}
              placeholder="텍스트를 입력해주세요"
              placeholderTextColor="#C4C4C4"
              keyboardType="email-address"
              value={this.state.message}
              onChangeText={text => this.setState({ message: text })}
            />
          </View>
          <View style={{ width: "10%" }}>
            <Image
              source={require("../assets/image/send.png")}
              style={styles.inputSendBtn}
            />{" "}
          </View>
        </View>

        <Chat_Bottom />
      </View>
    );
  }
}
