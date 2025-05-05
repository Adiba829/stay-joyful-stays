
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Find your next getaway</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover unique places to stay around the world
        </p>
        <Button className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white text-lg py-6 px-8 rounded-full">
          Explore Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
