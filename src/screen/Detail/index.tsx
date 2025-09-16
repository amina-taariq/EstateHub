import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageSlider from './ImageSlider';
import { gallery } from '../../constants/data';
import DetailSection from './DetailSection';
import FacilitiesSection from './FacilitiesAndGallery';
import LocationAndReview from './LocationandReview';
import fonts from '../../utils/fonts';


const DetailScreen: React.FC = () => {
  
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
          <ImageSlider images={gallery} />
          <DetailSection />
          <FacilitiesSection />
          <LocationAndReview />
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.lastContainer}>
        <View>
          <Text style={styles.priceText}>Price</Text>
          <Text style={styles.price}>$17821</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lastContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 60,
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
  },
  btn: {
    backgroundColor: '#FF8000',
    paddingHorizontal: 26,
    paddingVertical: 14,
    borderRadius: 100,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  priceText: {
    color: '#666876',
    fontSize: 12,
    fontFamily: fonts.Medium,
    fontWeight: 500,
  },
  price: {
    color: '#FF8000',
    fontSize: 24,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
});

export default DetailScreen;
