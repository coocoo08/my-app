import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, View, Text, Image, Button } from "react-native";
import CustomHook from "./CustomHook";
import StateWithClassComponent from './StateWithClassComponent'
import StateWithFuctionalComponent from './StateWithFuctionalComponent'
import UseEffectWithClassComponent from './UseEffectWithClassComponent'
import UseEffectWithFunctionalComponent from './UseEffectWithFunctionalComponent'

export default function App() {
  const [isTrue, setIsTrue] = useState(true);
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent/> */}
      {/* <StateWithFuctionalComponent/>*/}
      {/* {isTrue ? <UseEffectWithClassComponent/> : null} */}
      {/* {<UseEffectWithFunctionalComponent/>} */}
      {/* <Button title="toggle" onPress={() => setIsTrue(!isTrue)}></Button> */}

      <CustomHook/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
