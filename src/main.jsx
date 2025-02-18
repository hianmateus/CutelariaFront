import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'

import GlobalStyles from './styles/GlobalStyles.js'
import { BrowserRouter } from 'react-router-dom'
import AppProvider from './hooks'
import { Elements } from '@stripe/react-stripe-js'
import stripePromise from './config/stripeConfig.js'
import { Router } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <Elements stripe={stripePromise}>
        <BrowserRouter>
        <Router/>
        </BrowserRouter>
      </Elements>
      <GlobalStyles />
      <ToastContainer autoClose={1500} theme='dark' />
    </AppProvider>
  </StrictMode>,
)
