
"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Zap,
  ShieldCheck,
  Clock,
  Award,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Power,
  Flame,
  Cable,
  Wrench,
  MapPin,
  ChevronDown,
  Headset,
  BadgeCheck,
  Activity,
  ClipboardCheck,
  CircleDollarSign,
  PlugZap,
} from "lucide-react";
import { motion } from "framer-motion";

const phone = "0401 421 541";
const phoneLink = "tel:+61401421541";
const callbackLink = "https://level2.primesparkelectrical.com.au/";

const emergencySigns = [
  {
    icon: Power,
    title: "Sudden Power Loss",
    desc: "Unexpected loss of electricity at your home or business.",
  },
  {
    icon: Flame,
    title: "Sparking or Burning Smells",
    desc: "Sparks, smoke or unusual smells around switches, outlets or wiring.",
  },
  {
    icon: AlertTriangle,
    title: "Repeated Circuit Trips",
    desc: "Breakers or safety switches that keep tripping.",
  },
  {
    icon: Cable,
    title: "Damaged or Exposed Wiring",
    desc: "Visible wiring damage or unsafe electrical connections.",
  },
  {
    icon: Zap,
    title: "Switchboard Problems",
    desc: "Buzzing, overheating or damage around the switchboard.",
  },
  {
    icon: Activity,
    title: "Supply Connection Faults",
    desc: "Problems with consumer mains or related supply equipment that may need Level 2 work.",
  },
];

const services = [
  {
    icon: Power,
    title: "Power Outage Fault Finding",
    desc: "Investigate property-side faults and restore supply where safe and authorised.",
  },
  {
    icon: Zap,
    title: "Circuit Breaker & Safety Switch Faults",
    desc: "Find the cause of repeated trips and repair the fault.",
  },
  {
    icon: Cable,
    title: "Emergency Wiring Repairs",
    desc: "Assess and repair damaged or unsafe wiring.",
  },
  {
    icon: ShieldCheck,
    title: "Switchboard Faults",
    desc: "Repair or replace faulty switchboard components as needed.",
  },
  {
    icon: PlugZap,
    title: "Sparking Power Points",
    desc: "Inspect dangerous outlets and carry out appropriate repairs.",
  },
  {
    icon: Wrench,
    title: "Level 2 Electrical Work",
    desc: "Assess eligible consumer mains and electrical supply connection issues requiring ASP Level 2 accreditation.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Available 24/7",
    desc: "Emergency electrical assistance after hours, on weekends and public holidays.",
  },
  {
    icon: Award,
    title: "10+ Years of Experience",
    desc: "Experienced in residential and commercial electrical work.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    desc: "Professional work with safety as a priority.",
  },
  {
    icon: BadgeCheck,
    title: "ASP Level 2 Accredited",
    desc: "Specialised expertise for eligible electricity supply work.",
  },
  {
    icon: CircleDollarSign,
    title: "Upfront Pricing",
    desc: "Clear scope and costs before work begins.",
  },
];

const faqs = [
  {
    q: "Are you available 24/7?",
    a: "Yes. We provide emergency electrical assistance day and night, including weekends and public holidays.",
  },
  {
    q: "How quickly can you arrive?",
    a: "Response times depend on location and availability. Call us for the earliest available response.",
  },
  {
    q: "Can you help with a complete power outage?",
    a: "We can investigate faults affecting your property. Network-wide outages may need the electricity distributor.",
  },
  {
    q: "What does a Level 2 electrician do?",
    a: "An ASP Level 2 electrician is accredited for specified electricity supply and connection work beyond ordinary internal electrical repairs.",
  },
  {
    q: "How much does an emergency electrician cost?",
    a: "The cost depends on the fault and required repairs. We explain pricing before proceeding.",
  },
];

