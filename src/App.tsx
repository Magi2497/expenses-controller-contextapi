import { useEffect, useMemo } from 'react'
import BudgetForm from './components/BudgetForm'
import { useBudget } from './hooks/useBudget'
import BudgetTracker from './components/BudgetTracker'
import ExpenseModal from './components/ExpenseModal'
import ExpenseList from './components/ExpenseList'
import FillterByCategory from './components/FillterByCategory'

function App() {
  const { state } = useBudget()

  const isValidBudget = useMemo(() => state.budget > 0, [state.budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
    localStorage.setItem('budget', state.budget.toString())
  }, [state.budget, state.expenses])

  return (
    <>
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Expenses Planner
        </h1>
      </header>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
      </div>

      {isValidBudget && (
        <main className="max-w-3xl mx-auto py-10">
          <FillterByCategory />
          <ExpenseList />
          <ExpenseModal />
        </main>
      )}
    </>
  )
}

export default App
