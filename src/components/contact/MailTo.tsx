import React from 'react';
import '../footer/Footer.css'

interface MailToProps {
  mailto: string;
  label: string;
}

const MailTo: React.FC<MailToProps> = ({ mailto, label }) => {
  return (
    <a
      href='#'
      className="Link ms-1"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </a>
  );
};

export default MailTo;
