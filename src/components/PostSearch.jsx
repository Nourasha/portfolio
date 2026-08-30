"use client";

import { useState } from "react";
import FilterSearch from "./FilterSearch";

export default function PostSearch({ posts }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="mb-10">
        <input
          type="search"
          data-testid="search"
          id="search"
          name="search"
          placeholder="Search posts..."
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xs bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5
            text-sm text-gray-700 placeholder-gray-400
            focus:border-gray-400 transition-colors duration-150"
        />
      </div>

      <FilterSearch event={posts} search={search} />
    </>
  );
}
