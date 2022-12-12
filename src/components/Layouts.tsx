import { ReactNode, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Layouts = ({ children }: { children: ReactNode }) => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    if (window.screen.width < 600) {
      setShowSidebar(false);
    }
  }, []);
  return (
    <div className="flex max-w-[100vw]">
      <Sidebar showSidebar={showSidebar} />
      <div className="w-full">
        <Navbar setShowSidebar={setShowSidebar} />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layouts;
