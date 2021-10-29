import React, { useState, useEffect } from 'react';

const CategoryBar = ({ category, changeCategory }) => {
    const [categories, setCategories] = useState([]);
    const apiUrl = `https://emoji-api.com/categories?access_key=${process.env.REACT_APP_API_KEY}`;

    const getCategories = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setCategories(data);
    }

    const renderCategories = categories.map(category => {
        return (
            <p 
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white"
            key={category.slug} 
            onClick={() => changeCategory(category.slug)}
            >{category.slug}</p>
        )
    })

    useEffect(() => {
        getCategories(apiUrl); 
    }, [apiUrl])

    return (
        <>
            {renderCategories}
        </>
    );
}

export default CategoryBar;
