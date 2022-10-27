import React from "react";
import { useController } from "react-hook-form";

const Input = ({ control, name, onChange, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      className="w-full py-3 px-4 my-2 outline-none border border-gray-200 focus:border-orange-400 rounded-lg transition ease-linear duration-300"
      {...field}
      onChange={(e) => {
        field.onChange(e);
        onChange && onChange();
      }}
      {...props}
    />
  );
};

export default Input;
