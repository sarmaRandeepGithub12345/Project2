import React, { useState } from "react";

const InputWithIcon = ({ placeholder = "", iconPath = "" }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="relative">
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                className="w-full pr-12 pl-5 py-4 rounded-lg bg-[#f6f6f6] border-gray-300 focus:outline-none"
            />
            {iconPath && (
                <img
                    src={iconPath}
                    alt="icon"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
            )}
        </div>
    );
};

export default InputWithIcon;
