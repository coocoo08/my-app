import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, Button, Platform, FlatList } from "react-native";
import Header from "./src/Header";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { friendProfiles, myProfile } from './src/data';
import Margin from './src/Margin';
import Profile from "./src/Profile";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";
import TabBar from "./src/TabBar";

const statusBarHeight = getStatusBarHeight(true);
const bottomSpace = getBottomSpace();

// console.log(`${Platform.OS}: ${statusBarHeight}, ${bottomSpace}`)

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] =  useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }

  const ItemSeparatorComponent = () => <Margin height={13} />
  const renderItem = ({ item }) => (
    <View>
        <Profile
            uri = {item.uri}
            name = {item.name}
            introduction = {item.introduction}
            isMe={false}
        />
    </View>
  )
  const ListHeaderComponene = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header/>

      <Margin height={10} />

      <Profile
        uri = {myProfile.uri}
        name = {myProfile.name}
        introduction = {myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        friendProfileLen={friendProfiles.length}
        onPressArrow={onPressArrow}
        isOpened={isOpened}
      />
      <Margin height={5}/>
    </View>

  )
  const ListFooterComponent = () => <Margin height={10}/>

  return(
    <View style={styles.container}>
      <FlatList
        data={isOpened ? friendProfiles : [] }
        keyExtractor={(_, index) => index}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        stickyHeaderIndices={[0]}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponene}
        ListFooterComponent={ListFooterComponent}
        showsVerticalScrollIndicator={false}
      />
      <TabBar selectedTabIdx = {selectedTabIdx} setSelectedTabIdx =  {setSelectedTabIdx} />
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 , paddingHorizontal: 15}}>
        

        <FriendList
          data={friendProfiles}
          isOpened={isOpened}
        />
      </View>


    </View>
  );
}

// yarn add yarn add styled-components , npm install yarn add styled-components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight
  }
});
