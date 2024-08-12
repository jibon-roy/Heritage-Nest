import PropertiesTab from "../../components/design/tabs/propertiesTab.jsx";
import { useState } from "react";
import Section from "../../components/design/Section";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import NewProjectTab from "../../components/design/tabs/NewProjectTab.jsx";

export default function SearchDetails() {
  const [activeTab, setActiveTab] = useState("properties");
  const location = useLocation();
  const getSearch = queryString.parseUrl(location.search);

  console.log(getSearch);
  const renderContent = () => {
    switch (activeTab) {
      case "properties":
        return (
          <div>
            <PropertiesTab />
          </div>
        );
      case "new-project":
        return (
          <div>
            <NewProjectTab />
          </div>
        );
      case "pre-launch":
        return <div>Content for Pre Launch Offer</div>;
      default:
        return <div>Select a tab</div>;
    }
  };
  return (
    <>
      <Section>
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
      </Section>
    </>
  );
}
