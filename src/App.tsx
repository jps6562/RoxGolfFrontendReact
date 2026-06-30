import { RouterProvider } from 'react-router-dom'
import { CommissionerProvider } from '@/context/CommissionerContext'
import { router } from '@/router'

export default function App() {
  return (
    <CommissionerProvider>
      <RouterProvider router={router} />
    </CommissionerProvider>
  )
}
