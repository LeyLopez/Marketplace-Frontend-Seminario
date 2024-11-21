import { Products } from "../Cliente/Products";

export function SellerProducts() {
  return (
    <div style={{
        alignItems:"center",
          display: "flex",
          flexDirection: "column",
      }}>
      <h1>Mis productos</h1>
      <Products />
    </div>
  );
}
