import {
  LeetcodeBadges,
  LeetcodeContestRatingGraph,
  LeetcodeSolvedProblemsStats,
  LeetcodeSubmissionsHeatmap,
  LeetcodeTopRatingHistogram,
} from "leetcode-profiler";
import React, { useRef, useState } from "react";

export const Example = () => {
  const ref = useRef(null);
  const [username, setUsername] = useState("abhinandan_mishra_1");

  const handleClick = () => {
    setUsername(ref?.current?.value);
  };
  
  return (
    <div className="flex flex-col bg-dark-layer-bg min-h-screen">
      <div className="flex md:flex-row flex-col gap-4 p-4">
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <div className="flex items-center gap-2 pt-4 pl-4 text-white">
            <p className="text-dark-label-3 text-sm">Username: </p>
            <input
              ref={ref}
              defaultValue={username}
              type="text"
              className="bg-dark-layer-1 p-2 rounded text-sm focus:outline-none"
              placeholder="username"
            />
            <button
              className="bg-dark-blue-s p-2 rounded text-sm"
              onClick={handleClick}
            >
              See Profile
            </button>
          </div>
          <div className="min-h-[200px] max-h-[300px]">
            <LeetcodeContestRatingGraph username={username} />
          </div>

          <div className="min-h-[200px] max-h-[300px]">
            <LeetcodeTopRatingHistogram username={username} />
          </div>
        </div>
        <div className="relative flex flex-col gap-2 p-2 w-full">
          <LeetcodeSolvedProblemsStats username={username} />
          <LeetcodeSubmissionsHeatmap username={username} />
          <LeetcodeBadges username={username} />
        </div>
      </div>
    </div>
  );
};
