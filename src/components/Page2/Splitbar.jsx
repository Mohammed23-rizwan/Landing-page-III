import React from "react";
import Tabledata from "./Tabledata";
import FormData from "./FormDatas";

const Splitbar = () => {
  return (
    <div className="mt-4 flex h-full">
      <Tabledata />
      <FormData />
    </div>
  );
};

export default Splitbar;
