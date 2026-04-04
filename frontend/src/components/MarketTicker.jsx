const tickers = [
  '🌾 Wheat ₹2,275/q ▲2.1%',
  '🌿 Rice ₹3,100/q ▲1.4%',
  '🟡 Mustard ₹5,650/q ▼0.8%',
  '🫘 Soybean ₹4,200/q ▲3.2%',
  '🌽 Maize ₹1,985/q ▲0.5%',
  '🧅 Onion ₹2,800/q ▼1.2%',
  '🥔 Potato ₹1,450/q ▲4.1%',
  '🍅 Tomato ₹3,900/q ▲7.3%',
  '🌱 Cotton ₹6,200/q ▲1.8%',
  '🫚 Groundnut ₹5,850/q ▼0.4%',
];

export default function MarketTicker() {
  return (
    <div className="bg-gradient-to-r from-[#0a1a0c] via-[#0d2210] to-[#0a1a0c] border-y border-green-900/50 py-2.5 overflow-hidden relative z-30">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 bg-green-500 text-white text-xs font-black px-4 py-1 rounded-r-full tracking-widest uppercase shadow-lg z-10">
          LIVE MANDI
        </div>
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{ animation: 'ticker 35s linear infinite' }}
          >
            {[...tickers, ...tickers].map((item, i) => (
              <span key={i} className="text-sm text-green-100 font-semibold tracking-wide">
                {item}
                <span className="text-green-700 mx-4">|</span>
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
