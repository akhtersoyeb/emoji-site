
const EmojiCard = ({ emoji }) => {
    const copyEmoji = (value) => {
        navigator.clipboard.writeText(value)
        console.log("Copied", value)
    }

    return (
        <div className="w-30 bg-gray-900 rounded-lg sahdow-lg p-2 flex flex-col justify-center items-center">
            <div className="text-center">
                <p title={emoji.unicodeName} style={{fontSize:"60px"}}>{emoji.character}</p>
                <p onClick={() => copyEmoji(emoji.character)} className="cursor-pointer text-base text-gray-400 font-normal">copy</p>
            </div>
        </div>
    );
}

export default EmojiCard;
