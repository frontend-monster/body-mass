import React from 'react'
import CustomInput from './input';
import { motion } from 'framer-motion';
import { slideAnimation } from '../helpers/motion';


export default function ImperialForm({ heightImp, setHeightImp, weightImp, setWeightImp, bmiImperial}) {
  return (
    <div>
      <div className="flex flex-col w-full">
        <motion.p
          className="body-p !text-sm !text-[14px] !text-electric"
          {...slideAnimation("left")}
        >
          Height
        </motion.p>
        <div className="grid grid-cols-2 gap-3 w-full place-items-start">
          <CustomInput
            val={heightImp}
            setVal={setHeightImp}
            metric="ft"
            customClass="w-full"
          />
          <CustomInput
            val={heightImp}
            setVal={setHeightImp}
            metric="in"
            customClass="w-full"
          />
        </div>

        <motion.p
          className="body-p !text-sm !text-[14px] !text-electric mt-3"
          {...slideAnimation("left")}
        >
          Weight
        </motion.p>
        <div className="grid grid-cols-2 gap-3 w-full place-items-start">
          <CustomInput
            val={weightImp}
            setVal={setWeightImp}
            metric="st"
            customClass="w-full"
          />
          <CustomInput
            val={weightImp}
            setVal={setWeightImp}
            metric="lbs"
            customClass="w-full"
          />
        </div>
      </div>
      {Number(weightImp.st) !== 0 &&
      Number(weightImp.lbs) !== 0 &&
      Number(heightImp.ft) !== 0 &&
      Number(heightImp.in) !== 0 ? (
        <div className="welcome-gradient p-6 flex-col xs:flex-row flex gap-4 xs:gap-10 justify-between xs:items-center mt-4 rounded-2xl xs:rounded-[100px_999px_999px_100px]">
          <h1 className="body-p !font-semibol !text-white">
            Your BMI is...
            <span className="block heading xs:xl l !text-white">{bmiImperial}</span>
          </h1>
          <p className="body-p !text-[14px] !text-white">
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between <span className="!font-bold">9st 6lbs - 12st 10lbs</span>.
          </p>
        </div>
      ) : (
        <div className="welcome-gradient p-6 flex flex-col gap-5 mt-4 rounded-2xl xs:rounded-[100px_999px_999px_100px]">
          <h1 className="heading m !text-white">Welcome!</h1>
          <p className="body-p !text-[14px] !text-white">
            Enter your height and weight and you’ll see your BMI result here.
          </p>
        </div>
      )}
    </div>
  );
}
