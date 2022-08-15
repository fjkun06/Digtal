import { object, string, date } from "yup";

let schema = object({
  first_name: string()
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .required("Please fill out this field.")
    .min(3, "Atleast 3 characters long.")
    .ensure(),
  last_name: string()
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .required("Please fill out this field.")
    .min(3, "Atleast 3 characters long.")
    .ensure(),
  email: string()
    .required("Please fill out this field.")
    .email("Please enter a valid email address.")
    .ensure(),
  subject: string()
    .test((v) => (v.length > 5 ? true : false))
    .defined("Please select an option")
    .required("Please fill out this field."),
  message: string()
    .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
    .required("Please fill out this field.")
    .ensure(),
  phone: string()
    .required("Please fill out this field.")
    .min(9, "Phone number too short.")
    .max(18, "Phone number too long."),
  created_on: date().default(() => new Date()),
});

export default schema;
