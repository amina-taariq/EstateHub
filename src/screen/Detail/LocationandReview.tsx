import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import fonts from '../../utils/fonts';
import icons from '../../constants/icons';
import images from '../../constants/images';

const LocationAndReview: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Location</Text>
        <View style={styles.locationSection}>
          <Image source={icons.locationIcon} style={styles.icon} />
          <Text>Grand City St. 100, New York, United States</Text>
        </View>
        <Image source={images.map} style={styles.map} />
      </View>
      <View style={styles.container}>
        <View style={styles.reviewSection}>
          <View style={styles.review}>
            <Image source={icons.starIcon} style={styles.starIcon} />
            <Text style={styles.reviewText}>4.8 (1,275 reviews)</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.reviewUserSection}>
          <Image source={images.user} style={styles.avatar} />
          <Text style={styles.userName}>Charolette Hanlin</Text>
        </View>
        <Text>
          The apartment is very clean and modern. I really like the interior
          design. Looks like I'll feel at home 😍
        </Text>
        <View style={styles.lastContainer}>
          <View style={styles.review}>
            <Image source={icons.heartOrangeIcon} style={styles.icon} />
            <Text style={styles.reviewNo}>938</Text>
          </View>
          <Text style={styles.dateText}>6 days ago</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { marginHorizontal: 20},

  container: {
    gap: 20,
    marginBottom: 20,
  },
  headerText: {
    color: '#191D31',
    fontSize: 20,
    fontFamily: fonts.Medium,
    fontWeight: '800',
  },
  icon: {
    width: 20,
    height: 20,
  },
  locationSection: {
    flexDirection: 'row',
  },
  map: {
    width: '100%',
    height: 200,
  },
  reviewText: {
    color: '#191D31',
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  review: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  seeAll: {
    color: '#FF8000',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  reviewSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starIcon: {
    width: 24,
    height: 24,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewUserSection: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  userName: {
    color: '#191D31',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  userReview: {
    color: '#666876',
    fontSize: 16,
    fontFamily: fonts.Regular,
    fontWeight: 400,
  },
  lastContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dateText: {
    color: '#666876',
    fontSize: 14,
    fontFamily: fonts.Regular,
    fontWeight: 400,
  },
  reviewNo: {
    color: '#191D31',
    fontSize: 14,
    fontFamily: fonts.Regular,
    fontWeight: 500,
  },
});

export default LocationAndReview;
