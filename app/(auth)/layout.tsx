import React, { ReactNode } from 'react'
import { Toaster } from 'sonner'

const Authlayout = async ({children}: {children:ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated()

    if(isUserAuthenticated) {
       redirect('/')
    }


  return (
    <div className='auth-layout'>{children}
     <Toaster/>
    </div>
   
  )
}

export default Authlayout