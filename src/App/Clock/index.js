import React, { useState, useEffect } from "react";
import "./style.css";

const formDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString(undefined, { month: "long" });
    const weekday = date.toLocaleString(undefined, { weekday: "long" });
    const year = date.getFullYear();

    return `Dzisiaj jest ${day} ${month} · ${weekday} · roku pańskiego ${year}`;
};

export const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div className="clock">
            
            {formDate(date)}
        </div>
    )
};