import React from "react";
import { EachDiv, commonClass } from "../../utils/commonObjects";
import Details from "../../pictures/images/details.png";
import Price from "../../pictures/images/price-1.png";
import Payment from "../../pictures/images/payment.png";
import Timing from "../../pictures/images/timing.png";

const BecomeExpertChild = () => {
  return (
    <>
      <div className="w-[100%] flex justify-center items-center flex-col text-[grey] p-[15px] 1100:p-[0px] text-[16px] font-[300]">
        <div className="max-w-[1100px] mt-[20px]">
          <EachDiv heading={"What is Helpert app?"}>
            <p className={commonClass}>
              Helpert is social network app, which helps users to talk with
              experts/specialist directly after a confirmed paid appointment and
              it gives a direct one on one way for communication via video call
              for the users around the world to speak with experts/specialists
              or famous people they admire online to discuss their issues or
              have just normal conversation.
            </p>
          </EachDiv>
          <EachDiv heading={"Benefits of Becoming expert on Helpert"}>
            <p className={commonClass}>
              Helpert helps you organize your online appointment schedule,
              accept appointments from your users and follower, attend video
              call appointment on time and receive money directly to your UPI or
              Bank account.
            </p>
          </EachDiv>
          <EachDiv heading="Create and Post Videos">
            {[
              "Create self explanatory video -> describe your expertise in the videoFor Example ",
              "For Example :",
              "If you’re Data Scientist ? Say this in video",
              "Hello and welcome to Helpert! My name is Sadiq Ratankhan, and as a data scientist with more than 10 years of experience, I provide guidance to users. Please consider following me for more interesting tips, and if you have any doubts or questions about data science and career guidance, you can book a private video call to discuss further.",
              "If you’re Cardiologist ? Say this in video",
              "Hello and welcome to Helpert! My name is Sadiq Ratankhan, and as a cardiologist with more than 10 years of experience, I offer guidance to users seeking health advice. Please consider following me for more interesting tips, and if you have any doubts or questions about cardiology and your health guidance, you can book a private video call to discuss further.",
              "Once you become expert -> You can post or share videos about tips and guidance about your expertise in 30 seconds or 60 seconds.",
            ].map((item, id) => (
              <p key={id} className={commonClass}>
                {item}
              </p>
            ))}
          </EachDiv>
          <EachDiv heading="How to Become Expert on Helpert?">
            {[
              `It's easy to become expert- Once you signup follow the steps
                  below.`,
              `Step 1`,
              `Go to “Experience & Portfolios” – in profile settings`,
              `Add your work Experience, your expertise, company / organization and location. Follow below screen.`,
            ].map((item, id) => (
              <p className={commonClass} key={id}>
                {item}
              </p>
            ))}
            <figure className="wp-block-image size-large is-resized flex justify-center">
              <img
                decoding="async"
                src={Details}
                alt=""
                className="wp-image-709"
                width="294"
                height="637"
                // srcSet="https://helperts.com/wp-content/uploads/2023/05/Simulator-Screen-Shot-iPhone-14-Pro-2023-05-03-at-17.15.57-369x800.png 369w, https://helperts.com/wp-content/uploads/2023/05/Simulator-Screen-Shot-iPhone-14-Pro-2023-05-03-at-17.15.57-185x400.png 185w, https://helperts.com/wp-content/uploads/2023/05/Simulator-Screen-Shot-iPhone-14-Pro-2023-05-03-at-17.15.57-768x1665.png 768w, https://helperts.com/wp-content/uploads/2023/05/Simulator-Screen-Shot-iPhone-14-Pro-2023-05-03-at-17.15.57-709x1536.png 709w, https://helperts.com/wp-content/uploads/2023/05/Simulator-Screen-Shot-iPhone-14-Pro-2023-05-03-at-17.15.57-945x2048.png 945w, https://helperts.com/wp-content/uploads/2023/05/Simulator-Screen-Shot-iPhone-14-Pro-2023-05-03-at-17.15.57-600x1301.png 600w, https://helperts.com/wp-content/uploads/2023/05/Simulator-Screen-Shot-iPhone-14-Pro-2023-05-03-at-17.15.57.png 1179w"
                sizes="(max-width: 294px) 100vw, 294px"
              />
            </figure>
            {[
              `Step – 2`,
              `Go to “Set your price” – in settings`,
              `Set your desire price based on your popularity and experience for each appointment of 30 minutes – minimum is Rs.300 to 10,000. Follow below screen..`,
            ].map((item, id) => (
              <p className={commonClass} key={id}>
                {item}
              </p>
            ))}
            <figure className="wp-block-image size-large is-resized flex justify-center">
              <img
                decoding="async"
                loading="lazy"
                src={Price}
                alt=""
                className="wp-image-713"
                width="318"
                height="689"
                // srcSet="https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_A42EA84D-8614-4A98-8FD6-12B67E6FDEA3-369x800.png 369w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_A42EA84D-8614-4A98-8FD6-12B67E6FDEA3-185x400.png 185w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_A42EA84D-8614-4A98-8FD6-12B67E6FDEA3-768x1665.png 768w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_A42EA84D-8614-4A98-8FD6-12B67E6FDEA3-709x1536.png 709w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_A42EA84D-8614-4A98-8FD6-12B67E6FDEA3-945x2048.png 945w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_A42EA84D-8614-4A98-8FD6-12B67E6FDEA3-600x1301.png 600w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_A42EA84D-8614-4A98-8FD6-12B67E6FDEA3.png 1179w"
                sizes="(max-width: 318px) 100vw, 318px"
              />
            </figure>
            {[
              `Step – 3`,
              `Go to “Add payment method” – in settings`,
              `Add Your Payment method and link your account such as UPI ID or Bank account to receive payment from your booked appointments. Follow below screen.`,
            ].map((item, id) => (
              <p className={commonClass} key={id}>
                {item}
              </p>
            ))}
            <figure className="wp-block-image size-large is-resized flex justify-center">
              <img
                decoding="async"
                loading="lazy"
                src={Payment}
                alt=""
                className="wp-image-719"
                width="291"
                height="629"
                // srcSet="https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_56315B39-FDC0-4D04-92DE-02D7F35AED33-185x400.png 185w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_56315B39-FDC0-4D04-92DE-02D7F35AED33-709x1536.png 709w"
                sizes="(max-width: 291px) 100vw, 291px"
              />
            </figure>
            {[
              `Step – 4`,
              `Go to “My schedule” – in settings`,
              `Add or Manage your available schedule to receive appointments, select each slots for each day based on your availability. Follow below screen.`,
            ].map((item, id) => (
              <p className={commonClass} key={id}>
                {item}
              </p>
            ))}
            <figure className="wp-block-image size-large is-resized flex justify-center">
              <img
                decoding="async"
                loading="lazy"
                src={Timing}
                alt=""
                className="wp-image-715"
                width="288"
                height="624"
                // srcSet="https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_BEB65B00-F1BD-485C-98BB-C7150FCC031E-369x800.png 369w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_BEB65B00-F1BD-485C-98BB-C7150FCC031E-185x400.png 185w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_BEB65B00-F1BD-485C-98BB-C7150FCC031E-768x1665.png 768w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_BEB65B00-F1BD-485C-98BB-C7150FCC031E-709x1536.png 709w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_BEB65B00-F1BD-485C-98BB-C7150FCC031E-945x2048.png 945w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_BEB65B00-F1BD-485C-98BB-C7150FCC031E-600x1301.png 600w, https://helperts.com/wp-content/uploads/2023/05/simulator_screenshot_BEB65B00-F1BD-485C-98BB-C7150FCC031E.png 1179w"
                sizes="(max-width: 288px) 100vw, 288px"
              />
            </figure>
            <p className={`${commonClass} text-[20px] font-[500] text-[black]`}>
              Awesome..! You&#8217;re done now start accepting appointments
            </p>
          </EachDiv>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default BecomeExpertChild;
