const workflowSteps = [
  {
    id: "member-joins",
    label: "Member Joins",
    labelClassName:
      "absolute w-[17.92%] h-[23.29%] top-[76.71%] left-0 [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-black text-[32px] text-center tracking-[0] leading-[normal]",
    visual: (
      <img
        className="absolute w-[95.54%] top-0 left-[4.46%] h-[109px] aspect-[1.06]"
        alt="Member joins illustration"
        src="https://c.animaapp.com/J1nhJHDS/img/images--1--removebg-preview--3--2-1@2x.png"
      />
    ),
  },
  {
    id: "track",
    label: "Track",
    labelClassName:
      "absolute w-[16.58%] h-[23.29%] top-[76.54%] left-[27.58%] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-black text-center text-[32px] tracking-[0] leading-[normal]",
    visual: (
      <div
        className="absolute w-[7.14%] top-0 left-[31.64%] h-[91px] bg-[url(https://c.animaapp.com/J1nhJHDS/img/images-removebg-preview--6--1-1@2x.png)] bg-cover bg-[50%_50%] aspect-[1]"
        aria-hidden="true"
      />
    ),
  },
  {
    id: "manage",
    label: "Manage",
    labelClassName:
      "absolute w-[13.83%] h-[23.29%] top-[76.54%] left-[56.64%] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-black text-center leading-[normal] text-[32px] tracking-[0]",
    visual: (
      <img
        className="absolute w-[40.70%] top-[7px] left-[59.30%] h-[93px] aspect-[1] object-cover"
        alt="Manage illustration"
        src="https://c.animaapp.com/J1nhJHDS/img/images--1--removebg-preview--4--1-1@2x.png"
      />
    ),
  },
  {
    id: "decide",
    label: "Decide",
    labelClassName:
      "absolute w-[13.83%] h-[23.29%] top-[76.54%] left-[86.17%] [font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-black text-[32px] text-center tracking-[0] leading-[normal]",
    visual: (
      <img
        className="absolute w-[10.78%] top-[13px] left-[89.22%] h-[78px] aspect-[1] object-cover"
        alt="Decide illustration"
        src="https://c.animaapp.com/J1nhJHDS/img/4104800-1-1@2x.png"
      />
    ),
  },
];

const arrows = [
  {
    id: "arrow-1",
    className: "absolute w-[85.31%] left-[14.69%] h-[72.11%] top-[27.89%]",
  },
  {
    id: "arrow-2",
    className: "absolute w-[58.36%] left-[41.64%] h-[72.11%] top-[27.89%]",
  },
  {
    id: "arrow-3",
    className: "absolute w-[29.53%] left-[70.47%] h-[72.11%] top-[27.89%]",
  },
];

export const OperationsOverviewSection = () => {
  return (
    <section
      className="absolute top-[3706px] left-0 w-[1440px] h-[682px] bg-[#fcffdf]"
      aria-labelledby="operations-overview-title"
    >
      <header>
        <h2
          id="operations-overview-title"
          className="absolute top-[50px] left-[calc(50.00%_-_314px)] w-[628px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-[50px] text-center tracking-[0] leading-[normal]"
        >
          <span className="[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-[50px] tracking-[0]">
            Everything works together in{" "}
          </span>
          <span className="text-[55px]">one system</span>
        </h2>
        <p className="absolute top-[212px] left-[321px] w-[798px] [font-family:'DM_Sans',Helvetica] font-normal text-[#4e4c4c] text-[32px] text-center tracking-[0] leading-[normal]">
          From onboarding to daily operations — everything stays connected and
          up to date.
        </p>
      </header>
      <div
        className="absolute top-[377px] left-20 w-[1280px] h-[167px]"
        role="list"
        aria-label="Operations workflow overview"
      >
        {workflowSteps.map((step) => (
          <div key={step.id} role="listitem">
            {step.visual}
            <div className={step.labelClassName}>{step.label}</div>
          </div>
        ))}

        {arrows.map((arrow) => (
          <img
            key={arrow.id}
            className={arrow.className}
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/J1nhJHDS/img/arrow-3.svg"
          />
        ))}
      </div>
    </section>
  );
};
