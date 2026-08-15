import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { totalPizzas, totalPrice } from "./cartSlice";
import { formatCurrency } from "../../utilities/helpers";

function CartOverview() {
  const pizzas = useSelector(totalPizzas);
  const TotalPrice = useSelector(totalPrice);
  if (!pizzas) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzas === 0 ? "0" : pizzas} Pizzas</span>
        <span>{TotalPrice === 0 ? "€0" : formatCurrency(TotalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
