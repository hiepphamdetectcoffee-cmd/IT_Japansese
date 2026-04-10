import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot, doc, updateDoc, orderBy } from 'firebase/firestore';
import { UserProfile, UserRole, PaymentRequest } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Users, Shield, Star, User as UserIcon, CheckCircle, CreditCard, Clock, Check, X, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [paymentRequests, setPaymentRequests] = useState<PaymentRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'users' | 'payments'>('payments');

  useEffect(() => {
    const usersQuery = query(collection(db, 'users'));
    const unsubUsers = onSnapshot(usersQuery, (snapshot) => {
      const userList = snapshot.docs.map(doc => doc.data() as UserProfile);
      setUsers(userList);
    });

    const paymentsQuery = query(collection(db, 'paymentRequests'), orderBy('createdAt', 'desc'));
    const unsubPayments = onSnapshot(paymentsQuery, (snapshot) => {
      const paymentList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as PaymentRequest));
      setPaymentRequests(paymentList);
      setLoading(false);
    });

    return () => {
      unsubUsers();
      unsubPayments();
    };
  }, []);

  const handleRoleChange = async (userId: string, newRole: UserRole) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        role: newRole,
        updatedAt: Date.now()
      });
      setSuccessMsg(`Role updated to ${newRole}`);
      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (err) {
      console.error('Error updating role:', err);
    }
  };

  const handleApprovePayment = async (request: PaymentRequest) => {
    try {
      // 1. Update payment status
      await updateDoc(doc(db, 'paymentRequests', request.id), {
        status: 'approved',
        updatedAt: Date.now()
      });

      // 2. Update user role to premium
      await updateDoc(doc(db, 'users', request.userId), {
        role: 'premium',
        updatedAt: Date.now()
      });

      setSuccessMsg(`Payment approved and user ${request.userName} upgraded to Premium!`);
      setTimeout(() => setSuccessMsg(null), 5000);
    } catch (err) {
      console.error('Error approving payment:', err);
    }
  };

  const handleRejectPayment = async (requestId: string) => {
    try {
      await updateDoc(doc(db, 'paymentRequests', requestId), {
        status: 'rejected',
        updatedAt: Date.now()
      });
      setSuccessMsg('Payment request rejected.');
      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (err) {
      console.error('Error rejecting payment:', err);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 hover:bg-white rounded-xl text-gray-500 hover:text-black transition-all shadow-sm"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-black text-white rounded-xl">
                <Shield size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
          </div>

          <div className="flex bg-white p-1.5 rounded-2xl shadow-sm border border-gray-100">
            <TabButton 
              active={activeTab === 'payments'} 
              onClick={() => setActiveTab('payments')}
              icon={<CreditCard size={16} />}
              label="Payments"
              count={paymentRequests.filter(r => r.status === 'pending').length}
            />
            <TabButton 
              active={activeTab === 'users'} 
              onClick={() => setActiveTab('users')}
              icon={<Users size={16} />}
              label="Users"
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-green-50 text-green-600 rounded-2xl flex items-center gap-2 font-medium border border-green-100"
            >
              <CheckCircle size={18} />
              {successMsg}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-200 overflow-hidden">
          {activeTab === 'users' ? (
            <>
              <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="text-gray-400" size={20} />
                  <h2 className="text-xl font-bold text-gray-900">User Management</h2>
                </div>
                <span className="text-sm text-gray-400 font-medium">{users.length} Total Users</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Email</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Role</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {loading ? (
                      <tr>
                        <td colSpan={4} className="px-8 py-20 text-center text-gray-400">Loading users...</td>
                      </tr>
                    ) : users.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-8 py-20 text-center text-gray-400">No users found.</td>
                      </tr>
                    ) : (
                      users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50/30 transition-colors">
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 font-bold">
                                {user.name.charAt(0)}
                              </div>
                              <span className="font-bold text-gray-900">{user.name}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-gray-500 font-medium">{user.email}</td>
                          <td className="px-8 py-6">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              user.role === 'admin' ? 'bg-red-50 text-red-600' :
                              user.role === 'premium' ? 'bg-yellow-50 text-yellow-600' :
                              'bg-blue-50 text-blue-600'
                            }`}>
                              {user.role === 'premium' && <Star size={10} fill="currentColor" />}
                              {user.role}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <select
                              value={user.role}
                              onChange={(e) => handleRoleChange(user.id, e.target.value as UserRole)}
                              className="bg-gray-50 border border-gray-200 text-gray-900 text-xs rounded-xl focus:ring-black focus:border-black block p-2.5 outline-none transition-all"
                            >
                              <option value="normal">Normal</option>
                              <option value="premium">Premium</option>
                              <option value="admin">Admin</option>
                            </select>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          ) : (
            <>
              <div className="p-8 border-b border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="text-gray-400" size={20} />
                  <h2 className="text-xl font-bold text-gray-900">Payment Requests</h2>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                    <Clock size={14} />
                    {paymentRequests.filter(r => r.status === 'pending').length} Pending
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">User</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Plan / Amount</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Transfer Code</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                      <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {loading ? (
                      <tr>
                        <td colSpan={5} className="px-8 py-20 text-center text-gray-400">Loading payments...</td>
                      </tr>
                    ) : paymentRequests.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-8 py-20 text-center text-gray-400">No payment requests found.</td>
                      </tr>
                    ) : (
                      paymentRequests.map((req) => (
                        <tr key={req.id} className="hover:bg-gray-50/30 transition-colors">
                          <td className="px-8 py-6">
                            <div className="flex flex-col">
                              <span className="font-bold text-gray-900">{req.userName}</span>
                              <span className="text-xs text-gray-400">{req.userEmail}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex flex-col">
                              <span className="font-bold text-gray-900">{req.planName}</span>
                              <span className="text-sm text-blue-600 font-bold">${req.amount}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <code className="bg-gray-100 px-2 py-1 rounded text-xs font-bold text-gray-600">
                              {req.transferCode}
                            </code>
                          </td>
                          <td className="px-8 py-6">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${
                              req.status === 'approved' ? 'bg-green-50 text-green-600' :
                              req.status === 'rejected' ? 'bg-red-50 text-red-600' :
                              'bg-blue-50 text-blue-600'
                            }`}>
                              {req.status}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            {req.status === 'pending' ? (
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => handleApprovePayment(req)}
                                  className="p-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-600 hover:text-white transition-all shadow-sm"
                                  title="Approve"
                                >
                                  <Check size={18} />
                                </button>
                                <button
                                  onClick={() => handleRejectPayment(req.id)}
                                  className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-600 hover:text-white transition-all shadow-sm"
                                  title="Reject"
                                >
                                  <X size={18} />
                                </button>
                              </div>
                            ) : (
                              <span className="text-xs text-gray-400 italic">
                                Processed {new Date(req.updatedAt).toLocaleDateString()}
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function TabButton({ active, onClick, icon, label, count }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string, count?: number }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
        active ? 'bg-black text-white shadow-md' : 'text-gray-400 hover:text-black'
      }`}
    >
      {icon}
      {label}
      {count !== undefined && count > 0 && (
        <span className={`ml-1 px-1.5 py-0.5 rounded-md text-[10px] ${active ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>
          {count}
        </span>
      )}
    </button>
  );
}
