
// import { NextRequest, NextResponse } from "next/server";

// export async function POST(req: NextRequest) {
//   try {
//     // Read raw body safely
//     const rawBody = await req.text();

//     if (!rawBody) {
//       return NextResponse.json(
//         { error: "Empty request body" },
//         { status: 400 }
//       );
//     }

//     const body = JSON.parse(rawBody);

//     const {
//       name,
//       email,
//       message,
//       projectType,
//       timeline,
//     } = body;

//     // Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: "Missing required fields" },
//         { status: 400 }
//       );
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return NextResponse.json(
//         { error: "Invalid email format" },
//         { status: 400 }
//       );
//     }

//     if (message.trim().length < 30) {
//       return NextResponse.json(
//         { error: "Message must be at least 30 characters long" },
//         { status: 400 }
//       );
//     }

//     // Import Resend dynamically (important)
//     const { Resend } = await import("resend");

//     const resend = new Resend(process.env.RESEND_API_KEY);

//     const { error } = await resend.emails.send({
//       // MUST use this until your domain is verified
//       from: "Humayun Portfolio <onboarding@resend.dev>",
//       to: ["enzoninja1777@gmail.com"],
//       subject: `New Portfolio Message${projectType ? ` – ${projectType}` : ""}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; line-height: 1.6">
//           <h2>New Contact Message</h2>
//           <p><strong>Name:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
//           <p><strong>Timeline:</strong> ${timeline || "Not specified"}</p>
//           <hr />
//           <p>${message.replace(/\n/g, "<br />")}</p>
//         </div>
//       `,
//     });

//     if (error) {
//       console.error("Resend error:", error);
//       return NextResponse.json(
//         { error: error.message },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({ success: true });
//   } catch (err) {
//     console.error("API crash:", err);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }




import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    /* -------------------- Read & parse body -------------------- */
    const rawBody = await req.text();

    if (!rawBody) {
      return NextResponse.json(
        { error: "Empty request body" },
        { status: 400 }
      );
    }

    let body;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const { name, email, message, projectType, timeline } = body;

    /* -------------------- Validation -------------------- */
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

    /* -------------------- Resend -------------------- */
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY missing" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const sent = await resend.emails.send({
      // MUST use this until your domain is verified
      from: "Humayun Portfolio <onboarding@resend.dev>",
      to: ["humayunedits@gmail.com"],
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

    if (!sent) {
      console.error("Resend: empty send response", sent);
      return NextResponse.json(
        { error: "Failed to send email" },
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