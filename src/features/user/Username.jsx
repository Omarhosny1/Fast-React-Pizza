import { useSelector } from "react-redux";
import { username } from "../cart/cartSlice";

function Username() {
  const userName = useSelector(username);
  if (!userName) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
}

export default Username;
