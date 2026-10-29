import { useState, type FormEvent, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BadgeCheck, Building2, Check, ChevronDown, ClipboardCheck, FileCheck2, Globe2, House, Mail, MapPin, Menu, PackageCheck, Phone, ShieldCheck, Truck, Warehouse, X } from "lucide-react";
import catalog from "@/data/catalog.json";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Core Categories", to: "/categories" },
  { label: "Supplier Onboarding", to: "/b2b-wholesale" },
  { label: "Brand Partnerships", to: "/brand-partnerships" },
  { label: "Contact Us", to: "/contact" },
];

export function Header() {
  const loc = useLocation();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <div className="utility"><div className="container utility-inner"><div className="utility-contact"><a href="mailto:purchasing@merlinsupplygroup.com"><Mail size={13}/> purchasing@merlinsupplygroup.com</a><a href="tel:+13072203816"><Phone size={13}/> (307) 220-3816</a></div><div className="utility-promise">Vendor Onboarding <i/> Brand Partnerships <i/> Inventory-led Purchasing</div></div></div>
    <div className="container nav-wrap">
      <Link to="/" className="brand" aria-label="Merlin Supply Group home"><span className="brand-mark"><img src="/merlin-emblem.svg" alt="" /></span><span className="brand-type"><b>MERLIN</b><small>SUPPLY GROUP</small></span></Link>
      <button className="mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      <nav className={open ? "main-nav open" : "main-nav"}>{nav.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className={loc.pathname === item.to ? "nav-link active" : "nav-link"}>{item.label}</Link>)}</nav>
      <Link to="/b2b-wholesale" className="nav-cta">Submit Wholesale Catalog / Line Card <ArrowUpRight size={15}/></Link>
    </div>
  </header>;
}

export function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link to="/" className="brand brand-inverse"><span className="brand-mark"><img src="/merlin-emblem.svg" alt="" /></span><span className="brand-type"><b>MERLIN</b><small>SUPPLY GROUP</small></span></Link><p className="footer-legal">Merlin Supply Group LLC<br/>A Wyoming Limited Liability Company<br/>30 N Gould St, Ste R, Sheridan, WY 82801<br/><br/>Nationwide freight receiving, palletized cross-dock, and 3PL fulfillment coordinated via contracted commercial logistics hubs across the continental United States.<br/><br/>Wyoming resale certificate and Federal EIN provided upon trade account setup.</p></div>
    <div><h4>Business Address</h4><p>30 N Gould St, Ste R<br/>Sheridan, WY 82801</p><p className="footer-muted">Nationwide freight receiving, palletized cross-dock, and 3PL fulfillment coordinated via contracted commercial logistics hubs across the continental United States.</p></div>
    <div><h4>Company</h4><Link to="/about">About Us</Link><Link to="/categories">Core Categories</Link><Link to="/b2b-wholesale">Supplier Onboarding</Link><Link to="/brand-partnerships">Brand Partnerships</Link></div>
    <div><h4>Policies & Contact</h4><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms of Distribution</Link><Link to="/compliance">Authorized Reseller Statement</Link><a href="mailto:purchasing@merlinsupplygroup.com">Purchasing email</a><a href="tel:+13072203816">(307) 220-3816</a></div>
  </div><div className="container footer-bottom"><span>© Merlin Supply Group LLC</span><span>Wyoming resale certificate and Federal EIN provided upon trade account setup.</span></div></footer>;
}

export function Shell({ children }: { children: ReactNode }) { return <><Header/>{children}<Footer/></>; }

function BrandMark({ size = 20 }: { size?: number }) { return <span className="mini-mark"><img src="/merlin-emblem.svg" alt="" style={{ width: size + 2, height: size + 2, objectFit: "contain" }} /></span>; }

