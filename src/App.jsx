import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MetricForm from "./components/MetricForm";
import ImperialForm from "./components/ImperialForm";
import { iconAge, iconEating, iconExercise, iconGender, iconMuscle, iconPregnant, iconRace, iconSleep, imageMan, logo } from "./assets";
import { slideAnimation } from "./helpers/motion";

function App() {
  /*** 
    FORM STATE STUFFFF
  ***/
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightImp, setHeightImp] = useState({
    ft: "",
    in: "",
  });
  const [weightImp, setWeightImp] = useState({
    st: "",
    lbs: "",
  });
  const [radio, setRadio] = useState("metric");
  let bmiImperial = Number(
    ((weightImp.st * 14 + weightImp.lbs) /
      (heightImp.ft * 12 + heightImp.in) ** 2) *
      703
  );
  bmiImperial = bmiImperial.toFixed(1);
  let bmiMetric = Number(weight / (height / 100) ** 2);
  bmiMetric = bmiMetric.toFixed(1);

  // METRIC
  const heightInMeters = Number(height) / 100;
  const minWeight = (18.5 * heightInMeters ** 2).toFixed(1);
  const maxWeight = (24.9 * heightInMeters ** 2).toFixed(1);

  // IMPERIAL
  const heightInInches = Number(heightImp.ft) * 12 + Number(heightImp.in);

  const minWeightPounds = ((18.5 * heightInInches ** 2) / 703).toFixed(1);
  const maxWeightPounds = ((24.9 * heightInInches ** 2) / 703).toFixed(1);

  const minWeightStone = Math.floor(Number(minWeightPounds) / 14);
  const minWeightLbs = (Number(minWeightPounds) % 14).toFixed(1);

  const maxWeightStone = Math.floor(Number(maxWeightPounds) / 14);
  const maxWeightLbs = (Number(maxWeightPounds) % 14).toFixed(1);


  const iconList = [
    {
      img: iconEating,
      heading: "Health Eating",
      body: "Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.",
    },
    {
      img: iconExercise,
      heading: "Regular exercise",
      body: "Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.",
    },
    {
      img: iconSleep,
      heading: "Adequate sleep",
      body: "Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.",
    },
  ];


  return (
    <main>
      {/* HERO */}
      <div className="lg:ml-2 flex flex-col lg:flex-row lg:items-center justify-center">
        <div className="welcome-gradient-2 max-w-5xl rounded-[0px_0px_35px_35px] min-h-[640px] lg:pb-0 lg:min-h-[737px] flex flex-col items-center text-center lg:items-start lg:text-start s:px-16 justify-center relative">
          <a
            className="inline-block w-16 h-16 absolute top-5 lg:top-10"
            href="/"
          >
            <img
              src={logo}
              alt="Body Mass Logo"
              className="object-contain"
            />
          </a>
          <div className="flex flex-col gap-8">
            <h1 className="heading l lg:xl">
              Body Mass <br /> Index Calculator
            </h1>
            <p className="body-p !text-electric px-5 s:px-0 lg:w-[65%]">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-white shadow-[16px_32px_56px_rgba(146,174,207,0.25)] p-8 xs:p-10 rounded-xl s:rounded-3xl relative top-[-130px] s:top-[-150px] lg:top-0 lg:left-[-150px] xl:left-[-200px] basis-2/3 transition-all duration-200 mx-5 lg:mx-0">
          <h1 className="heading m mb-5">Enter your details below</h1>
          <AnimatePresence>
            <div className="grid grid-cols-2 w-full mb-3">
              <div className="flex gap-2 items-center">
                <input
                  className="w-6 h-6 transition-all duration-200 cursor-pointer"
                  type="radio"
                  name=""
                  id="metric"
                  value="metric"
                  checked={radio === "metric"}
                  onChange={(e) => {
                    setRadio(e.target.value);
                    setHeight("");
                    setWeight("");
                  }}
                />
                <label
                  className="body-p !font-semibold !text-gunmetal cursor-pointer"
                  htmlFor="metric"
                >
                  Metric
                </label>
              </div>
              <div className="flex gap-2 items-center justify-self-end s:justify-self-auto">
                <input
                  className="w-6 h-6 transition-all duration-200 cursor-pointer"
                  type="radio"
                  name="imperial"
                  value="imperial"
                  id="imperial"
                  checked={radio === "imperial"}
                  onChange={(e) => {
                    setRadio(e.target.value);
                    setHeightImp({
                      ft: "",
                      in: "",
                    });
                    setWeightImp({
                      st: "",
                      lbs: "",
                    });
                  }}
                />
                <label
                  className="body-p !font-semibold !text-gunmetal cursor-pointer"
                  htmlFor="imperial"
                >
                  Imperial
                </label>
              </div>
            </div>
            {radio === "metric" ? (
              <MetricForm
                height={height}
                setHeight={setHeight}
                weight={weight}
                setWeight={setWeight}
                bmiMetric={bmiMetric}
                minWeight={minWeight}
                maxWeight={maxWeight}
              />
            ) : (
              <ImperialForm
                heightImp={heightImp}
                setHeightImp={setHeightImp}
                weightImp={setWeightImp}
                setWeightImp={setWeightImp}
                bmiImperial={bmiImperial}
                minWeightStone={minWeightStone}
                minWeightLbs={minWeightLbs}
                maxWeightStone={maxWeightStone}
                maxWeightLbs={maxWeightLbs}
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* IMAGE MAN */}
      <div className="max-w-6xl mx-auto flex flex-col s:flex-row gap-6 s:gap-20 lg:gap-28 justify-center items-center s:my-6 relative s:left-[-55px] lg:left-0 transition-all duration-200">
        <div className="w-full">
          <img
            src={imageMan}
            alt="Man Photo"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 w-full s:mt-24 px-6 mt-4 s:px-0">
          <h1 className="text-3xl font-semibold text-gunmetal lg:text-5xl">
            What your BMI result means
          </h1>
          <p className="body-p !text-electric">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </div>
      </div>

      {/* LIST */}
      <div className="bg-gradient-to-r from-[#D6E6FE]/10 to-[#D6FCFE]/30 rounded-2xl md:rounded-3xl max-w-[1330px] mx-auto my-20">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-10 md:gap-6 py-16 px-8 md:px-4 justify-center">
          {iconList.map((item, index) => {
            return (
              <motion.div
                className="flex flex-row md:flex-col gap-12 md:gap-6 items-center md:items-start"
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { opacity: 1, x: 0, y: 0 },
                  hidden: { opacity: 0, x: -10, y: 20 },
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.2,
                  duration: 0.8,
                }}
                viewport={{ once: true }}
              >
                <img
                  src={item.img}
                  alt="Eating Icon"
                  className="w-16 h-16 object-contain md:mb-6"
                />

                <div className="flex flex-col gap-6 md:gap-4">
                  <h1 className="heading m">{item.heading}</h1>
                  <p className="body-p !text-electric">{item.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="grid grid-cols-1 xs:grid-cols-4 md:grid-cols-10 gap-4 md:gap-8 px-6">
          <div className="flex flex-col gap-4 text-center md:text-start mb-4 xs:col-start-1 xs:col-end-5 md:mb-0 md:col-end-5">
            <h1 className="heading l">Limitations of BMI</h1>
            <p className="body-p !text-electric">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>

          {/* GENDER */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl grid-shadow p-8 xs:col-start-1 xs:col-end-3 md:col-start-6 md:col-end-9 transition-all duration-0">
            <h1 className="heading s flex gap-2 items-center">
              <span>
                <img
                  src={iconGender}
                  alt="Gender"
                  className="w-8 h-8 object-contain"
                />
              </span>
              Gender
            </h1>
            <p className="body-p !text-electric">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>

          {/* AGE */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl grid-shadow p-8 xs:col-start-3 xs:col-end-5 md:col-start-4 md:col-end-7">
            <h1 className="heading s flex gap-2 items-center">
              <span>
                <img
                  src={iconAge}
                  alt="Gender"
                  className="w-8 h-8 object-contain"
                />
              </span>
              Age
            </h1>
            <p className="body-p !text-electric">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>

          {/* MUSCLE */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl grid-shadow p-8 xs:col-start-1 xs:col-end-3 md:col-start-7 md:col-end-10">
            <h1 className="heading s flex gap-2 items-center">
              <span>
                <img
                  src={iconMuscle}
                  alt="Gender"
                  className="w-8 h-8 object-contain"
                />
              </span>
              Muscle
            </h1>
            <p className="body-p !text-electric">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>

          {/* PREGNANCY */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl grid-shadow p-8 xs:col-start-3 xs:col-end-5 md:col-start-2 md:col-end-5">
            <h1 className="heading s flex gap-2 items-center">
              <span>
                <img
                  src={iconPregnant}
                  alt="Gender"
                  className="w-8 h-8 object-contain"
                />
              </span>
              Pregnancy
            </h1>
            <p className="body-p !text-electric">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>

          {/* RACE */}
          <div className="flex flex-col gap-4 bg-white rounded-2xl grid-shadow p-8 xs:col-start-2 xs:col-end-4 mx-auto md:col-start-5 md:col-end-8 w-full">
            <h1 className="heading s flex gap-2 items-center">
              <span>
                <img
                  src={iconRace}
                  alt="Gender"
                  className="w-8 h-8 object-contain"
                />
              </span>
              Race
            </h1>
            <p className="body-p !text-electric">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
