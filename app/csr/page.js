"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import staticData from "../data/staticData";

export default function CSRPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [renderTime, setRenderTime] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const startTime =
            new Date().toISOString().split("T")[0] +
            " " +
            new Date().toLocaleTimeString();
        setCurrentTime(startTime);

        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // 2초 딜레이

            // dummy data 불러오기
            setData(staticData);
            setLoading(false);
            // setRenderTime(new Date().toISOString());
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!loading) {
            // 데이터 표시 후, 다음 페인트 이후 실행
            setTimeout(
                () =>
                    setRenderTime(
                        new Date().toISOString().split("T")[0] +
                            " " +
                            new Date().toLocaleTimeString()
                    ),
                0
            );
        }
    }, [loading]);

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
                            <CardTitle>Client-Side Rendering (CSR)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong>Page Load Time:</strong>{" "}
                                    {currentTime}
                                </div>
                                <div>
                                    <strong>Data Fetch Complete:</strong>{" "}
                                    {renderTime || "Loading..."}
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Content is rendered on the client after
                                JavaScript loads. Notice the loading state and
                                delay.
                            </p>
                        </CardContent>
                    </Card>

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                            <p className="mt-4 text-gray-600">Loading ...</p>
                        </div>
                    ) : (
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
                    )}
                </div>
            </div>
        </div>
    );
}
