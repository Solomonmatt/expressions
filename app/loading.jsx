"use client";

import { FallingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center gap-3">
      <div className="flex flex-row items-baseline">
        <FallingLines color="#222" width="80" visible={true} />
      </div>
    </div>
  );
}
