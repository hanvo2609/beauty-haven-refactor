import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, CalendarDays, Check, CreditCard, Menu, Phone, Sparkles } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/heya-salon-hero.jpg";
import lashImage from "@/assets/heya-lash-team.jpg";
import teamImage from "@/assets/heya-team-work.jpg";
import tabletAsset from "@/assets/mockup-tablet.png.asset.json";
import kioskAsset from "@/assets/kiosk.png.asset.json";
import posFrontAsset from "@/assets/pos-front.png.asset.json";
import posBackAsset from "@/assets/pos-back.png.asset.json";
import smsAsset from "@/assets/sms-reminder.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Heya POS | Salon Software Made in Australia" },
    { name: "description", content: "Run bookings, payments and loyalty in one simple salon platform. Save 10 hours a week with Australian support." },
    { property: "og:title", content: "Heya POS | Salon Software Made in Australia" },
    { property: "og:description", content: "Run bookings, payments and loyalty in one simple salon platform." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const features = [
  { number: "01", icon: CalendarDays, title: "Keep every booking in step", copy: "Your calendar updates across every device, every 10 seconds. Drag, drop and reschedule without conflicts." },
  { number: "02", icon: CreditCard, title: "Let payments flow", copy: "Keep your Tyro terminal. Take cash, card or split payments, then reconcile automatically at day’s end." },
  { number: "03", icon: Sparkles, title: "Bring good clients back", copy: "Reward visits or spend with automated loyalty and timely SMS that feels personal—not pushy." },
];

const plans = [
  { name: "Starter", price: "$49", note: "For focused, single-location salons", items: ["Up to 3 staff", "Online booking website", "Core POS & reports"] },
  { name: "Professional", price: "$99", note: "For busy teams ready to grow", items: ["Unlimited staff", "Advanced loyalty", "Multi-location support"], featured: true },
  { name: "Enterprise", price: "$199", note: "For established salon groups", items: ["Custom integrations", "Dedicated account manager", "Advanced reporting"] },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-30 border-b editorial-rule">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 md:px-10">
          <a href="#top" className="font-display text-3xl">Heya <i>POS.</i></a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm md:flex">
            <a href="#features" className="transition-colors hover:text-primary">Features</a>
            <a href="#switch" className="transition-colors hover:text-primary">Switch to Heya</a>
            <a href="#pricing" className="transition-colors hover:text-primary">Pricing</a>
            <a href="#start" className="inline-flex items-center gap-2 bg-foreground px-5 py-3 text-primary-foreground transition-colors hover:bg-primary">Start free <ArrowRight size={15}/></a>
          </nav>
          <button aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)} className="grid size-11 place-items-center border editorial-rule md:hidden"><Menu size={20}/></button>
        </div>
        {menuOpen && <nav className="grid gap-1 border-t editorial-rule bg-background p-5 text-lg md:hidden"><a href="#features">Features</a><a href="#switch">Switch to Heya</a><a href="#pricing">Pricing</a><a href="#start">Start free</a></nav>}
      </header>

      <section id="top" className="relative mx-auto grid min-h-[92svh] max-w-[1600px] items-center gap-10 px-5 pb-12 pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:pb-16 lg:pt-32">
        <div className="relative z-10 max-w-2xl py-8 lg:py-16">
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]"><span className="h-px w-10 bg-primary"/>Proudly Australian-owned</div>
          <h1 className="font-display text-[clamp(4rem,8vw,8.3rem)] leading-[0.85]">Good days,<br/><i className="font-normal text-primary">beautifully</i><br/>managed.</h1>
          <p className="mt-8 max-w-lg text-base leading-7 text-muted-foreground md:text-lg">One calm place for bookings, payments and loyalty—made for beauty teams who would rather spend time with people.</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#start" className="inline-flex items-center gap-3 bg-foreground px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary">Start your free 14-day trial <ArrowRight size={16}/></a>
            <a href="tel:0423291930" className="inline-flex items-center gap-2 border-b editorial-rule px-1 py-3 text-sm"><Phone size={16}/> Call Nick: 0423 291 930</a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground"><strong className="text-foreground">500+ salons & spas</strong> already make more room for their craft.</p>
        </div>
        <div className="relative h-[58vh] min-h-[460px] lg:h-[74vh]">
          <div className="absolute inset-y-0 left-[8%] right-0 overflow-hidden rounded-t-[45%]">
            <img src={heroImage} alt="Salon owner smiling with a colleague while managing bookings on a tablet" width={1536} height={1280} className="h-full w-full object-cover object-center"/>
          </div>
          <div className="absolute bottom-5 left-0 flex size-32 rotate-[-8deg] items-center justify-center rounded-full border border-foreground bg-secondary text-center text-[10px] font-semibold uppercase tracking-[0.2em] md:size-40">10 hours<br/>back every<br/>week</div>
          <div className="absolute right-0 top-1/2 w-44 border editorial-rule bg-background p-4 text-xs shadow-xl"><span className="mb-2 block size-2 rounded-full bg-primary"/>Live calendar sync<br/><strong>All caught up</strong></div>
        </div>
        <a href="#proof" aria-label="Scroll to results" className="absolute bottom-7 left-10 hidden size-12 place-items-center rounded-full border editorial-rule lg:grid"><ArrowDownRight size={19}/></a>
      </section>

      <section id="proof" className="border-y editorial-rule bg-foreground py-4 text-primary-foreground">
        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-around gap-x-8 gap-y-3 px-5 text-[11px] font-medium uppercase tracking-[0.16em]"><span>500+ Australian salons</span><span>24-hour setup</span><span>Tyro certified</span><span>Real humans answer</span></div>
      </section>

      <section id="features" className="paper-grid mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Everything in rhythm</p><h2 className="mt-5 max-w-md font-display text-6xl leading-[0.95] md:text-8xl">Less admin.<br/><i>More people.</i></h2></div>
          <div className="border-t editorial-rule">
            {features.map(({ number, icon: Icon, title, copy }) => <article key={number} className="grid gap-5 border-b editorial-rule py-8 md:grid-cols-[70px_1fr_1fr] md:items-start"><span className="font-display text-3xl text-primary">{number}</span><h3 className="flex items-center gap-3 font-display text-3xl"><Icon size={22}/>{title}</h3><p className="leading-7 text-muted-foreground">{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section id="switch" className="bg-secondary py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:px-10 lg:grid-cols-2 lg:items-center">
          <div className="relative mx-auto w-full max-w-xl pb-12 pl-8">
            <img src={lashImage} alt="Beauty therapist talking happily with a client in a lash studio" loading="lazy" width={1280} height={1536} className="aspect-[4/5] w-full object-cover"/>
            <div className="absolute bottom-0 left-0 max-w-xs bg-foreground p-6 text-primary-foreground"><p className="font-display text-2xl italic">“Support actually picks up the phone.”</p><p className="mt-3 text-xs uppercase tracking-[0.15em]">Emma · Glow Beauty Chatswood</p></div>
          </div>
          <div className="lg:pl-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Switching from Timely?</p><h2 className="mt-5 font-display text-6xl leading-[0.95] md:text-8xl">We’ll make<br/>the move <i>easy.</i></h2><p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">Your data comes with you. We’ll transition it for free, set everything up within 24 hours and stay on the phone whenever you need us.</p><ul className="mt-8 grid gap-3 text-sm"><li className="flex gap-3"><Check size={18} className="text-primary"/>Free data migration</li><li className="flex gap-3"><Check size={18} className="text-primary"/>One-on-one onboarding</li><li className="flex gap-3"><Check size={18} className="text-primary"/>Australian support, seven days</li></ul><a href="#start" className="mt-9 inline-flex items-center gap-2 border-b border-foreground pb-2 text-sm font-semibold">Get free migration <ArrowRight size={16}/></a></div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden">
        <img src={teamImage} alt="A happy salon team working together around the reception desk" loading="lazy" width={1536} height={1024} className="absolute inset-0 h-full w-full object-cover"/>
        <div className="absolute inset-0 bg-foreground/35"/>
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1400px] items-end px-5 py-16 md:px-10"><blockquote className="max-w-3xl bg-background p-8 md:p-12"><p className="font-display text-4xl leading-tight md:text-6xl">“Zero double bookings since. Now we focus on the people in front of us.”</p><footer className="mt-6 text-xs font-semibold uppercase tracking-[0.16em]">Beauty business owner · Sydney</footer></blockquote></div>
      </section>

      <section id="pricing" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="mb-16 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Simple pricing</p><h2 className="mt-4 font-display text-6xl md:text-8xl">Choose your pace.</h2></div><p className="max-w-sm text-muted-foreground">Every plan begins with 14 days free. No credit card required.</p></div>
        <div className="grid border-l border-t editorial-rule lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative border-b border-r editorial-rule p-7 md:p-9 ${plan.featured ? "bg-secondary" : "bg-card"}`}>{plan.featured && <span className="absolute right-5 top-5 text-[10px] font-semibold uppercase tracking-[0.16em]">Most popular</span>}<h3 className="font-display text-4xl">{plan.name}</h3><p className="mt-2 min-h-12 text-sm text-muted-foreground">{plan.note}</p><div className="my-7 font-display text-6xl">{plan.price}<span className="font-sans text-sm text-muted-foreground"> / month</span></div><ul className="mb-9 grid gap-3 text-sm">{plan.items.map(item => <li key={item} className="flex gap-2"><Check size={17} className="text-primary"/>{item}</li>)}</ul><a href="#start" className="inline-flex w-full items-center justify-between border-t editorial-rule pt-5 text-sm font-semibold">Start free <ArrowRight size={16}/></a></article>)}</div>
      </section>

      <section id="start" className="bg-foreground text-primary-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-24 md:px-10 md:py-32 lg:grid-cols-2">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Your next good day starts here</p><h2 className="mt-5 font-display text-6xl leading-[0.92] md:text-8xl">Try Heya<br/><i>free for 14 days.</i></h2><p className="mt-7 max-w-md leading-7 text-primary-foreground/70">No credit card. Setup in under 24 hours. Free migration from your current system.</p></div>
          {sent ? <div className="flex min-h-80 items-center justify-center border border-primary-foreground/25 p-10 text-center"><div><Check className="mx-auto mb-5" size={34}/><h3 className="font-display text-4xl">Thanks—we’ll call soon.</h3><p className="mt-3 text-primary-foreground/70">A Heya team member will help with your free setup.</p></div></div> : <form onSubmit={(event) => {event.preventDefault(); setSent(true)}} className="grid gap-6" aria-label="Start free trial"><label className="grid gap-2 text-xs uppercase tracking-[0.14em]">Your name<input required name="name" className="border-b border-primary-foreground/35 bg-transparent py-3 text-base normal-case text-primary-foreground outline-none focus:border-accent"/></label><label className="grid gap-2 text-xs uppercase tracking-[0.14em]">Salon or studio<input required name="business" className="border-b border-primary-foreground/35 bg-transparent py-3 text-base normal-case text-primary-foreground outline-none focus:border-accent"/></label><div className="grid gap-6 sm:grid-cols-2"><label className="grid gap-2 text-xs uppercase tracking-[0.14em]">Post code<input required name="postcode" inputMode="numeric" className="border-b border-primary-foreground/35 bg-transparent py-3 text-base normal-case text-primary-foreground outline-none focus:border-accent"/></label><label className="grid gap-2 text-xs uppercase tracking-[0.14em]">Mobile<input required name="phone" type="tel" className="border-b border-primary-foreground/35 bg-transparent py-3 text-base normal-case text-primary-foreground outline-none focus:border-accent"/></label></div><button className="mt-3 inline-flex items-center justify-between bg-accent px-7 py-5 font-semibold text-accent-foreground transition-colors hover:bg-secondary">Get started free <ArrowRight size={18}/></button></form>}
        </div>
      </section>

      <footer className="bg-foreground px-5 pb-8 text-primary-foreground md:px-10"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-5 border-t border-primary-foreground/20 pt-7 text-xs uppercase tracking-[0.14em] md:flex-row"><span>Heya POS · Australian owned</span><span>Bookings · Payments · Loyalty · Humans</span><span>© 2026 Heya POS</span></div></footer>
    </main>
  );
}
