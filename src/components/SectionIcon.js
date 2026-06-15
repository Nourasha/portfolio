export default function SectionIcon({ title }) {
  const t = title?.toLowerCase() || "";

  if (t.includes("education"))
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L2 8l10 5 10-5-10-5z" stroke="#9ca3af" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M6 10.5v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="22" y1="8" x2="22" y2="13" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );

  if (t.includes("skill"))
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" stroke="#9ca3af" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    );

  if (t.includes("experience") || t.includes("work"))
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="#9ca3af" strokeWidth="1.5"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" stroke="#9ca3af" strokeWidth="1.5"/>
        <line x1="12" y1="12" x2="12" y2="16" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="10" y1="14" x2="14" y2="14" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    );

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="#9ca3af" strokeWidth="1.5"/>
      <line x1="12" y1="8" x2="12" y2="12" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="12" cy="15.5" r="0.75" fill="#9ca3af"/>
    </svg>
  );
}