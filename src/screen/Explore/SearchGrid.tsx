import {
    FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import fonts from '../../utils/fonts';
import SearchItem from './SearchItem';

interface DataItem {
  id: any;
  image: any;
  title: string;
  location: string;
  price: string;
  rating: any;
  category: string;
}
interface searchListProps {
  data: DataItem[];
}

const SearchGrid: React.FC<searchListProps> = ({data}) => {
  return (
    <View style={styles.container}>
          <Text style={styles.title}>Found 182 Apartments</Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <SearchItem
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
          />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    marginBottom: 24,
    color: '#191D31',
    fontSize: 20,
    fontFamily: fonts.Medium,
    fontWeight: 800,
  },
});

export default SearchGrid;
