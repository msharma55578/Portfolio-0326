# Portfolio Website Plan

## Overview
Single-page portfolio for Chander Mohan (CM). Pure HTML/CSS/JS. Two sections initially: Home and About. Remaining sections (Skills, Experience, Projects, Contact) are placeholder stubs with IDs only so scroll targets work.

---

## File Structure
```
portfolio/
├── index.html                  (~120 lines)
├── css/
│   ├── variables.css           (~60 lines)  — all CSS custom properties (dark + light)
│   ├── base.css                (~90 lines)  — reset, typography, shared utilities, section headings, buttons
│   ├── navbar.css              (~80 lines)  — fixed navbar, progress bar, hamburger
│   ├── hero.css                (~100 lines) — hero section layout + grid bg
│   ├── about.css               (~120 lines) — about layout, profile card, stats grid
│   ├── skills.css              (~80 lines)  — skill bars, chip cloud, animations
│   ├── contact.css             (~100 lines) — contact layout, info cards, form, send button
│   ├── footer.css              (~40 lines)  — footer layout, dark + light theme
│   └── animations.css          (~60 lines)  — keyframes (bounce, fade), scroll-reveal classes
├── js/
│   ├── theme.js                (~35 lines)  — dark/light toggle + localStorage persistence
│   ├── scroll.js               (~70 lines)  — smooth scroll + navbar offset + progress bar + active nav
│   ├── animations.js           (~30 lines)  — IntersectionObserver for .reveal elements
│   └── contact.js              (~40 lines)  — form validation + send handler
└── assets/                     — drop profile photo here (e.g. profile.jpg)
```
All files strictly under 150 lines, targeting ~100.

---

## Design Tokens (CSS Custom Properties)

All tokens live in `css/variables.css`. Key accent color is `#7c3aed` (dark) / `#6d28d9` (light).

### Dark Theme (default, :root)

| Token                | Value                                                                                   | Usage                      |
|----------------------|-----------------------------------------------------------------------------------------|----------------------------|
| --bg-primary         | #0d0d14                                                                                 | Page background            |
| --bg-secondary       | rgba(255,255,255,0.04)                                                                  | Subtle section backgrounds |
| --text-primary       | #ffffff                                                                                 | Headings, body text        |
| --text-secondary     | rgba(255,255,255,0.65)                                                                  | Subtitles, muted text      |
| --accent             | #7c3aed                                                                                 | Primary purple accent      |
| --accent-light       | #a855f7                                                                                 | Gradient end, hover states |
| --accent-glow        | rgba(124,58,237,0.35)                                                                   | Box-shadow glows           |
| --card-bg            | rgba(255,255,255,0.06)                                                                  | Stat cards, profile card   |
| --card-border        | rgba(255,255,255,0.12)                                                                  | Card borders               |
| --btn-outline-bg     | rgba(255,255,255,0.08)                                                                  | Outline button background  |
| --btn-outline-border | rgba(255,255,255,0.25)                                                                  | Outline button border      |
| --nav-bg             | rgba(13,13,20,0.85)                                                                     | Frosted navbar background  |
| --grid-line          | transparent                                                                             | No grid in dark mode       |
| --hero-glow          | radial-gradient(ellipse 70% 50% at 50% 40%, rgba(124,58,237,0.3) 0%, transparent 70%) | Hero overlay               |

### Light Theme ([data-theme="light"])

| Token                | Value                   | Usage                       |
|----------------------|-------------------------|-----------------------------|
| --bg-primary         | #f5f3ff                 | Page background             |
| --bg-secondary       | rgba(0,0,0,0.03)        | Subtle section backgrounds  |
| --text-primary       | #1a1a2e                 | Headings, body text         |
| --text-secondary     | #4a4a6a                 | Subtitles, muted text       |
| --accent             | #6d28d9                 | Primary purple accent       |
| --accent-light       | #7c3aed                 | Gradient end, hover states  |
| --accent-glow        | rgba(109,40,217,0.15)   | Box-shadow glows            |
| --card-bg            | #ffffff                 | Stat cards, profile card    |
| --card-border        | rgba(109,40,217,0.15)   | Card borders                |
| --btn-outline-bg     | rgba(109,40,217,0.08)   | Outline button background   |
| --btn-outline-border | rgba(109,40,217,0.3)    | Outline button border       |
| --nav-bg             | rgba(245,243,255,0.85)  | Frosted navbar background   |
| --grid-line          | rgba(0,0,0,0.06)        | Subtle grid lines in hero   |
| --hero-glow          | none                    | No glow overlay in light    |

