import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = () => {
  return (
    <View style={styles.card}>
     
    

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>my Card</Text>
        <Text style={styles.cardDescription}>
          This is card description 
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    margin: 16,
    width: 300,  // Adjust this width as needed
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',  // Ensures the text is black
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
  },
});

export default Card;
