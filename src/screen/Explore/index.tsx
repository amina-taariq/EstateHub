import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import ExploreHeader from './ExploreHeader';
import { useState } from 'react';
import FilterBottomsheet from '../FilterBottomsheet';
import Categories from '../Home/Categories';
import SearchGrid from './SearchGrid';
import { cards } from '../../constants/data';


const Explore: React.FC = () => {
     const [sheetVisible, setSheetVisible] = useState(false);
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          <ExploreHeader onFilterPress={() => setSheetVisible(true)} />
          <Categories />
          <SearchGrid  data={cards} />
        </ScrollView>
      </KeyboardAvoidingView>
      <FilterBottomsheet
        visible={sheetVisible}
        onClose={() => setSheetVisible(false)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Explore;
