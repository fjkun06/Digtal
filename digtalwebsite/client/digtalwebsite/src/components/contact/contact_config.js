import { Grid, styled } from "@mui/material";
import sx from "@mui/system/sx";

export const CFLGrid = styled(Grid)(
  sx({
    fontSize: "1.5rem",
    textAlign: "center",
    display: "block",
  })
);

//order firstname, last namme,email
export const contactFields = [
  { label: "name.first", index: "first_name", md: 6 },
  { label: "name.last", index: "last_name", md: 6 },
  { label: "email", index: "email", md: 12 },
  { label: "company_name", index: "company_name", md: 12 },
];

export const location = [
  {
    country: "Germany",
    town: "Berlin, Brandenburg",
    street: "Rue 1234.",
    tel: "+49 1234 567 89",
  },
  {
    country: "Cameroun",
    town: "Douala, Littoral",
    street: "Rue 1234.",
    tel: "+237 1234 567 89",
  },
];
