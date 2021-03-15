import React from "react";
import "./MailPop.css";
import whatsappIcon from "./svg/009-whatsapp.svg";
import emailIcon from "./svg/email.svg";
import fbMsgIcon from "./svg/062-messenger.svg";
import twitIcon from "./svg/016-twitter-1.svg";
import CloseIcon from "@material-ui/icons/Close";

function MailPop({ title, forwardIcon, title2 }) {
  const emailOnclose = () => {
    const mailPop = document.querySelector(".home__contactContent");
    mailPop.style.display = "none";
    mailPop.style.animation = "fadeIn 0.5s";
  };

  return (
    <div className="mailPop">
      <div className="mailPop__top">
        <CloseIcon onClick={emailOnclose} />
      </div>
      <div className="mailPop__mid">
        <div className="mailPop__midContent">
          {/* Title */}
          <h4>{title}</h4>
          {/* Input */}
          <div className="mailPop__midInput">
            <input type="text" placeholder="Hi I would like to..." />
            <img src={forwardIcon} alt="" />
          </div>
          {/* Social media icons */}
          <h4>{title2}</h4>
          <div className="mailPop__midSocial">
            <div className="mailPop__socialIcon">
              {/* Whatsapp */}
              <img src={whatsappIcon} alt="" />
              <h3>Whatsapp</h3>
            </div>
            <div className="mailPop__socialIcon">
              {/* Email */}
              <img src={emailIcon} alt="" />
              <h3>Email</h3>
            </div>
            <div className="mailPop__socialIcon">
              {/* Facebook messenger*/}
              <img src={fbMsgIcon} alt="" />
              <h3>Messenger</h3>
            </div>
            <div className="mailPop__socialIcon">
              {/* Twitter */}
              <img src={twitIcon} alt="" />
              <h3>Telegram</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MailPop;
