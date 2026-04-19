export default function Footer() {
  return (
    <footer className="bg-surface-container-low pt-24 pb-32 md:pb-24 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/images/Logo.png" alt="Logo" className="h-12 w-auto object-contain" />
              <h2 className="text-3xl font-serif italic text-primary">UPPER CAMPUS RESIDENCE</h2>
            </div>
            <p className="text-on-surface-variant max-w-md leading-relaxed">
              The official residence merchandise platform. Crafted for comfort, designed for legacy. All pieces are limited editions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-sans font-bold tracking-[0.2em] uppercase mb-6">Collection</h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><button className="hover:text-primary transition-colors">Outerwear</button></li>
              <li><button className="hover:text-primary transition-colors">Knitwear</button></li>
              <li><button className="hover:text-primary transition-colors">Accessories</button></li>
              <li><button className="hover:text-primary transition-colors">Archival Pieces</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-sans font-bold tracking-[0.2em] uppercase mb-6">Assistance</h3>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li><button className="hover:text-primary transition-colors">Sizing Guide</button></li>
              <li><button className="hover:text-primary transition-colors">Shipping & Returns</button></li>
              <li><button className="hover:text-primary transition-colors">Member Support</button></li>
              <li><button className="hover:text-primary transition-colors">Care Instructions</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium tracking-widest uppercase text-on-surface-variant/60">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>©2026 UPPER CAMPUS RESIDENCE</p>
            <p>CREATED BY MUNASHE CHIIMBA</p>
          </div>
          <div className="flex gap-8">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <button className="hover:text-primary transition-colors">Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
