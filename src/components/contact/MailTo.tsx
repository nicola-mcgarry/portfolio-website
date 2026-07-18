import React from 'react';
import '../footer/Footer.css'

interface MailToProps {
  mailto: string;
  label: React.ReactNode;
  className?: string;
}

const MailTo: React.FC<MailToProps> = ({ mailto, label, className }) => {
  return (
    <a
      href='#'
      className={className}
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