### Color Usage Map

- **Navbar**: --nav-bg (frosted), --accent (logo), --text-primary (links)
- **Hero**: --bg-primary + --hero-glow, --accent gradient (CTA button), --btn-outline-* (outline button)
- **About profile card**: gradient from --accent → #4f46e5 (dark) / #ede9fe → #fce7f3 (light)
- **Stat cards**: --card-bg, --card-border, --accent (icon)
- **Progress bar**: linear-gradient(--accent, --accent-light)
- **Section headings**: gradient from --accent to --accent-light (webkit text fill)

---

## Sections & Components

### 1. Navbar (fixed)
- Left: "CM" logo in --accent, bold, links to #home
- Center/Right: nav links (Home, About, Skills, Experience, Projects, Contact)
- Right-most: theme toggle button (moon icon dark / sun icon light)
- backdrop-filter: blur(12px); background: var(--nav-bg)
- Active link underline/highlight based on current scroll section
- Scroll progress bar: thin (3-4px) vertical bar on the far right edge of the page, full viewport height, filled top-to-bottom as user scrolls. Color: linear-gradient(--accent, --accent-light)
- **Mobile/Tablet (≤768px)**: hamburger button (☰) replaces nav links; clicking opens a full-width dropdown menu below navbar; close on link click or outside click; hamburger icon toggles to ✕ when open

### 2. Hero Section (#home)
- Full viewport height (100vh)
- Background: var(--bg-primary) + var(--hero-glow) overlay + grid lines in light mode only
- Center-aligned content:
  - Pill badge: "Welcome to my portfolio" — border, rounded, subtle bg
  - H1: "Chander Mohan" — 80px, font-weight 800
  - Subtitle: "Senior Frontend Developer | AI Integration Specialist" — 22px
  - Bio: "Building scalable, AI-powered user experiences" — 16px, --text-secondary
  - CTA row: "View Projects" (solid purple gradient) + "Contact Me" (outline style)
  - Social icons row: GitHub (link), LinkedIn (link), Email (mailto:m.sharma55578@gmail.com) — 44x44 rounded squares
  - Bouncing arrow (↓) below social icons — CSS keyframe bounce animation

### 3. About Section (#about)
- --bg-primary background
- Section heading: "About Me" — gradient purple text, centered, with short purple underline bar below
- Two-column layout (flex, ~40/60 split):
  - LEFT: Profile card
    - Gradient background card (purple-to-indigo-dark in dark / lavender-to-pink-light in light)
    - Avatar: if assets/profile.jpg exists → `<img>`; else → purple circle with "CM" initials (JS checks image load, falls back to initials div)
    - Role: "Senior Frontend Developer"
    - Location: "Delhi, India"
  - RIGHT: Bio text + stats
    - **Paragraph 1**: "I'm a passionate <span class='accent'>Senior Frontend Developer</span> based in Delhi, India, specializing in building high-performance web applications with cutting-edge technologies."
    - **Paragraph 2**: "With over 5 years of experience, I've led the development of AI-powered chat platforms, enterprise ERP systems, and learning applications. My expertise lies in React, Redux, and integrating multiple AI models like OpenAI, Gemini, and Claude to create seamless user experiences."
    - **Paragraph 3**: "I'm passionate about UI/UX optimization, performance engineering, and mentoring teams to deliver scalable solutions. When I'm not coding, you might find me playing Kho-Kho at the national level or exploring new AI technologies."
    - 2x2 stats grid:
      - `</>` · **5+ Years** · Frontend Development
      - ✦ · **AI Integration** · Multi-LLM Platforms
      - ⚡ · **Performance** · Core Web Vitals
      - 👥 · **Leadership** · Team & Mentoring
    - Each stat: --card-bg bg, --card-border border, icon in --accent color

