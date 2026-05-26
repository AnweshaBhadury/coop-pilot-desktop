const footerColumns = [
  {
    title: "Product",
    titleClassName:
      "absolute top-0 left-0 w-36 [font-family:'Alike',Helvetica] font-normal text-[#fdeec0] text-[32px] tracking-[0] leading-8",
    contentClassName:
      "absolute top-[74px] left-0 w-[260px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[50px]",
    links: ["Features", "Pricing", "Integrations", "Product Tour"],
  },
  {
    title: "Use Cases",
    titleClassName:
      "absolute top-0 left-[217px] w-36 [font-family:'Alike',Helvetica] font-normal text-[#fdeec0] text-[32px] tracking-[0] leading-8",
    contentClassName:
      "absolute top-[74px] left-[217px] w-[260px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[50px]",
    links: ["For Cooperatives", "For Members", "For Auditors"],
  },
  {
    title: "Company",
    titleClassName:
      "absolute top-0 left-[477px] w-36 [font-family:'Alike',Helvetica] font-normal text-[#fdeec0] text-[32px] tracking-[0] leading-8",
    contentClassName:
      "absolute top-[74px] left-[477px] w-[200px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[50px]",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    titleClassName:
      "absolute top-0 left-[678px] w-36 [font-family:'Alike',Helvetica] font-normal text-[#fdeec0] leading-8 text-[32px] tracking-[0]",
    contentClassName:
      "absolute top-[74px] left-[678px] w-[200px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[50px]",
    links: ["Privacy Policy", "Terms of Service", "Compliance", "Security"],
  },
];

const footerBadges = [
  {
    text: "GDPR Compliant",
    className:
      "absolute top-[354px] left-0 w-[284px] [font-family:'Alike',Helvetica] font-normal text-[#fdeec0] text-2xl tracking-[0] leading-8",
  },
  {
    text: " Secure & Encrypted",
    className:
      "absolute top-[354px] left-[294px] w-[284px] [font-family:'Alike',Helvetica] font-normal text-[#fdeec0] text-2xl tracking-[0] leading-8",
  },
  {
    text: "Built for Cooperatives",
    className:
      "absolute top-[354px] left-[601px] w-[284px] [font-family:'Alike',Helvetica] font-normal text-[#fdeec0] text-2xl tracking-[0] leading-8",
  },
];

const socialLinks = [
  {
    href: "https://twitter.com",
    label: "Twitter",
    imgClassName: "w-[38.69px] h-[38.69px] aspect-[1]",
    iconAlt: "Mdi twitter",
    src: "https://c.animaapp.com/J1nhJHDS/img/mdi-twitter.svg",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    imgClassName: "mt-[0.2px] w-[38.69px] h-[38.69px] ml-[84.2px] aspect-[1]",
    iconAlt: "Ic baseline facebook",
    src: "https://c.animaapp.com/J1nhJHDS/img/ic-baseline-facebook.svg",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    imgClassName: "mt-[0.3px] w-[38.69px] h-[38.69px] ml-[58.6px] aspect-[1]",
    iconAlt: "Mdi instagram",
    src: "https://c.animaapp.com/J1nhJHDS/img/mdi-instagram.svg",
  },
];

export const FooterNavigationSection = () => {
  return (
    <footer
      className="absolute top-[9784px] left-0 w-full h-[889px] overflow-hidden"
      aria-labelledby="footer-navigation-heading"
    >
      <div className="absolute top-0 left-0 w-full h-[889px]">
        <div
          className="absolute top-0 left-0 w-full h-[889px] bg-[#7d0434]"
          aria-hidden="true"
        />
        <p className="absolute top-[792px] left-[79px] w-[425px] [font-family:'DM_Sans',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[50px]">
          © 2026 CoopPilot. All rights reserved.
        </p>
        <div
          className="absolute top-[801px] right-[79px] w-[259px] h-[39px] flex"
          aria-label="Social media links"
        >
          {socialLinks.map((socialLink) => (
            <a
              key={socialLink.label}
              href={socialLink.href}
              aria-label={socialLink.label}
              target="_blank"
              rel="noreferrer"
              className="inline-flex"
            >
              <img
                className={socialLink.imgClassName}
                alt={socialLink.iconAlt}
                src={socialLink.src}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="absolute top-[283px] left-[465px] w-[907px] h-[395px]">
        <h2 id="footer-navigation-heading" className="sr-only">
          Footer navigation
        </h2>
        {footerColumns.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h3 className={column.titleClassName}>{column.title}</h3>
            <ul className={column.contentClassName}>
              {column.links.map((link) => (
                <li key={link}>
                  <a
  href="/"
  className="
    relative
    inline-block
    transition-all
    duration-300
    hover:text-[#fdeec0]
    hover:brightness-125
    hover:drop-shadow-[0_0_8px_rgba(253,238,192,0.6)]
    after:content-['']
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-[#fdeec0]
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {footerBadges.map((badge) => (
          <div key={badge.text} className={badge.className}>
            {badge.text}
          </div>
        ))}
      </div>
      <div className="absolute top-[50px] left-[43px] w-[348px] h-48 flex flex-col">
        <img
          className="w-[275px] h-[133px] aspect-[2.07]"
          alt="Gemini generated"
          src="https://c.animaapp.com/J1nhJHDS/img/gemini-generated-image-jb79tijb79tijb79-removebg-preview-2@2x.png"
        />
        <a
          href="mailto:post@u-d-g.de"
          className="ml-[26px] w-80 h-[59px] [font-family:'Alike',Helvetica] font-normal text-white text-2xl tracking-[0] leading-8"
        >
          Email: post@u-d-g.de
        </a>
      </div>
    </footer>
  );
};
