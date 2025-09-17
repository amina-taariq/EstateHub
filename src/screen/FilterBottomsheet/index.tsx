import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import icons from '../../constants/icons';
import fonts from '../../utils/fonts';
import images from '../../constants/images';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { useState } from 'react';
import { categories } from '../../constants/data';
import CustomMarker from '../../components/CustomMarker/CustomMarker';
interface FilterBottomsheetProps {
  visible: boolean;
  onClose: () => void;
}


const FilterBottomsheet: React.FC<FilterBottomsheetProps> = ({
  visible,
  onClose,
}) => {
  const [buildingSize, setBuildingSize] = useState<[number, number]>([1, 5000]);
  const [priceRange, setPriceRange] = useState<[number, number]>([500, 50000]);
  const [selected, setSelected] = useState<string[]>([]);
  const [bedrooms, setBedrooms] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const toggleSelection = (category: string) => {
    setSelected(
      prev =>
        prev.includes(category)
          ? prev.filter(c => c !== category)
          : [...prev, category], 
    );
  };

  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.sheet}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <Image source={icons.backBtnIcon} style={styles.btnIcon} />
          </TouchableOpacity>
          <Text style={styles.title}>Filter</Text>
          <TouchableOpacity>
            <Text style={styles.reset}>Reset</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.priceRangeSection}>
          <Text style={styles.H1}>Price Range</Text>
          <View>
            <Image source={images.barChart} style={styles.barChart} />
            <View style={styles.sliderContainer}>
              <MultiSlider
                values={[priceRange[0], priceRange[1]]}
                min={500}
                max={50000}
                step={1}
                trackStyle={styles.trackStyle}
                sliderLength={Dimensions.get('window').width - 50}
                selectedStyle={styles.selectedStyle}
                unselectedStyle={styles.unselectedStyle}
                customMarker={e => (
                  <CustomMarker currentValue={e.currentValue} isPrice={true} />
                )}
              />
            </View>
          </View>
        </View>
        <View style={styles.propertyType}>
          <Text style={styles.H1}>Property Type</Text>
          <View style={styles.categoriesContainer}>
            {categories.slice(1, -1).map((item, index) => {
              const isSelected = selected.includes(item.category);
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.category,
                    isSelected && { backgroundColor: '#FF8000' },
                  ]}
                  onPress={() => toggleSelection(item.category)}
                >
                  <Text
                    style={
                      isSelected
                        ? styles.SelectedCategoryText
                        : styles.categoryText
                    }
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.H1}>Details</Text>

          {/* Bedrooms */}
          <View style={styles.section}>
            <Text style={styles.Bathrooms}>Bedrooms</Text>
            <View style={styles.btnSection}>
              <TouchableOpacity
                onPress={() => setBedrooms(prev => Math.max(0, prev - 1))}
              >
                <Image source={icons.btnIcon} style={styles.icons} />
              </TouchableOpacity>
              <Text>{bedrooms}</Text>
              <TouchableOpacity onPress={() => setBedrooms(prev => prev + 1)}>
                <Image source={icons.plusBtnIcon} style={styles.icons} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Bathrooms */}
          <View style={styles.section}>
            <Text style={styles.Bathrooms}>Bathrooms</Text>
            <View style={styles.btnSection}>
              <TouchableOpacity
                onPress={() => setBathrooms(prev => Math.max(0, prev - 1))}
              >
                <Image source={icons.btnIcon} style={styles.icons} />
              </TouchableOpacity>
              <Text>{bathrooms}</Text>
              <TouchableOpacity onPress={() => setBathrooms(prev => prev + 1)}>
                <Image source={icons.plusBtnIcon} style={styles.icons} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buildingSize}>
          <Text style={styles.H1}>Building Size</Text>
          <View>
            <View style={styles.buildingSizeslider}>
              <MultiSlider
                values={[buildingSize[0], buildingSize[1]]}
                min={1}
                max={5000}
                step={1}
                trackStyle={styles.trackStyle}
                sliderLength={Dimensions.get('window').width - 50}
                selectedStyle={styles.selectedStyle}
                unselectedStyle={styles.buildingSizesliderUnselectedStyle}
                customMarker={e => (
                  <CustomMarker currentValue={e.currentValue} isPrice={false} />
                )}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.setFilterBtn}>
          <Text style={styles.btnText}>Set Filter</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 14,
    paddingTop: 24,
    elevation: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: -4 },
  },
  btnIcon: {
    width: 32,
    height: 32,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  reset: {
    color: '#FF8000',
    fontSize: 14,
    fontFamily: fonts.Medium,
    fontWeight: 500,
  },
  title: {
    color: '#191D31',
    fontSize: 16,
    fontFamily: fonts.Medium,
    fontWeight: 500,
  },
  priceRangeSection: {
    gap: 16,
  },
  H1: {
    color: '#191D31',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  barChart: {
    height: 59,
    width: '100%',
  },
  trackStyle: {
    height: 4,
  },
  selectedStyle: {
    backgroundColor: '#FF8000',
  },
  unselectedStyle: {
    backgroundColor: '#FFFFFF',
  },
  sliderContainer: {
    position: 'absolute',
    top: 38,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  propertyType: {
    gap: 16,
    marginTop: 50,
  },
  category: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FF80001A',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },

  categoryText: {
    color: '#191D31',
    fontSize: 14,
    fontFamily: fonts.Regular,
    fontWeight: 400,
  },
  SelectedCategoryText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  details: {
    marginTop: 20,
    gap: 16,
  },
  icons: {
    width: 24,
    height: 24,
  },
  btnSection: {
    flexDirection: 'row',
    gap: 16,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Bathrooms: {
    color: '#666876',
    fontSize: 14,
    fontFamily: fonts.SemiBold,
    fontWeight: 500,
  },
  buildingSize: {
    marginTop: 20,
    gap: 16,
  },
  setFilterBtn: {
    marginTop: 30,
    backgroundColor: '#FF8000',
    borderRadius: 100,
    padding: 16,
  },
  buildingSizeslider: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  btnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    fontWeight: 800,
    alignSelf: 'center',
  },
  buildingSizesliderUnselectedStyle: {
    backgroundColor: '#FF80001A',
  },
});

export default FilterBottomsheet;
