import React from "react";
import { GoDotFill } from "react-icons/go";
import { EachDiv, ListBulletPt, commonClass } from "../../utils/commonObjects";
const SpecialBulletPt = ({ arr }) => {
  return (
    <>
      {arr.map((item, id) => (
        <div className="flex flex-row  my-[10px]" key={id}>
          <div className="w-[30px] h-[30px] mt-[5px]">
            <GoDotFill className="text-[15px] mr-[20px]" />
          </div>
          <div>
            <p className="text-[black] font-[300] text-[16px] 768:text-[18px] 1000:text-[20px]">
              {item.heading}
            </p>
            <p className="font-[300] text-[14px] 768:text-[16px] 1000:text-[18px]">
              {item.body}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

function Guidelines() {
  return (
    <div className='className="w-[100%] flex justify-center items-center flex-col text-[grey] p-[15px] 1100:p-[0px] text-[16px]"'>
      <br />
      <p className="text-[24px] 768:text-[28px] 1000:text-[32px] font-[500] text-[#464646]">
        Helpert Community Guidelines
      </p>
      <div className="max-w-[1100px] py-[10px]">
        <EachDiv>
          <p className="font-[300] text-[16px] 768:text-[18px] 1000:text[21px]">
            Welcome to Helpert, an engaging platform connecting experts and
            users worldwide. Our community thrives on mutual respect,
            professionalism, and a commitment to fostering a positive
            environment for knowledge sharing. By using Helpert, you agree to
            adhere to these comprehensive community guidelines.
          </p>
        </EachDiv>
        <EachDiv heading=" 1. Respectful Conduct and Professionalism">
          <SpecialBulletPt
            arr={[
              {
                heading: "Respectful Behavior:",
                body: "Treat all community members—experts and users alike—with respect, empathy, and courtesy.",
              },
              {
                heading: "Professionalism:",
                body: "Maintain a professional demeanor in all interactions and discussions within the community.",
              },
              {
                heading: "Harassment and Discrimination:",
                body: "Do not engage in any form of harassment, discrimination, or bullying behavior.",
              },
            ]}
          ></SpecialBulletPt>
        </EachDiv>
        <EachDiv heading="2. Authenticity and Integrity">
          <SpecialBulletPt
            arr={[
              {
                heading: "Honest Representation:",
                body: "Provide accurate and truthful information about your expertise, qualifications, and experiences.",
              },
              {
                heading: "Transparency:",
                body: "Disclose any conflicts of interest or biases that may impact your advice or interactions.",
              },
              {
                heading: "Confidentiality:",
                body: "Respect the privacy and confidentiality of all discussions and information shared during sessions.",
              },
            ]}
          ></SpecialBulletPt>
        </EachDiv>
        <EachDiv heading="3. Appropriate Content and Communication">
          <SpecialBulletPt
            arr={[
              {
                heading: "Relevance:",
                body: "Share content that is relevant, valuable, and appropriate for the platform’s purpose.",
              },
              {
                heading: "Responsible Sharing:",
                body: "Refrain from posting or sharing inappropriate, offensive, or misleading content.",
              },
              {
                heading: "Civil Communication:",
                body: "Do not promote or engage in discussions that involve violence, hate speech, or discriminatory views.",
              },
            ]}
          ></SpecialBulletPt>
        </EachDiv>
        <EachDiv heading="4. Professional Etiquette and Boundaries">
          <SpecialBulletPt
            arr={[
              {
                heading: "Boundaries:",
                body: "Maintain professional boundaries during interactions, avoiding personal inquiries unless relevant to the discussion",
              },
              {
                heading: "Privacy:",
                body: "Safeguard users’ privacy and refrain from sharing personal information without explicit consent.",
              },
              {
                heading: "Communication Tone:",
                body: "Use respectful language and a considerate tone in all interactions.",
              },
            ]}
          ></SpecialBulletPt>
        </EachDiv>
        <EachDiv heading="5. Payment and Service Transactions">
          <SpecialBulletPt
            arr={[
              {
                heading: "Service Delivery:",
                body: "Fulfill scheduled appointments and commitments as agreed upon with users.",
              },
              {
                heading: "Payment Integrity:",
                body: "Adhere to Helpert’s payment policies and guidelines without engaging in fraudulent or deceptive practices.",
              },
              {
                heading: "Fair Pricing:",
                body: "Set reasonable prices for services offered, ensuring fairness and value for users.",
              },
            ]}
          ></SpecialBulletPt>
        </EachDiv>
        <EachDiv heading="6. Reporting and Moderation">
          <SpecialBulletPt
            arr={[
              {
                heading: "Reporting Violations:",
                body: "Report any violation of these guidelines promptly to Helpert’s moderation team.",
              },
              {
                heading: "Support Moderation Efforts:",
                body: "Assist in maintaining a safe community by promptly reporting inappropriate behavior or content.",
              },
            ]}
          ></SpecialBulletPt>
        </EachDiv>
        <EachDiv heading="7. Compliance with Laws and Regulations">
          <SpecialBulletPt
            arr={[
              {
                heading: "Legal Adherence:",
                body: "Abide by all applicable local, national, and international laws, regulations, and industry standards.",
              },
              {
                heading: "Professionalism:",
                body: "Maintain a professional demeanor in all interactions and discussions within the community.",
              },
            ]}
          ></SpecialBulletPt>
        </EachDiv>
        <EachDiv heading="8. Continuous Improvement and Feedback">
          <SpecialBulletPt
            arr={[
              {
                heading: "Feedback Contribution:",
                body: "Provide constructive feedback to improve Helpert’s platform and user experience.",
              },
              {
                heading: "Engagement:",
                body: "Actively participate in discussions and contribute positively to enhancing the community and its functionalities.",
              },
            ]}
          ></SpecialBulletPt>
        </EachDiv>
        <EachDiv heading={"Enforcement of Guidelines"}>
          <p className={commonClass}>
            Violation of these community guidelines may result in actions
            ranging from warnings, temporary suspension, to account termination,
            based on the severity and recurrence of the offense. Helpert
            reserves the right to moderate content, remove inappropriate posts,
            and take necessary actions to maintain a safe and positive community
            environment.
          </p>
        </EachDiv>
        <EachDiv heading={"Conclusion"}>
          <p className={commonClass}>
            Thank you for being an integral part of Helpert’s vibrant community.
            Your commitment to upholding these guidelines fosters an inclusive,
            supportive, and enriching environment for all users and experts.
          </p>
        </EachDiv>
        <p
          className={`italic my-[10px] 1000:text-[16px] 768:text-[14px] ${commonClass} text-[black]`}
        >
          Note: These guidelines may undergo periodic updates. Please review
          them regularly to stay informed.
        </p>
      </div>
    </div>
  );
}

export default Guidelines;
