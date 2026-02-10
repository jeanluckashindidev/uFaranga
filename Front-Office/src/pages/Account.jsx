import React, { useState } from 'react';
import {
  User, Shield, Smartphone, CreditCard, Zap,
  ArrowUpRight, ArrowDownLeft, Wallet,
  History, MoreHorizontal, Search, Settings,
  Bell, Plus, X, Phone, Tv, Wifi, Globe, Send
} from 'lucide-react';
import Section from '../components/ui/Section';
import GlassCard from '../components/ui/GlassCard';
import GradientButton from '../components/ui/GradientButton';

const Account = () => {
  const [balance] = useState(1250000); // 1,250,000 FBU
  const [activeTab, setActiveTab] = useState('overview');
  const [showSendModal, setShowSendModal] = useState(false);
  const [showPayModal, setShowPayModal] = useState(false);

  // Mock Data for "Real Feel"
  const transactions = [
    { id: 1, type: 'sent', name: 'Jean Pierre N.', date: 'Aujourd\'hui, 10:42', amount: -50000, icon: User, color: 'bg-red-500/20 text-red-400' },
    { id: 2, type: 'bill', name: 'Canal+ Burundi', date: 'Hier, 18:30', amount: -35000, icon: Tv, color: 'bg-blue-500/20 text-blue-400' },
    { id: 3, type: 'received', name: 'Econet Cash In', date: '10 Fév, 09:15', amount: +200000, icon: ArrowDownLeft, color: 'bg-green-500/20 text-green-400' },
    { id: 4, type: 'bill', name: 'Regideso (Eau)', date: '08 Fév, 14:20', amount: -12500, icon: Globe, color: 'bg-blue-500/20 text-blue-400' },
    { id: 5, type: 'purchase', name: 'Supermarché T2000', date: '05 Fév, 17:45', amount: -85000, icon: CreditCard, color: 'bg-purple-500/20 text-purple-400' },
  ];

  const quickActions = [
    { icon: Send, label: 'Envoyer', action: () => setShowSendModal(true), color: 'bg-primary/20 text-primary' },
    { icon: Zap, label: 'Payer Facture', action: () => setShowPayModal(true), color: 'bg-secondary/20 text-secondary' },
    { icon: Smartphone, label: 'Achat Unités', action: () => { }, color: 'bg-purple-500/20 text-purple-400' },
    { icon: MoreHorizontal, label: 'Plus', action: () => { }, color: 'bg-gray-700/50 text-gray-300' },
  ];

  return (
    <div className="min-h-screen bg-black pt-20">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* --- HERO SECTION: Account Benefits --- */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-anton uppercase mb-6">Votre Compte Mobile</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Créez votre compte en 2 minutes et accédez à tous vos services financiers depuis votre téléphone.
            </p>
          </div>

          {/* Account Opening Steps */}
          <GlassCard className="bg-black/40 border-white/10 p-8 mb-8">
            <h2 className="text-3xl font-anton uppercase text-center mb-8">C'est Simple et Rapide</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Téléchargez l'app</h3>
                <p className="text-gray-400 text-sm">Disponible sur iOS et Android, gratuit et sans publicité.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Vérifiez votre identité</h3>
                <p className="text-gray-400 text-sm">Avec votre numéro de téléphone et une pièce d'identité.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-blue-400">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">C'est prêt !</h3>
                <p className="text-gray-400 text-sm">Commencez à envoyer, recevoir et gérer votre argent.</p>
              </div>
            </div>
          </GlassCard>

          {/* Ways to Open Account */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="bg-gradient-to-br from-primary/20 to-blue-900/20 border-primary/30 p-6">
              <Smartphone className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Application Mobile</h3>
              <p className="text-gray-300 mb-4">Téléchargez uFaranga sur votre téléphone et créez votre compte en quelques minutes.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Disponible sur iOS et Android
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Interface intuitive en français
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  Support hors ligne pour certaines fonctions
                </li>
              </ul>
            </GlassCard>

            <GlassCard className="bg-gradient-to-br from-secondary/20 to-green-900/20 border-secondary/30 p-6">
              <User className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Chez un Agent</h3>
              <p className="text-gray-300 mb-4">Rendez-vous chez l'un de nos 500+ agents agréés partout au Burundi.</p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Assistance personnalisée
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Ouverture immédiate avec pièce d'identité
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                  Premier dépôt possible sur place
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Account Features */}
          <GlassCard className="bg-black/40 border-white/10 p-8">
            <h2 className="text-3xl font-anton uppercase text-center mb-10">Ce Que Vous Obtenez</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Carte Virtuelle Gratuite</h3>
                  <p className="text-gray-400 text-sm">Créez instantanément une carte Visa virtuelle pour vos achats en ligne. Contrôlez vos limites et bloquez-la à tout moment.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                  <Smartphone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Application Mobile Complète</h3>
                  <p className="text-gray-400 text-sm">Gérez tout depuis votre téléphone : transferts, factures, épargne, historique, notifications en temps réel.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                  <Wallet className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Multi-Devises (BIF, USD, EUR)</h3>
                  <p className="text-gray-400 text-sm">Ouvrez des sous-comptes en différentes devises et convertissez instantanément au meilleur taux.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Sécurité Maximale</h3>
                  <p className="text-gray-400 text-sm">Authentification biométrique, notifications instantanées, assurance contre la fraude jusqu'à 5 millions FBU.</p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <GradientButton className="px-8 py-4 text-lg">
                Ouvrir mon compte gratuitement
              </GradientButton>
              <p className="text-xs text-gray-500 mt-3">Aucun frais d'ouverture • Aucun minimum de dépôt</p>
            </div>
          </GlassCard>
        </div>

        {/* Divider */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <span className="text-gray-500 text-sm uppercase tracking-wider">Aperçu du compte</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

          {/* --- SIDEBAR SIMULATION (Desktop) --- */}
          <div className="hidden lg:col-span-3 lg:block">
            <GlassCard className="h-full bg-black/40 border-white/10 p-6">
              <div className="flex items-center gap-3 mb-10 px-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10"></div>
                <div>
                  <div className="font-bold text-white">Jean Luc</div>
                  <div className="text-xs text-secondary">Premium User</div>
                </div>
              </div>

              <nav className="space-y-2">
                {['Aperçu', 'Transactions', 'Cartes', 'Épargne', 'Paramètres'].map((item, i) => (
                  <button key={i} className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center gap-3 ${i === 0 ? 'bg-primary/20 text-primary font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
                    {i === 0 ? <Wallet className="w-5 h-5" /> : i === 1 ? <History className="w-5 h-5" /> : i === 2 ? <CreditCard className="w-5 h-5" /> : i === 3 ? <Zap className="w-5 h-5" /> : <Settings className="w-5 h-5" />}
                    {item}
                  </button>
                ))}
              </nav>

              <div className="mt-auto pt-10 px-2">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-blue-900/20 border border-primary/20">
                  <h4 className="font-bold text-white text-sm mb-1">Besoin d'aide ?</h4>
                  <p className="text-xs text-gray-400 mb-3">Notre support est disponible 24/7.</p>
                  <button className="text-xs font-bold text-primary hover:underline">Contacter le support</button>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* --- MAIN DASHBOARD AREA --- */}
          <div className="lg:col-span-9 space-y-6">

            {/* 1. Welcoming & Balance */}
            <GlassCard className="bg-gradient-to-r from-gray-900 to-black border-white/10 p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <p className="text-gray-400 mb-1">Solde disponible</p>
                  <h1 className="text-4xl md:text-5xl font-anton text-white tracking-wide">
                    {balance.toLocaleString()} <span className="text-2xl text-primary">FBU</span>
                  </h1>
                </div>
                <div className="flex gap-3">
                  <GradientButton variant="primary" className="!py-2 !px-4 text-sm flex items-center gap-2" onClick={() => setShowSendModal(true)}>
                    <ArrowUpRight className="w-4 h-4" /> Envoyer
                  </GradientButton>
                  <button className="px-4 py-2 rounded-xl border border-white/10 hover:bg-white/5 text-white text-sm font-bold flex items-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" /> Recharger
                  </button>
                </div>
              </div>
            </GlassCard>

            {/* 2. Quick Actions Grid */}
            <div className="grid grid-cols-4 gap-4">
              {quickActions.map((action, i) => (
                <GlassCard key={i} className="flex flex-col items-center justify-center p-4 cursor-pointer hover:bg-white/5 transition-colors group" onClick={action.action}>
                  <div className={`w-12 h-12 rounded-2xl ${action.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <action.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-medium text-gray-300 text-center">{action.label}</span>
                </GlassCard>
              ))}
            </div>

            {/* 3. Recent Transactions (The "Data" Part) */}
            <GlassCard className="bg-black/40 border-white/10 p-0 overflow-hidden">
              <div className="p-6 border-b border-white/5 flex justify-between items-center bg-black/40">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <History className="w-5 h-5 text-gray-400" /> Transactions Récentes
                </h3>
                <div className="relative">
                  <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input type="text" placeholder="Rechercher..." className="bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-1.5 text-sm text-white focus:outline-none focus:border-primary/50 w-32 focus:w-48 transition-all" />
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {transactions.map((tx) => (
                  <div key={tx.id} className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full ${tx.color} flex items-center justify-center`}>
                        <tx.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white group-hover:text-primary transition-colors">{tx.name}</div>
                        <div className="text-xs text-gray-500">{tx.date}</div>
                      </div>
                    </div>
                    <div className={`font-mono font-bold ${tx.amount > 0 ? 'text-green-400' : 'text-white'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toLocaleString()} FBU
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center border-t border-white/5 bg-black/20">
                <button className="text-sm text-gray-400 hover:text-white transition-colors">Voir tout l'historique</button>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* --- MODALS / DIALOGS (The "Classic Popups" Part) --- */}

      {/* 1. SEND MONEY MODAL */}
      {showSendModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowSendModal(false)}></div>
          <GlassCard className="relative z-10 w-full max-w-md bg-[#121212] border-white/10 p-0 overflow-hidden shadow-2xl shadow-primary/20 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Send className="w-5 h-5 text-primary" /> Envoyer de l'argent
              </h3>
              <button onClick={() => setShowSendModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Destinataire</label>
                <div className="relative">
                  <input type="text" placeholder="Numéro, Email ou @Username" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Montant (FBU)</label>
                <div className="relative">
                  <input type="number" placeholder="0" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-2xl font-mono focus:outline-none focus:border-primary transition-colors" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">FBU</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {[5000, 10000, 50000].map(amount => (
                    <button key={amount} className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-400 hover:bg-white/10 hover:text-white transition-colors">
                      {amount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex gap-3">
                <Zap className="w-5 h-5 text-orange-500 shrink-0" />
                <div className="text-xs text-orange-200">
                  Transfert instantané vers comptes uFaranga. Frais: <span className="font-bold text-orange-500">0 FBU</span>
                </div>
              </div>

              <GradientButton className="w-full py-4 text-lg" onClick={() => setShowSendModal(false)}>
                Confirmer l'envoi
              </GradientButton>
            </div>
          </GlassCard>
        </div>
      )}

      {/* 2. PAY BILL MODAL */}
      {showPayModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowPayModal(false)}></div>
          <GlassCard className="relative z-10 w-full max-w-md bg-[#121212] border-white/10 p-0 overflow-hidden shadow-2xl shadow-secondary/20 animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-secondary" /> Payer une facture
              </h3>
              <button onClick={() => setShowPayModal(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-2 gap-4">
              {[
                { name: 'Canal+', icon: Tv, color: 'bg-blue-600' },
                { name: 'Regideso', icon: Globe, color: 'bg-blue-400' },
                { name: 'Econet', icon: Phone, color: 'bg-green-600' },
                { name: 'Lumicash', icon: Smartphone, color: 'bg-yellow-500' },
                { name: 'Internet', icon: Wifi, color: 'bg-purple-600' },
                { name: 'Autre', icon: MoreHorizontal, color: 'bg-gray-600' },
              ].map((service, i) => (
                <button key={i} className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all group">
                  <div className={`w-12 h-12 rounded-full ${service.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-white text-sm">{service.name}</span>
                </button>
              ))}
            </div>
            <div className="p-6 pt-0">
              <button className="w-full py-3 rounded-xl border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 transition-colors" onClick={() => setShowPayModal(false)}>
                Annuler
              </button>
            </div>
          </GlassCard>
        </div>
      )}

    </div>
  );
};

export default Account;
