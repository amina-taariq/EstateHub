import { StyleSheet, View, Image, Text } from 'react-native';
import images from '../../constants/images'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import fonts from '../../utils/fonts';
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  BottomTabs:undefined
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList>;


const Splash: React.FC = () => {
  const [userLogin, setUserLogin] = useState(true);
    const navigation = useNavigation<SplashScreenNavigationProp>();
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace(userLogin ? 'BottomTabs' : 'Login');
      }, 3000);

      return () => clearTimeout(timer);
    }, [navigation,userLogin]);
    return (
      <View style={styles.container}>
        <Image
          source={images.splash}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.h1}>ESTATEHUB</Text>
        <Text style={styles.h2}>CONNECTING YOU TO YOUR IDEAL HOME.</Text>
      </View>
    );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 133,
    height: 112,
  },
  h1: {
    fontFamily: fonts.Bold,
    fontWeight: 900,
    color: '#FF8000',
    fontSize: 20,
    marginTop: 12,
    marginBottom:10
  },
  h2: {
    fontFamily: fonts.Bold,
    color: '#666876',
    fontWeight: 500,
    fontSize: 10,
  },
});

export default Splash;
