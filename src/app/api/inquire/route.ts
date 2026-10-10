import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, pieceTitle } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      );
    }

    console.log(`[ACEUP Collector Inquiry]:`, body);

    return NextResponse.json({
      success: true,
      message: `Inquiry recorded for ${pieceTitle || "Floor Art Edition"}.`,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
