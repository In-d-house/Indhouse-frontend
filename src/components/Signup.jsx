import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as actions from "../reducers/user";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(4).max(15).required(),
  checkPassword: yup.string().oneOf([yup.ref("password"), null]).required(),
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
        <label htmlFor="name">Name</label>
        <input type="text" {...register("name")} />
        <span>{errors.name && "이름 형식이 맞지 않습니다."}</span>

        <label htmlFor="emai">Email</label>
        <input type="email" {...register("email")} />
        <span>{errors.email && "이메일 형식이 맞지 않습니다."}</span>

        <label htmlFor="password">Password</label>
        <input type="text" {...register("password")} />
        <span>{errors.password && "비밀번호 형식이 맞지 않습니다."}</span>

        <label htmlFor="checkPassword">Check Password</label>
        <input type="text" {...register("checkPassword")} />
        <span>{errors.checkPassword && "비밀번호가 동일하지 않습니다."}</span>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Signup;
