import React, { InputHTMLAttributes } from 'react';
import { useField } from "formik";
import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";

type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {  // tells typescript that this component should take any props
    name: FieldType;                                                   // that a regular input field should take
    label: string;
};

type FieldType = "password" | "username" | "email";

const getPlaceholder = (field: FieldType) => {
    switch (field) {
        case "password":
            return "*******";
        case "email":
            return "user@email.co.uk";
        default:
            return field;
    }
};

export const FieldInput: React.FC<FieldInputProps> = ({ label, size: _, ...props }) => {
    const [field, { error }] = useField(props);

    return (
      <FormControl id={field.name} isInvalid={!!error}>
          <FormLabel htmlFor={field.name}>{label}</FormLabel>
          <Input {...field} {...props} id={field.name} placeholder={getPlaceholder(field.name as FieldType)}
                 type={field.name} bg={"white"} mb={2}/>
          {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
      </FormControl>
    );
};

