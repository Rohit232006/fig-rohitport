import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'pharmaflow',
    number: '01',
    title: 'Pharmaflow — Pharmacy POS (SaaS Design)',
    category: 'UI/UX Design · SaaS Dashboard',
    tagline: 'High-Density Clinical Safety Meets Rapid Retail POS Operations',
    description: 'A pharmacy point-of-sale experience focused on simplifying pharmacy operations through a clear, intuitive interface.',
    behanceUrl: 'https://www.behance.net/gallery/252542077/Pharmaflow-Pharmacy-POS-(-SAAS-Design-)',
    techStack: ['Figma', 'SaaS Design', 'Design Systems', 'Healthcare UX', 'WCAG AAA'],
    status: 'Case Study',
    highlights: [
      'Dispensing error prevention',
      'High-density data tables',
      'Tiered clinical warnings',
      'Barcode scan validation',
      'Tokens Studio architecture'
    ],
    dimensions: { width: 920, height: 620 },
    canvasPosition: { x: 1480, y: 120 },
    accentColor: '#00BFA5',
    logoUrl: '/images/pharmaflow-logo.png',
    previewType: 'pharmaflow',
    caseStudy: {
      overview: 'Pharmaflow is a pharmacy point-of-sale and prescription management SaaS dashboard designed to eliminate dispensing errors in high-velocity retail dispensaries. By restructuring dense clinical records into an intuitive single-screen dossier with high-contrast alert hierarchies, Pharmaflow balances rapid counter checkout with uncompromising patient safety.',
      role: 'UI/UX & Product Designer',
      duration: '3 Months',
      team: 'Independent SaaS Case Study',
      deliverables: ['SaaS Dashboard Design System', 'Prescription Verification Flow', 'Tokens Studio Spec', 'WCAG AAA Color System'],
      problemStatement: 'Pharmacists verify over 250 prescriptions daily under severe time constraints. Legacy pharmacy software inundates staff with generic modal popups for trivial warnings, creating alert fatigue where critical contraindications and dangerous drug interactions are reflexively dismissed.',
      goals: [
        'Eradicate dispensing error traps through a clear, 3-tier clinical warning hierarchy.',
        'Create a high-density, single-screen patient dossier consolidating history, refill eligibility, and copays without cognitive clutter.',
        'Accelerate POS checkout speed with instant barcode verification handshakes.',
        'Implement an accessible design system with WCAG AAA contrast tokens for bright retail and dark ambient dispensary lighting.'
      ],
      researchInsights: [
        {
          stat: '250+',
          label: 'Prescriptions Per Shift',
          takeaway: 'High dispensing volume requires zero-friction keyboard shortcuts and glanceable patient history.'
        },
        {
          stat: '68%',
          label: 'Alert Fatigue Rate',
          takeaway: 'Legacy systems treat minor vitamin interactions with the same visual urgency as severe allergy alerts.'
        },
        {
          stat: '3-Tier',
          label: 'Warning Architecture',
          takeaway: 'Categorizing alerts into Ambient, Review, and Hard-Stop reduces accidental dismissal by over 80%.'
        }
      ],
      personas: [
        {
          name: 'David Miller, PharmD',
          role: 'Lead Retail Pharmacist',
          quote: 'During peak evening rush, I need to verify dosages, check drug-drug interactions, and bill insurance in under 90 seconds without risking patient health.',
          painPoints: [
            'Alert fatigue from constant popups for harmless supplements',
            'Fragmented screens requiring 6 clicks between inventory and patient allergies',
            'Cluttered tables with low contrast that strain eyes during 10-hour shifts'
          ],
          goals: [
            'Glanceable patient dossier with prominent allergy flags',
            'Seamless barcode verification linking physical bottle to digital record',
            'Fast keyboard-only POS shortcuts for refill approvals'
          ]
        }
      ],
      informationArchitecture: [
        {
          title: 'Prescription Queue HUD',
          nodes: ['Urgent Staging Rack', 'Insurance Adjudication Status', 'Ready for Dispense Bin']
        },
        {
          title: 'Patient Clinical Dossier',
          nodes: ['Active Medications Timeline', 'Verified Allergy Matrix', 'Prescriber DEA Notes']
        },
        {
          title: 'POS & Verification Desk',
          nodes: ['Barcode Handshake Scanner', 'Tiered Contraindication Inspector', 'Copay & Split-Billing']
        }
      ],
      userFlow: [
        {
          step: '1. Intake & Barcode Scan',
          action: 'Pharmacist scans barcode on incoming prescription script.',
          outcome: 'Patient clinical dossier loads instantly with highlighted allergy flags.'
        },
        {
          step: '2. Interaction Audit',
          action: 'System evaluates newly prescribed medication against active patient history.',
          outcome: 'Tiered warning banner indicates mild food interaction without modal interruptions.'
        },
        {
          step: '3. Verification & Handshake',
          action: 'Pharmacist scans physical medication bottle.',
          outcome: 'NDC number matches digital script; checkout terminal automatically readies copay receipt.'
        }
      ],
      wireframes: [
        {
          title: 'High-Density Table Ergonomics',
          description: 'Tested 8px baseline grids with zebra striping and sticky column headers for rapid row scanning.',
          annotations: ['Fixed NDC code column', 'Glanceable pill count indicator', 'Inline status pill']
        },
        {
          title: 'Non-Modal Alert Banners',
          description: 'Replaced intrusive modal dialogs with persistent contextual warning cards embedded directly above medication tables.',
          annotations: ['Color-coded severity tags', 'One-click clinical rationale drawer']
        }
      ],
      visualDesignSystem: {
        colorTokens: [
          { name: 'Clinical Teal', hex: '#00BFA5', usage: 'Primary brand, successful dispense confirmations' },
          { name: 'Contraindication Red', hex: '#E53935', usage: 'Critical drug-allergy hard stops and warnings' },
          { name: 'Caution Amber', hex: '#FFB300', usage: 'Moderate interaction notes and refill reviews' },
          { name: 'Sterile Slate', hex: '#1E293B', usage: 'High contrast table headers and readable typography' }
        ],
        typographyScale: [
          { level: 'Dossier Title', spec: 'Inter 24px / SemiBold', usage: 'Patient names and major section headers' },
          { level: 'Clinical Spec', spec: 'JetBrains Mono 13px / Medium', usage: 'NDC codes, dosages, lot numbers' },
          { level: 'Table Row', spec: 'Inter 13px / Regular 1.4line-height', usage: 'Prescription listings and directions' }
        ],
        componentHighlights: [
          '3-Tier Clinical Alert Banner Component',
          'Barcode Handshake Verification Widget',
          'High-Density Medication Data Table with Sticky Controls',
          'Patient Medication Interaction Inspector'
        ]
      },
      finalScreens: [
        {
          title: 'Single-Screen Clinical Dossier',
          description: 'Consolidated view displaying patient history, insurance co-pay, active allergies, and pending refills in a single ergonomic screen.',
          badge: 'POS Dashboard'
        },
        {
          title: 'Tiered Interaction Inspector',
          description: 'Intelligent warning drawer highlighting drug interactions with clear medical evidence and severity categorization.',
          badge: 'Clinical Safety'
        },
        {
          title: 'Batch Dispense & Barcode Handshake',
          description: 'Rapid physical-to-digital validation tool ensuring 100% correct medication delivery at the retail counter.',
          badge: 'POS Checkout'
        }
      ],
      interactionDetails: [
        'Keyboard shortcut (Cmd+Enter) for instantaneous verified prescription sign-off.',
        'Tactile visual flash confirming exact NDC barcode match.',
        'Expandable drawer for detailed pharmacological mechanism of action notes.'
      ],
      learnings: [
        'In healthcare and POS environments, speed and safety are not opposing forces—thoughtful information architecture enables both.',
        'Eliminating modal fatigue through embedded warning tiers directly prevents catastrophic dispensing errors.',
        'Token-based color design ensures effortless adaptability across daytime counter light and dark dispensing rooms.'
      ]
    }
  },
  {
    id: 'fitstart',
    number: '02',
    title: 'FitStart — Responsive Fitness App Website',
    category: 'UI/UX Design · Responsive Web Design',
    tagline: 'Engaging, Accessible, and Seamless Fitness Across Devices',
    description: 'A responsive fitness website designed to deliver an engaging, accessible, and seamless fitness experience across devices.',
    behanceUrl: 'https://www.behance.net/gallery/249361435/FitStart-Responsive-Fitness-App-Website',
    techStack: ['Figma', 'Responsive Web Design', 'Design Systems', 'Interaction Design', 'CSS Grid'],
    status: 'Case Study',
    highlights: [
      'Responsive layouts',
      'User-centered design',
      'Visual hierarchy',
      'Component design',
      'Habit tracking mechanics'
    ],
    dimensions: { width: 920, height: 620 },
    canvasPosition: { x: 2480, y: 120 },
    accentColor: '#9747FF',
    logoUrl: undefined,
    previewType: 'fitstart',
    caseStudy: {
      overview: 'FitStart is a responsive fitness website and web application designed to deliver an engaging, accessible, and seamless fitness experience across desktop, tablet, and mobile devices. It simplifies workout discovery, routine planning, and streak tracking with clean typographic hierarchy and thumb-friendly touch targets.',
      role: 'UI/UX & Responsive Web Designer',
      duration: '2.5 Months',
      team: 'Solo Project',
      deliverables: ['Responsive Web UI', 'Component Library', 'Design Tokens', 'User Usability Test Matrix'],
      problemStatement: 'Most fitness applications overwhelm novices with dense exercise scientific metrics, paywalled routines, and rigid calendar schedules, causing 64% of new gym-goers to abandon their routine within 3 weeks.',
      goals: [
        'Create an approachable workout discovery system with clear visual difficulty ratings.',
        'Design a 100% fluid responsive grid adapting smoothly from 360px phones to 4K monitors.',
        'Build a zero-friction streak tracker that rewards consistency over intensity.',
        'Implement high-accessibility color contrast and typography for readable gym floor usage.'
      ],
      researchInsights: [
        {
          stat: '72%',
          label: 'Drop-off Due to Complexity',
          takeaway: 'Beginners cited intimidating rep/weight spreadsheets as their reason for quitting fitness apps.'
        },
        {
          stat: '89%',
          label: 'Prefer Video Quick Previews',
          takeaway: 'Users prioritized 5-second looping exercise form previews over lengthy written guides.'
        },
        {
          stat: '98%',
          label: 'Mobile-First Gym Usage',
          takeaway: 'Even desktop users relied primarily on mobile web when actually on the gym floor.'
        }
      ],
      personas: [
        {
          name: 'Marcus Vance',
          role: 'Junior Software Engineer & Gym Beginner',
          quote: 'I want to work out 3 times a week, but walking into the weight room without a clear plan makes me feel anxious.',
          painPoints: [
            'Not knowing which machines target which muscle groups',
            'Complicated gym tracking apps requiring manual weight entries per set',
            'Feeling intimidated by advanced bodybuilding jargon'
          ],
          goals: [
            'Simple 30-minute full-body routines with zero guesswork',
            'One-tap completion logging',
            'Encouraging streak tracker celebrating small consistency milestones'
          ]
        }
      ],
      informationArchitecture: [
        {
          title: 'Exercise Discovery Engine',
          nodes: ['Muscle Group Anatomy Selector', 'Equipment Availability Filter', 'Time Budget (15/30/45m)']
        },
        {
          title: 'Active Session Companion',
          nodes: ['Rest Timer HUD', 'Looping Form Demonstrations', 'Reps & Weight Incrementors']
        },
        {
          title: 'Habit & Growth Dashboard',
          nodes: ['Weekly Streak Rings', 'Volume Milestones', 'Personal Best Hall of Fame']
        }
      ],
      userFlow: [
        {
          step: '1. Rapid Intake',
          action: 'User chooses "Dumbbells Only" and "30 Minutes Available".',
          outcome: 'Curated 4-exercise routine generated instantly without registration walls.'
        },
        {
          step: '2. Live Routine',
          action: 'User taps "Start Workout". Screen locks into High-Contrast Active Mode.',
          outcome: 'Full-screen rest countdown triggers automatic audio chime on completion.'
        },
        {
          step: '3. Streak Celebration',
          action: 'Session finished. User taps "Mark Complete".',
          outcome: 'Dynamic confetti microinteraction celebrates 3-day weekly consistency goal.'
        }
      ],
      wireframes: [
        {
          title: 'Responsive Breakpoint Matrix',
          description: 'Engineered a modular 12-column desktop layout that collapses gracefully into a fluid single-column mobile experience.',
          annotations: ['Sticky mobile bottom action bar', 'Expandable workout summary drawer']
        },
        {
          title: 'Visual Muscle Selector',
          description: 'Interactive SVG anatomical map allowing users to tap chest, back, legs, or core to immediately filter exercises.',
          annotations: ['Vector hotspot touch areas', 'Dynamic badge counter']
        }
      ],
      visualDesignSystem: {
        colorTokens: [
          { name: 'Vibrant Violet', hex: '#9747FF', usage: 'Primary brand, streak badges, active buttons' },
          { name: 'Pulse Coral', hex: '#F24E1E', usage: 'High intensity cardio indicators and timer alert' },
          { name: 'Pure Obsidian', hex: '#121212', usage: 'Active workout dark mode contrast base' },
          { name: 'Crisp Silver', hex: '#E5E7EB', usage: 'Dividers and unselected workout chip outlines' }
        ],
        typographyScale: [
          { level: 'Timer Big', spec: 'JetBrains Mono 48px / Bold', usage: 'Rest countdown and set interval timer' },
          { level: 'Title', spec: 'Inter 24px / SemiBold', usage: 'Exercise titles and program headers' },
          { level: 'Body', spec: 'Inter 15px / Regular', usage: 'Execution instructions and form cues' }
        ],
        componentHighlights: [
          'Interactive Muscle Group SVG Filter',
          'Audio-Synced Rest Timer Component',
          'Responsive Routine Card with difficulty tags',
          'Gamified Weekly Streak Ring'
        ]
      },
      finalScreens: [
        {
          title: 'Personalized Workout Explorer',
          description: 'Filter routines by equipment, muscle group, and session length with instant visual previews and difficulty badges.',
          badge: 'Desktop & Mobile'
        },
        {
          title: 'High-Contrast Active Workout Screen',
          description: 'Zero-distraction timer interface designed for sweat-covered fingers and readable from 5 feet away on a gym bench.',
          badge: 'Active Mode'
        },
        {
          title: 'Progressive Habit & Streak Dashboard',
          description: 'Visual consistency tracker celebrating workouts completed without judgmental calorie shaming.',
          badge: 'Retention'
        }
      ],
      interactionDetails: [
        'Elastic pull-down rest timer incrementer (+15s / +30s).',
        'Satisfying checkmark stamp animation upon completing each workout set.',
        'Smooth CSS grid reflow across responsive window resizing.'
      ],
      learnings: [
        'Responsive design is not merely scaling down desktop cards; it requires rethinking touch targets and context of use.',
        'Beginners respond far better to consistency gamification than raw performance metrics.',
        'Semantic HTML and CSS clamp() units make typography effortlessly resilient.'
      ]
    }
  },
  {
    id: 'agenticos',
    number: '03',
    title: 'AgenticOS — AI Productivity Operating System',
    category: 'AI Productivity Platform · UI/UX Design',
    tagline: 'An Operating System for Autonomous Human-AI Workflows',
    description: 'An AI-powered productivity operating system designed to simplify complex workflows and make autonomous AI interactions more transparent and intuitive.',
    techStack: ['Figma', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    status: 'Case Study',
    highlights: [
      'Information architecture',
      'User flows',
      'Wireframes',
      'High-fidelity UI',
      'Interaction design'
    ],
    dimensions: { width: 920, height: 620 },
    canvasPosition: { x: 1480, y: 780 },
    accentColor: '#0D99FF',
    logoUrl: '/images/agenticos-logo.png',
    previewType: 'agenticos',
    caseStudy: {
      overview: 'AgenticOS reimagines desktop and web productivity by unifying fragmented tools—calendar, notes, tasks, documents, and agent orchestration—into a coherent, predictable canvas interface. Instead of trapping AI inside a miniature sidebar chatbot, AgenticOS treats AI agents as transparent, audited workspace collaborators.',
      role: 'Lead Product & Interaction Designer',
      duration: '4 Months (Q1 - Q2)',
      team: 'Solo Designer collaborating with 2 Full-Stack Engineers',
      deliverables: ['Design System', 'Interactive Prototypes', 'User Research Report', 'Figma Token Library', 'Component Specs'],
      problemStatement: 'Knowledge workers switch applications over 1,200 times a day, losing up to 4 hours in context fragmentation. Meanwhile, contemporary AI copilots suffer from a "Chatbot in a Sidebar" anti-pattern: they lack workspace context, have zero auditability, and generate ungrounded suggestions that users cannot safely inspect or revert.',
      goals: [
        'Eliminate application context switching by creating a unified spatial workspace.',
        'Replace opaque conversational AI prompts with inspectable agent action feeds and diff reviews.',
        'Establish a keyboard-first command system for rapid deep-work flow.',
        'Design a high-confidence visual feedback hierarchy for automated task approvals.'
      ],
      researchInsights: [
        {
          stat: '78%',
          label: 'Context Lost in Tab Sprawl',
          takeaway: 'Users surveyed identified tab juggling between Notion, Slack, and Google Calendar as their greatest daily cognitive drain.'
        },
        {
          stat: '64%',
          label: 'Distrust in Black-box AI',
          takeaway: 'Designers and PMs expressed reluctance to allow autonomous actions without a clear diff/review step.'
        },
        {
          stat: '3.2x',
          label: 'Faster Workflow Execution',
          takeaway: 'Testing revealed spatial canvas layouts paired with command palettes cut cross-tool execution times by over 3x.'
        }
      ],
      personas: [
        {
          name: 'Sarah Chen',
          role: 'Senior Product Manager',
          quote: 'I spend half my morning gathering meeting notes, Jira tickets, and stakeholder emails before I can even write a single PRD.',
          painPoints: [
            'Fragmented information silos across 5+ work tools',
            'Time wasted manually summarizing meeting outcomes',
            'AI tools hallucinate context because they only see active browser tabs'
          ],
          goals: [
            'One single morning briefing with actionable priority threads',
            'One-click agent summaries with direct citation links',
            'Confidence ratings before tasks trigger downstream syncs'
          ]
        },
        {
          name: 'Alex Rivera',
          role: 'Deep-Work Systems Engineer',
          quote: 'If an AI changes code or schedules an architecture review without showing me a diff, I will immediately disable it.',
          painPoints: [
            'Lack of undo history and auditability in generative platforms',
            'Constant mouse navigation interrupting focus states',
            'Visual clutter and flashy unnecessary animations'
          ],
          goals: [
            'Total keyboard controllability (Cmd+K / Vim bindings)',
            'Clean diff view with granular step-by-step reject/accept controls',
            'High contrast, distraction-free monochrome workspace'
          ]
        }
      ],
      informationArchitecture: [
        {
          title: 'Spatial Canvas Plane',
          nodes: ['Infinite Worksurface', 'Bi-directional Doc Cards', 'Live Execution Threads', 'Context Pins']
        },
        {
          title: 'Agent Intelligence Hub',
          nodes: ['Morning Briefing Deck', 'Action Approval Queue', 'Audit Timeline', 'Model Selection & Temperature']
        },
        {
          title: 'Omni-Command Bar',
          nodes: ['Fuzzy Tool Switcher', 'Prompt Synthesizer', 'Semantic Search Engine', 'Quick Macro Triggers']
        }
      ],
      userFlow: [
        {
          step: '1. Discovery & Trigger',
          action: 'User presses Cmd+K or selects an upcoming deadline frame on the canvas.',
          outcome: 'AgenticOS displays contextually relevant files, attendees, and related chat threads.'
        },
        {
          step: '2. Proactive Proposal',
          action: 'Agent drafts meeting agenda, compiles action items, and stages a Google Calendar update.',
          outcome: 'Visual diff banner appears with 94% confidence indicator.'
        },
        {
          step: '3. Review & Verification',
          action: 'User inspects proposed changes in split-pane view and edits one attendee note.',
          outcome: 'Changes sync immediately across external APIs with persistent undo snapshot.'
        }
      ],
      wireframes: [
        {
          title: 'Canvas-First Layout Exploration',
          description: 'Tested 3 distinct dashboard paradigms: triple-column linear, widget grid, and spatial infinite plane. The infinite canvas tested highest in task continuity.',
          annotations: ['Sticky contextual toolbar', 'Floating agent activity dock', 'Minimap for zoom orientation']
        },
        {
          title: 'Agent Action Card Anatomy',
          description: 'Engineered a standardized card design detailing agent rationale, external API permissions, rollback timer, and diff indicators.',
          annotations: ['Confidence badge with color-coded safety tiers', 'One-click Approve / Edit / Reject buttons']
        }
      ],
      visualDesignSystem: {
        colorTokens: [
          { name: 'Canvas Void', hex: '#0F172A', usage: 'Deep dark workspace backdrop' },
          { name: 'Electric Cobalt', hex: '#0D99FF', usage: 'Active selections, key actions, agent triggers' },
          { name: 'Verification Green', hex: '#14AE5C', usage: 'Approved agent actions and high confidence scores' },
          { name: 'Audit Amber', hex: '#FFAB00', usage: 'Pending reviews and external data sync warnings' }
        ],
        typographyScale: [
          { level: 'Display Hero', spec: 'Inter 36px / SemiBold -0.02em', usage: 'Primary canvas frames and views' },
          { level: 'Section Title', spec: 'Inter 20px / Medium -0.01em', usage: 'Card titles and modal headers' },
          { level: 'Body Text', spec: 'Inter 14px / Regular 1.5line-height', usage: 'Agent rationale and descriptions' },
          { level: 'Mono Spec', spec: 'JetBrains Mono 12px / Medium', usage: 'API endpoints, diff lines, timestamps' }
        ],
        componentHighlights: [
          'Adaptive Agent Card with expandable execution stack',
          'Keyboard-navigable Command HUD with fuzzy score rendering',
          'Diff Viewer with side-by-side token level highlighting',
          'Spatial Canvas Node with multi-touch zoom damping'
        ]
      },
      finalScreens: [
        {
          title: 'The Unified Morning Briefing Canvas',
          description: 'An expansive workspace presenting your schedule, urgent triage items, and pre-drafted agent summaries in a single high-clarity view.',
          badge: 'Primary View'
        },
        {
          title: 'Agent Diff & Verification Feed',
          description: 'Granular, reversible view of all background agent actions, ensuring total operator control without micromanagement.',
          badge: 'Trust & Safety'
        },
        {
          title: 'Command HUD & Semantic Navigator',
          description: 'Instant keystroke-driven omnibox bridging your local files, online tools, and agent workflows in milliseconds.',
          badge: 'Efficiency'
        }
      ],
      interactionDetails: [
        'Spring physics on card focus transitions for responsive spatial feedback.',
        'Continuous scrub slider for adjusting agent autonomy thresholds.',
        'Sound-dampened keyboard feedback indicators during command palette fuzzy search.'
      ],
      learnings: [
        'AI UX is fundamentally an exercise in transparency and trust engineering; without clear auditability, speed alone breeds skepticism.',
        'Spatial layouts require strict visual constraints (grids, magnetic snapping) to prevent user disorientation.',
        'Figma component tokenization directly enabled swift, production-ready React component mapping.'
      ]
    }
  },
  {
    id: 'lastmile',
    number: '04',
    title: 'Last Mile — Consumer Delivery Experience App',
    category: 'Logistics & Delivery Experience · UX/UI Case Study',
    tagline: 'Making Waiting Feel Shorter',
    description: 'A consumer-focused delivery experience designed to reduce uncertainty, improve tracking clarity, and make waiting feel shorter.',
    techStack: ['Figma', 'User Research', 'Design Systems', 'Mobile UX', 'Micro-interactions'],
    status: 'Case Study',
    highlights: [
      'User research',
      'Journey mapping',
      'Information architecture',
      'Tracking experience',
      'Mobile interface design'
    ],
    dimensions: { width: 920, height: 620 },
    canvasPosition: { x: 2480, y: 780 },
    accentColor: '#14AE5C',
    logoUrl: '/images/lastmile-logo.png',
    previewType: 'lastmile',
    caseStudy: {
      overview: 'Last Mile is a ground-up redesign of dense urban delivery experiences. Traditional delivery apps leave customers in the dark during the crucial final 100 meters, resulting in missed drop-offs, frustrating phone calls, and high cancellation anxiety. Last Mile eliminates doorstep ambiguity through live visual progress, pinpoint dropoff tags, and transparent courier collaboration.',
      role: 'Lead UX Researcher & Product Designer',
      duration: '3 Months',
      team: 'Independent End-to-End Case Study',
      deliverables: ['User Journey Map', 'Courier & Customer Personas', '9-Screen Mobile Prototype', 'Interactive Tracking Component'],
      problemStatement: '73% of delivery friction occurs during the final 100 meters: courier confusion at gated communities, ambiguous building entrance coordinates, and customer anxiety stemming from vague "Driver is nearby" notifications.',
      goals: [
        'Transform passive order waiting into an engaging, transparent, and calm experience.',
        'Enable exact doorstep precision with visual entrance pins and gate intercom notes.',
        'Reduce customer-courier phone calls by 60% through proactive visual status indicators.',
        'Optimize mobile checkout ergonomics for one-handed thumb-zone operation.'
      ],
      researchInsights: [
        {
          stat: '81%',
          label: 'Anxiety from Vague Maps',
          takeaway: 'Customers reported repeatedly checking maps when the car icon hovered without progressing for over 2 minutes.'
        },
        {
          stat: '68%',
          label: 'Failed Entrance Drops',
          takeaway: 'Couriers stated that high-rise apartment numbers without gate access instructions caused 70% of delays.'
        },
        {
          stat: '4.8/5',
          label: 'Usability Score',
          takeaway: 'Our pinpoint dropoff prototype scored 4.8 out of 5 in user comprehension during prototype testing.'
        }
      ],
      personas: [
        {
          name: 'Priya Sundaram',
          role: 'Busy Urban Professional',
          quote: 'I am frequently on Zoom meetings while waiting for lunch. If the courier calls 3 times because he cannot find Tower B, it ruins my meeting.',
          painPoints: [
            'Unpredictable arrival windows interrupting meetings',
            'Unclear drop-off options (leave at door vs hand to security)',
            'Overly complicated refund workflows when items arrive cold'
          ],
          goals: [
            'Silent, highly accurate arrival alerts with 3-minute notice',
            'Pre-saved delivery preferences with gate photo references',
            'One-swipe tip and rating upon seamless doorstep receipt'
          ]
        },
        {
          name: 'Karthik Raja',
          role: 'High-Density Courier Partner',
          quote: 'Finding parking and deciphering apartment numbering systems in gated communities eats up all my delivery earnings.',
          painPoints: [
            'Customers not picking up urgent arrival calls',
            'Lack of parking guidance at large condominium complexes',
            'Inability to read tiny screen text in direct sunlight'
          ],
          goals: [
            'High-contrast, large touch targets for outdoor visibility',
            'Customer gate passcode displayed on lock screen notification',
            'Visual photo verification of doorstep drops'
          ]
        }
      ],
      informationArchitecture: [
        {
          title: 'Store & Discovery',
          nodes: ['Curated Local Vendors', 'Dietary Quick Filters', 'Real-Time Preparation Windows']
        },
        {
          title: 'Precision Dropoff Setup',
          nodes: ['Map Pin Intercom Coordinates', 'Entrance Photo Reference', 'Dropoff Safe Box Instructions']
        },
        {
          title: 'Live Tracking HUD',
          nodes: ['Sub-meter Courier Telemetry', 'ETA Predictor with Traffic Variance', 'Instant Message Shortcuts']
        }
      ],
      userFlow: [
        {
          step: '1. Order Staging',
          action: 'User customizes meal and reviews transparent delivery fee breakdown.',
          outcome: 'Estimated transit buffer updates dynamically based on current restaurant kitchen queue.'
        },
        {
          step: '2. Dropoff Pinpoint',
          action: 'User taps "Pinpoint Dropoff" and confirms "Tower B - East Gate Security".',
          outcome: 'Driver app receives geo-fence pin and intercom code automatically.'
        },
        {
          step: '3. Calibrated Delivery HUD',
          action: 'Driver enters final 500m perimeter.',
          outcome: 'App transitions to "Doorstep Countdown" mode with gentle haptic countdown and silent drop confirmation.'
        }
      ],
      wireframes: [
        {
          title: 'Thumb-Zone Layout Explorations',
          description: 'Tested bottom-sheet interaction models versus full-screen views. Bottom-sheet modals scored 42% faster in single-hand usability tests.',
          annotations: ['Primary CTAs within 60% thumb reach', 'Dismissible tracking sheet with swipe gestures']
        },
        {
          title: 'Dropoff Precision Interface',
          description: 'Created a split-screen mapping layout allowing users to place precise entrance pins separate from road addresses.',
          annotations: ['Interactive pin snapping', 'Pre-populated common instructions like "Leave with Concierge"']
        }
      ],
      visualDesignSystem: {
        colorTokens: [
          { name: 'Transit Forest', hex: '#14AE5C', usage: 'Delivery active progress and success states' },
          { name: 'Road Slate', hex: '#1E293B', usage: 'Map routes, typography, primary buttons' },
          { name: 'Warm Amber', hex: '#F59E0B', usage: 'Courier en route warnings and transit delays' },
          { name: 'Calm Tint', hex: '#F0FDF4', usage: 'Subtle status container backgrounds' }
        ],
        typographyScale: [
          { level: 'Heading 1', spec: 'Inter 28px / Bold', usage: 'Active status headers and ETA timer' },
          { level: 'Subhead', spec: 'Inter 16px / SemiBold', usage: 'Vendor names and order items' },
          { level: 'Body', spec: 'Inter 14px / Regular', usage: 'Driver messages and delivery guidelines' },
          { level: 'Caption', spec: 'Inter 12px / Medium', usage: 'Timestamps and receipt line items' }
        ],
        componentHighlights: [
          'Pulse ETA Gauge with animated transit milestone pips',
          'Bottom-sheet swipeable drawer with elastic resistance',
          'High-contrast Courier Status Banner optimized for direct sunlight'
        ]
      },
      finalScreens: [
        {
          title: 'Live Doorstep Countdown & Route HUD',
          description: 'Real-time telemetry map showing exact courier vehicle orientation, street entrance guidelines, and instant chat options.',
          badge: 'Tracking Hero'
        },
        {
          title: 'Pinpoint Building Entrance Locator',
          description: 'Micro-location selector letting users drag pins directly to apartment complex gate entrances, avoiding driver dead-ends.',
          badge: 'Signature Feature'
        },
        {
          title: 'One-Swipe Biometric Checkout',
          description: 'Friction-free, single-gesture order confirmation displaying comprehensive price transparency and delivery guarantee.',
          badge: 'Conversion'
        }
      ],
      interactionDetails: [
        'Haptic buzz when the courier is within 100 meters of the customer door.',
        'Interactive map pin with tactile spring physics when adjusted.',
        'Swipe-to-confirm checkout slider reducing accidental multiple taps.'
      ],
      learnings: [
        'Perceived waiting time is significantly reduced when users are shown why a delay is occurring rather than just a numeric ETA.',
        'Designing for dual user personas (customer vs. courier) highlighted critical empathy gaps in mainstream logistics apps.',
        'High contrast outdoors is not an aesthetic choice—it is a safety and usability requirement.'
      ]
    }
  }
];
