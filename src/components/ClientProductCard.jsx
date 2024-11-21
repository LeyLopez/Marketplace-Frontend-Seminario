import React from "react";

export const ClientProductCard = ({name, description, quantity, category, price, seller}) => {
  return (
    <div>
      <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text">
            {description}
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Precio: {price}</li>
          <li class="list-group-item">Categoria: {category}</li>
          <li class="list-group-item">Disponibles: {quantity}</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Vendedor: {seller}
          </a>
        </div>
        <div className="card-body">
            <button>Agregar producto al carrito</button>
        </div>
      </div>
    </div>
  );
};
