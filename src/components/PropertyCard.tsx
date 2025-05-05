
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Heart } from 'lucide-react';
import { Property } from '@/data/properties';
import { cn } from '@/lib/utils';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/property/${property.id}`);
  };

  return (
    <div 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md", 
        className
      )}
      onClick={handleClick}
    >
      {/* Image container with aspect ratio and rounded corners */}
      <div className="relative aspect-square overflow-hidden rounded-xl mb-3">
        <img
          src={property.image}
          alt={property.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <button 
          className="absolute top-3 right-3 p-1.5 rounded-full text-white hover:text-airbnb-primary transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            // Add to favorites logic
          }}
        >
          <Heart size={24} className="stroke-[2]" />
        </button>
      </div>
      
      {/* Property details */}
      <div className="space-y-1">
        <div className="flex justify-between">
          <h3 className="font-semibold text-airbnb-secondary">{property.location}</h3>
          <div className="flex items-center">
            <Star size={16} className="mr-1 fill-current text-airbnb-secondary" />
            <span className="text-sm font-medium">{property.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-500 text-sm">
          {property.beds} {property.beds === 1 ? 'bed' : 'beds'} · {property.category}
        </p>
        
        <p className="mt-2">
          <span className="font-semibold">${property.price}</span>
          <span className="text-gray-500"> night</span>
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
