import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';
import { useNavigation } from '@react-navigation/native';

type GridItemProps = {
  image: ImageSourcePropType;
  title: string;
  location: string;
  price: string;
  rating: any;
  category: string;
};

const GridItem: React.FC<GridItemProps> = ({
  image,
  title,
  location,
  price,
  rating,
}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    (navigation as any).navigate('Detail');
  };

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
      <View>
        <Image source={image} style={styles.image} />
        <View style={styles.overlay} />
        <View style={styles.review}>
          <Image source={icons.starIcon} style={styles.star} />
          <Text style={styles.reviewText}>{rating}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.locationText}>{location}</Text>

        <View style={styles.moneySection}>
          <Text style={styles.moneyText}>{price}</Text>
          <TouchableOpacity>
            <Image source={icons.grayHeartIcon} style={styles.heartIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: '48%',
    height: 275,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
    borderRadius: 12,
    paddingTop: 16,
    paddingHorizontal: 14,
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 154,
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(72, 70, 70, 0.2)',
    borderRadius: 10,
  },
  review: {
    marginTop: 12,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: '#FFFFFFE5',
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    right: 12,
  },
  star: {
    width: 14,
    height: 14,
  },
  reviewText: {
    color: '#246BFD',
    fontSize: 12,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  info: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 12,
  },
  moneySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  heartIcon: {
    width: 20,
    height: 20,
  },
  moneyText: {
    color: '#FF8000',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  locationText: {
    color: '#8C8E98',
    fontSize: 12,
    fontFamily: fonts.Regular,
    fontWeight: 400,
  },
  titleText: {
    color: '#191D31',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
});

export default GridItem;