export function PageIntro({ eyebrow, title, description, image, compact = false }: { eyebrow?: string; title: string; description: string; image?: string; compact?: boolean }) {
  return <section className={"page-intro" + (image ? " has-background-image" : "") + (compact ? " compact" : "") + (eyebrow === "Let's connect" ? " contact-banner" : "")}><div className="container intro-grid"><div className="intro-copy">{eyebrow && <div className="eyebrow"><span/> {eyebrow}</div>}<h1>{title}</h1><p>{description}</p></div>{image && <div className="intro-image"><img src={image} alt="" /><div className="image-caption"><BrandMark/><span>Merlin Supply Group LLC</span><small>Wholesale distribution</small></div></div>}</div></section>;
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={"section-heading " + (align === "center" ? "center" : "")}>{eyebrow && <div className="eyebrow"><span/>{eyebrow}</div>}<h2>{title}</h2>{description && <p>{description}</p>}</div>;
}

export function InquiryForm({ mode = "brand", preset = "" }: { mode?: "brand" | "contact" | "wholesale"; preset?: string }) {
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState(preset);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const accessKey = "6dcbac39-e318-4eaf-89fd-fb65e5b497ba";
    const formType = mode === "contact" ? "[Purchasing Desk Inquiry]" : mode === "wholesale" ? "[Supplier Onboarding / Catalog Submission]" : "[Brand Partnership / Vendor Inquiry]";
    data.set("access_key", accessKey);
    data.set("subject", `${formType} Merlin Supply Group — ${String(data.get("company") || data.get("name") || "Website inquiry")}`);
    data.set("from_name", "Merlin Supply Group Website");
    data.set("form_type", formType);
    setStatus("Sending your inquiry…");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error("Web3Forms did not accept the submission.");
      setStatus("Thank you. Your inquiry has been submitted.");
      form.reset();
      return;
    } catch {
      setStatus("We could not submit this form right now. Please email purchasing@merlinsupplygroup.com.");
      return;
    }

  }
  const isWholesale = mode === "wholesale";
  const isContact = mode === "contact";
  return <form className="inquiry-form" onSubmit={submit}>
    <div className="form-title"><span>{isWholesale ? "Supplier / vendor onboarding" : isContact ? "Send us a message" : "Vendor / Catalog Inquiry"}</span><small>Required fields are marked *</small></div>
    {isWholesale ? <>
      <div className="field-grid"><label>Company / Brand Name *<input name="company" required placeholder="Company or brand name"/></label><label>Sales Representative Name &amp; Title *<input name="contact" required placeholder="Name and role"/></label></div>
      <div className="field-grid"><label>Catalog / Line Card URL *<input name="catalog" required placeholder="URL (Google Drive, Dropbox, Box, or web link) — or enter 'Will email direct' to request an intake upload link"/></label><label>Primary product category *<select name="category" value={category} onChange={e => setCategory(e.target.value)} required><option value="">Choose category</option>{catalog.categories.map(c => <option key={c.id}>{c.title}</option>)}</select></label></div>
      <div className="field-grid"><label>Corporate email *<input name="email" required type="email" placeholder="you@company.com"/></label><label>Business phone *<input name="phone" required type="tel" placeholder="+1 (000) 000-0000"/></label></div>
      <label>Supplier type</label><div className="check-row"><label><input type="checkbox" name="supplier_brand" value="Brand / manufacturer"/> Brand / manufacturer</label><label><input type="checkbox" name="supplier_authorized_distributor" value="Authorized distributor"/> Authorized distributor</label><label><input type="checkbox" name="supplier_master_wholesaler" value="Master wholesaler"/> Master wholesaler</label></div>
    </> : <>
      {isContact ? <><label>Full Name *<input name="name" required placeholder="Full name"/></label><label>Company Name *<input name="company" required placeholder="Company name"/></label><div className="field-grid"><label>Business Email *<input name="email" required type="email" placeholder="you@company.com"/></label><label>Business Phone (optional)<input name="phone" type="tel" placeholder="Business phone"/></label></div></> : <><div className="field-grid"><label>Company / Brand Name *<input name="company" required placeholder="Company or brand"/></label><label>Contact person &amp; title *<input name="contact" required placeholder="Full name and title"/></label></div><div className="field-grid"><label>Business email *<input name="email" required type="email" placeholder="you@branddomain.com"/></label><label>Website / catalog link<input name="catalog" type="url" placeholder="https://"/></label></div></>}
      <div className="field-grid"><label>Inquiry type<select name="inquiry_type" defaultValue={preset || ""}><option value="">(Select inquiry type)</option><option>New Wholesale Account Opening</option><option>Product Catalog / Line Card Submission</option><option>Authorized Distribution Agreement</option><option>MAP Policy & Channel Governance</option><option>Volume / Closeout Sourcing Opportunity</option><option>General Inquiry</option></select></label></div>
    </>}
    {isWholesale && <div className="field-grid"><label>Opening Order Minimums (MOQ) / Lead Times (optional for non-vendors)<input name="moq_leadtime" placeholder="State your standard order minimums, lead times, and case-pack requirements"/></label><label>MAP Policy Enforcement (optional for non-vendors)<select name="map_policy" defaultValue=""><option value="">(Select MAP status)</option><option>Strictly Enforced MAP</option><option>Informal Pricing Guidelines</option><option>No MAP Policy</option><option>Details Provided Upon Account Review</option></select></label></div>}
    <label>Message {isWholesale ? "" : "*" }{isWholesale ? <textarea name="message" rows={4} placeholder="Wholesale tiers, case packs, terms, or other supplier details."/> : <textarea name="message" rows={4} required={isContact} placeholder={isContact ? "How can we help? Please share details relevant to your inquiry." : "How can we help? Include relevant product details or links."}/>}</label>
    <button className="button button-gold form-submit" type="submit">{isWholesale ? "Submit Catalog / Line Card" : isContact ? "Send Message" : "Submit Brand Partnership Inquiry"} <ArrowRight size={16}/></button>
    {status && <p className="form-status" role="status">{status}</p>}
    <p className="form-note">Please do not submit confidential tax, identity, or financial documents through this form.</p>
  </form>;
}

