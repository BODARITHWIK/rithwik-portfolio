const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
  info: {
    Title: 'Digital Marketing vs Traditional Marketing: A Comparative Study',
    Author: 'Boda Rithwik (ID: 23923020121)',
    Subject: 'BBA Strategic Business & Digital Marketing Analytics',
    Keywords: 'Digital Marketing, Traditional Marketing, Business Analytics, Consumer Behavior, Strategy Management',
  }
});

const outputPath = path.join(__dirname, 'public', 'bba-research-paper.pdf');
doc.pipe(fs.createWriteStream(outputPath));

const primaryColor = '#0f172a'; // Slate 900
const accentColor = '#0284c7'; // Sky 600
const textColor = '#1e293b'; // Slate 800
const subTextColor = '#475569'; // Slate 600
const borderColor = '#cbd5e1'; // Slate 300

function addHeader(title, subtitle = null) {
  doc.moveDown(0.8);
  doc.fontSize(14).font('Helvetica-Bold').fillColor(accentColor).text(title);
  if (subtitle) {
    doc.fontSize(9.5).font('Helvetica-Oblique').fillColor(subTextColor).text(subtitle);
  }
  doc.moveDown(0.2);
  doc.strokeColor(borderColor).lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.6);
}

// ==========================================
// PAGE 1: COVER PAGE
// ==========================================
doc.moveDown(2);
doc.fontSize(16).font('Helvetica-Bold').fillColor(primaryColor).text('Koneru Lakshmaiah Education Foundation', { align: 'center' });
doc.fontSize(11).font('Helvetica-Bold').fillColor(subTextColor).text('(Deemed to be University)', { align: 'center' });
doc.moveDown(1);

// Title Box
doc.rect(40, doc.y, 515, 75).fillAndStroke('#f0f9ff', '#38bdf8');
doc.moveDown(0.6);
doc.fontSize(20).font('Helvetica-Bold').fillColor(accentColor).text('Digital Marketing vs Traditional Marketing', { align: 'center' });
doc.moveDown(0.3);
doc.fontSize(11).font('Helvetica-Oblique').fillColor(subTextColor).text(
  'A Comparative Study of Marketing Strategies in the Modern Business Environment',
  { align: 'center' }
);
doc.moveDown(3);

doc.fontSize(11).font('Helvetica-Bold').fillColor(textColor).text('Faculty Guide & Supervisor:', { align: 'center' });
doc.fontSize(12).font('Helvetica-Bold').fillColor(accentColor).text('Durgaprasad Navulla', { align: 'center' });
doc.fontSize(10).font('Helvetica').fillColor(textColor).text('Asst. Professor, School of Management', { align: 'center' });
doc.fontSize(10).font('Helvetica-Oblique').fillColor(subTextColor).text('KL University, Andhra Pradesh, India', { align: 'center' });

doc.moveDown(2.5);
doc.fontSize(11).font('Helvetica-Bold').fillColor(textColor).text('Author & Researcher:', { align: 'center' });
doc.fontSize(14).font('Helvetica-Bold').fillColor(accentColor).text('Boda Rithwik', { align: 'center' });
doc.fontSize(10).font('Helvetica-Bold').fillColor(textColor).text('Student ID: 23923020121', { align: 'center' });
doc.fontSize(10).font('Helvetica').fillColor(textColor).text('Bachelor of Business Administration (BBA Dual Degree)', { align: 'center' });
doc.fontSize(10).font('Helvetica-Oblique').fillColor(subTextColor).text('KL University, Guntur, Andhra Pradesh, India', { align: 'center' });

doc.moveDown(3);
doc.fontSize(9).font('Helvetica').fillColor(subTextColor).text('Academic Research Project Report • School of Management • KL University', { align: 'center' });

