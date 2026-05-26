const useCases = [
  {
    number: "01",
    title: "Resume Building & Interview Preparation",
    description:
      "Fast digital onboarding, no paperwork. Clear records from day one.",
    numberClassName:
      "w-[26.69%] h-[26.20%] top-[11.77%] left-0 [font-family:'DM_Sans',Helvetica] font-semibold text-[#c4c4c494] text-8xl absolute text-center tracking-[0] leading-[normal]",
    titleClassName:
      "absolute w-[63.28%] h-[22.06%] top-[5.97%] left-[30.65%] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[normal]",
    descriptionClassName:
      "absolute w-[63.28%] h-[11.94%] top-[32.01%] left-[31.92%] [font-family:'DM_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]",
  },
  {
    number: "02",
    title: "Share Management",
    description:
      "Track shares and approvals in one place.\n Accurate records, real-time visibility",
    containerClassName: "absolute w-[95.90%] h-[27.69%] top-[63.02%] left-0",
    numberClassName:
      "w-[27.84%] h-[94.61%] top-0 left-0 [font-family:'DM_Sans',Helvetica] font-semibold text-[#c4c4c494] text-8xl absolute text-center tracking-[0] leading-[normal]",
    titleClassName:
      "absolute w-[65.98%] h-[40.72%] top-[16.17%] left-[33.14%] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-4xl tracking-[0] leading-[normal]",
    descriptionClassName:
      "absolute w-[65.98%] h-[43.11%] top-[56.89%] left-[33.14%] [font-family:'DM_Sans',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]",
  },
];

const dividerLines = [
  {
    className: "absolute w-[99.86%] h-[100.33%] top-0 left-0",
    alt: "Line divider",
  },
  {
    className: "absolute w-[99.86%] h-[100.33%] top-0 left-0",
    alt: "Line divider",
  },
  {
    className: "absolute w-full h-[49.09%] top-[50.91%] left-0",
    alt: "Line divider",
  },
  {
    className: "absolute w-full h-0 top-[99.67%] left-0",
    alt: "Line divider",
  },
];

export const ConversionCallToActionSection = () => {
  return (
    <section
      aria-labelledby="conversion-call-to-action-heading"
      className="absolute top-[7637px] left-0 w-[1442px] h-[924px] bg-white"
    >
      <h2
        id="conversion-call-to-action-heading"
        className="absolute top-[41px] left-[calc(50.00%_-_398px)] w-[797px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-[50px] text-center tracking-[0] leading-[normal]"
      >
        How cooperatives use CoopPilot
      </h2>
      <div className="absolute top-[246px] left-[687px] w-[708px] h-[603px]">
        <div className={useCases[0].numberClassName} aria-hidden="true">
          {useCases[0].number}
        </div>
        <h3 className={useCases[0].titleClassName}>
          <br />
          {useCases[0].title}
        </h3>
        <p className={useCases[0].descriptionClassName}>
          {useCases[0].description}
        </p>
        <div className={useCases[1].containerClassName}>
          <div className={useCases[1].numberClassName} aria-hidden="true">
            {useCases[1].number}
          </div>
          <h3 className={useCases[1].titleClassName}>{useCases[1].title}</h3>
          <p className={useCases[1].descriptionClassName}>
            {useCases[1].description.split("\n").map((line, index) => (
              <span key={`${useCases[1].number}-line-${index}`}>
                {line}
                {index < useCases[1].description.split("\n").length - 1 && (
                  <br />
                )}
              </span>
            ))}
          </p>
        </div>
        {dividerLines.map((line, index) => (
          <img
            key={`divider-line-${index}`}
            className={line.className}
            alt={line.alt}
            src="https://c.animaapp.com/J1nhJHDS/img/line-15.svg"
          />
        ))}
      </div>
      <img
        className="absolute w-[508px] h-[392px] top-[457px] left-[110px]"
        alt="Illustration showing cooperative analytics and management"
        src="https://c.animaapp.com/J1nhJHDS/img/charts-bro.png"
      />
    </section>
  );
};
