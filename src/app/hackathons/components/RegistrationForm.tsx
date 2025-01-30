"use client";
import { CMSHackathon } from "@/lib/cms.types";
import { Button, Input } from "@nuahorg/universa-ui-kit";
import { useRef, useState } from "react";

type RegistrationFormProps = {
  hackathons: CMSHackathon[];
};

export const RegistrationForm = ({ hackathons }: RegistrationFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileUploadInputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="card p-[40px] rounded-[20px] grid grid-cols-2 gap-x-[20px] gap-y-[50px] text-start screen-1023:grid-cols-1 w-full">
      <div>
        <Input label="Name:" placeholder="e.g. John" />
      </div>
      <div>
        <Input label="Email address:" placeholder="e.g. john@universa.org" />
      </div>
      <div>
        <Input
          label="University Name (if applicable):"
          placeholder="University name"
        />
      </div>
      <div>
        <Input
          label="GitHub link (if not available, upload your portfolio below):"
          placeholder="e.g. https://github.com/name"
        />
      </div>
      <div className="col-span-2 screen-1023:col-span-1 z-[100]">
        <div className="text-[15px] mb-[15px] text-crop">
          Portfolio (if you have not provided a GitHub link):
        </div>
        <div className="border-dashed min-h-[150px] border rounded-[20px] border-nuah-gray-light flex justify-center items-center">
          <button
            type="submit"
            className="bg-nuah-gray h-[50px] px-[20px] cursor-pointer"
            onClick={() => fileUploadInputRef.current?.click()}
          >
            <span className="underline">Upload</span> or drop your files here
          </button>
        </div>
        <input ref={fileUploadInputRef} type="file" hidden />
      </div>
      <div className="col-span-2 screen-1023:col-span-1">
        <Input label="Challange" />
      </div>
      <div className="col-span-2 screen-1023:col-span-1">
        I have read the minimum requirements
      </div>
      <div className="flex justify-center col-span-2 screen-1023:col-span-1">
        <Button size="large" schema="gradient">
          Submit
        </Button>
      </div>
    </form>
  );
};
