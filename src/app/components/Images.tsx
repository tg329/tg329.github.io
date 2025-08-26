import React from 'react';

interface ImagesProps {
    images: string[];
}

const Images: React.FC<ImagesProps> = ({ images }) => (
    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        {images.map((src, idx) => (
            <img
                key={idx}
                src={src}
                alt={`Image ${idx + 1}`}
                style={{ width: '100%', maxWidth: '300px', height: 'auto', borderRadius: '8px' }}
            />
        ))}
    </div>
);

export default Images;