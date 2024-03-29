import { nameAtom, ageAtom } from '../store/atoms/nameAtom.jsx'
import { useRecoilValue } from 'recoil'

export function BirthdayCard({color1, color2}) {
    const name = useRecoilValue(nameAtom);
    const age = useRecoilValue(ageAtom);

    const maincontainerStyle = {
        width: "500px",
        height: "350px",
        background: `linear-gradient(to right, ${color1}, ${color2})`,
        borderRadius: "10px",
        color: "white"
    }

    const tagcontainerStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        alignItems: "gap",
        justifyContent: "space-evenly"
    }

    const tagStyle = {
        border: "1px solid black",
        borderRadius: "25px",
        backgroundColor: "black",
        color: "white",
        height: "30px",
        padding: "5px",
        alignItems: "center",
        paddingTop: "10px"
    }

    const titleStyle = {
        padding: "10px",
        height: "40px",
        fontSize: "30px",
    }

    const textStyle = {
        padding: "10px",
        fontSize: "17px"
    }

    return (
        <div style={maincontainerStyle}>
            <div style={titleStyle}>🎂Happy Birthday!!🎉 </div>
            <p style={textStyle}>Happy Birthday {age}th birthday {name}!! On this special day, I want to take a moment to celebrate you – not just for the wonderful person you are today, but for every step, every challenge, and every triumph that has brought you here. Your strength, kindness, and vibrant spirit make the world a brighter place, and I feel incredibly lucky to know you.</p>
            <div style={tagcontainerStyle}>
                <div style={tagStyle}>#Celebration</div>
                <div style={tagStyle}>#MakeAWish</div>
                <div style={tagStyle}>#PartyTime</div>
            </div>
        </div>
    )
}