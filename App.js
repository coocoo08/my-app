import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, Button, Platform } from "react-native";
import Header from "./src/Header";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { myProfile } from './src/data';
import Margin from './src/Margin';
import MyProfile from "./src/MyProfile";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`)

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>

      <Margin height={10} />

      <MyProfile
        uri = {myProfile.uri}
        name = {myProfile.name}
        introduction = {myProfile.introduction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight
  }
});
