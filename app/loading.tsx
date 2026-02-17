import React from "react";
import { LoaderCircle } from "lucide-react";

const loading = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div>
        <LoaderCircle className="animate-spin w-16 h-16 text-black-800" />
      </div>
      <div>loading...</div>
    </div>
  );
};

export default loading;
