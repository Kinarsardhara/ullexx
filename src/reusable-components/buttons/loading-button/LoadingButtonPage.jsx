import { loadingButtonCode, loadingButtonUsage } from "./code";
import { useState } from "react";
import LoadingButton from "./LoadingButton";
import { Title } from "@/custom-components/Title";
import { ComponentAndCodeTabs } from "@/custom-components/ComponentAndCodeTabs";

export function LoadingButtonPage() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
      <Title
        componentTitle="Loading Button"
        githubUsername="kinarsardhara"
        githubLink="https://github.com/kinarsardhara"
      />
      <ComponentAndCodeTabs
        component={
          <LoadingButton
            btnText="Submit"
            isLoading={loading}
            onClick={handleClick}
            height="h-14"
            width="w-24"
            borderRadius="rounded-md"
          />
        }
        codeString={loadingButtonCode}
        usageCodeString={loadingButtonUsage}
      />
      {/* <div className="flex-grow h-[90%] w-full mb-5 overflow-hidden"> */}
      {/* <CodeAndComponentViewer
                component={<LoadingButton
                    btnText="Submit"
                    isLoading={loading}
                    onClick={handleClick}
                    height="h-14"
                    width="w-24"
                    borderRadius="rounded-md"
                />}
                codeString={loadingButtonCode}
                usageCodeString={loadingButtonUsage}
            /> */}

      {/* </div>     */}
    </>
  );
}
