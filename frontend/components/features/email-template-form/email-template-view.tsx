import { Input } from "../../ui/input";
import { UseFormReturn } from "react-hook-form";
import { TEmailTemplateSchema } from "./types";
import { Button } from "../../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect } from "react";

interface Props {
  form: UseFormReturn<TEmailTemplateSchema>;
  onSubmit: any;
  header?: string | JSX.Element | null;
  formClass?: string;
  inputClass?: string;
  selectClass?: string;
  selectContainer?: string;
  buttonClass?: string;
}

const EmailTemplateView = ({
  form,
  onSubmit,
  header,
  formClass,
  inputClass,
  selectClass,
  buttonClass,
  ...props
}: Props) => {
  const { formState, register, handleSubmit, setValue } = form;
  const { errors } = formState;

  useEffect(() => {
    setValue("checked", false);
  }, [form]);
  return (
    <form className={formClass} onSubmit={handleSubmit(onSubmit)}>
      {header}
      <Input
        placeholder="Send to Multiple receivers i.e <email>,<email>"
        {...register("receiver")}
        autoComplete={"off"}
        className={cn(inputClass, "mt-2")}
      />
      {errors.receiver && (
        <div className="text-red-500 text-xs">{`${errors.receiver.message}`}</div>
      )}

      <Input
        placeholder="Subject.."
        {...register("subject")}
        autoComplete={"off"}
        className={inputClass}
      />
      {errors.subject && (
        <div className="text-red-500 text-xs">{`${errors.subject.message}`}</div>
      )}

      <Textarea
        placeholder="Enter Email description.."
        {...register("description")}
        autoComplete={"off"}
        className={inputClass}
      />
      {errors.description && (
        <div className="text-red-500 text-xs">{`${errors.description.message}`}</div>
      )}
      <div className="flex items-center space-x-2 mb-3">
        <Checkbox
          id="terms"
          {...register("checked")}
          onCheckedChange={(checked: boolean) => {
            setValue("checked", checked);
          }}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Schedule this mail (Optional)
        </label>
      </div>
      {errors.checked && (
        <div className="text-red-500 text-xs mb-4">{`${errors.checked.message}`}</div>
      )}
      <Button type={"submit"} className={buttonClass}>
        Save Template
      </Button>
    </form>
  );
};

export default EmailTemplateView;
