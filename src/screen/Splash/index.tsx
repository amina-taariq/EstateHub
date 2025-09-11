import { StyleSheet, View, Image } from 'react-native';
import images from '../../constants/images'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList>;


const Splash: React.FC = () => {
  const [userLogin, setUserLogin] = useState(false);
    const navigation = useNavigation<SplashScreenNavigationProp>();
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.replace( userLogin?'Home':'Login');
      }, 3000);

      return () => clearTimeout(timer);
    }, [navigation,userLogin]);
    return (
      <View style={styles.container}>
        <Image source={images.splash} style={styles.image} />
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
        width: 230,
        height:172,
    }
});

export default Splash;
