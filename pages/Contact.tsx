import React from 'react';
import EnhancedSEO from '../components/EnhancedSEO';
import { COMPANY_INFO } from '../data/constants';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';

const Contact: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    const message = `Olá! Vim pelo formulário de contato do site.%0A%0A` +
                   `Nome: ${data.nome}%0A` +
                   `Telefone: ${data.telefone}%0A` +
                   `Email: ${data.email}%0A` +
                   `Assunto: ${data.assunto}%0A` +
                   `Mensagem: ${data.mensagem}`;
    
    const url = `https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}&text=${message}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <EnhancedSEO 
        title="Fale Conosco - Agende sua Revisão" 
        description="Entre em contato com a BS Escapamentos. Solicite orçamento via WhatsApp, telefone ou visite nossa oficina no Novo Mundo, Curitiba." 
        canonicalPath="/contato"
        keywords="contato oficina, telefone mecanico curitiba, agendar revisão, whatsapp oficina, endereço bs escapamentos"
        schemaType="AutoRepair"
      />
      
      <div className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-dark mb-4">Entre em Contato</h1>
            <p className="text-xl text-gray-600">Estamos prontos para atender você com agilidade.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info Side */}
            <div className="space-y-8">
               {/* Cards */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary-yellow">
                    <Phone className="text-primary-blue w-8 h-8 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Telefones</h3>
                    <p className="text-gray-600 block">{COMPANY_INFO.phone}</p>
                    <p className="text-gray-600 block">{COMPANY_INFO.whatsappDisplay}</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary-green">
                    <MessageCircle className="text-primary-blue w-8 h-8 mb-4" />
                    <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                    <p className="text-sm text-gray-500 mb-3">Atendimento rápido e orçamentos.</p>
                    <a 
                      href={`https://api.whatsapp.com/send?phone=${COMPANY_INFO.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary-green font-bold hover:underline"
                    >
                      Iniciar Conversa
                    </a>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-primary-blue">
                    <Mail className="text-primary-blue w-8 h-8 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-600 break-words">{COMPANY_INFO.email}</p>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-gray-800">
                    <Clock className="text-primary-blue w-8 h-8 mb-4" />
                    <h3 className="font-bold text-lg mb-2">Horários</h3>
                    <p className="text-gray-600 text-sm">Seg-Sex: 08h - 18h</p>
                    <p className="text-gray-600 text-sm">Sábado: 08h - 12h</p>
                 </div>
               </div>

               {/* Map Card */}
               <div className="bg-white p-4 rounded-2xl shadow-lg">
                 <div className="flex items-center gap-3 mb-4 px-4">
                   <MapPin className="text-primary-red" />
                   <p className="text-gray-700 font-medium">{COMPANY_INFO.address}</p>
                 </div>
                 <div className="h-64 rounded-xl overflow-hidden bg-gray-200">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.8797967272847!2d-49.29568902375841!3d-25.47570497753308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce32d2b5f5471%3A0x6b8f72200259f972!2sR.%20Pedro%20Gusso%2C%202340%20-%20Novo%20Mundo%2C%20Curitiba%20-%20PR%2C%2081900-080!5e0!3m2!1spt-BR!2sbr!4v1683123456789!5m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{border:0}} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        title="Mapa BS Escapamentos"
                    ></iframe>
                 </div>
               </div>
            </div>

            {/* Form Side */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
               <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie sua Mensagem</h2>
               <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Nome</label>
                    <input 
                      {...register("nome", { required: true })}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Telefone</label>
                        <input 
                        {...register("telefone", { required: true })}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="(41) 9..."
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                        <input 
                        {...register("email")}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        placeholder="seu@email.com"
                        />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Assunto</label>
                    <select 
                      {...register("assunto")}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                    >
                        <option value="Orçamento">Solicitar Orçamento</option>
                        <option value="Dúvida">Tirar Dúvida</option>
                        <option value="Agendamento">Agendamento</option>
                        <option value="Outros">Outros Assuntos</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Mensagem</label>
                    <textarea 
                      {...register("mensagem")}
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-primary-blue hover:bg-blue-900 text-white font-bold py-4 rounded-xl shadow-lg transition-transform hover:-translate-y-1">
                    Enviar Mensagem
                  </button>
               </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;