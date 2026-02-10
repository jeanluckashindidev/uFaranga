import React, { useState } from 'react';
import {
  Send, Zap, Shield, Users, DollarSign,
  ArrowRight, Clock, CheckCircle, User,
  Phone, Mail, Hash, Star, Search, Filter,
  Plus, X, Calendar, TrendingUp
} from 'lucide-react';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const Transfers = () => {
  const [showNewTransferModal, setShowNewTransferModal] = useState(false);
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);

  // Mock Beneficiaries (Frequent contacts)
  const beneficiaries = [
    { id: 1, name: 'Marie K.', phone: '+257 79 123 456', avatar: 'M', isFavorite: true },
    { id: 2, name: 'Jean Pierre', phone: '+257 69 987 654', avatar: 'J', isFavorite: true },
    { id: 3, name: 'Aisha N.', phone: '+257 78 456 789', avatar: 'A', isFavorite: false },
    { id: 4, name: 'David B.', phone: '+257 77 321 098', avatar: 'D', isFavorite: false },
  ];

  // Mock Transfer History
  const transferHistory = [
    { id: 1, recipient: 'Marie K.', phone: '+257 79 123 456', amount: 50000, date: 'Aujourd\'hui 14:30', status: 'completed', type: 'sent' },
    { id: 2, recipient: 'Jean Pierre', phone: '+257 69 987 654', amount: 25000, date: 'Hier 18:45', status: 'completed', type: 'sent' },
    { id: 3, recipient: 'Econet Leo (Avance)', phone: '+257 61 000 000', amount: 100000, date: '10 Fév 09:20', status: 'completed', type: 'received' },
    { id: 4, recipient: 'Aisha N.', phone: '+257 78 456 789', amount: 75000, date: '08 Fév 16:15', status: 'completed', type: 'sent' },
    { id: 5, recipient: 'David B.', phone: '+257 77 321 098', amount: 15000, date: '05 Fév 11:30', status: 'pending', type: 'sent' },
  ];

  const stats = [
    { label: 'Envoyés ce mois', value: '450,000 FBU', icon: TrendingUp, color: 'text-blue-400' },
    { label: 'Reçus ce mois', value: '850,000 FBU', icon: DollarSign, color: 'text-green-400' },
    { label: 'Transactions', value: '24', icon: CheckCircle, color: 'text-purple-400' },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Send className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-anton uppercase mb-4">Transferts</h1>
          <p className="text-gray-400 text-lg">Envoyez de l'argent gratuitement et instantanément à vos proches.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, i) => (
            <GlassCard key={i} className="bg-black/40 border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-white font-mono">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar - Quick Transfer & Beneficiaries */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Transfer Button */}
            <GlassCard className="bg-gradient-to-br from-primary/20 to-blue-900/20 border-primary/30 p-6 text-center cursor-pointer hover:scale-[1.02] transition-transform" onClick={() => setShowNewTransferModal(true)}>
              <div className="w-16 h-16 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nouveau transfert</h3>
              <p className="text-sm text-gray-300">Envoyez de l'argent en 1 clic</p>
            </GlassCard>

            {/* Beneficiaries */}
            <GlassCard className="bg-black/40 border-white/10 p-0 overflow-hidden">
              <div className="p-4 border-b border-white/5 bg-black/40">
                <h3 className="font-bold text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-gray-400" /> Bénéficiaires
                </h3>
              </div>
              <div className="p-4 space-y-2">
                {beneficiaries.map((ben) => (
                  <div key={ben.id} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group" onClick={() => { setSelectedBeneficiary(ben); setShowNewTransferModal(true); }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center text-white font-bold">
                        {ben.avatar}
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm flex items-center gap-1">
                          {ben.name}
                          {ben.isFavorite && <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />}
                        </div>
                        <div className="text-xs text-gray-500">{ben.phone}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-primary transition-colors" />
                  </div>
                ))}
              </div>
              <div className="p-3 border-t border-white/5 text-center">
                <button className="text-sm text-gray-400 hover:text-white transition-colors">Voir tous ({beneficiaries.length + 12})</button>
              </div>
            </GlassCard>
          </div>

          {/* Main Area - Transfer History */}
          <div className="lg:col-span-8">
            <GlassCard className="bg-black/40 border-white/10 p-0 overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-400" /> Historique des transferts
                </h3>
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                    <Search className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors">
                    <Filter className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {transferHistory.map((transfer) => (
                  <div key={transfer.id} className="p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-full ${transfer.type === 'received' ? 'bg-green-500/20' : 'bg-blue-500/20'} flex items-center justify-center`}>
                          {transfer.type === 'received' ? (
                            <DollarSign className="w-6 h-6 text-green-400" />
                          ) : (
                            <Send className="w-6 h-6 text-blue-400" />
                          )}
                        </div>
                        <div>
                          <div className="font-bold text-white group-hover:text-primary transition-colors">{transfer.recipient}</div>
                          <div className="text-xs text-gray-500">{transfer.phone}</div>
                          <div className="text-xs text-gray-600 mt-1">{transfer.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-mono font-bold text-lg ${transfer.type === 'received' ? 'text-green-400' : 'text-white'}`}>
                          {transfer.type === 'received' ? '+' : '-'}{transfer.amount.toLocaleString()} FBU
                        </div>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          {transfer.status === 'completed' ? (
                            <>
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              <span className="text-xs text-green-500">Terminé</span>
                            </>
                          ) : (
                            <>
                              <Clock className="w-3 h-3 text-orange-500" />
                              <span className="text-xs text-orange-500">En cours</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 text-center border-t border-white/5 bg-black/20">
                <button className="text-sm text-gray-400 hover:text-white transition-colors">Charger plus d'historique</button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* NEW TRANSFER MODAL */}
      {showNewTransferModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => { setShowNewTransferModal(false); setSelectedBeneficiary(null); }}></div>
          <GlassCard className="relative z-10 w-full max-w-lg bg-[#121212] border-white/10 p-0 overflow-hidden shadow-2xl shadow-primary/20 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" /> Nouveau transfert
              </h3>
              <button onClick={() => { setShowNewTransferModal(false); setSelectedBeneficiary(null); }} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Recipient */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Destinataire</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Numéro, Email ou @Username"
                    defaultValue={selectedBeneficiary ? selectedBeneficiary.phone : ''}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors pl-11"
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
                {selectedBeneficiary && (
                  <div className="mt-2 p-2 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-900 flex items-center justify-center text-white text-xs font-bold">
                      {selectedBeneficiary.avatar}
                    </div>
                    <span className="text-sm text-white font-medium">{selectedBeneficiary.name}</span>
                  </div>
                )}
              </div>

              {/* Amount */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Montant (FBU)</label>
                <div className="relative">
                  <input type="number" placeholder="0" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white text-3xl font-mono focus:outline-none focus:border-primary transition-colors" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">FBU</span>
                </div>
                <div className="flex gap-2 mt-3">
                  {[10000, 25000, 50000, 100000].map(amount => (
                    <button key={amount} className="px-3 py-1.5 rounded-full bg-white/5 text-xs text-gray-400 hover:bg-primary/20 hover:text-primary hover:border-primary/30 border border-white/10 transition-all">
                      {amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message (optional) */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message (optionnel)</label>
                <textarea placeholder="Ex: Remboursement repas..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none" rows="2"></textarea>
              </div>

              {/* Info Banner */}
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex gap-3">
                <Zap className="w-5 h-5 text-green-500 shrink-0" />
                <div className="text-xs text-green-200">
                  Transfert <span className="font-bold">instantané et gratuit</span> vers tout compte uFaranga.
                  Frais de <span className="font-bold text-green-400">500 FBU</span> vers autres réseaux.
                </div>
              </div>

              {/* Submit */}
              <GradientButton className="w-full py-4 text-lg" onClick={() => { setShowNewTransferModal(false); setSelectedBeneficiary(null); }}>
                Confirmer le transfert
              </GradientButton>
            </div>
          </GlassCard>
        </div>
      )}
    </div>
  );
};

export default Transfers;
