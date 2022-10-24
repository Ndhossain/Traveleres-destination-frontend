import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Home() {
    const places = useLoaderData();
    console.log(places);
    return (
        <div>
            <h1>This is home page</h1>
        </div>
    );
}

export default Home;
