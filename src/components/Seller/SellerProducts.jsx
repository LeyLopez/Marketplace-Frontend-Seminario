import { Products } from "../Cliente/Products";

export function SellerProducts({title}) {
  return (
    <div style={{
        alignItems:"center",
          display: "flex",
          flexDirection: "column",
      }}>
      <h1>{title}</h1>
      <Products />
    </div>
  );
}
