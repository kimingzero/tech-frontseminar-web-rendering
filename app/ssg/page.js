import SSGData from "./SSGData";

export const dynamic = "force-static";

export default async function SSGPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "force-cache",
    });
    const data = await res.json();

    return <SSGData initialData={data} />;
}
