import React from 'react';

export default function TweetPreprocessingSlide() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Tweet Preprocessing Example</h1>
      <div className="flex flex-col gap-6 w-full max-w-2xl">
        <div className="bg-gray-100 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2 text-red-600">Before Cleaning</h2>
          <p className="text-md text-gray-700 font-mono">
            @United thanks for NOTHING. You ruined my trip. Lmao ✈️
          </p>
        </div>
        <div className="bg-green-50 p-6 rounded-2xl shadow-xl">
          <h2 className="text-xl font-semibold mb-2 text-green-700">After Cleaning</h2>
          <p className="text-md text-gray-800 font-mono">
            thanks nothing ruined trip
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-6 italic">
        Preprocessing helps the model focus on meaning, not emojis or noise.
      </p>
    </div>
  );
}
