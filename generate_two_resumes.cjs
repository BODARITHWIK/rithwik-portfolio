const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

const primaryColor = '#0f172a'; // Dark Slate
const btechAccent = '#0284c7'; // Sky Blue for Tech
const bbaAccent = '#0d9488'; // Teal for BBA
const textColor = '#1e293b';
const subTextColor = '#475569';

function addHeader(doc, title, accent) {
  doc.moveDown(0.4);
  doc.fontSize(11).font('Helvetica-Bold').fillColor(accent).text(title.toUpperCase(), { characterSpacing: 0.5 });
  doc.moveDown(0.1);
  doc.strokeColor('#cbd5e1').lineWidth(1).moveTo(36, doc.y).lineTo(559, doc.y).stroke();
  doc.moveDown(0.3);
}

// -------------------------------------------------------------
// 1. GENERATE UPDATED B.TECH RESUME (public/B.Tech-Resume.pdf)
// -------------------------------------------------------------
function generateBTechResume() {
  const doc = new PDFDocument({ size: 'A4', margin: 36 });
  const outputPath = path.join(__dirname, 'public', 'B.Tech-Resume.pdf');
  doc.pipe(fs.createWriteStream(outputPath));

  // Header
  doc.fontSize(22).font('Helvetica-Bold').fillColor(primaryColor).text('BODA RITHWIK', { align: 'center' });
  doc.moveDown(0.2);
  doc.fontSize(10).font('Helvetica-Bold').fillColor(btechAccent).text(
    'Full Stack Developer | Cloud Native Engineer | B.Tech CSIT + BBA (Dual Degree)',
    { align: 'center' }
  );
  doc.moveDown(0.25);
  doc.fontSize(8.5).font('Helvetica').fillColor(subTextColor).text(
    '+91 6300933175   |   bodarithwik416@gmail.com   |   Anakapalle, AP   |   LinkedIn   |   GitHub',
    { align: 'center' }
  );

  // About
  addHeader(doc, 'About', btechAccent);
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text(
    "B.Tech CSIT (Computer Science & Information Technology) + BBA dual-degree undergraduate at KL University (CGPA: 8.51) with hands-on experience in full stack development, cloud-native architecture, and DevOps. Skilled in React.js, Node.js, Spring Boot, AWS, Docker, and Kubernetes. Holds Microsoft Azure (AZ-900) and Oracle Cloud DevOps certifications. Seeking a fresher role in software development or cloud engineering.",
    { align: 'justify', lineGap: 2 }
  );

  // Education (B.Tech FIRST, BBA SECOND)
  addHeader(doc, 'Education', btechAccent);

  // 1. B.Tech FIRST
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('B.Tech – Computer Science & Information Technology (CSIT)', { continued: true });
  doc.font('Helvetica-Bold').fillColor(subTextColor).text('  [June 2023 – June 2027]', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('KL University, Vijayawada | CGPA: 8.51 / 10.0');
  doc.moveDown(0.3);

  // 2. BBA SECOND
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('BBA – Bachelor of Business Administration (Dual Degree)', { continued: true });
  doc.font('Helvetica-Bold').fillColor(subTextColor).text('  [June 2024 – June 2027]', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('KL University, Vijayawada | CGPA: 8.68 / 10.0');
  doc.moveDown(0.3);

  // 3. Intermediate
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Intermediate (MPC) – Class XII', { continued: true });
  doc.font('Helvetica-Bold').fillColor(subTextColor).text('  [2021 – 2023]', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('Narayana Junior College');
  doc.moveDown(0.3);

  // 4. SSC
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Secondary School Certificate – Class X', { continued: true });
  doc.font('Helvetica-Bold').fillColor(subTextColor).text('  [2019 – 2021]', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('Bhashyam High School');

  // Technical Skills
  addHeader(doc, 'Technical Skills', btechAccent);
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Languages: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('C, Java');
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Web Development: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('HTML5, CSS3, React.js, Node.js, Spring Boot');
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Cloud & DevOps: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('AWS, Oracle Cloud (OCI), Kubernetes, Docker, CI/CD Pipelines, GitHub Actions');
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Databases: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('MySQL, MongoDB');
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Core Concepts: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('DSA, REST APIs, Microservices, Authentication, Full Stack Development');

  // Technical Projects
  addHeader(doc, 'Projects', btechAccent);

  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Cloud-Native Student Management System', { continued: true });
  doc.font('Helvetica-Bold').fillColor(subTextColor).text('  [In Progress]', { align: 'right' });
  doc.fontSize(8).font('Helvetica-Oblique').fillColor(btechAccent).text('Spring Boot, AWS, Docker, Kubernetes, GitHub Actions');
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Developed a cloud-native platform using Kubernetes and microservices architecture on AWS, ensuring high scalability and fault tolerance.', { indent: 10, lineGap: 1 });
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Automated deployments via GitHub Actions CI/CD pipelines with Dockerised containers, reducing manual deployment overhead significantly.', { indent: 10, lineGap: 1 });
  doc.moveDown(0.3);

  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Car Rental System – Full Stack Application', { continued: true });
  doc.font('Helvetica-Bold').fillColor(subTextColor).text('  [2025]', { align: 'right' });
  doc.fontSize(8).font('Helvetica-Oblique').fillColor(btechAccent).text('Node.js, HTML5, CSS3, JavaScript');
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Built a full-stack car rental app with role-based authentication, admin/customer roles, and real-time availability tracking across devices.', { indent: 10, lineGap: 1 });
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Designed responsive UI with HTML/CSS/JS and RESTful backend services in Node.js for seamless booking management.', { indent: 10, lineGap: 1 });
  doc.moveDown(0.3);

  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('ERP Software Model', { continued: true });
  doc.font('Helvetica-Bold').fillColor(subTextColor).text('  [In Progress]', { align: 'right' });
  doc.fontSize(8).font('Helvetica-Oblique').fillColor(btechAccent).text('ERP Management System');
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Building an ERP-based academic management system to streamline university workflows for scheduling, records, and resource allocation.', { indent: 10, lineGap: 1 });
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Designing role-based access control with secure authentication for staff, faculty, and administrators ensuring structured data management across departments.', { indent: 10, lineGap: 1 });

  // Certifications
  addHeader(doc, 'Certifications', btechAccent);
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Microsoft Certified: Azure Fundamentals (AZ-900) – Microsoft (2025)', { indent: 10, lineGap: 1 });
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Oracle Cloud Infrastructure 2025 Certified DevOps Professional – Oracle (2025)', { indent: 10, lineGap: 1 });
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Linguaskill English Certification – Cambridge University (2024)', { indent: 10, lineGap: 1 });

  // Languages & Strengths
  addHeader(doc, 'Languages & Strengths', btechAccent);
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Languages: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('English • Telugu');
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Strengths: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('Leadership • Problem Solving • Adaptability • Communication');

  doc.end();
  doc.on('finish', () => {
    console.log('B.Tech Resume generated at public/B.Tech-Resume.pdf');
    fs.copyFileSync(path.join(__dirname, 'public', 'B.Tech-Resume.pdf'), path.join(__dirname, 'public', 'resume-btech.pdf'));
    fs.copyFileSync(path.join(__dirname, 'public', 'B.Tech-Resume.pdf'), path.join(__dirname, 'public', 'resume.pdf'));
    console.log('Copied primary B.Tech resume to public/resume-btech.pdf and public/resume.pdf');
  });
}

// -------------------------------------------------------------
// 2. GENERATE BBA RESUME (public/BBA-Resume.pdf)
// -------------------------------------------------------------
function generateBBAResume() {
  const doc = new PDFDocument({ size: 'A4', margin: 36 });
  const outputPath = path.join(__dirname, 'public', 'BBA-Resume.pdf');
  doc.pipe(fs.createWriteStream(outputPath));

  // Header
  doc.fontSize(22).font('Helvetica-Bold').fillColor(primaryColor).text('BODA RITHWIK', { align: 'center' });
  doc.moveDown(0.2);
  doc.fontSize(10).font('Helvetica-Bold').fillColor(bbaAccent).text(
    'Social Media Marketing & Content Enthusiast | Digital Marketing Researcher | BBA + B.Tech (Dual Degree)',
    { align: 'center' }
  );
  doc.moveDown(0.25);
  doc.fontSize(8.5).font('Helvetica').fillColor(subTextColor).text(
    '+91 6300933175   |   bodarithwik416@gmail.com   |   Anakapalle, AP   |   LinkedIn   |   GitHub',
    { align: 'center' }
  );

  // Profile
  addHeader(doc, 'Profile Summary', bbaAccent);
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text(
    "BBA + B.Tech CSE & IT dual-degree undergraduate at KL University (CGPA: 8.68) with a marketing-focused BBA track and hands-on experience researching and presenting on digital marketing. Strong written communication (Cambridge Linguaskill certified), a builder's mindset from full-stack projects, and a track record of independently researching a topic, structuring it, and turning it into a polished, presentation-ready output. Looking to bring that same research-to-content pipeline to a Social Media Marketing internship.",
    { align: 'justify', lineGap: 2 }
  );

  // Marketing Experience
  addHeader(doc, 'Marketing & Content Experience', bbaAccent);
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

  // Coursework
  addHeader(doc, 'Relevant Coursework (BBA Marketing Electives)', bbaAccent);
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Advertising & Sales Promotion   •  Customer Relationship Management', { indent: 10 });

  // Education (B.Tech FIRST, BBA SECOND)
  addHeader(doc, 'Education', bbaAccent);

  // 1. B.Tech FIRST
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('B.Tech – Computer Science & Information Technology (CSIT)', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('  [June 2023 – June 2027]', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('KL University, Vijayawada | CGPA: 8.51 / 10.0');
  doc.moveDown(0.35);

  // 2. BBA SECOND
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('BBA – Bachelor of Business Administration (Dual Degree)', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('  [June 2024 – June 2027]', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('KL University, Vijayawada | CGPA: 8.68 / 10.0');
  doc.moveDown(0.35);

  // 3. Intermediate
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Intermediate (MPC) – Class XII', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('  [2021 – 2023]', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('Narayana Junior College');
  doc.moveDown(0.35);

  // 4. SSC
  doc.fontSize(9).font('Helvetica-Bold').fillColor(primaryColor).text('Secondary School Certificate – Class X', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('  [2019 – 2021]', { align: 'right' });
  doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(subTextColor).text('Bhashyam High School');

  // Certifications & Strengths
  addHeader(doc, 'Certifications & Strengths', bbaAccent);
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Linguaskill English Certification – Cambridge University (2024)', { indent: 10, lineGap: 1 });
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Microsoft Certified: Azure Fundamentals (AZ-900) – Microsoft (2025)', { indent: 10, lineGap: 1 });
  doc.fontSize(8.5).font('Helvetica').fillColor(textColor).text('•  Oracle Cloud Infrastructure 2025 Certified DevOps Professional – Oracle (2025)', { indent: 10, lineGap: 1 });
  doc.moveDown(0.2);
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Languages: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('English • Telugu');
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(textColor).text('Key Strengths: ', { continued: true });
  doc.font('Helvetica').fillColor(subTextColor).text('Leadership • Problem Solving • Adaptability • Communication');

  doc.end();
  doc.on('finish', () => {
    console.log('BBA Resume generated at public/BBA-Resume.pdf');
    fs.copyFileSync(path.join(__dirname, 'public', 'BBA-Resume.pdf'), path.join(__dirname, 'public', 'resume-bba.pdf'));
  });
}

generateBTechResume();
generateBBAResume();
