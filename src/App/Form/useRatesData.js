import { useState, useEffect } from "react";

export const useRatesData = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_RxtTSgPLPuAKH8xn9GXKax7i6Ncok5il7lIh1Yyy");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const data = await response.json();
                const rates = {
                    PLN: { value: 1 },
                    ...data.data,
                };
                const rawDate = data.meta.last_updated_at;
                const formattedDate = new Date(rawDate).toLocaleDateString("pl-PL", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });

                setRatesData({
                    state: "success",
                    rates,
                    date: formattedDate,
                });

            } catch (error) {
                setRatesData({
                    state: "error",
                });
            }
        };

        setTimeout(fetchRates, 1000);
    }, []);

    return ratesData;
};
