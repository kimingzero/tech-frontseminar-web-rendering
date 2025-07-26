export const revalidate = 10;

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TimerRevalidateClient from "./TimerRevalidateClient"; // 클라이언트 컴포넌트 import
import { Button } from "@/components/ui/button";
import { getKoreanDateTimeString } from "../lib/utils";
import ISRSearchClient from "./ISRSearchClient";

function getRandomItems(arr, n) {
    if (arr.length <= n) return arr;
    const result = [];
    const used = new Set();
    while (result.length < n) {
        const idx = Math.floor(Math.random() * arr.length);
        if (!used.has(idx)) {
            used.add(idx);
            result.push(arr[idx]);
        }
    }
    return result;
}

export default async function ISRPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments", {
        cache: "force-cache",
        next: { revalidate: 30 },
    });
    const data = await res.json();
    const random = getRandomItems(data, 5);
    const renderTime = getKoreanDateTimeString();

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <Link href="/">
                        <Button variant="ghost">← Back to Home</Button>
                    </Link>
                    {/* 타이머 클라이언트 컴포넌트 */}
                    <TimerRevalidateClient />
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Incremental Static Regeneration (ISR)
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong>Page Generated:</strong>{" "}
                                    {renderTime}
                                </div>
                                <div>
                                    <strong>Revalidation:</strong> Every 30
                                    seconds
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Static generation with automatic revalidation.
                                Fast like SSG, but can update content
                                periodically.
                            </p>
                        </CardContent>
                    </Card>
                    <ISRSearchClient items={random} />
                </div>
            </div>
        </div>
    );
}