### 4. Contact Section (#contact)
- `--bg-primary` background
- Section heading: "Get In Touch" — gradient purple text, centered, short purple underline bar below
- Subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision." — centered, `--text-secondary`
- Two-column layout (flex, ~50/50 split):
  - LEFT: **Contact Information**
    - Sub-heading: "Contact Information" — `--text-primary`, bold
    - 4 info cards (`--card-bg` bg, `--card-border` border, rounded):
      - 📧 Email — `m.sharma55578@gmail.com`
      - 📍 Location — `Delhi, India`
      - 💼 LinkedIn — `linkedin.com/in/chander-mohan-b4a932134`
      - 🐙 GitHub — `github.com/msharma55578`
    - Each card: purple gradient icon square (44px) on left, label (`--text-secondary`, small) + value (`--text-primary`) on right
  - RIGHT: **Contact Form**
    - Field labels: `--text-primary`, medium weight
    - Field: "Your Name" — text input, placeholder "John Doe"
    - Field: "Your Email" — email input, placeholder "john@example.com"
    - Field: "Your Message" — textarea (~6 rows), placeholder "Tell me about your project..."
    - Button: "Send Message" with send/arrow icon — full-width, solid purple gradient (`--accent` → `--accent-light`), white text
    - All inputs: `--card-bg` background, `--card-border` border, `--text-primary` text, rounded-lg
    - Focus state: border color switches to `--accent`, subtle box-shadow glow

#### Light Theme Specifics
- Background: `--bg-primary` = `#f5f3ff` (very light lavender) — same token, adapts automatically
- Info cards: `--card-bg` = `#ffffff`, `--card-border` = `rgba(109,40,217,0.15)` — white cards with purple tint border
- Sub-heading "Contact Information": `--text-primary` = `#1a1a2e` (near-black)
- Card label text (e.g. "Email", "Location"): `--text-secondary` = `#4a4a6a`
- Card value text: `--text-primary` = `#1a1a2e`
- Form inputs: `--card-bg` = `#ffffff`, border `rgba(109,40,217,0.15)`, text `#1a1a2e`
- Input placeholder: `--text-secondary` = `#4a4a6a`
- "Send Message" button: unchanged — purple gradient works on both themes
- Icon squares: keep purple gradient (`--accent` → darker purple) — same on both themes
- Section heading underline bar: `--accent` = `#6d28d9`

### 5. Skills Section (#skills)
- `--bg-primary` background
- Section heading: "Skills & Expertise" — gradient purple text, centered, short purple underline bar below
- Layout: single column, full width
- Grouped by category with sub-headings in `--accent` color, bold, left-aligned

#### Categories & Skills

**Frontend Technologies**
| Skill                   | Level |
|-------------------------|-------|
| React                   | 95%   |
| Redux                   | 90%   |
| JavaScript/TypeScript   | 92%   |
| HTML/CSS                | 95%   |
| Tailwind CSS            | 88%   |

**Tools & Others**
| Skill                   | Level |
|-------------------------|-------|
| Git & GitHub            | 90%   |
| OpenAI Integration      | 85%   |
| UI/UX Design            | 85%   |
| C++                     | 75%   |
| Code Reviews            | 88%   |

#### Skill Bar Design
- Each skill row: skill name (left, `--text-primary`) + percentage label (right, `--text-primary`) on one line, progress bar below
- **Track**: full-width bar, ~8px tall, rounded, background `--card-border` (dark gray in dark / light gray in light)
- **Fill**: gradient `linear-gradient(90deg, var(--accent), var(--accent-light))` — purple to blue
- Fill `width` corresponds to the percentage value
- Spacing between skill rows: ~24px

#### Animation Behavior
- **On page load**: all bars have `width: 0` — empty/invisible
- **On scroll into view** (IntersectionObserver, fire-once):
  - Bars animate smoothly from `width: 0` to their target `width: XX%`
  - Use CSS `transition: width 1s ease` (or similar)
  - **Stagger**: each bar starts slightly after the one above — use incremental `transition-delay` (e.g. 0s, 0.1s, 0.2s, 0.3s…) continuously across ALL bars in both categories (React → Redux → … → Tailwind → Git → OpenAI → … → Code Reviews)
- **Fire-once**: once animated, bars stay filled even if user scrolls away and back — observer `unobserve()` after triggering

