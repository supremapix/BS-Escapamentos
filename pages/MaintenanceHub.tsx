import React from 'react';
import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import { SERVICES, COMPANY_INFO } from '../data/constants';
import * as Icons from 'lucide-react';
import { LucideIcon, ArrowRight, CheckCircle2, Phone, MessageCircle, MapPin } from 'lucide-react';

const MaintenanceHub: React.FC = () => {
  return (
    <>
      <EnhancedSEO 
        title="Manutenção Automotiva em Curitiba | BS CAR CENTER"
        description="Auto Center em Curitiba para manutenção automotiva preventiva e corretiva com a BS CAR CENTER. Diagnóstico computadorizado, freios, suspensão, injeção e motor no Novo Mundo."
        canonicalPath="/manutencao-automotiva-curitiba"
        keywords="manutenção automotiva curitiba, oficina mecanica curitiba, auto center curitiba, revisão automotiva novo mundo, bs car center curitiba"
        serviceData={{
          name: "Manutenção Automotiva em Curitiba",
          description: "Serviços preventivos e corretivos de mecânica automotiva, diagnósticos com scanner, freios, suspensão e sistemas veiculares em Curitiba pela BS CAR CENTER."
        }}
      />

      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-4 mb-6">
          <nav className="text-sm text-gray-500 flex items-center gap-2">
            <Link to="/" className="hover:text-primary-blue">Início</Link>
            <span>/</span>
            <span className="text-gray-800 font-semibold">Manutenção Automotiva em Curitiba</span>
          </nav>
        </div>

        {/* Hero Section */}
        <div className="bg-primary-dark py-16 text-white relative overflow-hidden mb-12 border-b-4 border-primary-yellow">
          <div className="absolute inset-0 bg-primary-blue/20"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-5xl">
            <span className="text-primary-yellow font-bold uppercase tracking-wider text-xs md:text-sm mb-3 block">
              Auto Center no Novo Mundo | Curitiba - PR
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black mb-6 leading-tight">
              Manutenção Automotiva em Curitiba
            </h1>
            
            {/* AIO Answer First Block (50-80 words) */}
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-gray-100 text-base md:text-lg leading-relaxed shadow-lg">
              <p>
                A <strong>BS CAR CENTER</strong> realiza manutenção automotiva preventiva e corretiva em Curitiba, com foco em diagnóstico preciso, segurança e durabilidade veicular. Localizada no Novo Mundo, com fácil acesso ao CIC e região do Neo Ville, a oficina oferece estrutura para serviços de freios, suspensão, geometria, injeção eletrônica, scanner, troca de óleo, transmissão automática, reparos em motores e escapamentos.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Gostaria de agendar uma manutenção automotiva em Curitiba.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle size={20} /> Agendar Atendimento
              </a>
              <Link
                to="/contato"
                className="bg-white/10 hover:bg-white hover:text-primary-dark text-white font-bold py-3.5 px-8 rounded-full border border-white/30 transition-all flex items-center gap-2"
              >
                <MapPin size={20} /> Como Chegar
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Diagnostic & Preventive vs Corrective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4 text-primary-blue">
                <CheckCircle2 size={28} className="text-primary-green" />
                <h2 className="text-2xl font-heading font-bold text-primary-dark">Manutenção Preventiva</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                A manutenção preventiva é realizada periodicamente para checar o estado de fluidos, filtros, pastilhas, correias e componentes com desgaste previsível. A avaliação antes do surgimento de falhas preserva o conjunto mecânico e reduz gastos emergenciais.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">✓ Troca de óleo de motor e filtros conforme prazo</li>
                <li className="flex items-center gap-2">✓ Verificação do nível e condição do fluido de freio</li>
                <li className="flex items-center gap-2">✓ Avaliação da espessura de discos e pastilhas</li>
                <li className="flex items-center gap-2">✓ Inspeção visual de coifas, mangueiras e amortecedores</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4 text-primary-blue">
                <CheckCircle2 size={28} className="text-primary-yellow" />
                <h2 className="text-2xl font-heading font-bold text-primary-dark">Manutenção Corretiva e Diagnóstico</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Quando o veículo apresenta ruídos estranhos, perda de potência, luzes de advertência acesas ou instabilidade de direção, realizamos o diagnóstico com scanner e testes mecânicos para identificar com precisão a causa da anomalia.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2">✓ Leitura de códigos de falha e monitoramento de sensores</li>
                <li className="flex items-center gap-2">✓ Correção de vazamentos em motor e arrefecimento</li>
                <li className="flex items-center gap-2">✓ Substituição de pivôs, buchas e amortecedores com folga</li>
                <li className="flex items-center gap-2">✓ Reparo ou troca de silenciosos e catalisadores furados</li>
              </ul>
            </div>
          </div>

          {/* All Linked Services Grid */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <span className="text-primary-blue font-bold uppercase tracking-wider text-xs">Portfólio de Serviços</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-dark mt-1">
                Serviços Executados na BS CAR CENTER
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto mt-2">
                Conheça em detalhes as soluções automotivas oferecidas para o seu veículo no Novo Mundo:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((srv) => {
                const IconComponent = (Icons as any)[srv.iconName] as LucideIcon;
                return (
                  <div 
                    key={srv.id} 
                    className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-primary-blue/40 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-12 h-12 bg-primary-blue/10 rounded-xl flex items-center justify-center text-primary-blue mb-4">
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                      <h3 className="text-xl font-bold text-primary-dark mb-2">{srv.shortTitle || srv.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{srv.description}</p>
                    </div>

                    <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                      <Link 
                        to={`/servicos/${srv.slug}`}
                        className="text-primary-blue hover:text-primary-dark font-bold text-sm inline-flex items-center gap-1 group"
                      >
                        Ver detalhes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <a
                        href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Gostaria de consultar orçamento para ${srv.shortTitle || srv.title}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 text-xs font-semibold"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Local Information */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-200 mb-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark mb-4">
                Localização e Acesso no Novo Mundo
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A oficina está localizada na <strong>{COMPANY_INFO.address}</strong>, uma das principais vias arteriais do bairro Novo Mundo, permitindo deslocamento rápido para quem vem da Cidade Industrial de Curitiba (CIC), região do Neo Ville, Capão Raso, Portão e Pinheirinho.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a 
                  href={COMPANY_INFO.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-6 rounded-xl inline-flex items-center gap-2"
                >
                  <MapPin size={18} /> Ver Rota no Google Maps
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="border border-gray-300 hover:border-primary-blue text-gray-800 font-bold py-3 px-6 rounded-xl inline-flex items-center gap-2"
                >
                  <Phone size={18} /> {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="bg-gradient-to-r from-primary-blue to-primary-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
              Precisa de Manutenção no Seu Veículo?
            </h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8 text-lg">
              Converse com a nossa equipe, informe os sintomas do carro e agende o melhor horário para avaliação no Novo Mundo.
            </p>
            <a
              href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Quero agendar uma revisão na BS CAR CENTER.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-yellow text-primary-dark hover:bg-yellow-400 font-black py-4 px-10 rounded-full transition-transform hover:scale-105 inline-flex items-center gap-3 shadow-lg"
            >
              <MessageCircle size={22} /> AGENDAR ATENDIMENTO
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default MaintenanceHub;
