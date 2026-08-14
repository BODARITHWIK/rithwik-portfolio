const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const doc = new PDFDocument({
  size: 'A4',
  margin: 36, // 0.5 inch margins
});

const outputPath = path.join(__dirname, 'public', 'resume.pdf');
doc.pipe(fs.createWriteStream(outputPath));

// Colors
const primaryColor = '#0f172a'; // Dark Slate Navy
const accentColor = '#0284c7'; // Deep Sky Blue
const textColor = '#1e293b'; // Slate 800
const subTextColor = '#475569'; // Slate 600

// Helper line divider
function addSectionHeader(title) {
  doc.moveDown(0.4);
  doc.fontSize(11).font('Helvetica-Bold').fillColor(accentColor).text(title.toUpperCase(), { characterSpacing: 0.5 });
  doc.moveDown(0.1);
  doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(36, doc.y).lineTo(559, doc.y).stroke();
  doc.moveDown(0.3);
}

// Header Name & Title
doc.fontSize(22).font('Helvetica-Bold').fillColor(primaryColor).text('BODA RITHWIK', { align: 'center' });
doc.moveDown(0.2);
doc.fontSize(9.5).font('Helvetica-Oblique').fillColor(accentColor).text(
  'Social Media Marketing & Content Enthusiast | Digital Marketing Researcher | B.Tech CSIT + BBA (Dual Degree)',
  { align: 'center' }
);
doc.moveDown(0.25);
doc.fontSize(8.5).font('Helvetica').fillColor(subTextColor).text(
  '+91 6300933175   |   bodarithwik416@gmail.com   |   Anakapalle, AP   |   LinkedIn   |   GitHub',
  { align: 'center' }
);

// PROFILE
addSectionHeader('Profile');
doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text(
  "B.Tech CSIT (Computer Science & Information Technology) + BBA dual-degree undergraduate at KL University (CGPA: 8.68) with a marketing-focused BBA track and hands-on experience researching and presenting on digital marketing. Strong written communication (Cambridge Linguaskill certified), a builder's mindset from full-stack projects, and a track record of independently researching a topic, structuring it, and turning it into a polished, presentation-ready output. Looking to bring that same research-to-content pipeline to a Social Media Marketing internship.",
  { align: 'justify', lineGap: 2 }
);

// MARKETING & CONTENT EXPERIENCE
addSectionHeader('Marketing & Content Experience');
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('Digital Marketing Research Project', { continued: true });
doc.font('Helvetica-Bold').fillColor(subTextColor).text('  KL University', { align: 'right' });
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('Independent Research | BBA Marketing coursework');
doc.moveDown(0.2);

const expBullets = [
  'Researched and wrote a comparative paper on Digital Marketing vs. Traditional Marketing, independently structuring the argument and content from scratch.',
  'Reformatted the paper to match a formal academic journal layout (International Journal of Science Technology and Management), demonstrating attention to formatting and presentation standards.',
  'Converted the written research into a formatted PowerPoint presentation for delivery, translating dense written content into a clear, visual, audience-ready format.'
];
expBullets.forEach((bullet) => {
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text(`•  ${bullet}`, { indent: 10, lineGap: 1.5 });
  doc.moveDown(0.15);
});

// RELEVANT COURSEWORK
addSectionHeader('Relevant Coursework (BBA Marketing Electives)');
doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Advertising & Sales Promotion   •  Customer Relationship Management', { indent: 10 });

// EDUCATION
addSectionHeader('Education');

// Edu 1
doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('B.Tech – Computer Science & Information Technology (CSIT)', { continued: true });
doc.font('Helvetica').fillColor(subTextColor).text('June 2023 – June 2027', { align: 'right' });
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('KL University, Vijayawada | CGPA: 8.51 / 10.0');
doc.moveDown(0.3);

// Edu 2
doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('BBA – Bachelor of Business Administration (Dual Degree)', { continued: true });
doc.font('Helvetica').fillColor(subTextColor).text('June 2024 – June 2027', { align: 'right' });
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('KL University, Vijayawada | CGPA: 8.68 / 10.0');
doc.moveDown(0.3);

// Edu 3
doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Intermediate (MPC) – Class XII', { continued: true });
doc.font('Helvetica').fillColor(subTextColor).text('2021 – 2023', { align: 'right' });
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('Narayana Junior College');
doc.moveDown(0.3);

// Edu 4
doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Secondary School Certificate – Class X', { continued: true });
doc.font('Helvetica').fillColor(subTextColor).text('2020 – 2021', { align: 'right' });
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('Bhashyam High School');

// OTHER PROJECTS
addSectionHeader('Other Projects');

doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Cloud-Native Student Management System', { continued: true });
doc.font('Helvetica').fillColor(subTextColor).text('In Progress', { align: 'right' });
doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Built a cloud-native platform using Kubernetes and microservices on AWS with automated CI/CD via GitHub Actions.', { indent: 10, lineGap: 1 });
doc.moveDown(0.3);

doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Car Rental System – Full Stack Application', { continued: true });
doc.font('Helvetica').fillColor(subTextColor).text('2025', { align: 'right' });
doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Built a full-stack booking app with role-based authentication and real-time availability tracking.', { indent: 10, lineGap: 1 });

// CERTIFICATIONS
addSectionHeader('Certifications');
const certs = [
  'Linguaskill English Certification – Cambridge University (2024)',
  'Microsoft Certified: Azure Fundamentals (AZ-900) – Microsoft (2025)',
  'Oracle Cloud Infrastructure 2025 Certified DevOps Professional – Oracle (2025)'
];
certs.forEach(cert => {
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text(`•  ${cert}`, { indent: 10, lineGap: 1 });
  doc.moveDown(0.1);
});

// LANGUAGES & STRENGTHS
addSectionHeader('Languages & Strengths');
doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Languages: ', { continued: true });
doc.font('Helvetica').fillColor(subTextColor).text('English, Telugu');
doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Strengths: ', { continued: true });
doc.font('Helvetica').fillColor(subTextColor).text('Leadership, Communication, Adaptability, Problem Solving');

doc.end();
console.log('Resume PDF generated successfully at public/resume.pdf');
