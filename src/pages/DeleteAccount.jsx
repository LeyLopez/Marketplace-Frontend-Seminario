import React, { useContext } from 'react'
import { DeleteAccountContext } from '../context/DeleteAccountContext'

export const DeleteAccount = () => {
  const {setShowAlert} = useContext(DeleteAccountContext)

  return (
    <div className="d-flex justify-content-center pt-5">
      <div className="col-md-3 ">
      <h1 className="h3 mb-3 fw-normal">Eliminar cuenta</h1>
      </div>
      <button onClick={()=>setShowAlert(prev)=(!prev)} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Eliminar cuenta
</button>
    </div>
  )
}
