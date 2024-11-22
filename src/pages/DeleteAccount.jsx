import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const DeleteAccount = () => {
  const navigate = useNavigate();
  const [isConfirming, setIsConfirming] = useState(false);

  const handleDelete = () => {
    setIsConfirming(true);
    // Aquí iría la lógica para eliminar la cuenta
    setTimeout(() => {
      // Simular proceso de eliminación
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="container d-flex pt-5 align-items-center justify-content-center bg-light">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-header bg-danger text-white">
          <h5 className="card-title mb-0">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            Eliminar cuenta
          </h5>
        </div>
        
        <div className="card-body text-center py-4">
          <div className="mb-4">
            <i className="bi bi-person-x-fill text-danger" style={{ fontSize: '48px' }}></i>
          </div>
          
          <h6 className="mb-3">¿Está seguro que desea eliminar su cuenta?</h6>
          <p className="text-muted mb-4">
            Esta acción no se puede deshacer. Se eliminarán todos sus datos y el acceso a los servicios.
          </p>

          {isConfirming ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Eliminando cuenta...</span>
              </div>
            </div>
          ) : (
            <div className="d-flex gap-2 justify-content-center">
              <button
                type="button"
                className="btn btn-outline-secondary px-4"
                onClick={() => navigate(-1)}
                disabled={isConfirming}
              >
                <i className="bi bi-x-lg me-2"></i>
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger px-4"
                onClick={handleDelete}
                disabled={isConfirming}
              >
                <i className="bi bi-trash3 me-2"></i>
                Eliminar cuenta
              </button>
            </div>
          )}
        </div>

        {/* {!isConfirming && (
          <div className="card-footer bg-light text-center py-3">
            <small className="text-muted">
              Si tiene alguna duda, por favor contacte con soporte antes de eliminar su cuenta
            </small>
          </div>
        )} */}
      </div>
    </div>
  );
};