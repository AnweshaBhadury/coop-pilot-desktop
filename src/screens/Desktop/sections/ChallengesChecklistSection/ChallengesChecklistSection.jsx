const challengeCards = [
  {
    id: "01",
    title: "ONBOARDING",
    description: (
      <>
        Paper-based onboarding
        <br />
        Forms, signatures, scans — slow and unreliable.
      </>
    ),
    cardClassName: "absolute top-[122px] left-[772px] w-[576px] h-[147px]",
    shadowClassName: "shadow-[0px_4px_4px_#00000040]",
    titleClassName:
      "absolute top-8 left-[120px] w-[236px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]",
    descriptionClassName:
      "absolute top-[74px] left-[120px] w-[432px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0000009e] text-lg tracking-[0] leading-[normal]",
    iconWrapperClassName: "absolute top-[164px] left-[796px] w-[75px] h-[68px]",
    iconCircleClassName:
      "absolute top-0 left-[3px] w-[68px] h-[68px] bg-[#ffe4edc4] rounded-[34px]",
    iconClassName:
      "absolute top-px left-0 w-[75px] h-[65px] aspect-[1.15] object-cover",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/screenshot-2026-04-29-203629-removebg-preview-1@2x.png",
    iconAlt: "Onboarding illustration",
  },
  {
    id: "02",
    title: "DATA",
    description: (
      <>
        Scattered data systems
        <br />
        Excel, folders, and tools that don&apos;t connect.
      </>
    ),
    cardClassName:
      "absolute top-[300px] left-[772px] w-[576px] h-[147px] shadow-[0px_4px_4px_#00000040]",
    shadowClassName: "",
    titleClassName:
      "absolute top-[31px] left-[119px] w-[236px] [-webkit-text-stroke:1px_#ffffff] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]",
    descriptionClassName:
      "absolute top-[73px] left-[119px] w-[432px] [-webkit-text-stroke:1px_#ffffff] [font-family:'DM_Sans',Helvetica] font-medium text-[#0000009e] text-lg tracking-[0] leading-[normal]",
    iconWrapperClassName: "absolute top-[340px] left-[795px] w-[75px] h-[68px]",
    iconCircleClassName:
      "absolute top-0 left-[3px] w-[68px] h-[68px] bg-[#ffe4edc4] rounded-[34px]",
    iconClassName:
      "absolute top-px left-0 w-[75px] h-[65px] aspect-[1.15] object-cover",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/screenshot-2026-04-29-203629-removebg-preview-1-1@2x.png",
    iconAlt: "Data illustration",
    extraShape: (
      <div className="absolute top-[21px] left-[37px] w-[62px] h-[69px] border border-solid border-white aspect-[0.9]" />
    ),
  },
  {
    id: "03",
    title: "GOVERNANCE",
    description: (
      <>
        Manual governance work
        <br /> AGMs, invites, and minutes done by hand.
      </>
    ),
    cardClassName:
      "absolute top-[480px] left-[772px] w-[576px] h-[147px] shadow-[0px_4px_4px_#00000040]",
    shadowClassName: "",
    titleClassName:
      "absolute top-8 left-[120px] w-[295px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]",
    descriptionClassName:
      "absolute top-[74px] left-[120px] w-[432px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0000009e] text-lg tracking-[0] leading-[normal]",
    iconWrapperClassName: "absolute top-[520px] left-[797px] w-[69px] h-[68px]",
    iconCircleClassName:
      "top-0 left-0 absolute w-[68px] h-[68px] bg-[#ffe4edc4] rounded-[34px]",
    iconClassName:
      "absolute top-px left-0 w-[69px] h-[60px] aspect-[1.15] object-cover",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/screenshot-2026-04-29-203629-removebg-preview-1-2@2x.png",
    iconAlt: "Governance illustration",
  },
  {
    id: "04",
    title: "REVIEWS & REPORTS",
    description:
      "Endless email chains. Important documents and updates get buried across threads.",
    cardClassName:
      "absolute top-[660px] left-[772px] w-[576px] h-[147px] shadow-[0px_4px_4px_#00000040]",
    shadowClassName: "",
    titleClassName:
      "absolute top-8 left-[120px] w-[318px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]",
    descriptionClassName:
      "absolute top-[74px] left-[120px] w-[408px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0000009e] text-lg tracking-[0] leading-[normal]",
    iconWrapperClassName: "absolute top-[701px] left-[797px] w-[75px] h-[68px]",
    iconCircleClassName:
      "absolute top-0 left-[3px] w-[68px] h-[68px] bg-[#ffe4edc4] rounded-[34px]",
    iconClassName: "absolute top-px left-0 w-[75px] h-[65px] aspect-[1.15]",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/screenshot-2026-04-29-203629-removebg-preview-1-3@2x.png",
    iconAlt: "Reviews and reports illustration",
  },
  {
    id: "05",
    title: "KNOWLEDGE",
    description: (
      <>
        Knowledge trapped in heads
        <br /> Critical info isn&apos;t documented or shared.
      </>
    ),
    cardClassName:
      "absolute top-[840px] left-[772px] w-[576px] h-[147px] shadow-[0px_4px_4px_#00000040]",
    shadowClassName: "",
    titleClassName:
      "absolute top-8 left-[120px] w-[295px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal]",
    descriptionClassName:
      "absolute top-[74px] left-[120px] w-[432px] [font-family:'DM_Sans',Helvetica] font-medium text-[#0000009e] text-lg tracking-[0] leading-[normal]",
    iconWrapperClassName: "absolute top-[877px] left-[793px] w-[75px] h-[71px]",
    iconCircleClassName:
      "top-[3px] left-[7px] absolute w-[68px] h-[68px] bg-[#ffe4edc4] rounded-[34px]",
    iconClassName: "absolute top-0 left-0 w-[75px] h-[65px] aspect-[1.15]",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/screenshot-2026-04-29-203629-removebg-preview-1-4@2x.png",
    iconAlt: "Knowledge illustration",
  },
];

