import { SafeAreaView, StyleSheet } from 'react-native';
import PracticeDayjs from './src/practice-dayjs';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PracticeDayjs />
    </SafeAreaView>
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
