import React from "react";
import Tabledata from "./Tabledata";
import FormData from "./FormDatas";

const Splitbar = () => {
  return (
    <div className="mt-4 flex min-h-full">
      <Tabledata />
      <FormData />
    </div>
  );
};

export default Splitbar;
