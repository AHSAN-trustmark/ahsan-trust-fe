import { useEffect, useState } from 'react';

const ProductGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  useEffect(() => {
    if (images.length > 0) {
      setSelectedImage(images[0]); 
    }
  }, [images]);
  

  return (
    <div className="flex gap-5">
      <div className="ml-4">
        <img
          src={selectedImage}
          alt="Selected"
          className="w-96 h-96 object-cover rounded-lg"
        />
      </div>
      <div
        className="flex flex-col gap-2 max-h-[24rem] overflow-y-auto" 
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#D1D5DB #F3F4F6' }} 
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`w-24 h-24 object-cover rounded-md cursor-pointer border ${
              selectedImage === image ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedImage(image)} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
