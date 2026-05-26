import { ChallengesChecklistSection } from "./sections/ChallengesChecklistSection";
import { ConversionCallToActionSection } from "./sections/ConversionCallToActionSection";
import { DashboardMetricsSection } from "./sections/DashboardMetricsSection";
import { FooterNavigationSection } from "./sections/FooterNavigationSection";
import { ImpactMetricsSection } from "./sections/ImpactMetricsSection";
import { OperationsOverviewSection } from "./sections/OperationsOverviewSection";
import { PlatformIntegrationSection } from "./sections/PlatformIntegrationSection";
import { ProductPreviewSection } from "./sections/ProductPreviewSection";
import { RemoteCultureHeroSection } from "./sections/RemoteCultureHeroSection";
import { RemoteStoriesSection } from "./sections/RemoteStoriesSection";
import { SolutionHighlightsSection } from "./sections/SolutionHighlightsSection";
import { TestimonialCalloutSection } from "./sections/TestimonialCalloutSection";
import { TrustLogosSection } from "./sections/TrustLogosSection";
import { WorkflowStepsSection } from "./sections/WorkflowStepsSection";

const navigationItems = [
  { label: "For Cooperatives", hasDropdown: true },
  { label: "For Members", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
  { label: "Blogs", hasDropdown: false },
  { label: "About", hasDropdown: false },
];

const sectionComponents = [
  { key: "remote-culture-hero", Component: RemoteCultureHeroSection },
  { key: "challenges-checklist", Component: ChallengesChecklistSection },
  { key: "product-preview", Component: ProductPreviewSection },
  { key: "testimonial-callout", Component: TestimonialCalloutSection },
  { key: "workflow-steps", Component: WorkflowStepsSection },
  { key: "footer-navigation", Component: FooterNavigationSection },
  { key: "impact-metrics", Component: ImpactMetricsSection },
  { key: "platform-integration", Component: PlatformIntegrationSection },
  { key: "operations-overview", Component: OperationsOverviewSection },
  { key: "solution-highlights", Component: SolutionHighlightsSection },
  { key: "dashboard-metrics", Component: DashboardMetricsSection },
  { key: "remote-stories", Component: RemoteStoriesSection },
  { key: "trust-logos", Component: TrustLogosSection },
  {
    key: "conversion-call-to-action",
    Component: ConversionCallToActionSection,
  },
];

export const Desktop = () => {
  return (
    <main
      className="bg-white overflow-hidden w-full min-w-[1440px] min-h-[10673px] relative"
      data-model-id="93:17"
    >
      <header className="absolute w-full top-0 left-0 h-[90px] bg-white z-50 flex items-center px-8 shadow-sm">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-[54px] w-auto object-contain"
            alt="CoopPilot logo"
            src="https://c.animaapp.com/J1nhJHDS/img/gemini-generated-image-jb79tijb79tijb79-removebg-preview-1@2x.png"
          />
        </div>

        {/* Nav links */}
        <nav aria-label="Primary" className="flex items-center gap-8 ml-10">
          {navigationItems.map((item) =>
            item.hasDropdown ? (
              <button
                key={item.label}
                type="button"
                className="flex items-center gap-1 [font-family:'DM_Sans',Helvetica] font-medium text-[#2a2a2a] text-[18px] leading-normal cursor-pointer whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7d0434]"
                aria-haspopup="menu"
              >
                {item.label}
                <img
                  className="w-5 h-5"
                  alt=""
                  aria-hidden="true"
                  src="https://c.animaapp.com/J1nhJHDS/img/mdi-arrow-down-drop-1.svg"
                />
              </button>
            ) : (
              <a
                key={item.label}
                href="/"
                className="[font-family:'DM_Sans',Helvetica] font-medium text-[#2a2a2a] text-[18px] leading-normal whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7d0434]"
              >
                {item.label}
              </a>
            ),
          )}
        </nav>

        {/* Divider + CTA buttons */}
        <div className="ml-auto flex items-center gap-4">
          <div className="w-px h-9 bg-gray-300" aria-hidden="true" />
          <button
            type="button"
            className="px-6 h-[52px] rounded-[15px] border-[3px] border-[#7d0434] bg-white [font-family:'Sora',Helvetica] font-semibold text-[#7d0434] text-[18px] leading-normal whitespace-nowrap cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7d0434]"
            aria-label="Book a free demo"
          >
            Book a free Demo
          </button>
          <button
            type="button"
            className="px-6 h-[52px] rounded-[15px] bg-[#7d0434] [font-family:'Sora',Helvetica] font-semibold text-white text-[18px] leading-normal whitespace-nowrap cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7d0434]"
            aria-label="Try for free"
          >
            Try for Free
          </button>
        </div>
      </header>
      {sectionComponents.map(({ key, Component }) => (
        <Component key={key} />
      ))}

      <div className="absolute top-[7774px] left-[514px] [font-family:'DM_Sans',Helvetica] font-normal text-[#4e4c4c] text-[32px] tracking-[0] leading-[normal]">
        Real workflows. Real impact.
      </div>
    </main>
  );
};
