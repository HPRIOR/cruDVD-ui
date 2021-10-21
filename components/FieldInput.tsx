import React, { InputHTMLAttributes } from 'react';
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useField } from "formik";

type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {  // tells typescript that this component should take any props
  name: FieldType;                                                   // that a regular input field should take
};

type FieldType = "password" | "username" | "email";

export const FieldInput: React.FC<FieldInputProps> = (props) => {
  const [field, { error }] = useField(props);
  const isPassword = field.name === "password";

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{field.name}</FormLabel>
      <Input {...field} id={field.name} placeholder={isPassword ? "********" : field.name } type={field.name}/>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};