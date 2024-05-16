import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export const CardContainer = (props: any) => {
  const { _id, subject, description, deleteTemplate } = props;
  const [show, setShow] = useState(false);
  return (
    <Card className="w-[90%] mx-auto my-2">
      <CardHeader>
        <CardTitle>ID: {_id}</CardTitle>
        <CardDescription>{subject}</CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-between">
        <Button variant="destructive" onClick={() => deleteTemplate(_id)}>
          Delete
        </Button>
        <Button onClick={() => setShow(!show)}>
          {show ? "Hide Details" : "Show Details"}
        </Button>
      </CardFooter>
      {show && (
        <CardContent className="w-full overflow-auto">
          <div style={{ whiteSpace: "pre" }}>{description}</div>
        </CardContent>
      )}
    </Card>
  );
};
