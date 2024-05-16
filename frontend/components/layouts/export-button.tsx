import React from "react";
import { Button } from "../ui/button";
import { downloadCSV } from "@/lib/utils";
import { RootState } from "@/store/store";
import { useAppSelector } from "@/store/hook";
import { useGetBestTimeQuery } from "@/store/slices/templateApiSlice";

const ExportButton = () => {
  const { templates } = useAppSelector((state: RootState) => state.template);
  const { data } = useGetBestTimeQuery({});

  return (
    <Button onClick={() => downloadCSV(templates, data)} className="mx-2">
      Export
    </Button>
  );
};

export default ExportButton;
