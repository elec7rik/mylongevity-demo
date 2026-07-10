"use client";

import { useState } from "react";
import {
  Menu,
  MessageCircle,
  Search,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import HeroScrollEffect from "./HeroScrollEffect";

const navItems = ["Shop", "Explore", "Support", "Learn"];
const promoItems = [
  "Free UK delivery for orders over £50",
  "365 Day Returns",
  "Buy 3, get 1 free",
];
const primaryNav = [
  {
    label: "Shop",
    href: "#top",
    featured: [
      {
        label: "All Products",
        panel: {
          heading: "Shop",
          copy: "Curated products and thinking for evidence-led daily rituals.",
          columns: [
            ["Daily essentials", "Peptides", "Supplements", "Testing kits"],
            [
              "Longevity stacks",
              "Recovery tools",
              "Travel support",
              "Subscriptions",
            ],
          ],
        },
      },
      {
        label: "New Arrivals",
        panel: {
          heading: "New Arrivals",
          copy: "Fresh launches and just-landed routines to explore first.",
          columns: [
            [
              "Marine collagen sachets",
              "Magnesium sleep duo",
              "Focus adaptogen blend",
              "Hydration tabs",
            ],
            [
              "Ice roller",
              "Mini massage gun",
              "Travel recovery kit",
              "Recovery tracker",
            ],
          ],
        },
      },
      {
        label: "Best Sellers",
        panel: {
          heading: "Best Sellers",
          copy: "Most-loved staples and repeat-order rituals from the community.",
          columns: [
            [
              "Daily electrolytes",
              "Creatine monohydrate",
              "Magnesium glycinate",
              "Recovery protein",
            ],
            [
              "Sleep stack",
              "Hydration toolkit",
              "Joint support",
              "Travel immunity pack",
            ],
          ],
        },
      },
      {
        label: "Bundles",
        panel: {
          heading: "Bundles",
          copy: "Goal-based edits that make it easier to start with a full setup.",
          columns: [
            [
              "Morning ritual",
              "Strength builder",
              "Hydration reset",
              "Travel essentials",
            ],
            [
              "Post-workout stack",
              "Weekend restore",
              "Sleep starter",
              "Healthy home edit",
            ],
          ],
        },
      },
    ],
  },
  {
    label: "Categories",
    href: "#top",
    featured: [
      {
        label: "Recovery",
        panel: {
          heading: "Recovery",
          copy: "Support for repair, soreness, sleep quality, and bouncing back faster.",
          columns: [
            [
              "Deep sleep",
              "Muscle repair",
              "Joint resilience",
              "Inflammation balance",
            ],
            [
              "Recovery tools",
              "Magnesium support",
              "Protein blends",
              "Evening rituals",
            ],
          ],
        },
      },
      {
        label: "Performance",
        panel: {
          heading: "Performance",
          copy: "Daily inputs for energy, output, hydration, and sharper training sessions.",
          columns: [
            [
              "Endurance",
              "Power output",
              "Hydration",
              "Mental drive",
            ],
            [
              "Electrolytes",
              "Creatine",
              "Pre-workout support",
              "Wearables",
            ],
          ],
        },
      },
      {
        label: "Longevity",
        panel: {
          heading: "Longevity",
          copy: "Foundational routines for healthy ageing, resilience, and long-term wellbeing.",
          columns: [
            [
              "Cellular health",
              "Healthy ageing",
              "Metabolic care",
              "Hormonal balance",
            ],
            [
              "Testing kits",
              "Daily essentials",
              "Longevity stacks",
              "Subscriptions",
            ],
          ],
        },
      },
      {
        label: "Cognitive",
        panel: {
          heading: "Cognitive",
          copy: "Sharper focus, calmer stress response, and steadier mood across the day.",
          columns: [
            [
              "Brain focus",
              "Calm energy",
              "Stress balance",
              "Mood support",
            ],
            [
              "Adaptogen blends",
              "Nootropic support",
              "Hydration tabs",
              "Morning rituals",
            ],
          ],
        },
      },
    ],
    columns: [
      ["Cellular health", "Gut support", "Sleep quality", "Hydration"],
      ["Stress balance", "Metabolic care", "Skin health", "Immune support"],
    ],
  },
  {
    label: "Research",
    href: "#curation",
    featured: [
      {
        label: "Metabolic Research",
        panel: {
          heading: "Metabolic Research",
          copy: "Practical reading around energy, glucose balance, appetite, and resilience.",
          columns: [
            [
              "Blood sugar support",
              "Mitochondrial output",
              "Metabolic flexibility",
              "Satiety pathways",
            ],
            [
              "Clinical notes",
              "Ingredient library",
              "Expert reviews",
              "Protocols",
            ],
          ],
        },
      },
      {
        label: "Weight Management",
        panel: {
          heading: "Weight Management",
          copy: "Evidence-led resources on appetite, composition, recovery, and sustainable habits.",
          columns: [
            [
              "Protein pacing",
              "Craving control",
              "Habit architecture",
              "Training recovery",
            ],
            [
              "Founder letters",
              "Lab standards",
              "Community results",
              "Field reports",
            ],
          ],
        },
      },
      {
        label: "Skin & Healing Research",
        panel: {
          heading: "Skin & Healing Research",
          copy: "A closer look at tissue repair, skin health, collagen support, and recovery.",
          columns: [
            [
              "Barrier repair",
              "Collagen turnover",
              "Inflammation balance",
              "Post-training healing",
            ],
            [
              "Case studies",
              "Journal roundups",
              "Practitioner Q&A",
              "Field reports",
            ],
          ],
        },
      },
    ],
    columns: [
      ["Clinical notes", "Ingredient library", "Expert reviews", "Protocols"],
      [
        "Founder letters",
        "Lab standards",
        "Community results",
        "Field reports",
      ],
    ],
  },
  {
    label: "About",
    href: "#promise",
  },
];

const pillars = [
  { title: "STRENGTH", image: "/images/pill-strength.jpg", tone: "sage" },
  { title: "VITALITY", image: "/images/pill-vitality.jpg", tone: "steel" },
  { title: "RECOVERY", image: "/images/orange-bottle.jpg", tone: "honey" },
  { title: "SLEEP", image: "/images/amber-bottle.jpg", tone: "ember" },
];

const bestsellingProducts = [
  {
    name: "NAD+ 1000mg",
    copy: "Flagship cellular energy support for performance and healthy ageing.",
    image: "/images/product-nad.png",
  },
  {
    name: "GLOW",
    copy: "BPC-157, TB-500 and GHK-CU for skin, recovery and repair rituals.",
    image: "/images/product-glow.png",
  },
  {
    name: "PT-141",
    copy: "A focused peptide protocol for vitality, drive and intimate wellbeing.",
    image: "/images/product-pt141.png",
  },
  {
    name: "KLOW",
    copy: "BPC-157, TB-500, GHK-CU and KPV in one all-in recovery stack.",
    image: "/images/product-klow.png",
  },
];

const process = [
  [
    "01.",
    "Discovery",
    "We scan the frontier of human health, then separate evidence from noise.",
  ],
  [
    "02.",
    "Expert Validation",
    "Every claim is pressure tested by practitioners and scientists.",
  ],
  [
    "03.",
    "Community Testing",
    "Products earn their place through real human feedback, not trend velocity.",
  ],
];

const socialLinks = [
  {
    label: "Instagram",
    href: "#",
    icon: "/social/instagram.png",
  },
  {
    label: "TikTok",
    href: "#",
    icon: "/social/tiktok.png",
  },
  {
    label: "YouTube",
    href: "#",
    icon: "/social/youtube.png",
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: "/social/linkedin.png",
  },
  {
    label: "Pinterest",
    href: "#",
    icon: "/social/pinterest.png",
  },
];

function ArrowButton({ label = "Open", symbol = "+" }) {
  return (
    <button className="circle-button" aria-label={label}>
      <span aria-hidden="true">{symbol}</span>
    </button>
  );
}

function SiteHeader() {
  const [activeFeatured, setActiveFeatured] = useState(() =>
    Object.fromEntries(
      primaryNav
        .filter(
          (item) =>
            item.featured &&
            item.featured.length > 0 &&
            typeof item.featured[0] === "object",
        )
        .map((item) => [item.label, item.featured[0].label]),
    ),
  );

  return (
    <header className="site-header">
      <div className="promo-strip" aria-label="Current offers">
        <div>
          {Array.from({ length: 4 }).flatMap((_, repeatIndex) =>
            promoItems.map((item, itemIndex) => (
              <span key={`${repeatIndex}-${itemIndex}`}>
                {item}
                <b aria-hidden="true">•</b>
              </span>
            )),
          )}
        </div>
      </div>
      <nav className="topbar" aria-label="Primary navigation">
        <div className="nav-left">
          <button className="menu-button" aria-label="Open menu">
            <Menu size={24} strokeWidth={1.8} aria-hidden="true" />
          </button>
          <ul className="nav-links">
            {primaryNav.map((item) => {
              const featuredHasPanels =
                item.featured && typeof item.featured[0] === "object";
              const activePanel = featuredHasPanels
                ? (
                    item.featured.find(
                      (entry) => entry.label === activeFeatured[item.label],
                    ) ?? item.featured[0]
                  ).panel
                : null;

              return (
                <li
                  className={item.featured ? "nav-item has-menu" : "nav-item"}
                  key={item.label}
                >
                  <a href={item.href}>{item.label}</a>
                  {item.featured ? (
                    <div className="mega-menu" aria-label={`${item.label} menu`}>
                      <div className="mega-featured">
                        {item.featured.map((entry) =>
                          typeof entry === "string" ? (
                            <a href={item.href} key={entry}>
                              {entry}
                            </a>
                          ) : (
                            <button
                              className={`mega-featured-button${
                                activeFeatured[item.label] === entry.label
                                  ? " is-active"
                                  : ""
                              }`}
                              key={entry.label}
                              onFocus={() =>
                                setActiveFeatured((current) => ({
                                  ...current,
                                  [item.label]: entry.label,
                                }))
                              }
                              onMouseEnter={() =>
                                setActiveFeatured((current) => ({
                                  ...current,
                                  [item.label]: entry.label,
                                }))
                              }
                              type="button"
                            >
                              {entry.label}
                            </button>
                          ),
                        )}
                      </div>
                      <div className="mega-body">
                        <div>
                          <h3>{activePanel?.heading ?? item.label}</h3>
                          <p>
                            {activePanel?.copy ??
                              "Curated products and thinking for evidence-led daily rituals."}
                          </p>
                        </div>
                        <div className="mega-columns">
                          {(activePanel?.columns ?? item.columns).map(
                            (column, columnIndex) => (
                              <div key={`${item.label}-${columnIndex}`}>
                                {column.map((link) => (
                                  <a href={item.href} key={link}>
                                    {link}
                                  </a>
                                ))}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
        <a className="brand" href="#top" aria-label="MyLongevity home">
          MyLongevity.
        </a>
        <div className="nav-actions">
          <label className="search-control" htmlFor="site-search">
            <input
              id="site-search"
              type="search"
              placeholder="Search all products"
            />
            <Search size={24} strokeWidth={1.8} aria-hidden="true" />
          </label>
          <button className="icon-button" type="button" aria-label="Account">
            <UserRound size={24} strokeWidth={1.7} aria-hidden="true" />
          </button>
          <button className="icon-button" type="button" aria-label="Cart">
            <ShoppingBag size={25} strokeWidth={1.7} aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <HeroScrollEffect />
      <SiteHeader />
      <section className="hero-section">
        <div className="hero-media">
          <img
            src="/images/hero-longevity.jpg"
            alt="Surfer lifting a yellow board over a breaking wave"
          />
          <div className="hero-scrims" />
        </div>
        <div className="hero-layer">
          <div className="hero-copy">
            <p>
              Wellness,
              <br />
              Personalized
            </p>
            <h1>Own the rituals that move your health forward.</h1>
            <a href="#top">Explore</a>
          </div>
        </div>
      </section>

      <section className="dark-section pillars-section" id="top">
        <div className="section-heading split">
          <h2>The Essentials</h2>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article
              className={`pillar-card ${pillar.tone}`}
              key={pillar.title}
            >
              <img src={pillar.image} alt="" />
              <div>
                <h3>{pillar.title}</h3>
                <ArrowButton label={`Explore ${pillar.title}`} />
              </div>
            </article>
          ))}
        </div>
        <div className="wellbeing-row">
          {/* <h2>Wellbeing looks different for everyone. We respect that. In fact, we champion it.</h2> */}
          <h2>Because true longevity requires more than just supplements.</h2>
          <div className="brand-list">
            <p>Our Bestsellers</p>
            {bestsellingProducts.map((product) => (
              <article key={product.name}>
                <div className="brand-thumb">
                  <img src={product.image} alt="" />
                </div>
                <div>
                  <h3>{product.name}</h3>
                  <span>{product.copy}</span>
                </div>
                <ArrowButton label={`Open ${product.name}`} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-section process-section" id="curation">
        <div className="process-shell">
          <aside className="process-rail">
            <h2>
              MyLongevity Curation
              <br />
              Process
            </h2>
            {/* <div className="process-words" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, index) => (
                <span key={index}>Process</span>
              ))}
            </div> */}
            <p>
              We are obsessed with what makes it onto the site. Only products
              that survive intense review earn a place here.
            </p>
          </aside>
          <div className="process-stories">
            {process.map(([number, title, copy], index) => (
              <article key={title}>
                <img
                  src={
                    index === 0
                      ? "/images/discovery-molecule.jpg"
                      : index === 1
                        ? "/images/orange-bottle.jpg"
                        : "/images/supplements-flatlay.jpg"
                  }
                  alt=""
                />
                <div>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        {/* <div className="advisors">
          <p>Meet our Advisors</p>
          {[
            "Rose Ferguson",
            "Bryony Deane",
            "Jenny Wilkinson",
            "Dr. Tara Swart",
          ].map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div> */}
        {/* <div className="quote-card">
          <img src="/images/supplements-flatlay.jpg" alt="" />
          <blockquote>
            “I believe food should be celebrated as a source of energy,
            connection, and wellbeing. With My Longevity, let's redefine what it
            means to truly nourish yourself.”
          </blockquote>
        </div> */}
      </section>

      <footer className="footer">
        <div className="footer-logo">MyLongevity.</div>
        <div className="footer-columns">
          <div>
            {navItems.map((item) => (
              <button key={item}>
                {item}
                <span>+</span>
              </button>
            ))}
          </div>
          <form>
            <label htmlFor="email">
              <span>NEWSLETTER</span>
              <strong>Subscribers Get To Know First</strong>
            </label>
            <div>
              <input id="email" type="email" placeholder="Email" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="footer-bottom">
          <div className="footer-socials" aria-label="Social links">
            {socialLinks.map((link) => (
              <a href={link.href} key={link.label} aria-label={link.label}>
                <img src={link.icon} alt="" />
              </a>
            ))}
          </div>
          <p>Copyright © 2026, MyLongevity. All rights reserved.</p>
          <a className="footer-chat" href="#" aria-label="Open chat">
            <MessageCircle size={38} strokeWidth={1.9} aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
