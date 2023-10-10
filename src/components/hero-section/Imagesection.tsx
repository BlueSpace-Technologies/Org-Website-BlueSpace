import React from 'react';

interface ImageRepeatProps {
  count: number;
}

const ImageRepeat: React.FC<ImageRepeatProps> = ({ count }) => {
  const imageUrl =
    'https://cdn.sanity.io/images/r115idoc/production/1b1b0acea8c5765213e8856f5727f29ed4158805-290x192.svg?q=75&fit=clip&auto=format';

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="p-2">
          <img
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className="w-full h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageRepeat;
