import { StyleSheet, Text, Image, View, TouchableOpacity, ImageSourcePropType } from 'react-native';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';

type SearchItemProps = {
      image: ImageSourcePropType;
      title: string;
      location: string;
      price: string;
      rating: any;
      category: string;
}

const SearchItem: React.FC<SearchItemProps> = ({
  image,
  title,
  location,
  price,
  rating,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.image} />
        <View style={styles.review}>
          <Image source={icons.starIcon} style={styles.star} />
                  <Text style={styles.reviewText}>{ rating}</Text>
        </View>
      </View>
      <View style={styles.titleSection}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
              <Text style={styles.location}> { location}</Text>
      </View>
      <View style={styles.fvtSection}>
        <TouchableOpacity>
          <Image source={icons.grayHeartIcon} style={styles.heartIcon} />
        </TouchableOpacity>
              <Text style={styles.money}>{ price}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingLeft: 14,
    paddingRight: 18,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  star: {
    width: 10,
    height: 10,
  },
  review: {
    backgroundColor: '#FFFFFFE5',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 2,
    gap: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    position: 'absolute',
    right: 6,
    borderRadius: 16,
    marginTop: 6,
  },
  reviewText: {
    color: '#246BFD',
    fontSize: 8,
    fontFamily: fonts.Medium,
    fontWeight: 800,
  },
  heartIcon: {
    width: 22,
    height: 22,
    alignSelf: 'flex-end',
  },
  title: {
    color: '#191D31',
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  location: {
    color: '#666876',
    fontSize: 14,
    fontFamily: fonts.Regular,
    fontWeight: 400,
  },
  titleSection: {
    gap: 10,
    width: '50%',
    marginLeft: 14,
    marginRight: 8,
  },
  fvtSection: {
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  money: {
    color: '#FF8000',
    fontSize: 18,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
});

export default SearchItem;
