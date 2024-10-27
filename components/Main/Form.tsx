"use client";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import * as Yup from "yup";
import { useFormik } from "formik";
import emailjs from "emailjs-com";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const Form = () => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      // Send email using Email.js
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
      const userId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

      emailjs
        .send(serviceId, templateId, values, userId)
        .then((response) => {
          toast({
            title: "Thank you for contacting us!",
            description: "We will get back to you soon.",
          });
          console.log("Email sent successfully:", response);
        })
        .catch((error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
          });
        })
        .finally(() => {
          setLoading(false);
          formik.resetForm();
        });
    },
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
      {/* Name Input */}
      <div className="space-y-1">
        <Input
          placeholder="Name*"
          className="py-3 h-max"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-link">{formik.errors.name}</div>
        ) : null}
      </div>

      {/* Email Input */}
      <div className="space-y-1">
        <Input
          placeholder="Email*"
          className="py-3 h-max"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-link">{formik.errors.email}</div>
        ) : null}
      </div>

      {/* Phone Input */}
      <div className="space-y-1">
        <Input
          placeholder="Phone Number*"
          className="py-3 h-max"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red-500 text-link">{formik.errors.phone}</div>
        ) : null}
      </div>

      {/* Message Textarea */}
      <div className="space-y-1">
        <Textarea
          placeholder="Message*"
          className="py-3 min-h-20"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500 text-link">{formik.errors.message}</div>
        ) : null}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="bg-white text-primary text-md uppercase max-w-fit p-5 font-semibold hover:bg-white hover:text-primary/40"
      >
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default Form;
