// src/ColorPicker.js
import React from 'react';
import { ImageColorPicker } from 'react-image-color-picker';

const ColorPickerComponent = () => {
    const handleColorChange = (color) => {
        console.log('Selected color:', color);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Image Color Picker Extractor</h1>
            <ImageColorPicker
                src="https://via.placeholder.com/400"
                onColorChange={handleColorChange}
                zoom={2}
            />
        </div>
    );
};

export default ColorPickerComponent;
