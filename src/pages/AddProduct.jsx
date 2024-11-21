import React from "react";

export const AddProduct = () => {
  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="col-md-3 ">
        <h1 className="h3 mb-3 fw-normal">Agregar producto</h1>
        <form class="row g-3">
          <div class="col-md-6">
            <label  class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              name="name"
              required
            />
          </div>
          <div class="col-md-6">
            <label class="form-label">
              Cantidades disponibles
            </label>
            <input
              type="number"
              class="form-control"
              name="quantity"
              required
            />
          </div>

          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Precio
            </label>
            <input type="number" class="form-control" id="inputCity" required />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Categoría
            </label>
            <select
              class="form-select control"
              aria-label="Default select example"
              required
            >
              <option selected disabled>
                Ninguno
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Four</option>
              <option value="5">Five</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="validationTextarea" class="form-label">
              Descripción
            </label>
            <textarea
              class="form-control"
              name="description"
              placeholder="Required example textarea"
              required
            ></textarea>
            <div class="invalid-feedback">Descripción</div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
