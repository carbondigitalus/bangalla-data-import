export class GoogleShoppingAgeGroup {
    // 0-3 months old. Newborn sizes are often identified by the age range in months (0–3) or just “newborn.”
    Newborn: string;
    // 3–12 months old. Infant sizes are often identified by the age range in months (3–12).
    Infant: string;
    // 1–5 years old. Toddler sizes are often identified by the age range in months (12–24) or years (1–5).
    Toddler: string;
    // 5–13 years old. Children's sizes are often identified by the age range in years (5-13).
    Kids: string;
    // Typically teens or older (13 years old or more). All sizes within this age group have been manufactured to fit an adult or teen.
    Adult: string;
    constructor() {
        this.Newborn = 'newborn';
        this.Infant = 'infant';
        this.Toddler = 'toddler';
        this.Kids = 'kids';
        this.Adult = 'adult';
    }
}
