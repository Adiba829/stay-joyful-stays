
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropertyList from '@/components/PropertyList';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <PropertyList />
    </div>
  );
};

export default Index;
