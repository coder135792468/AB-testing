"use client";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { BarChartContainer } from "../components/charts/bar-chart";
import { Header } from "@/components/layouts/Header";
import { CardContainer } from "@/components/layouts/card-container";
import { setTemplate, deleteTemplate } from "@/store/slices/templateSlice";
import {
  useDeleteTemplateMutation,
  useGetAllTemplatesQuery,
} from "@/store/slices/templateApiSlice";

export default function Home() {
  const { templates } = useAppSelector((state) => state.template);
  const { data = [] } = useGetAllTemplatesQuery({});
  const [deleteTemplateById] = useDeleteTemplateMutation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data.length > 0) dispatch(setTemplate(data));
  }, [data]);
  return (
    <div>
      <Header />
      <div className="mt-3 h-[320px]">
        <BarChartContainer data={templates} x_axis={"_id"} num="views" />
      </div>
      <div>
        {templates.map((ele: any, index: number) => (
          <CardContainer
            {...ele}
            deleteTemplate={async (id: any) => {
              await dispatch(deleteTemplate(id));
              await deleteTemplateById(id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
