import { atom} from 'recoil';

export const mobileAtom=atom({
    key:"mobileAtom",
    default:null
})

export const sendOTPAtom=atom({
    key:"sendOTPAtom",
    default:false
})

export const OTPAtom=atom({
    key:"OTPAtom",
    default:""
})