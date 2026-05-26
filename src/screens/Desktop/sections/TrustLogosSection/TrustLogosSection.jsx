const blogCards = [
  {
    id: 1,
    bgClass: "bg-[#fff7d2]",
    imageSrc: "https://c.animaapp.com/J1nhJHDS/img/images--2--1@2x.png",
    imageAlt: "Illustration for Why Cooperatives Need to Go Digital",
    title: "Why Cooperatives Need to Go Digital",
    cardClassName: "absolute top-0 left-0 w-[275px] h-[327px] rounded-[20px]",
    imageClassName:
      "absolute top-3 left-[15px] w-[247px] h-[185px] aspect-[1.34] object-cover",
    titleClassName:
      "absolute top-[223px] left-[19px] w-[238px] [font-family:'Alike',Helvetica] font-normal text-[#310000] text-2xl text-center tracking-[0] leading-[normal]",
  },
  {
    id: 2,
    bgClass: "bg-[#f5e2ff]",
    imageSrc: "https://c.animaapp.com/J1nhJHDS/img/images--2--2@2x.png",
    imageAlt: "Illustration for From Paper to Platform",
    title: "From Paper to Platform",
    cardClassName:
      "absolute top-0 left-[318px] w-[275px] h-[327px] rounded-[20px]",
    imageClassName:
      "absolute top-3 left-[334px] w-[247px] h-[185px] aspect-[1.34] object-cover",
    titleClassName:
      "absolute top-[231px] left-[344px] w-[238px] [font-family:'Alike',Helvetica] font-normal text-[#310000] text-2xl text-center tracking-[0] leading-[normal]",
  },
  {
    id: 3,
    bgClass: "bg-[#c7ffc4bf]",
    imageSrc: "https://c.animaapp.com/J1nhJHDS/img/images--2--3@2x.png",
    imageAlt: "Illustration for Simplifying Governance in Cooperatives",
    title: "Simplifying Governance in Cooperatives",
    cardClassName:
      "absolute top-0 left-[636px] w-[275px] h-[327px] rounded-[20px]",
    imageClassName:
      "absolute top-3 left-[650px] w-[247px] h-[185px] aspect-[1.34] object-cover",
    titleClassName:
      "absolute top-[231px] left-[654px] w-[247px] [font-family:'Alike',Helvetica] font-normal text-[#310000] text-[22px] text-center tracking-[0] leading-[normal]",
  },
  {
    id: 4,
    bgClass: "bg-[#cbdbff]",
    imageSrc: "https://c.animaapp.com/J1nhJHDS/img/images--2--4@2x.png",
    imageAlt: "Illustration for Audit Without the Stress",
    title: "Audit Without the Stress",
    cardClassName:
      "absolute top-0 left-[954px] w-[275px] h-[327px] rounded-[20px]",
    imageClassName:
      "absolute top-3 left-[967px] w-[247px] h-[185px] aspect-[1.34] object-cover",
    titleClassName:
      "absolute top-[227px] left-[979px] w-[238px] [font-family:'Alike',Helvetica] font-normal text-[#310000] text-2xl text-center tracking-[0] leading-[normal]",
  },
];

const ctaButtons = [
  {
    id: "get-started",
    label: "Get Started",
    wrapperClassName: "w-[213px] h-[74px] flex items-center justify-end",
    innerClassName: "h-[73.82px] mr-[-2.0px] w-[215.03px] relative",
    boxClassName:
      "absolute top-[calc(50.00%_-_37px)] right-0.5 w-[213px] h-[74px] bg-white border-2 rounded-[15px] transition-all duration-300 hover:bg-[#f7dce7] hover:scale-105",
    textClassName:
      "absolute top-[calc(50.00%_-_14px)] right-[18px] w-[180px] [font-family:'Sora',Helvetica] font-semibold text-black text-xl text-center tracking-[0] leading-[normal]",
  },
  {
    id: "book-demo",
    label: "Book a Demo",
    wrapperClassName: "w-48 h-[74px] flex items-center justify-end",
    innerClassName: "h-[73.82px] mr-[-2.0px] w-[194.07px] relative",
    boxClassName:
      "absolute top-[calc(50.00%_-_37px)] right-0.5 w-48 h-[74px] border-2 border-solid border-white rounded-[15px]",
    textClassName:
      "absolute top-[calc(50.00%_-_14px)] right-2 w-[162px] [font-family:'Sora',Helvetica] font-semibold text-white text-xl tracking-[0] leading-[normal]",
  },
];

