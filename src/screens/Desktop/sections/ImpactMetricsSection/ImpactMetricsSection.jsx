const metrics = [
  { value: "22000+", label: "Trusted by Companies", widthClass: "w-[221px]" },
  { value: "1M+", label: "Happy Customers", widthClass: "w-[139px]" },
  { value: "$3000", label: "Yearly Revenue", widthClass: "w-[229px]" },
  { value: "10+", label: "Trusted Partners", widthClass: "w-[148px]" },
];

export const ImpactMetricsSection = () => {
  return (
    <section
      aria-label="Impact metrics"
      className="absolute top-[932px] left-0 h-[181px] w-[1440px] bg-[#455a64]"
    >
      <div className="absolute left-[calc(50.00%_-_563px)] top-[63px] flex h-16 w-[1126px] items-center justify-between">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className={`${metric.widthClass} relative h-[103px] mt-[-20.50px] mb-[-18.50px] text-center [font-family:'DM_Sans',Helvetica] text-5xl font-extrabold leading-[normal] tracking-[0] text-white`}
          >
            {metric.value}
          </div>
        ))}
      </div>
      <div className="absolute top-[107px] left-[119px] h-[50px] w-[1249px]">
        <div className="grid grid-cols-4">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`${index === 0 ? "mt-0" : "mt-1"} w-[319px] text-center [font-family:'Alike',Helvetica] text-2xl font-normal leading-[normal] tracking-[0] text-white`}
            >
              {metric.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
