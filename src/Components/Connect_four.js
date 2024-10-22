import React, { useState } from 'react';

const ConnectFour = () => {
    const [selectedColumn, setSelectedColumn] = useState(null);

    const handleColumnClick = (colIndex) => {
        setSelectedColumn(colIndex);
        // Send the selected column to the back-end here
        // For example, using the fetch API:
        fetch('/make-move', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ column: colIndex })
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    };

    return (
        <div className="game-board">
            {[0, 1, 2, 3, 4, 5, 6].map((colIndex) => (
                <div key={colIndex} className="board-cell" onClick={() => handleColumnClick(colIndex)}>
                    {colIndex}
                </div>
            ))}
        </div>
    );
};

export default ConnectFour;
