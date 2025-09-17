import {
    ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { categories } from '../../constants/data';
import fonts from '../../utils/fonts';
import { useState } from 'react';


const Categories: React.FC = () => {
     const [selected, setSelected] = useState('All');
  return (
      <ScrollView
             horizontal
             showsHorizontalScrollIndicator={false}
             contentContainerStyle={styles.categoriesContainer}
           >
             {categories.map((item, index) => {
               const isSelected = item.category === selected;
               return (
                 <TouchableOpacity
                   key={index}
                   style={[
                     styles.category,
                     { backgroundColor: isSelected ? '#FF8000' : '#FF80000A' },
                   ]}
                   onPress={() => setSelected(item.category)}
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
           </ScrollView>
  );
};
const styles = StyleSheet.create({
  category: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FF80001A',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
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
    fontWeight: 600,
  },
  categoriesContainer: {
    marginLeft: 8,
    marginVertical: 24,
    flexDirection: 'row',
  },
});

export default Categories;
