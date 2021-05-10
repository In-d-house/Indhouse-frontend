import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as actions from "../reducers/user";
import { form, message } from "../constants";

const schema = yup.object().shape({
  [form.name]: yup.string().required(),
  [form.email]: yup.string().email().required(),
  [form.password]: yup.string().min(4).max(15).required(),
  [form.checkPassword]: yup.string().oneOf([yup.ref(form.password), null]).required(),
});

const Signup = () => {
  const dispatch = useDispatch();
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(actions.requestSignup(data));
  };

  return (
    <div>
      <h1>Sign up to your account.</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={form.name} >{form.name}</label>
        <input type="text" {...register(form.name)} />
        <span>{errors.name && message.errorName}</span>

        <label htmlFor={form.email} >{form.email}</label>
        <input type="email" {...register(form.email)} />
        <span>{errors.email && message.errorEmail}</span>

        <label htmlFor={form.password} >{form.password}</label>
        <input type="password" {...register(form.password)} />
        <span>{errors.password && message.errorPassword}</span>

        <label htmlFor={form.checkPassword} >{form.checkPassword}</label>
        <input type="password" {...register(form.checkPassword)} />
        <span>{errors.checkPassword && message.errorCheckPassword}</span>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
