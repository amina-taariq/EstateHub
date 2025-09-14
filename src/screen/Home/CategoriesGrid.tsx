import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import fonts from '../../utils/fonts';
import { categories } from '../../constants/data';
import { useState } from 'react';
import GridItem from './GridItem';
interface DataItem {
  id: any;
  image: any;
  title: string;
  location: string;
  price: string;
  rating: any;
  category: string;
}
interface GridListProps {
  data: DataItem[];
}

const CategoriesGrid: React.FC<GridListProps> = ({data}) => {
     const [selected, setSelected] = useState('All');
    return (
      <View>
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
        <View>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => (
              <GridItem
                image={item.image}
                price={item.price}
                title={item.title}
                rating={item.rating}
                location={item.location}
                category={item.category}
              />
            )}
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginHorizontal: 20,
              marginBottom: 36,
              gap: 20,
            }}
          />
        </View>
      </View>
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
    flexDirection:'row'
  }
});

export default CategoriesGrid;
