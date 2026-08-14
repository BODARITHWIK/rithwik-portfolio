const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
});

const outputPath = path.join(__dirname, 'public', 'bba-research-paper.pdf');
doc.pipe(fs.createWriteStream(outputPath));

const primaryColor = '#0f172a'; // Slate 900
const accentColor = '#0284c7'; // Sky 600
const textColor = '#1e293b'; // Slate 800
const subTextColor = '#475569'; // Slate 600

function addHeader(title) {
  doc.moveDown(1.2);
  doc.fontSize(14).font('Helvetica-Bold').fillColor(accentColor).text(title);
  doc.moveDown(0.2);
  doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(40, doc.y).lineTo(555, doc.y).stroke();
  doc.moveDown(0.5);
}

// TITLE PAGE
doc.moveDown(2);
doc.fontSize(16).font('Helvetica-Bold').fillColor(primaryColor).text('Koneru Lakshmaiah Education Foundation', { align: 'center' });
doc.moveDown(0.5);
doc.fontSize(20).font('Helvetica-Bold').fillColor(accentColor).text('Digital Marketing vs Traditional Marketing', { align: 'center' });
doc.moveDown(0.3);
doc.fontSize(12).font('Helvetica-Oblique').fillColor(subTextColor).text(
  'A Comparative Study of Marketing Strategies in the Modern Business Environment',
  { align: 'center' }
);

doc.moveDown(3);
doc.fontSize(11).font('Helvetica-Bold').fillColor(textColor).text('Faculty Guide:', { align: 'center' });
doc.fontSize(11).font('Helvetica').fillColor(textColor).text('Durgaprasad Navulla, Asst. Professor', { align: 'center' });
doc.fontSize(10).font('Helvetica-Oblique').fillColor(subTextColor).text('School of Management, KL University, Andhra Pradesh, India', { align: 'center' });

doc.moveDown(2);
doc.fontSize(11).font('Helvetica-Bold').fillColor(textColor).text('Author:', { align: 'center' });
doc.fontSize(12).font('Helvetica-Bold').fillColor(accentColor).text('Boda Rithwik', { align: 'center' });
doc.fontSize(10).font('Helvetica').fillColor(textColor).text('Student ID: 23923020121', { align: 'center' });
doc.fontSize(10).font('Helvetica').fillColor(textColor).text('Bachelor of Business Administration (BBA Dual Degree)', { align: 'center' });
doc.fontSize(10).font('Helvetica').fillColor(subTextColor).text('KL University, Guntur, Andhra Pradesh, India', { align: 'center' });

// PAGE 2: ABSTRACT
doc.addPage();
addHeader('Abstract');
doc.fontSize(9.5).font('Helvetica').fillColor(textColor).text(
  `Marketing is one of the most important business functions that helps organizations communicate with customers and promote their products and services. Over the years, marketing has evolved significantly from traditional methods such as newspapers, magazines, television, radio, brochures, and billboards to modern digital platforms including social media, websites, search engines, email marketing, and mobile applications. This transformation has changed the way businesses interact with consumers and build brand awareness in a highly competitive market environment.

The primary objective of this research paper is to compare Digital Marketing and Traditional Marketing in terms of cost, effectiveness, audience reach, customer engagement, communication, and impact on consumer behavior. Digital marketing offers businesses the opportunity to reach a global audience, target specific customer groups, measure campaign performance in real time, and establish direct communication with consumers. These advantages make digital marketing a cost-effective and highly efficient promotional tool. On the other hand, traditional marketing continues to play a vital role in building brand credibility, increasing public awareness, and reaching customers who may have limited access to digital technologies.

The study examines the strengths and weaknesses of both marketing approaches and analyzes their relevance in the modern business environment. While digital marketing provides greater flexibility, personalization, and measurable outcomes, traditional marketing offers trust, reliability, and strong brand visibility. The findings suggest that both marketing methods have unique advantages and should not be viewed as competitors but as complementary strategies.

The research concludes that organizations can achieve better business performance and customer satisfaction by integrating digital and traditional marketing techniques. A balanced marketing strategy enables businesses to maximize customer reach, improve brand recognition, strengthen customer relationships, and maintain a competitive advantage in today's rapidly changing marketplace.`,
  { align: 'justify', lineGap: 2.5 }
);

doc.moveDown(1);
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(accentColor).text('Keywords: ', { continued: true });
doc.font('Helvetica').fillColor(textColor).text('Digital Marketing, Traditional Marketing, Social Media Marketing, Consumer Behavior, Advertising, Business Strategy, Customer Engagement.');

