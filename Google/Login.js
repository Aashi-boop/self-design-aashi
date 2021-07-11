import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Google from "expo-google-app-auth";
import AppLoading from "expo-app-loading";

export default class LoginScreen extends Component {

  render() {
 
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />
          <View style={styles.appTitle}>
            
            <Text style={styles.appTitleText}>{`Remind Me App`}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.signInWithGoogleAsync()}
            >
              <Image
                source={require("../assets/google_icon.png")}
                style={styles.googleIcon}
              ></Image>
              <Text style={styles.googleText}>Sign in with Google</Text>
            </TouchableOpacity>
          </View>
       
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  appIcon: {
    width: RFValue(130),
    height: RFValue(130),
    resizeMode: "contain"
  },
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(40),
   
  },
  buttonContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white"
  },
  googleIcon: {
    width: RFValue(30),
    height: RFValue(30),
    resizeMode: "contain"
  },
  googleText: {
    color: "black",
    fontSize: RFValue(20),
    
   
  },
  cloudContainer: {
    flex: 0.3
  },
  cloudImage: {
    position: "absolute",
    width: "100%",
    resizeMode: "contain",
    bottom: RFValue(-5)
  }
});
