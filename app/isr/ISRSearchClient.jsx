"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";

export default function ISRSearchClient({ items }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredData = items.filter(
        (item) =>
            item.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
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
        <div className="m-3 font-bold">Random Data</div>
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
        </>
    );
}
