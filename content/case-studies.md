Portfolio — Case Study Content
Nov 26, 2026 · @Emmanuel
English content for a one-page home and four case studies, to be built with Claude Code and published on GitHub Pages. Work for my current employer stays anonymous: no company or product names, no screenshots.
Home page
Headline: Emmanuel Ramírez — UX Researcher who turns user evidence into product decisions, and builds the AI tools to do it faster.
Short bio (about 60 words): I'm a UX Researcher based in Costa Rica, working remotely with product teams in 12+ countries. I lead mixed-methods research end to end for enterprise B2B SaaS products, from planning and recruitment to the insights that shape investment decisions. My background in Industrial Design and a Master's in Computer Science (in progress) let me design studies and build the AI workflows that scale them.
Selected work (cards on the home page, in this order):
1.  Where to invest in a developer platform — 25 interviews across 4 products to guide next year's investment.
2.  Research that answers back — An AI platform that turns research into persona agents for 6 products.
3.  2tor: trust in a tutoring marketplace — End-to-end HCD for a two-sided marketplace now in development.
4.  What users don't say — A pipeline that flags where voice tone and words disagree in interviews.
Contact block: email, LinkedIn, CV download (PDF), GitHub.
Case 1 — Where to invest in a developer platform
Summary line: A 6-week study of 4 developer products that gave leadership a clear map of what to grow, fix and scale back.
Field
Content
Company
Enterprise B2B SaaS company (confidential)
My role
Lead and only UX Researcher, end to end
Timeline
6 weeks, 2026
Methods
Semi-structured interviews, segment-specific scripts, AI-assisted evidence extraction, thematic synthesis
Tools
Salesforce, PlaybookUX, email, Claude (custom agentic workflow), custom synthesis tool (Claude + VS Code)
Participants
25 developers: about 10 customers, 10 internal developers building for customers, 5 external developers
Context. The company offers a developer suite of 4 products: hosting, CI/CD, a cloud IDE and Git-based repository tooling. Leadership had to decide whether to keep investing in all four and, if so, in what.
Research question. What value does each product deliver in developers' real workflows, what is broken, and where should the next investment go?
Process.
1.  Scoping with the PM: defined segments, user types, recruitment channels, budget, customer availability and feasible methods.
2.  Study design: wrote a separate interview script per segment and role.
3.  Recruitment: Salesforce and PlaybookUX for customers and external developers, internal channels and email for internal developers.
4.  Sessions: 25 interviews of 30 to 60 minutes, depending on the profile.
5.  Extraction: built an agentic workflow on Claude that pulled about 1,100 evidence points from the transcripts, tagged by segment and product.
6.  Validation: reviewed the extracted evidence manually against the sources before synthesis.
7.  Synthesis and delivery: synthesized in a custom tool and delivered 4 formats (deck, insights document, executive summary, AI-readable version).
Key findings.
• One workflow, not 4 competing products. Each product sits at a different stage of the same developer workflow.
• Hosting is the anchor. Every team ends up using it, but many only as the final deployment step, copying from another repository even though the product can do more.
• A security product nobody used. The repository security-update tool had an unclear name and a nonstandard interaction model. Notifications were ignored or never arrived, so developers patched by hand.
• Unmet demand for security. Customers wanted a higher tier to run specific security tools in CI/CD. The PMs didn't know about this.
• Mandated, not chosen. Adoption was driven more by corporate decisions than by developer preference.
• A small group with no way out. About 2–3% of users depend entirely on the IDE, so removing it would leave them with no alternative.
Impact. I presented the results to the PMs and R&D leadership, and they are now part of next year's planning. Recommendations: keep all 4 products, focus the roadmap on hosting and the IDE, scale back the security-update product without removing it, and explore a security tier.
What I'd highlight in the design: the 7-step process as a diagram, the 25 → 1,100 → findings funnel, and the 4 products laid out on one workflow line.
Visuals to create (anonymous diagrams): process timeline, participant mix, evidence funnel, product workflow map.
Case 2 — Research that answers back
Summary line: An AI platform that turns a team's research into persona agents anyone in the company can ask.
Field
Content
Company
Enterprise SaaS and PaaS company (confidential)
My role
UX Researcher and AI developer, end-to-end owner: research, experience design and all code
Timeline
2026, in use and still being evaluated
Tools
Google Drive, Google Apps Script, Gemini, LLM agents
Scale
6 agents, one per product, each with 3 to 15 research-grounded personas
Problem. Research was piling up in documents nobody reread. Synthesizing it by hand was slow, and PMs and designers couldn't easily ask what users thought.
Goal. Remove the manual synthesis work and put the team's user knowledge directly in employees' hands.
How it works.
1.  The team uploads research materials (interviews, notes, recordings) to a shared Drive.
2.  Files are classified automatically by product, project and existing persona, based on folder and naming.
3.  AI analyzes each interview and extracts behaviors, quotes and product context.
4.  A summarization step keeps only what matters, so the volume stays manageable.
5.  The output feeds 6 product agents. Each can answer as one of its personas, with that persona's attitudes and preferences.
6.  I review agent responses manually against the real research data to keep them accurate.
How teams use it.
• PMs test how users would likely react to new value propositions before development starts.
• Designers run early usability-test simulations on specific interface decisions before involving real users.
Impact. Teams reach real user testing with a more mature product. Before, they could spend 1 to 2 quarters on exploratory testing with real people. In the first months, adoption reached more than half of R&D and about 1 in 5 PMs (my own estimates, not official figures).
Visuals to create: the pipeline diagram (Drive → classify → extract → summarize → agents), an anonymous persona card, and a mock chat with fictional data.
Case 3 — 2tor: trust in a tutoring marketplace
Summary line: How parents decide whom to trust with their children's learning, and how that shaped a two-sided marketplace now in development.
Field
Content
Context
Own project, started in a Human-Centered Design course (UCR, 2026), now being built as a real product
My role
Product Owner, lead UX Researcher and UI Designer, in a team with another researcher and a designer
Methods
In-depth interviews, usability testing (2 iterations), JTBD, affinity mapping, personas, journey maps, value proposition canvases, Lean Canvas
Tools
Figma, FigJam, Figma Make
Participants
18 interviews with parents and tutors; usability testing with 30 participants
Problem. Tutoring in Costa Rica runs on word of mouth. Parents struggle to find tutors they trust, and good tutors struggle to find steady students.
Research questions. How do parents decide whom to trust with their children's learning? What would make tutors commit to a brand-new platform?
Process.
1.  Discovery: 18 in-depth interviews with parents and tutors, with informed consent under university ethics guidelines.
2.  Synthesis: JTBD affinity maps, 2 personas (a parent and a tutor), journey maps and value proposition canvases with participant quotes.
3.  Design: wireframes, then high-fidelity interactive prototypes for the parent and tutor flows.
4.  Testing: usability testing with 30 participants across 2 iterations, with scripts aligned to the prototype screens.
Key findings.
• Fear comes first. Parents' main barrier was leaving their child with an unknown tutor.
• Not everyone is digital. Many parents distrusted online platforms and didn't want to pay online, and some had low digital literacy.
• Virtual isn't enough for young kids. Parents distrusted fully virtual sessions for young children.
• Tutors need students from day one. Marketplace liquidity was the main risk before launch.
Impact. The research changed the product's scope. We moved from a virtual-only service for private-school families to partnering directly with schools, so parents meet the platform through an institution they already trust. We also redefined the user profiles, added in-person sessions and simplified onboarding. Usability testing showed that the first stages of the flow decide whether parents trust the platform; the rest of the flow tested well. The product is now in development.
Visuals to show: recreated diagrams of the research process, the scope change (before vs. after), the personas and the key moments of the journey. Real prototype screens are optional, since the product is still in development.
Case 4 — What users don't say
Summary line: A Python pipeline that flags the moments in an interview where a participant's voice and words disagree.
Field
Content
Context
Graduate research project, Master's in Computer Science (UCR)
My role
Sole researcher and developer
Tools
Python, Google Colab, Whisper, pyannote, librosa, wav2vec2, pysentimiento
Data
A real interview recording from a Human-Centered Design study
Outputs
Colab notebook, 12-page IEEE-format article, 13-slide presentation
Problem. Transcripts capture what participants say, not how they say it. A participant can call a feature "fine" in a frustrated tone, and that signal gets lost in synthesis.
Approach.
1.  Transcribe the recording with Whisper.
2.  Separate speakers with pyannote diarization.
3.  Analyze voice emotion with wav2vec2 and librosa.
4.  Analyze text sentiment with pysentimiento.
5.  Compare both signals segment by segment and flag where they diverge most.
Result. The pipeline points the researcher to specific moments worth a second look, adding a layer of evidence for both human and AI-assisted synthesis.
Why it matters for research. It shows how I use AI: as a way to surface evidence a researcher might miss, with the researcher still making the call.
Visuals to show: pipeline diagram, a timeline chart of voice vs. text sentiment with flagged moments (fictional sample data) and a short code snippet. The notebook and results stay private: the recording contains participants' personal information, and they did not consent to publication.
Decisions before building
• 2tor: product decisions added to Case 3. Visuals are recreated diagrams; Figma screens only if Emmanuel exports them later.
• Persona agents: adoption estimates can be shown, labeled as estimates.
• Emotion analysis: notebook stays private (participants' personal information, no consent to publish). Use fictional sample data in visuals.
• Developer suite: level of detail in Case 1 approved.
• GitHub: repository created later from VS Code; the link is set then.
• Photo: small GitHub avatar on the home page.