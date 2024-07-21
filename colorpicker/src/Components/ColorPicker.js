// src/ColorPicker.js
import React, { useState } from 'react';
import { ImageColorPicker } from 'react-image-color-picker';

const ColorPickerComponent = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleColorPick = (color) => {
        setSelectedColor(color);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Image Color Picker Extractor</h1>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {imageSrc && (
                <div>
                    <ImageColorPicker
                        onColorPick={handleColorPick}
                        imgSrc={imageSrc}
                        zoom={1}
                    />
                    {selectedColor && (
                        <div>
                            <p>Selected Color: {selectedColor}</p>
                            <div
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: selectedColor,
                                    margin: '10px auto'
                                }}
                            ></div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ColorPickerComponent;
