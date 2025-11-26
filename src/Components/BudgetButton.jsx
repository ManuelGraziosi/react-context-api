import { useBudget } from "../contexts/BudgetContext";

function BudgetButton() {
  const { budgetMode, setBudgetMode } = useBudget();

  function handleBudgetClick() {
    // si può fare con ! l'effetto toogle, per chiarezza fuznioen esplicita
    if (budgetMode) {
      setBudgetMode(false);
    } else {
      setBudgetMode(true);
    }
  }

  return (
    <button
      className="btn btn-warning"
      type="button"
      onClick={handleBudgetClick}
    >
      {budgetMode ? "Attiva Modalità Budget" : "Disattiva Modalità Budget"}
    </button>
  );
}

export default BudgetButton;
