import {
  FlatList,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';
import SliderItem from './SliderItem';
interface DataItem{
  id: string;
  image: any;
    title: string;
    location: string;
    price: string;
    rating: any;
    category: string;
}
interface sliderListProps{
  data: DataItem[];
}
const { width } = Dimensions.get('window');
const adjustedWidth = width -110;


const HomeSlider: React.FC<sliderListProps> = ({data}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SliderItem
            image={item.image}
            price={item.price}
            title={item.title}
            rating={item.rating}
            location={item.location}
            category={item.category}
          />
        )}
        scrollEnabled={true}
        snapToAlignment="start"
        decelerationRate={'fast'}
        snapToInterval={adjustedWidth}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom:32,paddingRight:20}}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});
export default HomeSlider;





