import { NextRequest, NextResponse } from "next/server";

interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  teamSize?: string;
  interest?: string;
  message?: string;
  submittedAt: string;
}

// In-memory store (resets on redeploy — swap with a DB in production)
const leads: Lead[] = [];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, phone, teamSize, interest, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json({ error: "Name, email, and company are required." }, { status: 400 });
    }

    const lead: Lead = {
      id: Date.now().toString(),
      name,
      email,
      company,
      phone: phone || "",
      teamSize: teamSize || "",
      interest: interest || "",
      message: message || "",
      submittedAt: new Date().toISOString(),
    };

    leads.push(lead);

    console.log("New enterprise lead captured:", lead);

    return NextResponse.json(
      { success: true, message: "Lead captured successfully. Our team will contact you within 24 hours.", leadId: lead.id },
      { status: 201 }
    );
  } catch {
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads }, { status: 200 });
}
