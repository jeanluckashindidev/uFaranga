import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, Truck, Shield, Smartphone, Wifi, Lock, Globe, Check, AlertCircle, Package, MapPin, Calendar } from 'lucide-react';

const PhysicalCard = () => {
  const [selectedDesign, setSelectedDesign] = useState(0);

  const cardDesigns = [
    { name: 'Classic Blue', color: 'from-blue-600 to-blue-800', popular: true },
    { name: 'Elegant Black', color: 'from-gray-700 to-gray-900', popular: false },
    { name: 'Premium Gold', color: 'from-yellow-600 to-yellow-800', popular: false },
    { name: 'Modern Purple', color: 'from-purple-600 to-purple-800', popular: false }
  ];

  const features = [
    {
      icon: Wifi,
      title: 'Sans contact NFC',
      description: 'Paiements rapides par simple approche'
    },
    {
      icon: Shield,
      title: 'Puce EMV sécurisée',
      description: 'Protection maximale contre la fraude'
    },
    {
      icon: Globe,
      title: 'Acceptée mondialement',
      description: 'Utilisable dans 200+ pays'
    },
    {
      icon: Smartphone,
      title: 'Contrôle via app',
      description: 'Bloquez/débloquez instantanément'
    }
  ];

  const deliverySteps = [
    {
      icon: Package,
      title: 'Commande',
      description: 'Choisissez votre design'
    },
    {
      icon: CreditCard,
      title: 'Production',
      description: 'Fabrication personnalisée'
    },
    {
      icon: Truck,
      title: 'Livraison',
      description: '5-7 jours ouvrables'
    },
    {
      icon: Check,
      title: 'Activation',
      description: 'Activez depuis l\'app'
    }
  ];

  const specifications = [
    { label: 'Type', value: 'Visa/Mastercard' },
    { label: 'Matériau', value: 'PVC premium' },
    { label: 'Technologie', value: 'Puce EMV + NFC' },
    { label: 'Validité', value: '5 ans' },
    { label: 'Frais annuels', value: '0 BIF' },
    { label: 'Livraison', value: 'Gratuite' }
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
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  CARTE PHYSIQUE INTERNATIONALE
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Carte bancaire Visa/Mastercard livrée chez vous. Payez partout dans le monde.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Livraison gratuite en 5-7 jours</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Sans frais annuels</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Paiements sans contact</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Retraits ATM mondiaux</span>
                  </div>
                </div>

                <Link 
                  to="/telecharger"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Commander ma carte
                </Link>
              </div>

              {/* Right - Card Designs */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Choisissez votre design</h3>
                
                {/* Selected Card Preview */}
                <div className={`bg-gradient-to-br ${cardDesigns[selectedDesign].color} rounded-2xl p-8 shadow-2xl mb-6 transform hover:scale-105 transition-transform`}>
                  <div className="flex justify-between items-start mb-12">
                    <Wifi className="w-12 h-12 text-white/80 rotate-90" />
                    <div className="text-white/80 text-sm font-semibold uppercase">VISA</div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-white text-2xl font-mono tracking-wider mb-2">
                      •••• •••• •••• 9010
                    </div>
                    <div className="text-white/60 text-xs uppercase">VOTRE NOM</div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-white/60 text-xs mb-1">Expire</div>
                      <div className="text-white font-mono">12/29</div>
                    </div>
                    <div className="text-white font-semibold">{cardDesigns[selectedDesign].name}</div>
                  </div>
                </div>

                {/* Design Options */}
                <div className="grid grid-cols-4 gap-3">
                  {cardDesigns.map((design, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedDesign(idx)}
                      className={`relative aspect-[1.6/1] rounded-lg bg-gradient-to-br ${design.color} ${
                        selectedDesign === idx ? 'ring-4 ring-primary' : 'opacity-60 hover:opacity-100'
                      } transition-all`}
                    >
                      {design.popular && (
                        <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full font-semibold">
                          Populaire
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">CARACTÉRISTIQUES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">PROCESSUS DE LIVRAISON</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {deliverySteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div className="bg-gray-900 rounded-xl p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </div>
                  {idx < deliverySteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">SPÉCIFICATIONS</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            {specifications.map((spec, idx) => (
              <div key={idx} className="bg-black rounded-lg p-4 flex justify-between items-center">
                <span className="text-gray-400">{spec.label}</span>
                <span className="text-white font-semibold">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-4xl font-anton uppercase mb-4">SÉCURITÉ MAXIMALE</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900 rounded-xl p-6">
                <Lock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Puce EMV</h3>
                <p className="text-gray-400">Protection contre le clonage et la fraude</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <Smartphone className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Contrôle instantané</h3>
                <p className="text-gray-400">Bloquez votre carte en un clic depuis l'app</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <AlertCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Notifications</h3>
                <p className="text-gray-400">Alerte pour chaque transaction</p>
              </div>
              <div className="bg-gray-900 rounded-xl p-6">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Code PIN</h3>
                <p className="text-gray-400">Sécurité renforcée pour les retraits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">COMMANDEZ MAINTENANT</h2>
            <p className="text-xl text-gray-300 mb-8">
              Recevez votre carte physique gratuitement en 5-7 jours
            </p>
            <Link 
              to="/telecharger"
              className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Commander ma carte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhysicalCard;
