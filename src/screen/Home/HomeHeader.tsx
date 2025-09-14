import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import images from '../../constants/images';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';
import { TextInput } from 'react-native-gesture-handler';

const HomeHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileSubContainer}>
          <Image
            source={images.user}
            style={styles.avatar}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.text}>Good Morning</Text>
            <Text style={styles.userName}>Amina Tariq</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notificationIconContainer}>
          <Image source={icons.notificationIcon} style={styles.Icons} />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TouchableOpacity style={styles.searchSubContainer}>
          <Image source={icons.searchIcon} style={styles.Icons} />
          <TextInput
            placeholder="Search something"
            placeholderTextColor={'#8C8E98'}
            style={styles.input}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.notificationIconContainer}>
          <Image source={icons.filterIcon} style={styles.Icons} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 24,
  },
  searchContainer: {
    shadowColor: '#00000033',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 120,
    elevation: 20,
    borderWidth: 1,
    borderColor: '#FF80000A',
    borderRadius: 6,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  Icons: {
    width: 22,
    height: 22,
  },
  notificationIconContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileSubContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#8C8E98',
    fontSize: 12,
    fontFamily: fonts.Regular,
  },
  userName: {
    color: '#191D31',
    fontSize: 16,
    fontFamily: fonts.Medium,
    fontWeight:600
  },
  searchSubContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 14,
  },
  input: {
    fontSize: 14,
    color: '#191D31',
    
  },
});

export default HomeHeader;