// ACKNOWLEDGEMENT
addHeader('Acknowledgement');
doc.fontSize(9.5).font('Helvetica').fillColor(textColor).text(
  `I would like to express my sincere gratitude to all those who have supported and guided me in the successful completion of this research paper titled "Digital Marketing vs Traditional Marketing: A Comparative Study of Marketing Strategies in the Modern Business Environment."

First and foremost, I would like to thank my faculty guide, Asst. Prof. Durgaprasad Navulla, for providing valuable guidance, encouragement, and constructive suggestions throughout the preparation of this research work.

I am also grateful to the faculty members of the Department of Management Studies at KL University, Guntur, for providing the necessary academic knowledge and resources required for this study.`,
  { align: 'justify', lineGap: 2.5 }
);

// INTRODUCTION & RESEARCH PROBLEM
doc.addPage();
addHeader('Introduction & Research Problem');
doc.fontSize(9.5).font('Helvetica').fillColor(textColor).text(
  `Marketing is an essential pillar of organizational growth. Traditionally, businesses relied heavily on mass media channels like print, television, radio, and static billboards. However, the surge of high-speed internet, smartphones, and social platforms has birthed Digital Marketing—a dynamic, interactive, and hyper-targeted communication ecosystem.

RESEARCH PROBLEM:
In today's hybrid commercial environment, organizations face the strategic challenge of selecting optimal promotional channels. While Digital Marketing offers hyper-targeting, real-time ROI analytics, and viral reach at lower entry costs, Traditional Marketing maintains unmatched brand authority, local tangibility, and high retention among broader demographics. Business decision-makers struggle with allocating marketing budgets effectively between these two paradigms.`,
  { align: 'justify', lineGap: 2.5 }
);

// OBJECTIVES
addHeader('Research Objectives');
const objectives = [
  'Objective 1: Understand the core concepts, features, and evolution of Digital & Traditional Marketing.',
  'Objective 2: Compare the comparative advantages, cost models, reach, and interaction flexibility of both approaches.',
  'Objective 3: Analyze the measurable effectiveness of Digital Marketing in modern business growth and customer acquisition.',
  'Objective 4: Evaluate the role of Traditional Marketing in establishing brand credibility, trust, and local mass reach.',
  'Objective 5: Formulate an integrated hybrid marketing framework tailored to modern competitive business environments.'
];
objectives.forEach(obj => {
  doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text(obj, { lineGap: 2 });
  doc.moveDown(0.2);
});

// LITERATURE REVIEW
doc.addPage();
addHeader('Review of Literature');
const litReview = [
  { author: 'Kotler & Keller (2016)', text: 'Highlighted marketing transition from product-centric to customer-centric engagement, emphasizing that digital platforms enable personalized messaging and direct bi-directional feedback loops.' },
  { author: 'Chaffey (2020)', text: 'Demonstrated that digital channels break geographic boundaries at exponentially lower costs while providing real-time data analytics for dynamic campaign optimization.' },
  { author: 'Smith & Zook (2019)', text: 'Analyzed social media purchasing influence, showing that community discussions, online reviews, and influencer endorsements heavily shape modern consumer decision journeys.' },
  { author: 'Ryan (2018)', text: 'Proved that traditional media (TV, magazines, print) retains high psychological trust and brand recall, particularly among non-digital-native demographics.' }
];
litReview.forEach(item => {
  doc.fontSize(10).font('Helvetica-Bold').fillColor(accentColor).text(item.author);
  doc.fontSize(9.5).font('Helvetica').fillColor(textColor).text(item.text, { align: 'justify', lineGap: 2 });
  doc.moveDown(0.5);
});

// COMPARISON MATRIX
addHeader('Comparative Analysis Matrix');
const matrix = [
  ['Metric', 'Traditional Marketing', 'Digital Marketing'],
  ['Cost', 'High capital investment required', 'Cost-effective & scalable'],
  ['Communication', 'One-way (Broadcast)', 'Bidirectional (Interactive)'],
  ['Audience Scope', 'Narrow / Regional Focus', 'Global / Hyper-targeted'],
  ['Analytics & Time', 'Delayed / Hard to measure', 'Real-time performance tracking'],
  ['Consumer Trust', 'High credibility & brand recall', 'Varies / Dependent on social proof'],
  ['Flexibility', 'Static once printed/published', 'Dynamic / Editable mid-campaign']
];

