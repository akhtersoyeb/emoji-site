import React, { useEffect, useState } from 'react'; 
import EmojiCard from './EmojiCard'; 

const EmojiMenu = ({ category }) => {
    const [emojiArray, setEmojiArray] = useState([]);
    const apiUrl = `https://emoji-api.com/categories/${category}?access_key=${process.env.REACT_APP_API_KEY}`;

    const getEmojiArray = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        if (data !== null) {
            setEmojiArray(data);
        } else {
            setEmojiArray([])
        }
    }

    const renderEmojiCards = emojiArray.map((emoji) => {
        return (
            <EmojiCard key={emoji.slug} emoji={emoji} />
        )
    })
    

    useEffect(() => {
        getEmojiArray(apiUrl);
    }, [apiUrl])


    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">

        { emojiArray.length ? renderEmojiCards : "Nothing To Show"}

        </div>
    );
}

export default EmojiMenu;
