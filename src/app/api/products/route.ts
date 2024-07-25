// GET , POST, PUT, DELETE

import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
    return NextResponse.json({ status: "Helo world" })
}

export async function POST(req: NextRequest) {
    // return NextResponse.json({ status: "Helo world" })
}