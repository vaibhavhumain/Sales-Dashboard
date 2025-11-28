import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (email === "admin@gobindcoach.com" && password === "Admin@GC2025") {
      return NextResponse.json(
        { message: "Login successful", token: "sample_token_123" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
