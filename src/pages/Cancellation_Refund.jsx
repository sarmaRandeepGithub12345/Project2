import React from "react";
import NavbarProfile from "../components/profileComp/NavbarProfile";
import Footer from "../components/footers/Footer";

function Cancellation_Refund() {
  return (
    <div className="flex flex-col overflow-y-scroll w-full h-[100vh]">
      <NavbarProfile op={{
          id: 0,
          name: "Category",
        }}/>
      <div className="block py-[30px] leading-[1.6] font-[300]">
        <div className="flex flex-wrap flex-row w-full max-w-[1080px] mx-auto ">
          <div className="px-[15px] pb-[30px] relative w-full 800:basis-full 800:max-w-full">
            <div
              className="bg-no-repeat bg-cover relative w-full 800:mr-0 800:ml-auto text-[#777]"
              style={{ backgroundPositionX: "50%", backgroundPositionY: "50%" }}
            >
              <h2 className="text-[1.6em] text-[#555] mb-[0.7em] w-full leading-7">
                Cancellation & Refund Policy
              </h2>
              <p className="mb-[1.3em] text-[#777]">
                At Helpert, we aim to ensure fairness and transparency in our
                cancellation and refund process. This policy outlines the
                conditions for cancellations and refunds regarding appointments
                scheduled through our platform.
              </p>
              <h4 className="text-[1.125em] text-[#555] mb-[0.7em]">
                Cancellation Policy
              </h4>
              <ol className="box-border mb-[1.3em] list-decimal ">
                <li className="ml-[1.3em] mb-[0.6em] list-item">
                  <strong>Expert-initiated Cancellations:</strong>
                  <ul className="my-[1.5em] mr-0 ml-[3em] box-border list-disc block">
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      In unforeseen circumstances or emergencies requiring an
                      expert to cancel a scheduled appointment, the user will be
                      promptly notified.
                    </li>
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      If an expert cancels before 6 hours of the appointment
                      time or fails to accept the appointment before its
                      scheduled time, the user will receive a full refund.
                    </li>
                  </ul>
                </li>
                <li className="ml-[1.3em] mb-[0.6em] list-item">
                  <strong>User-initiated Cancellations:</strong>
                  <ul className="my-[1.5em] mr-0 ml-[3em] box-border list-disc block">
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      Users can cancel appointments based on the agreed-upon
                      cancellation policy.
                    </li>
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      Cancellations made before 6 hours of the appointment time
                      will be eligible for a full refund.
                    </li>
                  </ul>
                </li>
              </ol>
              <h4 className="text-[1.125em] text-[#555] mb-[0.7em]">
                Refund Policy
              </h4>
              <ol className="box-border mb-[1.3em] list-decimal ">
                <li className="ml-[1.3em] mb-[0.6em] list-item">
                  <strong>Refund Eligibility:</strong>
                  <ul className="my-[1.5em] mr-0 ml-[3em] box-border list-disc block">
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      Refund eligibility is determined based on the cancellation
                      policy set at the time of booking.
                    </li>
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      Users may receive a full refund if the expert cancels
                      before 6 hours of the appointment or fails to accept the
                      appointment before the scheduled time.
                    </li>
                  </ul>
                </li>
                <li className="ml-[1.3em] mb-[0.6em] list-item">
                  <strong>Processing Refunds:</strong>
                  <ul className="my-[1.5em] mr-0 ml-[3em] box-border list-disc block">
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      Refunds, if applicable, will be processed through the
                      original payment method within a reasonable timeframe
                      after the cancellation or as mutually agreed upon.
                    </li>
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      Transaction charges incurred during the refund process may
                      be applicable and deducted from the refund amount.
                    </li>
                  </ul>
                </li>
                <li className="ml-[1.3em] mb-[0.6em] list-item">
                  <strong>Non-Refundable Scenarios:</strong>
                  <ul className="my-[1.5em] mr-0 ml-[3em] box-border list-disc block">
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      No refunds will be issued for user-initiated cancellations
                      made within 6 hours of the appointment time or if the
                      service has already been provided as scheduled.
                    </li>
                  </ul>
                </li>
              </ol>
              <h4 className="text-[1.125em] text-[#555] mb-[0.7em]">
                Dispute Resolution and Contact Information
              </h4>
              <ol className="box-border mb-[1.3em] list-decimal ">
                <li className="ml-[1.3em] mb-[0.6em] list-item">
                  <strong>Dispute Resolution:</strong>
                  <ul className="my-[1.5em] mr-0 ml-[3em] box-border list-disc block">
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      Any disputes related to cancellations or refunds will be
                      mediated by Helpert to achieve a fair resolution for both
                      parties.
                    </li>
                  </ul>
                </li>
                <li className="ml-[1.3em] mb-[0.6em] list-item">
                  <strong>Contact Email for Refunds:</strong>
                  <ul className="my-[1.5em] mr-0 ml-[3em] box-border list-disc block">
                    <li className="ml-[1.3em] mb-[0.6em] ">
                      For inquiries or concerns regarding cancellations or
                      refunds, please contact us at refund@helperts.com. Our
                      support team will assist you promptly.
                    </li>
                  </ul>
                </li>
              </ol>
              <h4 className="text-[1.125em] text-[#555] mb-[0.7em]">
                Policy Modifications
              </h4>
              <p className="mb-[1.3em] text-[#777]">
                Helpert reserves the right to modify the cancellation and refund
                policy. Users and experts will be informed of any changes
                through appropriate communication channels.
              </p>
              <h3 className="text-[1.25em] text-[#555] mb-[0.5em] w-full mt-0 ">
                Conclusion
              </h3>
              <p className="mb-[1.3em] ">
                Our cancellation and refund policy aims to maintain fairness and
                clarity for both users and experts using our platform’s
                services.
              </p>
              <p className="mb-[1.3em]">
                <em className="italic">
                  Note: This policy is subject to periodic review and may
                  undergo updates. Please refer to the most recent version
                  available on our platform for any changes.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cancellation_Refund;
