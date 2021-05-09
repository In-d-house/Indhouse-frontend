import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import * as actions from "../reducers/user";

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(4).max(15).required(),
});

const Login = () => {
  const dispatch = useDispatch();
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    dispatch(actions.requestLoginLocal(data));
  };

  const handleLoginGoogle = () => {
    dispatch(actions.requestLoginSocial());
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="email">Email</label>
        <input type="email" {...register("email")} />
        <span>{errors.email && "이메일 형식이 맞지 않습니다."}</span>

        <label htmlFor="password">Password</label>
        <input type="password" {...register("password")} />
        <span>{errors.password && "비밀번호 형식이 맞지 않습니다."}</span>

        <input type="submit" />
      </form>

      <button onClick={handleLoginGoogle}>Google</button>
      <button>Facebook</button>
      <button>Twitter</button>
    </>
  );
};

export default Login;
