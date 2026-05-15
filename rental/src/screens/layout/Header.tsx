import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Bell, Menu } from 'lucide-react-native';

const Header = () => {
  const [greeting, setGreeting] = useState<any>();
  const getGreeting = () => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      hour12: false,
    });
    const hour = Number(formatter.format(new Date()));
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    if (hour < 21) return 'Good Evening';
    return 'Good Night';
  };
  useEffect(() => {
    setGreeting(getGreeting());
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.infoSection}>
        <Menu size={28} />
        <View style={styles.mainContainer}>
          <View style={styles.nameText}>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.name}>Ananya</Text>
            <Text>👋</Text>
          </View>
          <Text style={styles.greetingPara}>
            What are you looking for Today ?
          </Text>
        </View>
      </View>
      <Bell size={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  mainContainer: {
    flexDirection: 'column',
    gap: 4,
  },
  nameText: {
    flexDirection: 'row',
    gap: 4,
  },
  greeting: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: 400,
  },
  name: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 600,
  },
  greetingPara: {
    color: '#111827',
    fontSize: 14,
    fontWeight: 400,
  },
});
