
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from './SearchBar';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-airbnb-border">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-3 md:gap-0">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <div className="flex items-center">
              <svg width="30" height="32" fill="#FF385C" style={{ display: 'block' }}>
                <path d="M29.3864 22.7101C29.2429 22.3073 29.0752 21.9176 28.9157 21.5565C28.6701 21.0011 28.4129 20.4446 28.1641 19.9067L28.1444 19.864C25.9255 15.0589 23.5439 10.1881 21.0659 5.38701L20.9607 5.18316C20.7079 4.69753 20.4466 4.18793 20.1784 3.68276C19.8604 3.0988 19.4745 2.5243 19.0276 1.99677C18.5245 1.37761 17.9035 0.879239 17.2023 0.542769C15.5982 -0.0292988 13.7304 -0.0292988 12.1264 0.542769C11.4251 0.879239 10.8041 1.37761 10.301 1.99677C9.85416 2.5243 9.46824 3.0988 9.15027 3.68276C8.88211 4.18793 8.62075 4.69753 8.36802 5.18316L8.26289 5.38701C5.78478 10.1881 3.40318 15.0589 1.18426 19.864L1.16454 19.9067C0.915811 20.4446 0.658599 21.0011 0.413 21.5565C0.253428 21.9176 0.0857834 22.3073 -0.0578373 22.7101C-0.394094 23.8104 -0.0578373 24.9944 0.816436 25.8261C1.43616 26.4224 2.25002 26.7853 3.11555 26.8337C3.98107 26.882 4.83703 26.6117 5.53196 26.0732C6.4505 25.3917 7.28729 24.6174 8.02986 23.763L8.10888 23.662C10.218 21.0281 12.1576 18.3105 13.9062 15.5166V15.5166C14.2399 14.9996 14.8324 14.7029 15.4541 14.7029C16.0759 14.7029 16.6684 14.9996 17.0021 15.5166C18.7507 18.3105 20.6903 21.0281 22.7994 23.662L22.8785 23.763C23.621 24.6174 24.4578 25.3917 25.3764 26.0732C26.0713 26.6117 26.9272 26.882 27.7928 26.8337C28.6583 26.7853 29.4721 26.4224 30.0919 25.8261C30.9662 24.9944 31.3024 23.8104 30.9662 22.7101Z"></path>
              </svg>
              <span className="hidden md:block ml-2 text-xl font-bold text-airbnb-primary">airbnb</span>
            </div>
          </Link>

          {/* Search bar toggle (medium+ screens) */}
          <div className="hidden md:block flex-grow max-w-md mx-auto">
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-between rounded-full border border-airbnb-border shadow-sm hover:shadow-md"
              onClick={() => setShowSearch(!showSearch)}
            >
              <div className="flex items-center px-6">
                <span className="font-medium text-sm mr-6">Anywhere</span>
                <span className="font-medium text-sm mr-6 border-l border-r px-6">Any week</span>
                <span className="text-gray-500 font-light text-sm">Add guests</span>
              </div>
              <div className="bg-airbnb-primary text-white p-2 mr-2 rounded-full">
                <Search size={16} />
              </div>
            </Button>
          </div>

          {/* User menu */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Button variant="ghost" className="rounded-full text-sm font-medium">
                Airbnb your home
              </Button>
            </div>

            <Button 
              variant="outline" 
              className="flex items-center space-x-2 rounded-full py-1.5 px-3 border shadow-sm"
            >
              <Menu size={18} />
              <div className="bg-gray-500 text-white p-1.5 rounded-full">
                <User size={16} />
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile search (small screens) */}
        <div className="md:hidden mt-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-between rounded-full border shadow-sm hover:shadow-md py-2"
            onClick={() => setShowSearch(true)}
          >
            <div className="flex items-center pl-4">
              <Search size={16} className="mr-2" />
              <span className="text-sm">Where to?</span>
            </div>
          </Button>
        </div>
      </div>

      {/* Search modal */}
      {showSearch && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 bg-white shadow-xl rounded-b-xl px-4 py-8">
          <SearchBar onClose={() => setShowSearch(false)} />
        </div>
      )}
    </header>
  );
};

export default Header;
