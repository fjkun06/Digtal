import { object, string, date } from 'yup';

let schema = object({
   first_name: string()
      .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .required('Please fill out this field.')
      // Bitte füllen Sie das Feld aus. // Das Feld darf nicht leer sein
      // Veuillez remplir le champ.
      .min(3, 'Atleast 3 characters long.')
      // Das Feld muss mindestens 3 Charakter enthalten.
      // le champ doit contenir minimum 3 charactères.
      .ensure(),
   last_name: string()
      .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .required('Please fill out this field.')
      // Bitte füllen Sie das Feld aus. // Das Feld darf nicht leer sein.
      // Veuillez remplir le champ.
      .min(3, 'Atleast 3 characters long.')
      // Das Feld muss mindestens 3 Charakter enthalten.
      // le champ doit contenir minimum 3 charactères.
      .ensure(),
   email: string()
      .required('Please fill out this field.')
      // Bitte füllen Sie das Feld aus. // Das Feld darf nicht leer sein.
      // Veuillez remplir le champ.
      .email('Please enter a valid email address.')
      // Bitte geben Sie eine gültige Email ein.
      // Veuillez entrer une adresse mail valide.
      .ensure(),
   subject: string()
      .test((v) => (v.length > 5 ? true : false))
      .defined('Please select an option')

      // Bitte wählen Sie eine Option.
      // Veuillez sélectionner une option.
      .required('Please fill out this field.'),
   // Bitte füllen Sie das Feld aus. // Das Feld darf nicht leer sein.
   // Veuillez remplir le champ.
   message: string()
      .transform((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .required('Please fill out this field.')
      // Bitte füllen Sie das Feld aus. // Das Feld darf nicht leer sein.
      // Veuillez remplir le champ.
      .ensure(),
   phone: string()
      .required('Please fill out this field.')
      // Bitte füllen Sie das Feld aus. // Das Feld darf nicht leer sein.
      // Veuillez remplir le champ.
      .min(9, 'Phone number too short.')
      // Telefonnummer zu kurz.
      // Numéro de téléphone très court.
      .max(18, 'Phone number too long.'),
   // Telefonnummer zu lang.
   // Numéro de téléphone très long.
   created_on: date().default(() => new Date())
});

export default schema;
