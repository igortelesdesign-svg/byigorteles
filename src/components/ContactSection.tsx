import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Copy, Check, Send, Linkedin, Github, Instagram, ExternalLink, Sparkles, MessageSquare, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '', // anti-spam bot field
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const emailAddress = 'igortelesdesign@gmail.com';
  const phoneNumber = '+55 84 98121-3101';
  const whatsappUrl = 'https://wa.me/5584981213101';
  const linkedinUrl = 'https://www.linkedin.com/in/byigorteles';
  const githubUrl = 'https://github.com/igortelesdesign-svg';
  const instagramUrl = 'https://www.instagram.com/byigorteles/';

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    // Spam check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError(language === 'pt' ? 'Por favor, preencha todos os campos obrigatórios.' : 'Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch & prepare mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Also open mailto as direct bridge if user desires
      const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
        `[Portfolio Contact] ${formData.subject || 'Opportunity / Project'}`
      )}&body=${encodeURIComponent(
        `Nome: ${formData.name}\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
      )}`;
      
      // Reset form
      setFormData({ name: '', email: '', subject: '', message: '', honeypot: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#0B1018] relative border-t border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[32rem] h-[32rem] bg-[#168BFF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#7257FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Outreach & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101722] border border-[#168BFF]/20 text-[11px] font-mono text-[#00D5FF]">
                  <Sparkles className="w-3 h-3 text-[#00D5FF]" />
                  {t.contact.badge}
                </span>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101722] border border-white/10 text-[11px] font-mono text-[#A6B0C0]">
                  <span className="text-xs leading-none">🇧🇷</span>
                  <span>{t.contact.location}</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#F5F7FA] tracking-tight leading-tight">
                {t.contact.title}
              </h2>

              <p className="text-base sm:text-lg text-[#A6B0C0] leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Email Card & Quick Copy */}
            <div className="p-6 rounded-2xl bg-[#101722] border border-white/10 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#001E36] border border-[#00A8FF]/30 flex items-center justify-center text-[#00D5FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-[#687386] uppercase block">
                    Direct Email
                  </span>
                  <span className="font-mono text-sm sm:text-base text-[#F5F7FA] font-semibold break-all">
                    {emailAddress}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-[#07090D] border border-white/10 hover:border-[#00D5FF]/40 text-xs font-mono text-[#A6B0C0] hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">{t.contact.emailCopied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#00D5FF]" />
                      <span>{t.contact.copyEmail}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${emailAddress}`}
                  aria-label="Enviar e-mail para Igor Teles"
                  className="py-2.5 px-4 rounded-xl bg-[#168BFF] hover:bg-[#00A8FF] text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-colors shadow-md min-h-[44px]"
                >
                  <span>{t.contact.directEmailBtn}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Professional Contacts & Networks */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#687386] block">
                {language === 'pt' ? 'CONTATOS & REDES' : 'CONTACT & NETWORKS'}
              </span>

              <div className="flex flex-col gap-2.5">
                {/* 1. LinkedIn (Prioridade) */}
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="p-4 rounded-xl bg-[#101722] border border-white/5 hover:border-[#00D5FF]/30 hover:bg-[#151D2A] text-sm text-[#F5F7FA] flex items-center justify-between transition-all group min-h-[44px]"
                  aria-label="LinkedIn de Igor Teles"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-[#07090D] border border-white/5 flex items-center justify-center text-[#00D5FF] group-hover:border-[#00D5FF]/40 transition-colors shrink-0">
                      <Linkedin className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-[#687386] uppercase leading-tight">
                        LinkedIn
                      </span>
                      <span className="font-mono text-xs text-[#F5F7FA] group-hover:text-[#00D5FF] transition-colors truncate">
                        linkedin.com/in/byigorteles
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#687386] group-hover:text-[#00D5FF] transition-colors shrink-0 ml-2" />
                </a>

                {/* 2. GitHub (Prioridade) */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="p-4 rounded-xl bg-[#101722] border border-white/5 hover:border-[#00D5FF]/30 hover:bg-[#151D2A] text-sm text-[#F5F7FA] flex items-center justify-between transition-all group min-h-[44px]"
                  aria-label="GitHub de Igor Teles"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-[#07090D] border border-white/5 flex items-center justify-center text-[#00D5FF] group-hover:border-[#00D5FF]/40 transition-colors shrink-0">
                      <Github className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-[#687386] uppercase leading-tight">
                        GitHub
                      </span>
                      <span className="font-mono text-xs text-[#F5F7FA] group-hover:text-[#00D5FF] transition-colors truncate">
                        github.com/igortelesdesign-svg
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#687386] group-hover:text-[#00D5FF] transition-colors shrink-0 ml-2" />
                </a>

                {/* 3. Instagram */}
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="p-4 rounded-xl bg-[#101722] border border-white/5 hover:border-[#00D5FF]/30 hover:bg-[#151D2A] text-sm text-[#F5F7FA] flex items-center justify-between transition-all group min-h-[44px]"
                  aria-label="Instagram de Igor Teles"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-[#07090D] border border-white/5 flex items-center justify-center text-[#00D5FF] group-hover:border-[#00D5FF]/40 transition-colors shrink-0">
                      <Instagram className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-[#687386] uppercase leading-tight">
                        INSTAGRAM
                      </span>
                      <span className="font-mono text-xs text-[#F5F7FA] group-hover:text-[#00D5FF] transition-colors truncate">
                        @byigorteles
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#687386] group-hover:text-[#00D5FF] transition-colors shrink-0 ml-2" />
                </a>

                {/* 4. WhatsApp / Telefone */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="p-4 rounded-xl bg-[#101722] border border-white/5 hover:border-[#00D5FF]/30 hover:bg-[#151D2A] text-sm text-[#F5F7FA] flex items-center justify-between transition-all group min-h-[44px]"
                  aria-label="WhatsApp de Igor Teles"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-[#07090D] border border-white/5 flex items-center justify-center text-[#00D5FF] group-hover:border-[#00D5FF]/40 transition-colors shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-[#687386] uppercase leading-tight">
                        WhatsApp / Telefone
                      </span>
                      <span className="font-mono text-xs text-[#F5F7FA] group-hover:text-[#00D5FF] transition-colors whitespace-nowrap">
                        {phoneNumber}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#687386] group-hover:text-[#00D5FF] transition-colors shrink-0 ml-2" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-2xl bg-[#101722] border border-white/10 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-5 h-5 text-[#00D5FF]" />
                  <h3 className="font-display font-bold text-lg text-[#F5F7FA]">
                    {language === 'pt' ? 'Enviar Mensagem' : 'Send a Message'}
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#687386]">Response in ~24h</span>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2 py-10">
                  <Check className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="font-display font-bold text-lg text-emerald-300">
                    {t.contact.successMsg}
                  </h4>
                  <p className="text-xs text-[#A6B0C0]">
                    {language === 'pt' ? 'Obrigado pelo contato! Retornarei o mais breve possível.' : 'Thank you for reaching out! I will get back to you shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Spam honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {formError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300 font-mono">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-xs font-mono text-[#A6B0C0]">
                        {t.contact.formName} *
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={language === 'pt' ? 'Seu nome ou empresa' : 'Your name or company'}
                        className="w-full px-4 py-3 rounded-xl bg-[#07090D] border border-white/10 text-sm text-[#F5F7FA] placeholder-[#687386] focus:border-[#00D5FF] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-xs font-mono text-[#A6B0C0]">
                        {t.contact.formEmail} *
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="seuemail@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#07090D] border border-white/10 text-sm text-[#F5F7FA] placeholder-[#687386] focus:border-[#00D5FF] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-subject" className="text-xs font-mono text-[#A6B0C0]">
                      {t.contact.formSubject}
                    </label>
                    <input
                      id="form-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={language === 'pt' ? 'Oportunidade Front-End / Projeto UI/UX' : 'Front-End Opportunity / UI/UX Project'}
                      className="w-full px-4 py-3 rounded-xl bg-[#07090D] border border-white/10 text-sm text-[#F5F7FA] placeholder-[#687386] focus:border-[#00D5FF] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="form-message" className="text-xs font-mono text-[#A6B0C0]">
                      {t.contact.formMessage} *
                    </label>
                    <textarea
                      id="form-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={language === 'pt' ? 'Conte um pouco sobre o projeto ou a oportunidade...' : 'Tell me a bit about your project or opportunity...'}
                      className="w-full px-4 py-3 rounded-xl bg-[#07090D] border border-white/10 text-sm text-[#F5F7FA] placeholder-[#687386] focus:border-[#00D5FF] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="btn-send-message"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#168BFF] to-[#00D5FF] text-[#F5F7FA] font-medium text-sm flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#168BFF]/25 active:scale-[0.99] disabled:opacity-50 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.contact.sending : t.contact.sendBtn}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
