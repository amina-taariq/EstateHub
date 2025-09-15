import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import fonts from '../../utils/fonts';

interface TabIconProps {
  focused: boolean;
  activeIcon: ImageSourcePropType;
  inActiveIcon: ImageSourcePropType;
  label: string;
}
const TabIcon: React.FC<TabIconProps> = ({
  focused,
  activeIcon,
  inActiveIcon,
  label,
}) => {
  const Icon = focused ? activeIcon : inActiveIcon;
  return (
    <View style={styles.container}>
      <Image source={Icon} style={styles.image} />
      <Text style={[styles.label, focused && styles.focusedLabel]}>
        {label}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    gap: 5,
    width: 74,
  },
  image: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: 500,
    color: '#666876',
    fontFamily: fonts.Medium,
  },
  focusedLabel: {
    fontSize: 12,
    fontWeight: 500,
    color: '#FF8000',
    fontFamily: fonts.Medium,
  },
});

export default TabIcon;
