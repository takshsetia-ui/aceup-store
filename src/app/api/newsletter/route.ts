import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // In production, integrate with Resend, Mailchimp, or database
    console.log(`[ACEUP Drop Club Subscriber]: ${email} at ${new Date().toISOString()}`);

    return NextResponse.json({
      success: true,
      message: "Successfully added to the ACEUP Drop Club priority list.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
