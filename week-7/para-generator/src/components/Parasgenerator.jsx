import React, { useState } from "react";

export function Parasgenerator() {
    const [words, setWords] = useState("");
    const [allWords, setAllwords] = useState("");
    const handleGenerateClick = () => {
        paraGenerator(words, setAllwords);
    }
    const paradivStyle = {
        margin: "5vh",
        display: "flex",
        alignItems: "center",
        flexDirection: 'column'
    }
    const titleStyle = {
        margin: "10px",
        fontWeight: '700',
        fontFamily: '"Arial", sans-serif',
        color: 'black',
        fontSize: '4vh',
        height: "5vh"
    }

    const inputbuttoncontainerStyle = {
        height: "10vh",
    }

    const inputStyle = {
        width: "70vw",
        margin: "5px",
        height: "7vh"
    }

    const buttonStyle = {
        width: "10vw",
        margin: "5px",
        height: "7vh",
        color: "rgb(248, 250, 255)",
        backgroundColor: "black",
        borderRadius: 10,
        borderStyle: "none",
        fontFamily: '"Arial", sans-serif'
    }

    return (
        <div style={paradivStyle}>
            <div style={titleStyle}>Para Generator</div>

            <div style={inputbuttoncontainerStyle}>
                <input style={inputStyle} type="text" placeholder="Enter Number of Words" onChange={(e) => {
                    setWords(e.target.value);
                }}></input>
                <button style={buttonStyle} onClick={handleGenerateClick}>Generate</button>
            </div>

            <div>
                {allWords}
            </div>
        </div>
    )
}

function paraGenerator(words, setAllwords) {
    {
        const dummySentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, delectus cumque quae laudantium excepturi officiis eveniet, a possimus earum culpa rerum voluptas mollitia. Voluptate harum veniam quas provident ea id incidunt inventore dignissimos. Accusamus voluptas officiis, corporis eos tempora ullam enim explicabo esse dolores ad nihil animi aliquid obcaecati libero?";
        const dummyWords = dummySentence.split(" ")
        let tempWords = [];
        for (let i = 0; i < parseInt(words, 10); i++) {
            tempWords.push(dummyWords[i % dummyWords.length]);
        }
        setAllwords(tempWords.join(" "));
    }
}