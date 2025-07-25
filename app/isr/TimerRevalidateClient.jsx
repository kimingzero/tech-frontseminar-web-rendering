"use client";

import { useEffect, useState } from "react";

export default function TimerRevalidateClient() {
    const [seconds, setSeconds] = useState(10);

    // 1초마다 감소
    useEffect(() => {
        if (seconds === 0) {
            window.location.reload();
            return;
        }
        const timer = setTimeout(() => setSeconds((sec) => sec - 1), 1000);
        return () => clearTimeout(timer);
    }, [seconds]);

    return (
        <button
            onClick={() => window.location.reload()}
            className="bg-black text-white rounded px-4 py-2 ml-2"
        >
            Revalidate ({seconds})
        </button>
    );
}
