import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

export const Review = () => {
  const navigate = useNavigate();
  
  // Estado para la reseña
  const [review, setReview] = useState({
    rating: 5,
    comment: '',
    anonymous: false
  });

  // Estado para los productos de la orden (ejemplo)
  const [orderProducts] = useState([
    {
      id: 1,
      name: "Smartphone",
      image: "https://via.placeholder.com/150",
      price: 799.99,
    },
    {
      id: 2,
      name: "Laptop",
      image: "https://via.placeholder.com/150",
      price: 1299.99,
    }
  ]);

  // Estado para controlar qué productos ya tienen reseña
  const [reviewedProducts, setReviewedProducts] = useState(new Set());

  const handleRatingChange = (productId, value) => {
    setReview(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        rating: value
      }
    }));
  };

  const handleCommentChange = (productId, event) => {
    setReview(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        comment: event.target.value
      }
    }));
  };

  const handleAnonymousChange = (productId) => {
    setReview(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        anonymous: !prev[productId]?.anonymous
      }
    }));
  };

  const handleSubmitReview = (productId) => {
    // Aquí iría la lógica para enviar la reseña al backend
    console.log('Reseña enviada:', review[productId]);
    
    // Marcar el producto como reseñado
    setReviewedProducts(prev => new Set([...prev, productId]));
    
    // Mostrar mensaje de éxito
    alert('¡Gracias por tu reseña!');
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Escribir Reseñas</h2>
            <button 
              className="btn btn-outline-secondary"
              onClick={() => navigate('/orders')}
            >
              Volver a mis compras
            </button>
          </div>

          {orderProducts.map((product) => (
            <div key={product.id} className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-3">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-9">
                    <h5 className="card-title mb-3">{product.name}</h5>
                    
                    {!reviewedProducts.has(product.id) ? (
                      <>
                        <div className="mb-3">
                          <label className="form-label">Calificación</label>
                          <div className="d-flex gap-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <button
                                key={star}
                                className={`btn ${
                                  (review[product.id]?.rating || 5) >= star
                                    ? 'btn-warning'
                                    : 'btn-outline-warning'
                                }`}
                                onClick={() => handleRatingChange(product.id, star)}
                              >
                                ★
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Comentario</label>
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Comparte tu experiencia con este producto..."
                            value={review[product.id]?.comment || ''}
                            onChange={(e) => handleCommentChange(product.id, e)}
                          ></textarea>
                        </div>

                        <div className="mb-3 form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`anonymous-${product.id}`}
                            checked={review[product.id]?.anonymous || false}
                            onChange={() => handleAnonymousChange(product.id)}
                          />
                          <label className="form-check-label" htmlFor={`anonymous-${product.id}`}>
                            Publicar como anónimo
                          </label>
                        </div>

                        <button
                          className="btn btn-primary"
                          onClick={() => handleSubmitReview(product.id)}
                          disabled={!review[product.id]?.comment}
                        >
                          Enviar reseña
                        </button>
                      </>
                    ) : (
                      <div className="alert alert-success">
                        ¡Gracias por tu reseña!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
