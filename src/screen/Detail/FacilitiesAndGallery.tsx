import { StyleSheet, Text, View, Image } from 'react-native';
import fonts from '../../utils/fonts';
import { facilities, gallery } from '../../constants/data';

const FacilitiesSection: React.FC = () => {


  return (
    <View style={styles.mainContainer}>
      {/* Facilities Section */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Facilities</Text>

        <View style={styles.facilitiesWrapper}>
          {facilities.map((item, index) => (
            <View key={index} style={styles.facilityContainer}>
              <Image
                source={item.icon}
                style={styles.icons}
                resizeMode="contain"
              />
              <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                {item.title}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Gallery Section */}
      <View style={styles.container}>
        <Text style={styles.headerText}>Gallery</Text>
        <View style={styles.galleryContainer}>
          {gallery.slice(0, 3).map((img, index) => {
            const remainingCount = gallery.length - 3;

            if (index === 2 && remainingCount > 0) {
              return (
                <View key={index} style={styles.imageWrapper}>
                  <Image source={img} style={styles.image} />
                  <View style={styles.overlay} />
                  <Text style={styles.plusText}>+{remainingCount}</Text>
                </View>
              );
            }

            return (
              <View key={index} style={styles.imageWrapper}>
                <Image source={img} style={styles.image} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { marginHorizontal: 20, marginTop: 20 },

  container: {
    gap: 20,
    marginBottom: 20,
  },
  headerText: {
    color: '#191D31',
    fontSize: 20,
    fontFamily: fonts.Medium,
    fontWeight: '800',
  },

  // Facilities
  facilitiesWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  facilityContainer: {
    width: '23%',
    alignItems: 'center',
  },
  icons: {
    width: 60,
    height: 60,
  },
  title: {
    color: '#191D31',
    fontSize: 14,
    fontFamily: fonts.Regular,
    fontWeight: '400',
    marginTop: 8,
    textAlign: 'center',
  },

  // Gallery
  galleryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imageWrapper: {
    width: '31%',
    height: 105,
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  plusText: {
    position: 'absolute',
    fontSize: 20,
    color: '#FFFFFF',
    fontFamily: fonts.Bold,
    fontWeight: '800',
    alignSelf: 'center',
    top: '40%',
  },
});

export default FacilitiesSection;
