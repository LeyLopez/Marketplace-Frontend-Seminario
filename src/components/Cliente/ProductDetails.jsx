export const ProductDetails = ({ products }) => {
  return (
    <div className="accordion accordion-flush">
      <div className="accordion-item">
        <div className="accordion-body">
          <div className="table-responsive">
            <table className="table table-borderless mb-0">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Descripción</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.quantity}</td>
                    <td>${product.price}</td>
                    <td>${product.price * product.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};