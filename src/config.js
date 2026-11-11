export const WHATSAPP_PHONE = '905468203948';

const isMobileDevice = () =>
  typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Desktop goes straight to WhatsApp Web to avoid the wa.me fallback page.
export const getWhatsAppUrl = (text = '') => {
  const query = text ? encodeURIComponent(text) : '';
  if (isMobileDevice()) {
    return `https://wa.me/${WHATSAPP_PHONE}${query ? `?text=${query}` : ''}`;
  }
  return `https://web.whatsapp.com/send?phone=${WHATSAPP_PHONE}${query ? `&text=${query}` : ''}`;
};
