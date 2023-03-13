import { Grid, styled } from "@mui/material";

export const CFLGrid = styled(Grid)({
  fontSize: "1.5rem",
  textAlign: "center",
  display: "block"
});

//order firstname, last namme,email
export const contactFields = [
  { label: "name.first", index: "first_name", sup: true },
  { label: "name.last", index: "last_name", sup: true },
  { label: "email", index: "email", sup: true },
  { label: "company_name", index: "company_name", sup: false }
];

export const location = [
  {
    country: "Germany",
    town: "Duisburg, Romerstrasse 98",
    street: "44579 Castrop-Rauxel",
    tel: "+49 1771 577 232"
  },
  {
    country: "Cameroun",
    town: "Douala, Littoral",
    street: "Rue 1234.",
    tel: "+237 6509 066 66"
  }
];
