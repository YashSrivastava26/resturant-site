import { FC } from "react";
import SubHeading from "./SubHeading";

interface NewsletterProps {}

const Newsletter: FC<NewsletterProps> = ({}) => {
  return (
    <div className="app-padding border border-golden bg-dark z-10">
      <div className="text-center">
        <SubHeading title="Newsletter" center />
        <h1 className="heading-cormorant">Subscribe To Our Newsletter</h1>
        <p className="p-opensans">And never miss latest Updates!</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-8">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-64 lg:w-96 border border-golden rounded-md text-base font-base text-white mb-4 lg:mb-0 lg:mr-8 py-2 px-4 bg-dark"
        />
        <button type="button" className="button max-w-[max-content]">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
