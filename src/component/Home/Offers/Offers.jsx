import { useContext, useState } from "react";
import "./Offers.css"
import Landing from "../Landing/Landing";
import { ThemeContext } from "../ThemeDark/ThemeDark";
const Pricing = () => {
  const {isDarkMode}=useContext(ThemeContext)

let a=[10,"$"]
let b=[20,"$"]
let c=[30 ,"$"]
const [date,useDate]=useState("month")
const [click,useClick]=useState(1)
const handel = () => {
    if (click === 1) {
        useClick(click + 11);
        useDate("year")
    } else {
        useClick(1);
        useDate("month")
  };}
  return (
    <>
    <Landing/>
    <section className={`relative z-10 overflow-hidden  pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[50px]`}>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
            <div className="flex flex-row justify-center my-4 text-sm tracking-tight font-medium text-gray-700">
    <p className={`${isDarkMode ? "color" : "text-dark"} mx-3`}>Pay Monthly</p>
    <label htmlFor="toggle" className="flex items-center cursor-pointer">
      <div className="relative">
        <input id="toggle" type="checkbox" className="hidden" onClick={handel}/>
        <div className="w-10 h-3 bg-gray-400 rounded-full shadow-inner"></div>
        <div className="toggle_dot absolute -top-[5px] w-5 h-5 bg-white rounded-full top- shadow inset-y-0 left-0"></div>
      </div>
    </label>
    <p className={`${isDarkMode ? "color" : "text-dark"} mx-3`}>Pay Yearly</p>
  </div>

              <span className={`${isDarkMode ? "color" : "text-dark"} mb-2 block text-lg font-semibold text-primary`}>
                Pricing Table
              </span>
              <h2 className={`${isDarkMode ? "color" : "text-dark"} mb-3 text-3xl font-bold leading-[1.208]  dark:text-white sm:text-4xl md:text-[40px]`}>
                Our Pricing Plan
              </h2>
              <p className={`${isDarkMode ? "color" : "text-dark"} text-base text-body-color dark:text-dark-6`}>
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              type="Personal"
              price={a[0] * click + a[1]}
              subscription={date}
              description="Teaching computer basics Photography and editing"
              buttonText="Choose Personal"
            >
                
                <List>Get updates</List>
              <List>Get a certificate after completing each course</List>
              <List>New courses every month</List>
              <List>Free updates</List>
              <List>presence</List>
            </PricingCard>
            <PricingCard
              type="Business"
              price={b[0] * click + a[1]}
              subscription={date}
              description="Teaching computer basics Programming and development of websites and applicationsRobotics"
              buttonText="Choose Business"
              active
            >
              <List>Get updates</List>
              <List>Get a certificate after completing each course</List>
              <List>New courses every month</List>
              <List>Free updates</List>
              <List>presence Or online</List>
            </PricingCard>
            <PricingCard
              type="Professional"
              price={c[0] * click + a[1]}
              subscription={date}
              description="
All course categories in the Creative Package, Genius Package, and Business Package, in addition to:
psychology
Education and upbringing of children
All new classifications"
              buttonText="Choose Professional"
            >
              <List>Get updates</List>
              <List>Get a certificate after completing each course</List>
              <List>New courses every month</List>
              <List>Free updates</List>
              <List>presence and online</List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
export default Pricing;

const PricingCard = ({
  
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
}) => {
  const {isDarkMode}=useContext(ThemeContext)
  return (
    <>
      <div className={`w-full px-4 md:w-1/2 lg:w-1/3`}>
        <div className={`${isDarkMode ? "darkT" : ""} relative shadow-custom  z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke  px-8 py-10 shadow-pricing dark:border-dark-3 dark:bg-dark-2 sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]`}>
          <span className="mb-3 block text-lg font-semibold text-primary">
            {type}
          </span>
          <h2 className={`${isDarkMode ? "color" : "text-dark"} mb-5 text-[42px] font-bold  dark:text-white`}>
            {price}
            <span className={`${isDarkMode ? "color" : "text-dark"} text-base font-medium text-body-color dark:text-dark-6`}>
              / {subscription}
            </span>
          </h2>
          <p className={`${isDarkMode ? "color" : "text-dark"} mb-8 border-b border-stroke pb-8 text-base text-body-color dark:border-dark-3 dark:text-dark-6`}>
            {description}
          </p>
          <div className={`${isDarkMode ? "color" : "text-dark"} mb-9 flex flex-col gap-[14px]`}>{children}</div>
          <a
            href="/#"
            className={` ${
            active
                ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
                : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3"
            } no-underline ${isDarkMode ? "color" : "text-dark"}`}
          >
            {buttonText}
          </a>
          <div>
            <span className="absolute right-0 top-7 z-[-1]">
              <svg
                width={77}
                height={172}
                viewBox="0 0 77 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={86} cy={86} r={86} fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1={86}
                    y1={0}
                    x2={86}
                    y2={172}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#3056D3" stopOpacity="0.09" />
                    <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <span className="absolute right-4 top-4 z-[-1]">
              <svg
                width={41}
                height={89}
                viewBox="0 0 41 89"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.9138"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 38.9138 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 38.9138 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 38.9138 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 38.9138 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 38.9138 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 38.9138 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 38.9138 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="38.9138"
                  cy="1.42021"
                  r="1.42021"
                  transform="rotate(180 38.9138 1.42021)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 26.4157 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 26.4157 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 26.4157 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 26.4157 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 26.4157 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 26.4157 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 26.4157 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="26.4157"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 26.4157 1.4202)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 13.9177 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 13.9177 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 13.9177 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 13.9177 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 13.9177 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 13.9177 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 13.9177 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="13.9177"
                  cy="1.42019"
                  r="1.42021"
                  transform="rotate(180 13.9177 1.42019)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="87.4849"
                  r="1.42021"
                  transform="rotate(180 1.41963 87.4849)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="74.9871"
                  r="1.42021"
                  transform="rotate(180 1.41963 74.9871)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="62.4892"
                  r="1.42021"
                  transform="rotate(180 1.41963 62.4892)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="38.3457"
                  r="1.42021"
                  transform="rotate(180 1.41963 38.3457)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="13.634"
                  r="1.42021"
                  transform="rotate(180 1.41963 13.634)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="50.2754"
                  r="1.42021"
                  transform="rotate(180 1.41963 50.2754)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="26.1319"
                  r="1.42021"
                  transform="rotate(180 1.41963 26.1319)"
                  fill="#3056D3"
                />
                <circle
                  cx="1.41963"
                  cy="1.4202"
                  r="1.42021"
                  transform="rotate(180 1.41963 1.4202)"
                  fill="#3056D3"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const List = ({ children }) => {
  return (
    <p className="text-base text-body-color dark:text-dark-6">{children}</p>
  );
};
