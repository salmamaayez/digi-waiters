import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Step1 from './view/step1';
import Step2 from './view/step2';

export default function NewOrderProcess() {
  const [step, setStep] = useState(1);
  const [selectedTable, setSelectedTable] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleNext = (table) => {
    setSelectedTable(table);
    setStep(2);
    navigate('/step2');
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
      navigate('/step1');
    }
  };

  const handleFinish = () => {
    // Logique pour finaliser la commande
    console.log('Order placed for', selectedTable);
    // Redirection vers une page de confirmation ou réinitialisation de l'état
  };

  // Mettre à jour l'étape en fonction de l'URL lors du chargement du composant
  React.useEffect(() => {
    if (location.pathname === '/step2') {
      setStep(2);
    } else if (location.pathname === '/step1') {
      setStep(1);
    }
  }, [location.pathname]);

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onFinish={handleFinish} onBack={handleBack} selectedTable={selectedTable} />}
    </div>
  );
}
