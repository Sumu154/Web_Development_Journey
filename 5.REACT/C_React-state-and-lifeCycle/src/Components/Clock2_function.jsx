                // 1. with function components
import React, { useState, useEffect } from 'react';

const Clock2 = ({ locale }) => {
    // [value, function] = useState(initial value)
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const clockTimer = setInterval(() => {
            setDate(new Date());
        }, 1000);

        // Cleanup timer when the component unmounts
        return () => clearInterval(clockTimer);
    }, []); // Empty dependency array to run only on mount/unmount

    return (
        <h1 className="heading">
            <span className="text">
                {date.toLocaleTimeString(locale)}
            </span>
        </h1>
    );
};

export default Clock2;
