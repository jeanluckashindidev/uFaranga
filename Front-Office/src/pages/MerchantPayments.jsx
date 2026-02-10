import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Store, QrCode, Smartphone, Check, Search, MapPin, Star, TrendingUp, Shield, Zap } from 'lucide-react';

const MerchantPayments = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: 'Restaurants', icon: '🍽️', count: 1250 },
    { name: 'Supermarchés', icon: '🛒', count: 850 },
    { name: 'Pharmacies', icon: '💊', count: 420 },
    { name: 'Stations', icon: '⛽', count: 180 },
    { name: 'Boutiques', icon: '👕', count: 2100 },
    { name: 'Salons', icon: '💇', count: 650 }
  ];

  const featuredMerchants = [
    {
      name: 'Chez Nous Restaurant',
      category: 'Restaurant',
      location: 'Bujumbura, Rohero',
      rating: 4.8,
      cashback: '2%',
      image: '🍽️'
    },
    {
      name: 'Supermarché City',
      category: 'Supermarché',
      location: 'Bujumbura, Centre-ville',
      rating: 4.6,
      cashback: '1.5%',
      image: '🛒'
    },
    {
      name: 'Pharmacie Centrale',
      category: 'Pharmacie',
      location: 'Bujumbura, Kamenge',
      rating: 4.9,
      cashback: '1%',
      image: '💊'
    },
    {
      name: 'Fashion Store',
      category: 'Boutique',
      location: 'Bujumbura, Buyenzi',
      rating: 4.7,
      cashback: '3%',
      image: '👕'
    }
  ];

  const benefits = [
    'Paiements instantanés par QR code',
    'Cashback sur chaque achat',
    'Historique détaillé',
    'Factures électroniques',
    'Programme de fidélité',
    'Offres exclusives'
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Store className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  PAIEMENTS MARCHANDS
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Payez dans 10,000+ commerces partenaires et gagnez du cashback
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-900 rounded-xl p-4">
                    <Store className="w-8 h-8 text-primary mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">10,000+</div>
                    <div className="text-sm text-gray-400">Marchands</div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4">
                    <TrendingUp className="w-8 h-8 text-secondary mb-2" />
                    <div className="text-2xl font-bold text-white mb-1">Jusqu'à 5%</div>
                    <div className="text-sm text-gray-400">Cashback</div>
                  </div>
                </div>

                <Link 
                  to="/telecharger"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Commencer à payer
                </Link>
              </div>

              {/* QR Code Demo */}
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-semibold mb-6">Paiement par QR Code</h3>
                <div className="bg-white rounded-xl p-8 mb-6 inline-block">
                  <QrCode className="w-48 h-48 text-black" />
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                    <span className="text-gray-300">Scannez le QR code du marchand</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                    <span className="text-gray-300">Entrez le montant</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                    <span className="text-gray-300">Confirmez avec votre PIN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">CATÉGORIES</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6 text-center hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="text-5xl mb-3">{cat.icon}</div>
                <div className="font-semibold mb-1">{cat.name}</div>
                <div className="text-sm text-gray-400">{cat.count} marchands</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Merchants */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">MARCHANDS POPULAIRES</h2>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher un marchand..."
                className="w-full bg-gray-900 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-white focus:outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {featuredMerchants.map((merchant, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-8 text-center">
                  <div className="text-6xl">{merchant.image}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{merchant.name}</h3>
                  <div className="text-sm text-gray-400 mb-2">{merchant.category}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <MapPin className="w-4 h-4" />
                    {merchant.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold">{merchant.rating}</span>
                    </div>
                    <div className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-semibold">
                      {merchant.cashback} cashback
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">AVANTAGES</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-black rounded-lg p-4">
                <Check className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instantané</h3>
              <p className="text-gray-400">Paiement en 2 secondes</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sécurisé</h3>
              <p className="text-gray-400">Protection maximale</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cashback</h3>
              <p className="text-gray-400">Gagnez à chaque achat</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">REJOIGNEZ-NOUS</h2>
            <p className="text-xl text-gray-300 mb-8">
              Téléchargez l'app et commencez à payer chez nos marchands partenaires
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

export default MerchantPayments;
