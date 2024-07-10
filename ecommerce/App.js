import React, { useState } from 'react';
import './App.css';

function App() {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Laptop 1',
            description: 'Powerful laptop with high performance.',
            image: 'https://source.unsplash.com/600x400/?laptop'
        },
        {
            id: 2,
            name: 'Laptop 2',
            description: 'Slim and lightweight laptop for mobility.',
            image: 'https://source.unsplash.com/600x400/?laptop2'
        },
        {
            id: 3,
            name: 'Laptop 3',
            description: 'Gaming laptop with advanced graphics.',
            image: 'https://source.unsplash.com/600x400/?laptop3'
        },
        {
            id: 4,
            name: 'Laptop 4',
            description: 'Convertible laptop with touchscreen.',
            image: 'https://source.unsplash.com/600x400/?laptop4'
        },
        {
            id: 5,
            name: 'Laptop 5',
            description: 'Business laptop with long battery life.',
            image: 'https://source.unsplash.com/600x400/?laptop5'
        }
    ]);

    return (
        <div className="App">
            <div className='products'>
                {data.map((item) => (
                    <div key={item.id}>
                        <img
                            className='img'
                            src={item.image}
                            alt={item.name}
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/600x400'; // Placeholder image URL
                            }}
                        />
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