export const TrustLogosSection = () => {
  return (
    <section
      aria-label="Blog and call to action"
      className="absolute top-[8537px] left-0 w-full h-[1247px]"
    >
      <div className="absolute top-0 left-0 w-full h-[1247px] bg-white">
        <header>
          <div className="absolute h-[3.74%] top-[4.80%] left-[calc(50.00%_-_198px)] w-[395px] [font-family:'DM_Sans',Helvetica] font-semibold text-[#000800] text-2xl text-center tracking-[0] leading-[normal]">
            Blog
          </div>
          <div className="absolute top-[87px] left-[calc(50.00%_-_119px)] w-[251px] h-[75px]">
            <h2 className="absolute top-0 left-[calc(50.00%_-_18px)] w-[139px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-[50px] text-center tracking-[0] leading-[normal]">
              next
            </h2>
            <div className="absolute top-0.5 left-0 w-[135px] [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica] font-normal text-black text-[55px] tracking-[0] leading-[normal]">
              Read
            </div>
          </div>
        </header>
        <div
          aria-label="Blog articles"
          className="absolute top-[233px] left-1/2 -translate-x-1/2 w-[95%] max-w-[1229px] h-[327px]"
        >
          {blogCards.map((card) => (
            <article key={card.id}>
              <div className={`${card.cardClassName} ${card.bgClass}`} />
              <img
                className={card.imageClassName}
                alt={card.imageAlt}
                src={card.imageSrc}
              />
              <h3 className={card.titleClassName}>{card.title}</h3>
            </article>
          ))}
        </div>
        <button
          type="button"
          aria-label="Previous blog articles"
          className="absolute top-[369px] left-[26px] w-[55px] h-14 bg-black rounded-[27.5px/28px] flex items-center justify-center"
        >
          <img
            className="w-[25px] h-[27px]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/J1nhJHDS/img/vector-4.svg"
          />
        </button>
        <button
          type="button"
          aria-label="Next blog articles"
          className="absolute top-[369px] left-[1360px] w-[55px] h-14 bg-black rounded-[27.5px/28px] flex items-center justify-center"
        >
          <img
            className="w-[25px] h-[27px]"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/J1nhJHDS/img/vector-3.svg"
          />
        </button>
        <div className="absolute top-[calc(50.00%_-_2px)] right-[580px] w-[279px] h-[79px]">
          <button
            type="button"
            className="relative w-full h-full"
            aria-label="Read all blog posts"
          >
            <div className="absolute top-[calc(50.00%_-_40px)] right-[23px] w-64 h-[79px] rounded-[15px] border-[3px] border-solid border-black bg-[linear-gradient(90deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)]" />
            <span className="absolute top-[calc(50.00%_-_18px)] right-[3px] w-56 [-webkit-text-stroke:1px_#ffffff] [font-family:'Sora',Helvetica] font-light text-white text-[32px] whitespace-nowrap tracking-[0] leading-[normal]">
              Read All →
            </span>
          </button>
        </div>
      </div>
      <section
  aria-label="Product call to action"
  className="absolute top-[765px] left-0 w-full h-[482px] overflow-hidden"
>
  <div className="absolute inset-0 w-full h-full bg-[#9c003e]" />

  <img
    className="absolute top-[-7px] left-[20px] w-[600px] h-[500px] object-contain"
    alt="Product dashboard screenshot"
    src="https://c.animaapp.com/J1nhJHDS/img/screenshot-2026-04-23-003449-1.png"
  />

  <p
    className="
absolute
top-[100px]
left-[750px]
w-[620px]
[font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica]
font-normal
text-white
text-[45px]
text-center
tracking-[0]
leading-[50px]
"
  >
    The operating system for modern cooperatives.
  </p>

  <div
    className="
absolute
top-[299.27px]
left-[821px]
flex
gap-[15px]
"
  >
    {ctaButtons.map((button) => (
      <button
        key={button.id}
        type="button"
        aria-label={button.label}
        className={`${button.wrapperClassName} transition duration-300 hover:scale-105`}
      >
        <div className={button.innerClassName}>
          <div
            className={`${button.boxClassName} transition duration-300 hover:brightness-110`}
          />

          <span className={button.textClassName}>
            {button.label}
          </span>
        </div>
      </button>
    ))}
  </div>
      </section>
    </section>
  );
};
