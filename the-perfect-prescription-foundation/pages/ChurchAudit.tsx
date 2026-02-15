import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChurchAudit: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "Review: Do you have an established method for evaluating your existing counseling services?",
      desc: "Without evaluation, strengths and areas for improvement remain invisible. Our framework begins here."
    },
    {
      q: "Departmentalize: Does your church have specialized departments for Marriage, Family, and Youth?",
      desc: "Structure is key to sustainability. We help design departments tailored to your congregation's needs."
    },
    {
      q: "Empowerment: Do you offer a one-day conference aimed at breaking down mental health stigmas?",
      desc: "The Mental Health Experience is a dynamic call to action for individuals ready to serve."
    },
    {
      q: "First Aid: Do you have dedicated mental health training initiatives for your servant leaders?",
      desc: "MH First Aid inspires and equips those on the front lines of your community."
    },
    {
      q: "Partnerships: Are you currently collaborating with licensed psychologists and psychiatrists?",
      desc: "Referral systems ensure every individual receives the appropriate level of clinical care."
    },
    {
      q: "Technology: Do you utilize a secure Electronic Medical Record (EMR) system for your ministry?",
      desc: "Managing records, scheduling, and billing securely is critical for ethical and professional support."
    }
  ];

  const handleAnswer = (val: boolean) => {
    setAnswers({ ...answers, [currentStep]: val });
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const noCount = Object.values(answers).filter(v => !v).length;
    if (noCount >= 4) return { 
      status: "High Need for Infrastructure", 
      color: "text-amber", 
      desc: "Your church lacks the necessary clinical-spiritual infrastructure to safely and effectively handle the mental health crisis. You are likely operating in a reactive state." 
    };
    if (noCount >= 2) return { 
      status: "Systemic Growth Opportunity", 
      color: "text-teal", 
      desc: "You have hearts for healing, but lack the 'Plug & Play' systems required to ensure clinical safety, professional referral, and data security." 
    };
    return { 
      status: "Ready for Optimization", 
      color: "text-forest", 
      desc: "You have strong foundations. Our partnership can help optimize your EMR systems and deepen your faculty alliances." 
    };
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className="pt-64 pb-44 px-4 bg-[#F5F1EB] min-h-screen flex items-center justify-center">
        <div className="max-w-3xl w-full bg-white p-12 lg:p-20 rounded-[4rem] shadow-2xl border border-navy/5 animate-fade-in text-center">
          <div className={`text-xs font-black uppercase tracking-[0.4em] mb-4 ${result.color}`}>Diagnostic Result</div>
          <h2 className="text-4xl lg:text-6xl font-heading font-black text-navy mb-8 leading-tight tracking-tighter">
            {result.status}.
          </h2>
          <p className="text-xl text-navy/60 mb-12 font-light leading-relaxed max-w-xl mx-auto">
            {result.desc}
          </p>
          <div className="bg-sand/30 p-12 rounded-[3rem] border border-navy/5 mb-12 text-left">
             <h4 className="text-sm font-black text-navy mb-4 uppercase tracking-widest">Next Action Step</h4>
             <p className="text-lg font-medium text-navy/70 italic">"Book a discovery intake call to review your audit results and start building your mental health department."</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="bg-navy text-sand font-black px-12 py-7 rounded-3xl shadow-xl hover:bg-forest transition-all transform hover:scale-105 text-2xl">
              Start an Intake Call
            </Link>
            <button onClick={() => { setShowResult(false); setCurrentStep(0); setAnswers({}); }} className="text-navy/40 font-bold hover:text-navy transition text-xl">Retake Audit</button>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="pt-52 pb-32 px-4 bg-[#F5F1EB] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24 space-y-8">
          <Link to="/programs/church" className="inline-flex items-center text-navy/40 hover:text-navy transition font-black uppercase tracking-widest text-xs">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
            Back to Overview
          </Link>
          <h1 className="text-5xl lg:text-8xl font-heading font-black text-navy leading-none tracking-tighter">
            System <span className="text-forest italic">Audit.</span>
          </h1>
          <p className="text-2xl text-navy/60 font-light">Does your church have the systems required for soul-deep restoration?</p>
        </div>

        <div className="bg-white p-12 lg:p-24 rounded-[5rem] shadow-2xl border border-navy/5 relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-3 bg-sand">
            <div className="h-full bg-teal transition-all duration-700" style={{ width: `${progress}%` }}></div>
          </div>

          <div key={currentStep} className="animate-fade-in space-y-16">
            <div className="space-y-10">
              <span className="text-xs font-black text-teal uppercase tracking-[0.5em]">Question 0{currentStep + 1} of 0{questions.length}</span>
              <h3 className="text-4xl lg:text-5xl font-heading font-black text-navy leading-[1.1] italic">
                {questions[currentStep].q}
              </h3>
              <p className="text-2xl text-navy/40 font-light leading-relaxed">
                {questions[currentStep].desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-12">
              <button 
                onClick={() => handleAnswer(true)}
                className="bg-sand hover:bg-teal text-navy font-black py-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all transform hover:scale-105 text-2xl text-center border border-navy/5"
              >
                Yes, we have this.
              </button>
              <button 
                onClick={() => handleAnswer(false)}
                className="bg-navy text-sand hover:bg-forest font-black py-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all transform hover:scale-105 text-2xl text-center"
              >
                No, we need this.
              </button>
            </div>
          </div>
        </div>

        <div className="mt-24 text-center opacity-30">
          <p className="text-xs font-black uppercase tracking-[0.4em]">The Perfect Prescription Foundation &bull; Blueprint Audit</p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default ChurchAudit;