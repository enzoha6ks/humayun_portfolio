// import { EmailTemplate } from "@/components/email-template";
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   const { name, email, message, projectType, timeline } = await req.json();

//   // Validate required fields
//   if (!name || !email || !message) {
//     return NextResponse.json(
//       { error: "Missing required fields" },
//       { status: 400 }
//     );
//   }

//   // Validate email format
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     return NextResponse.json(
//       { error: "Invalid email format" },
//       { status: 400 }
//     );
//   }

//   // Validate message length
//   if (message.trim().length < 30) {
//     return NextResponse.json(
//       { error: "Message should be at least 30 characters long" },
//       { status: 400 }
//     );
//   }

//   // Optional: Block disposable email providers
//   const blockList = ["tempmail", "mailinator", "10minutemail", "guerrillamail"];
//   const domain = email.split("@")[1];
//   if (blockList.some((blocked) => domain.includes(blocked))) {
//     return NextResponse.json(
//       { error: "Temporary email addresses are not allowed" },
//       { status: 403 }
//     );
//   }

//   const apiKey = process.env.RESEND_API_KEY;
//   if (!apiKey) {
//     return NextResponse.json(
//       { error: "Missing Resend API Key" },
//       { status: 500 }
//     );
//   }

//   try {
//     const { Resend } = await import("resend");
//     const resend = new Resend(apiKey);

//     const { data, error } = await resend.emails.send({
//       from: "From Portfolio <contact@humayunjavaid>",
//       to: ["enzoninja1777@gmail.com"],
//       subject: `New Message from Portfolio - ${projectType || "General Inquiry"}`,
//       react: EmailTemplate({ name, email, message, projectType, timeline }),
//     });

//     if (error) {
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     return NextResponse.json({ success: true, data });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to send email" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Read raw body safely
    const rawBody = await req.text();

    if (!rawBody) {
      return NextResponse.json(
        { error: "Empty request body" },
        { status: 400 }
      );
    }

    const body = JSON.parse(rawBody);

    const {
      name,
      email,
      message,
      projectType,
      timeline,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (message.trim().length < 30) {
      return NextResponse.json(
        { error: "Message must be at least 30 characters long" },
        { status: 400 }
      );
    }

    // Import Resend dynamically (important)
    const { Resend } = await import("resend");

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      // MUST use this until your domain is verified
      from: "Humayun Portfolio <onboarding@resend.dev>",
      to: ["enzoninja1777@gmail.com"],
      subject: `New Portfolio Message${projectType ? ` – ${projectType}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
          <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
          <hr />
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API crash:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

