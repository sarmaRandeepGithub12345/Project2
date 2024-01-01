import React from "react";

function PolicyFooter() {
  return (
    <div className="relative w-full block box-border ">
      <div className="bg-[#efefef] text-black text-opacity-[50%] text-[0.93m] pt-[10px] pb-[15px] px-0 text-center">
        <div className="mx-auto px-[15px] w-full">
          <div className="float-none">
            <div>
              <ul className="pt-1 opacity-80 pb-1 text-[0.85em] my-[5px] leading-[1.2] uppercase tracking-wider">
                <li className="inline-block mx-[0.4em] ml-0 ">
                  <a href="https://helperts.com/blog/">Blog</a>
                </li>
                <li className="inline-block mx-[0.4em] ">
                  <a href="https://helperts.com/privacy-policy/">
                    Privacy Policy
                  </a>
                </li>
                <li className="inline-block mx-[0.4em] ">
                  <a href="https://helperts.com/terms-of-service/">
                    Terms of Service
                  </a>
                </li>
                <li className="inline-block mx-[0.4em] ">
                  <a href="https://helperts.com/cancellation-and-refund-policy/">
                    CANCELLATION & REFUND POLICY
                  </a>
                </li>
                <li className="inline-block mx-[0.4em] ">
                  <a href="https://helperts.com/helperts-community-guidelines/">
                    HELPERT’S COMMUNITY GUIDELINES
                  </a>
                </li>
              </ul>
            </div>
            <div>
              Copyright 2023 ©
              <strong>Helpert Technologies Private Limited</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyFooter;
