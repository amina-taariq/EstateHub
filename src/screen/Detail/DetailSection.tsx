import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import fonts from '../../utils/fonts';
import icons from '../../constants/icons';


const DetailSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modernica Apartment</Text>
      <View>
        <View style={styles.innerContainer}>
          <Text style={styles.category}>APARTMENT</Text>
          <View style={styles.review}>
            <Image source={icons.starIcon} style={styles.icon} />
            <Text style={styles.reviewText}>4.8 (1,275 reviews)</Text>
          </View>
        </View>
      </View>
      <View style={styles.innerContainer3}>
        <View style={styles.bedContainer}>
          <Image source={icons.bedIcon} style={styles.icons} />
          <Text>8 Beds</Text>
        </View>
        <View style={styles.bedContainer}>
          <Image source={icons.bathIcon} style={styles.icons} />
          <Text>3 bath</Text>
        </View>
        <View style={styles.bedContainer}>
          <Image source={icons.areaIcon} style={styles.icons} />
          <Text>2000 sqft</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 20,
    paddingBottom: 30,
    borderBottomColor: '#FF80001A',
    borderBottomWidth: 1,
    gap: 16,
  },
  header: {
    color: '#191D31',
    fontSize: 24,
    fontFamily: fonts.Medium,
    fontWeight: 800,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  review: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  category: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#FF80001A',
    color: '#FF8000',
    fontSize: 12,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  icon: {
    width: 20,
    height: 20,
  },
  reviewText: {
    color: '#666876',
    fontSize: 14,
    fontFamily: fonts.Medium,
    fontWeight: 500,
  },
  icons: {
    width: 40,
    height: 40,
  },
  innerContainer3: {
    flexDirection: 'row',
    gap: 24,
  },
  bedContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});

export default DetailSection;
