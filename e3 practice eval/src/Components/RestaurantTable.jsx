import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

function RestaurantTable({data}) {
  

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Type</th>
          <th>Price Starts From</th>
        </tr>
      </thead>
      <tbody>
        {data&&data.data&&data.data.map((el) => (
          <RestaurantCard
            key={el.id}
            name={el.name}
            rating={el.rating}
            type={el.type}
            price={el.price_starts_from}
          />
        ))}
      </tbody>
    </table>
  );
}

export default RestaurantTable;
