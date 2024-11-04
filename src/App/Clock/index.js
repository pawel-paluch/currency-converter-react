import React, { useState, useEffect } from "react";
import { useCurrentDate } from "./useCurrentDate";
import { Wrapper } from "./styled.js";

const formatDate = (date) => {
    const day = date.getDate();
    const month = date.toLocaleString(undefined, { month: "long" });
    const weekday = date.toLocaleString(undefined, { weekday: "long" });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" });

    return `Dzisiaj jest ${weekday}, ${day} ${month} ${year}, godzina ${time}`;
};

export const Clock = () => {
    const date = useCurrentDate();

    return (
        <Wrapper>
            {formatDate(date)}
        </Wrapper>
    );
};
