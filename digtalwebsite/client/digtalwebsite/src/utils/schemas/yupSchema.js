import { object, string } from 'yup';

let schema = object({
   first_name: string()
      .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .required('Please fill out this field.')
    
      .min(3, 'Atleast 3 characters long.')
     
      .ensure(),
   last_name: string()
      .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .required('Please fill out this field.')
    
      .min(3, 'Atleast 3 characters long.')
      
      .ensure(),
   company_name: string()
      .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .required('Please fill out this field.')
    
      .min(3, 'Atleast 3 characters long.')
      
      .ensure(),
   email: string()
      .required('Please fill out this field.')
     
      .email('Please enter a valid email address.')

      .ensure(),
   subject: string().nullable(),
  
   message: string()
      .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .required('Please fill out this field.')
     
      .ensure(),
   phone_number: string()
      .required('Please fill out this field.')
     
      .min(9, 'Phone number too short.')
      
      .max(18, 'Phone number too long.'),
  
});

export default schema;
