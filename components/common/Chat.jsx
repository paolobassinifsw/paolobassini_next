"use client";

import { useTranslator } from "@/i18n/LocaleProvider";


export default function Chat() {
  const t = useTranslator();
  return (
    <div className="ready-chatting-option tmp-ready-chat">
      <input type="checkbox" id="click" />
      <label htmlFor="click">
        <i className="fab fa-facebook-messenger" />
        <i className="fas fa-times" />
      </label>
      <div className="wrapper">
        <div className="head-text">{t("Let's chat with me? - Online")}</div>
        <div className="chat-box">
          <div className="desc-text">
            {t("Please fill out the form below to start chatting with me directly.")}
          </div>
          <form
            className="tmp-dynamic-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="field">
              <input
                className="input-field"
                name="name"
                placeholder={t("Your Name")}
                type="text"
                required
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                name="email"
                placeholder={t("Your Email")}
                type="email"
                required
              />
            </div>
            <div className="field textarea">
              <textarea
                className="input-field"
                placeholder={t("Your Message")}
                name="message"
                required
                defaultValue={""}
              />
            </div>
            <div className="field">
              <button name="submit" type="submit">
                {t("Send Message")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
