import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const links = [
  { label: "link.about", route: "/about" },
  { label: "link.contact", route: "/contact" },
  { label: "link.legal", route: "/legal-notice" },
  { label: "link.news", route: "/news" },
];

export const policy = [
  { label: "terms", route: "/terms-of-use" },
  { label: "policy", route: "/privacy-policy" },
];

export const icons = [
  { url: "https://www.facebook.com", icon: <FacebookIcon fontSize="large" /> },
  { url: "https://www.twitter.com", icon: <TwitterIcon fontSize="large" /> },
  { url: "https://www.instagram.com", icon: <InstagramIcon fontSize="large" /> },
  { url: "https://www.youtube.com", icon: <YouTubeIcon fontSize="large" /> },
];

