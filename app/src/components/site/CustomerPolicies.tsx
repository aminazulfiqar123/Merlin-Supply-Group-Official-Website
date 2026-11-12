import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { PageIntro, Shell } from "./Site";

function PolicyLayout({ title, description, children }: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return <Shell><main>
    <PageIntro eyebrow="Customer policies" title={title} description={description} compact />
    <section className="section policy-section">
      <div className="container policy-layout">
        <aside>
          <h3>Merlin Supply Group LLC</h3>
          <p>30 N Gould St, Ste R<br />Sheridan, WY 82801</p>
          <p>Questions about an order or a return?</p>
          <a href="mailto:info@merlinsupplygroup.com">info@merlinsupplygroup.com</a>
        </aside>
        <article className="policy-content">
          <p className="policy-updated">Last updated: November 12, 2026</p>
          {children}
        </article>
      </div>
    </section>
  </main></Shell>;
}

export function ShippingPolicyPage() {
  return <PolicyLayout
    title="Shipping Policy"
    description="How shipping availability, charges, delivery estimates and shipment issues are handled for direct customer purchases."
  >
    <section><h2>1. When this policy applies</h2>
      <p>This policy applies to direct retail orders accepted by Merlin Supply Group LLC. Supplier onboarding requests and website inquiries are not product orders. Business-to-business purchase orders, freight arrangements and distribution agreements are governed by their separately agreed written terms.</p>
      <p>If you purchased an item through a third-party marketplace, consult the shipping terms shown on that marketplace for that purchase.</p>
    </section>
    <section><h2>2. Shipping destinations</h2>
      <p>We serve customers in the United States. Availability for a particular delivery address—including Alaska, Hawaii, territories, P.O. boxes or military addresses—will be confirmed before an order is accepted. We do not represent that every destination is supported for every product.</p>
    </section>
    <section><h2>3. Shipping charges</h2>
      <p>There is <strong>no automatic free-shipping threshold</strong>. Shipping charges, if applicable, are communicated to the customer before an order is placed or accepted, whether through a future online checkout or an individually confirmed order quote.</p>
      <p>Costs may depend on the delivery destination, products, weight, dimensions and available carrier services. We will not charge an unapproved shipping amount after an order is accepted.</p>
    </section>
    <section><h2>4. Order processing and delivery estimates</h2>
      <p>Processing and delivery estimates depend on the product, stock availability and delivery service. Applicable timeframes will be communicated during the order process or in the order confirmation; we do not publish a universal processing or transit-time guarantee.</p>
      <p>Processing time and carrier transit time are separate. Holidays, adverse weather, carrier disruptions and address issues may affect delivery.</p>
    </section>
    <section><h2>5. Tracking information</h2>
      <p>We will provide available carrier and tracking information when an order ships and tracking is supported for that shipment. Tracking availability and the delivery method will depend on the order and carrier.</p>
    </section>
    <section><h2>6. Delays and cancellations</h2>
      <p>If an order cannot ship within its promised timeframe, we will notify the affected customer and provide options for a revised shipping date or cancellation and refund as required by applicable law. Please contact us promptly if you wish to cancel; the options available may depend on whether shipment has started.</p>
    </section>
    <section><h2>7. Shipping address accuracy</h2>
      <p>Please confirm the recipient name, delivery address and contact information when placing an order. Contact us promptly if a correction is needed. Changes may no longer be possible once the carrier has received the shipment. Any additional charge for an agreed correction or reshipment will be disclosed before it is incurred.</p>
    </section>
    <section><h2>8. Missing, damaged or incorrect shipments</h2>
      <p>If a package is lost, arrives damaged or contains the wrong item, email us with your order number, a description of the problem and photographs when helpful. We will investigate and explain the available resolution, including any refund or replacement required by law.</p>
    </section>
    <section><h2>9. Contact and related policies</h2>
      <p><strong>Merlin Supply Group LLC</strong><br />30 N Gould St, Ste R, Sheridan, WY 82801<br /><a href="mailto:info@merlinsupplygroup.com">info@merlinsupplygroup.com</a></p>
      <p>For eligibility and refund information, see our <Link to="/refund-policy">Refund &amp; Returns Policy</Link>. Nothing in this policy restricts consumer rights that cannot be waived under applicable law.</p>
    </section>
  </PolicyLayout>;
}

