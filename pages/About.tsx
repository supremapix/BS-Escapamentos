import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { ShieldCheck, Award, Target, Clock, MapPin, Wrench, Cpu, CheckCircle } from 'lucide-react';
import { COMPANY_INFO, HERO_IMAGES } from '../data/constants';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <>
      <EnhancedSEO 
        title="Sobre a BS CAR CENTER | Manutenção Automotiva em Curitiba" 
        description="Conheça a BS CAR CENTER (anteriormente conhecida como BS Escapamentos) no Novo Mundo, Curitiba. Tradição em escapamentos e estrutura completa para manutenção automotiva preventiva e corretiva." 
        canonicalPath="/sobre"
        keywords="sobre bs car center, oficina mecanica novo mundo, auto center cic curitiba, historia bs escapamentos"
        schemaType="AutoRepair"
      />
      
      <div className="pt-24 pb-16 bg-white min-h-screen">
        
        {/* Header Section with Video Background */}
        <div className="bg-primary-dark py-16 text-white text-center relative overflow-hidden border-b-4 border-primary-yellow mb-12">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="https://img.supremasite.com.br/bs/bs-loja.webp"
            className="absolute inset-0 w-full h-full object-cover opacity-25 filter saturate-150 pointer-events-none"
          >
            <source src="https://img.supremasite.com.br/bs/bs.mp4" type="video/mp4" />
            <source src="/bs.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary-dark/95"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <span className="text-primary-yellow font-bold uppercase tracking-wider text-xs md:text-sm mb-2 block">
              Tradição e Evolução Técnica no Novo Mundo
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-black mb-4">
              Nossa História e Reposicionamento
            </h1>
            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Da especialidade histórica em escapamentos a uma oficina completa de manutenção automotiva em Curitiba.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          
          {/* Main Story */}
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group">
                <img 
                  src="https://img.supremasite.com.br/bs/bs-loja.webp" 
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/bs-loja.webp'; }}
                  alt="Fachada Oficial BS CAR CENTER na Rua Pedro Gusso, 2340 em Curitiba" 
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500" 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-primary-dark/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                  <MapPin size={13} className="text-primary-yellow" />
                  <span>R. Pedro Gusso, 2340 - Fachada Oficial</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary-blue bg-blue-50 px-3 py-1 rounded-full">
                <span>Nossa Origem & Evolução</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-dark">
                Quem Somos
              </h2>
              <p>
                A empresa iniciou sua trajetória focada fortemente em sistemas de exaustão, catalisadores e silenciosos como <strong>BS Escapamentos</strong>, consolidando uma clientela fiel em Curitiba, especialmente na região sul, no <strong>Novo Mundo</strong> e nas proximidades do <strong>CIC</strong> e da <strong>região do Neo Ville</strong>.
              </p>
              <p>
                Com o passar do tempo e o aumento da demanda por serviços mecânicos de confiança no mesmo local, a oficina investiu em novos equipamentos de diagnóstico e ampliou suas rotinas operacionais para a <strong>manutenção automotiva completa</strong>.
              </p>
              <p>
                Hoje, operando sob a marca <strong>BS CAR CENTER</strong> (anteriormente conhecida como BS Escapamentos), realizamos manutenções preventivas e corretivas em suspensão, freios, geometria, balanceamento, injeção eletrônica, diagnóstico computadorizado com scanner, troca de óleo, manutenção de transmissão automática e componentes de motores, mantendo os escapamentos como uma de nossas mais importantes especialidades.
              </p>
            </div>
          </div>

          {/* Galeria de Fotos da Loja e Estrutura */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-heading font-bold text-primary-dark mb-2">
                Conheça a Nossa Estrutura Física
              </h3>
              <p className="text-gray-600 text-sm">
                Instalações preparadas para atendimento ágil e seguro na Rua Pedro Gusso, no bairro Novo Mundo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src="https://img.supremasite.com.br/bs/bs-loja.webp"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/bs-loja.webp'; }}
                    alt="Fachada Oficial BS CAR CENTER - R. Pedro Gusso, 2340"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-primary-dark/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Unidade 2340
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 text-base mb-1">
                    Fachada Principal & Recepção
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Localização na Rua Pedro Gusso, 2340. Recepção de clientes, orçamentos, diagnósticos preventivos e canal direto de atendimento com nossa equipe técnica.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src="https://img.supremasite.com.br/bs/bs-loja-cic.webp"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/bs-loja-cic.webp'; }}
                    alt="Pátio e Boxes de Manutenção - R. Pedro Gusso, 2324"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                    Unidade 2324
                  </div>
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-gray-900 text-base mb-1">
                    Pátio de Manobra & Boxes Mecânicos
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Acesso operacional na Rua Pedro Gusso, 2324. Elevadores automotivos, rampa de geometria 3D, área ampla para movimentação e pátio seguro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-primary-blue shadow-sm">
              <Target className="text-primary-blue w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-primary-dark mb-2">Compromisso Técnico</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Diagnósticos baseados em dados reais, leitura de parâmetros eletrônicos e inspeção mecânica minuciosa antes de qualquer substituição de peças.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-primary-yellow shadow-sm">
              <Wrench className="text-primary-blue w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-primary-dark mb-2">Transparência</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Orçamentos claros e detalhados. O cliente é informado exatamente sobre o que precisa de reparo imediato e o que pode ser programado para revisões futuras.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl border-t-4 border-primary-green shadow-sm">
              <ShieldCheck className="text-primary-blue w-10 h-10 mb-3" />
              <h3 className="text-lg font-bold text-primary-dark mb-2">Garantia Legal</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Cumprimento integral da garantia legal de 90 dias para mão de obra (Art. 26 do Código de Defesa do Consumidor) e termos de garantia dos fabricantes de autopeças.
              </p>
            </div>
          </div>

          {/* Infrastructure */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm mb-16">
            <h2 className="text-2xl font-heading font-bold text-primary-dark text-center mb-8">
              Estrutura para Atendimento no Novo Mundo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cpu, title: "Diagnóstico com Scanner", text: "Leitura de códigos e monitoramento de falhas eletrônicas." },
                { icon: Wrench, title: "Elevadores e Equipamentos", text: "Infraestrutura para inspeção segura de freios e suspensão." },
                { icon: MapPin, title: "Acesso Facilitado", text: "Localizado na R. Pedro Gusso, 2340, perto do CIC e Capão Raso." },
                { icon: Clock, title: "Horários Estruturados", text: "Segunda a sexta das 08h às 18h e sábados das 08h às 12h." }
              ].map((item, idx) => (
                <div key={idx} className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary-blue">
                    <item.icon size={22} />
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary-blue text-white rounded-3xl p-8 md:p-10 text-center relative overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-heading font-black mb-3">
              Traga Seu Veículo Para Uma Avaliação
            </h2>
            <p className="text-gray-100 max-w-xl mx-auto mb-6 text-sm">
              Visite nossa oficina no Novo Mundo ou converse diretamente com nossa equipe técnica pelo WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=Olá! Vim pela página Sobre e gostaria de agendar uma avaliação.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-yellow text-primary-dark font-black py-3 px-8 rounded-full hover:bg-yellow-400 transition-colors text-sm shadow-md"
              >
                AGENDAR ATENDIMENTO
              </a>
              <Link
                to="/manutencao-automotiva-curitiba"
                className="bg-white/10 border border-white/30 text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary-dark transition-colors text-sm"
              >
                VER MANUTENÇÃO AUTOMOTIVA
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
