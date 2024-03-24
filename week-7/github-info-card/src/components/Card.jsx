import React, { useState } from "react";
import axios from 'axios';

export function Card() {

    const [userName, setUserName] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');

    const fetchUserData = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${userName}`);
            setUserData(response.data);
            setError('');
        } catch (error) {
            console.error("Error fetching user data:", error);
            setError('Please enter a valid username');
            setUserData(null);
        }
    };

    const handleGenerateClick = () => {
        if (userName) {
            fetchUserData();
        }
    };

    const cardStyle = {
        backgroundImage: "url('/bg.jpg')",
        padding: 10,
        margin: 10,
        border: "1px solid rgba(72,92,98,0.41)",
        borderRadius: "10px",
        boxShadow: "0 8px 6px -9px black",
        width: "23rem"
    }
    const buttonStyle = {
        color: "white",
        backgroundColor: "#007bff",
        borderRadius: 3,
        borderStyle: "none",
        padding: 7,
        margin: 10,
        fontFamily: "Times New Roman"
    }

    const imageStyle = {
        width: "150px",
        borderRadius: "50%",
        border: "2px solid white"
    };

    const logoStyle = {
        width: "50px",
        borderRadius: "50%",
        border: "2px solid white"
    }

    const midsectionStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
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

    const submitbuttonStyle = {
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
        <div>
            <div style={paradivStyle}>
                <div style={titleStyle}>GitHub Card Generator</div>
                {error && <p>{error}</p>} {/* Display error message if any */}
                <div style={inputbuttoncontainerStyle}>
                    <input
                        style={inputStyle}
                        type="text"
                        placeholder="Enter Your UserName"
                        onChange={(e) => setUserName(e.target.value)}
                    ></input>
                    <button style={submitbuttonStyle} onClick={handleGenerateClick}>Submit</button>
                </div>
            </div>
            {userData && (
                <div style={cardStyle}>
                    <h2 style={{ color: "rgba(72,92,98,1)" }}>{userData.login}</h2>
                    <p style={{ color: "rgba(72,92,98,1)" }}>{userData.blog}</p>
                    <div style={midsectionStyle}>
                        <div>
                            <h3 style={{ color: "rgba(72,92,98,1)" }}>Followers</h3>
                            <div style={{ color: "rgba(72,92,98,1)" }}>{userData.followers}</div>
                            <h3 style={{ color: "rgba(72,92,98,1)" }}>Following</h3>
                            <div style={{ color: "rgba(72,92,98,1)" }}>{userData.following}</div>
                        </div>

                        <div><img src={userData.avatar_url} alt="Profile Image" style={imageStyle}></img></div>
                    </div>

                    <div style={midsectionStyle}>

                        <a href={userData.repos_url}>
                            <button style={buttonStyle}>Repositories</button>
                        </a>
                        <a href={userData.organizations_url}>
                            <button style={buttonStyle}>Organizations</button>
                        </a>
                        <div><img src={'/github-logo.png'} alt="GitHub Logo" style={logoStyle}></img></div>

                    </div>
                </div>)}
        </div>
    )
}