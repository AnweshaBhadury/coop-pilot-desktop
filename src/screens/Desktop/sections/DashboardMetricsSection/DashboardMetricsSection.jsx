const problemCards = [
  {
    id: 1,
    number: "1",
    title: "Approvals take time and follow-ups",
    description: "Forms, emails, and back-and-forth delay new member entry.",
    titlePosition: "absolute top-0 left-[333px]",
    descriptionPosition: "absolute top-[68px] left-0",
    badgePosition: "absolute top-[178px] left-[157px]",
    boxPosition: "absolute top-0 left-0",
    boxClass:
      "w-[109px] h-[102px] bg-[#c8ffd67d] rounded-[20px] border-[3px] border-solid border-[#80bf91]",
    textPosition: "absolute top-[377px] left-0",
    text: "Members join through a simple, structured flow in minutes.",
    resultTitle: "",
  },
  {
    id: 2,
    number: "2",
    title: "Approvals take time and follow-ups",
    description: "Manual checks and emails create delays and confusion.",
    titlePosition: "absolute top-0 left-[333px]",
    descriptionPosition: "absolute top-[68px] left-[354px]",
    badgePosition: "absolute top-[179px] left-[509px]",
    boxPosition: "absolute top-0 left-[350px]",
    boxClass:
      "w-[109px] h-[102px] bg-[#fff0aa54] rounded-[20px] border-[3px] border-solid border-[#dcd100]",
    textPosition: "absolute top-[380px] left-[351px]",
    text: "Review and approve requests in one place with a single click.",
    resultTitle: "Instant approvals",
    resultTitlePosition: "absolute top-[326px] left-[360px]",
  },
  {
    id: 3,
    number: "3",
    title: "Tracking shares is error-prone",
    description: "Manual checks and emails create delays and confusion.",
    titlePosition: "absolute top-0.5 left-[673px]",
    descriptionPosition: "absolute top-[69px] left-[686px]",
    badgePosition: "absolute top-[179px] left-[859px]",
    boxPosition: "absolute top-0 left-[700px]",
    boxClass:
      "w-[109px] h-[102px] bg-[#90caf92b] rounded-[20px] border-[3px] border-solid border-[#167cb2]",
    textPosition: "absolute top-[381px] left-[705px]",
    text: "Review and approve requests in one place with a single click.",
    resultTitle: "Real-time tracking",
    resultTitlePosition: "absolute top-[326px] left-[709px]",
  },
  {
    id: 4,
    number: "4",
    title: "Workflows are scattered",
    description: "Manual checks and emails create delays and confusion.",
    titlePosition: "absolute top-0.5 left-[1025px]",
    descriptionPosition: "absolute top-[69px] left-[1049px]",
    badgePosition: "absolute top-[182px] left-[1210px]",
    boxPosition: "absolute top-0 left-[1050px]",
    boxClass:
      "w-[109px] h-[102px] bg-[#ffc8c9] rounded-[20px] border-2 border-solid border-[#804d61]",
    textPosition: "absolute top-[381px] left-[1050px]",
    text: "Review and approve requests in one place with a single click.",
    resultTitle: "One connected system",
    resultTitlePosition: "absolute top-[328px] left-[1042px]",
  },
];

const decorativeImages = [
  {
    className:
      "top-[-1003px] left-[-5818px] absolute w-[60px] h-[60px] aspect-[1] object-cover",
    alt: "Decorative onboarding icon",
    src: "https://c.animaapp.com/J1nhJHDS/img/4104800-1-3@2x.png",
  },
  {
    className:
      "top-[-1018px] left-[-5480px] w-[82px] h-[82px] absolute aspect-[1] object-cover",
    alt: "Decorative onboarding icon",
    src: "https://c.animaapp.com/J1nhJHDS/img/4104800-1-3@2x.png",
  },
  {
    className:
      "top-[-1006px] left-[-5124px] w-[70px] h-[70px] absolute aspect-[1] object-cover",
    alt: "Decorative onboarding icon",
    src: "https://c.animaapp.com/J1nhJHDS/img/4104800-1-3@2x.png",
  },
];

