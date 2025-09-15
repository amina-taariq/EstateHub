import React, {useState, useRef} from 'react';
import {
  View,
  FlatList,
  Image,
  Dimensions,
  StyleSheet,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import icons from '../../constants/icons';
import { useNavigation } from '@react-navigation/native';

const {width} = Dimensions.get('window');

interface ImageSliderProps {
  images: ImageSourcePropType[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({images}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };
    const navigation = useNavigation();

    const handleBackPress = () => {
      navigation.goBack();
    };

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#FF8000' : '#FFFFFF',
                width: index === activeIndex ? 32 : 8,
              },
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
            <View style={styles.header}>
              <TouchableOpacity onPress={handleBackPress}>
                <Image source={icons.backIcon} style={styles.icon} />
              </TouchableOpacity>
              <View style={styles.innerContainer}>
                <TouchableOpacity>
                  <Image source={icons.blackHeartIcon} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={icons.shareIcon} style={styles.icon} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  imageContainer: {
    width: width,
  },
  image: {
    width: width,
    height: 460,
    resizeMode: 'cover',
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 6,
  },
  header: {
    position: 'absolute',
    top: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: width,
  },
  icon: {
    width: 28,
    height: 28,
  },
  innerContainer: {
    flexDirection: 'row',
    gap: 20,
  },
});

export default ImageSlider;