import React from 'react';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

// const apiUrl = import.meta.env.VITE_API_URL;

const ContactForm: React.FC = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const [dialogOpen, setDialogOpen] = useState(false);
  // const [dialogMessage, setDialogMessage] = useState('');
  // const [dialogTitle, setDialogTitle] = useState('');

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (!formData.name || !formData.email || !formData.message) {
  //       setDialogTitle('Error');
  //       setDialogMessage('All fields are required.');
  //       setDialogOpen(true);
  //       return;
  //     }

  //   axios.post(`${apiUrl}/send-contact-form`, formData)
  //     .then(() => { 
  //       setDialogTitle('Success');
  //       setDialogMessage('Message sent successfully!');
  //       setDialogOpen(true);
  //     })
  //     .catch(() => { 
  //       setDialogTitle('Error');
  //       setDialogMessage('An error occurred while sending the message.');
  //       setDialogOpen(true);
  //     });
  // };

  // const handleClose = () => {
  //   setDialogOpen(false);
  //   setFormData({
  //       name: '',
  //       email: '',
  //       message: '',
  //     });
  // };

  return (
    <>
      <form name="contact" method="POST" data-netlify="true">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>        
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
 
      {/* <form onSubmit={handleSubmit} data-netlify={"true"}>
        <div>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </div>
        <div>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </div>
        <div>
          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleChange}
            margin="normal"
            fullWidth
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 2 }}
        >
          Send
        </Button>
      </form>

      <Dialog open={dialogOpen} onClose={handleClose}>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog> */}
    </>
  );
};

export default ContactForm;
