import { StyleSheet, Text ,View } from 'react-native';
import { runPracticeDayjs } from './src/practice-dayjs';
import { getCalendarColumns } from './src/util';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import dayjs from 'dayjs';

export default function App() {
  const now = dayjs();
  const columns = getCalendarColumns(now);

  useEffect(() => {
    runPracticeDayjs();

    console.log('columns', columns);
  }, []);

  return (
    <View style={styles.container}>
      <Text>ttt</Text>
      <StatusBar style='auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
