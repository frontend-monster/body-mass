import { motion } from "framer-motion";
import React from "react";
import { slideAnimation } from "../helpers/motion";
import CustomInput from "./input";

export default function MetricForm({ height, setHeight, weight, setWeight, bmiMetric }) {
  return (
    <div>
      <div className="grid grid-cols-1 place-items-start w-full s:grid-cols-2 gap-3 mb-6">
        <div className="w-full">
          <motion.p
            {...slideAnimation("left")}
            className="body-p !text-sm !text-[14px] !text-electric"
          >
            Height
          </motion.p>
          <CustomInput
            val={height}
            setVal={setHeight}
            metric="cm"
            customClass="w-full"
          />
        </div>

        <div className="w-full">
          <motion.p
            {...slideAnimation("left")}
            className="body-p !text-sm !text-[14px] !text-electric"
          >
            Weight
          </motion.p>
          <CustomInput
            val={weight}
            setVal={setWeight}
            metric="kg"
            customClass="w-full"
          />
        </div>
      </div>
      {Number(height) !== 0 && Number(weight) !== 0 ? (
        <div className="welcome-gradient mt-4 p-6 flex flex-col xs:flex-row gap-4 s:gap-10 justify-between xs:items-center rounded-2xl xs:rounded-[100px_999px_999px_100px]">
          <h1 className="body-p !font-semibold !text-white">
            Your BMI is...
            <span className="block heading l xs:xl !text-white">{bmiMetric}</span>
          </h1>
          <p className="body-p !text-[14px] !text-white">
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between <span className="!font-bold">63.3kgs - 85.2kgs.</span>
          </p>
        </div>
      ) : (
        <div className="welcome-gradient mt-4 p-6 flex flex-col gap-5 rounded-2xl xs:rounded-[100px_999px_999px_100px]">
          <h1 className="heading m !text-white">Welcome!</h1>
          <p className="body-p !text-[14px] !text-white">
            Enter your height and weight and you’ll see your BMI result here.
          </p>
        </div>
      )}
    </div>
  );
}