export const DashboardMetricsSection = () => {
  return (
    <section
      aria-labelledby="dashboard-metrics-section-heading"
      className="absolute top-[2074px] left-[1781px] flex h-[1099px] w-[1440px] gap-[2047px] overflow-hidden"
    >
      <div className="relative ml-[-3384px] mt-[437px] h-[470px] w-[1337px]">
        <div
          aria-hidden="true"
          className="absolute top-[185px] left-[66px] h-[102px] w-[1159px]"
        >
          {problemCards.map((card) => (
            <div
              key={card.id}
              className={`${card.boxPosition} ${card.boxClass}`}
            />
          ))}
        </div>
        {decorativeImages.map((image, index) => (
          <img
            key={index}
            className={image.className}
            alt={image.alt}
            src={image.src}
          />
        ))}

        {problemCards.map((card) => (
          <div
            key={`badge-${card.id}`}
            className={`${card.badgePosition} h-[22px] w-[31px]`}
          >
            <div
              className={`absolute top-0 left-1 ${
                card.id === 1
                  ? "h-5 w-[21px] rounded-[10.55px/9.84px]"
                  : card.id === 3
                    ? "h-5 w-[19px] rounded-[9.45px/9.84px]"
                    : "h-[18px] w-[19px] rounded-[9.45px/8.95px]"
              } bg-[#08b200]`}
            />
            <div
              className={`absolute top-0 left-0 text-center [font-family:'DM_Sans',Helvetica] text-sm font-semibold tracking-[0] leading-[normal] text-white ${
                card.id === 1 ? "w-[29px]" : "w-[26px]"
              }`}
            >
              {card.number}
            </div>
          </div>
        ))}

        <h2 id="dashboard-metrics-section-heading" className="sr-only">
          Digital onboarding benefits
        </h2>
        {problemCards.map((card) => (
          <div key={`content-${card.id}`}>
            <p
              className={`${card.titlePosition} w-[284px] text-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-xl font-extrabold tracking-[0] leading-[normal] text-[#c50000]`}
            >
              {card.title}
            </p>
            <p
              className={`${card.descriptionPosition} w-[241px] text-center [font-family:'DM_Sans',Helvetica] text-xl font-medium tracking-[0] leading-[normal] text-[#263238]`}
            >
              {card.description}
            </p>
            {card.resultTitle ? (
              <p
                className={`${card.resultTitlePosition} w-[223px] text-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-xl font-extrabold tracking-[0] leading-[normal] text-[#35a833] ${
                  card.id === 4 ? "w-[250px]" : ""
                }`}
              >
                {card.resultTitle}
              </p>
            ) : null}

            <p
              className={`${card.textPosition} w-[241px] text-center [font-family:'DM_Sans',Helvetica] text-xl font-medium tracking-[0] leading-[normal] text-[#263238]`}
            >
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <div className="relative mt-[396px] h-[703px] w-[1440px]">
        <div
          aria-hidden="true"
          className="absolute top-[47px] left-40 h-[530px] w-[575px] rounded-[20px] bg-[#5fb7ff2b]"
        />
        <div
          aria-hidden="true"
          className="absolute top-[183px] left-[859px] h-[520px] w-[581px] bg-[url(https://c.animaapp.com/J1nhJHDS/img/how-itt-works-.png)] bg-cover bg-[50%_50%]"
        />
        <h3 className="absolute top-[105px] left-[184px] w-[527px] text-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-[40px] font-semibold tracking-[0] leading-[normal] text-black">
          Digital onboarding
        </h3>
        <p className="absolute top-[195px] left-[209px] w-[477px] text-center [font-family:'Plus_Jakarta_Sans',Helvetica] text-[32px] font-medium tracking-[0] leading-[70px] text-black">
          Transform manual onboarding into a streamlined digital process —
          quick, structured, and error-free.
        </p>
      </div>
    </section>
  );
};
