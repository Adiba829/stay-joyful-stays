
import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import CategoryFilter from './CategoryFilter';
import { Property, properties } from '@/data/properties';

const PropertyList = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProperties(
        properties.filter(property => property.category === selectedCategory)
      );
    } else {
      setFilteredProperties(properties);
    }
  }, [selectedCategory]);

  return (
    <div>
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />
      
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No properties found in this category</p>
            <p className="text-sm text-gray-400 mt-2">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyList;
