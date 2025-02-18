import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface iAppProps {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    images: string[]; // Assuming this is an array of image URLs
  };
}

export function ProductCard({ item }: iAppProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
    {/* Image Section */}
    <div className="relative w-full h-48">
      <Image
        src={item.images[0]} // Assuming the first image in the array should be used
        alt={item.name}  // Use the name of the product for accessibility
        layout="fill"     // Ensures the image covers the div
        objectFit="cover" // Ensures the image maintains its aspect ratio
      />
    </div>

    {/* Product Details */}
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="text-lg font-bold text-gray-900 mt-2">${item.price}</p>
      <Button asChild className='w-full mt-5 '>
        <Link href={`/product/${item.id}`}>Learn More!</Link>
      </Button>
    </div>
  </div>
  );
}
