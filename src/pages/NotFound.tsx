import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function NotFound() {
  const location = useLocation();

  return (
    <Box textAlign="center" fontSize="2rem">
      <p>
        <b>Page "</b> 
        <code>{location.pathname}</code>
        <b>" Not found!</b> 
      </p>
      <Link to="/Integrify-Finland-BoF-frontend-project-basic">Click me to go Home page</Link>
    </Box>
  );
}

export default NotFound;
