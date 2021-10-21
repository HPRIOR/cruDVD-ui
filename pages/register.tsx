import type { NextPage } from 'next';
import { Form, Formik } from "formik";
import { useState } from "react";
import { Button, Flex } from '@chakra-ui/react';
import { FieldInput } from "../components/FieldInput";

const Register: NextPage = () => {
  let [isSubmitting, setSubmitting] = useState(false);

  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex direction={"column"} background={"gray.100"} p={12} rounded={6}>
        <Formik initialValues={{ username: "", email: "", password: "" }} onSubmit={(value) => {
          setSubmitting(true);
          console.log(value); // form state when use submits
        }}>
          {
            ({ values, handleChange }) => (
              <Form>
                <FieldInput name={"username"} onChange={handleChange} value={values.username}/>
                <FieldInput name={"email"} onChange={handleChange} value={values.username}/>
                <FieldInput name={"password"} onChange={handleChange} value={values.username}/>
                <Button colorScheme={"teal"} type={"submit"} isLoading={isSubmitting}>Register</Button>
              </Form>
            )
          }
        </Formik>
      </Flex>
    </Flex>
  );
};

export default Register;
