import React from 'react';
import people1 from "../../static/Church Members/people1.JPG";
import people2 from "../../static/Church Members/people2.JPG";
import people3 from "../../static/Church Members/people3.JPG";
import people4 from "../../static/Church Members/people4.JPG";
import people5 from "../../static/Church Members/people5.JPG";
import people6 from "../../static/Church Members/people6.JPG";
import people7 from "../../static/Church Members/people7.JPG";
import people8 from "../../static/Church Members/people8.JPG";
import people9 from "../../static/Church Members/people9.JPG";
import people10 from "../../static/Church Members/people10.JPG";
import people11 from "../../static/Church Members/people11.JPG";
import people12 from "../../static/Church Members/people12.JPG";

function Gallery() {
  const images = [
    people1, people2, people3, people4, people5, people6,
    people7, people8, people9, people10, people11, people12
  ];

  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Gallery
        </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img 
              src={image} 
              alt={`Church Member ${index + 1}`} 
              className="w-full h-64 object-cover object-center transition duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;