
export interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  category: string;
  beds: number;
  baths: number;
  description: string;
  host: {
    name: string;
    image: string;
  };
  amenities: string[];
  available: {
    from: string;
    to: string;
  };
}

// Sample data for our properties
export const properties: Property[] = [
  {
    id: '1',
    title: 'Luxury Villa with Ocean View',
    location: 'Malibu, California',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 350,
    rating: 4.92,
    category: 'Beach',
    beds: 4,
    baths: 3,
    description: 'Enjoy breathtaking ocean views from this luxury villa. Perfect for family gatherings or special occasions. The property features a private pool, outdoor dining area, and direct beach access.',
    host: {
      name: 'Emily',
      image: 'https://i.pravatar.cc/150?img=1',
    },
    amenities: ['WiFi', 'Pool', 'Kitchen', 'Free parking', 'Beach access', 'Air conditioning'],
    available: {
      from: '2023-06-01',
      to: '2023-12-31',
    },
  },
  {
    id: '2',
    title: 'Modern Downtown Apartment',
    location: 'New York City, New York',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 150,
    rating: 4.8,
    category: 'City',
    beds: 2,
    baths: 1,
    description: 'Stylish apartment in the heart of NYC. Walking distance to major attractions, restaurants, and public transport. Recently renovated with modern amenities and stunning city views.',
    host: {
      name: 'Michael',
      image: 'https://i.pravatar.cc/150?img=2',
    },
    amenities: ['WiFi', 'Kitchen', 'Workspace', 'Elevator', 'Air conditioning', 'Washer'],
    available: {
      from: '2023-05-15',
      to: '2023-11-30',
    },
  },
  {
    id: '3',
    title: 'Cozy Mountain Cabin',
    location: 'Aspen, Colorado',
    image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 200,
    rating: 4.95,
    category: 'Mountain',
    beds: 3,
    baths: 2,
    description: 'Traditional log cabin with modern amenities. Perfect for ski trips or summer hiking adventures. Features a wood-burning fireplace, hot tub, and panoramic mountain views.',
    host: {
      name: 'Sarah',
      image: 'https://i.pravatar.cc/150?img=3',
    },
    amenities: ['WiFi', 'Fireplace', 'Hot tub', 'Free parking', 'Kitchen', 'Ski-in/Ski-out'],
    available: {
      from: '2023-06-15',
      to: '2023-12-15',
    },
  },
  {
    id: '4',
    title: 'Charming Countryside Cottage',
    location: 'Cotswolds, England',
    image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 125,
    rating: 4.85,
    category: 'Countryside',
    beds: 2,
    baths: 1,
    description: 'Quaint stone cottage in the heart of the English countryside. Features a beautiful garden, exposed beams, and a wood-burning stove. Perfect for a romantic getaway or peaceful retreat.',
    host: {
      name: 'James',
      image: 'https://i.pravatar.cc/150?img=4',
    },
    amenities: ['WiFi', 'Garden', 'Fireplace', 'Free parking', 'Kitchen', 'Pets allowed'],
    available: {
      from: '2023-05-20',
      to: '2023-10-31',
    },
  },
  {
    id: '5',
    title: 'Beachfront Bungalow',
    location: 'Koh Samui, Thailand',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 180,
    rating: 4.9,
    category: 'Beach',
    beds: 1,
    baths: 1,
    description: 'Private bungalow located directly on a pristine white sand beach. Fall asleep to the sound of waves and wake up to stunning sunrise views over the ocean.',
    host: {
      name: 'Lisa',
      image: 'https://i.pravatar.cc/150?img=5',
    },
    amenities: ['WiFi', 'Beach access', 'Air conditioning', 'Kitchen', 'Free parking', 'Hammock'],
    available: {
      from: '2023-06-01',
      to: '2023-11-15',
    },
  },
  {
    id: '6',
    title: 'Historic City Loft',
    location: 'Barcelona, Spain',
    image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: 165,
    rating: 4.75,
    category: 'City',
    beds: 1,
    baths: 1,
    description: 'Stylish loft apartment in a renovated historic building. Located in the Gothic Quarter with easy access to restaurants, cafes, and cultural attractions.',
    host: {
      name: 'Carlos',
      image: 'https://i.pravatar.cc/150?img=6',
    },
    amenities: ['WiFi', 'Kitchen', 'Air conditioning', 'Elevator', 'Washer', 'Balcony'],
    available: {
      from: '2023-05-25',
      to: '2023-12-10',
    },
  },
];

export const categories = [
  {
    label: 'Beach',
    icon: 'umbrella',
    description: 'Properties near beach locations',
  },
  {
    label: 'City',
    icon: 'building',
    description: 'Properties in urban areas',
  },
  {
    label: 'Mountain',
    icon: 'mountain',
    description: 'Properties in mountain regions',
  },
  {
    label: 'Countryside',
    icon: 'tree',
    description: 'Properties in rural areas',
  },
  {
    label: 'Desert',
    icon: 'sun',
    description: 'Properties in desert environments',
  },
];
