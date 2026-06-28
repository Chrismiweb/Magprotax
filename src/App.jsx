import React, { useState } from "react";

/**
 * MAGPRO TAX — Full Site (React + Tailwind)
 * --------------------------------------------------
 * Structure note for the dev picking this up:
 * Pages are split into components below and swapped via simple state-based
 * routing (no react-router dependency in this sandbox). Drop in react-router-dom
 * in production and replace `page` state + `setPage` calls with real <Route>s —
 * every nav link / button already calls setPage('home' | 'services' | 'about' |
 * 'contact' | 'file' | 'shop') so the swap is mechanical.
 *
 * REPLACE BEFORE PRODUCTION:
 * - OWNER_PHOTO_URL: swap with the real photo of the Magpro owner (client has it).
 * - PRODUCT_IMAGES: swap with his real clothing product photos once he's uploading.
 * - Upload zone / status tracker / checkout are working DEMOS, not wired to a
 *   real backend yet (no real file storage, no real Stripe/bank transfer flow).
 */

// ---------- PLACEHOLDER ASSETS (swap before production) ----------
const OWNER_PHOTO_URL =
  "src/hero-image.png"; // placeholder — replace with real owner photo
const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop",
];

const PRODUCTS = [
  { id: 1, name: "Tan Wool Overcoat", meta: "Size M · Like new", price: 48, img: PRODUCT_IMAGES[0] },
  { id: 2, name: "Slim Oxford Shirt", meta: "Size L · Excellent", price: 22, img: PRODUCT_IMAGES[1] },
  { id: 3, name: "Straight Denim", meta: "32x32 · Good", price: 30, img: PRODUCT_IMAGES[2] },
  { id: 4, name: "Wool Scarf", meta: "One size · New", price: 15, img: PRODUCT_IMAGES[3] },
  { id: 5, name: "Knit Crewneck", meta: "Size S · Excellent", price: 26, img: PRODUCT_IMAGES[4] },
  { id: 6, name: "Leather Belt", meta: "34in · Like new", price: 18, img: PRODUCT_IMAGES[5] },
  { id: 7, name: "Canvas Jacket", meta: "Size M · Good", price: 35, img: PRODUCT_IMAGES[6] },
  { id: 8, name: "Plaid Flannel", meta: "Size XL · New", price: 24, img: PRODUCT_IMAGES[7] },
];

