// ============================================================
// BITSOL MARKETING - WhatsApp Bot Flows (Interactive Buttons)
// ============================================================

const flows = {

  // ── MAIN MENU ─────────────────────────────────────────────
  mainMenu: (name) => ({
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: `🚀 *BITSOL MARKETING*\n\nHello ${name}! 👋 I'm *BITSOL Bot*, your Digital Growth Assistant.\n\n_Clicks to Results — Smarter Marketing_ 🚀\n\nHow may I help you today?`
      },
      footer: { text: "🔒 Your privacy is our priority." },
      action: {
        button: "View Options",
        sections: [{
          title: "Main Menu",
          rows: [
            { id: "services",     title: "🌐 Our Services",         description: "Explore our digital marketing services" },
            { id: "packages",     title: "📦 Packages",             description: "View our service packages & pricing"    },
            { id: "consultation", title: "🤝 Free Consultation",    description: "Book a free strategy session"           },
            { id: "student_reg",  title: "🎓 Student Registration", description: "Enroll in our training programs"        }
          ]
        }]
      }
    }
  }),

  // ── SERVICES MENU ─────────────────────────────────────────
  servicesMenu: () => ({
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: `🌐 *Our Services*\n\nExplore what BITSOL MARKETING offers!\nTap below to learn more about any service.`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        button: "View Services",
        sections: [{
          title: "Choose a Service",
          rows: [
            { id: "social_media",     title: "📱 Social Media",    description: "Daily posts, reels & audience growth"     },
            { id: "performance_ads",  title: "📣 Performance Ads", description: "Meta, Google & TikTok ad campaigns"        },
            { id: "branding",         title: "🎨 Branding",        description: "Logo, design & brand strategy"            },
            { id: "web_dev",          title: "🖥 Web Development",  description: "Business, eCommerce & landing pages"      },
            { id: "chatbot",          title: "🤖 AI Chatbots",     description: "Custom WhatsApp & website bots"           },
            { id: "automation",       title: "⚙ Automation",       description: "Email, CRM & sales funnel automation"     }
          ]
        }]
      }
    }
  }),

  // ── SERVICE DETAILS ───────────────────────────────────────
  socialMedia: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `📱 *Social Media Marketing*\n\nWe manage your social presence across all platforms:\n\n✅ Daily posts & reels\n✅ Audience growth strategies\n✅ Hashtag & SEO optimization\n✅ Monthly analytics reports\n✅ Facebook, Instagram, TikTok & LinkedIn`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "packages",   title: "📦 See Packages"     } },
          { type: "reply", reply: { id: "talk_agent", title: "🤝 Talk to Agent"    } },
          { type: "reply", reply: { id: "services",   title: "⬅ Back to Services" } }
        ]
      }
    }
  }),

  performanceAds: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `📣 *Performance Ads*\n\nWe run high-converting ad campaigns:\n\n✅ Meta Ads (Facebook & Instagram)\n✅ Google Ads (Search & Display)\n✅ TikTok Ads\n✅ Full campaign management\n✅ ROI-focused strategies`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "packages",   title: "📦 See Packages"     } },
          { type: "reply", reply: { id: "talk_agent", title: "🤝 Talk to Agent"    } },
          { type: "reply", reply: { id: "services",   title: "⬅ Back to Services" } }
        ]
      }
    }
  }),

  branding: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `🎨 *Branding & Content Creation*\n\nBuild a powerful brand identity:\n\n✅ Logo & brand kit design\n✅ Social media graphics\n✅ Video content & reels\n✅ Copywriting & captions\n✅ Brand strategy consultation`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "packages",   title: "📦 See Packages"     } },
          { type: "reply", reply: { id: "talk_agent", title: "🤝 Talk to Agent"    } },
          { type: "reply", reply: { id: "services",   title: "⬅ Back to Services" } }
        ]
      }
    }
  }),

  webDev: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `🖥 *Website Development*\n\nWe build professional, fast & mobile-friendly websites:\n\n✅ Business / Portfolio websites\n✅ eCommerce stores\n✅ Landing pages & sales funnels\n✅ Admin panels & dashboards\n✅ Next.js / React / Node.js`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "packages",   title: "📦 See Packages"     } },
          { type: "reply", reply: { id: "talk_agent", title: "🤝 Talk to Agent"    } },
          { type: "reply", reply: { id: "services",   title: "⬅ Back to Services" } }
        ]
      }
    }
  }),

  chatbot: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `🤖 *AI Chatbots & Automation*\n\nWe build custom bots just like this one!\n\n✅ WhatsApp Business bots\n✅ Website AI chatbots\n✅ Lead capture bots\n✅ Customer support bots\n✅ E-commerce order bots\n\nInterested in a bot for YOUR business?`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "packages",   title: "📦 See Packages"     } },
          { type: "reply", reply: { id: "talk_agent", title: "🤝 Talk to Agent"    } },
          { type: "reply", reply: { id: "services",   title: "⬅ Back to Services" } }
        ]
      }
    }
  }),

  automation: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `⚙ *Marketing Automation*\n\nAutomate your entire marketing pipeline:\n\n✅ Email marketing automation\n✅ CRM setup & integration\n✅ Sales funnel automation\n✅ Lead nurturing sequences\n✅ WhatsApp drip campaigns`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "packages",   title: "📦 See Packages"     } },
          { type: "reply", reply: { id: "talk_agent", title: "🤝 Talk to Agent"    } },
          { type: "reply", reply: { id: "services",   title: "⬅ Back to Services" } }
        ]
      }
    }
  }),

  // ── PACKAGES MENU ─────────────────────────────────────────
  packagesMenu: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `📦 *Our Packages*\n\nChoose the right package for your business:\n\n🥉 *Starter* — Best for small businesses\n🥈 *Growth* — Best for scaling brands\n🥇 *Scale* — Best for established businesses\n\n_For custom packages, talk to our team._`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "pkg_starter", title: "🥉 Starter" } },
          { type: "reply", reply: { id: "pkg_growth",  title: "🥈 Growth"  } },
          { type: "reply", reply: { id: "pkg_scale",   title: "🥇 Scale"   } }
        ]
      }
    }
  }),

  // ── PACKAGE DETAILS ───────────────────────────────────────
  pkgStarter: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `🥉 *Starter Package*\n\n💰 Price: On Request\n\n✅ Social Media Management (1 platform)\n✅ 15 posts/month\n✅ Basic graphic design\n✅ Monthly report\n✅ WhatsApp support\n\nPerfect for startups & small businesses just getting started online!`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "consultation", title: "🤝 Get Free Consult"  } },
          { type: "reply", reply: { id: "talk_agent",   title: "📞 Talk to Agent"     } },
          { type: "reply", reply: { id: "packages",     title: "⬅ Back to Packages"  } }
        ]
      }
    }
  }),

  pkgGrowth: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `🥈 *Growth Package*\n\n💰 Price: On Request\n\n✅ Social Media Management (2 platforms)\n✅ 30 posts/month + reels\n✅ Meta/Google Ads management\n✅ Ad budget optimization\n✅ Bi-weekly reports\n✅ Priority WhatsApp support\n\nIdeal for growing brands ready to scale their digital presence!`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "consultation", title: "🤝 Get Free Consult"  } },
          { type: "reply", reply: { id: "talk_agent",   title: "📞 Talk to Agent"     } },
          { type: "reply", reply: { id: "packages",     title: "⬅ Back to Packages"  } }
        ]
      }
    }
  }),

  pkgScale: () => ({
    type: "interactive",
    interactive: {
      type: "button",
      body: {
        text: `🥇 *Scale Package*\n\n💰 Price: On Request\n\n✅ Full social media management (all platforms)\n✅ Unlimited posts & reels\n✅ Full ad management (Meta + Google + TikTok)\n✅ Website development/maintenance\n✅ AI Chatbot setup\n✅ Weekly reports & strategy calls\n✅ Dedicated account manager\n\nFor businesses serious about dominating their market!`
      },
      footer: { text: "Type menu anytime for Main Menu." },
      action: {
        buttons: [
          { type: "reply", reply: { id: "consultation", title: "🤝 Get Free Consult"  } },
          { type: "reply", reply: { id: "talk_agent",   title: "📞 Talk to Agent"     } },
          { type: "reply", reply: { id: "packages",     title: "⬅ Back to Packages"  } }
        ]
      }
    }
  }),

  // ── STUDENT REGISTRATION ──────────────────────────────────
  studentReg: () =>
    `🎓 *Student Registration*\n\nWelcome! Let's get you enrolled in our digital marketing training programs 🚀\n\nPlease reply with your *Full Name* to begin:`,

  studentCourseSelect: () => ({
    type: "interactive",
    interactive: {
      type: "list",
      body: {
        text: `📚 *Select Your Course*\n\nWhich program are you interested in? Tap below to choose:`
      },
      footer: { text: "Certificate awarded upon completion." },
      action: {
        button: "Choose Course",
        sections: [{
          title: "Available Programs",
          rows: [
            { id: "Social Media Marketing",  title: "📱 Social Media",      description: "Master Instagram, TikTok & Facebook"  },
            { id: "Performance Ads",         title: "📣 Performance Ads",   description: "Meta & Google Ads mastery"             },
            { id: "Web Development",         title: "🖥 Web Development",    description: "React, Next.js & Node.js"              },
            { id: "Branding & Design",       title: "🎨 Branding & Design",  description: "Logo, graphics & brand strategy"       },
            { id: "AI Chatbots",             title: "🤖 AI Chatbots",       description: "Build WhatsApp & website bots"         },
            { id: "Full Digital Marketing",  title: "⭐ Full Program",       description: "Complete digital marketing course"     }
          ]
        }]
      }
    }
  }),

  // ── FREE CONSULTATION (text — collecting info step by step) ─
  consultation: () =>
    `🤝 *Free Consultation Request*\n\nGreat choice! Let's grow your business together 🚀\n\nPlease reply with your *Full Name* to get started:`,

  // ── TALK TO AGENT ─────────────────────────────────────────
  talkAgent: () =>
    `📞 *Connecting you to our team...*\n\n✅ A BITSOL MARKETING representative will respond shortly.\n\n🕘 Business Hours:\nMon–Sat | 9:00 AM – 6:00 PM (PKT)\n\n📱 Direct Contact:\n*WhatsApp:* +92-XXX-XXXXXXX\n🌐 *Website:* www.bitsolmarketing.com\n📧 *Email:* info@bitsolmarketing.com`,

  // ── INVALID RESPONSE ──────────────────────────────────────
  invalidResponse: () =>
    `❗ I didn't understand that.\n\nPlease use the menu buttons, or type *menu* to go back to the Main Menu.`,

  // ── SESSION TIMEOUT ───────────────────────────────────────
  sessionTimeout: (name) =>
    `⏰ Your session has timed out due to inactivity.\n\nWe trust our assistance was valuable, ${name}! Feel free to get in touch anytime.\n\nWishing you a fantastic day! 🌟\n\nType *menu* to start a new session.`,

  // ── CHAT END ──────────────────────────────────────────────
  chatEnd: () =>
    `✅ *Thank you for approaching BITSOL MARKETING!*\n\nThis chat has ended. We'll be in touch soon! 👋\n\nShould you have any more questions, feel free to reach out anytime.\n\nWishing you a fantastic day! 🚀\n\n_Type *menu* anytime to start again._`
};

module.exports = flows;
