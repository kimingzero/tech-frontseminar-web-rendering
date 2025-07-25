import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import staticData from "../data/staticData";

// async function getData() {
//     return Array.from({ length: 20 }, (_, i) => ({
//         id: i + 1,
//         title: `SSR Item ${i + 1}`,
//         description: `This content was fetched on the client at ${new Date().toLocaleTimeString()}`,
//         timestamp:
//             new Date().toISOString().split("T")[0] +
//             " " +
//             new Date().toLocaleTimeString(),
//     }));
// }

export default async function SSRPage() {
    // const data = await getData();
    const data = staticData;
    // const renderTime = new Date().toISOString();
    const renderTime =
        new Date().toISOString().split("T")[0] +
        " " +
        new Date().toLocaleTimeString();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <Link href="/">
                        <Button variant="ghost">← Back to Home</Button>
                    </Link>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Server-Side Rendering (SSR)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong>Server Render Time:</strong>{" "}
                                    {renderTime}
                                </div>
                                <div>
                                    <strong>Current Time:</strong>{" "}
                                    {new Date().toISOString().split("T")[0] +
                                        " " +
                                        new Date().toLocaleTimeString()}
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Content is rendered on the server for each
                                request. Fresh data every time, but slower
                                initial load.
                            </p>
                        </CardContent>
                    </Card>

                    <div className="grid gap-4">
                        {data.map((item) => (
                            <Card key={item.id}>
                                <CardContent className="p-4">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-medium">
                                            {item.title}
                                        </h3>
                                        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
