import PropertiesTab from "../../components/design/tabs/propertiesTab.jsx";
import { useState } from "react";
import Section from "../../components/design/Section";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import NewProjectTab from "../../components/design/tabs/NewProjectTab.jsx";
import PreLaunchTab from "../../components/design/tabs/PreLaunchTab.jsx";
import TestimonialSection from "../../components/design/Testimonial.jsx";
import useSearchProperties from "../../lib/hooks/useSearchProperties.jsx";
import Loading from "../../components/common/Loading.jsx";

export default function SearchDetails() {
  const [activeTab, setActiveTab] = useState("properties");
  const location = useLocation();
  const getSearch = queryString.parseUrl(location.search);
  const { properties, isLoading } = useSearchProperties(getSearch);

  // console.log(properties);
  const renderContent = () => {
    switch (activeTab) {
      case "properties":
        return (
          <div>
            <PropertiesTab properties={properties || []} />
          </div>
        );
      case "new-project":
        return (
          <div>
            <NewProjectTab properties={properties || []} />
          </div>
        );
      case "pre-launch":
        return (
          <div>
            <PreLaunchTab properties={properties || []} />
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <>
      <Section>
        <Loading className={isLoading ? "block" : "hidden"} />
        <div className="p-6">
          <div className="flex space-x-4 mb-4">
            <button
              className={`py-2 px-4 font-medium rounded ${
                activeTab === "properties"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100"
              } `}
              onClick={() => setActiveTab("properties")}
            >
              Properties
            </button>
            <button
              className={`py-2 px-4 font-medium rounded  ${
                activeTab === "new-project"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100"
              } `}
              onClick={() => setActiveTab("new-project")}
            >
              New Project
            </button>
            <button
              className={`py-2 px-4 font-medium rounded  ${
                activeTab === "pre-launch"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100"
              } `}
              onClick={() => setActiveTab("pre-launch")}
            >
              Pre Launch Offer
            </button>
          </div>
          <hr className="my-4 border-gray-300" />
          <div className="mt-4">{renderContent()}</div>
        </div>
        <div className="flex gap-4 bg-blue-50 mt-10 p-6">
          <div className="max-w-xs">
            <div className="text-2xl font-bold my-3">Need a Home Loan?</div>
            <p>Select how much home loan you can take.</p>
          </div>
          <div className="flex-1 flex items-center">
            <div className="w-full">
              <input
                type="range"
                min={0}
                max="100"
                defaultValue="0"
                className="range range-md [--range-shdw:#0051A1] "
                step="25"
              />
              <div className="flex w-full justify-between px-2 text-sm font-medium">
                <span>20k</span>
                <span>30k</span>
                <span>40k</span>
                <span>50k</span>
                <span>60k</span>
              </div>
            </div>
          </div>
        </div>
        <TestimonialSection />
      </Section>
    </>
  );
}
