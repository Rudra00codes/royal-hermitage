
import { Navigate } from "react-router-dom";

// Redirect from the Index page to the Home page
const Index = () => {
  return <Navigate to="/" replace />;
};

export default Index;
