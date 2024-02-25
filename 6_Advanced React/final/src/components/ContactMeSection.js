import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  // Add formik hook with 3 properties
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    onSubmit: (values) => {
      submit("", values)
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address"),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("Required")
    }),
  });

  // Show an alert when the form is submitted successfully
  useEffect(() => {
    if(response) {
      onOpen(response.type, response.mesage);
      // Reset the form if the response if successful
      if(response.type === "success") {
        formik.resetForm();
      }
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          {/* Connect the form submit prop with Formik's handleSubmit function */}
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Show the error message for each field when the field is touched
                and the validation fails */}
              <FormControl isInvalid={
                !!formik.errors.firstName && formik.touched.firstName
              }>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                {/* useFormik hook returns an object with a function called getFieldProps 
                      that when called, returns an object with the necessary props to make 
                      the input controlled. */}
                <Input
                  id="firstName"
                  name="firstName"
                  
                  {...formik.getFieldProps("firstName")}
                />
                {/* Show the error message */}
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              {/* Error message implementation same as above */}
              <FormControl isInvalid={
                !!formik.errors.email && formik.touched.email
              }>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={
                !!formik.errors.comment && formik.touched.comment
              }>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              {/* Show loading indicator */}
              <Button 
                type="submit" 
                colorScheme="purple" 
                width="full"
                isLoading={isLoading}
                >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
