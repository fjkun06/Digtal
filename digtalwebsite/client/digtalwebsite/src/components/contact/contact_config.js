import { Grid, styled } from "@mui/material";
import sx from "@mui/system/sx";

export const CFLGrid = styled(Grid)(
  sx({
    fontSize: "1.5rem",
    textAlign: "center",
    display: "block"
  })
);

//order firstname, last namme,email
export const contactFields = [
  { label: "name.first", index: "first_name",sup:true },
  { label: "name.last", index: "last_name",sup:true },
  { label: "email", index: "email",sup:true },
  { label: "company_name", index: "company_name",sup:false }
];

export const location = [
  {
    country: "Germany",
    town: "Berlin, Brandenburg",
    street: "Rue 1234.",
    tel: "+49 1234 567 89"
  },
  {
    country: "Cameroun",
    town: "Douala, Littoral",
    street: "Rue 1234.",
    tel: "+237 1234 567 89"
  }
];
