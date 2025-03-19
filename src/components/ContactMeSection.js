import React from "react";
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
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "hireMe",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      type: Yup.string().required("Please select a type"),
      comment: Yup.string().min(25, "Must be at least 25 characters").required("Required"),
    }),
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: async (values, { resetForm }) => {
      const apiResponse = await submit(values);
      
      if (apiResponse?.type === "success") {
        onOpen("success", `Thank you, ${values.firstName}! We will be in touch.`);
        resetForm();
      } else {
        onOpen("error", "Something went wrong, please try again.");
      }
    },
  });

  return (
    <Box as="section" id="contactme-section" p={12} backgroundColor="#5A3EAE" minH="100vh">
      <VStack spacing={6} align="stretch" maxWidth="600px" margin="auto">
        {/* Titel */}
        <Heading as="h2" size="xl" color="white" textAlign="left">
          Contact me
        </Heading>

        {/* Formular-Box */}
        <Box backgroundColor="transparent" p={6} borderRadius="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              {/* Name Field */}
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName} w="full">
                <FormLabel htmlFor="firstName" color="white">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                  borderColor="whiteAlpha.700"
                  background="transparent"
                  color="white"
                  _placeholder={{ color: "whiteAlpha.700" }}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              {/* Email Field */}
              <FormControl isInvalid={formik.touched.email && formik.errors.email} w="full">
                <FormLabel htmlFor="email" color="white">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                  borderColor="whiteAlpha.700"
                  background="transparent"
                  color="white"
                  _placeholder={{ color: "whiteAlpha.700" }}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              {/* Type of Enquiry Field */}
              <FormControl isInvalid={formik.touched.type && formik.errors.type} w="full">
                <FormLabel htmlFor="type" color="white">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  {...formik.getFieldProps("type")}
                  borderColor="whiteAlpha.700"
                  background="transparent"
                  color="white"
                  _placeholder={{ color: "whiteAlpha.700" }}
                >
                  <option value="hireMe" style={{ color: "black" }}>Freelance project proposal</option>
                  <option value="openSource" style={{ color: "black" }}>Open source consultancy session</option>
                  <option value="other" style={{ color: "black" }}>Other</option>
                </Select>
                <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
              </FormControl>

              {/* Comment Field */}
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment} w="full">
                <FormLabel htmlFor="comment" color="white">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                  borderColor="whiteAlpha.700"
                  background="transparent"
                  color="white"
                  _placeholder={{ color: "whiteAlpha.700" }}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>

              {/* Submit Button */}
              <Button
                type="submit"
                width="full"
                isLoading={isLoading}
                backgroundColor="#9163E8"
                color="white"
                _hover={{ bg: "#A078EE" }}
                _disabled={{ bg: "#9163E8", opacity: 0.6, cursor: "not-allowed" }}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </Box>
  );
};

export default ContactMeSection;
