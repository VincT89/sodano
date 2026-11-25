const WORDS = ['Developer', 'Marketing', 'System', 'Cloud', 'AI', 'E-commerce', 'Brand identity'];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row.map((w, i) => (
          <span key={i} style={{ display: 'contents' }}><span>{w}</span><i>✦</i></span>
        ))}
      </div>
    </div>
  );
}