#### Theme Behavior
- Dark: track is `rgba(255,255,255,0.12)` / fill is purple→blue gradient
- Light: track is light gray `rgba(0,0,0,0.08)` / fill is same purple→blue gradient

#### Technologies I Work With (chip cloud)
- Sub-heading: "Technologies I Work With" — `--text-primary`, bold, centered, margin-top ~60px
- Chip cloud: flex-wrap, centered, gap ~12px
- **Chips** (row 1): React, Redux, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, OpenAI, Gemini
- **Chips** (row 2): Claude, Git, UI/UX, C++, REST API, Node.js, Vite
- Each chip: pill shape (rounded-full), padding ~10px 24px, `--card-bg` background, `--card-border` border, `--text-secondary` text, font-size 14px
- Hover: `border-color: var(--accent)`

##### Chip Animation
- **On load**: all chips have `opacity: 0`, `scale(0.8)` — invisible
- **On scroll into view** (IntersectionObserver on the chip container, fire-once):
  - Chips pop in left-to-right, top row first then bottom row
  - Each chip: `transition: opacity 0.4s ease, transform 0.4s ease`
  - Stagger: incremental `transition-delay` — 0ms, 60ms, 120ms, 180ms… across all chips sequentially
  - Target state: `opacity: 1`, `scale(1)`
- **Fire-once**: observer `unobserve()` after triggering — no re-animation on scroll back

