import { atom } from "recoil";

export const profileAtom = atom({
    key: "profileAtom",
    default: {
        imgSrc:"/profile.jpeg",
        name: "Rita Correia",
        age: 32,
        city: "London",
        followers: 80000,
        likes: 803000,
        photos: 1400
    }
})