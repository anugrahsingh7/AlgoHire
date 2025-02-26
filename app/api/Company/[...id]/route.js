import { NextResponse } from "next/server";
import Company from "../../../_models/Company";
import { connectToDatabase } from "../../../_lib/mongoDb";
// GET Company by ID
export async function GET(req, { params }) {
  try {
    await connectToDatabase();

    const { id } = params; // Extract ID from URL params
    if (!id)
      return NextResponse.json(
        { error: "Company ID is required" },
        { status: 400 }
      );

    const company = await Company.findById(id); // Fetch company by ID

    if (!company)
      return NextResponse.json({ error: "Company not found" }, { status: 404 });

    return NextResponse.json(company); // Return company data
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
