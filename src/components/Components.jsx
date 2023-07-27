import React, { useEffect, useState } from "react"
import { AiFillCaretRight } from "react-icons/ai"

import Logo from "../assets/Logo.png"
import background from "../assets/Shape.png"




export const Button = ({ icon, color, background, text, onClick, font }) => {
    return (
      <button
        className={`w-full h-full px-5 ${background} flex items-center justify-center gap-3 hover:translate-x-1 transition-all duration-500 ${font}  rounded-md ${color}`}
        onClick={onClick}
      >
        {icon} {text}
      </button>
    )
}


export const LogoHeader = ({ isNext, setIsNext, loginAdmin }) => {
    const [progressWidth, setProgressWidth] = useState("16.7%");
    const { getStarted, schoolProfile, adminLogo, schoolStructure, customStructure, session, instructorInvite, learnerInvite } = isNext

    useEffect(() => {
        if (schoolProfile) {
            setProgressWidth("33.4%");
        } else if (schoolStructure || customStructure) {
            setProgressWidth("50.1%");
        } else if (session) {
            setProgressWidth("66.7%");
        } else if (instructorInvite) {
            setProgressWidth("83.5%");

        } else if (learnerInvite || loginAdmin) {
            setProgressWidth("100%");

        }
    }, [
        getStarted,
        schoolProfile,
        adminLogo,
        schoolStructure,
        customStructure,
        session,
        instructorInvite,
        learnerInvite
    ]);

    const skipAll = () => setIsNext({
        getStarted: false,
        schoolProfile: false,
        schoolStructure: false,
        customStructure: false,
        session: false,
        instructorInvite: false,
        learnerInvite: false,
        loginAdmin: true

    })

    return (

        <header className='border h-14 shadow fixed bg-colorWhite1 w-full top-0 z-10'>
            <div className='border md:px-10 px-2 h-14 flex items-center justify-between shadow fixed bg-colorWhite1 w-full top-0 z-10'>
                <img src={Logo} />
                {!getStarted && <button className="flex items-center gap-2 hover:translate-x-1 transition-all duration-500 bg-colorWhite3 px-4 py-2" onClick={skipAll}>Skip to login <AiFillCaretRight /></button>}

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
    PASSWORD_PLACEHOLDER: 'Password',
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



