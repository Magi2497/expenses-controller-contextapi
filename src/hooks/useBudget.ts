import { useContext } from 'react'
import { BudgetContext } from '../context/BudgetContext'

// We use this custom hook to export the context in other components
export const useBudget = () => {
  const context = useContext(BudgetContext)
  if (!context) {
    throw new Error('useBudget must be used whithin a BudgetProvider')
  }
  return context
}
