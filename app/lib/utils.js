import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

// 현재 한국 시간을 return하는 함수
export function getKoreanDateTimeString(date = new Date()) {
    return (
        date.toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" }) +
        " " +
        date.toLocaleTimeString("ko-KR", { timeZone: "Asia/Seoul" })
    );
}
