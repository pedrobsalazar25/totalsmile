import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto py-16 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="The Smile Sanctuary" className="h-12 w-12" />
            <div>
              <p className="font-display font-bold text-lg leading-tight">The Smile Sanctuary</p>
              <p className="text-white/70 text-sm">Costa Rica Dental Excellence</p>
            </div>
          </div>
          <p className="mt-6 text-white/75 leading-relaxed max-w-sm">
            Elite dental care, paired with the warmth of paradise. Three locations across Costa Rica.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Visit</h4>
          <ul className="space-y-2 text-white/80">
            <li>Alajuela • Pérez Zeledón • Playas del Coco</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-white/80">
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-accent" /> hello@smilesanctuary.cr</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-accent" /> US: +1 (888) 876-3790</li>
            <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4 text-accent" /> WhatsApp: +1 (805) 717-8138</li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-accent" /> Guanacaste, Costa Rica</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto py-6 text-sm text-white/60 flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} The Smile Sanctuary. All rights reserved.</p>
          <p>Made with care in Costa Rica.</p>
        </div>
      </div>
    </footer>
  );
};
