import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  chatTopContainer: {
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "#F3F3F3"
  },
  avatar: {
    width: 50,
    height: 50
  },
  receiveBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 10
  },
  sendBody: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginVertical: 10
  },
  sendText: {
    width: "fit-content",
    maxWidth: 240,
    alignSelf: "flex-end",
    backgroundColor: "#333333",
    color: "#FFFFFF",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "3px",
    borderBottomLeftRadius: "20px",
    fontSize: 13,
    borderBottomRightRadius: "20px",
    // transform: " matrix(-1, 0, 0, 1, 0, 0)",
    padding: 10
  },
  receiveText: {
    width: "fit-content",
    maxWidth: 240,
    backgroundColor: "#FFFFFF",
    color: "#747474",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "20px",
    fontSize: 13,
    padding: 10
  },
  time: {
    width: "fit-content",
    fontSize: 11,
    marginHorizontal: 10,
    color: "#ABABAB"
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 26,
    backgroundColor: "#FFFCFC",
    border: "1px solid #EEEEEE",
    boxSizing: "border-box",
    boxShadow: "2px -2px 10px rgba(0, 0, 0, 0.04)"
  },
  inputAdd: {
    width: 21,
    height: 21,
    marginEnd: 14
  },
  inputBox: {
    border: "none",
    fontSize: 12,
    color: "#747474",
    marginEnd: 14
  },
  inputSendBtn: {
    width: 24,
    height: 21
  }
});

export default styles;
