import React from "react";
const ContactModal = ({disp}) => {
  const [visibility, setVisibility] = React.useState(true);

  return (
    <div
      className="contact-modal"
      style={{ display: visibility && disp ? "grid" : "none" }}
      onClick={() => setVisibility(false)}
    >
      heu
    </div>
  );
};

export default ContactModal;
