import { BUSINESS_INFO } from '../data/businessInfo';

export const getGeneralWhatsAppUrl = (): string => {
  const message = 'Hello Riyansh Marketing, I would like to know more about your tiles and sanitary ware collection.';
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
};

export const getProductWhatsAppUrl = (productName: string, selectedSize?: string): string => {
  const sizeText = selectedSize ? `, size ${selectedSize}` : '';
  const message = `Hello Riyansh Marketing, I am interested in ${productName}${sizeText}. Please share the price, availability, and additional details.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
};

export const getCategoryWhatsAppUrl = (categoryName: string): string => {
  const message = `Hello Riyansh Marketing, I am interested in exploring options in ${categoryName}. Please share catalogue details and available finishes.`;
  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
};

export const getFormWhatsAppUrl = (formData: {
  name: string;
  phone: string;
  category: string;
  size?: string;
  message: string;
}): string => {
  const text = [
    `*New Project Enquiry — Riyansh Marketing*`,
    `----------------------------------------`,
    `*Customer Name:* ${formData.name}`,
    `*Contact Number:* ${formData.phone}`,
    `*Product Category:* ${formData.category || 'General Tiles & Sanitary'}`,
    formData.size ? `*Preferred Size:* ${formData.size}` : null,
    `*Message:* ${formData.message || 'Looking for catalogue and pricing.'}`,
    `----------------------------------------`,
    `Sent from Riyansh Marketing Website`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
};
