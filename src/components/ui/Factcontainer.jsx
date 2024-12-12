import React, { useEffect, useState } from "react";

const statusConfig = {
  good: {
    colors: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
    label: "Good",
    ringColor: "ring-emerald-500",
  },
  moderate: {
    colors: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
    label: "Moderate",
    ringColor: "ring-amber-500",
  },
  poor: {
    colors: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    label: "Poor",
    ringColor: "ring-red-500",
  },
};

const randomFacts = [
  "Ganga is the longest river in India.",
  "Ganga is worshipped as a goddess.",
  "Its origin is at the Gangotri Glacier.",
  "Ganga basin supports 43% of India's population.",
  "The river is over 2,500 km long.",
  "It merges with the Bay of Bengal.",
  "Its water has bacteriophages that kill bacteria.",
];

const FactContainer = () => {
  const [currentFact, setCurrentFact] = useState("");  // Fact ko store karne ke liye
  const [currentStatus, setCurrentStatus] = useState("good");  // Status ko store karne ke liye

  useEffect(() => {
    const interval = setInterval(() => {
      // Random fact choose karte hain
      const randomIndex = Math.floor(Math.random() * randomFacts.length);
      setCurrentFact(randomFacts[randomIndex]);
      
      // Random status choose karte hain
      const statuses = Object.keys(statusConfig);
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      setCurrentStatus(randomStatus);
    }, 3000);  // Har 3 second mein update hoga

    return () => clearInterval(interval);  // Cleanup when the component unmounts
  }, []);

  return (
    <div
      className={`flex items-center justify-center w-[20rem] h-[8rem] rounded-md shadow-md transition-all ${statusConfig[currentStatus].colors} ring-4 ${statusConfig[currentStatus].ringColor}`}
    >
      <p className="text-center text-sm font-semibold">{currentFact}</p>
    </div>
  );
};

export default FactContainer;