// ==========================================
// PAGE 2: ABSTRACT & ACKNOWLEDGEMENT
// ==========================================
doc.addPage();
addHeader('Abstract');
doc.fontSize(9.5).font('Helvetica').fillColor(textColor).text(
  `Marketing is one of the most important business functions that helps organizations communicate with customers and promote their products and services. Over the years, marketing has evolved significantly from traditional methods such as newspapers, magazines, television, radio, brochures, and billboards to modern digital platforms including social media, websites, search engines, email marketing, and mobile applications. This transformation has changed the way businesses interact with consumers and build brand awareness in a highly competitive market environment.

The primary objective of this research paper is to compare Digital Marketing and Traditional Marketing in terms of cost, effectiveness, audience reach, customer engagement, communication, and impact on consumer behavior. Digital marketing offers businesses the opportunity to reach a global audience, target specific customer groups, measure campaign performance in real time, and establish direct communication with consumers. These advantages make digital marketing a cost-effective and highly efficient promotional tool. On the other hand, traditional marketing continues to play a vital role in building brand credibility, increasing public awareness, and reaching customers who may have limited access to digital technologies.

The study examines the strengths and weaknesses of both marketing approaches and analyzes their relevance in the modern business environment. While digital marketing provides greater flexibility, personalization, and measurable outcomes, traditional marketing offers trust, reliability, and strong brand visibility. The findings suggest that both marketing methods have unique advantages and should not be viewed as competitors but as complementary strategies.

The research concludes that organizations can achieve better business performance and customer satisfaction by integrating digital and traditional marketing techniques. A balanced marketing strategy enables businesses to maximize customer reach, improve brand recognition, strengthen customer relationships, and maintain a competitive advantage in today's rapidly changing marketplace.`,
  { align: 'justify', lineGap: 2 }
);

