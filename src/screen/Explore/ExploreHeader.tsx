import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';
import { TextInput } from 'react-native-gesture-handler';
type ExploreHeaderProps = {
  onFilterPress: () => void;
};

const ExploreHeader: React.FC<ExploreHeaderProps> = ({ onFilterPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={icons.backBtnIcon} style={styles.btnIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Search for Your Ideal Home</Text>
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
        <TouchableOpacity
          style={styles.notificationIconContainer}
          onPress={onFilterPress}
        >
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
  },
  btnIcon: {
    width: 32,
    height: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginBottom: 16,
  },
  title: {
    color: '#191D31',
    fontSize: 16,
    fontFamily: fonts.Medium,
    fontWeight: 800,
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

export default ExploreHeader;
