import { createContext, useContext, useState } from 'react'

interface CommissionerContextType {
  isCommissioner: boolean
  toggle: () => void
}

const CommissionerContext = createContext<CommissionerContextType>({
  isCommissioner: false,
  toggle: () => {},
})

export function CommissionerProvider({ children }: { children: React.ReactNode }) {
  const [isCommissioner, setIsCommissioner] = useState(false)
  const toggle = () => setIsCommissioner(prev => !prev)

  return (
    <CommissionerContext.Provider value={{ isCommissioner, toggle }}>
      {children}
    </CommissionerContext.Provider>
  )
}

export function useCommissioner() {
  return useContext(CommissionerContext)
}
