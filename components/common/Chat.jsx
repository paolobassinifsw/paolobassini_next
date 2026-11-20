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
        <div className="head-text">{t("chat.title")}</div>
        <div className="chat-box">
          <div className="desc-text">
            {t("chat.description")}
          </div>
          <form
            className="tmp-dynamic-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="field">
              <input
                className="input-field"
                name="name"
                placeholder={t("form.name")}
                type="text"
                required
              />
            </div>
            <div className="field">
              <input
                className="input-field"
                name="email"
                placeholder={t("form.email")}
                type="email"
                required
              />
            </div>
            <div className="field textarea">
              <textarea
                className="input-field"
                placeholder={t("form.message")}
                name="message"
                required
                defaultValue={""}
              />
            </div>
            <div className="field">
              <button name="submit" type="submit">
                {t("chat.send")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
