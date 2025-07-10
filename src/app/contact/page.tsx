import NewsletterForm from '@/components/NewsletterForm';
export default function Contact() {
  return (
    <section className="prose mx-auto px-6 py-12">
      <h1>Commissions & Contact</h1>
      <p>Email: <a href="mailto:studio@nomadsvagabonds.art">studio@nomadsvagabonds.art</a></p>
      <h2>Newsletter</h2>
      <NewsletterForm />
    </section>
  );
}
