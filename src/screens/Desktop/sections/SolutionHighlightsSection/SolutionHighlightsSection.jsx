const painPoints = [
  {
    id: 1,
    title: "Manual onboarding slows things down",
    titleClassName:
      "absolute top-0 left-0 w-[284px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#c50000] text-xl text-center tracking-[0] leading-[normal]",
    description: "Forms, emails, and back-and-forth delay new member entry.",
    descriptionClassName:
      "absolute top-[73px] left-5 w-[241px] [font-family:'DM_Sans',Helvetica] font-medium text-[#263238] text-xl text-center tracking-[0] leading-[normal]",
    badgeClassName: "top-[183px] left-[177px] absolute w-[31px] h-[22px]",
    badgeBgClassName:
      "absolute top-0 left-1 w-[21px] h-5 bg-[#08b200] rounded-[10.55px/9.84px]",
    badgeTextClassName:
      "top-0 left-0 w-[29px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm absolute text-center tracking-[0] leading-[normal]",
  },
  {
    id: 2,
    title: "Approvals take time and follow-ups",
    titleClassName:
      "absolute top-[5px] left-[353px] w-[284px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#c50000] text-xl text-center tracking-[0] leading-[normal]",
    description: "Manual checks and emails create delays and confusion.",
    descriptionClassName:
      "absolute top-[73px] left-[374px] w-[241px] [font-family:'DM_Sans',Helvetica] font-medium text-[#263238] text-xl text-center tracking-[0] leading-[normal]",
    badgeClassName: "top-[184px] left-[529px] absolute w-7 h-5",
    badgeBgClassName:
      "h-[18px] rounded-[9.45px/8.95px] absolute top-0 left-1 w-[19px] bg-[#08b200]",
    badgeTextClassName:
      "top-0 left-0 w-[26px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm absolute text-center tracking-[0] leading-[normal]",
  },
  {
    id: 3,
    title: "Tracking shares is error-prone",
    titleClassName:
      "absolute top-[7px] left-[693px] w-[284px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#c50000] text-xl text-center tracking-[0] leading-[normal]",
    description: "Manual checks and emails create delays and confusion.",
    descriptionClassName:
      "top-[74px] left-[706px] absolute w-[241px] [font-family:'DM_Sans',Helvetica] font-medium text-[#263238] text-xl text-center tracking-[0] leading-[normal]",
    badgeClassName: "top-[184px] left-[879px] absolute w-7 h-[22px]",
    badgeBgClassName:
      "h-5 rounded-[9.45px/9.84px] absolute top-0 left-1 w-[19px] bg-[#08b200]",
    badgeTextClassName:
      "top-0 left-0 w-[26px] [font-family:'DM_Sans',Helvetica] font-semibold text-white text-sm absolute text-center tracking-[0] leading-[normal]",
  },
  {
    id: 4,
    title: "Workflows are scattered",
    titleClassName:
      "absolute top-[7px] left-[1045px] w-[284px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#c50000] text-xl text-center tracking-[0] leading-[normal]",
    description: "Manual checks and emails create delays and confusion.",
    descriptionClassName:
      "top-[74px] left-[1069px] absolute w-[241px] [font-family:'DM_Sans',Helvetica] font-medium text-[#263238] text-xl text-center tracking-[0] leading-[normal]",
    badgeClassName: "top-[187px] left-[1230px] absolute w-7 h-5",
    badgeBgClassName:
      "h-[18px] rounded-[9.45px/8.95px] absolute top-0 left-1 w-[19px] bg-[#08b200]",
    badgeTextClassName:
      "w-[26px] [font-family:'DM_Sans',Helvetica] text-white text-sm text-center absolute top-0 left-0 font-semibold tracking-[0] leading-[normal]",
  },
];

