
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Heart, Share, MapPin, ArrowLeft, Bed, Bath } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { properties } from '@/data/properties';
import Header from '@/components/Header';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl mb-4">Property not found</p>
        <Button onClick={() => navigate('/')}>Go back to homepage</Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container-custom py-6">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center text-airbnb-secondary mb-6"
        >
          <ArrowLeft size={20} className="mr-2" />
          <span>Back to listings</span>
        </button>
        
        {/* Property title */}
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">{property.title}</h1>
        
        {/* Rating and location */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="flex items-center">
            <Star size={18} className="fill-current text-airbnb-secondary mr-1" />
            <span className="font-medium">{property.rating}</span>
          </div>
          
          <div className="flex items-center">
            <MapPin size={18} className="mr-1" />
            <span>{property.location}</span>
          </div>
          
          <div className="ml-auto flex space-x-3">
            <button className="flex items-center text-airbnb-secondary hover:text-airbnb-primary">
              <Share size={18} className="mr-1" />
              <span>Share</span>
            </button>
            
            <button className="flex items-center text-airbnb-secondary hover:text-airbnb-primary">
              <Heart size={18} className="mr-1" />
              <span>Save</span>
            </button>
          </div>
        </div>
        
        {/* Property images */}
        <div className="aspect-[16/9] overflow-hidden rounded-xl mb-8">
          <img 
            src={property.image} 
            alt={property.title}
            className="object-cover w-full h-full"
          />
        </div>
        
        {/* Property content - two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left column - property details */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center pb-6 border-b">
              <div>
                <h2 className="text-xl font-semibold">
                  Hosted by {property.host.name}
                </h2>
                <div className="flex mt-1">
                  <div className="flex items-center mr-4">
                    <Bed size={18} className="mr-1" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center">
                    <Bath size={18} className="mr-1" />
                    <span>{property.baths} baths</span>
                  </div>
                </div>
              </div>
              
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img 
                  src={property.host.image} 
                  alt={property.host.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Description */}
            <div className="py-6 border-b">
              <h3 className="text-xl font-semibold mb-4">About this place</h3>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>
            
            {/* Amenities */}
            <div className="py-6 border-b">
              <h3 className="text-xl font-semibold mb-4">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                      {/* We would ideally use icons for each amenity */}
                      <span className="text-sm">{amenity.charAt(0)}</span>
                    </div>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column - booking widget */}
          <div>
            <div className="sticky top-24 border rounded-xl p-6 shadow-lg">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-xl font-bold">${property.price}</span>
                  <span className="text-gray-500"> night</span>
                </div>
                <div className="flex items-center">
                  <Star size={16} className="fill-current text-airbnb-secondary mr-1" />
                  <span>{property.rating}</span>
                </div>
              </div>
              
              {/* Booking form */}
              <div className="border rounded-t-xl rounded-b-xl overflow-hidden">
                <div className="grid grid-cols-2">
                  <div className="p-4 border-b border-r">
                    <label className="block text-xs font-semibold mb-1">CHECK-IN</label>
                    <input 
                      type="date" 
                      className="bg-transparent w-full focus:outline-none"
                    />
                  </div>
                  <div className="p-4 border-b">
                    <label className="block text-xs font-semibold mb-1">CHECKOUT</label>
                    <input 
                      type="date" 
                      className="bg-transparent w-full focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="p-4">
                  <label className="block text-xs font-semibold mb-1">GUESTS</label>
                  <select className="bg-transparent w-full focus:outline-none">
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                  </select>
                </div>
              </div>
              
              <Button className="w-full bg-airbnb-primary hover:bg-airbnb-primary/90 text-white mt-4">
                Reserve
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-4">
                You won't be charged yet
              </p>
              
              {/* Price breakdown */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-between">
                  <span className="underline">${property.price} x 5 nights</span>
                  <span>${property.price * 5}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="underline">Cleaning fee</span>
                  <span>$75</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="underline">Service fee</span>
                  <span>$90</span>
                </div>
                
                <div className="pt-4 border-t flex justify-between font-bold">
                  <span>Total before taxes</span>
                  <span>${property.price * 5 + 75 + 90}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
