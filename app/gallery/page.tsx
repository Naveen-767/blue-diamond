"use client";
import Image from "next/image";
import { useState } from "react";


const styles = [
  { id: 1, name: "Classic Fade", img: "", desc: "Clean fade with sharp edges" },
  { id: 2, name: "Modern Pompadour", img: "", desc: "Volume-focused modern look" },
  { id: 3, name: "Beard Styling", img: "", desc: "Precision beard shaping" },
  { id: 4, name: "Crew Cut", img: "", desc: "Short and professional" },
  { id: 5, name: "Hair Coloring", img: "", desc: "Premium hair coloring" },
  { id: 6, name: "Luxury Shave", img: "", desc: "Smooth traditional shave" },
  { id: 7, name: "Textured Crop", img: "", desc: "Trendy textured style" },
  { id: 8, name: "Skin Fade", img: "", desc: "Ultra clean skin fade" },
];

export default function GalleryPage() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 px-4 py-12">
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1570806/pexels-photo-1570806.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        <div className="relative text-center px-4">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-800/10 border border-blue-800/30 rounded-full">
            <span className="text-blue-800 text-sm font-semibold tracking-wider">
              PREMIUM SERVICES
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-blue-800 mb-6">
            Our <span className="text-gray-300">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Exceptional grooming services crafted for the modern gentleman
          </p>
        </div>
      </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {styles.map((style) => (
            <div
              key={style.id}
              className="overflow-hidden rounded-2xl bg-neutral-900 shadow-lg transition-all"
            >
              {/* Image */}
              <button
                onClick={() => setOpenId(openId === style.id ? null : style.id)}
                className="relative h-60 w-full focus:outline-none"
              >
                <Image
                  src={style.img}
                  alt={style.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40" />
                <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                  {style.name}
                </h3>
              </button>

              {/* Collapse content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === style.id ? "max-h-40 p-4" : "max-h-0 p-0"
                }`}
              >
                <p className="text-sm text-neutral-300">{style.desc}</p>
                <button className="mt-3 w-full rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
                  Book This Style
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
  );

}
