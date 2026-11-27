/* Service pages – English. Same structure as the Italian content in ../services.js */
export default {
  hosting: {
    slug: 'hosting-and-servers',
    title: 'Hosting and servers',
    metaTitle: 'Managed hosting and servers for businesses | Sodano Consulting',
    metaDesc: 'Managed hosting and servers for websites, web applications and business software: setup, updates, security and support from the team that builds the software.',
    lead: 'We host and manage websites, web applications and business software on servers configured for your project. You focus on your work, we take care of the machine.',
    intro: [
      'A website or a business application only runs well if its environment is looked after: up-to-date versions, valid certificates, the right resources and security checks. When something breaks, what matters is who steps in and how well they know the project.',
      'Our advantage is that hosting and development sit in the same team. Whoever manages the server knows the applications running on it, and whoever builds them knows how they are configured. No passing the buck between suppliers.'
    ],
    includes: [
      { t: 'Hosting for websites and web applications', d: 'Space, domains, SSL/TLS certificates and an environment configured for the technologies you use.' },
      { t: 'Application environments', d: 'PHP, Node.js and Laravel with deployment from Git repositories: every code update goes live in an orderly way.' },
      { t: 'Updates and security', d: 'System maintenance, web application firewall and threat scanning on the server.' },
      { t: 'Backup', d: 'Backup plans agreed according to how important your data is and how often it changes.' },
      { t: 'Migrations', d: 'If your project is already online elsewhere, we plan the move together to keep downtime to a minimum.' }
    ],
    approach: [
      'We start from what has to run on the server: a company website, an online shop, business software with many users or an application exchanging data with other systems all have very different needs. On that basis we choose the environment and resources, without oversizing and without leaving you short.',
      'After go-live we remain your point of contact: updates, checks and interventions go through us, from our offices in Valenzano (Bari) and Rome.'
    ],
    tech: [
      { group: 'Languages and runtimes', items: [{ name: 'PHP 8.4' }, { name: 'Node.js 20, 22 and 24' }] },
      { group: 'Frameworks and tools', items: [{ name: 'Laravel' }, { name: 'Composer' }, { name: 'Git' }] },
      { group: 'Databases', items: [{ name: 'MySQL / MariaDB' }, { name: 'PostgreSQL' }] },
      { group: 'Automation', items: [{ name: 'n8n' }] },
      { group: 'Security', items: [{ name: 'SSL/TLS certificates' }, { name: 'Web Application Firewall' }, { name: 'Imunify' }] }
    ],
    faq: [
      { q: 'Can I move a website that is already online to you?', a: 'Yes. First we look at how it is built and where it is hosted today, then we agree on timing and method to keep downtime to a minimum.' },
      { q: 'My business software uses Laravel or Node.js: can you host it?', a: 'Both are among the supported technologies. If the project has special needs, such as always-on services or heavy resources, we discuss them first to choose the right setup.' },
      { q: 'Who steps in if something stops working?', a: 'Our team: the same people who know the server and, if we built it, your application too.' },
      { q: 'How much does it cost?', a: 'It depends on what has to run on the server and the level of support you need. After a first conversation we prepare a tailored proposal.' }
    ]
  },
  webapp: {
    slug: 'web-apps-and-management-software',
    sig: {
      kind: 'beforeAfter',
      title: 'From this to this',
      beforeLabel: 'Before',
      before: ['Spreadsheets shared by email', 'Data copied by hand from one program to another', 'Everyone with their own version of the numbers', 'Reports put together at month end'],
      afterLabel: 'With tailor-made software',
      after: ['One place for data and records', 'Information flowing between systems on its own', 'Everyone sees the same, up-to-date data', 'Dashboards always ready']
    },
    title: 'Web apps and management software',
    metaTitle: 'Custom web apps and business software development | Sodano Consulting',
    metaDesc: 'Tailor-made business software and web applications for companies and public bodies: digital processes, data in one place, integration with the tools you already use.',
    lead: 'We build business software and web applications around the way your company works, not the other way round.',
    intro: [
      'Shared spreadsheets, emails to pass information around, programs that do not talk to each other: this is where many companies lose time and errors multiply. Tailor-made software brings processes and data into one place, available in the browser from the office, from home or on the phone.',
      'We design it around the people who will use it every day, because software nobody enjoys using solves nothing.'
    ],
    includes: [
      { t: 'Process analysis', d: 'We understand how you work today, where time is lost and what is really worth automating.' },
      { t: 'Tailor-made business software', d: 'Contacts, cases, orders, bookings, stock or any workflow specific to your business.' },
      { t: 'Users, roles and permissions', d: 'Everyone sees and edits only what concerns them, with a record of operations.' },
      { t: 'Reports and dashboards', d: 'The figures you need to make decisions, up to date and without manual exports.' },
      { t: 'Integrations', d: 'Connections to the software you already use, through APIs or data exchange.' },
      { t: 'Evolving over time', d: 'Support and new features as your company changes.' }
    ],
    approach: [
      'We work in steps: first the features that solve the main problem, put straight into the hands of the people who will use them, then the rest based on what real use reveals. You see results early and the project stays close to your actual needs.',
      'We can also host and maintain the software on our servers, so development, hosting and support stay within one team.'
    ],
    faq: [
      { q: 'Tailor-made software or an off-the-shelf product?', a: 'If an existing product covers your work well, it is often the better choice. Custom software makes sense when your processes are specific or off-the-shelf tools force awkward workarounds. We tell you honestly after the analysis.' },
      { q: 'Who owns the data?', a: 'You do. You can export it and, if you wish, the software can be hosted wherever you prefer.' },
      { q: 'Can it connect to the programs we already use?', a: 'In most cases yes, as long as the program allows data exchange. We check this during the analysis.' },
      { q: 'How long does it take?', a: 'It depends on complexity. After the analysis we give you an estimate and a release plan, starting with the most important features.' }
    ]
  },
  websites: {
    slug: 'websites-and-e-commerce',
    sig: {
      kind: 'devices',
      title: 'One website, every screen',
      text: 'We design every page to rearrange itself: on computer, tablet and phone the content stays readable and buttons stay within thumb’s reach.',
      labels: ['Computer', 'Phone']
    },
    title: 'Websites and e-commerce',
    metaTitle: 'Website and e-commerce development | Sodano Consulting',
    metaDesc: 'Websites and online shops for companies and public bodies: built around your goals, fast, accessible, search-engine friendly and easy to manage.',
    lead: 'We build websites and online shops designed to bring in enquiries and sales, not just to look good.',
    intro: [
      'Your website is often the first contact between a customer and your company. In a few seconds it has to make clear what you do, work well on a phone, load quickly and guide visitors towards an enquiry or a purchase.',
      'That is why we start from your goals: who should reach the site, what they need to find and what you want them to do. Design and technology come afterwards, in service of those answers.'
    ],
    includes: [
      { t: 'Corporate and institutional websites', d: 'Structure, copy and design consistent with your identity, in one or more languages.' },
      { t: 'E-commerce', d: 'Catalogue, cart, payments and shipping, with order management that is simple for your staff.' },
      { t: 'Speed and accessibility', d: 'Lightweight pages, readable by everyone and usable on any device.' },
      { t: 'Technical SEO', d: 'Clear URLs, carefully written titles and descriptions, content search engines can read.' },
      { t: 'Privacy and cookies', d: 'Privacy notices, cookie consent and contact forms compliant with the GDPR.' },
      { t: 'Hosting and maintenance', d: 'We can host and update the site on our servers, so you have a single point of contact.' }
    ],
    approach: [
      'Before designing anything we look at your audience, your competitors and the content available. This produces a structure we refine together, followed by design and development. Before launch we test the site on computers and phones.',
      'After launch we can also take care of marketing: campaigns, social media and search engine visibility.'
    ],
    faq: [
      { q: 'Will I be able to edit the content myself?', a: 'We decide together based on how often it changes: for content you update frequently we provide an easy-to-use management system.' },
      { q: 'Will the site work well on phones?', a: 'Yes, we design and test it on screens of every size.' },
      { q: 'Can you redo a website I already have?', a: 'Yes. We start from what works and what does not on your current site, and we handle the switch carefully so you do not lose your search rankings.' },
      { q: 'How much does it cost?', a: 'It depends on the number of pages, languages and features, an online shop for example. After a first conversation we prepare a proposal.' }
    ]
  },
  integrations: {
    slug: 'integrations-and-apis',
    sig: {
      kind: 'network',
      title: 'All your systems, one flow',
      text: 'An example of how data can move between a company’s software without being retyped.',
      hub: 'API',
      nodes: ['Management', 'E-commerce', 'CRM', 'Payments', 'Invoicing', 'Partners']
    },
    title: 'Integrations and APIs',
    metaTitle: 'Software integrations and API development | Sodano Consulting',
    metaDesc: 'We connect business software, online shops, CRMs and external services through APIs: data moves from one system to another without being copied by hand.',
    lead: 'We make your software talk to each other, so data moves from one system to the next without being retyped.',
    intro: [
      'Orders from the online shop re-entered into the management system, contacts duplicated between CRM and invoicing, reports built by copying figures from three different programs: every manual step costs time and introduces errors.',
      'A well-made integration removes these steps. We use the APIs your software provides, or build new ones where needed, so your systems become a single flow.'
    ],
    includes: [
      { t: 'Data flow analysis', d: 'We map which information moves between systems, who changes it and where errors arise.' },
      { t: 'Connecting existing software', d: 'Business software, online shops, CRMs, payment or booking platforms, third-party services.' },
      { t: 'API development', d: 'Documented interfaces that expose your software’s data to partners, apps or other systems, with controlled access.' },
      { t: 'Automation', d: 'Repetitive tasks that start on their own when something happens, also with tools such as n8n.' },
      { t: 'Monitoring', d: 'Checks and alerts to notice immediately if a data exchange stops.' }
    ],
    approach: [
      'Before writing code we check what the systems involved allow: which data they expose, with what limits and how reliably. Then we design the integration starting from the most useful flow and test it with real data.',
      'We document every connection, so it stays clear how it works even years later or if the person managing it changes.'
    ],
    faq: [
      { q: 'Can any software be integrated?', a: 'It depends on what the software offers: APIs, exports or access to its data. We check at the start and tell you clearly what is possible.' },
      { q: 'What happens if one of the systems does not respond?', a: 'We design integrations so that no data is lost and errors are reported, allowing someone to step in.' },
      { q: 'Can you build an API for our partners?', a: 'Yes: a documented interface with restricted access lets partners read or send data in a controlled way.' }
    ]
  },
  bi: {
    slug: 'business-intelligence-and-ai',
    sig: {
      kind: 'dashboard',
      title: 'The figures you need, at a glance',
      text: 'A dashboard brings together data from your management software, sales and online platforms, and updates itself.',
      note: 'Illustrative example',
      panels: ['Sales trend', 'Enquiries by channel', 'Orders by region', 'Monthly target']
    },
    title: 'Business intelligence and AI',
    metaTitle: 'Business intelligence and artificial intelligence for companies | Sodano Consulting',
    metaDesc: 'Dashboards, reports and AI tools built on your company’s data, to decide with up-to-date figures and automate repetitive work.',
    lead: 'We turn the data your company already collects into clear dashboards and AI tools that save time.',
    intro: [
      'Many companies have the data but not the answers: information is scattered across business software, spreadsheets and online platforms, and getting an overview takes hours of manual work.',
      'With business intelligence that data is collected, cleaned and shown in dashboards that are always up to date. Artificial intelligence goes one step further: classifying documents, answering frequent questions, extracting information, suggesting actions.'
    ],
    includes: [
      { t: 'Data collection and cleaning', d: 'We combine sources, fix incomplete or duplicate data and make it comparable.' },
      { t: 'Dashboards and reports', d: 'The indicators that matter to you, updated automatically and available in the browser.' },
      { t: 'AI assistants', d: 'Tools that answer questions about your documents or support customers and colleagues.' },
      { t: 'Automating repetitive tasks', d: 'Reading and sorting documents, extracting data, first-line answers.' },
      { t: 'Responsible use of data', d: 'Attention to privacy, confidentiality and where company data is processed.' }
    ],
    approach: [
      'We start from the questions you want answered, not from the tools. We identify the data needed, check that it is reliable and build a first dashboard or assistant on a concrete case, to be measured before extending it.',
      'We are pragmatic about artificial intelligence: we propose it where it saves time measurably, and we tell you when a traditional process is the better choice.'
    ],
    faq: [
      { q: 'Do we need a lot of data to start?', a: 'No. Often it is enough to put the data you already have in order. The first step is understanding what it is and how reliable it is.' },
      { q: 'Does company data stay confidential?', a: 'It is one of the first things we define: which data to use, where it is processed and who can access it, in compliance with the GDPR.' },
      { q: 'Does AI replace people’s work?', a: 'In the projects we propose it mainly removes repetitive tasks, leaving decisions and special cases to people.' }
    ]
  },
  mobile: {
    slug: 'mobile-apps',
    sig: {
      kind: 'phones',
      title: 'Designed for everyday use',
      text: 'A few actions, the ones that really matter, within thumb’s reach.',
      screens: [{ label: 'Bookings', ui: 'calendar' }, { label: 'Customer area', ui: 'list' }, { label: 'Field work', ui: 'check' }]
    },
    title: 'Mobile apps',
    metaTitle: 'iOS and Android app development | Sodano Consulting',
    metaDesc: 'iOS and Android apps for customers and staff: designed around real use, connected to your systems and published on the app stores.',
    lead: 'We develop iOS and Android apps designed for the people who will really use them, connected to the systems your company already uses.',
    intro: [
      'An app makes sense when it offers something a website cannot: a service used often, notifications, features using the camera or location, field work even with poor connectivity.',
      'So the first step is understanding whether the app is really needed, for whom and to do what. When the answer is yes, we design it around the few actions that matter and connect it to your data.'
    ],
    includes: [
      { t: 'Apps for customers', d: 'Bookings, orders, private areas, loyalty programmes, notifications.' },
      { t: 'Apps for staff', d: 'Tools for people working off-site: reports, deliveries, inspections, photos and signatures.' },
      { t: 'Connection to your systems', d: 'The app reads and writes data from your business software through APIs.' },
      { t: 'App store publishing', d: 'Preparation and submission to the App Store and Google Play.' },
      { t: 'Updates', d: 'New versions and adjustments to changes in iOS and Android.' }
    ],
    approach: [
      'We design the main screens and test them with the people who will use the app before building it in full. Then we release a first version with the essential features and improve it based on real use.',
      'If business software already exists, built by us or by others, the app relies on it: no duplicated data.'
    ],
    faq: [
      { q: 'Do we need an app, or is the website enough?', a: 'For many services a well-made website that works on phones is enough. We tell you before we start, even if the answer is that you do not need an app.' },
      { q: 'Does the app work on both iPhone and Android?', a: 'Yes, we design it for both platforms.' },
      { q: 'Who publishes the app on the stores?', a: 'We handle preparation and submission; the developer accounts on the stores remain in your company’s name.' }
    ]
  },
  brand: {
    slug: 'brand-identity',
    sig: {
      kind: 'brandSystem',
      title: 'A system, not just a logo',
      text: 'Colours, typefaces and usage rules work together, so every piece of material looks like it belongs to the same company.',
      note: 'Example of an identity system',
      palette: [{ name: 'Primary', hex: '#C8102E' }, { name: 'Dark', hex: '#16161C' }, { name: 'Neutral', hex: '#8A8580' }, { name: 'Light', hex: '#F3EFE8' }],
      type: 'Headings and body text'
    },
    title: 'Brand identity',
    metaTitle: 'Brand identity, logo and corporate design | Sodano Consulting',
    metaDesc: 'Logo, colours, typefaces and guidelines for a recognisable, consistent image across website, social media, documents and print.',
    lead: 'We build a recognisable, consistent visual identity, from the logo to the guidelines that keep it in order over time.',
    intro: [
      'A strong brand is more than a nice logo: it is the sense of consistency a customer feels moving from the website to social media, from a quote to a sign. When every piece is made differently, the company looks smaller and less reliable than it is.',
      'We work on identity starting from who you are, who you address and what sets you apart, to arrive at a system of elements that anyone, inside or outside the company, can use correctly.'
    ],
    includes: [
      { t: 'Analysis and positioning', d: 'Values, audience, competitors and tone of voice.' },
      { t: 'Logo', d: 'A new mark or a refresh of the existing one, in versions for every use.' },
      { t: 'Colours and typefaces', d: 'A palette and typography designed for screen and print.' },
      { t: 'Corporate stationery', d: 'Business cards, letterheads, templates for documents and presentations.' },
      { t: 'Guidelines', d: 'A simple manual explaining how to use the brand and its style.' }
    ],
    approach: [
      'We start with a conversation about the company’s history, goals and customers. We propose a few well-reasoned directions, develop them with you and test the result on real cases: website, social media, documents.',
      'The identity then becomes the basis for marketing work: website, campaigns and content all start from the same rules.'
    ],
    faq: [
      { q: 'Can you refresh our logo without changing it completely?', a: 'Yes. A refresh often keeps what customers recognise and fixes what no longer works, such as legibility at small sizes.' },
      { q: 'Do we receive the logo files?', a: 'Yes, in formats for web and print, together with the guidelines.' },
      { q: 'What do you need from us?', a: 'Some time to tell us about the company and its customers, and one person to make decisions.' }
    ]
  },
  social: {
    slug: 'social-media-management',
    sig: {
      kind: 'calendar',
      title: 'One week of editorial plan',
      text: 'Content is planned and approved before it is published.',
      note: 'Illustrative example',
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      posts: [
        { day: 0, type: 'Post', label: 'Product news' },
        { day: 1, type: 'Story', label: 'Behind the scenes' },
        { day: 2, type: 'Video', label: 'How it works' },
        { day: 3, type: 'Post', label: 'Customer story' },
        { day: 4, type: 'Story', label: 'Question for the community' },
        { day: 5, type: 'Video', label: 'Event of the week' }
      ]
    },
    title: 'Social media management',
    metaTitle: 'Social media management for businesses | Sodano Consulting',
    metaDesc: 'Strategy, content, publishing and performance analysis on social networks, with an editorial plan built around your company’s goals.',
    lead: 'We manage your company’s social profiles with a clear plan, quality content and measured results.',
    intro: [
      'Posting consistently is hard when social media is the last thing on everyone’s mind. The result is profiles that sit idle for months or improvised posts that lead nowhere.',
      'We treat social media as a working channel: clear goals, an editorial calendar, content consistent with your brand identity and regular checks on what works.'
    ],
    includes: [
      { t: 'Strategy', d: 'Which channels to be on, who to talk to and with what goals.' },
      { t: 'Editorial plan', d: 'A content calendar agreed with you in advance.' },
      { t: 'Content creation', d: 'Copy, graphics, photos and videos designed for each platform.' },
      { t: 'Publishing and community', d: 'Profile management and attention to comments and messages.' },
      { t: 'Performance analysis', d: 'Regular reports and adjustments to the plan based on data.' }
    ],
    approach: [
      'We begin with an analysis of your current profiles and competitors, then define goals and plan. Every month we share the calendar before publishing and, at the end of the period, what worked and what to change.',
      'When needed, we add paid campaigns to organic content, managed by the same team.'
    ],
    faq: [
      { q: 'Which social networks should we be on?', a: 'It depends on who your customers are. A few well-kept channels are better than many abandoned ones: we decide together during the strategy phase.' },
      { q: 'Do we have to approve the posts?', a: 'Yes, the editorial plan is shared before publishing.' },
      { q: 'How do we know it works?', a: 'Through regular reports on indicators linked to your goals, not just the number of likes.' }
    ]
  },
  ads: {
    slug: 'digital-advertising-and-seo',
    sig: {
      kind: 'twoRoads',
      title: 'Two roads that work together',
      ads: { t: 'Paid campaigns', d: 'Bring visits straight away, as long as the campaign is running.' },
      seo: { t: 'SEO', d: 'Grows more slowly, but rankings last over time.' },
      axis: 'Time',
      note: 'Indicative trend'
    },
    title: 'Digital advertising and SEO',
    metaTitle: 'Online advertising and SEO for businesses | Sodano Consulting',
    metaDesc: 'Advertising campaigns on Google and social media and search engine optimisation, to bring people interested in what you offer to your website.',
    lead: 'We bring people looking for exactly what you offer to your website: with advertising campaigns in the short term, with SEO over time.',
    intro: [
      'A good website without visitors produces no results. There are two complementary ways to be found: online advertising, which brings visits immediately but only while you pay for it, and SEO, which works on organic rankings and grows over time.',
      'We manage them together, with the same goal: enquiries and sales, measured with reliable data.'
    ],
    includes: [
      { t: 'Search engine campaigns', d: 'Ads shown to people searching for your products or services.' },
      { t: 'Social media campaigns', d: 'Advertising aimed at an audience defined by interests, area or profession.' },
      { t: 'Technical SEO', d: 'Speed, site structure, URLs, structured data and indexing.' },
      { t: 'SEO content', d: 'Pages and articles written around your customers’ real searches.' },
      { t: 'Measurement', d: 'Conversion tracking that respects cookie consent, and regular reports.' }
    ],
    approach: [
      'We start from searches and audience: what your potential customers look for and what an enquiry is worth to you. On that basis we split the budget between advertising and SEO and set measurable goals.',
      'We check results regularly and move resources to what performs best, sharing figures and decisions with you.'
    ],
    faq: [
      { q: 'How soon will we see results?', a: 'With paid campaigns within a few days. SEO usually takes a few months, but the results remain even when you are not paying for ads.' },
      { q: 'What advertising budget do we need?', a: 'It depends on your sector and competition. We propose a sustainable starting amount and adjust it based on results.' },
      { q: 'Can you guarantee first place on Google?', a: 'No, and be wary of anyone who promises it: rankings depend on Google. We can guarantee well-done work and transparently measured results.' }
    ]
  },
  media: {
    slug: 'photo-video-and-drone-footage',
    sig: {
      kind: 'shotTypes',
      title: 'What we shoot',
      items: ['Companies and workplaces', 'Products', 'People and teams', 'Events', 'Buildings and sites from above', 'Landscapes and places']
    },
    title: 'Photo, video and drone footage',
    metaTitle: 'Corporate photo, video and drone footage | Sodano Consulting',
    metaDesc: 'Photo shoots, corporate videos and aerial drone footage for websites, social media, campaigns and events.',
    lead: 'We create photos, videos and aerial footage that tell the story of your company, your products and your spaces.',
    intro: [
      'Images are the first thing people look at on a website or on social media. Stock photos and videos shot on a phone do little: original, carefully made images make a company more credible and recognisable.',
      'Drone footage adds a point of view that would otherwise be impossible: buildings, plants, construction sites, landscapes and events seen from above.'
    ],
    includes: [
      { t: 'Photo shoots', d: 'Products, workplaces, people and events.' },
      { t: 'Corporate videos', d: 'Company presentations, product videos, short content for social media.' },
      { t: 'Aerial drone footage', d: 'Photos and videos from above of buildings, land, sites and events.' },
      { t: 'Editing', d: 'Editing, graphics, subtitles and versions in the formats of each platform.' }
    ],
    approach: [
      'We prepare every shoot with a site visit or a conversation about the goals and images needed. After the shoot we select and edit the material and deliver it ready for website, social media and campaigns.'
    ],
    faq: [
      { q: 'Can a drone fly anywhere?', a: 'No: near airports, in built-up areas or in protected areas there are restrictions or permits are required. Before shooting we check the area and plan the flight in line with the rules.' },
      { q: 'Can I use the material wherever I want?', a: 'We agree the intended uses at the start, so the material is ready for every channel you need.' }
    ]
  },
  xr: {
    slug: '3d-and-augmented-reality',
    sig: {
      kind: 'configurator',
      title: 'Try a configurator',
      text: 'An example inspired by one of our projects: a configurator for pneumatic hammer bits. Choose shape and length and the model updates.',
      note: 'Simplified demonstration',
      groups: [
        { key: 'shape', label: 'Shape', options: [{ v: 'point', t: 'Point' }, { v: 'flat', t: 'Flat chisel' }, { v: 'wide', t: 'Wide chisel' }, { v: 'spade', t: 'Spade' }] },
        { key: 'length', label: 'Length', options: [{ v: 's', t: 'Short' }, { v: 'm', t: 'Medium' }, { v: 'l', t: 'Long' }] }
      ]
    },
    title: '3D and augmented reality',
    metaTitle: '3D product configurators and augmented reality | Sodano Consulting',
    metaDesc: '3D configurators, product models and renders to present and sell technical and customisable products: customers choose the variants and see the result instantly.',
    lead: 'We create 3D configurators and product models: customers choose the variants, see the result instantly and reach out with a clear idea of what they want.',
    intro: [
      'When a product comes in many variants, photos and PDF catalogues are not enough: customers struggle to understand the differences and sales staff spend their time answering the same questions.',
      'A 3D configurator solves the problem at its root. We built one, for example, for pneumatic hammer bits: shape, size and shank are chosen from a simple interface and the 3D model shows the result instantly, from every angle.'
    ],
    includes: [
      { t: 'Product configurators', d: 'Customers choose variants, sizes and options and see the product update in real time.' },
      { t: '3D models', d: 'Three-dimensional models to rotate and zoom, designed to load quickly in the browser.' },
      { t: 'Renders and animations', d: 'Product images and videos for website, catalogues, social media and trade fairs.' },
      { t: 'Linked to enquiries', d: 'The chosen configuration arrives with the quote request, with no need to explain everything again.' },
      { t: 'Augmented reality', d: 'Where it makes sense, the model can be viewed in real space from a smartphone.' }
    ],
    approach: [
      'We start from the materials you already have: technical drawings, CAD files, photos and price lists. Together we define which variants to show and which rules link the options, so the configurator only offers possible combinations.',
      'The configurator lives on your website and can connect to your business software or quote request form, so each configuration immediately becomes work for your sales team.'
    ],
    faq: [
      { q: 'Do you need 3D files of the product?', a: 'If they exist, we use them as a starting point. Otherwise we start from technical drawings and photos and create the models ourselves.' },
      { q: 'Does the configurator work on the website, with nothing to install?', a: 'Yes, it runs in the browser on computers, tablets and smartphones.' },
      { q: 'Does it make sense for technical or industrial products?', a: 'Yes, that is often where it helps most: many variants and differences that are hard to explain in words.' }
    ]
  },
  infra: {
    slug: 'it-infrastructure-and-networks',
    sig: {
      kind: 'topology',
      title: 'A network in good order',
      text: 'An example of a company network: internet connection protected by a firewall, an internal network for staff and a separate network for guests.',
      nodes: { internet: 'Internet', firewall: 'Firewall', switch: 'Switch', pc: 'Workstations', server: 'Server', printer: 'Printers', wifi: 'Staff Wi-Fi', guest: 'Guest Wi-Fi' }
    },
    title: 'IT infrastructure and networks',
    metaTitle: 'IT infrastructure and business networks | Sodano Consulting',
    metaDesc: 'Design, installation and management of networks, servers and workstations for companies and offices, with support from the Sodano team.',
    lead: 'We design and manage networks, servers and workstations so that technology in your office works and slows nobody down.',
    intro: [
      'A slow network, Wi-Fi that does not reach every room, computers each set up differently, nobody knowing exactly where the data is: these are common problems that waste hours every week and increase risks.',
      'We bring order to your company’s IT infrastructure and maintain it over time, with a single point of contact for network, devices and servers.'
    ],
    includes: [
      { t: 'Assessment of what you have', d: 'Inventory of network, devices, servers and weak points.' },
      { t: 'Wired networks and Wi-Fi', d: 'Design and configuration, with separate networks for guests and devices.' },
      { t: 'On-site servers and storage', d: 'Servers, shared folders and access permissions.' },
      { t: 'Workstations', d: 'Setup and maintenance of computers and devices.' },
      { t: 'Support', d: 'Remote and on-site help when something stops working.' }
    ],
    approach: [
      'We start with a site visit and an analysis of how you work. We propose interventions in order of priority, so you can spread the cost, and we document everything we configure.',
      'Afterwards we remain your point of contact for support, from our offices in Valenzano (Bari) and Rome.'
    ],
    faq: [
      { q: 'Do you work with the equipment we already have?', a: 'Yes. We assess what can be reused and what needs replacing, without changing everything if it is not necessary.' },
      { q: 'Can you look after several sites?', a: 'Yes, including connecting the networks of different sites to each other.' },
      { q: 'Is support also on site?', a: 'We help remotely whenever possible and on site when needed. We agree the details based on your location and needs.' }
    ]
  },
  cloud: {
    slug: 'cloud-computing',
    sig: {
      kind: 'whereTo',
      title: 'What to move to the cloud',
      cloud: { t: 'Usually worth moving to the cloud', items: ['Email, calendars and shared documents', 'Websites and software used by several sites', 'Off-site backup copies', 'Services that need to grow quickly'] },
      onsite: { t: 'Often better on site', items: ['Devices and machines connected locally', 'Very large archives used only in the office', 'Systems that must keep working without internet'] },
      note: 'Every case needs assessing: it is the first step we take together.'
    },
    title: 'Cloud computing',
    metaTitle: 'Cloud services and cloud migration for businesses | Sodano Consulting',
    metaDesc: 'Cloud migration, email and collaboration tools, cloud servers and cost management, with constant attention to security and data.',
    lead: 'We help you choose and use the cloud where it really pays off: to work from anywhere, reduce maintenance and scale services when needed.',
    intro: [
      'The cloud is not a single place but a set of services: email and shared documents, virtual servers, storage, applications. Using it well means choosing what to move, what to keep on site and how to keep costs and access under control.',
      'We guide you through the choices and the migration, and remain your point of contact for day-to-day management.'
    ],
    includes: [
      { t: 'Assessment', d: 'What is worth moving to the cloud, at what cost and with what risks.' },
      { t: 'Migration', d: 'Moving data, email and applications with minimal disruption to work.' },
      { t: 'Collaboration tools', d: 'Email, calendars and shared documents set up for your company.' },
      { t: 'Cloud servers', d: 'Environments for applications and business software that can grow with your needs.' },
      { t: 'Access and costs under control', d: 'Permissions, secure authentication and regular spending reviews.' }
    ],
    approach: [
      'We start from how you work today and what you will need tomorrow. We plan the migration in phases, beginning with the least critical services, and check each step before the next.',
      'The cloud fits into the rest of your infrastructure: backup, security and networks are designed together.'
    ],
    faq: [
      { q: 'Is the cloud secure?', a: 'It can be, if configured well: access rules, multi-factor authentication, backups and permissions make the difference. It is the part we work on most.' },
      { q: 'Should we move everything to the cloud?', a: 'Not always. Some services work better on site; we assess case by case.' },
      { q: 'Can we go back?', a: 'We plan migrations so that data stays exportable and does not depend on a single provider more than necessary.' }
    ]
  },
  backup: {
    slug: 'backup-and-archiving',
    sig: {
      kind: 'copies',
      title: 'Several copies, in different places',
      text: 'A good rule: several copies of your data, on different media, at least one away from the office. And regular restore tests.',
      source: 'Your data',
      copies: [{ t: 'On site', d: 'For fast restores' }, { t: 'Off site', d: 'Against failures, theft and fire' }, { t: 'In the cloud', d: 'Separate from the company network' }],
      test: 'Restore test'
    },
    title: 'Backup and archiving',
    metaTitle: 'Business backup and data archiving | Sodano Consulting',
    metaDesc: 'Backup and restore plans for data, servers and applications: automatic copies, stored in different places and verified with recovery tests.',
    lead: 'We design backups that really work when you need them: automatic, stored in different places and verified with restore tests.',
    intro: [
      'A hardware failure, a mistake, a cyber attack: sooner or later you need to recover data. That is when you find out whether a backup exists, whether it is up to date and, above all, whether it can be restored.',
      'That is why we do not just set up copies: we define what to save, how often, where to keep it and how to recover it, and we regularly check that restoring works.'
    ],
    includes: [
      { t: 'Analysis of the data to protect', d: 'Which data is critical, how often it changes and how long you can afford to be down.' },
      { t: 'Automatic backups', d: 'Scheduled copies of files, databases, servers and applications.' },
      { t: 'Copies in different places', d: 'At least one copy away from the office, to protect against failures, theft or ransomware.' },
      { t: 'Restore tests', d: 'Regular checks that data can really be recovered.' },
      { t: 'Archiving', d: 'Orderly storage of data that is not needed every day but must be kept.' }
    ],
    approach: [
      'We start with a simple question: if you lost this data tomorrow, what would it cost you? The answers shape the backup plan, which we document clearly together with the restore procedure.',
      'Backup is also an essential part of cybersecurity, and we design the two together.'
    ],
    faq: [
      { q: 'We already have an external drive: is that enough?', a: 'Usually not: if the drive stays connected or in the office, a failure, theft or attack can hit it too. You need at least one separate copy.' },
      { q: 'How often should we back up?', a: 'It depends on how often your data changes and how much work you can afford to redo. We define it together.' },
      { q: 'Do you also protect backups of websites and business software?', a: 'Yes, including the databases and servers we manage.' }
    ]
  },
  security: {
    slug: 'cybersecurity',
    sig: {
      kind: 'checklist',
      title: 'A quick check',
      text: 'Tick the measures your company already has in place. We do not save your answers: they are just for you.',
      items: [
        'Important accounts use two-factor authentication',
        'Systems and software are updated regularly',
        'There is an off-site backup, recently tested',
        'Everyone only has access to the data they need',
        'Staff know how to spot fraudulent emails',
        'There is a firewall that is configured and monitored'
      ],
      results: {
        low: 'There is significant room for improvement: let’s start with the measures that reduce risk the most.',
        mid: 'A good base, but some measures are missing. An assessment helps decide where to begin.',
        high: 'An excellent starting point. A regular review helps keep it that way.'
      },
      countLabel: 'measures out of'
    },
    title: 'Cybersecurity',
    metaTitle: 'Cybersecurity for businesses and public bodies | Sodano Consulting',
    metaDesc: 'Risk assessment, protection of networks, devices and accounts, backup and staff training to reduce the risk of attacks and data loss.',
    lead: 'We reduce the risk of a cyber attack or a mistake bringing your company to a halt, with concrete, proportionate measures.',
    intro: [
      'Cyber attacks do not only hit large companies: phishing emails, stolen passwords and ransomware also target small businesses and public bodies, often precisely because they are less protected.',
      'Security is not a product to install but a set of measures: technical, organisational and training. We help you understand where you are most exposed and act there first.'
    ],
    includes: [
      { t: 'Risk assessment', d: 'Review of networks, devices, accounts and procedures to identify weak points.' },
      { t: 'Network and device protection', d: 'Firewalls, updates, antivirus and secure configurations.' },
      { t: 'Accounts and access', d: 'Multi-factor authentication, password and permission management.' },
      { t: 'Backup and recovery', d: 'Protected copies to get back on your feet even after an attack.' },
      { t: 'Training', d: 'Practical guidance for staff to recognise scams and risky behaviour.' }
    ],
    approach: [
      'We begin with an assessment of the current situation and give you a prioritised list of actions, explained in plain language. We start with the ones that reduce risk the most for the least effort.',
      'Security needs maintaining: updates, regular checks and access reviews are part of the ongoing work.'
    ],
    faq: [
      { q: 'We are a small company: are we really at risk?', a: 'Yes. Many attacks are automated and hit anyone with a weakness, regardless of size.' },
      { q: 'What should we do after an attack?', a: 'Isolate the affected systems, do not pay ransoms without advice and call whoever manages your infrastructure straight away. A good backup is what lets you recover.' },
      { q: 'Do you also help with legal obligations?', a: 'We support you on the technical side of the security measures required by the GDPR; for the legal aspects we work with your adviser.' }
    ]
  }
};
