import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const links = [
  { label: "link.about", route: "/about" },
  { label: "link.contact", route: "/contact" },
  { label: "link.legal", route: "/legal-notice" },
  { label: "link.news", route: "/news" },
];

export const policy = [
  { label: "terms", route: "/terms-of-use" },
  // { label: "cookie-settings", route: "/privacy-policy" },
  // { label: "cookie-policy", route: "/privacy-policy" },
  { label: "policy", route: "/privacy-policy" },
];

export const enterprise = [
  { label: "link.about", route: "/terms-of-use" },
  { label: "link.contact", route: "/privacy-policy" },
  { label: "link.career", route: "/privacy-policy" },
  { label: "link.blog", route: "/privacy-policy" },
];
export const services = [
  { label: "services.mad", route: "/terms-of-use" },
  { label: "services.wd", route: "/privacy-policy" },
  { label: "services.dm", route: "/privacy-policy" },
  { label: "services.ui", route: "/privacy-policy" },
];

export const icons = [
  { url: "https://www.linkedin.com", icon: <LinkedInIcon fontSize="large" /> },

  { url: "https://www.twitter.com", icon: <TwitterIcon fontSize="large" /> },

  { url: "https://www.instagram.com", icon: <InstagramIcon fontSize="large" /> },
  { url: "https://www.facebook.com", icon: <FacebookIcon fontSize="large" /> },

  { url: "https://www.youtube.com", icon: <YouTubeIcon fontSize="large" /> },
];
