import {
    Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProfileHeader from './ProfileHeader';
import ProfileSection from './ProfileSection';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';

const Profile: React.FC = () => {
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
          <ProfileHeader />
          <ProfileSection />
          <View style={styles.labelContainer}>
            <View style={styles.labelRow}>
              <Image source={icons.profileIcon} style={styles.icon} />
              <Text style={styles.labelText}>Profile</Text>
            </View>
            <View style={styles.labelRow}>
              <Image source={icons.notificationIcon} style={styles.icon} />
              <Text style={styles.labelText}>Notification</Text>
            </View>
            <View style={styles.labelRow}>
              <Image source={icons.shieldIcon} style={styles.icon} />
              <Text style={styles.labelText}>Security</Text>
            </View>
            <View style={styles.labelRow}>
              <Image source={icons.languageIcon} style={styles.icon} />
              <Text style={styles.labelText}>Language</Text>
            </View>
            <View style={styles.labelRow}>
              <Image source={icons.logoutIcon} style={styles.icon} />
              <Text style={styles.logoutText}>Logout</Text>
            </View>
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
  labelRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
  logoutText: {
    color: '#F75555',
    fontSize: 18,
    fontFamily: fonts.Medium,
    fontWeight: 800,
  },
  labelText: {
    color: '#191D31',
    fontSize: 18,
    fontFamily: fonts.Medium,
    fontWeight: 800,
  },
  labelContainer: {
    gap: 24,
    marginHorizontal: 20,
  },
});

export default Profile;
