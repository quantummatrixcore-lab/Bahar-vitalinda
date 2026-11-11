import React, { useState, useEffect } from 'react';
import { getWhatsAppUrl } from '../config.js';
import { X, Send, Calendar, User, Phone, BookOpen, MessageSquare, Sparkles } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose, t, lang, preSelectedService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: '',
    datePref: '',
    note: ''
  });

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, service: preSelectedService }));
    } else {
      setFormData((prev) => ({ ...prev, service: t.services.items[0]?.name || '' }));
    }
  }, [preSelectedService, t]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format WhatsApp message according to active language
    const m = t.ui.booking;
    const text = `🌸 *${m.msgTitle}*\n\n` +
      `👤 *${m.msgName}:* ${formData.fullName}\n` +
      `💆‍♀️ *${m.msgService}:* ${formData.service}\n` +
      `📅 *${m.msgDate}:* ${formData.datePref || m.msgDateDefault}\n` +
      `📝 *${m.msgNote}:* ${formData.note || m.msgNoteDefault}\n\n` +
      `_${m.msgFooter}_`;
    window.open(getWhatsAppUrl(text), '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E8D1C5] relative animate-in fade-in zoom-in duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#F2E5E0] text-[#2D1B1D] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B3A4A] tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>{t.ui.studioName}</span>
          </div>
          <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#2D1B1D]">
            {t.booking.modalTitle}
          </h3>
          <p className="text-xs sm:text-sm text-[#6B5754] mt-1">
            {t.booking.modalSubtitle}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div>
            <label className="block text-xs font-bold text-[#3B2B28] uppercase tracking-wider mb-1.5">
              {t.booking.fullName} *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#8C6D68] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder={t.booking.placeholderName}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EBDCD4] bg-[#FCF8F6] text-sm text-[#2D1B1D] focus:outline-none focus:border-[#B56576] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3B2B28] uppercase tracking-wider mb-1.5">
              {t.booking.serviceSelect} *
            </label>
            <div className="relative">
              <BookOpen className="w-4 h-4 text-[#8C6D68] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EBDCD4] bg-[#FCF8F6] text-sm text-[#2D1B1D] focus:outline-none focus:border-[#B56576] focus:bg-white transition-all"
              >
                <optgroup label={t.ui.booking.groupSessions}>
                  {t.services.items.map((srv) => (
                    <option key={srv.id} value={srv.name}>{srv.name}</option>
                  ))}
                </optgroup>
                <optgroup label={t.ui.booking.groupAcademy}>
                  <option value={t.academy.title}>{t.academy.title}</option>
                  <option value={t.ui.gift.bookingService}>{t.ui.gift.bookingService}</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3B2B28] uppercase tracking-wider mb-1.5">
              {t.booking.datePref}
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 text-[#8C6D68] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={formData.datePref}
                onChange={(e) => setFormData({ ...formData, datePref: e.target.value })}
                placeholder={t.ui.booking.datePlaceholder}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EBDCD4] bg-[#FCF8F6] text-sm text-[#2D1B1D] focus:outline-none focus:border-[#B56576] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#3B2B28] uppercase tracking-wider mb-1.5">
              {t.booking.note}
            </label>
            <div className="relative">
              <MessageSquare className="w-4 h-4 text-[#8C6D68] absolute left-3.5 top-3.5" />
              <textarea
                rows="2"
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                placeholder={t.booking.placeholderNote}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#EBDCD4] bg-[#FCF8F6] text-sm text-[#2D1B1D] focus:outline-none focus:border-[#B56576] focus:bg-white transition-all resize-none"
              ></textarea>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{t.booking.sendWhatsApp}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
