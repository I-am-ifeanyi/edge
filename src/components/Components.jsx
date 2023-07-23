import React, { useEffect, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"

import Logo from "../assets/Logo.png"
import background from "../assets/Shape.png"




export const Button = ({ icon, color, background, text, onClick }) => {
    return (
        <button
            className={`w-full h-full px-5 ${background} flex items-center justify-center gap-3 hover:translate-x-1 transition-all duration-500  rounded-md ${color}`}
            onClick={onClick}>
            {icon} {text}
        </button>
    )
}


export const LogoHeader = ({ isNext }) => {
    const [progressWidth, setProgressWidth] = useState("25%");
    const { getStarted, schoolProfile, adminLogo, schoolStructure, customStructure, session } = isNext

    useEffect(() => {
        if (schoolProfile) {
            setProgressWidth("50%");
        } else if (schoolStructure || customStructure) {
            setProgressWidth("75%");
        } else if (session) {
            setProgressWidth("100%");
        }
    }, [
        getStarted,
        schoolProfile,
        adminLogo,
        schoolStructure,
        customStructure,
        session]);

    return (
        <header className='border h-14 shadow fixed bg-colorWhite1 w-full top-0 z-10'>
            <div className='border md:px-10 px-2 h-14 flex items-center justify-between shadow fixed bg-colorWhite1 w-full top-0 z-10'>
                <img src={Logo} />
                {!getStarted && <button className="flex items-center gap-2 hover:translate-x-1 transition-all duration-500 bg-colorWhite3 px-4 py-2">Skip to login <AiFillCaretRight /></button>}

            </div>
            <label className={`absolute top-14 left-0 h-1 bg-colorBlue`} style={{ width: progressWidth }}></label>
        </header>
    )
}


export const backgroundStyle = {
    backgroundImage: `url('${background}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundColor: "#E5E5E5",
    shrink: 0
}

export const CONSTANTS = {
    EMAIL_PLACEHOLDER: "Email",
    PASSWORD_PLACEHOLDER: 'Create Password',
    CONFIRM_PASSWORD_PLACEHOLDER: 'Confirm Password',
    SIGN_IN_BUTTON_TEXT: 'Sign in'
}





export const fetchLocalUserData = (dataType) => {
    const json = localStorage.getItem(dataType);
    const localData = JSON.parse(json);
    return localData;
};


export const locallyStoreUserData = (dataType, dataToStore) => {
    if (typeof dataType !== 'string' || !dataToStore) {
        throw new Error('Invalid input parameters')
    }
    const json = JSON.stringify(dataToStore)
    localStorage.setItem(dataType, json)
};






export const PasswordStrengthBar = ({ password }) => {
    const calculateStrength = (password) => {
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        let strength = 0;
        if (hasLowerCase) strength++;
        if (hasUpperCase) strength++;
        if (hasNumber) strength++;
        if (hasSpecialChar) strength++;

        return strength;
    };

    const strength = calculateStrength(password);
    const strengthPercent = (strength / 4) * 100;

    return (
        <div className="flex items-center gap-5">
            <div className="w-full h-2 bg-gray-300">
                <div
                    className={`h-full ${strengthPercent > 70
                        ? 'bg-green-500'
                        : strengthPercent > 30
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                    style={{ width: `${strengthPercent}%` }}
                />
            </div>
            <span className="text-[14px] text-[#92929D]">{strengthPercent > 70 ? 'Strong' : strengthPercent > 30 ? "Fair" : "Weak"}</span>
        </div>
    );
};

export const Caveats = ({ bg, textColor, title, body, body2 }) => {
    return (
        <div className={`md:w-[15%] w-[90%] md:p-5 px-4 py-2 m-4 rounded-md ${bg} text-white float-left ${textColor}`}>
            <h6>{title}</h6>
            <p className="text-[12px]">{body}</p>
            <p className="text-[12px]">{body2}</p>
        </div>
    )
}

