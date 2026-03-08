import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact", {
        body: form,
      });
      if (error) throw error;
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center"
      >
        Get In <span className="gradient-text">Touch</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="font-heading text-2xl font-semibold text-foreground">
            Let's Build Something Together
          </h3>
          <p className="text-muted-foreground font-body text-sm">
            Open to: Internships · Collaborations · Projects
          </p>
          <div className="space-y-3">
            {[
              { icon: <Mail size={16} />, text: "arshadmahalkari@gmail.com", href: "mailto:arshadmahalkari@gmail.com" },
              { icon: <Github size={16} />, text: "GitHub", href: "https://github.com/arshadmahalkari" },
              { icon: <Linkedin size={16} />, text: "LinkedIn", href: "https://linkedin.com/in/arshad-mahalkari" },
              { icon: <MapPin size={16} />, text: "India", href: undefined },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <span className="text-primary">{item.icon}</span>
                {item.href ? (
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors font-body">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground font-body">{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-6 space-y-4"
        >
          {[
            { key: "name", label: "Name *", type: "text" },
            { key: "email", label: "Email *", type: "email" },
            { key: "subject", label: "Subject", type: "text" },
          ].map((field) => (
            <div key={field.key}>
              <label className="text-xs font-heading text-muted-foreground mb-1 block">{field.label}</label>
              <input
                type={field.type}
                value={form[field.key as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          ))}
          <div>
            <label className="text-xs font-heading text-muted-foreground mb-1 block">Message *</label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-muted/30 border border-border rounded-lg px-4 py-2.5 text-sm text-foreground font-body placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={sending}
            className="glow-button-solid w-full flex items-center justify-center gap-2 text-sm font-semibold disabled:opacity-50"
          >
            <Send size={14} /> {sending ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