##### Chip Theme
- Dark: `--card-bg` (dark glass), `--card-border` (subtle white), `--text-secondary` (white 65%)
- Light: `--card-bg` (#ffffff), `--card-border` (purple tint), `--text-secondary` (#4a4a6a)

### 6. Experience Section (#experience)
- `--bg-primary` background
- Section heading: "Experience Timeline" — gradient purple text, centered, short purple underline bar below

#### Timeline Layout
- Vertical center line: 2px wide, `--accent` color, runs full height of the timeline content
- Entries alternate sides: **odd entries → card on right, date on left**; **even entries → card on left, date on right**
- Each entry row: a **dot** on the center line (12px circle, `--accent` border, `--bg-primary` fill), a **date badge** and a **card** on opposite sides

#### Date Badge
- Pill shape: `--accent` gradient background, white text, ~14px, bold
- Calendar icon (📅 or SVG) before the text
- Positioned near the center line, on the **opposite side** from the card

#### Experience Card
- `--card-bg` background, `1px solid --card-border` border, `border-radius: 14px`, padding ~32px
- **Header row**: purple gradient icon square (44px, building/briefcase icon) + job title (`--text-primary`, bold, 18px) + company name (`--accent`, bold) + location (`--text-secondary`, 14px)
- **Summary**: `--text-primary`, bold, 16px, margin-top
- **Bullet list**: `▷` marker in `--accent` color, `--text-secondary` text, 15px

#### Experience Data

**Entry 1 (right side)**
- Date: **2022 - Present**
- Title: Senior Frontend Developer
- Company: GALE
- Location: Bangalore, India
- Summary: Leading frontend development for AI-powered platforms
- Bullets:
  - Built multi-LLM AI chat platform integrating OpenAI, Gemini, and Claude
  - Implemented advanced session management and project workflows
  - Optimized application performance by 40% through code splitting
  - Led code reviews and mentored junior developers

**Entry 2 (left side)**
- Date: **2020 - 2022**
- Title: Frontend Developer
- Company: K12 Techno Services
- Location: Bangalore, India
- Summary: Developed enterprise solutions for educational platforms
- Bullets:
  - Developed Everest ERP platform serving 10,000+ users
  - Created Sure Learning App with interactive UI components
  - Implemented responsive designs for multiple device types
  - Collaborated with cross-functional teams for feature delivery

**Entry 3 (right side)**
- Date: **2019 - 2020**
- Title: Frontend Developer Intern
- Company: Interglobe Technology
- Location: Bangalore, India
- Summary: Gained hands-on experience in modern web development
- Bullets:
  - Worked on React-based web applications
  - Learned best practices in version control and agile development
  - Contributed to UI/UX improvements
  - Participated in code reviews and team discussions

#### Animation
- **On load**: all cards and date badges are invisible — `opacity: 0`, `translateY(40px)` (below their final position)
- **On scroll into view** (IntersectionObserver on each timeline entry, fire-once):
  - Card + date badge smoothly animate upward: `translateY(40px) → translateY(0)`, `opacity: 0 → 1`
  - `transition: opacity 0.6s ease, transform 0.6s ease`
  - Entries stagger: each entry triggers when **it** enters the viewport (not all at once) — natural stagger as user scrolls down
- **Fire-once**: `unobserve()` after triggering

#### Theme
- Dark: dark glass cards, purple timeline line + dots, purple gradient date badges
- Light: white cards with purple-tint border, purple timeline line + dots, purple gradient date badges

#### Mobile (≤768px)
- Timeline switches to **single column** (all cards on the right of the line, or line on far left)
- Date badges above each card, centered or left-aligned
- Cards full-width

### 7. Projects Section (#projects)
- `--bg-primary` background
- Section heading: "Featured Projects" — gradient purple text, centered, short purple underline bar below
- Layout: 2-column grid (`grid-template-columns: 1fr 1fr`), gap ~32px

#### Project Card (front — default view)
Each card is a **flip card** using CSS 3D `transform: rotateY(180deg)` on click.

- Card container: `--card-bg` background, `1px solid --card-border` border, `border-radius: 14px`, `overflow: hidden`
- **Image area** (top ~40% of card): gradient placeholder background + centered lightbulb icon + project slug label
  - Project 1: pink→purple gradient, label "ai-chat-interface"
  - Project 2: teal→blue→dark gradient, label "erp-dashboard"
- **Body** (below image):
  - Title: `--text-primary`, bold, 20px
  - Description: `--text-secondary`, 15px, 2-3 lines
  - Tech chips: flex-wrap, small pills (`--card-bg` bg, `--card-border` border, `--text-secondary` text, ~13px)
  - **Action row** (bottom of card):
    - "View Details ↗" button — full-width purple gradient, white text; **onClick → flips card to back**
    - GitHub icon button (square, `--card-bg` bg, `--card-border` border) — **onClick → opens GitHub repo link in new tab** (does NOT flip)

#### Project Card (back — after flip)
Shown after clicking "View Details". Card rotates Y-axis 180° to reveal back face.

- **Header bar**: same gradient as front image area + project title (white, bold) + ✕ close button (top-right)
  - **onClick ✕ → flips card back to front**
- **Body**:
  - Extended description: `--text-secondary`, 15px
  - **Stats row**: 3 mini stat cards in a row
    - 📅 Duration / value (e.g. "6 months")
    - 👥 Team / value (e.g. "5 developers")
    - ⭐ Role / value (e.g. "Lead Frontend Developer")
    - Each: `--card-bg` bg, `--card-border` border, centered, icon above label above value
  - **Key Highlights**: sub-heading (⭐ "Key Highlights") + bullet list with `▷` markers, `--text-secondary`
  - **Action row**: "Live Demo ↗" (purple gradient button) + "Source Code" (outline button with GitHub icon)
    - "Live Demo" → opens project URL in new tab
    - "Source Code" → opens GitHub repo in new tab

#### Project Data

**Project 1 — AI Chat Platform**
- Gradient: pink → purple
- Slug: ai-chat-interface
- Title: AI Chat Platform
- Front description: A sophisticated multi-LLM chat platform integrating OpenAI GPT-4, Google Gemini, and Anthropic Claude.
- Tech chips: React, Redux, TypeScript, OpenAI API, Gemini API, Tailwind CSS
- Back extended description: A sophisticated multi-LLM chat platform integrating OpenAI GPT-4, Google Gemini, and Anthropic Claude. Features include real-time conversations, session management, and intelligent context switching.
- Stats: Duration — 6 months, Team — 5 developers, Role — Lead Frontend Developer
- Key Highlights:
  - Integrated 3 different AI models seamlessly
  - Implemented real-time message streaming
  - Built context-aware conversation management
  - Optimized performance for 1000+ concurrent users
- Live Demo: `#` (placeholder)
- GitHub: `#` (placeholder)

**Project 2 — Everest ERP Platform**
- Gradient: teal → blue → dark
- Slug: erp-dashboard
- Title: Everest ERP Platform
- Front description: Enterprise resource planning system for educational institutions. Handles student management, attendance tracking, grade management, and financial operations.
- Tech chips: React, Redux, JavaScript, REST API, Material UI
- Back extended description: Enterprise resource planning system for educational institutions. Handles student management, attendance tracking, grade management, and financial operations with 10,000+ active users.
- Stats: Duration — 1 year, Team — 8 developers, Role — Senior Frontend Developer
- Key Highlights:
  - Managed 10,000+ active users across multiple institutions
  - Built complex data tables with advanced filtering
  - Implemented role-based access control
  - Reduced page load time by 40%
- Live Demo: `#` (placeholder)
- GitHub: `#` (placeholder)

#### Flip Animation
- Card has `perspective: 1000px` on the container
- Inner wrapper has `transform-style: preserve-3d`, `transition: transform 0.6s ease`
- Front face: `backface-visibility: hidden`
- Back face: `backface-visibility: hidden`, `transform: rotateY(180deg)` (pre-rotated, hidden by default)
- On click "View Details": add `.flipped` class → inner wrapper gets `transform: rotateY(180deg)` → front hides, back shows
- On click ✕: remove `.flipped` class → back to front

#### Scroll Animation
- Cards start `opacity: 0`, `translateY(40px)` — slide up + fade in on scroll (same as experience cards)
- Fire-once

#### Theme
- Dark: dark glass card body, gradient image area unchanged, dark chips
- Light: white card body with purple-tint border, gradient image area unchanged, white chips

#### Mobile (≤768px)
- Grid switches to single column (`grid-template-columns: 1fr`)
- Cards full-width, flip still works

### 8. Footer
- Sits below the Contact section, outside any `<section>` — inside `<footer>`
- Styles in `css/footer.css`
- Thin top border: `1px solid --card-border`
- Background: `--bg-primary` (inherits theme automatically)
- Single row, 3-column layout (`display: flex; justify-content: space-between; align-items: center`), `padding: 24px 60px`
- **Left**: `© 2026 Chander Mohan. All rights reserved.` — `--text-secondary`, small (14px)
- **Center**: `Made with ❤️ in Bangalore` — `--text-secondary`, small (14px); heart is red (`#ef4444`)
- **Right**: `Back to Top ↑` — `--text-secondary`, small (14px); clicking smooth-scrolls to `#home` (handled in `scroll.js`)

#### Light Theme Specifics
- Background: `#f5f3ff` (via `--bg-primary`)
- Top border: `rgba(109,40,217,0.15)` (via `--card-border`)
- All text: `#4a4a6a` (via `--text-secondary`)
- Heart: `#ef4444` (red — same both themes)

#### Dark Theme Specifics
- Background: `#0d0d14` (via `--bg-primary`)
- Top border: `rgba(255,255,255,0.12)` (via `--card-border`)
- All text: `rgba(255,255,255,0.65)` (via `--text-secondary`)

---

## JavaScript Features

### Theme Toggle
- Default: dark (check localStorage first)
- Toggle: set/remove `data-theme="light"` on `<html>`
- Persist choice in localStorage key `"theme"`
- Toggle button icon: moon (dark mode) / sun (light mode) using Unicode or inline SVG

### Smooth Scroll with Navbar Offset
- All anchor links (#home, #about, etc.), "View Projects" → #projects, "Contact Me" → #contact
- JS smooth scroll: calculate navbar height dynamically, offset scroll target by navbar height
- Use `e.preventDefault()` + `window.scrollTo({ top: offsetTop - navHeight, behavior: 'smooth' })`

### Scroll Progress Bar
- `window.scroll` event listener
- `progress = scrollY / (scrollHeight - clientHeight) * 100`
- Set `height: progress%` on the progress bar element

### Active Nav Link
- IntersectionObserver watching each section
- Add/remove `.active` class on nav links based on which section is most in view

### Scroll Reveal Animations
- IntersectionObserver for `.reveal` class elements
- Add `opacity:0`, `translateY(20px)` initially; add `.visible` class on intersect → transition to `opacity:1`, `translateY(0)`

### Profile Image Fallback
- `<img id="profile-img" src="assets/profile.jpg">`
- `onerror`: hide img, show `.initials-avatar` div

### Contact Form Handler (`contact.js`)
- On submit: `e.preventDefault()`
- Validate: name not empty, email matches regex, message not empty
- Show inline error messages below each invalid field
- On success: change button text to "Message Sent ✓", disable button briefly
- No backend needed yet — can wire to Formspree / EmailJS later (URL to be added in Action Items)

---

## Content
- **Name**: Chander Mohan
- **Title**: Senior Frontend Developer | AI Integration Specialist
- **Tagline**: Building scalable, AI-powered user experiences
- **Location**: Delhi, Delhi 110073
- **Phone**: +91 92119 09024
- **Email**: m.sharma55578@gmail.com
- **GitHub**: https://github.com/msharma55578
- **LinkedIn**: https://www.linkedin.com/in/chander-mohan-b4a932134/
- **Bio**: see bio paragraphs below (confirmed from design)
- **Stats**: 5+ Years FE Dev, AI Integration, Performance (Core Web Vitals), Leadership (Team & Mentoring)

### Bio Paragraphs (About Me — right column)
1. "I'm a passionate **Senior Frontend Developer** based in Delhi, India, specializing in building high-performance web applications with cutting-edge technologies."
2. "With over 5 years of experience, I've led the development of AI-powered chat platforms, enterprise ERP systems, and learning applications. My expertise lies in React, Redux, and integrating multiple AI models like OpenAI, Gemini, and Claude to create seamless user experiences."
3. "I'm passionate about UI/UX optimization, performance engineering, and mentoring teams to deliver scalable solutions. When I'm not coding, you might find me playing Kho-Kho at the national level or exploring new AI technologies."

---

## Action Items (Things You Need to Provide)

### Assets
- [ ] **Profile photo** — will be added to `assets/` later. "CM" initials fallback will show until then.

### Links & Personal Info ✅ Resolved
- [x] **Email**: `m.sharma55578@gmail.com`
- [x] **Phone**: `+91 92119 09024`
- [x] **Location**: `Delhi, Delhi 110073`
- [x] **GitHub URL**: `https://github.com/msharma55578`
- [x] **LinkedIn URL**: `https://www.linkedin.com/in/chander-mohan-b4a932134/`

### Implementation Decisions ✅ Resolved
- [x] **Contact form**: frontend validation only (no backend/Formspree needed)
- [x] **Mobile navbar**: hamburger menu — mobile & tablet friendly (≤768px)
- [x] **Footer CSS**: separate `css/footer.css`

### Content ✅ Resolved
- [x] **Bio paragraphs** — 3 paragraphs confirmed (see Content section above)
- [x] **Performance stat label** — "Performance" / "Core Web Vitals"
- [x] **Leadership stat label** — "Leadership" / "Team & Mentoring"

---

## Implementation Steps

---

### Step 1 — Foundation (HTML skeleton + CSS tokens)
**Files:** `index.html`, `css/variables.css`, `css/base.css`

- Create `index.html` with `<head>`, all CSS/JS `<link>`/`<script>` tags, and empty section shells: `#home`, `#about`, `#skills`, `#experience`, `#projects`, `#contact`, `<footer>`
- Create `css/variables.css` with all dark + light theme tokens
- Create `css/base.css` with reset, typography, `.section-heading` + underline bar, shared button styles

**Test after Step 1:**
- [ ] Open `index.html` in browser — page loads without errors
- [ ] Page background is `#0d0d14` (dark)
- [ ] No layout broken, no console errors

---

### Step 2 — Navbar + Theme Toggle
**Files:** `css/navbar.css`, `js/theme.js`

- Fixed navbar: CM logo, nav links, theme toggle button
- Dark/light toggle with `localStorage` persistence
- Hamburger menu for mobile/tablet (≤768px)

**Test after Step 2:**
- [ ] Navbar is fixed at top, frosted glass effect visible
- [ ] Click theme toggle — page switches between dark (`#0d0d14`) and light (`#f5f3ff`)
- [ ] Refresh page — theme preference is remembered
- [ ] Resize to mobile width — hamburger appears; clicking opens/closes nav links
- [ ] Toggle icon shows moon (dark mode) / sun (light mode)

---

### Step 3 — Hero Section
**Files:** `css/hero.css`, `css/animations.css` (bounce keyframe only)

- Full-viewport hero: pill badge, H1, subtitle, tagline, CTA buttons, social icons, bouncing arrow
- Hero glow overlay (dark) + grid lines (light)
- Bouncing ↓ arrow

**Test after Step 3:**
- [ ] Hero fills full viewport height
- [ ] Dark: purple glow visible behind heading; Light: grid lines visible, no glow
- [ ] "Chander Mohan" heading renders at ~80px
- [ ] GitHub, LinkedIn, Email icons visible — email opens `mailto:`, others open `#` in new tab
- [ ] Bouncing arrow animates continuously
- [ ] Both CTA buttons visible (solid purple + outline)

---

### Step 4 — Smooth Scroll + Progress Bar + Active Nav
**Files:** `js/scroll.js`

- Smooth scroll for all nav links and CTA buttons with navbar offset
- Vertical progress bar fills as you scroll
- Active nav link highlights based on current section

**Test after Step 4:**
- [ ] Click "Home", "About" etc. — smooth scroll, no jump, content not hidden under navbar
- [ ] "View Projects" scrolls to `#projects` stub; "Contact Me" scrolls to `#contact` stub
- [ ] Scroll down — progress bar on right edge fills top-to-bottom
- [ ] Active nav link updates as you scroll through sections
- [ ] "Back to Top" (will test in Step 7) — skip for now

---

### Step 5 — About Section
**Files:** `css/about.css`, `js/animations.js` (scroll reveal)

- Two-column layout: profile card (left) + bio + stats grid (right)
- Profile card with CM initials fallback
- Stats grid: 5+ Years, AI Integration, Performance, Leadership
- Scroll reveal animations on `.reveal` elements

**Test after Step 5:**
- [ ] "About Me" heading with purple underline appears
- [ ] Profile card visible with "CM" purple circle (no image yet)
- [ ] Role "Senior Frontend Developer" and location "Delhi, India" shown on card
- [ ] All 3 bio paragraphs render; "Senior Frontend Developer" is purple/accent colour
- [ ] All 4 stat cards visible with correct labels
- [ ] Scroll away and back — cards fade/slide in via reveal animation
- [ ] Switch theme — profile card gradient changes (dark: purple-indigo / light: lavender-pink)

---

### Step 6 — Contact Section
**Files:** `css/contact.css`, `js/contact.js`

- Two-column layout: info cards (left) + contact form (right)
- 4 info cards: Email, Location, LinkedIn, GitHub with purple icon squares
- Form: Name, Email, Message fields + Send Message button
- Frontend validation with inline error messages

**Test after Step 6:**
- [ ] "Get In Touch" heading with purple underline appears
- [ ] 4 info cards show correct values (email, Delhi India, LinkedIn URL, GitHub URL)
- [ ] Submit empty form — inline errors appear under each field
- [ ] Submit with invalid email — email error shows
- [ ] Fill form correctly — button changes to "Message Sent ✓" briefly
- [ ] Switch theme — cards are white with purple borders (light) / dark glass (dark)
- [ ] Input focus state — border turns purple

---

### Step 7 — Footer
**Files:** `css/footer.css`

- Single-row footer: copyright (left), "Made with ❤️ in Bangalore" (center), "Back to Top ↑" (right)
- Thin top border separator

**Test after Step 7:**
- [ ] Footer visible below Contact section
- [ ] All 3 columns display correctly, space-between layout
- [ ] Heart is red (`#ef4444`)
- [ ] Click "Back to Top ↑" — smooth scrolls to top of page
- [ ] Switch theme — footer background and text update correctly
- [ ] On mobile — footer text stacks or wraps without overflow

---

### Step 8 — Responsive Polish + Final Check
**Files:** all CSS files (media queries review)

- Ensure all sections look good on mobile (375px), tablet (768px), desktop (1280px+)
- Fix any overflow, font size, padding issues

**Test after Step 8:**
- [ ] Open DevTools → toggle device toolbar → test at 375px, 768px, 1280px
- [ ] Hero text doesn't overflow on mobile
- [ ] About section stacks to single column on mobile
- [ ] Contact section stacks to single column on mobile
- [ ] Navbar hamburger works at all mobile widths
- [ ] Footer wraps gracefully on small screens
- [ ] No horizontal scroll at any viewport width
- [ ] Full dark/light theme pass across all sections at all sizes
