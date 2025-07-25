// import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import staticData from "../data/staticData";
import { getKoreanDateTimeString } from "@/app/lib/utils";

export default function ISRPage() {
    const data = staticData;
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
                                    <strong>Revalidation:</strong> Every 60
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

                    <div className="grid gap-4">
                        {data.map((item) => (
                            <Card key={item.id}>
                                <CardContent className="p-4">
                                    <h3 className="font-medium">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        {item.body || item.description}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-2">
                                        Static content that revalidates
                                        automatically
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
