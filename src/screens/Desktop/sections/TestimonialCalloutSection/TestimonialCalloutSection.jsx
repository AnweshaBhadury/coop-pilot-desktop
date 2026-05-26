const topRowCards = [
  {
    id: "gdpr",
    cardClassName:
      "absolute top-0 left-0 w-[270px] h-[117px] bg-white rounded-[15px] border border-solid border-[#e6e6e6] shadow-[0px_4px_4px_#00000040]",
    iconClassName: "absolute top-[27px] left-[15px] w-14 h-14 aspect-[1]",
    iconAlt: "GDPR compliance icon",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/material-symbols-light-lock.svg",
    titleClassName:
      "absolute top-[26px] left-[72px] w-[154px] [font-family:'Host_Grotesk',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]",
    title: "GDPR Compliant",
    descriptionClassName:
      "absolute top-[55px] left-[72px] w-[168px] [font-family:'DM_Sans',Helvetica] font-medium text-[#00000096] text-base tracking-[0] leading-[normal]",
    description: "Servers in Germany. No ad tracking",
  },
  {
    id: "gobd",
    cardClassName:
      "absolute top-0 left-[298px] w-[260px] h-[117px] bg-white rounded-[15px] border border-solid border-[#e6e6e6] shadow-[0px_4px_4px_#00000040]",
    iconClassName:
      "absolute top-8 left-[323px] w-[38px] h-[38px] aspect-[1] object-cover",
    iconAlt: "GoBD certified icon",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/external-notebook-press-and-media-flaticons-lineal-color-flat-ic@2x.png",
    titleClassName:
      "absolute top-[26px] left-[374px] w-36 [font-family:'Host_Grotesk',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]",
    title: "GoBD Certified",
    descriptionClassName:
      "absolute top-[54px] left-[374px] w-[168px] [font-family:'DM_Sans',Helvetica] font-medium text-[#00000096] text-base tracking-[0] leading-[normal]",
    description: "Tamper-proof transaction ledger",
  },
  {
    id: "datev",
    cardClassName:
      "absolute top-0 left-[596px] w-[270px] h-[117px] bg-white rounded-[15px] border border-solid border-[#e6e6e6] shadow-[0px_4px_4px_#00000040]",
    iconClassName:
      "absolute top-[26px] left-[614px] w-16 h-16 aspect-[1] object-cover",
    iconAlt: "DATEV integration icon",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/link-icon-template-black-color-editable-free-vector-removebg-pre@2x.png",
    titleClassName:
      "absolute top-[25px] left-[678px] w-[168px] [font-family:'Host_Grotesk',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]",
    title: "DATEV Integration",
    descriptionClassName:
      "absolute top-[55px] left-[678px] w-[157px] [font-family:'DM_Sans',Helvetica] font-medium text-[#00000096] text-base tracking-[0] leading-[normal]",
    description: "One-click export, always ready",
  },
  {
    id: "qes",
    cardClassName:
      "absolute top-0 left-[894px] w-[257px] h-[117px] bg-white rounded-[15px] border border-solid border-[#e6e6e6] shadow-[0px_4px_4px_#00000040]",
    iconClassName: "absolute top-8 left-[916px] w-11 h-11 aspect-[1]",
    iconAlt: "QES signing icon",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/link-icon-template-black-color-editable-free-vector-removebg-pre-1@2x.png",
    titleClassName:
      "absolute top-[26px] left-[973px] w-36 [font-family:'Host_Grotesk',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]",
    title: "QES Signing",
    descriptionClassName:
      "absolute top-14 left-[973px] w-[157px] [font-family:'DM_Sans',Helvetica] font-medium text-[#00000096] text-base tracking-[0] leading-[normal]",
    description: "One-click export, always ready",
  },
];