export const ChallengesChecklistSection = () => {
  return (
    <section
      className="absolute top-[1113px] left-0 w-[1440px] h-[1087px] bg-white shadow-[0px_4px_4px_#167cb2]"
      aria-labelledby="challenges-checklist-heading"
    >
      <div className="absolute top-[69px] left-[94px] w-[181px] h-[34px] flex gap-[5px]">
        <img
          className="w-[31px] h-6 aspect-[1]"
          alt=""
          aria-hidden="true"
          src="https://c.animaapp.com/J1nhJHDS/img/weui-report-problem-filled.svg"
        />
        <div className="w-[143px] h-[34px] [font-family:'DM_Sans',Helvetica] font-semibold text-black text-xl text-center tracking-[0] leading-[normal]">
          THE PROBLEM
        </div>
      </div>
      <header className="absolute top-[122px] left-[94px] w-[543px] h-[147px]">
        <p
          id="challenges-checklist-heading"
          className="absolute top-0 left-0 w-[539px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#263238] text-[50px] tracking-[0] leading-[normal]"
        >
          Does any of this sound
        </p>
        <h2 className="absolute top-16 left-0 w-[391px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#263238] text-[55px] tracking-[0] leading-[normal]">
          Familiar?
        </h2>
      </header>
      <p className="absolute top-72 left-[94px] w-[539px] [font-family:'DM_Sans',Helvetica] font-normal text-[#4e4c4c] text-2xl tracking-[0] leading-[normal]">
        Most cooperatives are juggling spreadsheets, paper forms, email chains,
        and disconnected tools. There&apos;s a better way.
      </p>
      <img
        className="absolute w-[542px] h-[537px] top-[436px] left-[105px]"
        alt="Illustration of a person looking overwhelmed by large question marks"
        src="https://c.animaapp.com/J1nhJHDS/img/questions-pana.png"
      />
      <div
        className="absolute inset-0"
        role="list"
        aria-label="Common cooperative challenges"
      >
        {challengeCards.map((card) => (
          <article key={card.id} className={card.cardClassName} role="listitem">
            <div
              className={`absolute top-0 left-0 w-[572px] h-[147px] bg-white rounded-[20px] border-2 border-solid border-[#dddddd] ${card.shadowClassName}`}
            />
            {card.extraShape || null}
            <div className={card.titleClassName}>
              {card.id} — {card.title}
            </div>
            <p className={card.descriptionClassName}>{card.description}</p>
          </article>
        ))}

        {challengeCards.map((card) => (
          <div key={`${card.id}-icon`} className={card.iconWrapperClassName}>
            <div className={card.iconCircleClassName} />
            <img
              className={card.iconClassName}
              alt={card.iconAlt}
              src={card.iconSrc}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
