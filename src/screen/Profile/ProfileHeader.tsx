import {
    Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';

const ProfileHeader: React.FC = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Profile</Text>
        <TouchableOpacity style={styles.notificationIconContainer}>
          <Image source={icons.notificationIcon} style={styles.Icons} />
        </TouchableOpacity>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationIconContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icons: {
    width: 22,
    height: 22,
  },
  text: {
    color: '#191D31',
    fontSize: 20,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
});

export default ProfileHeader;
