import { useSetRecoilState } from 'recoil';
import { backgroundcolorAtom } from '../store/atoms/backgroundcolorAtom';

export function Buttons() {
    const setBgColor = useSetRecoilState(backgroundcolorAtom);

    const colorChanger = (color) => () => {
        setBgColor(color);
    };

    const buttontabStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: "10px",
        alignItems:"center",
        marginTop:"80vh",
        backgroundColor:"white",
        width:"70vw",
        height:"7vh",
        borderRadius:10,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.25)"
    }

    const baseButtonStyle = {
        color: "black",
        borderRadius: 10,
        borderStyle: "none",
        fontFamily: '"Arial", sans-serif',
        width: '15vh',
        height: "5vh",
        margin: "5px"
    };
    
    const redbuttonStyle = {
        ...baseButtonStyle,
        backgroundColor: "red",
    };
    const yellowbuttonStyle = {
        ...baseButtonStyle,
        backgroundColor: "yellow",
    };
    const blackbuttonStyle = {
        ...baseButtonStyle,
        backgroundColor: "black",
        color:"white"
    };
    const purplebuttonStyle = {
        ...baseButtonStyle,
        backgroundColor: "purple",
    };
    const greenbuttonStyle = {
        ...baseButtonStyle,
        backgroundColor: "green",
    };
    const bluebuttonStyle = {
        ...baseButtonStyle,
        backgroundColor: "blue",
    };
    const defaultbuttonStyle = {
        ...baseButtonStyle,
        backgroundColor: "orange",
    };

    return (
        <div style={buttontabStyle}>
            <button style={redbuttonStyle} onClick={colorChanger("red")}>Red</button>
            <button  style={yellowbuttonStyle} onClick={colorChanger("yellow")}>Yellow</button>
            <button  style={blackbuttonStyle} onClick={colorChanger("black")}>Black</button>
            <button  style={purplebuttonStyle} onClick={colorChanger("purple")}>Purple</button>
            <button  style={greenbuttonStyle} onClick={colorChanger("green")}>Green</button>
            <button  style={bluebuttonStyle} onClick={colorChanger("blue")}>Blue</button>
            <button  style={defaultbuttonStyle} onClick={colorChanger("white")}>Default</button>
        </div>
    )
}
