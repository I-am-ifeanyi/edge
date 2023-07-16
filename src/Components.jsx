import React from "react"

export const Button = ({ icon, color, background, text }) => {
    return (
        <button
            className={`w-full h-full px-5 ${background} flex items-center justify-center gap-3 hover:translate-x-1 transition-all duration-500  rounded-md ${color}`}
        >
            {icon} {text}
        </button>
    )
}

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

