import { useState } from "react";

const LoanCalci = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTenure, setLoanTenure] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [emiAmount, setEmiAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [error, setError] = useState("");

  const calculateLoan = () => {
    if (!loanAmount || parseFloat(loanAmount) <= 0) {
      alert("Bhai Loan Amount Daalo Jaldi Se");
      return;
    }
    if (!loanTenure || parseFloat(loanTenure) <= 0) {
      alert("Bhai Kitne Waqt ke liye Chahiye?");
      return;
    }
    if (!interestRate || parseFloat(interestRate) <= 0) {
      alert("Bhai Interest Kitna Hai?");
      return;
    }

    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const time = parseFloat(loanTenure) * 12;

    const x = Math.pow(1 + rate, time);
    const emi = (principal * rate * x) / (x - 1);
    const totalPaymentValue = emi * time;
    const totalInterestValue = totalPaymentValue - principal;

    setEmiAmount(emi.toFixed(2));
    setTotalInterest(totalInterestValue.toFixed(2));
    setTotalPayment(totalPaymentValue.toFixed(2));
    setError("");
  };

  return (
    <div className="loanCalci">
      <h1>Loan EMI Calculator by Khushi</h1>
      <label>Loan Amount (in ₹): </label>
      <input
        type="number"
        placeholder="Loan Amount"
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      <label>Tenure: </label>
      <input
        type="number"
        placeholder="Enter Tenure"
        onChange={(e) => setLoanTenure(e.target.value)}
      />
      <p>
        <label>Interest: </label>
        <input
          type="number"
          placeholder="Enter Interest (%)"
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </p>
      <br />
      <br />
      <button onClick={calculateLoan} className="btn">
        Calculate Amount
      </button>
      <div className="output">
        <h2>Loan Details</h2>
        <p className="ans">EMI Amount: ₹{emiAmount}</p>
        <p className="ans">Total Interest Payable: ₹{totalInterest}</p>
        <p className="ans">Total Payment: ₹{totalPayment}</p>
      </div>
    </div>
  );
};

export default LoanCalci;