const areas = [
  "Sydney CBD",
  "Western Sydney",
  "Inner West",
  "Eastern Suburbs",
  "North Sydney",
  "South Sydney",
  "Hills District",
  "Greater Sydney",
];

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Call Our Team",
    desc: "Call our team and explain the electrical issue.",
  },
  {
    number: "02",
    icon: Headset,
    title: "Initial Assessment",
    desc: "We assess the fault and arrange the earliest available assistance.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Inspection & Quote",
    desc: "Our electrician inspects the problem and explains the recommended work and price.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Repairs & Safety Checks",
    desc: "We carry out appropriate repairs and safety checks.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Emergencies", href: "#emergencies" },
    { label: "Services", href: "#services" },
    { label: "Level 2", href: "#level2" },
    { label: "About Us", href: "#about" },
    { label: "Service Areas", href: "#areas" },
    { label: "FAQs", href: "#faq" },
  ];

  return (
    <main className="overflow-hidden bg-[#F9FAFC] text-[#05070C]">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#05070C]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

          <a href="#home" className="flex items-center gap-2">
             <img src="images/logo.png" alt="Prime Spark Electrical Logo" className="h-18 w-auto"/>

          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-white xl:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="transition hover:text-[white]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={phoneLink}
            className="hidden items-center gap-3 rounded-xl bg-[#007DE3] px-5 py-3 text-sm font-bold text-white transition hover:bg-[red] lg:flex"
          >
            <Phone size={17} />
            {phone}
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 p-2 xl:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t bg-[#F9FAFC] px-6 py-6 font-semibold xl:hidden">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href={phoneLink}
              className="rounded-lg bg-[#007DE3] p-3 text-center font-bold text-white"
            >
              Call Now: {phone}
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden bg-[#05070C] text-white">

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(#007DE3 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#007DE3]/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#FCAA2B]/30 bg-[#FCAA2B]/10 px-4 py-2 text-sm font-semibold text-[#FCAA2B]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#FCAA2B]" />
              24/7 EMERGENCY ELECTRICIAN · SYDNEY
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">
              24/7 Emergency
              <span className="mt-2 block text-[#007DE3]">
                Electrician Sydney
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Need urgent electrical assistance? Prime Spark Electrical
              provides 24/7 emergency repairs across Sydney, including power
              outages, electrical faults, switchboard issues and Level 2
              electrical services.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={phoneLink}
                className="flex items-center justify-center gap-3 rounded-xl bg-[#FCAA2B] px-7 py-4 font-extrabold text-[#05070C] transition hover:-translate-y-1 hover:bg-white"
              >
                <Phone size={20} />
                Call Now: {phone}
              </a>

              <a
                href={callbackLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:border-[#007DE3] hover:bg-[#007DE3]"
              >
                Request a Callback <ArrowRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 text-sm text-slate-300">
              {[
                "24/7 Emergency Service",
                "Licensed & Insured",
                "10+ Years Experience",
                "ASP Level 2 Accredited",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="shrink-0 text-[#FCAA2B]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-3xl bg-[#007DE3]/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-800">
              <img
                src="images/banner.webp"
                alt="Professional electrician working on an electrical installation"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#05070C]/90 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-4">
                  <div className="rounded-xl bg-[#FCAA2B] p-3 text-[#05070C]">
                    <Headset size={28} />
                  </div>

                  <div>
                    <p className="font-bold">Need urgent assistance?</p>
                    <p className="mt-1 text-sm text-slate-300">
                      Contact our team for emergency electrical help.
                    </p>
                  </div>

                  <a
                    href={phoneLink}
                    className="ml-auto rounded-full bg-[#007DE3] p-3 text-white"
                    aria-label="Call Prime Spark Electrical"
                  >
                    <ArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-9 md:grid-cols-4 lg:px-8">
          {[
            { icon: Clock, title: "24/7", desc: "Emergency Service" },
            { icon: ShieldCheck, title: "Licensed", desc: "& Insured" },
            { icon: Award, title: "10+ Years", desc: "Experience" },
            { icon: BadgeCheck, title: "ASP Level 2", desc: "Accredited" },
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="rounded-xl bg-[#007DE3]/10 p-3 text-[#007DE3]">
                <item.icon size={25} />
              </div>
              <div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="text-xs font-medium text-slate-500 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EMERGENCY SIGNS */}
      <section id="emergencies" className="bg-[#F9FAFC] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[3px] text-[#007DE3]">
              Electrical Warning Signs
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              What Counts as an Electrical Emergency?
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              If an electrical fault puts your safety or power supply at risk,
              arrange professional help. Common warning signs include:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {emergencySigns.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-[#007DE3] hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-[#007DE3]/10 p-4 text-[#007DE3] transition group-hover:bg-[#007DE3] group-hover:text-white">
                  <item.icon size={30} />
                </div>

                <h3 className="text-xl font-extrabold">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-[#FCAA2B]/30 bg-[#FCAA2B]/10 p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="rounded-xl bg-[#FCAA2B] p-3 text-[#05070C] sm:self-start">
                <AlertTriangle size={28} />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-extrabold">
                  Your Safety Comes First
                </h3>
                <p className="mt-2 leading-7 text-slate-700">
                  If there is immediate danger, stay clear of the equipment
                  and contact emergency services or the relevant electricity
                  network operator as appropriate.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9 text-center">
            <a
              href={phoneLink}
              className="inline-flex items-center gap-3 rounded-xl bg-[#007DE3] px-8 py-4 font-bold text-white transition hover:bg-[#05070C]"
            >
              Get Emergency Electrical Help <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* EMERGENCY SERVICES */}
      <section id="services" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[3px] text-[#007DE3]">
              Our Services
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Emergency Electrical Services
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Our team handles urgent electrical issues for Sydney homes and
              businesses.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-200 bg-[#F9FAFC] p-8 transition duration-300 hover:-translate-y-2 hover:border-[#007DE3] hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-xl bg-[#007DE3]/10 p-4 text-[#007DE3] transition group-hover:bg-[#007DE3] group-hover:text-white">
                  <service.icon size={30} />
                </div>

                <h3 className="text-xl font-extrabold">{service.title}</h3>

                <p className="mt-4 leading-7 text-slate-500">{service.desc}</p>

                <a
                  href={phoneLink}
                  className="mt-7 inline-flex items-center gap-2 font-bold text-[#007DE3] transition hover:text-[#FCAA2B]"
                >
                  Get Assistance <ArrowRight size={17} />
                </a>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={phoneLink}
              className="inline-flex items-center gap-3 rounded-xl bg-[#05070C] px-8 py-4 font-bold text-white transition hover:bg-[#007DE3]"
            >
              <Phone size={19} />
              Call a 24-Hour Electrician
            </a>
          </div>
        </div>
      </section>

      {/* LEVEL 2 ELECTRICIAN */}
      <section id="level2" className="relative overflow-hidden bg-[#05070C] px-5 py-24 text-white lg:px-8">

        <div className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#007DE3]/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-[3px] text-[#FCAA2B]">
              Specialist Electrical Services
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-5xl">
              When Do You Need a{" "}
              <span className="text-[#007DE3]">Level 2 Electrician?</span>
            </h2>

            <p className="mt-7 leading-8 text-slate-300">
              Some electrical emergencies involve the connection between
              your property and the electricity network, not just wiring
              inside the building.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              Prime Spark Electrical is ASP Level 2 accredited and can
              undertake eligible specialised supply-side electrical work,
              including consumer mains issues, where required.
            </p>

            <a
              href={phoneLink}
              className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#FCAA2B] px-7 py-4 font-bold text-[#05070C] transition hover:bg-white"
            >
              Speak to a Level 2 Electrician <ArrowRight size={18} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-[#007DE3]/20 blur-2xl" />

            <img
              src="images/image2.webp"
              alt="Electrician performing electrical work"
              className="relative h-[400px] w-full rounded-3xl object-cover sm:h-[480px]"
            />
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="about" className="bg-[#F9FAFC] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[3px] text-[#007DE3]">
              Our Process
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              How We Handle Emergency Electrical Repairs
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              From your first call to the completed repair, we keep the
              process clear and straightforward.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-[#007DE3]/10 p-4 text-[#007DE3]">
                    <step.icon size={28} />
                  </div>

                  <span className="text-4xl font-black text-[#007DE3]/15">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-extrabold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={phoneLink}
              className="inline-flex items-center gap-3 rounded-xl bg-[#007DE3] px-8 py-4 font-bold text-white transition hover:bg-[#05070C]"
            >
              <Phone size={19} />
              Call Now: {phone}
            </a>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[3px] text-[#007DE3]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Why Choose Prime Spark Electrical?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-[#F9FAFC] p-7 transition hover:border-[#007DE3] hover:shadow-lg"
              >
                <div className="inline-flex rounded-xl bg-[#007DE3]/10 p-4 text-[#007DE3]">
                  <item.icon size={30} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      
<section
  id="areas"
  className="relative bg-cover bg-center bg-fixed py-24"
  style={{
    backgroundImage: "url('/images/banner.webp')",
  }}
>
  {/* Background Overlay - 70% Opacity */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Section Content */}
  <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">

    <div>
      <p className="font-extrabold uppercase tracking-[3px] text-[#FCAA2B]">
        Local Sydney Electricians
      </p>

      <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">
        Emergency Electricians Across Greater Sydney
      </h2>

      <p className="mt-6 leading-8 text-white/85">
        We service Sydney CBD, Western Sydney, Inner West, Eastern
        Suburbs, North Sydney, South Sydney and the Hills District.
        Call to confirm availability in your suburb.
      </p>

      <a
        href={phoneLink}
        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#FCAA2B] px-7 py-4 font-bold text-[#05070C] transition hover:bg-white"
      >
        <Phone size={19} />
        Call Our Team
      </a>
    </div>

    <div className="grid grid-cols-2 gap-3">
      {areas.map((area) => (
        <div
          key={area}
          className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 p-4 font-bold text-white backdrop-blur-sm"
        >
          <MapPin size={18} className="shrink-0 text-[#FCAA2B]" />
          {area}
        </div>
      ))}
    </div>

  </div>
</section>


      {/* FAQ */}
      <section id="faq" className="bg-[#F9FAFC] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl">

          <div className="mb-12 text-center">
            <p className="font-bold uppercase tracking-[3px] text-[#007DE3]">
              FAQs
            </p>

            <h2 className="mt-4 text-3xl font-black sm:text-5xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Find answers to common questions about emergency electrical
              services in Sydney.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-slate-200 bg-white p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
                  {faq.q}

                  <ChevronDown
                    className="shrink-0 text-[#007DE3] transition group-open:rotate-180"
                  />
                </summary>

                <p className="mt-5 leading-7 text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      
{/* FINAL CTA + CALLBACK FORM */}
<section
  id="contact"
  className="bg-[#F9FAFC] px-5 py-20 lg:px-8"
>
  <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

    {/* LEFT CONTENT */}
    <div>
      <p className="font-bold uppercase tracking-[3px] text-[#007DE3]">
        Need an Emergency Electrician?
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight text-[#05070C] sm:text-5xl">
        Get Professional Electrical Help Across Sydney
      </h2>

      <p className="mt-5 max-w-lg leading-8 text-slate-600">
        Experiencing an electrical emergency? Contact Prime Spark
        Electrical for professional electrical assistance across Greater Sydney.
      </p>

      <a
        href={phoneLink}
        className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#FCAA2B] px-8 py-4 font-bold text-[#05070C] transition hover:bg-[#007DE3] hover:text-white"
      >
        <Phone size={20} />
        Call Now: {phone}
      </a>

      <p className="mt-5 text-sm text-slate-500">
        <Zap size={16} className="mr-2 inline text-[#007DE3]" />
        Reliable electrical support across Greater Sydney.
      </p>
    </div>

    {/* RIGHT CALLBACK FORM */}
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">

      <h3 className="text-2xl font-black text-[#05070C]">
        Request a Callback
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Fill in your details and our team can get back to you.
      </p>

      <form
        className="mt-7 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you! Your demo form has been submitted.");
          e.currentTarget.reset();
        }}
      >

        {/* NAME */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#05070C]">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-[#05070C] outline-none transition focus:border-[#007DE3]"
          />
        </div>

        {/* PHONE + EMAIL */}
        <div className="grid gap-4 sm:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#05070C]">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              placeholder="Your phone number"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-[#05070C] outline-none transition focus:border-[#007DE3]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#05070C]">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-[#05070C] outline-none transition focus:border-[#007DE3]"
            />
          </div>

        </div>

        {/* SUBURB */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#05070C]">
            Suburb
          </label>

          <input
            type="text"
            name="suburb"
            placeholder="Enter your suburb"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-[#05070C] outline-none transition focus:border-[#007DE3]"
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#05070C]">
            How can we help?
          </label>

          <textarea
            name="message"
            rows={3}
            placeholder="Briefly describe your electrical issue..."
            className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm text-[#05070C] outline-none transition focus:border-[#007DE3]"
          />
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#007DE3] px-6 py-4 font-bold text-white transition hover:bg-[#05070C]"
        >
          Submit Request
          <ArrowRight size={18} />
        </button>

        <p className="text-center text-xs text-slate-400">
          Demo form only. Your details will not be stored or sent.
        </p>

      </form>
    </div>

  </div>
</section>


{/* FOOTER */}
<footer className="bg-[#05070C] px-5 py-12 text-slate-400 lg:px-8">

  <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">

    {/* BRAND */}
    <div>
     <a href="#home" className="flex items-center gap-2">
             <img src="images/logo.png" alt="Prime Spark Electrical Logo" className="h-18 w-auto"/>

          </a>

      <p className="mt-4 max-w-sm text-sm leading-7">
        Professional emergency electrical assistance across Greater Sydney.
        Contact Prime Spark Electrical for reliable electrical support.
      </p>
    </div>

    {/* QUICK LINKS */}
    <div>
      <h3 className="font-bold text-white">
        Quick Links
      </h3>

      <div className="mt-5 flex flex-col gap-3 text-sm">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="transition hover:text-[#FCAA2B]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>

    {/* CONTACT */}
    <div>
      <h3 className="font-bold text-white">
        Contact Us
      </h3>

      <a
        href={phoneLink}
        className="mt-5 flex items-center gap-3 text-sm text-white transition hover:text-[#FCAA2B]"
      >
        <Phone size={18} className="text-[#FCAA2B]" />
        {phone}
      </a>

      <a
        href="mailto:info@primesparkelectrical.com.au"
        className="mt-4 flex items-center gap-3 text-sm transition hover:text-[#FCAA2B]"
      >
        <ArrowRight size={18} className="text-[#FCAA2B]" />
        info@primesparkelectrical.com.au
      </a>

      <p className="mt-4 text-sm">
        Greater Sydney, Australia
      </p>
    </div>

  </div>

  {/* COPYRIGHT */}
  <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-xs">
    © {new Date().getFullYear()} Prime Spark Electrical. All rights reserved.
  </div>

</footer>


{/* MOBILE CALL BAR */}
<div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 lg:hidden">

  <a
    href={phoneLink}
    className="flex items-center justify-center gap-3 rounded-xl bg-[#FCAA2B] py-4 font-black text-[#05070C] transition hover:bg-[#007DE3] hover:text-white"
  >
    <Phone size={20} />
    CALL NOW · {phone}
  </a>

</div>


    </main>
  );
}
