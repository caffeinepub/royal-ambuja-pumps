import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  ChevronRight,
  Droplets,
  Facebook,
  Factory,
  Home,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Menu,
  Phone,
  Shield,
  Twitter,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import {
  useCompanyStats,
  useServices,
  useSubmitContactForm,
} from "./hooks/useQueries";

const queryClient = new QueryClient();

const NAV_LINKS = [
  { label: "Products", href: "#services" },
  { label: "Applications", href: "#services" },
  { label: "About Us", href: "#approach" },
  { label: "Why Choose Us", href: "#approach" },
  { label: "Contact Us", href: "#contact" },
];

const DEFAULT_SERVICES = [
  {
    iconName: "Droplets",
    title: "Agricultural Pumps",
    description:
      "High-efficiency submersible pumps designed for deep borewell irrigation, ensuring consistent water supply for farms.",
  },
  {
    iconName: "Home",
    title: "Domestic Pumps",
    description:
      "Reliable water pumps for residential use — clean, quiet, and energy-efficient for everyday household needs.",
  },
  {
    iconName: "Factory",
    title: "Industrial Pumps",
    description:
      "Heavy-duty submersible pumps built to handle demanding industrial and commercial water management requirements.",
  },
  {
    iconName: "Zap",
    title: "Solar Pumps",
    description:
      "Eco-friendly solar-powered submersible pumps for off-grid water supply, reducing electricity costs significantly.",
  },
];

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    Droplets: <Droplets className="w-8 h-8" />,
    Home: <Home className="w-8 h-8" />,
    Factory: <Factory className="w-8 h-8" />,
    Zap: <Zap className="w-8 h-8" />,
  };
  return <>{icons[name] ?? <Shield className="w-8 h-8" />}</>;
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-roman-navy border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-roman-gold flex items-center justify-center">
              <span className="text-white font-bold text-base leading-none">
                RA
              </span>
            </div>
            <span className="text-white font-bold text-xl tracking-[0.2em] uppercase">
              ROYAL AMBUJA
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => scrollTo(link.href)}
                data-ocid={`nav.${link.label.toLowerCase().replace(" ", "_")}.link`}
                className="text-white/80 hover:text-roman-gold text-sm font-medium transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollTo("#contact")}
              data-ocid="nav.enquire.button"
              className="bg-roman-gold hover:bg-roman-gold-light text-white font-semibold tracking-wide text-sm px-5 py-2 rounded-sm transition-all duration-200"
            >
              ENQUIRE NOW
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-ocid="nav.mobile.toggle"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-roman-navy-dark border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <button
                  type="button"
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-white/80 hover:text-roman-gold text-sm font-medium text-left py-2 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollTo("#contact")}
                className="bg-roman-gold hover:bg-roman-gold-light text-white font-semibold tracking-wide text-sm mt-2 rounded-sm"
              >
                ENQUIRE NOW
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-end pt-20"
      style={{
        background: `linear-gradient(to right, transparent 0%, rgba(14,47,74,0.7) 40%, rgba(14,47,74,0.95) 100%),
                     url('/assets/generated/hero-roman-bg.dim_1920x900.jpg') center/cover no-repeat`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="ml-auto max-w-xl py-20"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-roman-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            India's Trusted Pump Manufacturer
          </p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tight mb-6">
            POWER YOUR WORLD WITH ROYAL AMBUJA PUMPS
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10">
            Royal Ambuja delivers high-performance submersible pumps for
            agriculture, domestic, and industrial applications. Built for
            reliability, engineered for excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollTo("#services")}
              data-ocid="hero.products.primary_button"
              className="bg-roman-navy hover:bg-roman-navy-dark text-white font-semibold tracking-wide px-8 py-3 rounded-sm border border-white/20 text-sm"
            >
              Explore Products <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              onClick={() => scrollTo("#approach")}
              data-ocid="hero.about.secondary_button"
              variant="outline"
              className="border-roman-gold text-roman-gold hover:bg-roman-gold hover:text-white font-semibold tracking-wide px-8 py-3 rounded-sm text-sm bg-transparent"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { data: services } = useServices();
  const displayServices =
    services && services.length > 0 ? services : DEFAULT_SERVICES;

  return (
    <section id="services" className="bg-roman-charcoal py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-roman-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Products &amp; Solutions
          </p>
          <h2 className="text-white text-3xl md:text-4xl font-bold uppercase tracking-wide">
            OUR PRODUCT RANGE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayServices.map((service, i) => (
            <motion.div
              key={service.title}
              data-ocid={`services.item.${i + 1}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 hover:border-roman-gold/50 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="text-roman-gold mb-5 group-hover:scale-110 transition-transform duration-200">
                <ServiceIcon name={service.iconName} />
              </div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const { data: stats } = useCompanyStats();
  const years = stats ? Number(stats.yearsOfExperience) : 20;
  const clients = stats ? Number(stats.clientsServed) : 50000;
  const satisfaction = stats ? Number(stats.satisfactionRate) : 98;

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="approach" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/assets/uploads/file_000000006edc7208bc002052556347cf-019d1cb9-981f-76ce-aa22-68500f994751-1.png"
              alt="Royal Ambuja Submersible Pump - Warranty Card"
              className="w-full h-[400px] lg:h-[500px] object-contain bg-white"
            />
            <div
              className="absolute -bottom-6 -right-6 w-24 h-24 border-4"
              style={{ borderColor: "oklch(0.72 0.10 73)" }}
            />
          </motion.div>

          {/* Right: Text + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-roman-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Our Strength
            </p>
            <h2 className="text-roman-navy text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">
              THE ROYAL AMBUJA DIFFERENCE
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              With decades of manufacturing excellence and thousands of
              satisfied customers across India, Royal Ambuja pumps are
              synonymous with quality, durability, and after-sales support.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { value: `${years}+`, label: "Years Experience" },
                {
                  value: `${clients.toLocaleString()}+`,
                  label: "Pumps Installed",
                },
                { value: `${satisfaction}%`, label: "Customer Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  data-ocid={`approach.stats.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-roman-navy text-3xl md:text-4xl font-bold">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wide mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => scrollTo("#contact")}
              data-ocid="approach.enquire.button"
              className="bg-roman-navy hover:bg-roman-navy-dark text-white font-semibold tracking-wide px-8 py-3 rounded-sm text-sm uppercase"
            >
              ENQUIRE NOW <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: submitForm, isPending, isSuccess } = useSubmitContactForm();
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.email))
      e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    submitForm(form, {
      onSuccess: () => {
        toast.success("Message sent! We'll be in touch within 24 hours.");
        setForm({ name: "", email: "", message: "" });
      },
      onError: () => {
        toast.error("Failed to send. Please try again or call us directly.");
      },
    });
  };

  return (
    <section id="contact" className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-roman-gold text-sm font-semibold tracking-[0.3em] uppercase mb-3">
              Reach Out
            </p>
            <h2 className="text-roman-navy text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6">
              GET IN TOUCH
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10">
              Looking for a reliable submersible pump for your farm, home, or
              business? Our experts are here to help you choose the right pump.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: <Phone className="w-5 h-5" />,
                  label: "+91 6300900178",
                },
                {
                  icon: <Mail className="w-5 h-5" />,
                  label: "info@royalambuja.com",
                },
                {
                  icon: <MapPin className="w-5 h-5" />,
                  label:
                    "Plot No. 45, Industrial Area, Ahmedabad, Gujarat 382210",
                },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="text-roman-gold">{icon}</div>
                  <span className="text-foreground text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              data-ocid="contact.modal"
              className="bg-white p-8 shadow-card"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="text-sm font-semibold uppercase tracking-wide"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name.input"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    className="rounded-sm h-11 border-border"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <p
                      data-ocid="contact.name.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-semibold uppercase tracking-wide"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="contact-email"
                    data-ocid="contact.email.input"
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    className="rounded-sm h-11 border-border"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p
                      data-ocid="contact.email.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <Label
                    htmlFor="contact-message"
                    className="text-sm font-semibold uppercase tracking-wide"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    data-ocid="contact.message.textarea"
                    placeholder="Tell us about your pump requirements..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    className="rounded-sm border-border resize-none min-h-[120px]"
                  />
                  {errors.message && (
                    <p
                      data-ocid="contact.message.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={isPending || isSuccess}
                  className="bg-roman-navy hover:bg-roman-navy-dark text-white font-semibold tracking-wide uppercase rounded-sm h-12"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="mr-2 w-4 h-4 animate-spin" />{" "}
                      Sending...
                    </>
                  ) : isSuccess ? (
                    "Message Sent!"
                  ) : (
                    "SEND MESSAGE"
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = {
    Products: [
      { label: "Agricultural Pumps", href: "#services" },
      { label: "Domestic Pumps", href: "#services" },
      { label: "Industrial Pumps", href: "#services" },
      { label: "Solar Pumps", href: "#services" },
    ],
    Company: [
      { label: "About Us", href: "#approach" },
      { label: "Our Story", href: "#approach" },
      { label: "Careers", href: "#contact" },
      { label: "News", href: "#contact" },
    ],
    Support: [
      { label: "Dealer Locator", href: "#contact" },
      { label: "Service Centers", href: "#contact" },
      { label: "FAQs", href: "#contact" },
      { label: "Warranty", href: "#contact" },
    ],
  };

  return (
    <footer className="bg-roman-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-sm bg-roman-gold flex items-center justify-center">
                <span className="text-white font-bold text-base leading-none">
                  RA
                </span>
              </div>
              <span className="text-white font-bold text-xl tracking-[0.2em] uppercase">
                ROYAL AMBUJA
              </span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-xs">
              India's trusted submersible pump manufacturer. Quality,
              reliability and performance since 2003.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn" },
                { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
                { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
              ].map(({ icon, label }) => (
                <button
                  type="button"
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-sm border border-white/20 flex items-center justify-center text-white/60 hover:text-roman-gold hover:border-roman-gold/50 transition-colors"
                >
                  {icon}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/55 text-sm">
                <Phone className="w-4 h-4 text-roman-gold" />
                +91 6300900178
              </div>
              <div className="flex items-center gap-3 text-white/55 text-sm">
                <Mail className="w-4 h-4 text-roman-gold" />
                info@royalambuja.com
              </div>
              <div className="flex items-center gap-3 text-white/55 text-sm">
                <MapPin className="w-4 h-4 text-roman-gold" />
                Plot No. 45, Industrial Area, Ahmedabad, Gujarat
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em] mb-5">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="text-white/55 hover:text-roman-gold text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {currentYear} Royal Ambuja Pumps. All rights reserved. Built with
            ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-roman-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-white/20">|</span>
            <button
              type="button"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Terms of Use
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RoyalAmbujaWebsite() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RoyalAmbujaWebsite />
    </QueryClientProvider>
  );
}