const bottomRowCards = [
  {
    id: "beg",
    cardClassName:
      "absolute top-[465px] left-[443px] w-[260px] h-[111px] bg-white rounded-[15px] border border-solid border-[#e6e6e6] shadow-[0px_4px_4px_#00000040]",
    iconClassName:
      "top-[490px] left-[461px] w-[52px] h-[52px] absolute aspect-[1]",
    iconAlt: "BEG IV ready icon",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/external-notebook-press-and-media-flaticons-lineal-color-flat-ic-2@2x.png",
    titleClassName:
      "absolute top-[489px] left-[519px] w-36 [font-family:'Host_Grotesk',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]",
    title: "BEG IV Ready",
    descriptionClassName:
      "top-[518px] left-[519px] absolute w-[168px] [font-family:'DM_Sans',Helvetica] font-medium text-[#00000096] text-base tracking-[0] leading-[normal]",
    description: "Tamper-proof transaction ledger",
  },
  {
    id: "geng",
    cardClassName:
      "absolute top-[465px] left-[741px] w-[259px] h-[111px] bg-white rounded-[15px] border border-solid border-[#e6e6e6] shadow-[0px_4px_4px_#00000040]",
    iconClassName:
      "top-[497px] left-[766px] w-[45px] h-[45px] object-cover absolute aspect-[1]",
    iconAlt: "GenG compliance icon",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/external-notebook-press-and-media-flaticons-lineal-color-flat-ic-1@2x.png",
    titleClassName:
      "absolute top-[488px] left-[823px] w-[186px] [font-family:'Host_Grotesk',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal]",
    title: "GenG §15 §33",
    descriptionClassName:
      "top-[520px] left-[823px] absolute w-[168px] [font-family:'DM_Sans',Helvetica] font-medium text-[#00000096] text-base tracking-[0] leading-[normal]",
    description: "Tamper-proof transaction ledger",
  },
];

export const TestimonialCalloutSection = () => {
  return (
    <section
      aria-labelledby="trust-compliance-heading"
      className="absolute top-[6988px] left-0 w-[1440px] h-[649px] bg-[#e7edff]"
    >
      <div
        id="trust-compliance-heading"
        className="absolute h-[5.52%] top-[6.08%] left-[calc(50.00%_-_197px)] w-[395px] [font-family:'DM_Sans',Helvetica] font-semibold text-[#000800] text-2xl text-center tracking-[0] leading-[normal]"
      >
        Trust &amp; Compliance
      </div>
      <div className="absolute top-[107px] left-[calc(50.00%_-_425px)] w-[799px] h-[133px] flex justify-center">
        <h2 className="w-[797px] h-[133px] -ml-0.5 [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-[50px] text-center tracking-[0] leading-[normal]">
          <span className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-[50px] tracking-[0]">
            Built for the{" "}
          </span>
          <span className="text-[55px]">seamless flow </span>
          <span className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-[50px] tracking-[0]">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;of
            Cooperative
          </span>
        </h2>
      </div>
      <div
        aria-label="Primary compliance certifications"
        className="absolute top-[290px] left-[calc(50.00%_-_575px)] w-[1151px] h-[102px]"
        role="list"
      >
        {topRowCards.map((card) => (
          <article
            key={card.id}
            className="contents"
            role="listitem"
            aria-label={card.title}
          >
            <div className={card.cardClassName} />
            <img
              className={card.iconClassName}
              alt={card.iconAlt}
              src={card.iconSrc}
            />
            <div className={card.titleClassName}>{card.title}</div>
            <div className={card.descriptionClassName}>{card.description}</div>
          </article>
        ))}
      </div>
      <div aria-label="Additional compliance certifications" role="list">
        {bottomRowCards.map((card) => (
          <article
            key={card.id}
            className="contents"
            role="listitem"
            aria-label={card.title}
          >
            <div className={card.cardClassName} />
            <img
              className={card.iconClassName}
              alt={card.iconAlt}
              src={card.iconSrc}
            />
            <div className={card.titleClassName}>{card.title}</div>
            <div className={card.descriptionClassName}>{card.description}</div>
          </article>
        ))}
      </div>
    </section>
  );
};
