const workflowSteps = [
  {
    id: 1,
    cardColor: "bg-[#c8ffd67d] border-[#80bf91]",
    title: "Member Joins",
    description: "Digital signup. No paperwork. Done in minutes.",
  },
  {
    id: 2,
    cardColor: "bg-[#fff0aa54] border-[#dcd100]",
    title: "Admin Approves",
    description: "One-click approval. Instantly added to records.",
  },
  {
    id: 3,
    cardColor: "bg-[#90caf92b] border-[#167cb2]",
    title: "Shares Tracked",
    description: "All transactions logged. Real-time portfolio view.",
  },
  {
    id: 4,
    cardColor: "bg-[#ffc8c9] border-[#804d61]",
    title: "Audit Verified",
    description: "Auto reports. Secure docs. No emails, no paper.",
  },
];

export const WorkflowStepsSection = () => {
  return (
    <section
      aria-labelledby="workflow-steps-heading"
      className="w-full bg-white py-16 px-6"
    >
      <header className="text-center mb-14">
        <p className="font-semibold text-[#023600] text-2xl [font-family:'DM_Sans',Helvetica] mb-3">
          How it works
        </p>
        <h2
          id="workflow-steps-heading"
          className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-black text-5xl leading-tight"
        >
          From sign up to audit - one{" "}
          <span className="[font-family:'PT_Serif',Helvetica] font-bold italic text-[#087d02]">
            seamless flow
          </span>
        </h2>
      </header>

      <ol className="m-0 p-0 list-none flex flex-col md:flex-row items-start justify-center gap-8 max-w-6xl mx-auto">
        {workflowSteps.map((step) => (
          <li
            key={step.id}
            className="flex-1 flex flex-col items-center text-center"
          >
            <div
              className={`w-[109px] h-[109px] rounded-[20px] border-[3px] border-solid ${step.cardColor} mb-6`}
              aria-hidden="true"
            />
            <span className="inline-flex items-center justify-center w-7 h-6 bg-[#08b200] rounded-full text-white text-sm font-semibold [font-family:'DM_Sans',Helvetica] mb-4">
              {step.id}
            </span>
            <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-extrabold text-black text-2xl mb-2">
              {step.title}
            </h3>
            <p className="[font-family:'DM_Sans',Helvetica] font-medium text-[#455a64] text-lg leading-snug max-w-[220px]">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
