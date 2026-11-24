export function PenguinDecoration() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-64 overflow-hidden select-none" aria-hidden="true">
      <div className="absolute bottom-9 left-[62%] -translate-x-1/2 scale-[.72] sm:bottom-14 sm:left-[65%] sm:scale-100">
        <svg className="antarctic-penguin-waddle" width="126" height="132" viewBox="0 0 126 132" fill="none">
          <ellipse cx="63" cy="121" rx="48" ry="7" fill="#ebdcae" opacity=".7" />
          <ellipse cx="42" cy="78" rx="25" ry="39" fill="#172b3a" />
          <ellipse cx="42" cy="81" rx="15" ry="29" fill="#fff" />
          <circle cx="42" cy="34" r="21" fill="#172b3a" />
          <ellipse cx="42" cy="40" rx="13" ry="12" fill="#fff" />
          <circle cx="36" cy="35" r="3" fill="#0f172a" /><circle cx="37" cy="34" r="1" fill="#fff" />
          <circle cx="48" cy="35" r="3" fill="#0f172a" /><circle cx="49" cy="34" r="1" fill="#fff" />
          <path d="m42 38 6 4-6 4-6-4 6-4Z" fill="#f59e0b" />
          <path d="M34 115 27 121m22-6 7 6" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
          <ellipse cx="91" cy="84" rx="19" ry="31" fill="#243746" />
          <ellipse cx="91" cy="87" rx="11" ry="23" fill="#fff" />
          <circle cx="91" cy="48" r="17" fill="#243746" />
          <ellipse cx="91" cy="53" rx="10" ry="9" fill="#fff" />
          <circle cx="86" cy="50" r="2.4" fill="#0f172a" /><circle cx="87" cy="49" r=".9" fill="#fff" />
          <circle cx="96" cy="50" r="2.4" fill="#0f172a" /><circle cx="97" cy="49" r=".9" fill="#fff" />
          <path d="m91 51 5 3-5 3-5-3 5-3Z" fill="#f59e0b" />
          <path d="M85 112 80 117m17-5 5 5" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
