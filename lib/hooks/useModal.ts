import { useState, useCallback } from 'react';
import { GA4_EVENTS } from '@/lib/constants';
import { trackEvent } from '@/lib/utils';

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState('');

  const openModal = useCallback((type: string, origin: string = 'unknown') => {
    setModalType(type);
    setIsOpen(true);
    trackEvent(GA4_EVENTS.START_LEAD, { origen: origin, tipo: type });
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalType('');
  }, []);

  const toggleModal = useCallback((type?: string, origin: string = 'unknown') => {
    if (isOpen) {
      closeModal();
    } else if (type) {
      openModal(type, origin);
    }
  }, [isOpen, openModal, closeModal]);

  return {
    isOpen,
    modalType,
    openModal,
    closeModal,
    toggleModal,
  };
}
