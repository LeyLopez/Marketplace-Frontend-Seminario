import React from 'react'

export const DeleteProduct = () => {
  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="col-md-3 ">
        <h1 className="h3 mb-3 fw-normal">Eliminar producto</h1>
        <form class="row g-3">
          <div class="col-12">
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

          <div class="col-12">
            <button type="submit" class="btn btn-danger">
              Eliminar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
