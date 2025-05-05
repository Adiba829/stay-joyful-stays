
import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onClose?: () => void;
}

const SearchBar = ({ onClose }: SearchBarProps) => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search logic
    console.log({ location, checkIn, checkOut, guests });
    if (onClose) onClose();
  };

  return (
    <div className="container mx-auto px-4 relative">
      {onClose && (
        <button 
          onClick={onClose} 
          className="absolute right-5 top-0 p-2"
          aria-label="Close search"
        >
          <X size={20} />
        </button>
      )}
      
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="font-medium text-sm">Where</label>
            <Input
              placeholder="Search destinations"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="rounded-xl"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-medium text-sm">Check in</label>
            <Input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="rounded-xl"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-medium text-sm">Check out</label>
            <Input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="rounded-xl"
            />
          </div>
          
          <div className="space-y-2">
            <label className="font-medium text-sm">Who</label>
            <div className="flex items-center">
              <Input
                placeholder="Add guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="rounded-l-xl rounded-r-none"
              />
              <Button 
                type="submit" 
                className="bg-airbnb-primary hover:bg-airbnb-primary/90 text-white rounded-l-none rounded-r-xl"
              >
                <Search size={18} />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
