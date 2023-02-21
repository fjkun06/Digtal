import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const links = [
  { label: "link.about", route: "/about" },
  { label: "link.contact", route: "/contact" },
  { label: "link.legal", route: "/legal-notice" },
  { label: "link.news", route: "/news" }
];

export const policy = [
  { label: "terms", route: "/terms-of-use" },
  // { label: "cookie-settings", route: "/privacy-policy" },
  // { label: "cookie-policy", route: "/privacy-policy" },
  { label: "policy", route: "/privacy-policy" }
];

export const enterprise = [
  { label: "link.about", route: "/about-us" },
  { label: "link.contact", route: "/contact-us" },
  { label: "link.career", route: "/career" },
  { label: "link.blog", route: "/blog" }
];
export const services = [
  { label: "services.mad", route: "/services/software-development" },
  { label: "services.wd", route: "/services/software-development" },
  { label: "services.dm", route: "/services/digital-marketing" },
  { label: "services.ui", route: "/services/ui-ux-design" }
];

export const icons = [
  { url: "https://www.linkedin.com", icon: <LinkedInIcon fontSize="large" /> },

  { url: "https://www.twitter.com", icon: <TwitterIcon fontSize="large" /> },

  {
    url: "https://www.instagram.com",
    icon: <InstagramIcon fontSize="large" />
  },
  { url: "https://www.facebook.com", icon: <FacebookIcon fontSize="large" /> },

  { url: "https://www.youtube.com", icon: <YouTubeIcon fontSize="large" /> }
];
