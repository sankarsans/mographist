export default function Buttons({
  content,
  href,
  className,
  icon,
}: {
  content: any;
  href: string;
  className?: string;
  icon?: string;
}) {
  return (
    <>
      <style>{`
        .btn-custom-cta {
          background-color: #3b28cc;
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 400;
          border-radius: 60px;
          padding: 0.65rem 1.2rem;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: background-color 0.2s ease, transform 0.15s ease;
        }

        .btn-custom-cta:hover {
          background-color: #2f1fa8;
          color: #ffffff;
          transform: translateY(-1px);
        }
      `}</style>

      <a href={href} className={`btn btn-custom-cta ${className || ''}`}>
        {content}
        {icon && <img src={icon} alt="Icon" className="img-fluid" />}
      </a>
    </>
  );
}
