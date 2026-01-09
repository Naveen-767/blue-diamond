import { Tag, Clock } from 'lucide-react';

interface OfferCardProps {
  title: string;
  description: string;
  discount: string;
  validUntil: string;
  code: string;
}

export default function OfferCard({ title, description, discount, validUntil, code }: OfferCardProps) {
  return (
    <div className="group relative bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-amber-500/20 rounded-xl overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-500" />

      <div className="absolute top-4 right-4">
        <div className="bg-amber-500 text-black font-bold px-4 py-2 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
          {discount}
        </div>
      </div>

      <div className="relative p-8">
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="h-5 w-5 text-amber-500" />
          <span className="text-amber-500 font-semibold text-sm">SPECIAL OFFER</span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors duration-300">
          {title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>

        <div className="flex items-center space-x-2 mb-6 text-gray-300">
          <Clock className="h-4 w-4 text-amber-500" />
          <span className="text-sm">Valid until: {validUntil}</span>
        </div>

        <div className="bg-black/50 border border-amber-500/30 rounded-lg p-4 mb-6">
          <div className="text-sm text-gray-400 mb-1">Promo Code:</div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-amber-500 tracking-wider">{code}</span>
            <button className="text-xs text-amber-500 hover:text-amber-400 transition-colors">
              COPY
            </button>
          </div>
        </div>

        <button className="w-full py-3 bg-amber-500 text-black font-bold rounded-lg hover:bg-amber-400 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-amber-500/50">
          Claim Offer
        </button>
      </div>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-500/20 rounded-xl transition-all duration-500 pointer-events-none" />
    </div>
  );
}
