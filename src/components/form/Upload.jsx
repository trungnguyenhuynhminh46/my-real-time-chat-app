import React, { useRef, forwardRef } from "react";
import { useController, useWatch } from "react-hook-form";

const Upload = ({ name, control, placeholder, ...props }, ref) => {
  // States
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  const files = useWatch({
    control,
    name,
  });

  return (
    <div className="relative w-full py-3 px-4 my-2 border border-gray-200 rounded-lg overflow-hidden">
      <input {...field} {...props} type="file" className="hidden" ref={ref} />
      <label
        htmlFor={props?.id ? props.id : ""}
        className="absolute cursor-pointer w-[100px] flex justify-center items-center top-0 bottom-0 left-0 bg-orange-500 text-white hover:opacity-80"
      >
        <span>Upload file</span>
      </label>
      <span className="pl-[100px] text-ellipsis whitespace-nowrap overflow-hidden">
        {!!files ? ref.current?.files[0].name : placeholder}
      </span>
    </div>
  );
};

export default forwardRef(Upload);
