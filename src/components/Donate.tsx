import React from "react";
import BookDonation from "./BookDonation";
import MonetaryDonation from "./MonetaryDonationForm";

const Donate: React.FC = () => {
  return (
    <div className="donate-page container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Donate Books or Money</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Book Donation Section */}
        <BookDonation />
        {/* Monetary Donation Section */}
        <MonetaryDonation />
      </div>
    </div>
  );
};

export default Donate;
