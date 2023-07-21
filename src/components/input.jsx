import { motion } from "framer-motion";
import React from "react";
import { slideAnimation } from "../helpers/motion";


export default function CustomInput({ val, setVal, metric, customClass }) {
  function change(e) {
    let value = e.target.value;
    let numberValue = Number(value);
    let met = metric;

    switch (metric) {
      case "cm":
      case "kg":
        if (!isNaN(numberValue)) {
          setVal(numberValue);
        }
        break;
      case "ft":
      case "in":
      case "st":
      case "lbs":
        if (!isNaN(numberValue)) {
          setVal((prev) => {
            return {
              ...prev,
              [met]: numberValue,
            };
          });
        }
        break;
    }
  }

  let shownNumber;
  if (metric == "cm" || metric == "kg") {
    shownNumber = val;
  } else if (metric == "ft") {
    shownNumber = val.ft;
  } else if (metric == "in") {
    shownNumber = val.in;
  } else if (metric == "st") {
    shownNumber = val.st;
  } else if (metric == "lbs") {
    shownNumber = val.lbs;
  }

  return (
    <motion.div
      className="relative flex items-center w-full"
      {...slideAnimation('left')}
    >
      <input
        className={`input-numbers ${customClass}`}
        type="text"
        placeholder="0"
        value={metric == "cm" || metric == "kg" ? val : val[metric]}
        onChange={(e) => change(e)}
      />
      <div className="absolute right-2 pt-[0.5px] font-semibold text-base !text-newBlue">
        {metric}
      </div>
    </motion.div>
  );
}
