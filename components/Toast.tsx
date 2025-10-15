'use client';

import { useState, useEffect } from 'react';

interface ToastProps {
  message?: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose?: () => void;
}

export default function Toast({ 
  message: propMessage, 
  type = 'info', 
  duration = 5000, 
  onClose: propOnClose 
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  // Handle external toast triggers
  useEffect(() => {
    const handleToastTrigger = () => {
      const toastRoot = document.getElementById('toast-root');
      if (toastRoot) {
        const toastMessage = toastRoot.getAttribute('data-message');
        const toastType = toastRoot.getAttribute('data-type') as 'success' | 'error' | 'info' || 'info';
        
        if (toastMessage) {
          setMessage(toastMessage);
          setIsVisible(true);
          toastRoot.removeAttribute('data-message');
          toastRoot.removeAttribute('data-type');
        }
      }
    };

    // Check for toast triggers every 100ms
    const interval = setInterval(handleToastTrigger, 100);
    return () => clearInterval(interval);
  }, []);

  // Use props if provided (for direct usage)
  useEffect(() => {
    if (propMessage) {
      setMessage(propMessage);
      setIsVisible(true);
    }
  }, [propMessage]);

  // Auto-hide after duration
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (propOnClose) propOnClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, propOnClose]);

  const handleClose = () => {
    setIsVisible(false);
    if (propOnClose) propOnClose();
  };

  if (!isVisible || !message) return null;

  const getToastStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      case 'info':
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'success':
        return (
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 max-w-sm w-full">
      <div className={`${getToastStyles()} border rounded-lg shadow-lg p-4 animate-slide-up`}>
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">
              {message}
            </p>
          </div>
          <div className="ml-4 flex-shrink-0">
            <button
              onClick={handleClose}
              className="inline-flex text-gray-400 hover:text-gray-600 focus:outline-none focus:text-gray-600 transition-colors"
              aria-label="Cerrar notificación"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

