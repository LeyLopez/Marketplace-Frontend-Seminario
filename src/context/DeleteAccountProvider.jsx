import React, { useState } from 'react'
import { DeleteAccountContext } from './DeleteAccountContext'

export const DeleteAccountProvider = ({children}) => {

 const [showAlert, setShowAlert] = useState(false)
  return (
    <DeleteAccountContext.Provider value={{showAlert, setShowAlert}}>
    {children}
    </DeleteAccountContext.Provider>
  )
}
