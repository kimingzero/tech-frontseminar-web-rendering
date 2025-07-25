// app/api/dummydata/route.js
import { NextResponse } from "next/server";
import staticData from "../../data/staticData"; // 기존 dummydata import

export async function GET() {
    return NextResponse.json(staticData);
}
