// Library
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// Assets
// Components
import Input from "../components/form/Input";
import Upload from "../components/form/Upload";

const Register = () => {
  const schema = yup
    .object({
      displayname: yup.string().required("Please fill in your display name"),
      email: yup
        .string()
        .email("your email format is wrong")
        .required("Please fill in your email"),
      password: yup.string().required("Please fill in your password"),
      upload: yup.string().required("Please upload  image for your avatar"),
    })
    .required();
  const uploadFileRef = useRef(null);
  // States
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  // console.log(errors);
  // Effects
  // Handlers
  const onSubmitForm = (values) => {
    const data = {
      ...values,
      uploadFiles: uploadFileRef.current.files,
    };
    console.log(data);
  };
  return (
    <div className="wrapper min-h-[800px] flex justify-center bg-[#F5F2EA]">
      <div className="container w-full max-w-[460px] px-4 mx-auto">
        <form
          action="#"
          onSubmit={handleSubmit(onSubmitForm)}
          className="my-10 w-full px-12 py-14 rounded-3xl shadow-lg bg-white"
          autoComplete="off"
        >
          <h1 className="mb-5 text-center text-3xl font-bold">
            Client Register
          </h1>
          <p className="mb-6 text-center text-lg">
            Hey, Enter your details to create your account
          </p>
          <Input
            control={control}
            type="text"
            name="displayname"
            id="displayname"
            placeholder="Display name"
          />
          {errors.displayname && (
            <span className="ml-3 text-xs text-red-600">
              {errors.displayname.message}
            </span>
          )}
          <Input
            control={control}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          {errors.email && (
            <span className="ml-3 text-xs text-red-600">
              {errors.email.message}
            </span>
          )}
          <Input
            control={control}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          {errors.password && (
            <span className="ml-3 text-xs text-red-600">
              {errors.password.message}
            </span>
          )}
          <Upload
            ref={uploadFileRef}
            control={control}
            name="upload"
            id="upload"
            placeholder="No file chosen"
          />
          {errors.upload && (
            <span className="ml-3 text-xs text-red-600">
              {errors.displayname.message}
            </span>
          )}
          <button className="py-4 mt-8 mb-12 w-full rounded-lg text-center font-bold bg-orange-400 hover:bg-orange-300">
            Register
          </button>
          <p className="text-center">
            Already have anccount?{" "}
            <Link to="/login" className="font-bold">
              Login here!
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