export function HomePage() {
  const values = [
    { icon: Building2, title: "Upfront Capital & Predictable POs", text: "Inventory-led purchasing with written purchase orders and agreed payment terms." },
    { icon: ShieldCheck, title: "MAP & Price Integrity", text: "Review and respect supplier MAP policies and brand channel requirements." },
    { icon: ClipboardCheck, title: "Marketplace Catalog Stewardship", text: "Attention to accurate product data, duplicate listing concerns, and consistent representation." },
    { icon: Truck, title: "Palletized Prep & Logistics", text: "Receiving, labeling, and fulfillment requirements coordinated with logistics partners." },
  ];
  const steps = [
    { n: "01", title: "Supplier alignment", text: "Review your line card, UPC catalog, wholesale pricing tiers, and MAP policies." },
    { n: "02", title: "Purchase order", text: "Issue purchase orders against agreed case packs, minimums, and payment terms." },
    { n: "03", title: "Logistics coordination", text: "Coordinate inbound freight and delivery appointments against supplier routing requirements." },
  ];
  return <Shell><main>
    <section className="hero"><div className="hero-image" role="img" aria-label="Organized warehouse shelving and palletized cartons"/><div className="hero-shade"/><div className="container hero-content"><div className="hero-copy"><div className="eyebrow eyebrow-light"><span/> U.S. wholesale distribution</div><h1>U.S. Wholesale Distribution for Brands and Authorized Suppliers</h1><p>Merlin Supply Group LLC is a U.S. wholesale distributor working with manufacturers, brand owners, and authorized distributors on inventory-led purchasing, documented purchase orders, and domestic fulfillment coordination.</p><div className="hero-actions"><Link to="/b2b-wholesale" hash="#application" className="button button-gold">Submit Wholesale Line Card <ArrowRight size={16}/></Link><Link to="/brand-partnerships" className="button button-outline">Explore Brand Value-Add <ArrowUpRight size={15}/></Link></div><div className="hero-meta"><span><BadgeCheck size={15}/> Supplier catalog review</span><span><ShieldCheck size={15}/> Inventory-led purchasing</span><span><Globe2 size={15}/> U.S. supplier relationships</span></div></div><div className="hero-side-note"><span>01 / SOURCING</span><b>Supply with<br/>purpose.</b><i/></div></div><div className="hero-bottom container"><span>MERLIN SUPPLY GROUP LLC</span><span>WYOMING · UNITED STATES</span><a href="#capabilities">Explore capabilities <ArrowDownRight size={14}/></a></div></section>
    <section id="capabilities" className="value-strip"><div className="container value-grid">{values.map(v => <article className="value-item" key={v.title}><div className="value-icon"><v.icon size={23}/></div><div><h3>{v.title}</h3><p>{v.text}</p></div></article>)}</div></section>
    <section className="process-section"><div className="container process-layout"><div className="process-intro"><div className="eyebrow"><span/> How we work</div><h2>A clear process for wholesale purchasing.</h2><p>Our team reviews product catalogs, wholesale pricing, minimum order quantities, and supplier terms. When a fit is approved and terms are agreed, we issue purchase orders and coordinate inbound freight with the supplier.</p><Link to="/b2b-wholesale" className="button button-dark">Submit your catalog <ArrowRight size={15}/></Link></div><div className="process-list">{steps.map(s => <article className="process-step" key={s.n}><span className="step-number">{s.n}</span><div><h3>{s.title}</h3><p>{s.text}</p></div><ArrowUpRight className="step-arrow" size={19}/></article>)}</div></div></section>
    <section className="partner-band"><div className="container partner-layout"><div className="partner-copy"><div className="eyebrow eyebrow-light"><span/> Let's work together</div><h2>Bring your product line to our purchasing team.</h2><p>U.S. manufacturers, brand owners, and authorized distributors can submit wholesale catalogs and line cards for review of product fit, pricing, order minimums, and supplier onboarding requirements.</p><div className="contact-inline"><a href="mailto:purchasing@merlinsupplygroup.com"><Mail size={16}/> purchasing@merlinsupplygroup.com</a><a href="tel:+13072203816"><Phone size={16}/> (307) 220-3816</a></div></div><InquiryForm/></div></section>
  </main></Shell>;
}