export function RefundPolicyPage() {
  return <PolicyLayout
    title="Refund & Returns Policy"
    description="Our 30-day return request window and the process for returns, damaged items and refunds."
  >
    <section><h2>1. When this policy applies</h2>
      <p>This policy covers eligible direct retail purchases accepted by Merlin Supply Group LLC. Separately negotiated wholesale and business-to-business orders are governed by the applicable written purchase or distribution terms, subject to mandatory law. Purchases through a third-party marketplace may be subject to that marketplace's applicable return process.</p>
    </section>
    <section><h2>2. Thirty-day return window</h2>
      <p>You may request a return within <strong>30 calendar days after receiving an eligible item</strong>. Please contact us within that period so we can review the request and provide instructions. Any additional rights arising under applicable consumer law remain available.</p>
    </section>
    <section><h2>3. Eligibility and product-specific conditions</h2>
      <p>For ordinary change-of-mind returns, items should be in substantially the same condition in which they were received, with included accessories and original packaging where reasonably available. Some products may have hygiene, safety or other restrictions; any applicable restrictions must be disclosed before purchase and must comply with law.</p>
      <p>The ordinary change-of-mind conditions do not override rights relating to a defective, damaged, incorrectly described or incorrectly supplied product.</p>
    </section>
    <section><h2>4. How to request a return</h2>
      <p>Email <a href="mailto:info@merlinsupplygroup.com">info@merlinsupplygroup.com</a> with your order number, the product involved, the reason for the return and photographs if relevant. We will respond with return instructions and, where applicable, an authorized return destination.</p>
      <p><strong>Please do not send products to our registered business address unless we specifically direct you to do so.</strong> A return-processing location may be different from our registered office.</p>
    </section>
    <section><h2>5. Return-shipping costs</h2>
      <p>For change-of-mind returns, the responsibility for return shipping and any applicable label charges will be communicated before the return is authorized. We do not state a universal prepaid-label or free-return-shipping promise.</p>
      <p>For damaged, defective or incorrect products, we will review the circumstances and provide an appropriate remedy and return-shipping arrangement consistent with applicable law.</p>
    </section>
    <section><h2>6. Damaged, defective or incorrect items</h2>
      <p>Please contact us as soon as reasonably practical after discovering an issue. Include an order number and a description of the problem. Depending on the circumstances, available remedies may include a refund, replacement or another legally appropriate resolution.</p>
    </section>
    <section><h2>7. Review and inspection</h2>
      <p>We may review the return request and inspect a returned item to determine whether the applicable return conditions are met. If a return is not accepted, we will explain the reason and any available next steps, without limiting statutory consumer remedies.</p>
    </section>
    <section><h2>8. Refund method and timing</h2>
      <p>Approved refunds will be handled using the original payment method when available and appropriate, or an agreed alternative permitted by the payment provider and law. We will communicate refund approval and initiation; the time for funds to appear may also depend on the financial institution.</p>
      <p>Required refunds for canceled, undelivered or otherwise legally protected orders will be processed within the time required by applicable law. We do not publish an unverified fixed refund-processing timeframe.</p>
    </section>
    <section><h2>9. Shipping charges, exchanges and cancellations</h2>
      <p>Whether original shipping charges are refundable depends on the reason for the return, the agreed order terms and applicable law. Any lawful deduction will be explained.</p>
      <p>To request an exchange or cancel an order, contact us. We will explain the options available for the specific product and order status; a direct exchange service is not guaranteed.</p>
    </section>
    <section><h2>10. Contact and policy updates</h2>
      <p><strong>Merlin Supply Group LLC</strong><br />30 N Gould St, Ste R, Sheridan, WY 82801<br /><a href="mailto:info@merlinsupplygroup.com">info@merlinsupplygroup.com</a></p>
      <p>See our <Link to="/shipping-policy">Shipping Policy</Link> for shipping-related information. This policy may be updated for future orders; changes do not retroactively remove existing legal or contractual rights.</p>
    </section>
  </PolicyLayout>;
}
