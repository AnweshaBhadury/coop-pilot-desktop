const featureItems = [
  { id: 1, label: "Member Lifecycle Management", marginTop: "mt-0" },
  { id: 2, label: "Share Capital Tracking", marginTop: "mt-[25px]" },
  { id: 3, label: "Governance & Voting", marginTop: "mt-[25px]" },
  { id: 4, label: "Audit-Ready Compliance", marginTop: "mt-[33px]" },
  { id: 5, label: "All documents in one place", marginTop: "mt-[25px]" },
  { id: 6, label: "Integrations & API", marginTop: "mt-[25px]" },
];

export const ProductPreviewSection = () => {
  return (
    <section
      className="absolute top-[4425px] left-0 h-[1148px] w-[1432px] overflow-hidden bg-[#ffffff45]"
      aria-labelledby="product-preview-section-heading"
    >
      <div className="absolute left-[76px] top-[63px] flex h-[34px] w-[145px]">
        <div className="h-[34px] w-[143px] text-center text-xl font-bold tracking-[0] leading-[normal] text-[#001d30b8] [font-family:'DM_Sans',Helvetica]">
          FEATURES
        </div>
      </div>
      <div className="absolute left-[94px] top-[122px] flex h-[59px] w-[767px]">
        <h2
          id="product-preview-section-heading"
          className="h-[59px] w-[765px] whitespace-nowrap text-[50px] font-normal tracking-[0] leading-[normal] text-black [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica]"
        >
          Everything you need to manage
        </h2>
      </div>
      <div className="absolute left-[94px] top-[189px] w-[391px] text-[55px] font-normal tracking-[0] leading-[normal] text-black [font-family:'Abhaya_Libre_SemiBold-Regular',Helvetica]">
        Cooperative
      </div>
      <p className="absolute left-[94px] top-72 w-[798px] text-[32px] font-normal tracking-[0] leading-[normal] text-[#4e4c4c] [font-family:'DM_Sans',Helvetica]">
        One platform, every workflow. No duct tape required.
      </p>
      <div
        className="absolute left-28 top-[408px] h-[677px] w-[594px] rounded-[20px] bg-[#e0e0e0ad]"
        aria-hidden="true"
      />
      <div className="absolute left-[178px] top-[479px] h-[409px] w-[606px]">
        <ul
          className="absolute left-0 top-0 flex h-[404px] w-[604px] flex-col"
          aria-label="Platform features"
        >
          {featureItems.map((item) => (
            <li
              key={item.id}
              className={`flex h-[46px] w-[606px] gap-[23px] ${item.marginTop}`}
            >
              <div
                className="relative h-[41px] w-10 shrink-0"
                aria-hidden="true"
              >
                <div className="absolute left-0 top-[3px] h-[38px] w-[38px] rounded-[19px] bg-[#b6b5b5]" />
                <div className="absolute left-2.5 top-0 w-[25px] text-[32px] font-bold tracking-[0] leading-[normal] text-black [font-family:'DM_Sans',Helvetica]">
                  +
                </div>
              </div>
              <span className="mt-1.5 h-10 w-[541px] text-2xl font-bold tracking-[0] leading-[normal] text-black [font-family:'Plus_Jakarta_Sans',Helvetica]">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <img
        className="absolute left-[-3518px] top-[-2036px] h-[236px] w-[381px] aspect-[1.62]"
        alt=""
        src="https://c.animaapp.com/J1nhJHDS/img/4104800-1-3@2x.png"
        aria-hidden="true"
      />
      <img
        className="absolute left-[calc(50.00%_-_459px)] top-[934px] h-[79px] w-[322px]"
        alt=""
        src="https://c.animaapp.com/J1nhJHDS/img/rectangle-46.svg"
        aria-hidden="true"
      />
      <button
        type="button"
        className="absolute left-[317px] top-[934px] h-[79px] w-[322px] cursor-pointer"
        aria-label="Explore in Details"
      >
        <span className="absolute left-0 top-[24px] block w-full text-center text-2xl font-semibold tracking-[0] leading-[normal] text-white [font-family:'Sora',Helvetica]">
          Explore in Details
        </span>
      </button>
      <img
        className="absolute left-[746px] top-[418px] h-[667px] w-[596px]"
        alt="Illustration representing cooperative platform management"
        src="https://c.animaapp.com/J1nhJHDS/img/enthusiastic-rafiki-1.svg"
      />
    </section>
  );
};
