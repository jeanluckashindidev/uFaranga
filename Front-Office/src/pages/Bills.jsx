import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Receipt, Zap, Clock, Check, Lightbulb, Droplet, Tv, Phone, Wifi, Calendar, AlertCircle } from 'lucide-react';

const Bills = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      name: 'Électricité',
      icon: Lightbulb,
      provider: 'REGIDESO',
      color: 'from-yellow-600 to-yellow-800',
      popular: true
    },
    {
      name: 'Eau',
      icon: Droplet,
      provider: 'REGIDESO',
      color: 'from-blue-600 to-blue-800',
      popular: true
    },
    {
      name: 'Internet',
      icon: Wifi,
      provider: 'Econet, Lumitel',
      color: 'from-purple-600 to-purple-800',
      popular: false
    },
    {
      name: 'Télévision',
      icon: Tv,
      provider: 'Canal+, StarTimes',
      color: 'from-red-600 to-red-800',
      popular: false
    },
    {
      name: 'Téléphone',
      icon: Phone,
      provider: 'Tous opérateurs',
      color: 'from-green-600 to-green-800',
      popular: true
    }
  ];

  const recentBills = [
    {
      service: 'Électricité REGIDESO',
      reference: 'ELEC-2024-001234',
      amount: 45000,
      dueDate: '15 Mars 2024',
      status: 'pending'
    },
    {
      service: 'Internet Econet',
      reference: 'INT-2024-005678',
      amount: 50000,
      dueDate: '20 Mars 2024',
      status: 'pending'
    },
    {
      service: 'Canal+ Premium',
      reference: 'TV-2024-009012',
      amount: 35000,
      dueDate: '10 Mars 2024',
      status: 'paid'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Paiement instantané',
      description: 'Factures payées en quelques secondes'
    },
    {
      icon: Calendar,
      title: 'Paiements programmés',
      description: 'Automatisez vos paiements mensuels'
    },
    {
      icon: Clock,
      title: 'Rappels automatiques',
      description: 'Ne manquez plus jamais une échéance'
    },
    {
      icon: Receipt,
      title: 'Historique complet',
      description: 'Toutes vos factures en un seul endroit'
    }
  ];

  const benefits = [
    'Aucun frais de service',
    'Confirmation instantanée',
    'Reçu électronique',
    'Support 24/7',
    'Paiements récurrents',
    'Notifications d\'échéance'
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
                  <Receipt className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-anton uppercase mb-6">
                  PAIEMENT DE FACTURES
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Payez toutes vos factures en un clic : électricité, eau, internet, TV et plus
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Tous les fournisseurs disponibles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Paiement instantané</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary" />
                    <span className="text-gray-300">Rappels automatiques</span>
                  </div>
                </div>

                <Link 
                  to="/telecharger"
                  className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                  Payer mes factures
                </Link>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4">
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedService(service)}
                    className={`relative bg-gradient-to-br ${service.color} rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform`}
                  >
                    {service.popular && (
                      <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Populaire
                      </div>
                    )}
                    <service.icon className="w-12 h-12 text-white mb-3" />
                    <h3 className="text-white font-semibold mb-1">{service.name}</h3>
                    <p className="text-white/70 text-sm">{service.provider}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Bills */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">FACTURES EN ATTENTE</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {recentBills.map((bill, idx) => (
              <div key={idx} className="bg-black rounded-xl p-6 flex items-center justify-between hover:bg-gray-800 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full ${bill.status === 'paid' ? 'bg-green-500/20' : 'bg-orange-500/20'} flex items-center justify-center`}>
                    {bill.status === 'paid' ? (
                      <Check className="w-6 h-6 text-green-500" />
                    ) : (
                      <Clock className="w-6 h-6 text-orange-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{bill.service}</h3>
                    <p className="text-sm text-gray-400">Réf: {bill.reference}</p>
                    <p className="text-xs text-gray-500 mt-1">Échéance: {bill.dueDate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white mb-2">
                    {bill.amount.toLocaleString()} BIF
                  </div>
                  {bill.status === 'pending' ? (
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Payer
                    </button>
                  ) : (
                    <div className="text-sm text-green-500 font-semibold">Payée</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">FONCTIONNALITÉS</h2>
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

      {/* How it Works */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-anton uppercase text-center mb-12">COMMENT ÇA MARCHE</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            {[
              { num: '1', title: 'Choisissez', desc: 'Sélectionnez le service' },
              { num: '2', title: 'Référence', desc: 'Entrez votre numéro' },
              { num: '3', title: 'Montant', desc: 'Vérifiez le montant' },
              { num: '4', title: 'Payez', desc: 'Confirmez avec PIN' }
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-3xl font-anton text-primary mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-anton uppercase mb-6">SIMPLIFIEZ VOS PAIEMENTS</h2>
            <p className="text-xl text-gray-300 mb-8">
              Téléchargez l'app et ne manquez plus jamais une facture
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

export default Bills;
