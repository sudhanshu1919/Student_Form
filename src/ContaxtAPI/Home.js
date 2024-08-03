import React from "react";

import { useContext } from "react";
import { UserContext } from "./App";

import Products from "./Products";
import Cart from "./Cart";

function Home() {
  const users = useContext(UserContext);
  return (
    <div>
      <div className="container">
        <div>
          <div class="card mt-5" style={{ width: "18rem" }}>
            <img
              class="card-img-top"
              src={users.stuName.image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h4 class="card-title">{users.stuName.name}</h4>
              <h3 class="card-title">{users.stuName.price}</h3>
              <p class="card-text">{users.stuName.info}</p>
              <a href="#" class="btn btn-primary">
                <Cart />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
