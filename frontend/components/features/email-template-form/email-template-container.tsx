"use client";

import EmailTemplateLogic from "./email-template-logic";

const EmailTemplateContainer = ({ onSubmit, ...props }: any) => {
  return <EmailTemplateLogic onSubmit={onSubmit} {...props} />;
};

export { EmailTemplateContainer };
