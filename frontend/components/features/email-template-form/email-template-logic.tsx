import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TEmailTemplateSchema, emailTemplateSchema } from "./types";
import EmailTemplateView from "./email-template-view";

const EmailTemplateLogic = ({ onSubmit, ...props }: any) => {
  const form = useForm<TEmailTemplateSchema>({
    resolver: zodResolver(emailTemplateSchema),
  });

  const handleSubmit = async (data: TEmailTemplateSchema) => {
    await onSubmit(data);
    form.reset();
  };

  return <EmailTemplateView form={form} onSubmit={handleSubmit} {...props} />;
};

export default EmailTemplateLogic;
