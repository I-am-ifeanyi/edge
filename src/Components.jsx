import React, { useEffect } from "react"

import Logo from "./assets/Logo.png"
import background from "./assets/Shape.png"
export const Button = ({ icon, color, background, text }) => {
    return (
        <button
            className={`w-full h-full px-5 ${background} flex items-center justify-center gap-3 hover:translate-x-1 transition-all duration-500  rounded-md ${color}`}
        >
            {icon} {text}
        </button>
    )
}


export const LogoHeader = () => {
    return (
        <header className='border md:px-10 px-2 py-2 shadow absolute w-full top-0'>
            <img src={Logo} />

        </header>)
}


export const backgroundStyle = {
    backgroundImage: `url('${background}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundColor: "#E5E5E5"



}

export const CONSTANTS = {
    EMAIL_PLACEHOLDER: "Email",
    PASSWORD_PLACEHOLDER: 'Create Password',
    CONFIRM_PASSWORD_PLACEHOLDER: 'Confirm Password',
    SIGN_IN_BUTTON_TEXT: 'Sign in'
}

// export const FetchLocalUser = () => useEffect((dataType, setDataType) => {
//     const json = localStorage.getItem(dataType)
//     const localData = JSON.parse(json)
//     setDataType(localData)

// }, [])

export const fetchLocalUserData = (dataType, setData) => {
    useEffect(() => {
        const json = localStorage.getItem(dataType);
        const localData = JSON.parse(json);
        setData(localData);
    }, [dataType, setData]);
};

export const locallyStoreUserData = (dataType, dataToStore) => {
        const json = JSON.stringify(dataToStore)
    if (typeof localStorage !== 'undefined') {
        try {
            localStorage.setItem(dataType, json)
        } catch (error) {
            console.error('Error storing data:', error)
        } }
};


// export const FetchLocalUser = ({ dataType, setDataType }) => {
//     let data;
//     useEffect(() => {
//         const json = localStorage.getItem(dataType)
//         const localData = JSON.parse(json)
//         setDataType(localData)
//         data = localData

//     }, []);
//     return (
//         <div>
//             {data}
//         </div>
//     )
// }




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

