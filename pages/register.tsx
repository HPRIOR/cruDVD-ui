import type { NextPage } from 'next';
import { Form, Formik } from "formik";
import { useState } from "react";
import { Button, Flex } from '@chakra-ui/react';
import { FieldInput } from "../components/FieldInput";
import { useRegisterMutation } from "../types/graphql";
import setFormikErrors from "../utils/setFormikErrors";
import { useRouter } from "next/router";


const Register: NextPage = () => {
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);
  const [register, { loading }] = useRegisterMutation();

  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
      <Flex direction={"column"} background={"gray.100"} p={12} rounded={6}>
        <Formik initialValues={{ username: "", email: "", password: "" }} onSubmit={async (values, { setErrors }) => {
          const response = await register({ variables: { input: values } });
          setSubmitting(loading);

          let errors = response.data?.register.errors;
          let user = response.data?.register.user;
          if (errors) {
            setFormikErrors(setErrors, errors);
          } else if (user){
            await router.push("/")
          }

        }}>
          {
            ({ values, handleChange }) => (
              <Form>
                <FieldInput label={"Username"} name={"username"} onChange={handleChange}
                            value={values.username}/>
                <FieldInput label={"Email"} name={"email"} onChange={handleChange}
                            value={values.email}/>
                <FieldInput label={"Password"} name={"password"} onChange={handleChange}
                            value={values.password}/>
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
