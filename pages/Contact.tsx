import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/constants';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { trackFormSubmit } from '../lib/analytics';

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const message = `Olá! Vim pelo formulário de contato da BS CAR CENTER.%0A%0A` +
                   `Nome: ${data.nome}%0A` +
                   `Telefone: ${data.telefone}%0A` +
                   `Email: ${data.email || 'Não informado'}%0A` +
                   `Assunto: ${data.assunto}%0A` +
                   `Mensagem: ${data.mensagem}`;
    
    const url = `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=${message}`;
    // GA4: só chega aqui após validação do react-hook-form. Nenhum campo digitado é enviado.
    trackFormSubmit('contato');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <EnhancedSEO 
        title="Contato e Localização | BS CAR CENTER" 
        description="Entre em contato com a BS CAR CENTER no Novo Mundo, Curitiba. WhatsApp (41) 99843-4800, telefone (41) 3268-3473 ou visite nossa oficina." 
        canonicalPath="/contato"
        keywords="contato oficina curitiba, telefone bs car center, whatsapp bs car center, oficina mecanica novo mundo"
        schemaType="AutoRepair"
      />
      
      <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
        
        {/* Banner with Video Background */}
        <div className="bg-primary-dark py-16 mb-12 relative overflow-hidden text-center text-white border-b-4 border-primary-yellow">
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
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/95 via-primary-dark/85 to-primary-dark/95"></div>
          <div className="container mx-auto px-4 relative z-10 max-w-4xl">
            <span className="text-primary-yellow font-bold uppercase tracking-wider text-xs block mb-2">
              Atendimento e Agendamentos no Novo Mundo
            </span>
            <h1 className="text-3xl md:text-5xl font-heading font-black mb-3">
              Fale com a BS CAR CENTER
            </h1>
            <p className="text-gray-200 text-sm md:text-base max-w-xl mx-auto">
              Tire dúvidas, solicite orçamentos ou agende a avaliação do seu veículo com nossa equipe técnica em Curitiba.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Contact Info Side */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Store Facade Photo */}
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm aspect-[16/10] bg-gray-100 group">
                <img
                  src="https://img.supremasite.com.br/bs/bs-loja.webp"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = '/bs-loja.webp'; }}
                  alt="Fachada Oficial BS CAR CENTER na Rua Pedro Gusso, 2340 - Novo Mundo, Curitiba"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-primary-dark/90 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow">
                  <MapPin size={12} className="text-primary-yellow" />
                  <span>R. Pedro Gusso, 2340</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                  Canais Oficiais
                </h2>

                <div className="space-y-4 text-xs md:text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary-blue/10 text-primary-blue rounded-xl shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold mb-0.5">Endereço</strong>
                      <p className="text-gray-600 leading-relaxed">{COMPANY_INFO.address}</p>
                      <a 
                        href={COMPANY_INFO.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-blue font-bold hover:underline inline-flex items-center gap-1 mt-1 text-xs"
                      >
                        <Navigation size={12} /> Ver no Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-green-50 text-primary-green rounded-xl shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold mb-0.5">WhatsApp</strong>
                      <p className="text-gray-600">{COMPANY_INFO.whatsappDisplay}</p>
                      <a 
                        href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-green font-bold hover:underline inline-block mt-1 text-xs"
                      >
                        Iniciar Conversa no WhatsApp &rarr;
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary-blue/10 text-primary-blue rounded-xl shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold mb-0.5">Telefone Fixo</strong>
                      <p className="text-gray-600">{COMPANY_INFO.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary-blue/10 text-primary-blue rounded-xl shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold mb-0.5">E-mail</strong>
                      <p className="text-gray-600 break-all">{COMPANY_INFO.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 bg-primary-blue/10 text-primary-blue rounded-xl shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <strong className="block text-gray-900 font-bold mb-0.5">Horário de Funcionamento</strong>
                      <p className="text-gray-600">Segunda a Sexta: 08:00 às 18:00</p>
                      <p className="text-gray-600">Sábado: 08:00 às 12:00</p>
                      <p className="text-gray-400 text-xs">Domingos e feriados: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-1">Envie Sua Mensagem</h2>
                <p className="text-gray-500 text-xs mb-6">Receba resposta rápida pelo WhatsApp da nossa equipe técnica.</p>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-bold mb-1 text-xs">Nome Completo</label>
                    <input 
                      {...register("nome", { required: true })}
                      type="text" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none" 
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-bold mb-1 text-xs">Telefone / WhatsApp</label>
                      <input 
                        {...register("telefone", { required: true })}
                        type="tel" 
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none" 
                        placeholder="(41) 9..."
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-1 text-xs">E-mail (opcional)</label>
                      <input 
                        {...register("email")}
                        type="email" 
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none" 
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-1 text-xs">Assunto</label>
                    <select 
                      {...register("assunto")}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none"
                    >
                      <option value="Agendamento de Revisão">Agendamento de Revisão</option>
                      <option value="Orçamento de Freios ou Suspensão">Orçamento de Freios ou Suspensão</option>
                      <option value="Geometria e Balanceamento">Geometria e Balanceamento</option>
                      <option value="Diagnóstico com Scanner">Diagnóstico com Scanner</option>
                      <option value="Troca de Óleo / Câmbio Automático">Troca de Óleo / Câmbio Automático</option>
                      <option value="Escapamentos e Catalisadores">Escapamentos e Catalisadores</option>
                      <option value="Outros Assuntos">Outros Assuntos</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-bold mb-1 text-xs">Mensagem ou Sintoma do Carro</label>
                    <textarea 
                      {...register("mensagem")}
                      rows={4} 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-primary-blue text-sm outline-none" 
                      placeholder="Descreva o modelo do veículo, ano e o que está ocorrendo..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-primary-green hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                  >
                    <MessageCircle size={18} />
                    FALAR PELO WHATSAPP
                  </button>
                </form>
              </div>
            </div>

          </div>

          {/* Full Width Map */}
          <div className="bg-white p-4 rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-2 mb-2 flex items-center justify-between">
              <span className="font-bold text-gray-800 text-sm flex items-center gap-2">
                <MapPin className="text-primary-yellow" /> R. Pedro Gusso, 2340 - Novo Mundo, Curitiba/PR
              </span>
              <a 
                href={COMPANY_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-primary-blue font-bold hover:underline"
              >
                Abrir Rota Completa
              </a>
            </div>
            <div className="h-72 w-full rounded-2xl overflow-hidden bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8797967272847!2d-49.29568902375841!3d-25.47570497753308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce32d2b5f5471%3A0x6b8f72200259f972!2sR.%20Pedro%20Gusso%2C%202340%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081900-080!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                title="Mapa de Localização BS CAR CENTER"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
