import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../constants/images';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';

const Login: React.FC = () => {
    const handleLogin=() => {
        console.log('google login')
    };
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={images.onboarding}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.welcomText}>WELCOME TO ESTATEHUB</Text>
        <Text style={styles.heading}>
          Let’s get you closer to
          <Text style={styles.heading2}> your ideal home</Text>
        </Text>
        <Text style={styles.loginText}>Login to EstateHub with Google</Text>
        <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
          <Image
            source={icons.googleIcon}
            style={styles.googleIcon}
            resizeMode="contain"
          />
          <Text style={styles.btnText}>Sign Up with Google</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 'auto',
    height: 550,
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: '#FF80000A',
    paddingVertical:18,
    marginHorizontal: 15,
    marginBottom: 40,
    shadowColor: '#00000033', 
    shadowOffset: { width: 0, height: 4 }, 
    shadowOpacity: 1, 
    shadowRadius: 120,
    elevation: 20,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
  btnText: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: '#191D31',
  },
  welcomText: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: '#666876',
    alignSelf: 'center',
    marginBottom: 12,
  },
  loginText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: '#666876',
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 20,
  },
  heading: {
    fontSize: 32,
    fontFamily: fonts.Medium,
    marginHorizontal: 40,
    color: '#191D31',
    textAlign: 'center',
  },
  heading2: {
    color: '#FF8000',
  },
});

export default Login;
