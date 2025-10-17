'use client';

import { useState, useEffect } from 'react';
import { CONTENT, EXTERNAL_LINKS, GA4_EVENTS, LEAD_MODAL_TYPES } from '@/lib/constants';
import { trackEvent, generateWhatsAppMessage } from '@/lib/utils';

interface LeadModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  modalType?: string;
}

export default function LeadModal({ isOpen: propIsOpen, onClose: propOnClose, modalType: propModalType }: LeadModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [formData, setFormData] = useState({
    equipo: '',
    nombre: '',
    email: '',
    whatsapp: '',
    motivo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Handle external modal triggers
  useEffect(() => {
    const handleModalTrigger = () => {
      const modalRoot = document.getElementById('lead-modal-root');
      if (modalRoot) {
        const type = modalRoot.getAttribute('data-modal-type');
        if (type) {
          setModalType(type);
          setIsOpen(true);
          modalRoot.removeAttribute('data-modal-type');
        }
      }
    };

    // Check for modal triggers every 100ms
    const interval = setInterval(handleModalTrigger, 100);
    return () => clearInterval(interval);
  }, []);

  // Use props if provided (for direct usage)
  useEffect(() => {
    if (propIsOpen !== undefined) {
      setIsOpen(propIsOpen);
    }
    if (propModalType) {
      setModalType(propModalType);
    }
  }, [propIsOpen, propModalType]);

  const handleClose = () => {
    setIsOpen(false);
    setSubmitStatus('idle');
    setFormData({ equipo: '', nombre: '', email: '', whatsapp: '', motivo: '' });
    if (propOnClose) propOnClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Prepare submission data
      const submissionData = {
        ...formData,
        modalType,
        timestamp: new Date().toISOString(),
        source: 'socios-coquitas-landing',
      };

      // Try webhook first, fallback to Tally
      try {
        const response = await fetch(EXTERNAL_LINKS.webhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(submissionData),
        });

        if (response.ok) {
          setSubmitStatus('success');
          trackEvent(GA4_EVENTS.SUBMIT_LEAD_SUCCESS, {
            modalType,
            equipo: formData.equipo,
            hasEmail: !!formData.email,
            hasWhatsapp: !!formData.whatsapp,
          });
        } else {
          throw new Error('Webhook failed');
        }
      } catch (webhookError) {
        // Fallback to Tally redirect
        const tallyUrl = new URL(EXTERNAL_LINKS.tally);
        Object.entries(submissionData).forEach(([key, value]) => {
          if (value) tallyUrl.searchParams.set(key, value.toString());
        });
        
        window.open(tallyUrl.toString(), '_blank', 'noopener,noreferrer');
        setSubmitStatus('success');
        trackEvent(GA4_EVENTS.SUBMIT_LEAD_SUCCESS, {
          modalType,
          method: 'tally_redirect',
          equipo: formData.equipo,
        });
      }
    } catch (error) {
      console.error('Lead submission error:', error);
      setSubmitStatus('error');
      trackEvent(GA4_EVENTS.SUBMIT_LEAD_ERROR, {
        modalType,
        error: error instanceof Error ? error.message : 'Unknown error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppRedirect = () => {
    const message = generateWhatsAppMessage(
      formData.equipo,
      formData.nombre,
      0, // We don't have calculator results here
      0
    );
    const whatsappUrl = `https://wa.me/5493512392367?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  const getModalTitle = () => {
    switch (modalType) {
      case LEAD_MODAL_TYPES.CREATE_PROGRAM:
        return 'Crear programa Coquita';
      case LEAD_MODAL_TYPES.CONSULTATION:
        return 'Hablar con un asesor';
      case LEAD_MODAL_TYPES.SPONSORS:
        return 'Recibir propuesta de Sponsors';
      default:
        return 'Contacto';
    }
  };

  const getModalDescription = () => {
    switch (modalType) {
      case LEAD_MODAL_TYPES.CREATE_PROGRAM:
        return 'Completa tus datos y te ayudaremos a configurar tu programa Coquita.';
      case LEAD_MODAL_TYPES.CONSULTATION:
        return 'Nuestro equipo te contactará para resolver todas tus dudas.';
      case LEAD_MODAL_TYPES.SPONSORS:
        return 'Te enviaremos la propuesta completa cuando esté disponible.';
      default:
        return 'Te contactaremos pronto.';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {getModalTitle()}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {getModalDescription()}
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Cerrar modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  ¡Gracias por tu interés!
                </h4>
                <p className="text-gray-600 mb-6">
                  Te contactaremos pronto para continuar con tu solicitud.
                </p>
                <div className="space-y-3">
                  <button
                    onClick={handleClose}
                    className="btn-primary w-full"
                  >
                    Cerrar
                  </button>
                  {formData.whatsapp && (
                    <button
                      onClick={handleWhatsAppRedirect}
                      className="btn-secondary w-full inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Contactar por WhatsApp
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Equipo */}
                <div>
                  <label htmlFor="equipo" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre del equipo *
                  </label>
                  <input
                    id="equipo"
                    type="text"
                    required
                    value={formData.equipo}
                    onChange={(e) => handleInputChange('equipo', e.target.value)}
                    className="input-field"
                    placeholder="Ej: Club Atlético Ejemplo"
                  />
                </div>

                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                    Tu nombre *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={(e) => handleInputChange('nombre', e.target.value)}
                    className="input-field"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="input-field"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                    WhatsApp
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                    className="input-field"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                {/* Motivo (for consultation) */}
                {modalType === LEAD_MODAL_TYPES.CONSULTATION && (
                  <div>
                    <label htmlFor="motivo" className="block text-sm font-semibold text-gray-700 mb-2">
                      Motivo de consulta
                    </label>
                    <textarea
                      id="motivo"
                      value={formData.motivo}
                      onChange={(e) => handleInputChange('motivo', e.target.value)}
                      className="input-field"
                      rows={3}
                      placeholder="Cuéntanos qué necesitas saber..."
                    />
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.equipo || !formData.nombre}
                  className="btn-primary w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Enviando...
                    </div>
                  ) : (
                    'Enviar solicitud'
                  )}
                </button>

                {/* Error message */}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex">
                      <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-red-800">Error al enviar</h3>
                        <p className="mt-1 text-sm text-red-700">
                          Hubo un problema al enviar tu solicitud. Por favor, inténtalo de nuevo.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