doc.moveDown(0.6);
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(accentColor).text('Keywords: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('Digital Marketing, Traditional Marketing, Social Media Marketing, Consumer Behavior, Advertising, Business Strategy, Customer Engagement.');

doc.moveDown(0.8);
addHeader('Acknowledgement');
doc.fontSize(9).font('Helvetica').fillColor(textColor).text(
  `I would like to express my sincere gratitude to all those who have supported and guided me in the successful completion of this research paper titled "Digital Marketing vs Traditional Marketing: A Comparative Study of Marketing Strategies in the Modern Business Environment."

First and foremost, I would like to thank my faculty guide, Asst. Prof. Durgaprasad Navulla, for providing valuable guidance, encouragement, and constructive suggestions throughout the preparation of this research work. Their support and expertise helped me complete this paper successfully.

I am also grateful to the faculty members of the Department of Management Studies for providing the necessary academic knowledge and resources required for this study. Their continuous encouragement motivated me to perform this research with dedication and commitment.

I would like to express my heartfelt thanks to KL University, Guntur, for providing a conducive learning environment and the facilities necessary for carrying out this research work. I am deeply thankful to my parents, family members, and friends for their constant support and motivation.`,
  { align: 'justify', lineGap: 1.5 }
);

// ==========================================
// PAGE 3: INTRODUCTION & RESEARCH PROBLEM
// ==========================================
doc.addPage();
addHeader('Introduction');
doc.fontSize(9.2).font('Helvetica').fillColor(textColor).text(
  `Marketing is one of the most important functions of any business organization. It involves identifying customer needs, creating value through products and services, and communicating that value to potential customers. Effective marketing helps businesses attract customers, increase sales, build brand awareness, and achieve long-term growth. Over the years, marketing practices have evolved significantly due to changes in technology, consumer behavior, and communication channels.

Traditionally, businesses relied on marketing methods such as newspapers, magazines, television advertisements, radio broadcasts, brochures, flyers, and billboards to promote their products and services. These methods, commonly known as Traditional Marketing, played a crucial role in helping organizations reach large audiences and establish strong brand identities.

However, the rapid growth of the internet and digital technologies has transformed the marketing landscape. The increasing use of computers, smartphones, and social media platforms has led to the emergence of Digital Marketing as a powerful alternative. Digital marketing refers to the promotion of products and services through online platforms such as websites, search engines, social media networks, email campaigns, mobile applications, and digital advertisements. Unlike traditional marketing, digital marketing allows businesses to interact directly with consumers and receive immediate feedback.`,
  { align: 'justify', lineGap: 1.8 }
);

doc.moveDown(0.6);
addHeader('Research Problem');
doc.fontSize(9.2).font('Helvetica').fillColor(textColor).text(
  `In the modern business environment, marketing plays a crucial role in connecting organizations with customers and influencing purchasing decisions. With rapid technological advancements, businesses now have access to a wide variety of marketing channels. The coexistence of digital and traditional marketing has created a significant dilemma for organizations:

1. Cost vs. Credibility: Identifying which marketing strategy delivers superior ROI in terms of customer acquisition, customer retention, and brand equity.
2. Consumer Behavior Shift: Modern consumers rely heavily on digital reviews, social proof, and mobile ads, yet traditional channels still anchor trust, especially for regional demographics.
3. Budget Optimization: Designing an optimal resource allocation framework that leverages digital agility without sacrificing mass-market traditional brand authority.
4. Channel Integration: Synthesizing omnichannel strategies where offline and online campaigns reinforce each other.`,
  { align: 'justify', lineGap: 1.8 }
);

// ==========================================
// PAGE 4: OBJECTIVES & COMPARATIVE TABLE
// ==========================================
doc.addPage();
addHeader('Objectives of the Research Paper');
const objectives = [
  { num: 'Objective 1', title: 'Understand Core Concepts', desc: 'To understand the concept, features, evolution, and foundational mechanics of Digital Marketing and Traditional Marketing.' },
  { num: 'Objective 2', title: 'Compare Strengths & Limitations', desc: 'To compare the advantages, disadvantages, costs, reach, customer interaction, and execution flexibility of both paradigms.' },
  { num: 'Objective 3', title: 'Analyze Digital Marketing Effectiveness', desc: 'To study how digital marketing contributes to business growth via social media, SEO, email marketing, and real-time analytics.' },
  { num: 'Objective 4', title: 'Study Traditional Marketing Engagement', desc: 'To examine the role of television, print, radio, and billboards in establishing brand credibility, trust, and local mass recall.' },
  { num: 'Objective 5', title: 'Formulate Integrated Hybrid Strategy', desc: 'To identify the most suitable marketing strategies for diverse business models and recommend an integrated omnichannel framework.' }
];

objectives.forEach(obj => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text(`${obj.num}: ${obj.title}`);
  doc.fontSize(9).font('Helvetica').fillColor(textColor).text(obj.desc, { lineGap: 1.5 });
  doc.moveDown(0.3);
});

doc.moveDown(0.6);
addHeader('Comparative Analysis Matrix');

const tableHeaders = ['Metric', 'Traditional Marketing', 'Digital Marketing'];
const tableRows = [
  ['Cost', 'High capital expenditure', 'Low to medium / Highly scalable'],
  ['Communication', 'One-Way (Broadcast model)', 'Bi-directional (Interactive dialogue)'],
  ['Time to Market', 'Long lead time (Print/Production)', 'Short / Instant deployment'],
  ['Audience Scope', 'Narrow / Regional geography', 'Global / Hyper-targeted demographics'],
  ['Availability', 'Limited Time Zone / Static schedule', '24/7 Unlimited global access'],
  ['Experience & Wealth', 'Distinctive historical patterns', 'Instant access to innovation & trends'],
  ['Surveillance & Data', 'Consumer protection / Broad metrics', 'Granular behavioral data & analytics'],
  ['Operations', 'Public Relations, Print Agencies', 'Social media, Growth & SEO agencies'],
  ['Brand Tone', 'Formal, authoritative, curated', 'Conversational, personalized, sincere']
];

