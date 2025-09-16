import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import fonts from '../../utils/fonts';
import icons from '../../constants/icons';
import images from '../../constants/images';


const DetailSection: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
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
        <View style={styles.agentSection}>
          <Text style={styles.agentText}>Agent</Text>
          <View style={styles.profileContainer}>
            <View style={styles.profileSubContainer}>
              <Image
                source={images.user}
                style={styles.avatar}
                resizeMode="cover"
              />
              <View>
                <Text style={styles.agentUserName}>Natasya Wilodra</Text>
                <Text style={styles.userName}>Owner</Text>
              </View>
            </View>
            <View style={styles.chatSection}>
              <TouchableOpacity>
                <Image source={icons.chatIcon} style={styles.chatIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={icons.callIcon} style={styles.chatIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.overViewSection}>
          <Text style={styles.agentText}>Overview</Text>
          <Text style={styles.overviewDetail}>
            Sleek, modern 2-bedroom apartment with open living space, high-end
            finishes, and city views. Minutes from downtown, dining, and
            transit.
          </Text>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
  },
  container: {
    marginTop: 24,
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
  agentSection: {
    gap: 16,
    marginVertical:20
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  profileSubContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatIcon: {
    width: 28,
    height: 28,
  },
  chatSection: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  agentText: {
    color: '#191D31',
    fontSize: 20,
    fontFamily: fonts.Medium,
    fontWeight: 800,
  },
  agentUserName: {
    color: '#191D31',
    fontSize: 18,
    fontFamily: fonts.Medium,
    fontWeight: 800,
  },
  userName: {
    color: '#616161',
    fontSize: 14,
    fontFamily: fonts.Medium,
    fontWeight: 500,
  },
  overViewSection: {
    gap: 12,
  },
  overviewDetail: {
    color: '#616161',
    fontSize: 16,
    fontFamily: fonts.Regular,
    fontWeight: 400,
  },
});

export default DetailSection;
