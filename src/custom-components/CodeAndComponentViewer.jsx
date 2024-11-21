import CodeDisplay from "./CodeDisplay";

function CodeAndComponentViewer({ component, codeString, usageCodeString }) {
  return (
    <div className="flex flex-col max-w-full h-full rounded-xl text-card-foreground border border-border">
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Component Viewer */}
        <div className="bg-[#f5f2f0] h-[300px] w-full md:w-1/2 flex items-center justify-center rounded-tl-xl p-3 border-b md:border-b-0 md:border-r border-border">
          {component}
        </div>

        {/* Usage Code Display */}
        <div className="h-[300px] w-full md:w-1/2 bg-background text-foreground p-3 flex items-center justify-center rounded-tr-none md:rounded-tr-xl overflow-auto">
          <CodeDisplay codeString={codeString} />
        </div>
      </div>

      {/* Code Display */}
      <div className="h-[300px] w-full bg-background text-popover-foreground p-3 rounded-b-xl border-t border-border overflow-auto">
        <CodeDisplay codeString={usageCodeString} />
      </div>
    </div>
  );
}

export default CodeAndComponentViewer;