export function AboutPage() {
  const ops = [
    { image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85", title: "Listing Stewardship", text: "Active catalog monitoring, suppressing duplicate ASINs, correcting title and bullet errors, and protecting consistent brand presentation." },
    { image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=85", title: "In-Stock Reliability", text: "Disciplined purchase order cycles and reorder triggers designed to reduce stockouts and support marketplace availability." },
    { image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", title: "Palletized Prep & 3PL Hubs", text: "Commercial receiving, labeling, barcoding, and cross-docking coordinated through contracted continental U.S. facilities." },
  ];
  return <Shell><main><PageIntro eyebrow="Company overview" title="Built for Modern, Compliant Wholesale Distribution" description="Merlin Supply Group LLC is an independent U.S. wholesale distributor and retail partner based in Sheridan, Wyoming. We focus on domestic inventory procurement, catalog stewardship, and responsible marketplace distribution through direct supplier relationships." image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=85"/><section className="section"><div className="container mission-grid"><div><div className="eyebrow"><span/> Our mission</div><h2>Protecting brands through dependable distribution.</h2></div><div className="mission-body"><p>To serve as a dependable, capital-backed distribution partner for American manufacturers and brand owners—protecting brand equity, respecting pricing policies, and streamlining supply chain operations through transparent, inventory-led purchasing.</p><Link to="/brand-partnerships" className="text-link">Meet us as a partner <ArrowRight size={15}/></Link></div></div></section><section className="values-panel"><div className="container values-panel-inner"><SectionHeading title="Principles Behind Our Work" description="Operational standards that underpin transparent, accountable wholesale relationships."/><div className="principles"><article><ShieldCheck/><h3>Brand Integrity</h3><p>Strict adherence to agreed MAP policies, authorized resale channels, and zero inventory diversion into unauthorized discount or liquidator networks.</p></article><article><Truck/><h3>Clear Logistics</h3><p>Rigorous compliance with vendor routing guides, advance shipping notices (ASNs), pallet build specifications, and scheduled dock appointments.</p></article><article><FileCheck2/><h3>Documented Process</h3><p>Traceable commercial purchase orders, formal invoicing, transparent audit trails, and consistent trade payment performance.</p></article></div></div></section><section className="section about-execution-section"><div className="container"><SectionHeading title="Marketplace & Channel Execution" description="Disciplined catalog operations, inventory continuity, and commercial logistics execution."/><div className="operations-grid">{ops.map((o) => <article key={o.title} className="operation-card"><img src={o.image} alt="" loading="lazy"/><div><h3>{o.title}</h3><p>{o.text}</p></div></article>)}</div><div className="partner-targets"><SectionHeading title="Who We Partner With"/><div className="partner-target-grid"><article>Domestic Manufacturers &amp; Brand Owners</article><article>Primary Master Wholesalers &amp; Master Distributors</article><article>Exclusive National Importers &amp; Line Card Representatives</article></div></div><div className="about-operations-boxes"><article className="logistics-note"><b>Headquarters & Registered Office</b><br/>Merlin Supply Group LLC<br/>30 N Gould St, Ste R<br/>Sheridan, WY 82801</article><article className="logistics-note"><b>Partner Logistics & 3PL Network</b><br/>Nationwide contracted commercial receiving hubs coordinate freight receiving, palletized cross-dock, and fulfillment across the continental United States.</article></div></div></section></main></Shell>;
}

export function CategoriesPage() {
  const detail = "Submit your catalog or line card for review by our purchasing team. Product fit, documentation, and commercial terms are assessed by product line.";
  return <Shell><main><PageIntro eyebrow="Core categories" title="Product Verticals & Procurement Scope" description="Five focused product verticals, each reviewed for commercial fit, authorized sourcing, and disciplined warehouse handling." image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1500&q=85" compact/><section className="section category-detail-section"><div className="container category-rows">{catalog.categories.map((c, i) => <article className={"category-row " + (i % 2 ? "reverse" : "")} key={c.id}><div className="category-row-image"><img src={c.image} alt="" loading="lazy"/><span>{String(i + 1).padStart(2, "0")}</span></div><div className="category-row-copy"><div className="eyebrow"><span/> Wholesale sourcing</div><h2>{c.title}</h2><p><strong>Procurement Scope:</strong> {c.products || c.description.replace(/^Procurement Scope:\s*/, "").split(". Focus on")[0].replace(/\.$/, "")}</p><p className="muted-copy"><strong>Handling Focus:</strong> {c.compliance}.</p><Link className="button button-gold" to="/b2b-wholesale">Submit Line Card for Review <ArrowRight size={15}/></Link></div></article>)}</div></section><section className="simple-cta"><div className="container simple-cta-inner"><div><h2>Have a catalog or line card?</h2><p>Submit your catalog for supplier and product-line review.</p></div><Link to="/b2b-wholesale" hash="#application" className="button button-dark">Submit Catalog for Review <ArrowRight size={15}/></Link></div></section></main></Shell>;
}

export function WholesalePage() {
  const steps = [
    ["01","Catalog & margin analysis","We review your line card, UPC catalog, wholesale tiers, and MAP policies for channel fit."],
    ["02","Vendor account & trade setup","Exchange vendor onboarding requirements and business documents through an agreed secure channel."],
    ["03","Purchase order issuance","Issue a commercial PO after pricing, quantities, case packs, and payment terms are agreed."],
    ["04","Inbound logistics","Coordinate freight routing, delivery appointments, and receiving requirements with your shipping team."]
  ];
  const benefits = [
    ["Listing Stewardship","Active catalog monitoring, suppressing duplicate ASINs, fixing title/bullet errors, and protecting brand presentation."],
    ["In-Stock Reliability","Disciplined PO cycles and reorder triggers to prevent stockouts and preserve marketplace ranking."],
    ["Palletized Prep & 3PL Hubs","Commercial receiving, labeling, barcoding, and cross-docking across contracted continental U.S. facilities."]
  ];
  return <Shell><main><PageIntro eyebrow="Supplier onboarding" title="U.S. Wholesale Supplier Onboarding" description="Submit your wholesale catalog, line card, pricing tiers, minimum order quantities, and supplier requirements to Merlin Supply Group LLC for purchasing review." image="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1500&q=85"/><section className="section"><div className="container"><SectionHeading title="How we onboard suppliers" description="Learn how our U.S. wholesale supplier onboarding process reviews catalogs, pricing, trade terms, purchase orders, and inbound logistics."/><div className="wholesale-steps">{steps.map(s => <article key={s[0]}><span className="step-number">{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p></article>)}</div></div></section><section className="section application-section" id="application"><div className="container application-layout" id="vendor-form"><div><div className="eyebrow"><span/> Submit your wholesale catalog</div><h2>Submit your wholesale catalog for review.</h2><p>Share your product catalog or line card, wholesale pricing tiers, minimum order quantities, lead times, and supplier onboarding requirements. Our purchasing team reviews submissions for product fit and commercial terms. Send sensitive tax or financial documents only through an agreed secure channel.</p><div className="form-contact-card"><Mail/><div><b>Need help first?</b><a href="mailto:purchasing@merlinsupplygroup.com">purchasing@merlinsupplygroup.com</a><a href="tel:+13072203816">(307) 220-3816</a></div></div></div><InquiryForm mode="wholesale"/></div></section></main></Shell>;
}

export function PartnershipsPage() {
  const list = ["Strict MAP Compliance: respect agreed pricing policies and brand channel requirements","Authorized Channel Adherence: work within supplier authorization and distribution terms","Listing Stewardship: prioritize accurate product data and consistent catalog representation","Predictable PO Cycles: document quantities, terms, and reorder expectations with suppliers"];
  return <Shell><main><PageIntro eyebrow="For brands and suppliers" title="Brand Partnerships Built on Price Integrity & Channel Control" description="We provide manufacturers with capital-backed wholesale purchasing while actively protecting your MAP policies, catalog accuracy, and customer goodwill." image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=85"/><section className="section channel-governance"><div className="container"><SectionHeading title="Channel Governance" description="Clear operating commitments to protect brand equity and distribution integrity."/><div className="governance-grid"><article><h3>MAP Policy Adherence</h3><p>Compliance with published price floors to help prevent margin erosion across digital channels.</p></article><article><h3>Listing &amp; Brand Stewardship</h3><p>Cleaning up fragmented catalog variations, suppressing rogue unauthorized bundles, and optimizing product data.</p></article><article><h3>Non-Diversion Commitment</h3><p>Inventory is sold strictly through agreed, authorized distribution channels—not diverted to gray-market liquidators.</p></article></div></div></section><section className="section partnership-section"><div className="container partnership-layout"><div className="partnership-copy"><div className="eyebrow"><span/> Partner with us</div><h2>Let's discuss your product line.</h2><p>We are interested in hearing from brands, manufacturers, and authorized distributors across product categories. Share your catalog, supplier onboarding requirements, and commercial terms for review by our purchasing team.</p><ul className="check-list">{list.map(item => <li key={item}><Check size={16}/>{item}</li>)}</ul><div className="direct-contact"><span className="contact-symbol"><Mail/></span><div><small>Purchasing and vendor inquiries</small><a href="mailto:purchasing@merlinsupplygroup.com">purchasing@merlinsupplygroup.com</a><a href="tel:+13072203816">(307) 220-3816</a></div></div></div><InquiryForm/></div></section></main></Shell>;
}

export function ContactPage() {
  return <Shell><main><PageIntro eyebrow="Let's connect" title="Connect With Our Purchasing & Distribution Team" description="For supplier onboarding, catalog submissions, brand partnerships, and vendor relations, contact our purchasing team." image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1500&q=85" compact/><section className="section contact-section"><div className="container contact-layout"><div className="contact-info"><div className="eyebrow"><span/> Business information</div><h2>Reach the right team.</h2><p>Submit catalogs, line cards, and supplier onboarding inquiries to our purchasing team.</p><div className="info-row"><MapPin/><div><b>Registered business address</b><p>Merlin Supply Group LLC<br/>30 N Gould St, Ste R<br/>Sheridan, WY 82801</p></div></div><div className="logistics-note"><b>Partner logistics & 3PL distribution</b><br/>Fulfillment locations, receiving docks, and pallet-in/pallet-out capabilities are coordinated with third-party logistics partners based on order requirements. Specific facilities are confirmed during order planning.</div><div className="info-row"><Phone/><div><b>Phone</b><a href="tel:+13072203816">(307) 220-3816</a></div></div><div className="info-row"><Mail/><div><b>Purchasing</b><a href="mailto:purchasing@merlinsupplygroup.com">purchasing@merlinsupplygroup.com</a></div></div><div className="info-row"><Mail/><div><b>Compliance</b><a href="mailto:compliance@merlinsupplygroup.com">compliance@merlinsupplygroup.com</a></div></div><div className="info-row"><Mail/><div><b>General inquiries</b><a href="mailto:info@merlinsupplygroup.com">info@merlinsupplygroup.com</a></div></div><div className="hours"><b>Business hours</b><p>Monday to Friday: 8:00 AM to 5:00 PM Mountain Time<br/>Saturday and Sunday: Closed</p></div></div><InquiryForm mode="contact"/></div></section></main></Shell>;
}

export function PolicyPage({ kind }: { kind: "privacy" | "terms" | "compliance" }) {
  const content = {
    privacy: { title: "Privacy policy", desc: "How business inquiry information is handled.", sections: [["Information submitted","When you contact Merlin Supply Group LLC, you may provide business contact details, company information, product inquiries, and information needed to respond to your request."],["Use of information","Information is used to respond to inquiries, review potential business relationships, communicate about orders, and maintain appropriate business records."],["Sharing and retention","Merlin Supply Group LLC is registered at 30 N Gould St, Ste R, Sheridan, WY 82801. Information may be shared with relevant service providers, including third-party logistics partners, only as reasonably needed to respond to an inquiry or conduct an agreed business process. Partner facilities are engaged according to order requirements; no particular 3PL site is implied unless confirmed separately. Records are retained as required for legitimate business and legal purposes."],["Security and questions","Please do not send sensitive identity, tax, or financial documents through an unsecured contact form or ordinary email. Contact info@merlinsupplygroup.com with privacy questions."]]},
    terms: { title: "Terms of distribution", desc: "General terms for business-to-business purchasing discussions.", sections: [["Business inquiries","Website inquiries do not create a wholesale account, confirm product availability, or constitute acceptance of a purchase order."],["Pricing and purchase orders","Product pricing, quantities, minimums, payment terms, delivery arrangements, and any applicable fees must be confirmed in writing for each transaction. A purchase order is accepted only when confirmed by an authorized representative."],["Shipping and title","Shipping responsibilities, risk of loss, delivery estimates, and transfer of title are determined by the written terms applicable to the relevant order."],["Returns and product requirements","Returns, claims, product condition, documentation, and any supplier-specific restrictions are governed by the written agreement and applicable supplier policies."],["Questions","Merlin Supply Group LLC is registered at 30 N Gould St, Ste R, Sheridan, WY 82801. Fulfillment and logistics may be coordinated through third-party providers, with facilities, responsibilities, and capacity confirmed for each order; no specific hub is guaranteed by these website terms. For wholesale terms, contact purchasing@merlinsupplygroup.com before submitting an order."]]},
    compliance: { title: "Authorized reseller statement", desc: "Our stated approach to responsible wholesale distribution.", sections: [["Supplier authorization","Merlin Supply Group LLC intends to conduct wholesale activities through appropriate supplier and distributor relationships. Specific authorization is product- and supplier-dependent and should be verified for each relationship."],["Manufacturer policies","We aim to adhere to applicable manufacturer pricing policies, including MAP policies where they apply, and to supplier requirements governing resale, handling, and distribution."],["Product integrity","Business relationships should preserve product integrity, traceability, and the terms set by manufacturers and authorized distributors. Gray-market diversion and misrepresentation of authorization are not supported."],["Verification","Merlin Supply Group LLC is registered at 30 N Gould St, Ste R, Sheridan, WY 82801. Logistics may be coordinated with third-party fulfillment providers where appropriate. This statement describes a compliance approach and is not a claim that Merlin Supply Group LLC is authorized by every brand or manufacturer. Contact compliance@merlinsupplygroup.com for related questions."]]}
  }[kind];
  return <Shell><main><PageIntro eyebrow="Company policies" title={content.title} description={content.desc} compact/><section className="section policy-section"><div className="container policy-layout"><aside><div className="policy-aside-mark"><BrandMark size={28}/></div><h3>Merlin Supply Group LLC</h3><p>A Wyoming Limited Liability Company</p><a href="mailto:info@merlinsupplygroup.com">Contact us <ArrowUpRight size={14}/></a></aside><article className="policy-content"><p className="policy-updated">Policy overview</p>{content.sections.map((s, i) => <section key={s[0]}><h2>{s[0]}</h2><p>{s[1]}</p></section>)}</article></div></section></main></Shell>;
}
