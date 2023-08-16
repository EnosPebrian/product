import { useNavigate } from "react-router-dom";

export default function Redirect() {
  const navigate = useNavigate();
  return navigate(`/market`);
}
