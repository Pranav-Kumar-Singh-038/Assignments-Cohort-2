import React, { useState } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { nameAtom, ageAtom } from "../store/atoms/nameAtom"
import { BirthdayCard } from "./BirthdayCard";

export function CardMaker() {
    const setName = useSetRecoilState(nameAtom);
    const setAge = useSetRecoilState(ageAtom);

    const name=useRecoilValue(nameAtom);
    const age=useRecoilValue(ageAtom);

    const [tempName,setTempname]=useState("");
    const [tempAge,setTempage]=useState("");

    const handleGenerateClick = () => {
       setName(tempName);
       setAge(tempAge);
    }

    const outerdivStyle = {
        backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: 'cover',
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const paradivStyle = {
        display: "flex",
        alignItems: "center",
        flexDirection: 'column',
        width: "50vw",
        height: "50vh",
        borderRadius: "25px",
        backgroundColor: "rgb(0, 0, 0, 0.4)",
        border: "1px solid rgb(0, 0, 0, 0.3)",
        boxShadow: "0px 2px 10px 1px rgb(0, 0, 0, 0.4)"
    }
    const titleStyle = {
        margin: "10px",
        fontWeight: '700',
        fontFamily: '"Arial", sans-serif',
        color: 'white',
        fontSize: '8vh',
        height: "10vh",
        marginTop: "10vh"
    }

    const inputbuttoncontainerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "30vh",
        gap: "1vh"
    }

    const inputStyle = {
        width: "35vw",
        height: "7vh"
    }

    const buttonStyle = {
        width: "15vw",
        margin: "5px",
        height: "7vh",
        color: "rgb(248, 250, 255)",
        backgroundColor: "rgba(59,130,246,255)",
        borderRadius: 10,
        borderStyle: "none",
        fontFamily: '"Arial", sans-serif'
    }

    const inputcontainerStyle={
        display:"flex",
        flexDirection:"row",
        gap:"0.3vw",
        width:"40vw"
    }

    const ageinputStyle={
        width:"5vw"
    }

    const cardStyle={
        width:"100vw",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
    }

    return (
        <div style={outerdivStyle}>
            {(!name || !age) &&(<div style={paradivStyle}>
                <div style={titleStyle}>Enter Details</div>

                <div style={inputbuttoncontainerStyle}>
                    <div style={inputcontainerStyle}>
                        <input style={inputStyle} type="text" placeholder="Enter Name" onChange={(e) => {
                            setTempname(e.target.value);
                        }}></input>
                        <input style={ageinputStyle} type="text" placeholder="Enter Age" onChange={(e) => {
                            setTempage(e.target.value);
                        }}></input>
                    </div>

                    <button style={buttonStyle} onClick={handleGenerateClick}>Submit</button>
                </div>

            </div>)}

            {name && age && (<div style={cardStyle}>
                   <BirthdayCard color2={"yellow"} color1={"red"}></BirthdayCard>
                   <BirthdayCard color2={"blue"} color1={"purple"}></BirthdayCard>
                   <BirthdayCard color2={"grey"} color1={"red"}></BirthdayCard>
                </div>)}
        </div>
    )
}