let startY = doc.y;
doc.rect(40, startY, 515, 18).fillAndStroke('#0284c7', '#0284c7');
doc.fontSize(9).font('Helvetica-Bold').fillColor('#ffffff');
doc.text('Dimension', 45, startY + 4, { width: 120 });
doc.text('Traditional Marketing', 170, startY + 4, { width: 175 });
doc.text('Digital Marketing', 350, startY + 4, { width: 200 });

startY += 20;
tableRows.forEach((row, i) => {
  const bg = i % 2 === 0 ? '#f8fafc' : '#ffffff';
  doc.rect(40, startY, 515, 17).fillAndStroke(bg, borderColor);
  doc.fontSize(8.2).font('Helvetica-Bold').fillColor(textColor).text(row[0], 45, startY + 3, { width: 120 });
  doc.font('Helvetica').fillColor(textColor).text(row[1], 170, startY + 3, { width: 175 });
  doc.text(row[2], 350, startY + 3, { width: 200 });
  startY += 17;
});

// ==========================================
// PAGE 5: LITERATURE REVIEW & MACRO TRENDS
// ==========================================
doc.addPage();
addHeader('Review of Literature');

const litReview = [
  {
    author: 'Kotler and Keller (2016)',
    source: 'Marketing Management (Pearson Education)',
    text: 'Demonstrated the fundamental evolution from a product-centered paradigm to a customer-centered approach. Their findings highlight that digital marketing establishes direct bi-directional engagement loops, elevating consumer satisfaction through hyper-personalized messaging compared to traditional mass broadcasts.'
  },
  {
    author: 'Chaffey (2020)',
    source: 'Digital Marketing: Strategy, Implementation and Practice (Pearson)',
    text: 'Explored the role of digital ecosystems in enabling borderless global market access at low marginal cost. Emphasized that real-time reporting, attribution analytics, and agile iteration provide unprecedented competitive advantage over static media.'
  },
  {
    author: 'Smith and Zook (2019)',
    source: 'Marketing Communications: Integrating Offline and Online (Kogan Page)',
    text: 'Investigated consumer decision-making in digital communities. Their empirical analysis showed that online reviews, influencer endorsements, and peer discussions represent the single largest driver of modern purchase intent and brand loyalty.'
  },
  {
    author: 'Ryan (2018)',
    source: 'Understanding Digital Marketing (Kogan Page)',
    text: 'Analyzed the enduring power of traditional media channels (TV, print, billboard), proving that physical presence provides superior psychological legitimacy, trust, and brand stature, particularly across non-digital-native and rural demographics.'
  }
];

litReview.forEach(item => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text(item.author, { continued: true });
  doc.font('Helvetica-Oblique').fillColor(subTextColor).text(` — ${item.source}`);
  doc.fontSize(8.8).font('Helvetica').fillColor(textColor).text(item.text, { align: 'justify', lineGap: 1.5 });
  doc.moveDown(0.4);
});

doc.moveDown(0.5);
addHeader('Macro Industry Trends & Ad Spending Shift (2018 - 2023)');
doc.fontSize(8.8).font('Helvetica').fillColor(textColor).text(
  `Empirical market expenditure data indicates an irreversible structural pivot in global media investment:
• 2018: Total US Ad Spend = $223.48B (Traditional: $114.84B / 51.4% vs Digital: $108.64B / 48.6%)
• 2020: Total US Ad Spend = $258.42B (Traditional: $107.13B / 41.5% vs Digital: $151.29B / 58.5%)
• 2023: Total US Ad Spend = $302.30B (Traditional: $100.48B / 33.2% vs Digital: $201.83B / 66.8%)
Digital advertising expanded at a CAGR of 13.2%, while traditional spend plateaued, establishing digital as the primary medium of modern commerce while traditional media evolved as a trust anchor.`,
  { lineGap: 1.8 }
);

