// src/ColorPicker.js
import React from 'react';
import { ColorPicker } from 'react-image-color-picker';
import 'react-image-color-picker/dist/index.css';

const ColorPickerComponent = () => {
    const handleColorChange = (color) => {
        console.log('Selected color:', color);
    };

    return (
        <div>
            <h1>Image Color Picker Extractor</h1>
            <ColorPicker
                src="https://via.placeholder.com/400"
                onColorChange={handleColorChange}
                zoom={2}
            />
        </div>
    );
};

export default ColorPickerComponent;
