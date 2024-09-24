import "./App.css";
import { DataProvider } from "./context/DataContext";
import { WizardProvider, useWizard } from "./context/WizardContext";
import { LanguageProvider } from "./context/LanguageContext";
import NormalMode from "./components/NormalMode";
import SWMG from "./components/cmd-components/SWMG";
const AppContent = () => {
  const { isWizardActive } = useWizard();
  return (
    <div className="dark:bg-dracula-bg">
      {isWizardActive ? <SWMG /> : <NormalMode />}
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <DataProvider>
        <WizardProvider>
          <AppContent />
        </WizardProvider>
      </DataProvider>
    </LanguageProvider>
  );
};

export default App;
