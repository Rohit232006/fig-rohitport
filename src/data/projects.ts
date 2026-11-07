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
    id: 'agenticos',
    number: '02',
    title: 'Agentic OS – Where AI Agents Meet Productivity',
    category: 'AI Productivity Platform · UI/UX Design',
    tagline: 'Where AI Agents Meet Productivity',
    description: 'An AI-powered productivity operating system designed to bring intelligent agents, automation and productivity workflows together in one unified experience.',
    behanceUrl: 'https://www.behance.net/gallery/257841389/AgenticOS-Where-AI-Agents-Meet-Productivity',
    techStack: ['Next.js', 'React.js', 'TypeScript', 'Tailwind CSS', 'Figma'],
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
    number: '03',
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
