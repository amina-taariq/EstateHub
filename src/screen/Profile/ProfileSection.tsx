import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fonts from '../../utils/fonts';
import images from '../../constants/images';
import icons from '../../constants/icons';

const ProfileSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={images.user} style={styles.avatar} resizeMode="cover" />
        <Image source={icons.editIcon} style={styles.icon} resizeMode="cover" />
      </TouchableOpacity>
      <Text style={styles.UserNameText}>Amina Tariq</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 14,
    paddingBottom: 24,
    borderBottomColor: '#FF80001A',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginBottom: 24,
  },
  UserNameText: {
    color: '#191D31',
    fontSize: 24,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  icon: {
    width: 30,
    height: 30,
    position: 'absolute',
    bottom: 7,
    right: 0,
  },
});

export default ProfileSection;
