import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as actions from "../reducers/user";
import { form, socialType, message } from "../constants";

const schema = yup.object().shape({
  [form.email]: yup.string().required(),
  [form.password]: yup.string().min(4).max(15).required(),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(actions.requestLoginLocal(data));
  };

  const handleLoginSocial = type => {
    dispatch(actions.requestLoginSocial({ type }));
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor={form.email} >{form.email}</label>
        <input type="email" {...register(form.email)} />
        <span>{errors.email && message.errorEmail}</span>

        <label htmlFor={form.password} >{form.password}</label>
        <input type="password" {...register(form.password)} />
        <span>{errors.password && message.errorPassword}</span>

        <input type="submit" />
      </form>

      <button onClick={() => handleLoginSocial(socialType.google)} >Google</button>
      <button onClick={() => handleLoginSocial(socialType.facebook)} >Facebook</button>
      <button>Twitter</button>
    </>
  );
};

export default LoginForm;
