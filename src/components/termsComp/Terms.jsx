import React from "react";
import { EachDiv, ListBulletPt, commonClass } from "../../utils/commonObjects";



const Terms = () => {
  return (
    <div className="w-[100%] flex justify-center items-center flex-col text-[grey] p-[15px] 1100:p-[0px] text-[16px] font-[300]">
      <br />
      <p className="text-[28px] font-[500] text-[#464646]">
        Helpert Terms of Service
      </p>
      <br />
      <p className="text-[17px] text-[#464646]">Effective: September 26,2022</p>
      <br />
      <p className="text-[22px] border-b-[17px] border-[white] font-[500] text-[#2b2b2b]">
        Welcome!
      </p>

      <div className="max-w-[1100px]">
        <p className="border-b-[12px] border-[white]">
          We’ve drafted these Terms of Service (which we call the “Terms”) so
          you’ll know the rules that govern our relationship with you. Although
          we have tried our best to strip the legalese from the Terms, there are
          places where these Terms may still read like a traditional contract.
          There’s a good reason for that: These Terms do indeed form a legally
          binding contract between you and Helppert Technologies. So please read
          them carefully.
        </p>
        <p className="border-b-[12px] border-[white]">
          By using Helpert or any of our other products or services that link to
          these Terms (we refer to these collectively as the “Services”), you
          agree to the Terms. Of course, if you don’t agree with them, then
          don’t use the Services.
        </p>
        <EachDiv heading="1. Who Can Use the Services">
          <p className={`${commonClass}`}>
            No one under 10 is allowed to create an account or use the Services.
            We may offer additional Services with additional terms that may
            require you to be even older to use them. So please read all terms
            carefully.
          </p>
          <p>By using the Services, you state that:</p>
          <ListBulletPt
            arr={[
              "You can form a binding contract with Helpert.",
              `You are not a person who is barred from receiving the Services
              under the laws of India or any other applicable.`,
              `You are not a convicted sex offender.`,
              `You will comply with these Terms and all applicable local, state, national, and international laws, rules, and regulations.`,
            ]}
          ></ListBulletPt>
          <p>
            If you are using the Services on behalf of a business or some other
            entity, you state that you are authorised to grant all licences set
            forth in these Terms and to agree to these Terms on behalf of the
            business or entity.{" "}
          </p>
        </EachDiv>
        <EachDiv heading="2. Rights We Grant You">
          <p className={commonClass}>
            Helpert. grants you a personal, worldwide, royalty-free,
            non-assignable, nonexclusive, revocable, and non-sublicensable
            licence to access and use the Services.{" "}
          </p>
          <p className={commonClass}>
            Any software that we provide you may automatically download and
            install upgrades, updates, or other new features. You may be able to
            adjust these automatic downloads through your device’s settings.
          </p>
          <p className={commonClass}>
            You may not copy, modify, distribute, sell, or lease any part of our
            Services, nor may you reverse engineer or attempt to extract the
            source code of that software, unless laws prohibit these
            restrictions or you have our written permission to do so.
          </p>
        </EachDiv>
        <EachDiv heading="3. Rights You Grant Us">
          {[
            "Many of our Services let you create, upload, post, send, receive, and store content. When you do that, you retain whatever ownership rights in that content you had to begin with. But you grant us a licence to use that content. How broad that licence is depends on which Services you use and the Settings you have selected.",
            "We call short video submissions that are set to be viewable by Everyone as well as content you submit to crowd-sourced Services, including Our short videos, “Public Content.” For all content you submit to the Services other than Public Content, you grant Helpert and our affiliates a worldwide, royalty-free, sublicensable, and transferable license to host, store, use, display, reproduce, modify, adapt, edit, publish, and distribute that content. This license is for the limited purpose of operating, developing, providing, promoting, and improving the Services and researching and developing new ones.",
            "For information about how to tailor who can watch your content, please take a look at our Privacy Policy.",
            "While we’re not required to do so, we may access, review, screen, and delete your content at any time and for any reason, including to provide and develop the Services or if we think your content violates these Terms. You alone, though, remain responsible for the content you create, upload, post, send, or store through the Service.",
            "The Services may contain advertisements. In consideration for Helpert letting you access and use the Services, you agree that we, our affiliates, and our third-party partners may place advertising on the Services. Because the Services contain content that you and other users provide us, advertising may sometimes appear near your content.",
            "We always love to hear from our users. But if you provide feedback or suggestions, just know that we can use them without compensating you, and without any restriction or obligation to you.",
          ].map((item, id) => (
            <p className={commonClass} key={id}>
              {item}
            </p>
          ))}
        </EachDiv>
        <EachDiv heading="4. The Content of Others">
          <p className={commonClass}>
            Much of the content on our Services is produced by users (who are
            specialists or experts) and other third parties. Whether that
            content is posted publicly or sent privately, the content is the
            sole responsibility of the person or organization that submitted it.
            Although Helpert reserves the right to review or remove all content
            that appears on the Services, we do not necessarily review all of
            it. So we cannot—and do not—take responsibility for any content that
            others provide through the Services.
          </p>
        </EachDiv>
        <EachDiv heading="5. Privacy">
          <p className={commonClass}>
            Your privacy matters to us. You can learn how we handle your
            information when you use our Services by reading our Privacy Policy.
            We encourage you to give the Privacy Policy a careful look because,
            by using our Services, you agree that helpert can collect, use, and
            share your information consistent with that policy.
          </p>
        </EachDiv>
        <EachDiv heading="6. Respecting Others’ Rights">
          <p className={commonClass}>
            Helpert respects the rights of others. And so should you. You
            therefore may not use the Services, or enable anyone else to use the
            Services, in a manner that:
          </p>
          <ListBulletPt
            arr={[
              "violates or infringes someone else’s rights of publicity, privacy, copyright, trademark, or other intellectual property right.",
              "bullies, harasses, or intimidates.",
              "defames.",
              "spams or solicits our users.",
              "use branding, logos, icons, user interface elements, designs, photographs, videos, or any other materials used in our Services.",
              "violate or infringe Helpert’s copyrights, trademarks, or other intellectual property rights.",
              `copy, archive, download, upload, distribute, syndicate, broadcast, perform, display, make available, or otherwise use any portion of the Services or the content on the Services except as set forth in these Terms.`,
              `use the Services, any tools provided by the Services, or any content on the Services for any commercial purposes without our consent.
            `,
            ]}
          ></ListBulletPt>
          <p className={commonClass}>
            In short: You may not use the Services or the content on the
            Services in ways that are not authorised by these Terms. Nor may you
            help anyone else in doing so.
          </p>
        </EachDiv>
        <EachDiv heading="7. Respecting Copyright">
          {
            ["Helpert honours copyright laws, including the Digital Millennium Copyright Act. We therefore take reasonable steps to expeditiously remove from our Services any infringing material that we become aware of. And if Helpert becomes aware that one of its users has repeatedly infringed copyrights, we will take reasonable steps within our power to terminate the user’s account.",
            "We make it easy for you to report suspected copyright infringement. If you believe that anything on the Services infringes a copyright that you own or control, please report it to us.",
            "email: support@helperts.com",
            "Don’t use this email address for anything other than reporting copyright infringement, as such emails will be ignored. "
          ].map((item,id)=>(
            <p className={commonClass} key={id}>
              {item}
            </p>
          ))
          }
        </EachDiv>
        <EachDiv heading="8. Safety">
          <p className={commonClass}>
          We try hard to keep our Services a safe place for all users. But we can’t guarantee it. That’s where you come in. By using the Services, you agree that:
          </p>
          <ListBulletPt arr={[
            "You will not use the Services for any purpose that is illegal or prohibited in these Terms.",
            "You will not use any robot, spider, crawler, scraper, or other automated means or interface to access the Services or extract other user’s information.",
            "You will not use or develop any third-party applications that interact with the Services or other users’ content or information without our written consent.",
            "You will not use the Services in a way that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Services, or that could damage, disable, overburden, or impair the functioning of the Services.",
            "You will not use or attempt to use another user’s account, username, or password without their permission.",
            "You will not solicit login credentials from another user.",
            "You will not post content that contains or links to pornography, graphic violence, threats, hate speech, or incitements to violence.",
            "You will not upload viruses or other malicious code or otherwise compromise the security of the Services.",
            "You will not attempt to circumvent any content-filtering techniques we employ, or attempt to access areas or features of the Services that you are not authorised to access.",
            "You will not probe, scan, or test the vulnerability of our Services or any system or network.",
            "You will not encourage or promote any activity that violates these Terms."
          ]}>

          </ListBulletPt>
          <p className={commonClass}>
          We also care about your safety while using our Services. So do not use our Services in a way that would distract you from obeying traffic or safety laws. For example, never use and drive. 
          </p>
        </EachDiv>
        <EachDiv heading="9. Your Account">
          <p className={commonClass}>You are responsible for any activity that occurs in your Helpert account. So it’s important that you keep your account secure. One way to do that is to select a strong password that you don’t use for any other account.</p>
          <p className={commonClass}>By using the Services, you agree that, in addition to exercising common sense:</p>
          <ListBulletPt arr={[
            "You will not create more than one account for yourself.",
            "You will not create another account if we have already disabled your account, unless you have our written permission to do so.",
            "You will not buy, sell, rent, or lease access to your helpert account.",
            "You will not share your password.",
            "You will not log in or attempt to access the Services through unauthorized third-party applications or clients",
          ]} ></ListBulletPt>
        
        <p className={commonClass}>If you think that someone has gained access to your account, please immediately reach out to Helpert Support.</p>
        </EachDiv>
        <EachDiv heading={"10. Data Charges and Mobile Phones"}>
          <p className={commonClass}>You are responsible for any mobile charges that you may incur for using our Services, including text-messaging and data charges. If you’re unsure what those charges may be, you should ask your service provider before using the Services.</p>
          <p className={commonClass}>
          If you change or deactivate the mobile phone number that you used to create a Helpert account, you must update your account information through Settings within 72 hours to prevent us from sending to someone else messages intended for you.
          </p>
        </EachDiv>
        <EachDiv heading="11. Indemnity">
          <p className={commonClass
          }>You agree, to the extent permitted by law, to indemnify, defend, and hold harmless Helpert, our affiliates, directors, officers, stockholders, employees, licensors, and agents from and against any and all complaints, charges, claims, damages, losses, costs, liabilities, and expenses (including attorneys’ fees) due to, arising out of, or relating in any way to: (a) your access to or use of the Services; (b) your content; and (c) your breach of these Terms.</p>
        </EachDiv>
        <EachDiv heading="12. Disclaimers">
          <p className={commonClass}>
          We try to keep the Services up and running and free of annoyances. But we make no promises that we will succeed.
          </p>

        </EachDiv>
        <EachDiv heading={"Contact Us"}>
          <p className={`${commonClass} text-[18px] font-[500]`}>
          Helpert welcomes comments, questions, concerns, or suggestions. Please contact us by visiting <span>
          <a href="https://helperts.com/contact-us/"
          className="text-[grey] hover:text-[#2f2f2f]"
          >
          https://helperts.com/contact-us/
          </a>
          </span>
          </p>
          <p className={commonClass}>Helpert Technologies Pvt Ltd. is located in Dharawad Karnataka – India 580001

</p>
        </EachDiv>
      </div>
      <br />
    </div>
  );
};

export default Terms;
