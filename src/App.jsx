import { BrowserRouter, Route, Routes } from "react-router";
import DefaultLayout from "./Layouts/DefaultLayouts";
import Homepage from "./Pages/Homepage";
import ChiSiamo from "./Pages/ChiSiamo";
import Prodotti from "./Pages/Prodotti";
import NotFound from "./Pages/NotFound";
import DettagliProdotto from "./Pages/DettagliProdotto";
import { BudgetProvider } from "./contexts/BudgetContext";

function App() {
  return (
    <>
      <BudgetProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/chi-siamo" element={<ChiSiamo />} />
              <Route path="/prodotti" element={<Prodotti />} />
              <Route path="/prodotti/:id" element={<DettagliProdotto />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BudgetProvider>
    </>
  );
}

export default App;
