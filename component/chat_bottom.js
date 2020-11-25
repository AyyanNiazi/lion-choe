import React, { Component } from "react";
import { Text, View } from "react-native";
import style from "./style/bottom";
import Text_Area from "./text_area";
import Bottom_Footer from "./bottom_footer";
export default class Chat_bottom extends Component {
  render() {
    return (
      <View style={style.bottom_body}>
        <View style={style.bottom}>
          <Text_Area />

          <Bottom_Footer />
        </View>
      </View>
    );
  }
}
