
import React, { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/properties';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onChange: (category: string | null) => void;
}

const CategoryFilter = ({ selectedCategory, onChange }: CategoryFilterProps) => {
  return (
    <div className="py-4 border-b border-airbnb-border">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 px-4 md:px-0">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => onChange(null)}
            className="rounded-full"
            size="sm"
          >
            All
          </Button>
          
          {categories.map((category) => (
            <Button
              key={category.label}
              variant={selectedCategory === category.label ? "default" : "outline"}
              onClick={() => onChange(category.label)}
              className="rounded-full"
              size="sm"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default CategoryFilter;
