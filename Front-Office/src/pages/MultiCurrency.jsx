import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, DollarSign, TrendingUp, ArrowLeftRight, Zap, Shield, Calculator, RefreshCw, Check, AlertCircle } from 'lucide-react';

const MultiCurrency = () => {
  const [amount, setAmount] = useState('100000');
  const [fromCurrency, setFromCurrency] = useState('BIF');
  const [toCurrency, setToCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState('50.25');

  const currencies = [
    { 
      code: 'BIF', 
      name: 'Franc Burundais', 
      flag: '🇧🇮',
      rate: 1,
      symbol: 'FBu'
    },
    { 
      code: 'USD', 
      name: 'Dollar Américain', 
      flag: '🇺🇸',
      rate: 0.0005025,
      symbol: '$'
    },
    { 
      code: 'EUR', 
      name: 'Euro', 
      flag: '🇪🇺',
      rate: 0.000465,
      symbol: '€'
    },
    { 
      code: 'GBP', 
      name: 'Livre Sterling', 
      flag: '🇬🇧',
      rate: 0.000395,
      symbol: '£'
    },
    { 
      code: 'RWF', 
      name: 'Franc Rwandais', 
      flag: '🇷🇼',
      rate: 0.65,
      symbol: 'FRw'
    },
    { 
      code: 'KES', 
      name: 'Shilling Kenyan', 
      flag: '🇰🇪',
      rate: 0.065,
      symbol: 'KSh'
    }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Multi-devises',
      description: 'Gérez 6+ devises dans un seul compte'
    },
    {
      icon: Zap,
      title: 'Conversion instantanée',
      description: 'Échangez vos devises en temps réel'
    },
    {
      icon: TrendingUp,
      title: 'Taux compétitifs',
      description: 'Meilleurs taux du marché'
    },
    {
      icon: Shield,
      title: 'Sécurisé',
      description: 'Transactions protégées 24/7'
    }
  ];

  const benefits = [
    'Aucun frais de conversion jusqu\'à 100,000 BIF/mois',
    'Taux de change en temps réel',
    'Historique complet des conversions',
    'Alertes de taux favorables',
    'Virements internationaux simplifiés',
    'Support multi-devises sur carte virtuelle'
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  COMPTE MULTI-DEVISES
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Gérez plusieurs devises dans un seul compte. Convertissez instantanément au meilleur taux.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-300">
                      <Check className="w-5 h-5 text-secondary" />
                      <span>{feature.title}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  to="/telecharger"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Ouvrir un compte
                </Link>
              </div>

              {/* Right - Currency Converter */}
              <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-semibold mb-6">Convertisseur de devises</h3>
                
                {/* From Currency */}
                <div className="mb-4">
                  <label className="block text-sm text-gray-400 mb-2">Montant</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-xl font-semibold focus:outline-none focus:border-primary"
                    />
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    >
                      {currencies.map((curr) => (
                        <option key={curr.code} value={curr.code}>
                          {curr.flag} {curr.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center my-4">
                  <button className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 flex items-center justify-center transition-colors">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </button>
                </div>

                {/* To Currency */}
                <div className="mb-6">
                  <label className="block text-sm text-gray-400 mb-2">Vous recevez</label>
                  <div className="flex gap-3">
                    <input
                      type="text"
                      value={convertedAmount}
                      readOnly
                      className="flex-1 bg-black border border-gray-700 rounded-lg px-4 py-3 text-white text-xl font-semibold"
                    />
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    >
                      {currencies.map((curr) => (
                        <option key={curr.code} value={curr.code}>
                          {curr.flag} {curr.code}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="bg-black rounded-lg p-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Taux de change</span>
                    <span className="text-white font-semibold">1 BIF = 0.0005025 USD</span>
                  </div>
                </div>

                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-colors">
                  Convertir maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Currencies */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">DEVISES DISPONIBLES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currencies.map((currency, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6 hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{currency.flag}</div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{currency.code}</div>
                    <div className="text-sm text-gray-400">{currency.name}</div>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-800">
                  <span className="text-gray-400 text-sm">Taux</span>
                  <span className="text-white font-semibold">1 BIF = {currency.rate} {currency.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">AVANTAGES</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-gray-900 rounded-lg p-4">
                <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">CAS D'UTILISATION</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black rounded-xl p-6">
              <ArrowLeftRight className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Voyages internationaux</h3>
              <p className="text-gray-400">Payez dans la devise locale sans frais cachés</p>
            </div>
            <div className="bg-black rounded-xl p-6">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">E-commerce mondial</h3>
              <p className="text-gray-400">Achetez sur Amazon, AliExpress en USD/EUR</p>
            </div>
            <div className="bg-black rounded-xl p-6">
              <DollarSign className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Freelancing</h3>
              <p className="text-gray-400">Recevez vos paiements en USD/EUR</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">COMMENCEZ MAINTENANT</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ouvrez votre compte multi-devises gratuitement
            </p>
            <Link 
              to="/telecharger"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Télécharger l'application
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiCurrency;
