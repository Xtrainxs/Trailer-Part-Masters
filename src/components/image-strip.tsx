'use client';

export default function ImageStrip({ images }: { images: string[] }) {
  if (!images.length) return null;
  // Duplicate for seamless infinite loop
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden w-full my-10" aria-hidden="true">
      <p className="text-center text-xs uppercase tracking-widest text-gray-400 mb-3 font-semibold">
        Our Products
      </p>
      <div className="overflow-hidden w-full">
        <div className="image-strip-track flex gap-5" style={{ width: 'max-content' }}>
          {track.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-xl shadow-md border border-gray-100 flex items-center justify-center"
              style={{ width: 160, height: 130 }}
            >
              <img
                src={src}
                alt="product"
                loading="lazy"
                className="object-contain rounded-lg"
                style={{ maxWidth: 148, maxHeight: 118 }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
