import React from "react";
import { useNavigate } from "react-router-dom";
const UidPatterns = [
  {
    title: "Getting input",
    subtitle: [
      {
        title: "Forms",
        content: [
          "Password Strength Meter",
          "Expandable Input",
          "Settings",
          "Structured Format",
          "Rule Builder",
          "Keyboard Shortcuts",
          "Captcha",
          "Inplace Editor",
          "Preview",
          "Undo",
          "Good Defaults",
          "Input Prompt",
          "Drag and drop",
          "Fill in the Blanks",
          "Input Feedback",
          "WYSIWYG",
          "Calendar Picker",
          "Autosave",
          "Morphing Controls",
          "Forgiving Format",
        ],
      },
      {
        title: "Explaining the process",
        content: [
          "Wizard",
          "Completeness meter",
          "Inline Help Box",
          "Steps Left",
        ],
      },
      {
        title: "Community driven",
        content: [
          "Rate Content",
          "Wiki",
          "Vote To Promote",
          "Flagging & Reporting",
          "Pay To Promote",
        ],
      },
    ],
  },
  {
    title: "Navigation",
    subtitle: [
      {
        title: "Tabs",
        content: ["Navigation Tabs", "Module Tabs"],
      },
      {
        title: "Jumping in hierarchy",
        content: [
          "Breadcrumbs",
          "Fat Footer",
          "Shortcut Dropdown",
          "Notifications",
          "Modal",
          "Home Link",
        ],
      },
      {
        title: "Menus",
        content: [
          "Vertical Dropdown Menu",
          "Accordion Menu",
          "Horizontal Dropdown Menu",
        ],
      },
      {
        title: "Content",
        content: [
          "Adaptable View",
          "Article List",
          "Pagination",
          "Cards",
          "Carousel",
          "Progressive Disclosure",
          "Thumbnail",
          "Continuous Scrolling",
          "Archive",
          "Event Calendar",
          "Favorites",
          "Tagging",
          "Categorization",
          "Tag Cloud",
        ],
      },
      {
        title: "Menus",
        content: [
          "Vertical Dropdown Menu",
          "Accordion Menu",
          "Horizontal Dropdown Menu",
        ],
      },
      {
        title: "Gestures",
        content: ["Pull to refresh"],
      },
    ],
  },
  {
    title: "Dealing with data",
    subtitle: [
      {
        title: "Tables",
        content: ["Table Filter", "Alternating Row Colors", "Sort By Column"],
      },
      {
        title: "Formatting data",
        content: ["(FAQ)", "Dashboard", "Copy Box"],
      },
      {
        title: "Images",
        content: ["Gallery", "Slideshow", "Image Zoom"],
      },

      {
        title: "Search",
        content: ["Autocomplete", "Search Filters"],
      },
    ],
  },
  {
    title: "Onboarding",
    subtitle: [
      {
        title: "Guidance",
        content: [
          "Playthrough",
          "Coachmarks",
          "Inline Hints",
          "Guided Tour",
          "Walkthrough",
          "Blank Slate",
        ],
      },
      {
        title: "Registration",
        content: ["Lazy Registration", "Paywall", "Account Registration"],
      },
    ],
  },
  {
    title: "Social",
    subtitle: [
      {
        title: "Reputation",
        content: ["Collectible Achievements", "Testimonials", "Leaderboard"],
      },
      {
        title: "Social interactions",
        content: [
          "Activity Stream",
          "Reaction",
          "Friend",
          "Chat",
          "Follow",
          "Invite friends",
        ],
      },
    ],
  },
  {
    title: "Miscellaneous",
    subtitle: [
      {
        title: "Shopping",
        content: ["Product page", "Coupon", "Shopping Cart", "Pricing table"],
      },
      {
        title: "Increasing frequency",
        content: ["Tip A Friend"],
      },
    ],
  },
];
const UIDPatterns = () => {
  const navigate = useNavigate();
  return (
    <div className="my-[2%] mx-[10%]">
      <div className="text-3xl font-bold text-left my-[2%]">
        User Interface Design Patterns
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 grid-row-1 ">
        {UidPatterns.map((ui) => (
          <div
            className="border-2 shadow-lg  bg-white rounded-[10px] text-left h-fit"
            onClick={() => navigate("/forms")}
          >
            <div className="bg-[#0085F7] text-[#FFFFFF] shadow-md pl-[5%] py-[4%]">
              {ui.title}
            </div>
            <div className="pl-[5%]">
              {ui.subtitle.map((uisub) => (
                <div className="py-[5%]">
                  <div className="py-[3%] font-bold text-xl">{uisub.title}</div>
                  <div>
                    {uisub.content.map((content) => (
                      <button className="py-[1%] block text-[#0085F7] hover:underline underline-offset-1">
                        <div>{content}</div>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UIDPatterns;
