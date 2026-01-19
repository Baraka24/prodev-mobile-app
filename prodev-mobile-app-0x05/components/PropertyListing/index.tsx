import React from "react";
import { View, Text } from "react-native";
import PropertyListingCard from "../common/PropertyListingCard";
import { PropertListing, PropertyListingProps } from "../../interfaces";

const PropertyListing: React.FC<PropertListing> = ({ listings }) => {
  return (
    <View
      style={{
        flex: 1,
        rowGap: 10,
      }}
    >
      {listings?.map((listing, key) => (
        <PropertyListingCard {...listing} key={key} />
      ))}
    </View>
  );
};

export default PropertyListing;
