import mongoose from "mongoose";

const { Schema } = mongoose;

const CompanySchema = new Schema(
    {
        CompanyName: String,
        CompanyLogo: String,
        CompanyAbout: String,
        Category: String,
        Role: String,
        Time: String,
        Package: String,
        Location: String,
        ContractDuration: String,
        TestDifficulty: String,
        RequiredExperience : String, 
        ApplicationDeadline: String,
        RequiredSkills: Array,
        Responsibilities: Array,
        Requirements: Array,
        Benefits: Array,
},
    {
        timestamps: true,
    }
);

// Correct way to define the model
const Company = mongoose.models.Company || mongoose.model("Company", CompanySchema);

export default Company;
