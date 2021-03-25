import Calculator from "./components/Calculator/Calculator";
import Display from "./components/Display/Display";
import CalcContextProvider from "./contexts/CalcContext";

export default function App() {
  return (
    <CalcContextProvider>
      <Display />
      <Calculator />
    </CalcContextProvider>
  );
}