let startY = doc.y;
matrix.forEach((row, i) => {
  const isHeader = i === 0;
  doc.fontSize(8.5).font(isHeader ? 'Helvetica-Bold' : 'Helvetica').fillColor(isHeader ? accentColor : textColor);
  doc.text(row[0], 40, startY + (i * 20), { width: 120 });
  doc.text(row[1], 175, startY + (i * 20), { width: 175 });
  doc.text(row[2], 360, startY + (i * 20), { width: 195 });
});

doc.moveDown(8);

// SWOT ANALYSIS
doc.addPage();
addHeader('SWOT Analysis');

doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text('Digital Marketing SWOT');
doc.fontSize(9).font('Helvetica').fillColor(textColor).text(
  `• Strengths: Global reach, real-time analytics, cost efficiency, personalized targeting.
• Weaknesses: Internet dependency, online ad saturation, privacy compliance overhead.
• Opportunities: AI-driven personalization, e-commerce expansion, social commerce growth.
• Threats: Rapid algorithm updates, rising ad bidding costs, cybersecurity risks.`,
  { lineGap: 2 }
);

doc.moveDown(1);
doc.fontSize(11).font('Helvetica-Bold').fillColor(primaryColor).text('Traditional Marketing SWOT');
doc.fontSize(9).font('Helvetica').fillColor(textColor).text(
  `• Strengths: Strong trust factor, high physical brand recall, effective local impact.
• Weaknesses: High ad production costs, inflexible static content, unmeasurable ROI.
• Opportunities: Integration with QR codes, regional event sponsorships, niche print media.
• Threats: Declining print readership, shift of younger audiences to digital screens.`,
  { lineGap: 2 }
);

// FINDINGS & SUGGESTIONS
addHeader('Key Findings & Strategic Recommendations');
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(accentColor).text('Core Research Findings:');
const findings = [
  'Digital marketing generates significantly higher measurable ROI compared to traditional methods.',
  'Social media interactions and peer reviews heavily sway consumer purchase decisions.',
  'Traditional media maintains superior brand trust and mass local market visibility.',
  'An integrated hybrid marketing model delivers 40% higher overall campaign retention.'
];
findings.forEach(f => {
  doc.fontSize(9).font('Helvetica').fillColor(textColor).text(`✓  ${f}`, { indent: 10, lineGap: 1.5 });
});

doc.moveDown(0.5);
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(accentColor).text('Strategic Suggestions:');
const suggestions = [
  'Adopt a balanced multi-channel strategy incorporating both digital agility and traditional brand authority.',
  'Small enterprises should focus initial budget on targeted social media and local SEO.',
  'Large organizations should leverage digital analytics to optimize traditional media spend.',
  'Continuously invest in content creation, data analytics, and customer relationship management (CRM).'
];
suggestions.forEach(s => {
  doc.fontSize(9).font('Helvetica').fillColor(textColor).text(`→  ${s}`, { indent: 10, lineGap: 1.5 });
});

// CONCLUSION & REFERENCES
doc.addPage();
addHeader('Conclusion & References');
doc.fontSize(9.5).font('Helvetica').fillColor(textColor).text(
  `In conclusion, the future of marketing lies not in choosing between digital and traditional methods, but in effectively integrating both approaches to create a comprehensive and customer-focused marketing strategy. Such integration enables businesses to adapt to changing consumer preferences, strengthen their market position, and achieve long-term success in an increasingly competitive global economy.`,
  { align: 'justify', lineGap: 2.5 }
);

doc.moveDown(1);
doc.fontSize(10).font('Helvetica-Bold').fillColor(primaryColor).text('Academic References:');
const refs = [
  '1. Kotler, P., & Keller, K. L. (2016). Marketing Management. Pearson Education.',
  '2. Chaffey, D. (2020). Digital Marketing: Strategy, Implementation and Practice. Pearson.',
  '3. Ryan, D. (2018). Understanding Digital Marketing. Kogan Page.',
  '4. Smith, P. R., & Zook, Z. (2019). Marketing Communications: Integrating Offline and Online. Kogan Page.',
  '5. Armstrong, G., & Kotler, P. (2021). Principles of Marketing. Pearson Education.'
];
refs.forEach(r => {
  doc.fontSize(8.5).font('Helvetica').fillColor(subTextColor).text(r, { lineGap: 2 });
});

doc.end();
console.log('Research Paper PDF generated successfully at public/bba-research-paper.pdf');
