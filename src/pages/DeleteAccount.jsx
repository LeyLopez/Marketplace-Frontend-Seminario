
import { ClientNavbar } from "../components/Cliente/ClientNavbar";

export const DeleteAccount = () => {
  return (
    <>
    <ClientNavbar></ClientNavbar>
    <div class name="modal">
      <div className="d-flex justify-content-center pt-5 ">
        <div className="col-md-3 border border-primary-5 padding padding-6">
          <div className="modal-content">   
            <div className="modal-header">
              <h5 className="modal-title">Eliminar cuenta</h5>
            </div>
            <div className="modal-body">
              <p>¿Está seguro de eliminar su cuenta?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button type="button" className="btn btn-danger">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
      
    </>
  );
};
