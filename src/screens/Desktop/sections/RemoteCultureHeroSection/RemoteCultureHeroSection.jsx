const featureItems = [
  {
    text: "No paperwork",
    widthClass: "w-[150px]",
    textWidthClass: "w-[127px]",
    wrapperClass: "",
  },
  {
    text: "Real-time tracking",
    widthClass: "w-[166px]",
    textWidthClass: "w-[143px]",
    wrapperClass: "mt-px ml-[17px]",
  },
  {
    text: "One unified platform",
    widthClass: "w-[172px]",
    textWidthClass: "w-[149px]",
    wrapperClass: "ml-[18px]",
  },
];

const partnerLogos = {
  src: "https://c.animaapp.com/J1nhJHDS/img/group-76.png",
  alt: "Trusted partner logos",
};

const ctaButtons = [
  {
    type: "button",
    label: "I run a Cooperative",
    iconSrc:
      "https://c.animaapp.com/J1nhJHDS/img/icon-park-outline-cooperative-handshake.svg",
    iconAlt: "",
    wrapperClass: "absolute top-[498px] left-[84px] w-[272px] h-[62px]",
    buttonClass:
      "absolute w-[272px] h-[62px] top-0 left-0 flex items-center justify-end",
    innerClass: "h-[62px] -mr-0.5 w-[274px] relative",
    background: (
      <div className="top-[calc(50.00%_-_31px)] right-[3px] w-[271px] h-[62px] bg-[#fefefe] border-[none] absolute rounded-[15px] before:content-[''] before:absolute before:inset-0 before:p-[3px] before:rounded-[15px] before:[background:linear-gradient(90deg,rgba(0,0,0,1)_11%,rgba(208,208,208,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none" />
    ),
    labelClass:
      "absolute top-[calc(50.00%_-_13px)] right-0.5 w-[220px] [font-family:'Sora',Helvetica] font-semibold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap text-left",
    iconClass: "absolute top-4 left-[17px] w-8 h-8 aspect-[1]",
  },
  {
    type: "button",
    label: "Become a Member",
    iconSrc: "https://c.animaapp.com/J1nhJHDS/img/tdesign-member.svg",
    iconAlt: "",
    wrapperClass:
      "absolute h-[62px] top-[498px] left-[379px] flex items-start min-w-[266px]",
    buttonClass: "w-[266px] flex items-center justify-end",
    innerClass: "h-[62px] -mr-0.5 w-[268px] relative",
    background: (
      <div className="top-[calc(50.00%_-_31px)] right-0.5 w-[266px] h-[62px] bg-black absolute rounded-[15px]" />
    ),
    labelClass:
      "absolute top-[calc(50.00%_-_13px)] right-[17px] w-[197px] [font-family:'Sora',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap text-left",
    iconClass: "absolute top-[17px] left-[21px] w-6 h-6 aspect-[1]",
  },
];

export const RemoteCultureHeroSection = () => {
  return (
    <section
      className="absolute top-28 -left-px w-[1440px] h-[820px]"
      aria-labelledby="remote-culture-hero-heading"
    >
      <div className="absolute top-[-3px] left-0 w-[1440px] h-[811px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]" />
      <div className="absolute top-[52px] left-[76px] w-[646px] h-[142px] flex">
        <h1
          id="remote-culture-hero-heading"
          className="w-[644px] h-[142px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-[#2a2a2a] text-5xl tracking-[0] leading-[normal]"
        >
          22 million people chose cooperative ownership.
          <br />
          We&apos;re building the digital home their cooperatives deserve.
        </h1>
      </div>
      <p className="absolute top-[319px] left-[81px] w-[634px] [font-family:'DM_Sans',Helvetica] font-normal text-[#626262] text-[25px] tracking-[0] leading-[normal]">
        CoopPilot is the complete digital platform for cooperatives —
        <br />
        member management, governance, audits and more.
        <br />
        Everything in one place. Fully compliant.
      </p>
      {ctaButtons.map((button) => (
        <div key={button.label} className={button.wrapperClass}>
          <button
            type={button.type}
            className={button.buttonClass}
            aria-label={button.label}
          >
            <div className={button.innerClass}>
              {button.background}
              <div className={button.labelClass}>{button.label}</div>
              <img
                className={button.iconClass}
                alt={button.iconAlt}
                src={button.iconSrc}
                aria-hidden="true"
              />
            </div>
          </button>
        </div>
      ))}

      <img
        className="absolute top-0 left-[764px] w-[676px] h-[820px] aspect-[1] object-cover"
        alt="People joining hands to represent cooperative ownership"
        src="https://c.animaapp.com/J1nhJHDS/img/221911e521f752260dfa32c2665c7258-1.png"
      />
      <div
        className="absolute top-[651px] left-[109px] w-[354px] [font-family:'DM_Sans',Helvetica] font-normal text-black text-[25px] tracking-[0] leading-[normal]"
        role="heading"
        aria-level={2}
      >
        Our trusted partners →
      </div>
      <img
        className="absolute top-[702px] left-[91px] w-[507px] h-[76px]"
        alt={partnerLogos.alt}
        src={partnerLogos.src}
      />
      <ul className="absolute w-[521px] h-7 top-[599px] left-[101px] flex list-none p-0 m-0">
        {featureItems.map((item) => (
          <li
            key={item.text}
            className={`${item.widthClass} ${item.wrapperClass} flex gap-[5px]`}
          >
            <img
              className="w-4 h-4 aspect-[1]"
              alt=""
              src="https://c.animaapp.com/J1nhJHDS/img/subway-tick-2.svg"
              aria-hidden="true"
            />
            <div
              className={`${item.textWidthClass} h-[27px] [font-family:'DM_Sans',Helvetica] font-medium text-[#35a833] text-[15px] tracking-[0] leading-[normal]`}
            >
              {item.text}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
