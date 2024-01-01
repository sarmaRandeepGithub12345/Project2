import { useEffect, useRef, useState } from "react";
import styles from "./tabPanelComp.module.css"
export function TabPanelComp({options,num}) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      //console.log(currentTab?.offsetLeft, currentTab?.clientWidth);
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div className="flex flex-col w-[100%] items-center">
      <div className="relative w-[90%]">
        <div className="flex justify-around space-x-3 ">
          {options.map((item, idx) => {
            return (
              <button
                key={idx}
                ref={(el) => (tabsRef.current[idx] = el)}
                className={`pb-3 flex flex-row items-center font-semibold text-[13px] 500:text-[18px] 700:text-[20px] 950:text-[25px] ${idx===activeTabIndex?"text-[black]":"text-[grey]"}`}
                onClick={() => setActiveTabIndex(idx)}>
                <img src={idx===activeTabIndex?item.iconBlue:item.iconLight} alt="" className={`w-[18px] 500:w-[23px] 700:w-[20px] 900:w-[25px] mr-[4px] 500:mr-[7px] 900:mr-[10px] `} />
                <p className={num===1?"":""}>
                {item.text}
                </p>
                
              </button>
            );
          })}
        </div>
        <span
          className="absolute  bottom-0 block h-1 bg-[#0261FE] transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      
      {options[activeTabIndex].childComp}
   
    </div>
  );
}