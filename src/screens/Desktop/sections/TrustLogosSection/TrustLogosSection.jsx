import { useState } from "react";
const blogCards = [
  {
    id: 1,
    bgClass: "bg-[#fff7d2]",
    imageSrc: "https://c.animaapp.com/J1nhJHDS/img/images--2--1@2x.png",
    imageAlt: "Illustration for Why Cooperatives Need to Go Digital",
    title: "Why Cooperatives Need to Go Digital",
    cardClassName:
"relative w-full h-full rounded-[20px]",

imageClassName:
"absolute top-3 left-1/2 -translate-x-1/2 w-[247px] h-[185px] object-cover",

titleClassName:
"absolute top-[223px] left-1/2 -translate-x-1/2 w-[238px] text-center [font-family:'Alike',Helvetica] font-normal text-[#310000] text-2xl"
  },
  {
    id: 2,
    bgClass: "bg-[#f5e2ff]",
    imageSrc: "https://c.animaapp.com/J1nhJHDS/img/images--2--2@2x.png",
    imageAlt: "Illustration for From Paper to Platform",
    title: "From Paper to Platform",
    cardClassName:
"relative w-full h-full rounded-[20px]",

imageClassName:
"absolute top-3 left-1/2 -translate-x-1/2 w-[247px] h-[185px] object-cover",

titleClassName:
"absolute top-[223px] left-1/2 -translate-x-1/2 w-[238px] text-center [font-family:'Alike',Helvetica] font-normal text-[#310000] text-2xl"
  },
  {
    id: 3,
    bgClass: "bg-[#c7ffc4bf]",
    imageSrc: "https://c.animaapp.com/J1nhJHDS/img/images--2--3@2x.png",
    imageAlt: "Illustration for Simplifying Governance in Cooperatives",
    title: "Simplifying Governance in Cooperatives",
    cardClassName:
"relative w-full h-full rounded-[20px]",

imageClassName:
"absolute top-3 left-1/2 -translate-x-1/2 w-[247px] h-[185px] object-cover",

titleClassName:
"absolute top-[223px] left-1/2 -translate-x-1/2 w-[238px] text-center [font-family:'Alike',Helvetica] font-normal text-[#310000] text-2xl"
  },
  {
    id: 4,
    bgClass: "bg-[#cbdbff]",
    imageSrc: "https://c.animaapp.com/J1nhJHDS/img/images--2--4@2x.png",
    imageAlt: "Illustration for Audit Without the Stress",
    title: "Audit Without the Stress",
    cardClassName:
"relative w-full h-full rounded-[20px]",

imageClassName:
"absolute top-3 left-1/2 -translate-x-1/2 w-[247px] h-[185px] object-cover",

titleClassName:
"absolute top-[223px] left-1/2 -translate-x-1/2 w-[238px] text-center [font-family:'Alike',Helvetica] font-normal text-[#310000] text-2xl"
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
  const [cards, setCards] = useState(blogCards);
const [animating, setAnimating] = useState(false);

  const nextSlide = () => {
  if (animating) return;

  setAnimating(true);

  setTimeout(() => {
    setCards((prev) => [
      ...prev.slice(1),
      prev[0],
    ]);

    setAnimating(false);

  }, 300);
};

  const prevSlide = () => {
  if (animating) return;

  setAnimating(true);

  setTimeout(() => {
    setCards((prev) => [
      prev[prev.length - 1],
      ...prev.slice(0, -1),
    ]);

    setAnimating(false);

  }, 300);
};

  return (
    <section
      aria-label="Blog and call to action"
      className="absolute top-[8537px] left-0 w-full h-[1247px]"
    >
      <div className="absolute top-0 left-0 w-full h-[1247px] bg-white">

        {/* HEADER */}

        <header>
          <div className="absolute h-[3.74%] top-[4.80%] left-[calc(50%-198px)] w-[395px] text-2xl text-center font-semibold">
            Blog
          </div>

          <div className="absolute top-[87px] left-1/2 -translate-x-1/2">
            <h2 className="text-[55px] font-normal">
              Read next
            </h2>
          </div>
        </header>

        {/* CARDS */}

        <div
          className="
absolute
top-[220px]

left-1/2
-translate-x-1/2

w-[95%]
max-w-[1229px]

flex
flex-nowrap
justify-center
gap-6

overflow-visible
pt-6

transition-all
duration-700
ease-in-out
"
        >
          {cards.map((card) => (
            <article
              key={card.id}
              className="
              relative
              w-[275px]
              h-[327px]
              transform-gpu

              transition-all
              duration-700
              ease-in-out

              hover:scale-105
              hover:-translate-y-3
              hover:shadow-2xl
              cursor-pointer
            "
            >
              <div
                className={`${card.cardClassName} ${card.bgClass}`}
              />

              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                className={card.imageClassName}
              />

              <h3 className={card.titleClassName}>
                {card.title}
              </h3>
            </article>
          ))}
        </div>

        {/* LEFT */}

        <button
          onClick={prevSlide}
          className="
          absolute
          top-[369px]
          left-[26px]

          w-[55px]
          h-[55px]

          rounded-full
          bg-black

          flex
          items-center
          justify-center

          transition
          duration-300

          hover:bg-[#9c003e]
          hover:scale-110
        "
        >
          <img
            className="w-6"
            src="https://c.animaapp.com/J1nhJHDS/img/vector-4.svg"
          />
        </button>

        {/* RIGHT */}

        <button
          onClick={nextSlide}
          className="
          absolute
          top-[369px]
          right-[26px]

          w-[55px]
          h-[55px]

          rounded-full
          bg-black

          flex
          items-center
          justify-center

          transition
          duration-300

          hover:bg-[#9c003e]
          hover:scale-110
        "
        >
          <img
            className="w-6"
            src="https://c.animaapp.com/J1nhJHDS/img/vector-3.svg"
          />
        </button>

        {/* READ ALL */}

        <div className="absolute top-[622px] left-1/2 -translate-x-1/2">

          <button
            className="
            px-16
            py-5

            rounded-[15px]

            bg-black
            text-white

            text-[32px]

            transition-all
            duration-300

            hover:bg-[#9c003e]
            hover:scale-105
          "
          >
            Read All →
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
