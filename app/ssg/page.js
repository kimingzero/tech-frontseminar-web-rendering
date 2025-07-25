import staticData from "@/app/data/staticData";
import SearchSection from "./SearchSection";

export default function SSGPage() {
    // 여기서 staticData를 props로 넘겨주기
    const buildTime = "2025-07-25 오후 12:00:00";
    return <SearchSection data={staticData} buildTime={buildTime} />;
}
