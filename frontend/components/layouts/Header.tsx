import React, { useState } from "react";
import { Drawerbutton } from "./drawer-button";
import { EmailTemplateContainer } from "../features/email-template-form/email-template-container";
import { useAppDispatch } from "@/store/hook";
import { addTemplate } from "@/store/slices/templateSlice";
import {
  useAddTemplateMutation,
  useScheduleJobMutation,
} from "@/store/slices/templateApiSlice";
import { useToast } from "../ui/use-toast";
import ExportButton from "./export-button";

export const Header = () => {
  const dispatch = useAppDispatch();
  const { toast } = useToast();
  const [createTemplate] = useAddTemplateMutation();
  const [scheduleJob] = useScheduleJobMutation();
  const [open, setOpen] = useState(false);
  const onsubmit = async (data: any) => {
    try {
      setOpen(false);
      const newEmail: any = await createTemplate(data);
      if (!data.checked) await dispatch(addTemplate(newEmail.data.template));
      else await scheduleJob(data);

      setTimeout(() => {
        toast({
          variant: "default",
          title: data.checked ? "Job Scheduled" : "Email Added",
          description: "Your request has been sucessfully received",
        });
      }, 200);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Something wents wrong please try again",
        });
      }, 200);
    }
  };

  return (
    <div className="bg-[#dfdfdf] p-2 flex justify-between shadow-md">
      <strong className="p-2">A/B Testing</strong>
      <div>
        <Drawerbutton title="Add Email" open={open} setOpen={setOpen}>
          <EmailTemplateContainer
            onSubmit={onsubmit}
            formClass="grid flex-row"
            inputClass="mb-4"
            buttonClass="mx-auto w-full max-w-sm"
          />
        </Drawerbutton>
        <ExportButton />
      </div>
    </div>
  );
};
