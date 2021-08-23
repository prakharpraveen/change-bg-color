import React, { useState } from 'react';

const ChangeBackgroundColor = () => {
    const [selectedColorIndex, setColorIndex] = useState(0);
    const colors = ['red', 'blue', 'green', 'orange', 'yellow'];

    // Change color Every 2 Second
    setInterval(function nextColor() {
        const newColorIndex = selectedColorIndex + 1;
        if (colors[newColorIndex])
            setColorIndex(newColorIndex);
        else
            setColorIndex(0);
    }, 2000);

    return (
        <div>
            <h1 style={{
                backgroundColor: colors[selectedColorIndex],
                margin: "10px",
                textAlign: "center"
            }}>
                Background Color Will Change Every 2 Second
            </h1>
        </div>
    )
}

export default ChangeBackgroundColor;