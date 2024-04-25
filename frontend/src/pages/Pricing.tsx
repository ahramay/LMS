import React, { useState } from "react";
import SubscriptionPlan from "../components/SubscriptionPlan";
import PricingPlanButton from "../components/PricingPlanButton";
import SideBarPricing from "../components/pricingExtraFeatures/SideBarPricing";
import FeatureCardPricing from "../components/pricingExtraFeatures/FeatureCardPricing";
import According from "../components/According"
import ClientFeedback from "../components/ClientFeedback";
interface PlanData {
  planCategory: string;
  planTagLine: string;
  monthSubCost: number;
  listofItemsIncludes: string[];
  buttonName: string;
}

const Pricing: React.FC = () => {
  const [billingType, setBillingType] = useState<"monthly" | "yearly">(
    "monthly"
  );

  //dummy data
  const subscriptionPlans: Record<string, PlanData> = {
    personal: {
      planCategory: "Personal",
      planTagLine: "Lorem, ipsum dolor.",
      monthSubCost: 10,
      listofItemsIncludes: ["Feature 1", "Feature 2"],
      buttonName: "Start Now",
    },
    team: {
      planCategory: "Team",
      planTagLine: "Lorem, ipsum dolor.",
      monthSubCost: 20,
      listofItemsIncludes: ["Feature 1", "Feature 2", "Feature 3"],
      buttonName: "Start Now",
    },
    enterprise: {
      planCategory: "Enterprise",
      planTagLine: "Lorem, ipsum dolor.",
      monthSubCost: 30,
      listofItemsIncludes: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      buttonName: "Start Now",
    },
  };

  return (
    <div className="bg-gray-50">
      <main>
        <div>
          <div className="bg-dark-blue pb-10 lg:pb-20">
            <div className="relative mx-auto max-w-2xl px-6 pt-16 text-center sm:pt-32 lg:max-w-7xl lg:px-8">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                <span className="block lg:inline">
                  Our pricing is straightforward{" "}
                </span>
                <span className="block lg:inline">and commitment-free.</span>
              </h1>
              <p className="mt-4 text-xl text-indigo-100">
                Please choose a plan that best fits your business requirements.
              </p>
            </div>
            <h2 className="sr-only">Pricing Plans</h2>

            <div className="relative  flex justify-center mt-16 mb-20">
              <div className="flex rounded-lg bg-theme-green p-0.5">
                <PricingPlanButton
                  setBillingType={setBillingType}
                  billingType={billingType}
                />
              </div>
            </div>
            <div className="relative mx-auto mt-8 max-w-2xl px-6 pb-8 sm:mt-12 lg:max-w-7xl lg:px-8 lg:pb-0">
              <div
                aria-hidden="true"
                className="absolute inset-0 top-4 bottom-6 left-8 right-8 hidden rounded-tl-lg rounded-tr-lg lg:block"
              ></div>

              <div className="relative space-y-6 lg:grid lg:grid-cols-3 lg:space-y-0">
                {Object.entries(subscriptionPlans).map(
                  ([planKey, planData]) => (
                    <SubscriptionPlan
                      key={planKey}
                      planData={planData}
                      billingType={billingType}
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <section className="text-gray-700 body-font overflow-hidden border-t border-gray-200 hidden lg:block">
          <div className="container px-5 pt-24 mx-auto flex flex-wrap">
            <div className="lg:w-1/4 mt-48 hidden lg:block">
              <div className="mt-px border-t border-gray-300 border-b border-l rounded-tl-lg rounded-bl-lg overflow-hidden">
                <SideBarPricing />
              </div>
            </div>
            <div className="flex lg:w-3/4 w-full flex-wrap lg:border border-gray-300 rounded-lg">
              <FeatureCardPricing
                title="START"
                price="Free"
                period="Next 3 months"
                features={[
                  "Schlitz single-origin",
                  "Feature",
                  "Schlitz single-origin",
                  "Feature",
                ]}
                buttonText="Buy Now"
              />
              <FeatureCardPricing
                title="START"
                price="Free"
                period="Next 3 months"
                features={[
                  "Schlitz single-origin",
                  "Feature",
                  "Schlitz single-origin",
                  "Feature",
                ]}
                buttonText="Buy Now"
              />
              <FeatureCardPricing
                title="START"
                price="Free"
                period="Next 3 months"
                features={[
                  "Schlitz single-origin",
                  "Feature",
                  "Schlitz single-origin",
                  "Feature",
                ]}
                buttonText="Buy Now"
              />
            </div>
          </div>
        </section>
        <section className='container pt-20 mx-auto px-10 md:px-24'>
        <div className="flex bg-theme-green divide-x py-5 rounded-3xl flex-col sm:flex-row">
          <div className="  sm:w-1/2 py-16 text-center">
            <h3 className='text-3xl pb-4'>Get started today. <br />
            Try HSMA for free.</h3>
            <button className='rounded-full text-lg bg-dark-blue text-white  px-8 py-2 '>Try free</button>
            <p className='pt-4 text-xl'>14-day free trial. No credit card required.</p>
          </div>

          <div className=" sm:w-1/2 py-16 text-center">
            <h3 className='text-3xl pb-4'>Lorem, ipsum. <br />
            Lorem ipsum dolor sit.</h3>
          
            <p className='pt-4 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
    </section>
        <section>
          <div className="mx-auto max-w-2xl py-16 px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="max-w-2xl lg:mx-auto lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                repudiandae laudantium porro impedit quisquam vel consequuntur
                tempore reprehenderit corporis voluptate.
              </p>
            </div>
            <div className="mt-10">
            <According
          items={[
            {
              question: "What is Lorem Ipsum? 1",
              answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              key: 1,
            },
            {
              question: "What is Lorem Ipsum? 2",
              answer:
                "Lorem Ipsum is simply dummy text of the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500sprinting and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              key: 2,
            },
            {
              question: "What is Lorem Ipsum? 3",
              answer:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
              key: 3,
            },
          ]}
        />
            </div>
          </div>
        </section>

        <section className='container pb-20 mx-auto px-10 md:px-24'>
          <ClientFeedback  homePage={false}/>
        </section>

        <section className='container pb-20 mx-auto px-10 md:px-24'>
          <div className=" bg-theme-green divide-x py-5 rounded-3xl">
            <div className="py-16 text-center">
            <h3 className='text-3xl pb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, dignissimos.</h3>
              <button className='rounded-full text-2xl bg-dark-blue text-white  px-10 py-2  hover:bg-light-gray hover:text-black transition-all capitalize '>Start Now</button>
              <p className='pt-8 text-xl'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Pricing;
