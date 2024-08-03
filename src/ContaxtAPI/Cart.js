import React from "react";
import { useContext } from "react";
import { UserContext } from "./App";
function Cart() {
  const users = useContext(UserContext);
  return (
    <>
      <button
        class="btn btn-primary"
        onClick={() => {
          users.setStuName({
            name: "Sofas",
            price: "INR : 55,000/-",
            info: "One of the many things that make a house a home is a beautiful, comfortable sofa or armchair.",
            image:
              "https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FSofa.png%3Fcontext%3DbWFzdGVyfHJvb3R8MTIzMzcxOXxpbWFnZS9wbmd8aGRjL2gyYi85MDM2NDQ3MDU1OTAyLnBuZ3w1NDFhOTBhNGVmNjQyYTQ1MGM1NTNiOGFkYzVmMGUwZDUwNzczOWQwZGRkN2I5ZjY1MGQ2ZDY0NjRlNzVkNTFl",
          });
        }}
      >
        Update Cart
      </button>
    </>
  );
}

export default Cart;