// ---------- SHARED UI BITS ----------
function NavBar({ page, setPage }) {
  const links = [
    ["home", "Home"],
    ["services", "Services"],
    ["about", "About Us"],
    ["contact", "Contact"],
    ["shop", "Shop"],
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#F7F3EC]/95 backdrop-blur border-b border-[#D8CFBC]">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => setPage("home")}
          className="flex items-center gap-2.5 font-serif text-xl font-semibold text-[#1C1A17]"
        >
          <span className="w-8 h-8 border-[1.5px] border-[#1C1A17] rounded-full flex items-center justify-center font-mono text-[0.65rem] -rotate-6">
            MT
          </span>
          Magpro <span className="text-[#A8362A]">Tax</span>
        </button>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={`pb-1 transition-colors ${
                page === key ? "text-[#A8362A]" : "text-[#1C1A17] hover:text-[#A8362A]"
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => setPage("file")}
            className="bg-[#1C1A17] text-[#F7F3EC] px-5 py-2.5 rounded text-sm font-medium hover:bg-[#A8362A] transition-colors"
          >
            File Your Tax
          </button>
        </nav>
      </div>
    </header>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="bg-[#1C1A17] text-[#F7F3EC] pt-16 pb-8 mt-0">
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 font-serif text-lg font-semibold mb-3">
              <span className="w-8 h-8 border-[1.5px] border-[#F7F3EC] rounded-full flex items-center justify-center font-mono text-[0.65rem] -rotate-6">
                MT
              </span>
              Magpro Tax
            </div>
            <p className="text-[#C9C4B8] text-sm max-w-[260px]">
              Reliable tax and financial consulting for businesses and individuals — fast, secure, and fully remote.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide text-[#8A8478] mb-4">Company</h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#C9C4B8]">
              <button className="text-left hover:text-white" onClick={() => setPage("services")}>Services</button>
              <button className="text-left hover:text-white" onClick={() => setPage("about")}>About Us</button>
              <button className="text-left hover:text-white" onClick={() => setPage("contact")}>Contact</button>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide text-[#8A8478] mb-4">Tools</h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#C9C4B8]">
              <button className="text-left hover:text-white" onClick={() => setPage("file")}>Tax Calculator</button>
              <button className="text-left hover:text-white" onClick={() => setPage("file")}>File Your Tax</button>
              <button className="text-left hover:text-white" onClick={() => setPage("shop")}>Shop</button>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-wide text-[#8A8478] mb-4">Reach Us</h4>
            <div className="flex flex-col gap-2.5 text-sm text-[#C9C4B8]">
              <a href="mailto:Magdispatch01@gmail.com" className="hover:text-white">Magdispatch01@gmail.com</a>
              <span>214-772-8785</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-2 pt-6 border-t border-[#3A3732] text-xs text-[#6B665C]">
          <span>© 2026 Magpro Tax Consulting. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}

const SectionHead = ({ eyebrow, title, sub, light }) => (
  <div className="max-w-xl mb-12">
    <div className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest mb-3 ${light ? "text-[#E8A87C]" : "text-[#A8362A]"}`}>
      <span className={`w-5 h-px ${light ? "bg-[#E8A87C]" : "bg-[#A8362A]"}`} />
      {eyebrow}
    </div>
    <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-3">{title}</h2>
    {sub && <p className="text-[#54504A] text-base">{sub}</p>}
  </div>
);

// ---------- HOME PAGE ----------
function HomePage({ setPage }) {
  return (
    <>
      <section className="pt-20 pb-16 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#A8362A] mb-5">
              <span className="w-5 h-px bg-[#A8362A]" /> Est. 2016 · Innovative Tax Solutions
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.05] mb-6">
              Reliable tax expert<br />
              <em className="italic text-[#A8362A] font-medium">for the numbers</em><br />
              that matter to you.
            </h1>
            <p className="text-lg text-[#54504A] max-w-md mb-8">
              Magpro Tax blends expert consulting with a genuinely secure digital experience — for growing businesses and individuals who'd rather not guess.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => setPage("file")}
                className="bg-[#A8362A] text-[#F7F3EC] px-7 py-3.5 rounded font-medium hover:bg-[#8A2A20] transition-colors"
              >
                File Your Taxes →
              </button>
              <button
                onClick={() => setPage("services")}
                className="border-[1.5px] border-[#1C1A17] px-7 py-3.5 rounded font-medium hover:bg-[#1C1A17] hover:text-[#F7F3EC] transition-colors"
              >
                Our Services
              </button>
            </div>
            <div className="flex gap-10 pt-6 border-t border-[#D8CFBC]">
              <div><div className="font-serif text-2xl font-semibold text-[#A8362A]">10+</div><div className="text-xs uppercase tracking-wide text-[#54504A]">Years Experience</div></div>
              <div><div className="font-serif text-2xl font-semibold text-[#A8362A]">5,000+</div><div className="text-xs uppercase tracking-wide text-[#54504A]">Clients Served</div></div>
              <div><div className="font-serif text-2xl font-semibold text-[#A8362A]">256-bit</div><div className="text-xs uppercase tracking-wide text-[#54504A]">Encrypted Uploads</div></div>
            </div>
          </div>
          <div className="relative rounded-md overflow-hidden bg-[#1C1A17] aspect-[4/5]">
            <img
              src={OWNER_PHOTO_URL}
              alt="Magpro Tax — founder"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="absolute top-7 right-7 border-2 border-[#A8362A] text-[#A8362A] bg-[#F7F3EC]/10 rounded-full w-20 h-20 flex items-center justify-center text-center font-mono text-[0.6rem] uppercase tracking-wide rotate-12 leading-tight">
              Filed &<br />Verified
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-[#F7F3EC] rounded p-5 font-mono text-xs shadow-xl">
              <div className="flex justify-between py-1.5 border-b border-dashed border-[#D8CFBC]"><span className="text-[#54504A]">Gross Income</span><span>$84,200.00</span></div>
              <div className="flex justify-between py-1.5 border-b border-dashed border-[#D8CFBC]"><span className="text-[#54504A]">Deductions</span><span>−$11,650.00</span></div>
              <div className="flex justify-between py-1.5 border-b border-dashed border-[#D8CFBC]"><span className="text-[#54504A]">Taxable Income</span><span>$72,550.00</span></div>
              <div className="flex justify-between py-1.5 font-semibold text-[#3F6B4E]"><span>Estimated Refund</span><span>+$2,140.00</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EFE8DA] border-y border-[#D8CFBC] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHead eyebrow="What We Handle" title="Cutting-edge financial expertise, plainly explained." sub="Eight services, one point of contact. No jargon you didn't ask for." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#D8CFBC] border border-[#D8CFBC]">
            {[
              ["01", "Financial Planning", "Comprehensive planning tailored to your long-term goals."],
              ["02", "Mortgages", "Expert guidance on securement and refinancing options."],
              ["03", "Tax Insurance", "Protecting your financial assets with specialized cover."],
              ["04", "Life Insurance", "Optimization and planning for future security."],
              ["05", "Audit Protection", "Stay protected with comprehensive audit defense."],
              ["06", "Tax Debt Resolution", "Resolving complex debts, negotiating with authorities."],
              ["07", "Credit Repair", "Improving your profile to unlock financial opportunities."],
              ["08", "Business Loans", "Securing capital for your business growth."],
            ].map(([num, title, desc]) => (
              <div key={num} className="bg-[#F7F3EC] p-8 hover:bg-[#EFE8DA] transition-colors">
                <div className="font-mono text-xs text-[#A8362A] mb-4">{num}</div>
                <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-[#54504A]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h2 className="font-serif text-3xl font-semibold mb-4">Let's build something great.</h2>
          <p className="text-[#54504A] mb-8 max-w-md mx-auto">Ready to take control of your financial future? File online or book a call with our team today.</p>
          <div className="flex justify-center gap-4">
            <button onClick={() => setPage("file")} className="bg-[#A8362A] text-[#F7F3EC] px-7 py-3.5 rounded font-medium hover:bg-[#8A2A20] transition-colors">File Your Taxes →</button>
            <button onClick={() => setPage("contact")} className="border-[1.5px] border-[#1C1A17] px-7 py-3.5 rounded font-medium hover:bg-[#1C1A17] hover:text-[#F7F3EC] transition-colors">Book a Call</button>
          </div>
        </div>
      </section>
    </>
  );
}

// ---------- SERVICES PAGE ----------
function ServicesPage() {
  const services = [
    ["Financial Planning", "Comprehensive financial planning tailored to your long-term goals — retirement, savings, and growth."],
    ["Mortgages", "Expert guidance on mortgage securement and refinancing options for your home or investment property."],
    ["Tax Insurance", "Protecting your financial assets with specialized tax insurance coverage."],
    ["Life Insurance", "Optimization and life insurance planning for long-term family security."],
    ["Audit Protection", "Stay protected with comprehensive audit defense if the IRS comes calling."],
    ["Tax Debt Resolution", "Resolving complex tax debts and negotiating directly with authorities on your behalf."],
    ["Credit Repair", "Improving your credit profile to unlock better financial opportunities."],
    ["Business Loans", "Securing capital for your business growth and operations."],
    ["LLC Registration", "Professional assistance with legal entity setup and registration."],
  ];
  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <SectionHead eyebrow="Our Services" title="Every service your finances might need." sub="From everyday filing to long-term planning — pick what you need, or let us assess and recommend." />
      <div className="grid md:grid-cols-3 gap-5">
        {services.map(([title, desc], i) => (
          <div key={title} className="border border-[#D8CFBC] rounded p-7 hover:border-[#A8362A] transition-colors">
            <div className="font-mono text-xs text-[#A8362A] mb-4">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="font-serif text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#54504A]">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- ABOUT PAGE ----------
function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHead eyebrow="About Magpro Tax" title="A decade of making taxes make sense." />
          <p className="text-[#54504A] mb-4">
            With years of experience in finance and tax consulting, Magpro Tax has become a reliable partner for both businesses and individuals across the country.
          </p>
          <p className="text-[#54504A] mb-8">
            Our mission is simple: simplify the complex world of taxes, with digital tools that actually save you time, money, and stress — not just promise to.
          </p>
          <div className="flex gap-10">
            <div><div className="font-serif text-2xl font-semibold text-[#A8362A]">10+</div><div className="text-xs uppercase tracking-wide text-[#54504A]">Years Exp</div></div>
            <div><div className="font-serif text-2xl font-semibold text-[#A8362A]">5,000+</div><div className="text-xs uppercase tracking-wide text-[#54504A]">Clients</div></div>
          </div>
        </div>
        <div className="rounded-md overflow-hidden aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop"
            alt="Magpro Tax team at work"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

// ---------- CONTACT PAGE ----------
function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <section className="max-w-4xl mx-auto px-8 py-20">
      <SectionHead eyebrow="Get In Touch" title="Let's talk about your finances." sub="Send a message, or reach us directly below." />
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="border border-[#D8CFBC] rounded p-6">
            <div className="text-xs uppercase tracking-wide text-[#54504A] mb-1">Email Us</div>
            <a href="mailto:Magdispatch01@gmail.com" className="font-medium text-[#A8362A]">Magdispatch01@gmail.com</a>
          </div>
          <div className="border border-[#D8CFBC] rounded p-6">
            <div className="text-xs uppercase tracking-wide text-[#54504A] mb-1">Call Us</div>
            <div className="font-medium">214-772-8785</div>
          </div>
          <div className="border border-[#D8CFBC] rounded p-6">
            <div className="text-xs uppercase tracking-wide text-[#54504A] mb-1">Chat With Us</div>
            <div className="font-medium">Direct line to our team via WhatsApp</div>
            <button className="mt-3 text-sm font-medium text-[#A8362A] underline">Open Chat →</button>
          </div>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="border border-[#D8CFBC] rounded p-7 space-y-4"
        >
          {sent ? (
            <div className="text-center py-10">
              <div className="text-[#3F6B4E] font-serif text-xl font-semibold mb-2">Message sent.</div>
              <p className="text-sm text-[#54504A]">We'll get back to you within one business day.</p>
            </div>
          ) : (
            <>
              <div>
                <label className="block text-sm font-medium text-[#54504A] mb-1.5">Name</label>
                <input required className="w-full border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-2.5 focus:outline-none focus:border-[#A8362A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#54504A] mb-1.5">Email</label>
                <input required type="email" className="w-full border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-2.5 focus:outline-none focus:border-[#A8362A]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#54504A] mb-1.5">Message</label>
                <textarea required rows={4} className="w-full border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-2.5 focus:outline-none focus:border-[#A8362A]" />
              </div>
              <button type="submit" className="w-full bg-[#A8362A] text-[#F7F3EC] py-3 rounded font-medium hover:bg-[#8A2A20] transition-colors">
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

// ---------- FILE YOUR TAX PAGE (Calculator + Portal) ----------
function FileTaxPage() {
  const [income, setIncome] = useState(65000);
  const [status, setStatus] = useState("single");
  const [deductions, setDeductions] = useState(13850);
  const [withheld, setWithheld] = useState(9200);

  const taxable = Math.max(income - deductions, 0);
  const brackets = [[11600, 0.1], [47150, 0.12], [100525, 0.22], [191950, 0.24], [243725, 0.32], [609350, 0.35], [Infinity, 0.37]];
  let tax = 0, prev = 0;
  for (const [cap, rate] of brackets) {
    if (taxable > prev) { tax += (Math.min(taxable, cap) - prev) * rate; prev = cap; } else break;
  }
  const diff = withheld - tax;
  const refund = diff >= 0;
  const effRate = income > 0 ? ((tax / income) * 100).toFixed(1) : "0";

  const [tab, setTab] = useState("filing");
  const [selectedFiling, setSelectedFiling] = useState(null);
  const [uploaded, setUploaded] = useState([]);
  const sampleFiles = ["W2_2025.pdf", "1099-NEC.pdf", "Receipts_Q4.jpg", "Schedule_C_Draft.pdf"];

  const handleSelectFiling = (type) => {
    setSelectedFiling(type);
    setTimeout(() => setTab("upload"), 300);
  };
  const handleUpload = () => {
    if (uploaded.length >= sampleFiles.length) return;
    const next = [...uploaded, sampleFiles[uploaded.length]];
    setUploaded(next);
    if (next.length === sampleFiles.length) setTimeout(() => setTab("status"), 500);
  };

  const filingTypes = ["Individual", "Corporation", "Partnership", "Estates & Trusts", "Non-Profit / Exempt", "Employer"];

  return (
    <>
      <section className="bg-[#1C1A17] text-[#F7F3EC] py-20">
        <div className="max-w-6xl mx-auto px-8">
          <SectionHead light eyebrow="Know Before You File" title="See your estimated refund in seconds." sub="A rough estimate — enough to plan ahead. Book a call with us to make it official." />
          <div className="bg-[#F7F3EC] text-[#1C1A17] rounded-md p-10 grid md:grid-cols-2 gap-10">
            <div>
              <Field label="Annual Gross Income ($)">
                <input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="w-full border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-3 focus:outline-none focus:border-[#A8362A]" />
              </Field>
              <Field label="Filing Status">
                <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-3 focus:outline-none focus:border-[#A8362A]">
                  <option value="single">Single</option>
                  <option value="joint">Married Filing Jointly</option>
                  <option value="hoh">Head of Household</option>
                </select>
              </Field>
              <Field label="Estimated Deductions ($)">
                <input type="number" value={deductions} onChange={(e) => setDeductions(Number(e.target.value))} className="w-full border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-3 focus:outline-none focus:border-[#A8362A]" />
              </Field>
              <Field label="Tax Already Withheld ($)">
                <input type="number" value={withheld} onChange={(e) => setWithheld(Number(e.target.value))} className="w-full border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-3 focus:outline-none focus:border-[#A8362A]" />
              </Field>
            </div>
            <div className="bg-[#EFE8DA] rounded p-7 flex flex-col justify-center">
              <div className="font-mono text-xs uppercase tracking-wide text-[#54504A] mb-1.5">{refund ? "Estimated Refund" : "Estimated Amount Owed"}</div>
              <div className={`font-serif text-4xl font-semibold mb-6 ${refund ? "text-[#3F6B4E]" : "text-[#A8362A]"}`}>
                {refund ? "+" : "−"}${Math.abs(diff).toFixed(0)}
              </div>
              <div className="font-mono text-sm space-y-1.5">
                <div className="flex justify-between border-b border-dashed border-[#D8CFBC] py-1.5 text-[#54504A]"><span>Taxable Income</span><span>${taxable.toFixed(0)}</span></div>
                <div className="flex justify-between border-b border-dashed border-[#D8CFBC] py-1.5 text-[#54504A]"><span>Estimated Tax Owed</span><span>${tax.toFixed(0)}</span></div>
                <div className="flex justify-between py-1.5 text-[#54504A]"><span>Effective Rate</span><span>{effRate}%</span></div>
              </div>
            </div>
            <div className="md:col-span-2 text-xs text-[#8A8478] border-t border-[#3A3732]/20 pt-4">
              This calculator gives a simplified estimate using standard federal brackets and deductions. It is not professional tax advice. Your actual liability may differ.
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-8 py-20">
        <SectionHead eyebrow="Seamlessly Simple" title="File your taxes through one secure portal." sub="Consult, upload, and track your filing status — all in one place, not a Google Form." />
        <div className="border-[1.5px] border-[#1C1A17] rounded-md overflow-hidden">
          <div className="flex border-b-[1.5px] border-[#1C1A17] bg-[#EFE8DA]">
            {[["filing", "1. Select Filing Type"], ["upload", "2. Upload Documents"], ["status", "3. Track Status"]].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex-1 py-4 text-sm font-medium border-r border-[#D8CFBC] last:border-r-0 transition-colors ${tab === key ? "bg-[#1C1A17] text-[#F7F3EC]" : "text-[#54504A] hover:bg-[#F7F3EC]"}`}
              >
                {label}
              </button>
            ))}
          </div>
          <div className="p-10 min-h-[360px]">
            {tab === "filing" && (
              <div>
                <p className="text-sm text-[#54504A] mb-5">What are you filing for?</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
                  {filingTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => handleSelectFiling(type)}
                      className={`border-[1.5px] rounded p-5 text-center text-sm font-medium transition-colors ${selectedFiling === type ? "border-[#A8362A] bg-[#A8362A]/5" : "border-[#D8CFBC] hover:border-[#A8362A]"}`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {tab === "upload" && (
              <div>
                <p className="text-sm text-[#54504A] mb-5">Upload your documents — W-2s, 1099s, receipts, anything relevant.</p>
                <button onClick={handleUpload} className="w-full border-2 border-dashed border-[#D8CFBC] rounded-md p-11 text-center hover:border-[#A8362A] hover:bg-[#A8362A]/5 transition-colors">
                  <div className="text-3xl mb-2">⇪</div>
                  <div className="font-medium">Click to upload, or drag files here</div>
                  <div className="text-sm text-[#54504A] mt-1.5">Encrypted in transit and at rest · PDF, JPG, PNG up to 25MB</div>
                </button>
                <div className="flex flex-col gap-2 mt-4">
                  {uploaded.map((f) => (
                    <div key={f} className="flex justify-between items-center bg-[#EFE8DA] rounded px-3.5 py-2.5 text-sm font-mono">
                      <span>{f}</span><span className="text-[#3F6B4E]">✓ Uploaded</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {tab === "status" && (
              <div>
                {[
                  ["done", "✓", "Documents Received", "June 24 — all required files confirmed"],
                  ["active", "●", "In Preparation", "Your preparer is reviewing your filing now"],
                  ["pending", "3", "Ready for Review", "We'll notify you before anything is submitted"],
                  ["pending", "4", "Filed", "Confirmation and copy sent to your email"],
                ].map(([state, icon, title, sub], i) => (
                  <div key={i} className="flex gap-4 py-4 border-b border-[#D8CFBC] last:border-b-0">
                    <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-mono flex-shrink-0 ${
                      state === "done" ? "bg-[#3F6B4E] border-[#3F6B4E] text-white" :
                      state === "active" ? "border-[#A8362A] text-[#A8362A] font-semibold" : "border-[#D8CFBC] text-[#54504A]"
                    }`}>{icon}</div>
                    <div>
                      <div className="font-medium">{title}</div>
                      <div className="text-sm text-[#54504A] mt-0.5">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

const Field = ({ label, children }) => (
  <div className="mb-5">
    <label className="block text-sm font-medium text-[#54504A] mb-2">{label}</label>
    {children}
  </div>
);

// ---------- SHOP PAGE ----------
function ShopPage() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("grid"); // grid | checkout
  const [payMethod, setPayMethod] = useState("card");
  const [placed, setPlaced] = useState(false);

  const addToCart = (product) => setCart((c) => [...c, product]);
  const removeFromCart = (id) => setCart((c) => {
    const idx = c.findIndex((p) => p.id === id);
    if (idx === -1) return c;
    const copy = [...c]; copy.splice(idx, 1); return copy;
  });
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  if (placed) {
    return (
      <section className="max-w-2xl mx-auto px-8 py-28 text-center">
        <div className="font-serif text-3xl font-semibold text-[#3F6B4E] mb-3">Order placed.</div>
        <p className="text-[#54504A] mb-8">
          {payMethod === "card" ? "Payment confirmed — you'll get a receipt by email shortly." : "We've sent bank transfer details to your email. Your order ships once payment is confirmed."}
        </p>
        <button onClick={() => { setPlaced(false); setCart([]); setView("grid"); }} className="bg-[#1C1A17] text-[#F7F3EC] px-6 py-3 rounded font-medium hover:bg-[#A8362A] transition-colors">
          Back to Shop
        </button>
      </section>
    );
  }

  if (view === "checkout") {
    return (
      <section className="max-w-4xl mx-auto px-8 py-16">
        <button onClick={() => setView("grid")} className="text-sm text-[#54504A] mb-8 hover:text-[#A8362A]">← Back to shop</button>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-5">Your order</h3>
            <div className="space-y-3 mb-6">
              {cart.length === 0 && <p className="text-sm text-[#54504A]">Your cart is empty.</p>}
              {cart.map((p, i) => (
                <div key={i} className="flex items-center gap-3 border border-[#D8CFBC] rounded p-3">
                  <img src={p.img} alt={p.name} className="w-14 h-14 rounded object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{p.name}</div>
                    <div className="text-xs text-[#54504A]">{p.meta}</div>
                  </div>
                  <div className="font-mono text-sm font-semibold">${p.price}</div>
                  <button onClick={() => removeFromCart(p.id)} className="text-[#A8362A] text-sm">✕</button>
                </div>
              ))}
            </div>
            <div className="flex justify-between font-serif text-xl font-semibold border-t border-[#D8CFBC] pt-4">
              <span>Total</span><span>${total}</span>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-5">Payment method</h3>
            <div className="flex gap-3 mb-6">
              <button onClick={() => setPayMethod("card")} className={`flex-1 border-[1.5px] rounded p-4 text-sm font-medium ${payMethod === "card" ? "border-[#A8362A] bg-[#A8362A]/5" : "border-[#D8CFBC]"}`}>Card Payment</button>
              <button onClick={() => setPayMethod("transfer")} className={`flex-1 border-[1.5px] rounded p-4 text-sm font-medium ${payMethod === "transfer" ? "border-[#A8362A] bg-[#A8362A]/5" : "border-[#D8CFBC]"}`}>Bank Transfer</button>
            </div>
            {payMethod === "card" ? (
              <div className="space-y-3">
                <input placeholder="Card number" className="w-full border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-3 focus:outline-none focus:border-[#A8362A]" />
                <div className="flex gap-3">
                  <input placeholder="MM/YY" className="w-1/2 border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-3 focus:outline-none focus:border-[#A8362A]" />
                  <input placeholder="CVC" className="w-1/2 border-[1.5px] border-[#D8CFBC] rounded px-3.5 py-3 focus:outline-none focus:border-[#A8362A]" />
                </div>
              </div>
            ) : (
              <div className="bg-[#EFE8DA] rounded p-5 text-sm font-mono space-y-1.5">
                <div className="flex justify-between"><span className="text-[#54504A]">Bank</span><span>Demo Bank</span></div>
                <div className="flex justify-between"><span className="text-[#54504A]">Account No.</span><span>0123456789</span></div>
                <div className="flex justify-between"><span className="text-[#54504A]">Reference</span><span>MT-{Math.floor(Math.random() * 9000 + 1000)}</span></div>
              </div>
            )}
            <button
              disabled={cart.length === 0}
              onClick={() => setPlaced(true)}
              className="w-full mt-6 bg-[#A8362A] text-[#F7F3EC] py-3.5 rounded font-medium hover:bg-[#8A2A20] transition-colors disabled:opacity-40"
            >
              {payMethod === "card" ? "Pay Now" : "Confirm Order"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="bg-[#1C1A17] text-[#F7F3EC] rounded-md p-7 flex flex-wrap justify-between items-center gap-4 mb-12">
        <div>
          <strong>New:</strong> Shop with the Magpro team — pieces picked, priced, and ready.
          <div className="font-mono text-xs text-[#E8A87C] mt-1">Bank transfer or card at checkout</div>
        </div>
        <button onClick={() => setView("checkout")} className="bg-[#F7F3EC] text-[#1C1A17] px-5 py-2.5 rounded text-sm font-medium relative">
          Cart ({cart.length})
        </button>
      </div>
      <SectionHead eyebrow="From the Closet" title="Shop the collection." />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="bg-[#F7F3EC] border border-[#D8CFBC] rounded overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all">
            <div className="aspect-square overflow-hidden">
              <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <div className="font-medium text-sm mb-1">{p.name}</div>
              <div className="text-xs text-[#54504A] mb-2.5">{p.meta}</div>
              <div className="flex justify-between items-center">
                <span className="font-mono font-semibold text-[#A8362A]">${p.price}</span>
                <button onClick={() => addToCart(p)} className="text-xs font-medium border border-[#1C1A17] rounded px-3 py-1.5 hover:bg-[#1C1A17] hover:text-[#F7F3EC] transition-colors">
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---------- ROOT APP ----------
export default function App() {
  const [page, setPage] = useState("home");

  const pages = {
    home: <HomePage setPage={setPage} />,
    services: <ServicesPage />,
    about: <AboutPage />,
    contact: <ContactPage />,
    file: <FileTaxPage />,
    shop: <ShopPage />,
  };

  return (
    <div className="min-h-screen bg-[#F7F3EC] text-[#1C1A17] font-sans" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-serif { font-family: 'Fraunces', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>
      <NavBar page={page} setPage={setPage} />
      {pages[page]}
      <Footer setPage={setPage} />
    </div>
  );
}
