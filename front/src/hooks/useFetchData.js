import React, { useState, useEffect } from 'react';


export default function useFetchData(url) {
    
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url)
            const data = await response.json();
            console.log(data);
            setData(data[0].url);
        }

        fetchData();

    }, []);
    
    return data;
}
