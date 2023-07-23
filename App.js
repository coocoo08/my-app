import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, Button, Platform } from "react-native";
import Header from "./src/Header";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin';
import Profile from "./src/Profile";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`)

export default function App() {
  const onPressArrow = () => {
    console.log("clicked arrow")
  }
  return (
    <View style={styles.container}>
      <Header/>

      <Margin height={10} />

      <Profile
        uri = {myProfile.uri}
        name = {myProfile.name}
        introduction = {myProfile.introduction}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
      />

      <FriendList
        data={friendProfiles}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
    paddingHorizontal: 15
  }
});
