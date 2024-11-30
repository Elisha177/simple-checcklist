module.exports = [
    {
      id: 'valuationFeePaid',
      description: 'Valuation Fee Paid',
      evaluate: (data) => data.isValuationFeePaid === true,
    },
    {
      id: 'ukResident',
      description: 'UK Resident',
      evaluate: (data) => data.isUkResident === true,
    },
    {
      id: 'riskRatingMedium',
      description: 'Risk Rating Medium',
      evaluate: (data) => data.riskRating === 'Medium',
    },
    {
      id: 'ltvBelow60',
      description: 'LTV Below 60%',
      evaluate: (data) => {
        const loanRequired = parseFloat(data.mortgage.loanRequired.replace(/[^\d.-]/g, ''));
        const purchasePrice = parseFloat(data.mortgage.purchasePrice.replace(/[^\d.-]/g, ''));
        return (loanRequired / purchasePrice) * 100 < 60;
      },
    },
  ];
  