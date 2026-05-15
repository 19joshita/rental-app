import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Header from '../layout/Header';
import {
  Armchair,
  BookOpenText,
  Ellipsis,
  House,
  LaptopMinimal,
  LayoutGrid,
  Search,
  SlidersHorizontal,
} from 'lucide-react-native';

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const categories = [
    {
      label: 'All',
      icon: LayoutGrid,
    },
    {
      label: 'Books',
      icon: BookOpenText,
    },
    {
      label: 'Electronic',
      icon: LaptopMinimal,
    },
    {
      label: 'Furniture',
      icon: Armchair,
    },
    {
      label: 'Rooms',
      icon: House,
    },
    {
      label: 'More',
      icon: Ellipsis,
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Search size={18} />
          <TextInput
            value={search}
            placeholder="Search books, furniture, rooms..."
            onChangeText={text => setSearch(text)}
            placeholderTextColor={'#6B7280'}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal size={20} color={'#FFFFFF'} />
        </TouchableOpacity>
      </View>
      <View>
        {categories?.map(category => {
          const Icon = category?.icon;
          return <View
          key={category?.label}
          ></View>;
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'column',
    gap: 10,
  },
  searchContainer: {
    height: Platform.OS ? 54 : 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#6B7280',
    paddingVertical: Platform.OS === 'ios' ? 8 : 6,
    paddingHorizontal: 8,
    borderRadius: 12,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  filterButton: {
    backgroundColor: '#4F46E5',
    padding: 8,
    borderRadius: 6,
  },
});
// Primary: #4F46E5 (Indigo)
// Secondary: #06B6D4 (Cyan accent)
// Background: #F9FAFB
// Card: #FFFFFF
// Text Primary: #111827
// Text Secondary: #6B7280
// Border: #E5E7EB
// ------------------------------------
// Heading: Bold / 24–28px
// Subheading: SemiBold / 18px
// Body: Regular / 14–16px
// Button: Medium / 16px
// -------------------------------------------
// Input Fields
// Height: 50px
// Radius: 12px
// Border: light gray
// Focus: Indigo border + subtle shadow
// Cards
// Radius: 18px
// Shadow: soft (very light, modern)
