import { useState, useEffect } from "react";

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const hasCompleted = localStorage.getItem("onboardingCompleted");
    if (hasCompleted) {
      setIsCompleted(true);
    }
  }, []);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setIsCompleted(true);
      localStorage.setItem("onboardingCompleted", "true");
    }
  };

  const steps = [
    "Selamat datang di Website kami!",
    "Website ini hanya sekedar tampilan saja",
    "Terima kasih! Anda siap membuka website ini.",
  ];

  if (isCompleted) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50  h-full flex flex-col justify-center items-center bg-black/30">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <p className="mb-4">{steps[step]}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={nextStep}
        >
          {step < steps.length - 1 ? "Lanjut" : "Selesai"}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
