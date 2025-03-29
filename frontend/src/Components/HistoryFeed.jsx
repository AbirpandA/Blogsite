import React, { useState, useEffect } from "react";
import HistoryCard from "./HistoryCard";
import axios from "axios";

const HistoryFeed = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("")
        setEntries(res.data);
      } catch (error) {
        console.error("Failed to fetch history data", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="flex flex-col space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">History Oops</h1>
      <p className="text-gray-600 mb-8">
        Discover history's strangest moments, peculiar events, and amusing
        mishaps that you probably didn't learn about in school.
      </p>

      <div className="grid grid-cols-1 gap-6 ">
        {entries.map((entry) => (
          <HistoryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default HistoryFeed;
