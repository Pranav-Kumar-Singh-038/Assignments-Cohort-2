import React, { useRef, useState } from "react";
import { z } from 'zod';
import { mobileAtom, sendOTPAtom, OTPAtom } from "../store/atoms/mobileAtom";
import { useRecoilValue, useSetRecoilState } from 'recoil';

export function OtpLogin() {
    const [tempMobileNum,SettempMobileNum]=useState(0);
    const mobileSchema = z.string().min(9, "Mobile number must be at least 10 digits long");
    const trueOTP="1234";
    const OTP = useRecoilValue(OTPAtom);
    const setOTP = useSetRecoilState(OTPAtom);
    const mobileNum = useRecoilValue(mobileAtom);
    const setMobilenum = useSetRecoilState(mobileAtom);
    const firstInputRef = useRef(null);
    const secondInputRef = useRef(null);
    const thirdInputRef = useRef(null);
    const fourthInputRef = useRef(null);
    const handleOTPClick = () => {
        try {
            mobileSchema.parse(tempMobileNum);
            setMobilenum(tempMobileNum);
          } catch (error) {
            alert("Enter a Valid mobile number");
            console.log(tempMobileNum)
          }
    }
    const handleLoginClick = () => {
       if(parseInt(OTP)==trueOTP)
       {
        alert("Login successful");
       }
       else
       {
        alert("Incorrect OTP")
       }
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const inputStyle = {
        width: "400px",
        margin: "5px",
        height: "7vh"
    }

    const buttonStyle = {
        width: "200px",
        margin: "5px",
        height: "7vh",
        color: "rgb(248, 250, 255)",
        backgroundColor: "black",
        borderRadius: 10,
        borderStyle: "none",
        fontFamily: '"Arial", sans-serif'
    }

    const inputContainerStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "10px"
    }

    const OTPinputStyle = {
        width: "50px",
        height: "50px"
    }

    const inputbuttoncontainerOTPStyle =
    {
        ...inputbuttoncontainerStyle,
        height: "100px"
    }

    return (
        <div>
            <div style={paradivStyle}>
                <div style={titleStyle}>Login Via OTP</div>

                <div style={inputbuttoncontainerStyle}>
                    <input style={inputStyle} type="text" placeholder="Enter Your Mobile Number" onChange={(e) => {
                        SettempMobileNum(e.target.value)
                    }}></input>
                    <button style={buttonStyle} onClick={handleOTPClick}>Send OTP</button>
                </div>
            </div>
           {mobileNum && (<div id="OTP and Login" style={paradivStyle}>
                <div style={inputbuttoncontainerOTPStyle}>

                    <div style={inputContainerStyle}>
                        <input ref={firstInputRef} style={OTPinputStyle} type="text" onChange={(e) => { setOTP(OTP + e.target.value); secondInputRef.current.focus(); }}></input>
                        <input ref={secondInputRef} style={OTPinputStyle} type="text" onChange={(e) => { setOTP(OTP + e.target.value); thirdInputRef.current.focus(); }}></input>
                        <input ref={thirdInputRef} style={OTPinputStyle} type="text" onChange={(e) => { setOTP(OTP + e.target.value); fourthInputRef.current.focus(); }}></input>
                        <input ref={fourthInputRef} style={OTPinputStyle} type="text" onChange={(e) => {  setOTP(OTP + e.target.value);}}></input>
                    </div>

                    <button style={buttonStyle} onClick={handleLoginClick}>Login</button>
                </div>
            </div>)}
        </div>
    )
}
