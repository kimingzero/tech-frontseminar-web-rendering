import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getKoreanDateTimeString } from "@/app/lib/utils";

export default async function SSRPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");

    const data = await res.json();
    const renderTime = getKoreanDateTimeString();

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
                                    {getKoreanDateTimeString()}
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
                                            {item.body}
                                        </h3>
                                        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                                            {item.id}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600">
                                        {item.name}
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
