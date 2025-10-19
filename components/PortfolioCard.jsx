import Link from "next/link";

type Props = {
  title: string;
  desc: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
};

export default function PortfolioCard({ title, desc, href, imgSrc, imgAlt }: Props) {
  return (
    <Link
      href={href}
      aria-label={`${title} – open`}
      className="group block rounded-2xl overflow-hidden shadow-sm ring-1 ring-black/5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 transition"
    >
      <div className="relative aspect-[4/3]">
        <img
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* gradient overlay for white text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/5" />

        {/* Title (always visible) */}
        <div className="absolute left-4 right-4 bottom-4 text-white drop-shadow-md">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>

        {/* Description (mobile always on; desktop hover/focus) */}
        <div className="
            absolute inset-0 flex items-end p-4
            text-white/95 text-sm leading-snug
            opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus:opacity-100
            transition-opacity
            backdrop-blur-[1px]
          ">
          <p className="line-clamp-2">
            {desc}
          </p>
        </div>
      </div>
    </Link>
  );
}
