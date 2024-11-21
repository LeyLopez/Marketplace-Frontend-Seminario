import React from 'react'

export const EditProduct = () => {
  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="col-md-3 ">
        <h1 className="h3 mb-3 fw-normal">Modificar producto</h1>
        <form class="row g-3">
          <div class="col-md-6">
            <label class="form-label">
              Nombre
            </label>
            <input
              type="email"
              class="form-control"
              name='name'
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
              name='quantity'

            />
          </div>

          <div class="col-md-6">
            <label class="form-label">
              Precio
            </label>
            <input type="number" min="10000" step="any" class="form-control" name='price'/>
          </div>
          <div class="col-md-6">
            <label class="form-label">
              Categoría
            </label>
            <select
              class="form-select control"
              required
            >
              <option selected disabled>
                Ninguno
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="3">Four</option>
              <option value="3">Five</option>
            </select>
          </div>

          <div class="mb-3">
            <label class="form-label">
              Descripción
            </label>
            <textarea
              class="form-control"
              name='description'
              placeholder="Modifica la descripción"
            ></textarea>
            <div class="invalid-feedback">Descripción</div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Modificar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