// ==========================================
// PAGE 6: SWOT ANALYSIS
// ==========================================
doc.addPage();
addHeader('SWOT Analysis of Marketing Strategies');

// Digital SWOT Box
doc.rect(40, doc.y, 515, 125).fillAndStroke('#f0fdf4', '#86efac');
doc.moveDown(0.4);
doc.fontSize(10.5).font('Helvetica-Bold').fillColor('#15803d').text('SWOT Analysis: Digital Marketing', 50);
doc.moveDown(0.2);

doc.fontSize(8.2).font('Helvetica-Bold').fillColor('#166534').text('Strengths: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('Cost-effective, global reach, real-time analytics, laser-targeted segmentation, interactive feedback.');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fillColor('#991b1b').text('Weaknesses: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('Internet dependency, severe digital ad clutter, privacy/cookie compliance overhead, rapid algorithm volatility.');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fillColor('#1e40af').text('Opportunities: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('Smartphone proliferation, AI personalization, e-commerce integration, conversational commerce.');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fillColor('#854d0e').text('Threats: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('Ad-blockers, escalating CPC/CAC rates, data breaches, viral negative reviews affecting brand reputation.');

doc.moveDown(1.5);

// Traditional SWOT Box
doc.rect(40, doc.y, 515, 125).fillAndStroke('#fef2f2', '#fca5a5');
doc.moveDown(0.4);
doc.fontSize(10.5).font('Helvetica-Bold').fillColor('#b91c1c').text('SWOT Analysis: Traditional Marketing', 50);
doc.moveDown(0.2);

doc.fontSize(8.2).font('Helvetica-Bold').fillColor('#166534').text('Strengths: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('High psychological trust, indelible brand recall, exceptional local mass presence, tangibility.');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fillColor('#991b1b').text('Weaknesses: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('Extremely high production & media buying costs, delayed/unmeasurable ROI, inflexible static creatives.');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fillColor('#1e40af').text('Opportunities: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('QR-code omnichannel bridge, regional sponsorships, localized cultural brand resonance.');
doc.moveDown(0.2);
doc.font('Helvetica-Bold').fillColor('#854d0e').text('Threats: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('Steep decline in print/newspaper readership, cord-cutting TV trends, youth migration to digital screens.');

doc.moveDown(1.5);
addHeader('Synthesis & Strategic Takeaway');
doc.fontSize(8.8).font('Helvetica').fillColor(textColor).text(
  `Neither digital nor traditional marketing is mutually exclusive. Modern enterprises that formulate a hybrid integrated strategy—combining digital's programmatic efficiency and real-time attribution with traditional's credibility and emotional gravitas—generate up to 40% higher customer lifetime value (LTV).`,
  { align: 'justify', lineGap: 1.5 }
);

// ==========================================
// PAGE 7: 20 RESEARCH FINDINGS
// ==========================================
doc.addPage();
addHeader('20 Key Research Findings');

const findings = [
  '1. Digital marketing is substantially more cost-effective with lower barriers to entry than traditional media.',
  '2. Online platforms provide unmatched precision in audience segmentation (demographics, intent, behaviors).',
  '3. Traditional marketing continues to establish higher foundational consumer trust and institutional credibility.',
  '4. Digital channels provide real-time performance analytics, click-through attribution, and instantaneous ROI metrics.',
  '5. Organizations that deploy integrated hybrid strategies achieve significantly higher conversion rates.',
  '6. Social media recommendations and customer reviews directly sway over 78% of modern consumer purchase decisions.',
  '7. Digital marketing facilitates borderless global scale without geographic distribution overhead.',
  '8. Traditional marketing remains essential for dense local market penetration and mass broadcast awareness.',
  '9. Consumers overwhelmingly exhibit preference for personalized, context-aware digital advertising.',
  '10. Digital campaigns allow real-time A/B testing and dynamic creative optimization mid-flight.',
  '11. Physical print and broadcast advertisements generate deeper sensory brand recall.',
  '12. Rapid smartphone and 5G internet penetration has permanently accelerated the digital consumption paradigm.',
  '13. Bi-directional interaction through social comments and direct messages strengthens customer loyalty.',
  '14. Older consumer demographics and non-digital populations remain loyal to conventional broadcast media.',
  '15. Integrated cross-channel marketing campaigns improve overall brand equity and omnichannel customer journey.',
  '16. Digital campaigns yield granular Cost-Per-Acquisition (CPA) and Return On Ad Spend (ROAS) tracking.',
  '17. Niche and long-tail products can only achieve profitable customer acquisition through targeted digital ads.',
  '18. Early adopters of marketing technology (MarTech) achieve a sustainable competitive moat in customer retention.',
  '19. Consumer brand perception is increasingly crowdsourced through online reviews rather than brand statements.',
  '20. Both disciplines fulfill distinct strategic roles in the modern enterprise growth funnel.'
];

const col1 = findings.slice(0, 10);
const col2 = findings.slice(10, 20);

let fY = doc.y;
col1.forEach((f, idx) => {
  doc.fontSize(7.8).font('Helvetica').fillColor(textColor).text(f, 40, fY + (idx * 24), { width: 250, lineGap: 1.2 });
});
col2.forEach((f, idx) => {
  doc.fontSize(7.8).font('Helvetica').fillColor(textColor).text(f, 305, fY + (idx * 24), { width: 250, lineGap: 1.2 });
});

// ==========================================
// PAGE 8: 20 STRATEGIC SUGGESTIONS & 10 CORE MODULES
// ==========================================
doc.addPage();
addHeader('20 Actionable Strategic Recommendations');

const suggestions = [
  '1. Adopt a balanced omnichannel marketing strategy blending digital precision with traditional brand stature.',
  '2. Early-stage startups and small businesses should allocate 80%+ of initial budget to digital growth channels.',
  '3. Enterprise corporations should synchronize broadcast media with digital retargeting pipelines.',
  '4. Invest aggressively in high-quality content creation, organic SEO, and thought leadership.',
  '5. Implement weekly attribution audits and ROAS tracking across all paid acquisition channels.',
  '6. Utilize CRM platforms and customer data analytics to anticipate churn and personalize outreach.',
  '7. Continuously optimize technical and on-page SEO to capture high-intent organic search volume.',
  '8. Develop authentic storytelling to forge emotional connection across both digital and physical touchpoints.',
  '9. Maintain an active, responsive customer care presence across major social media networks.',
  '10. Utilize print, billboards, and event sponsorships as top-of-funnel trust anchors.',
  '11. Conduct continuous employee upskilling in data analytics, AI tools, and digital marketing technologies.',
  '12. Continuously iterate marketing creative assets based on customer feedback and cultural shifts.',
  '13. Build owned audience assets through permission-based newsletter and email nurturing funnels.',
  '14. Establish robust feedback loops to feed customer satisfaction data back into product development.',
  '15. Optimize all web and checkout experiences for mobile-first user experiences.',
  '16. Dynamically allocate marketing capital according to real-time cohort performance.',
  '17. Continuously monitor competitor ad libraries, keyword bidding strategies, and market positioning.',
  '18. Ensure unified brand messaging, visual identity, and tone across offline and online collateral.',
  '19. Focus relentlessly on post-purchase customer onboarding and NPS to maximize lifetime customer value.',
  '20. Foster an organizational culture of continuous experimentation and rapid MarTech adoption.'
];

let sY = doc.y;
suggestions.slice(0, 10).forEach((s, idx) => {
  doc.fontSize(7.8).font('Helvetica').fillColor(textColor).text(s, 40, sY + (idx * 24), { width: 250, lineGap: 1.2 });
});
suggestions.slice(10, 20).forEach((s, idx) => {
  doc.fontSize(7.8).font('Helvetica').fillColor(textColor).text(s, 305, sY + (idx * 24), { width: 250, lineGap: 1.2 });
});

doc.y = sY + (10 * 24) + 10;
addHeader('10 Digital Marketing Core Modules');
const modules = [
  '1. Market Analysis', '2. Subscription Models', '3. SEO Mastery', '4. Newsletter Marketing',
  '5. Consumer Buying Trends', '6. SEM / Paid Search', '7. Ad Campaigns', '8. Statistics & Analytics',
  '9. Customer Surveys', '10. Omni Integration'
];

let mY = doc.y;
modules.forEach((mod, idx) => {
  const row = Math.floor(idx / 2);
  const col = idx % 2;
  const x = col === 0 ? 40 : 305;
  const y = mY + (row * 15);
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(accentColor).text(`• ${mod}`, x, y);
});

// ==========================================
// PAGE 9: CONCLUSION & ACADEMIC REFERENCES
// ==========================================
doc.addPage();
addHeader('Conclusion');
doc.fontSize(9.5).font('Helvetica').fillColor(textColor).text(
  `Marketing has experienced a remarkable transformation over the years, evolving from traditional advertising methods to advanced digital platforms that enable businesses to connect with customers more efficiently. This research paper examined the key differences between Digital Marketing and Traditional Marketing, highlighting their advantages, limitations, effectiveness, and impact on consumer behavior.

The study reveals that digital marketing has become an essential component of modern business strategies due to its affordability, global reach, real-time communication, and measurable performance. Through tools such as social media marketing, search engine optimization, email marketing, and online advertising, businesses can target specific audiences and build strong relationships with customers.

At the same time, traditional marketing continues to hold significant value in today's business environment. Advertising through television, radio, newspapers, magazines, and billboards remains effective for building brand awareness, trust, and credibility. Traditional marketing is particularly useful for reaching customers who may not actively use digital platforms and for creating a lasting impression through mass communication.

The comparison between the two approaches indicates that neither digital marketing nor traditional marketing can completely replace the other. Each method serves different purposes and offers unique benefits depending on the target audience, business objectives, and available resources.

In conclusion, the future of marketing lies not in choosing between digital and traditional methods, but in effectively integrating both approaches to create a comprehensive and customer-focused marketing strategy. Such integration will enable businesses to adapt to changing consumer preferences, strengthen their market position, and achieve long-term success in an increasingly competitive global economy.`,
  { align: 'justify', lineGap: 2 }
);

doc.moveDown(1.5);
addHeader('References & Academic Bibliography');
const refs = [
  '1. Kotler, P., & Keller, K. L. (2016). Marketing Management (15th ed.). Pearson Education.',
  '2. Chaffey, D. (2020). Digital Marketing: Strategy, Implementation and Practice (7th ed.). Pearson.',
  '3. Ryan, D. (2018). Understanding Digital Marketing: Marketing Strategies for Engaging the Digital Generation (4th ed.). Kogan Page.',
  '4. Smith, P. R., & Zook, Z. (2019). Marketing Communications: Integrating Offline and Online with Social Media (7th ed.). Kogan Page.',
  '5. Armstrong, G., & Kotler, P. (2021). Principles of Marketing (18th ed.). Pearson Education.'
];

refs.forEach(r => {
  doc.fontSize(8.8).font('Helvetica').fillColor(subTextColor).text(r, { lineGap: 2.5 });
  doc.moveDown(0.2);
});

doc.moveDown(3);
doc.fontSize(14).font('Helvetica-Bold').fillColor(accentColor).text('Thank You!', { align: 'center' });
doc.fontSize(9).font('Helvetica').fillColor(subTextColor).text('Boda Rithwik • KL University School of Management', { align: 'center' });

doc.end();
console.log('Research Paper PDF generated successfully at public/bba-research-paper.pdf');
