export default function handler(req, res) {
    const checklist = [
      { description: "Valuation Fee Paid", passed: true },
      { description: "UK Resident", passed: true },
      { description: "Risk Rating Medium", passed: true },
      { description: "LTV Below 60%", passed: true },
    ];
    res.status(200).json(checklist);
  }
  