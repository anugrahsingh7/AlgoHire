import { connectToDatabase } from "@/app/_lib/mongoDb";
import Company from "@/app/_models/Company";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const {
            CompanyName,
            CompanyLogo,
            CompanyAbout,
            Category,
            Role,
            Time,
            Package,
            Location,
            ContractDuration,
            TestDifficulty,
            RequiredExperience,
            ApplicationDeadline,
            RequiredSkills,
            Responsibilities,
            Requirements,
            Benefits
        } = await request.json();

        await connectToDatabase();
        await Company.create({
            CompanyName,
            CompanyLogo,
            CompanyAbout,
            Category,
            Role,
            Time,
            Package,
            Location,
            ContractDuration,
            TestDifficulty,
            RequiredExperience,
            ApplicationDeadline,
            RequiredSkills,
            Responsibilities,
            Requirements,
            Benefits
        });

        return NextResponse.json({ message: "Company Created" }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectToDatabase();
        const companies = await Company.find(); // Renamed `Company` to `companies`
        return NextResponse.json({ companies });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const id = new URL(request.url).searchParams.get("id"); // Corrected URL parsing

        if (!id) {
            return NextResponse.json({ error: "ID is required" }, { status: 400 });
        }

        await connectToDatabase();
        await Company.findByIdAndDelete(id);

        return NextResponse.json({ message: "Company deleted" }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
