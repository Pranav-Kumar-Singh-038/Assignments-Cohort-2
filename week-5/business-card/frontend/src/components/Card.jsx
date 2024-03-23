import { useState } from "react";


export function Card({ userData }) {
    console.log(userData.linkedin)

    return <div style={{ padding: 10, margin: 10, border: "1px solid rgba(72,92,98,0.41)", borderRadius: "10px", boxShadow: "0 8px 6px -9px black", width:"25rem" }}>
        <h2>{userData.name}</h2>
        <p style={{ color: "rgba(0,0,0,0.65)" }}>{userData.desc}</p>
        <h3>Interests</h3>

        <div style={{ color: "rgba(0,0,0,0.65)" }}>
            {userData.interests.map(function (interest) {
                return <div key={interest}>
                    <p>{interest}</p>
                </div>
            })}
        </div>
        <a href={userData.linkedin}>
            <button style={{ color: "rgb(248, 250, 255)", backgroundColor: "#007bff", borderRadius: 3, borderStyle: "none", padding: 7, margin: 10, fontFamily: "Times New Roman" }}>LinkedIN</button>
        </a>
        <a href={userData.github}>
            <button style={{ color: "rgb(248, 250, 255)", backgroundColor: "#007bff", borderRadius: 3, borderStyle: "none", padding: 7, margin: 10, fontFamily: "Times New Roman" }}>GitHub</button>
        </a>
    </div>
}
