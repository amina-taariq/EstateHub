import { StyleSheet, Text, View } from 'react-native';

const Home: React.FC = () => {
    return <View style={styles.container}>
      <Text>Home Screen</Text>
  </View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Home;
