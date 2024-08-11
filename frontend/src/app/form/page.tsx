"use client";

import { PhoneField, TextField } from "@/components/form";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

const FormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  contactNumber: z.string().refine((value) => isValidPhoneNumber(value), {
    message: "Invalid phone number",
  }),
  address1: z.string().min(2, {
    message: "Address 1 must be at least 2 characters.",
  }),
  address2: z.string().min(2, {
    message: "Address 2 must be at least 2 characters.",
  }),
});

const ProfileForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      address1: "",
      address2: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
  };

  return (
    <>
      <Header title="CREATE USER" subTitle="Create a new user profile" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="flex gap-4">
            <TextField
              control={form.control}
              name="firstName"
              label="First Name"
              placeholder="ex: John"
              desc="Please enter a first name."
            />
            <TextField
              control={form.control}
              name="lastName"
              label="Last Name"
              placeholder="ex: Doe"
              desc="Please enter a last name."
            />
          </div>

          <div className="flex gap-4">
            <TextField
              control={form.control}
              name="email"
              label="Email Address"
              placeholder="ex: john.doe@email.com"
              desc="Please enter an email address."
            />
            <PhoneField
              control={form.control}
              name="contactNumber"
              label="Phone Number"
              desc="Please enter a phone number."
              countryCode="GB"
            />
          </div>

          <div className="flex gap-4">
            <TextField
              control={form.control}
              name="address1"
              label="Address 1"
              placeholder="ex: 4 Epic House"
              desc="Please enter the first line of the address."
            />
            <TextField
              control={form.control}
              name="address2"
              label="Address 2"
              placeholder="ex: Mystery Town"
              desc="Please enter the second line of the address."
            />
          </div>

          <Button
            type="submit"
            className="bg-secondary rounded hover:bg-primary-300"
          >
            Create New User
          </Button>
        </form>
      </Form>
    </>
  );
};

export default ProfileForm;
