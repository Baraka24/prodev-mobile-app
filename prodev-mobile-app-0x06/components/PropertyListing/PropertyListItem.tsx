import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PropertyListItemProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: string;
    bedrooms: number;
    bathrooms: number;
    area: string;
    image: any;
    isFavorite?: boolean;
  };
  onPress?: () => void;
  onFavoritePress?: (id: string) => void;
}

export default function PropertyListItem({ 
  property, 
  onPress,
  onFavoritePress 
}: PropertyListItemProps) {
  const handleFavoritePress = () => {
    onFavoritePress?.(property.id);
  };

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      {/* Property Image */}
      <View style={styles.imageContainer}>
        <Image source={property.image} style={styles.propertyImage} />
        
        {/* Favorite Button */}
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={handleFavoritePress}
        >
          <Ionicons 
            name={property.isFavorite ? 'heart' : 'heart-outline'} 
            size={18} 
            color={property.isFavorite ? '#FF4444' : '#666'} 
          />
        </TouchableOpacity>
      </View>
      
      {/* Property Info */}
      <View style={styles.infoContainer}>
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={1}>
            {property.title}
          </Text>
          <Text style={styles.price}>{property.price}</Text>
        </View>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={14} color="#666" />
          <Text style={styles.location} numberOfLines={1}>
            {property.location}
          </Text>
        </View>
        
        {/* Property Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Ionicons name="bed-outline" size={14} color="#666" />
            <Text style={styles.featureText}>
              {property.bedrooms}
            </Text>
          </View>
          
          <View style={styles.featureItem}>
            <Ionicons name="water-outline" size={14} color="#666" />
            <Text style={styles.featureText}>
              {property.bathrooms}
            </Text>
          </View>
          
          <View style={styles.featureItem}>
            <Ionicons name="resize-outline" size={14} color="#666" />
            <Text style={styles.featureText}>{property.area}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 12,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: 120,
    height: 100,
  },
  propertyImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    flex: 1,
    padding: 12,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34967C',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  location: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
    flex: 1,
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  featureText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 2,
  },
});
