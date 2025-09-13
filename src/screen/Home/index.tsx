import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeHeader from './HomeHeader';
import fonts from '../../utils/fonts';
import { cards } from '../../constants/data'
import HomeSlider from './HomeSlider';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <HomeHeader />
          <View style={styles.titleContainer}>
            <Text style={styles.h2}>Featured</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
          <HomeSlider data={cards} />
          <View style={styles.titleContainer}>
            <Text style={styles.h2}>Our Recommendation</Text>
            <Text style={styles.seeAll}>See All</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginHorizontal: 20,
  },
  h2: {
    color: '#191D31',
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    fontWeight: 600,
  },
  seeAll: {
    color: '#FF8000',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    fontWeight: 600,
  },
});

export default Home;
