import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, CheckCircle, Zap, Shield, Star, QrCode, Copy, Check, Loader2, Image as ImageIcon } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { db } from '../firebase';
import { collection, addDoc, query, where, onSnapshot, limit } from 'firebase/firestore';
import { PaymentPlan, PaymentRequest } from '../types';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const PLANS: PaymentPlan[] = [
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 19,
    duration: 'month',
    description: 'Perfect for short-term intensive practice.'
  },
  {
    id: 'quarterly',
    name: '3-Month Plan',
    price: 49,
    duration: '3 months',
    description: 'Most popular for career switchers.'
  },
  {
    id: 'lifetime',
    name: 'Lifetime Access',
    price: 149,
    duration: 'forever',
    description: 'One-time payment for permanent access.'
  }
];

const BANK_INFO = {
  name: 'VIETCOMBANK',
  accountName: 'PHAM MINH HIEP',
  accountNumber: '1012345678',
  qrUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020101021138540010A00000072701240006970436011010123456780208QRIBFTTA53037045405190005802VN62180814PREMIUM_USERID6304ABCD' // Placeholder QR
};

export default function Upgrade() {
  const navigate = useNavigate();
  const { user, profile, role } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<PaymentPlan | null>(null);
  const [step, setStep] = useState<'plans' | 'payment' | 'pending'>('plans');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [pendingRequest, setPendingRequest] = useState<PaymentRequest | null>(null);

  useEffect(() => {
    if (!user) return;

    const q = query(
      collection(db, 'paymentRequests'),
      where('userId', '==', user.uid),
      where('status', '==', 'pending'),
      limit(1)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        setPendingRequest({ id: snapshot.docs[0].id, ...snapshot.docs[0].data() } as PaymentRequest);
        setStep('pending');
      } else {
        setPendingRequest(null);
        if (step === 'pending') setStep('plans');
      }
    });

    return () => unsubscribe();
  }, [user]);

  const transferCode = `PREMIUM_${user?.uid?.slice(0, 8).toUpperCase()}`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmitPayment = async () => {
    if (!user || !profile || !selectedPlan) return;

    setIsSubmitting(true);
    try {
      const requestData: Omit<PaymentRequest, 'id'> = {
        userId: user.uid,
        userName: profile.name,
        userEmail: profile.email,
        amount: selectedPlan.price,
        planId: selectedPlan.id,
        planName: selectedPlan.name,
        transferCode,
        status: 'pending',
        createdAt: Date.now(),
        updatedAt: Date.now()
      };

      await addDoc(collection(db, 'paymentRequests'), requestData);
      setStep('pending');
    } catch (err) {
      console.error('Error submitting payment:', err);
      alert('Failed to submit payment request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (role === 'premium' || role === 'admin') {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-[3rem] p-12 text-center shadow-xl">
            <div className="w-20 h-20 bg-yellow-50 text-yellow-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Star size={40} fill="currentColor" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">You're Premium!</h2>
            <p className="text-gray-500 mb-8">You already have full access to all topics and features. Keep learning!</p>
            <button onClick={() => navigate('/topics')} className="w-full py-4 bg-black text-white rounded-2xl font-bold hover:bg-gray-800 transition-all">
              Back to Practice
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={step === 'payment' ? () => setStep('plans') : () => navigate('/topics')}
            className="flex items-center gap-2 text-gray-500 hover:text-black mb-10 transition-colors"
          >
            <ArrowLeft size={20} />
            {step === 'payment' ? 'Back to Plans' : 'Back to Practice'}
          </button>

        {step === 'plans' && (
          <>
            <div className="text-center mb-16">
              <div className="inline-flex p-4 bg-yellow-50 text-yellow-600 rounded-3xl mb-6">
                <Sparkles size={48} />
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                Unlock Full Access
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Upgrade to Premium to unlock all 85+ IT communication scenarios and accelerate your career.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {PLANS.map((plan) => (
                <motion.div
                  key={plan.id}
                  whileHover={{ y: -4 }}
                  className={`bg-white p-8 rounded-[2.5rem] border-2 transition-all cursor-pointer flex flex-col ${
                    selectedPlan?.id === plan.id ? 'border-black shadow-lg' : 'border-transparent shadow-sm'
                  }`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-black text-gray-900">${plan.price}</span>
                    <span className="text-gray-400 text-sm">/{plan.duration}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{plan.description}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPlan(plan);
                      setStep('payment');
                    }}
                    className={`w-full py-4 rounded-2xl font-bold transition-all ${
                      selectedPlan?.id === plan.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Select Plan
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap size={20} className="text-blue-500" />
                Premium Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FeatureItem text="85+ Scenario-based topics" />
                <FeatureItem text="Unlimited AI feedback" />
                <FeatureItem text="Unlimited Voice Practice" />
                <FeatureItem text="BrSE, Tester, & Dev Packs" />
                <FeatureItem text="Priority Support" />
                <FeatureItem text="Save Learning History" />
              </div>
            </div>
          </>
        )}

        {step === 'payment' && selectedPlan && (
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] p-10 shadow-xl border border-gray-100"
            >
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-gray-900 mb-2">Scan to Pay</h2>
                <p className="text-gray-500">Please transfer the amount below to activate your premium account.</p>
              </div>

              <div className="flex flex-col md:flex-row gap-10 items-center justify-center mb-10">
                <div className="p-4 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
                  <img 
                    src={BANK_INFO.qrUrl.replace('PREMIUM_USERID', transferCode)} 
                    alt="Payment QR" 
                    className="w-48 h-48 rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="space-y-6 flex-1 w-full">
                  <PaymentDetail label="Bank" value={BANK_INFO.name} />
                  <PaymentDetail label="Account Name" value={BANK_INFO.accountName} />
                  <PaymentDetail label="Account Number" value={BANK_INFO.accountNumber} onCopy={() => handleCopy(BANK_INFO.accountNumber)} />
                  <PaymentDetail label="Amount" value={`$${selectedPlan.price}`} />
                  <PaymentDetail 
                    label="Transfer Note" 
                    value={transferCode} 
                    highlight 
                    onCopy={() => handleCopy(transferCode)}
                  />
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl mb-10">
                <div className="flex gap-3">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg h-fit">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900 text-sm mb-1">Important Note</h4>
                    <p className="text-xs text-blue-700 leading-relaxed">
                      Please ensure the transfer note is exactly <span className="font-bold">{transferCode}</span>. 
                      Your account will be upgraded automatically within 5-10 minutes after verification.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmitPayment}
                disabled={isSubmitting}
                className="w-full py-5 bg-black text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : <CheckCircle size={20} />}
                I Have Paid
              </button>
            </motion.div>
          </div>
        )}

        {step === 'pending' && (
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-[3rem] p-12 shadow-xl border border-gray-100"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
                <Loader2 size={40} className="animate-spin" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-4">Payment Pending</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                We've received your payment request for the <span className="font-bold text-black">{pendingRequest?.planName}</span>. 
                Our team is currently verifying your transaction. You'll receive full access as soon as it's approved.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-2xl text-left mb-10">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Request ID</span>
                  <span className="font-mono font-bold">{pendingRequest?.id?.slice(0, 8)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Status</span>
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-[10px] bg-blue-50 px-2 py-1 rounded-md">Pending Verification</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Submitted At</span>
                  <span className="text-gray-600">{new Date(pendingRequest?.createdAt || 0).toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/topics')}
                className="w-full py-4 bg-gray-100 text-gray-900 rounded-2xl font-bold hover:bg-gray-200 transition-all"
              >
                Back to Practice
              </button>
            </motion.div>
          </div>
        )}
        </div>
      </main>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-600">
      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function PaymentDetail({ label, value, highlight, onCopy }: { label: string, value: string, highlight?: boolean, onCopy?: () => void }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
      <div className="flex items-center justify-between gap-2">
        <span className={`font-bold ${highlight ? 'text-blue-600 text-lg' : 'text-gray-900'}`}>{value}</span>
        {onCopy && (
          <button 
            onClick={onCopy}
            className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-black transition-all"
          >
            <Copy size={16} />
          </button>
        )}
      </div>
    </div>
  );
}
