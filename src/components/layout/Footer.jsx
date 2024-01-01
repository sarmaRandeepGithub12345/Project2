
import React, { Fragment } from 'react';
import HelpertLogoWhite from "../../pictures/logos/HelpertLogoWhite.svg"
const Footer = () => {
    return (
        <Fragment>
            <div className="justify-between items-start self-stretch bg-blue-600 flex w-full gap-5 px-24 py-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
                <div className="items-start flex gap-5 self-start">
                    <img
                        loading="lazy"
                        src={HelpertLogoWhite}
                    />
                </div>
                <div className="items-start flex flex-col self-start">
                    <div className="text-white text-2xl font-semibold leading-6 self-stretch whitespace-nowrap">
                        Main
                    </div>
                    <div className="items-start self-stretch flex grow flex-col mt-5">
                        <div className="text-white text-lg leading-6 self-stretch whitespace-nowrap">
                            Featured Experts
                        </div>
                        <div className="text-white text-lg leading-6 self-stretch whitespace-nowrap mt-2.5">
                            Become an Expert
                        </div>
                        <div className="text-white text-lg leading-6 self-stretch whitespace-nowrap mt-2.5">
                            Online Booking
                        </div>
                        <div className="text-white text-lg leading-6 self-stretch whitespace-nowrap mt-2.5">
                            Download App
                        </div>
                    </div>
                </div>
                <div className="items-start flex flex-col self-start">
                    <div className="text-white text-2xl font-semibold leading-6 self-stretch whitespace-nowrap">
                        Info
                    </div>
                    <div className="items-start self-stretch flex grow flex-col mt-5">
                        <div className="text-white text-lg leading-6 self-stretch whitespace-nowrap">
                            About Us
                        </div>
                        <div className="text-white text-lg leading-6 self-stretch whitespace-nowrap mt-2.5">
                            FAQ
                        </div>
                        <div className="text-white text-lg leading-6 self-stretch whitespace-nowrap mt-2.5">
                            Privacy Policy
                        </div>
                        <div className="text-white text-lg leading-6 self-stretch whitespace-nowrap mt-2.5">
                            Terms & Conditions
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-center items-center self-stretch bg-blue-600 flex w-full flex-col px-20 py-5 max-md:max-w-full max-md:px-5">
                <div className="text-white text-base leading-5 self-center whitespace-nowrap">
                    Copyright 2023 © Helpert
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;
