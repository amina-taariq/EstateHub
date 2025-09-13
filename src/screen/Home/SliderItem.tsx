import {
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from 'react-native';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';
import { Double } from 'react-native/Libraries/Types/CodegenTypes';

type HomeSliderItemProps = {
  image: ImageSourcePropType;
  title: string;
  location: string;
  price: string;
  rating: Double;
  category: string;
};

const SliderItem: React.FC<HomeSliderItemProps> = ({
  image,
  title,
  location,
  price,
  rating,
  category,
}) => {
  return (
    <TouchableOpacity style={styles.Container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.ItemContainer}
        imageStyle={styles.imageRadius}
      >
        <View style={styles.overlay} />
        <View style={styles.review}>
          <Image source={icons.starIcon} style={styles.star} />
          <Text style={styles.reviewText}>{rating}</Text>
        </View>
        <View style={styles.detailSection}>
          <Text style={styles.H1}>{title}</Text>
                  <Text style={styles.H5}>{ location}</Text>
          <View style={styles.moneySection}>
                      <Text style={styles.H1}>{ price}</Text>
            <TouchableOpacity>
              <Image source={icons.heartIcon} style={styles.heartIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Container: {
    marginLeft: 20,
  },
  ItemContainer: {
    width: 250,
    height: 340,
    overflow: 'hidden',
  },
  imageRadius: {
    borderRadius: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 20,
  },
  review: {
    marginTop: 24,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 100,
    backgroundColor: '#FFFFFFE5',
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 58,
    position: 'absolute',
    right:24,
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
  heartIcon: {
    width: 22,
    height: 22,
  },
  detailSection: {
    marginHorizontal: 16,
    marginBottom: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  moneySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  H1: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: fonts.Bold,
    fontWeight: 700,
  },
  H5: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fonts.Regular,
    fontWeight: 400,
  },
});

export default SliderItem;
