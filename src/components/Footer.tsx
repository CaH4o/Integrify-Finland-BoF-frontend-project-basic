import {
  AppBar,
  Box,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <AppBar
      position="static"
      color="secondary"
      sx={{ bgcolor: "background.default" }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box margin="1rem">
          <Typography>Copyright &copy; Nov 2022, Integrify task</Typography>
        </Box>
        <Box
          margin="1rem"
          component="form"
          autoComplete="off"
          gap={1}
          onSubmit={(e) => {
            e.preventDefault();
            if (message && email) {
              window.open(
                `mailto:${email}?subject="countries"&body=${message}`
              );
            }
          }}
        >
          <TextField
            type="text"
            label="Text of a message"
            placeholder="Dear reciver ..."
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></TextField>
          <TextField
            type="email"
            label="Your e-mail"
            placeholder="email@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></TextField>
          <Button
            sx={{ m: 1 }}
            type="submit"
            variant="contained"
            startIcon={<EmailIcon />}
          >
            Send e-mail
          </Button>
        </Box>
        <Box margin="1rem">
          <Typography>Social media</Typography>
          <Link width="50" href="https://www.instagram.com/" target="_blank">
            <InstagramIcon />
          </Link>
          <Link width="50" href="https://www.facebook.com/" target="_blank">
            <FacebookIcon />
          </Link>
          <Link width="50" href="https://linkedin.com/" target="_blank">
            <LinkedInIcon />
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Footer;
