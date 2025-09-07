// 'use client';
// import { useState } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// const ProductImages = ({images}:{images: string[]}) => {
   
//     const [current, setCurrent] = useState(0);

  
//     return (
//      <div className="space-y-4">
//         <Image src={images[current]} alt="product Image" width={600} height={600} className="w-[500px] h-[500px] object-cover object-center rounded-lg"/>
//        <div className="flex">
//         {images.map((image, index)=> (
//             <div key={image} className="">
//                 <Image src={image} alt="image" width={100} height={100} />
//                  </div>
//         ))}
//        </div>
//      </div>
//   )
// }

// export default ProductImages;


'use client';
import { useState } from "react";
import Image from "next/image";
import ReactImageMagnify from "react-image-magnify";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      {/* Main Image with zoom */}
      <div className="w-[500px] h-[500px]">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Product Image",
              isFluidWidth: true,
              src: images[current], // thumbnail
            },
            largeImage: {
              src: images[current], // high-res image (same or bigger)
              width: 1200,
              height: 1800,
            },
            enlargedImageContainerDimensions: {
              width: "150%", // controls zoom box size
              height: "150%",
            },
          }}
        />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className="cursor-pointer border rounded-md hover:opacity-75"
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