const solutions = [
  {
    id: 1,
    title: "Digital onboarding",
    titleClassName:
      "absolute top-[331px] left-12 w-[186px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#35a833] text-xl text-center tracking-[0] leading-[normal]",
    description: "Members join through a simple, structured flow in minutes.",
    descriptionClassName:
      "absolute top-[382px] left-5 w-[241px] [font-family:'DM_Sans',Helvetica] font-medium text-[#263238] text-xl text-center tracking-[0] leading-[normal]",
  },
  {
    id: 2,
    title: " Instant approvals",
    titleClassName:
      "absolute top-[331px] left-[380px] w-[223px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#35a833] text-xl text-center tracking-[0] leading-[normal]",
    description:
      "Review and approve requests in one place with a single click.",
    descriptionClassName:
      "absolute top-[385px] left-[371px] w-[241px] [font-family:'DM_Sans',Helvetica] font-medium text-[#263238] text-xl text-center tracking-[0] leading-[normal]",
  },
  {
    id: 3,
    title: "Real-time tracking",
    titleClassName:
      "top-[331px] left-[729px] absolute w-[223px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#35a833] text-xl text-center tracking-[0] leading-[normal]",
    description:
      "Review and approve requests in one place with a single click.",
    descriptionClassName:
      "top-[386px] left-[725px] absolute w-[241px] [font-family:'DM_Sans',Helvetica] font-medium text-[#263238] text-xl text-center tracking-[0] leading-[normal]",
  },
  {
    id: 4,
    title: "One connected system",
    titleClassName:
      "absolute top-[333px] left-[1062px] w-[250px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-[#35a833] text-xl text-center tracking-[0] leading-[normal]",
    description:
      "Review and approve requests in one place with a single click.",
    descriptionClassName:
      "top-[386px] left-[1070px] absolute w-[241px] [font-family:'DM_Sans',Helvetica] font-medium text-[#263238] text-xl text-center tracking-[0] leading-[normal]",
  },
];

const highlightBoxes = [
  "absolute top-0 left-0 w-[109px] h-[102px] bg-[#fff0aa] rounded-[20px] border-[3px] border-solid border-[#dcd100]",
  "absolute top-0 left-[1050px] w-[109px] h-[102px] bg-[#ffc8c9] rounded-[20px] border-2 border-solid border-[#804d61]",
  "absolute top-0 left-0 w-[109px] h-[102px] bg-[#ddf0ff] rounded-[20px] border-[3px] border-solid border-[#0065b7]",
  "absolute top-0 left-0 w-[109px] h-[102px] bg-[#c8ffd67d] rounded-[20px] border-[3px] border-solid border-[#80bf91]",
  "absolute top-0 left-[350px] w-[109px] h-[102px] bg-[#fff0aa54] rounded-[20px] border-[3px] border-solid border-[#dcd100]",
  "absolute top-0 left-[700px] w-[109px] h-[102px] bg-[#90caf92b] rounded-[20px] border-[3px] border-solid border-[#167cb2]",
];

const decorativeImages = [
  {
    className:
      "absolute top-[1073px] left-[-4385px] w-[94px] h-[66px] aspect-[1.43] object-cover",
    alt: "Images removebg",
  },
  {
    className:
      "top-[1076px] left-[-4017px] absolute w-[60px] h-[60px] aspect-[1] object-cover",
    alt: "Images removebg",
  },
  {
    className:
      "top-[1061px] left-[-3679px] w-[82px] h-[82px] absolute aspect-[1] object-cover",
    alt: "Images removebg",
  },
  {
    className:
      "top-[1073px] left-[-3323px] w-[70px] h-[70px] absolute aspect-[1] object-cover",
    alt: "Element",
  },
];

export const SolutionHighlightsSection = () => {
  return (
    <section
      className="absolute top-[1978px] left-[-1603px] w-[1361px] h-[475px]"
      aria-label="Solution highlights"
    >
      <div
        className="absolute top-[190px] left-[86px] w-[1159px] h-[102px]"
        aria-hidden="true"
      >
        {highlightBoxes.map((className, index) => (
          <div key={index} className={className} />
        ))}
      </div>
      {decorativeImages.map((image, index) => (
        <img
          key={index}
          className={image.className}
          alt={image.alt}
          src="https://c.animaapp.com/J1nhJHDS/img/4104800-1-3@2x.png"
          aria-hidden="true"
        />
      ))}

      {painPoints.map((item) => (
        <div key={`pain-${item.id}`}>
          <div className={item.badgeClassName} aria-hidden="true">
            <div className={item.badgeBgClassName} />
            <div className={item.badgeTextClassName}>{item.id}</div>
          </div>
          <p className={item.titleClassName}>{item.title}</p>
          <p className={item.descriptionClassName}>{item.description}</p>
        </div>
      ))}

      {solutions.map((item) => (
        <div key={`solution-${item.id}`}>
          <div className={item.titleClassName}>{item.title}</div>
          <p className={item.descriptionClassName}>{item.description}</p>
        </div>
      ))}
    </section>
  );
};
