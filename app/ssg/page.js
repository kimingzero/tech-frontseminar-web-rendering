// import staticData from "@/app/data/staticData";
// import SearchSection from "./SearchSection";

// export default function SSGPage() {
//     // 여기서 staticData를 props로 넘겨주기
//     const buildTime = "2025-07-25 오후 12:00:00";
//     return <SearchSection data={staticData} buildTime={buildTime} />;
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import Input from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import staticData from "@/app/data/staticData";
import { getKoreanDateTimeString } from "@/app/lib/utils";

export default function SSGPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const buildTime = "2025-07-25 오후 12:00:00";

    const filteredData = staticData.filter(
        (item) =>
            item.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                            <CardTitle>Static Site Generation (SSG)</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                                <div>
                                    <strong>Built At:</strong> {buildTime}
                                </div>
                                <div>
                                    <strong>Current Time:</strong>{" "}
                                    {getKoreanDateTimeString()}
                                </div>
                            </div>
                            <p className="text-gray-600">
                                Content is pre-rendered at build time. Fastest
                                loading, but content is static until next build.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-4">
                            <Input
                                type="text"
                                placeholder="Search topics..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full"
                            />
                        </CardContent>
                    </Card>

                    <div className="grid gap-4">
                        {filteredData.map((item) => (
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

                    {filteredData.length === 0 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600">
                                No topics found matching your search.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
