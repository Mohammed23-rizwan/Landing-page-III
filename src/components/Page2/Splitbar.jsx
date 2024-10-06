import React from "react";
import Tabledata from "./Tabledata";
import FormData from "./FormDatas";

const Splitbar = () => {
  return (
    <div className="mt-4 w-full flex max-h-full flex-col lg:flex-row">
      <Tabledata />
      <FormData />
    </div>
  );
};

export default Splitbar;
