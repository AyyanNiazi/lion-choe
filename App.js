import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Alert,
  Button,
  TouchableOpacity
} from "react-native";


// You can import from local files
// import Quiz from "./components/quiz";
import Chat from "./component/chat";



// or any pure javascript modules available in npm
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { signInAction } from "./store/actions/userActions";

const TutorTabs = createBottomTabNavigator();
const Tabs = createBottomTabNavigator();
const TopTabs = createMaterialTopTabNavigator();
const StudentTabs = createBottomTabNavigator();
const RootStack = createStackNavigator();
const TutorAuthStackScreen = createStackNavigator();
const StudentAuthStackScreen = createStackNavigator();



const TutorAccountStack = () => {
  return (
    <TutorTabs.Navigator>
      <TutorTabs.Screen name="Tutor Profile" component={Chat} />
           
    </TutorTabs.Navigator>
  );
};





class App extends React.Component {
  state = {
    user: undefined,
    isAuthenticated: false,
    pageLoading: true
  };
  componentDidMount() {
    // console.log({ props: this.props.navigation });
   }
  render() {
    console.log(this.state.user, this.props.navigation);
    console.log(this.state.user);
    return (
      // <QuizUpload />
      // <Quiz />
      // <Provider store={store}>    
     
          <NavigationContainer>
             <RootStack.Navigator>
                <RootStack.Screen
                  name="Tutor Account"          
                  options={
                    {
                      title:'그룹 스터디 광고',
                      headerTitleStyle: { 
                        textAlign:"center", 
                        flex:1 ,
                        fontFamily:'NanumGothic',
                        fontWeight:700,
                        fontSize:16
                    },
                    // headerright
                    headerRight: () => (
                      <TouchableOpacity>
                         <Image
                            style={{width:20,height:20,marginRight:20}}
                            source={require('./assets/image/menu.svg')}
                        />
                      </TouchableOpacity>
                  ),
                    }
                  }       
                  component={Chat}
                />
                   <RootStack.Screen
                  name="new screen"                 
                  component={Chat}
                />
            </RootStack.Navigator>       
          </NavigationContainer>

      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  loaderView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // flexDirection: "row"
  }
});

// const navigator = createStackNavigator({
//   tutorlogin: {
//     screen: TutorLogin
//   },
//   tutorregister: {
//     screen: TutorRegister
//   },
//   tutordetails: {
//     screen: TutorDetails
//   },
//   tutorprofile: {
//     screen: TutorProfile
//   },
//   onlineclass: {
//     screen: OnlineClass
//   },
//   studentlogin: {
//     screen: StudentLogin
//   },
//   studentregister: {
//     screen: StudentRegister
//   },
//   tutorsignup: {
//     screen: TutorSignUp
//   },
//   studentsignup: {
//     screen: StudentSignUp
//   }
// });

// const AppContainer = createAppContainer(withNavigation(navigator));
export default App;
