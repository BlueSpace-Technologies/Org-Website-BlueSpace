import React from 'react';
import './industries.css'; // Import your CSS file

// ... Rest of your component code


const industriesData = {
  industries: [
    {
      name: "Fintech",
      description: "Discover, Stripe, CreditKarma, STC Bank, MoneyLion, Marqeta, Quicken, Lulo Bank, Earnin, Fundbox, StreetBeat, Q2"
    },
    {
      name: "Crypto & Web3",
      description: "Coinbase, MEXC, DFINITY, Ndax, Aurox, Alliance Block"
    },
    {
      name: "Technology",
      description: "Google, Amazon, Snapchat, Facebook, Cisco, Speedtest.net"
    },
    {
      name: "Ecommerce & Fashiontech",
      description: "Serena & Lily, California Closets, L’Oreal, Mercari"
    },
    {
      name: "Electronics",
      description: "Sony, Sandisk, Western Digital, Oppo, Corsair, Samsung, XGIMI, Fossil"
    },
    {
      name: "Food & Beverage",
      description: "Coca-Cola, IMPOSSIBLE, Joe & The Juice, JOKR, Reyes Holdings"
    },
    {
      name: "Startups & VC",
      description: "Fiverr, Superhuman, SendGrid, Clearbit, Onfido, Rapid Robotics, Wealth"
    },
    {
      name: "Healthcare & Life Sciences",
      description: "Medidata, Medable, Hint, Endpoint, Neurolign, Quartzy"
    },
    {
      name: "Telecommunications",
      description: "T-Mobile, C-Spire, Huawei"
    },
    {
      name: "Mobility",
      description: "Uber, Toyota, Nauto"
    },
    {
      name: "Logistics",
      description: "UPS, Interos, Martin Brower"
    }
  ]
};

const Industries = () => {
  return (
    <div className="bg-black">
      <div className="font-unisans text-white text-3xl font-semibold lg:text-6xl mt-0 text-start sm:text-4xl">
        <h1>Industries</h1>
      </div>
      <p className="font-unisans text-white lg:text-3xl sm:text-xl p-5">
        We unite with big brands and startups in various industries to create award-winning work.
      </p>
      <div className="grid-container">
        {industriesData.industries.map((industry, index) => (
          <div className="industry-section" key={index}>
            <div className="text-white text-2xl lg:text-4xl font-semibold p-3">{industry.name}</div>
            <div className="text-white p-4 text-2xl sm:text-xl">{industry.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
