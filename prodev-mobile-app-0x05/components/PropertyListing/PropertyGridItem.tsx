import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface PropertyGridItemProps {
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

export default function PropertyGridItem({ 
  property, 
  onPress,
  onFavoritePress 
}: PropertyGridItemProps) {
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
            size={16} 
            color={property.isFavorite ? '#FF4444' : '#fff'} 
          />
        </TouchableOpacity>
        
        {/* Price Badge */}
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>{property.price}</Text>
        </View>
      </View>
      
      {/* Property Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {property.title}
        </Text>
        
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={12} color="#666" />
          <Text style={styles.location} numberOfLines={1}>
            {property.location}
          </Text>
        </View>
        
        {/* Property Features */}
        <View style={styles.featuresContainer}>
          <View style={styles.featureItem}>
            <Ionicons name="bed-outline" size={12} color="#666" />
            <Text style={styles.featureText}>{property.bedrooms}</Text>
          </View>
          
          <View style={styles.featureDivider} />
          
          <View style={styles.featureItem}>
            <Ionicons name="water-outline" size={12} color="#666" />
            <Text style={styles.featureText}>{property.bathrooms}</Text>
          </View>
          
          <View style={styles.featureDivider} />
          
          <View style={styles.featureItem}>
            <Ionicons name="resize-outline" size={12} color="#666" />
            <Text style={styles.featureText}>{property.area}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (width - 60) / 2, // Two columns with margins
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 140,
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
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceBadge: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: '#34967C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  priceText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
    lineHeight: 18,
    minHeight: 36, // Ensure consistent height
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 10,
    color: '#666',
    marginLeft: 2,
  },
  featureDivider: {
    width: 1,
    height: 12,
    backgroundColor: '#e0e0e0',
  },
});
