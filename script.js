/* ============================================================
   DPSHMUN 2026 — site interactions
   Plain vanilla JavaScript, no dependencies.
============================================================ */
   const SECRETARIAT = [
   { role: "Secretary-General", name: "Pritha Kesharwani", grade: "Grade 12", bio: "Pritha Kesharwani is a 12th-grade student at DPSH.  Having attended a considerable number of MUNs in various capacities, Pritha still sees every conference as a chance to learn something new and improve. Besides MUNs she enjoys critically analyzing current affairs and news and getting into political debates. Known for her bubbly personality and affinity towards social interactions, she brings enthusiasm to every space she is part of. She looks forward to making the most of this opportunity of serving Secretary General at DPSH MUN 2026 and ensuring an optimum delegate experience.", image: "secretariat/Pritha Kesharwani.jpeg" },
   { role: "Deputy Secretary-General", name: "Kaynat Gupta", grade: "Grade 12", bio: "Kaynat Gupta, a student of grade 12 at DPSH as a leader who tries to be the voice, from being delegate affairs for three years at different conferences to Dy. Sec gen with utmost gratitude. Kaynat showcases interests in design, ethics and communication all while believing in the essence of combining human psychology, structure yet enhancing creative freedom. Her leadership is portrayed in everyday tasks which require initiative and getting work done with precision. Kaynat enjoys unhealthy amounts of good iced coffees and rewatching sitcoms (himym & psych) just trying to figure out everything around her with humour. Kaynat hopes this conference runs smoothly while  being open to helping any delegate,  excited to make this conference ‘legend wait for it dary’.", image: "secretariat/Kaynat.jpeg" },
   { role: "Director-General", name: "Anirudh Sai Bhimrao", grade: "Grade 12", bio: "Anirudh Sai Bhimrao is a 12th grader from DPSH with extensive experience in MUN conferences, where he has earned numerous awards. Representing his school, district, and the state of Telangana, Anirudh is known for his exceptional basketball skills and also serves as the School Sports Captain, while remaining a dedicated MPC student recognized for his academic excellence. Aspiring to do it all, he balances academics and extracurriculars with enthusiasm. Despite his rigorous schedule, as a passionate cinephile, you’ll always find him watching the latest Telugu movies and enjoying sitcoms. He’s honoured to serve as the Director General and strives to provide the best experience to all the delegates.", image: "secretariat/Anirudh.JPG" },
   { role: "Charge D'Affaires", name: "Mahika Tyagi", grade: "Grade 12", bio: "Mahika Tyagi, a 12th grader at DPS Hyderabad, entered the MUN circuit four years ago and has since participated in numerous conferences, winning several awards and earning recognition for her energetic and passionate debating. With a deep commitment to international relations and human rights, she loves fighting for what’s right. Outside the world of MUNs, Mahika can often be found raving about Formula 1 or acting like Spotify is her second home. A proud extrovert, she’s always up for meeting new people, making terrible jokes, and somehow finding someone to laugh at them. As Charge D’Affaires, she’s committed to ensuring that this edition of DPSH MUN is both a meaningful and enjoyable experience for every delegate.", image: "secretariat/Mahika.jpg" },
   { role: "Deputy Charge D'Affaires", name: "Akshaini Sinha", grade: "Grade 12", bio: "Akshaini Sinha, a Grade 12 student at DPS Hyderabad, steps into the role of Deputy Charge d’Affaires for DPSH MUN 2026. Having grown through her MUN journey, she brings both composure and wit to the Secretariat, ensuring that delegates feel supported while never letting the atmosphere get too serious. Akshaini believes that conferences run best when professionalism is paired with warmth and laughter, and ensures that every delegate feels included and supported. Beyond academics, she enjoys creative projects and memorable experiences, reflecting her belief that diplomacy is not only about rules but also about building connections.She is excited to welcome you to DPSH MUN 2026 and looks forward to making this edition both professional and memorable.", image: "secretariat/Akshaini.jpg" },
   { role: "USG, Policy", name: "Sutanu Datta", grade: "Grade 11", bio: "Sutanu, a Grade 11 student, has been actively part of the MUN circuit for a while now, having represented various committees. As USG Policy, his focus is on making sure the debate stays sharp, the research stays credible, and every delegate walks away having genuinely learned something with great confidence.Outside MUN, he keeps things pretty simple: football, gaming, and just unwinding when he gets the chance. He believes good communication is at the heart of both good diplomacy and good conversation, and he's looking forward to bringing that energy to this conference.", image: "secretariat/Sutanu.JPG" },
   { role: "USG, Policy", name: "Tanish Reddy Panga", grade: "Grade 12", bio: "Meet Tanish Reddy, a Grade 12 Commerce student serving as USG of Policy at this year's DPSH MUN. The role demands strong research and analytical skills, excellent communication, prior leadership experience in MUN, and the ability to work under strict deadlines without compromising on quality, With over multiple  MUN conferences of hands-on experience across the Hyderabad and Bangalore circuits, he brings sharp analytical thinking and a genuine passion for diplomacy to the table. He values every delegate's perspective and thrives on collaborative problem-solving, all while staying calm and composed under pressure. His strong sense of discipline shines through in his ability to consistently deliver within given deadlines. Through his leadership, Tanish aims to make this year's policy discussions well-researched, innovative, and truly memorable for every delegate.", image: "secretariat/Tanish.jpeg" },
   { role: "USG, Delegate Affairs", name: "Aarav Pandey", grade: "Grade 11", bio: "Meet Aarav Pandey - an 11th grader dedicated to the MUN Circuit and making every MUN better. Using his experience from other fields, he hopes to make DPSHMUN as good as possible. Being a sportsperson, he believes that strong communication and team work can elevate any experience. Through DPSHMUN, he hopes to make a strong impact in the MUN circuit through his unique ideas and great work ethic. When he’s not going to MUNs, he’s busy playing basketball or watching football. He hopes to make this year’s DPSHMUN the best it can be.", image: "secretariat/Aarav.JPG" },
   { role: "USG, Delegate Affairs", name: "Tarika Kasliwal", grade: "Grade 11", bio: "Meet Tarika—an 11th-grade MEC  student who believes every great conversation has the power to shape perspectives. Currently serving as the USG Delegate Affairs at DPSH MUN , she has been an active part of the MUN circuit for the past two years, participating in multiple conferences and continuously growing as both a delegate and an organizer. A multiple award winner in debating and public speaking, Tarika enjoys expressing ideas with confidence and clarity. Beyond MUNs, she is a state-level Taekwondo player who values discipline, resilience, and perseverance. When she's not preparing for her next conference, you'll likely find her watching movies or listening to music. She's excited to welcome delegates from diverse backgrounds and help make this conference a memorable experience for everyone!", image: "secretariat/Tarika.jpeg" },
   { role: "USG, Logistics", name: "Sarayu Reddy Tamma", grade: "Grade 11", bio: "Sarayu Reddy, is an 11th-grade student serving as the USG of Logistics for this year's MUN. She is an active part of the MUN Circuit, and has organized and volunteered at multiple events before. From game design to playing the violin, she thrives at the intersection of creativity and structure. As USG Logistics, whether she is strategizing her next move on the court or coordinating event details, she approaches every challenge with sharp problem-solving skills and a calm demeanor. Outside of academics and organizing, Sarayu spends her time reading books and listening to music. She is dedicated to building a seamless, stress-free, and memorable experience for every delegate at this conference.", image: "secretariat/Sarayu.JPG" },
   { role: "USG, Logistics", name: "Ananya Kambhammettu", grade: "Grade 11", bio: "Ananya, a Grade 11 Commerce student who is passionate about bringing people together through thoughtful dialogue. Currently serving as the USG of Logistics at DPSH MUN, she began her MUN journey in Grade 8 and has spent the past several years growing sometimes as an delegate the others as an organizer. Along the way, she has earned multiple awards at conferences, strengthening her skills in diplomacy, leadership, and problem-solving.Beyond MUNs, Ananya is passionate about writing, finance, and current affairs, and is the co-founder of Vichara, a youth-led blog that explores business, arts, and the ideas shaping our world. When she's not planning conferences or writing articles, you'll probably find her following Formula 1. She looks forward to helping create a seamless and memorable conference experience for every delegate.", image: "secretariat/Ananya.jpg" },
   { role: "USG, Hospitality", name: "Ridhi Kamtam", grade: "Grade 12", bio: "Ridhi Kamtam, a Grade 12 BiPC student, is serving as the USG for Hospitality at DPS MUN. Having participated in Model United Nations since Grade 8, she brings creativity, adaptability, and a collaborative spirit to the Secretariat. She is committed to making sure every delegate feels welcomed and has a smooth, enjoyable conference experience. Outside the  MUN, she enjoys getting lost in a good book ,listening to music, and discovering binge-worthy series. She is excited to be a part of DPS MUN 2026 and looks forward to making it a memorable experience for everyone.", image: "secretariat/Ridhi.jpg" },
   { role: "USG, Hospitality", name: "Gauri Heralgi", grade: "Grade 12", bio: "Gauri Heralgi is a Grade 12 biology student who is deeply fascinated by genetics, a field that constantly sparks her curiosity to learn and explore research. When she isn’t immersed in academics or psychological thrillers, she channels that same drive into reading and discovery. Beyond the classroom, Gauri has spent the past four years actively engaged in MUNs, both as a delegate and organizer, learning how debate unites people and proves that the pen is mightier than the sword. As USG Hospitality, she is committed to making DPSHMUN seamless, welcoming, and vibrant, ensuring every delegate feels at ease while the conference comes alive.", image: "secretariat/GauriHeralgi.JPG" },
   { role: "USG, Hospitality", name: "Daniica Bahri", grade: "Grade 12", bio: "Meet Daniica Bahri, your Under-Secretary-General for Hospitality.Dedicated, approachable, and detail-oriented, Daniica is committed to ensuring every delegate enjoys a welcoming and seamless conference experience. Having previously served as  USG Design, she brings valuable experience, a collaborative mindset, and a passion for creating an environment where delegates can focus on meaningful debate while feeling right at home.Outside the MUN circuit, she is an artist, aviation enthusiast, athlete, passionate dancer, and guitarist. Whether she's creating art, watching aircraft take to the skies, playing sports, performing through dance, or strumming her guitar, she enjoys exploring different creative and dynamic pursuits that shape her perspective.She is excited to be a part of the Secretariat and looks forward to making this conference an unforgettable experience for every delegate. See you at the conference!", image: "secretariat/Daniica.jpg" },
   { role: "USG, Design", name: "Chirag Bhawani", grade: "Grade 11", bio: "Chirag Bhawani is a Class 11 student at DPS Hyderabad who’s really into creativity, technology, and leadership. As part of the Design Team for DPS MUN, he likes turning ideas into cool visuals and experiences that people remember. He’s known for being curious, a good problem-solver, and always up for a new challenge, especially when it comes to mixing design with innovation. When he’s not busy with MUN or school, you’ll probably find him coding, playing basketball, reading, or getting creative with drumming and music.", image: "secretariat/ChiragBhavani.jpeg" },
   { role: "USG, Design", name: "Sharanya Nair", grade: "Grade 12", bio: "Sharanya Nair is a grade 12 Commerce student at Delhi Public School, Hyderabad. She believes that design is more than aesthetics- it is a powerful medium for communication, engagement, and creating a memorable conference experience. Beyond design, Sharanya is passionate about Model United Nations and enjoys the opportunity it provides to foster leadership, diplomacy, and critical thinking. With a keen interest in visual storytelling and innovation, she approaches every project with dedication and a willingness to learn. She hopes that each delegate will leave with not only fresh viewpoints and lasting friendships but a greater appreciation for collaboration and global affairs. ", image: "secretariat/Sharanya.jpg" },
   { role: "USG, Technology", name: "Ganesh Heralgi", grade: "Grade 12", bio: "Ganesh, a 12th grader at DPS Hyderabad, is a science enthusiast with a strong interest and passion for physics and mathematics. His curiosity and creativity led him to design and publish this year’s DPSHMUN website, built to be both aesthetic and functional. Having participated in several MUNs, he has gained valuable experience and recognition, including a Best Delegate award. His love for math extends into debating, researching, and coding, where he enjoys exploring new ideas. With an outgoing nature and attention to detail, Ganesh looks forward to contributing to DPSHMUN 2026 and helping make it a meaningful and engaging experience for everyone.", image: "secretariat/GaneshHeralgi.JPG" },
   { role: "USG, Technology", name: "Devna Menoth", grade: "Grade 12", bio: "Devna is a Grade 12 science student at DPS Hyderabad with a deep passion for artificial intelligence and technology. Her interests lie in developing AI projects and designing websites that are both creative and functional, skills she is excited to bring to her role as the USG of Technology for DPSHMUN 2026. Beyond academics, she is a Second Dan Black Belt in Karate, a journey that has instilled discipline, resilience, and leadership. With a keen eye for detail and a drive to innovate, Devna is dedicated to using technology to create a seamless and engaging experience for everyone at DPSHMUN 2026.  ", image: "secretariat/Devna.jpeg" },
   { role: "Head of Organising Committee", name: "Ashrisha Sinha", grade: "Grade 12", bio: "Ashrisha, a Grade 12 student in the BiPC stream, is all set to play the role of Head of Organizing Committee with a strong foundation in Model United Nations. Having served as both a delegate and a member of the Executive Board, she brings experience, enthusiasm, and a deep understanding of delegate dynamics to the Secretariat.Outside the MUN circuit,she’s known for her vibrant energy, attention to detail, and her drive to be an all-rounder in all sense. Outside the mun world, Ashrisha often enjoys rom-coms and laughing to death while watching sit-comsShe’s thrilled to be part of DPSH MUN 2026 and looks forward to making this edition unforgettable.", image: "secretariat/Ashrisha.jpg" },
   { role: "Head of Organising Committee", name: "Palak", grade: "Grade 11", bio: "Meet Palak, a Class 11 Commerce student at Delhi Public School, Hyderabad. Her leadership, strong communication skills, and dedication has earned her the position of OC Head not once, but thrice across different MUNs. Having been actively involved in the MUN circuit for several years, she has received multiple mentions for her work as a journalist. Palak is thrilled to be a part of DPSHMUN’26 and looks forward to giving her best  and making the most of every opportunity that comes her way.", image: "secretariat/Palak.jpg" }
];
const COMMITTEES = [
  { abbr: "UNSC", name: "United Nations Security Council", page: "committees/unsc.html", image: "logos/unsc.png"},
  { abbr: "UNHRC", name: "United Nations Human Rights Council", page: "committees/unhrc.html", image: "logos/unhrc.png" },
  { abbr: "DISEC", name: "Disarmament and International Security Committee", page: "committees/disec.html", image: "logos/disec.png" },
  { abbr: "INTERPOL", name: "International Criminal Police Organisation", page: "committees/interpol.html", image: "logos/interpol.png" },
  { abbr: "WHO", name: "World Health Organisation", page: "committees/who.html", image: "logos/who.png" },
  { abbr: "UNCSW", name: "United Nations Commission on the Status of Women", page: "committees/uncsw.html", image: "logos/uncsw.png" },
  { abbr: "UNCND", name: "United Nations Commission on Narcotic Drugs", page: "committees/uncnd.html", image: "logos/uncnd.png" },
  { abbr: "FIFA", name: "Fédération Internationale de Football Association", page: "committees/fifa.html", image: "logos/fifa.png" },
  { abbr: "AIPPM", name: "All India Political Party Meet", page: "committees/aippm.html", image: "logos/aippm.png" },
  { abbr: "IP", name: "International Press", page: "committees/ip.html", image: "logos/ip.png" },
  { abbr: "ECOSOC", name: "The United Nations Economic and Social Council ", page: "committees/ecosoc.html", image: "logos/ecosoc.png" },
  { abbr: "Junior UNCSW", name: "The Junior United Nations Commission on the Status of Women", page: "committees/juncsw.html", image: "logos/juncsw.png" },
  { abbr: "Junior UNHRC", name: "The Junior United Nations Human Rights Council", page: "committees/junhrc.html", image: "logos/junhrc.png" }
   ];
   

const grid = document.getElementById("committeesGrid");

COMMITTEES.forEach(c => {
  const card = document.createElement("a");
  card.className = "card";
  card.href = c.page;
  card.innerHTML = `
    <h3>${c.abbr}</h3>
    <p>${c.name}</p>
  `;
  grid.appendChild(card);
});

/* ---------- Resources Data ---------- */
const RESOURCES = [
  { title: "Code of Conduct", desc: "Download the official Code of Conduct PDF.", link: "CODE OF CONDUCT.pdf" },
  { title: "Liability Waiver & Device Declaration", desc: "Download the Liability Waiver and  Device Declaration PDF.", link: "liabilitywaiver&devicedec.pdf" },
  { title: "Floor Plan", desc: "Download the official floor plan PDF.", link: "FLOOR PLAN.pdf" },
  { title: "Delegate Guide", desc: "An introductory guide to help you during the conference.", link: "DelegateGuide.pdf" }
];

function renderResources() {
  const grid = document.getElementById("resourcesGrid");
  if (!grid) return; // prevents breaking if ID mismatch

  RESOURCES.forEach(r => {
    const card = document.createElement("a");   // anchor tag
    card.className = "card";
    card.href = r.link;
    card.target = "_blank";                     // open in new tab
    card.innerHTML = `
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
    `;
    grid.appendChild(card);
  });
}

renderResources();


/* ---------- Resources Videos Data ---------- */
const VIDEOS = [
  { title: "Video: What is MUN?", link: "https://www.youtube.com/watch?v=xZGhU6P3Dcc" },
  { title: "Video: Participating in a MUN", link: "https://www.youtube.com/watch?v=RPOFlQfwWVE" },
  { title: "Video: Flow of Debate", link: "https://www.youtube.com/watch?v=DQqOWmVSasE" },
  { title: "Video: Points and Motions", link: "https://www.youtube.com/watch?v=7sQQAKghwhs" },
  { title: "Video: How to Research", link: "https://www.youtube.com/watch?v=ukocFZ2MyDI" },
  { title: "Video: Moderated Caucus", link: "https://www.youtube.com/watch?v=8NwN1NiIDdI" },
];

function renderVideos() {
  const grid = document.getElementById("resourcesVideos");
  if (!grid) return; // prevents breaking if ID mismatch

  VIDEOS.forEach(v => {
    const card = document.createElement("a");   // anchor tag
    card.className = "card";
    card.href = v.link;
    card.target = "_blank";                     // open in new tab
    card.innerHTML = `
      <h3>${v.title}</h3>
    `;
    grid.appendChild(card);
  });
}

renderVideos();

/* ---------- Resources Websites Data ---------- */
const SITES = [
  { title: "DPSHMUN 2025", link: "https://dpshmun2025.vercel.app/" },
  { title: "DPSHMUN 2024", link: "https://dpshmun2024.netlify.app/" },
  { title: "DPSHMUN 2023", link: "https://dpshmun.vercel.app/" },
];

function renderSites() {
  const grid = document.getElementById("resourcesSites");
  if (!grid) return; // prevents breaking if ID mismatch

  SITES.forEach(ws => {
    const card = document.createElement("a");   // anchor tag
    card.className = "card";
    card.href = ws.link;
    card.target = "_blank";                     // open in new tab
    card.innerHTML = `
      <h3>${ws.title}</h3>
    `;
    grid.appendChild(card);
  });
}

renderSites();

/* ---------- Background Guides Data ---------- */
const BACKGROUND_GUIDES = [
  { title: "UNHRC Guide", desc: "Background guide for the Human Rights Council.", link: "unhrc.html" },
  { title: "UNSC Guide", desc: "Background guide for the Security Council.", link: "unsc.html" },
  { title: "WHO Guide", desc: "Background guide for the World Health Organization.", link: "who.html" },
  { title: "UNDP Guide", desc: "Background guide for the Development Programme.", link: "undp.html" }
];

function renderBackgroundGuides() {
  const grid = document.getElementById("guidesGrid");
  if (!grid) return;

  BACKGROUND_GUIDES.forEach(g => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = g.link;
    card.target = "_blank";
    card.innerHTML = `
      <h3>${g.title}</h3>
      <p>${g.desc}</p>
    `;
    grid.appendChild(card);
  });
}

renderBackgroundGuides();


/* ----- Allocations Data ----- */

const ALLOCATIONS =  [
  {
    Committee: "UNSC",
    Country : "People's Republic of China",
    Name: "Yash Chamariya ",
    Class: "11G"
  },
  {
    Committee: "UNSC",
    Country : "French Republic ",
    Name: "Aarit Jain",
    Class: "10H"
  },
  {
    Committee: "UNSC",
    Country : "Russian Federation",
    Name: "Pratham Nayak",
    Class: "10G"
  },
  {
    Committee: "UNSC",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Purav Mude",
    Class: "9G"
  },
  {
    Committee: "UNSC",
    Country : "United States of America",
    Name: "Shivansh Arjaris",
    Class: "10F"
  },
  {
    Committee: "UNSC",
    Country : "Democratic Republic of the Congo",
    Name: "Aishi Ahmed",
    Class: "8H"
  },
  {
    Committee: "UNSC",
    Country : "Federal Republic of Somalia",
    Name: "Aaradhya Meshineni ",
    Class: "9D"
  },
  {
    Committee: "UNSC",
    Country : "Hellenic Republic",
    Name: "T. Nayana",
    Class: "9D"
  },
  {
    Committee: "UNSC",
    Country : "Islamic Republic of Pakistan",
    Name: "Penmetsa Sreeharsha Vardhan Varma",
    Class: "11D"
  },
  {
    Committee: "UNSC",
    Country : "Kingdom of Bahrain",
    Name: "Rishik Nandigam",
    Class: "9A"
  },
  {
    Committee: "UNSC",
    Country : "Kingdom of Denmark",
    Name: "Saanvi Mishra",
    Class: "9I"
  },
  {
    Committee: "UNSC",
    Country : "Republic of Colombia",
    Name: "Misheeta Misra",
    Class: "8A"
  },
  {
    Committee: "UNSC",
    Country : "Republic of Latvia",
    Name: "Priyanshi Chaurasia ",
    Class: "10E"
  },
  {
    Committee: "UNSC",
    Country : "Republic of Liberia",
    Name: "Mayukha bommavaram",
    Class: "8D"
  },
  {
    Committee: "UNSC",
    Country : "Republic of Panama",
    Name: "Sai Sri Vishnu Tejas",
    Class: "12E"
  },
  {
    Committee: "UNSC",
    Country : "State of the Vatican City",
    Name: "Jaina Kochar",
    Class: "8D"
  },
  {
    Committee: "UNSC",
    Country : "Canada",
    Name: "Chikkam Hamsini",
    Class: "8A"
  },
  {
    Committee: "UNSC",
    Country : "Democratic People’s Republic of Korea",
    Name: "Ramineni Charan Sai",
    Class: "9C"
  },
  {
    Committee: "UNSC",
    Country : "Federative Republic of Brazil",
    Name: "Aakriti Gupta",
    Class: "9H"
  },
  {
    Committee: "UNSC",
    Country : "Kingdom of Spain",
    Name: "Devansh Sri Sai Edupuganti",
    Class: "9D"
  },
  {
    Committee: "UNSC",
    Country : "The State of Palestine",
    Name: "Anjali Ravindra",
    Class: "8D"
  },
  {
    Committee: "UNSC",
    Country : "Republic of Italy",
    Name: "SHRIYA REDDY PEDIREDDI",
    Class: "10C"
  },
  {
    Committee: "UNSC",
    Country : "Republic of Korea",
    Name: "Bhuvi Kumari ",
    Class: "9I"
  },
  {
    Committee: "UNSC",
    Country : "Swiss Confederation (Switzerland) ",
    Name: "Shishir Pallapothula",
    Class: "8H"
  },
  {
    Committee: "UNSC",
    Country : "United Arab Emirates",
    Name: "Gali Charvi",
    Class: "9F"
  },
  {
    Committee: "UNHRC",
    Country : "People’s Republic of China",
    Name: "Killi Chaitra",
    Class: "10C"
  },
  {
    Committee: "UNHRC",
    Country : "French Republic",
    Name: "Diva maru ",
    Class: "10C"
  },
  {
    Committee: "UNHRC",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Khush Mata",
    Class: "9H"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Albania",
    Name: "Naisha Nagendra Ragu ",
    Class: "9G"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Angola",
    Name: "Keya Pandey ",
    Class: "9B"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Benin",
    Name: "Arushi Balmuri",
    Class: "8D"
  },
  {
    Committee: "UNHRC",
    Country : "Plurinational State of Bolivia",
    Name: "Pranavi Lavu",
    Class: "8C"
  },
  {
    Committee: "UNHRC",
    Country : "Federative Republic of Brazil",
    Name: "Mitra Nandimandalam",
    Class: "11B"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Burundi",
    Name: "Boge Pujya Sreshta",
    Class: "9H"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Chile",
    Name: "Sanvee Malgave",
    Class: "10E"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Colombia",
    Name: "PULIMAMIDI ADWITHA REDDY",
    Class: "8I"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Côte d'Ivoire",
    Name: "Sonali Das",
    Class: "8I"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Cuba",
    Name: "MISHIKA DUGAR ",
    Class: "9B"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Cyprus",
    Name: "Keerthika Maradana",
    Class: "9B"
  },
  {
    Committee: "UNHRC",
    Country : "Czech Republic",
    Name: "Ojal Sangwar",
    Class: "9I"
  },
  {
    Committee: "UNHRC",
    Country : "Democratic Republic of the Congo",
    Name: "Tanusshiya Vennela",
    Class: "9A"
  },
  {
    Committee: "UNHRC",
    Country : "Dominican Republic",
    Name: "Thanishka Bingi ",
    Class: "8H"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Ecuador",
    Name: "Aditya Tripathi",
    Class: "9I"
  },
  {
    Committee: "UNHRC",
    Country : "Arab Republic of Egypt",
    Name: "JENYA MARIPI",
    Class: "9C"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Estonia",
    Name: "Gudipalli Ashwika",
    Class: "10F"
  },
  {
    Committee: "UNHRC",
    Country : "Federal Democratic Republic of Ethiopia",
    Name: "Laksh Poddar",
    Class: "9C"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Ghana",
    Name: "Karnati Tanya Krishna",
    Class: "9G"
  },
  {
    Committee: "UNHRC",
    Country : "Iceland",
    Name: "K Ranish Harshan Reddy",
    Class: "8C"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of India",
    Name: "Anish Ghosh",
    Class: "11B"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Indonesia",
    Name: "Aayushi Soni",
    Class: "11B"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Iraq",
    Name: "sabavath ayan",
    Class: "8B"
  },
  {
    Committee: "UNHRC",
    Country : "Italian Republic",
    Name: "Manvi Deeksha Kasu",
    Class: "10A"
  },
  {
    Committee: "UNHRC",
    Country : "Japan",
    Name: "Ishitva Jha",
    Class: "11F"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Kenya",
    Name: "NAVYA KISHORE",
    Class: "9D"
  },
  {
    Committee: "UNHRC",
    Country : "State of Kuwait",
    Name: "Shaurya Gupta",
    Class: "9F"
  },
  {
    Committee: "UNHRC",
    Country : "United Mexican States",
    Name: "Aishwarya Satish",
    Class: "11B"
  },
  {
    Committee: "UNHRC",
    Country : "Kingdom of the Netherlands",
    Name: "Duethi Vannepaga",
    Class: "11B"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of North Macedonia",
    Name: "Shanmukhapriya Gurjikinda",
    Class: "11H"
  },
  {
    Committee: "UNHRC",
    Country : "Islamic Republic of Pakistan",
    Name: "Hasika Pendem ",
    Class: "11I"
  },
  {
    Committee: "UNHRC",
    Country : "State of Qatar",
    Name: "K Nainika Reddy ",
    Class: "11A"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Korea",
    Name: "Rishvika kotha",
    Class: "10C"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of Slovenia",
    Name: "C.Siva Sai Nath Reddy",
    Class: "9C"
  },
  {
    Committee: "UNHRC",
    Country : "Republic of South Africa",
    Name: "Dhairya Shrimankar",
    Class: "9H"
  },
  {
    Committee: "UNHRC",
    Country : "Kingdom of Spain",
    Name: "Amritha Prabhuram",
    Class: "12E"
  },
  {
    Committee: "UNHRC",
    Country : "Swiss Confederation",
    Name: "Ruhaan Sarma",
    Class: "10F"
  },
  {
    Committee: "DISEC",
    Country : "United States of America",
    Name: "Aabir Gautham ",
    Class: "9G"
  },
  {
    Committee: "DISEC",
    Country : "Russian Federation",
    Name: "D.Reyansh reddy",
    Class: "9H"
  },
  {
    Committee: "DISEC",
    Country : "People’s Republic of China",
    Name: "Srikar Sai Pasupuleti",
    Class: "12E"
  },
  {
    Committee: "DISEC",
    Country : "French Republic",
    Name: "Varun Boyapati",
    Class: "11D"
  },
  {
    Committee: "DISEC",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Sriya Gorantla",
    Class: "10F"
  },
  {
    Committee: "DISEC",
    Country : "Islamic Republic of Afghanistan",
    Name: "Ishaant Anchala",
    Class: "9A"
  },
  {
    Committee: "DISEC",
    Country : "Argentine Republic",
    Name: "Navya Agarwal",
    Class: "8F"
  },
  {
    Committee: "DISEC",
    Country : "Commonwealth of Australia",
    Name: "Kadivella Reddiwandla Arjun Reddy",
    Class: "10A"
  },
  {
    Committee: "DISEC",
    Country : "Kingdom of Belgium",
    Name: "Nalluri Nishna Reddy",
    Class: "9A"
  },
  {
    Committee: "DISEC",
    Country : "Federative Republic of Brazil",
    Name: "Polsani Mahasri",
    Class: "9C"
  },
  {
    Committee: "DISEC",
    Country : "Canada",
    Name: "Aarav Gupta",
    Class: "10H"
  },
  {
    Committee: "DISEC",
    Country : "Republic of Korea",
    Name: "Shriyansh Thanneeru ",
    Class: "9B"
  },
  {
    Committee: "DISEC",
    Country : "Democratic People's Republic of Korea",
    Name: "Shanaya Maria Samson",
    Class: "8F"
  },
  {
    Committee: "DISEC",
    Country : "Arab Republic of Egypt",
    Name: "Shambhavi Johari",
    Class: "9H"
  },
  {
    Committee: "DISEC",
    Country : "Federal Republic of Germany",
    Name: "MACHAVARAM BRUNDASRI REDDY",
    Class: "9D"
  },
  {
    Committee: "DISEC",
    Country : "Republic of India",
    Name: "Chhavi",
    Class: "11G"
  },
  {
    Committee: "DISEC",
    Country : "Republic of Indonesia",
    Name: "Amerineni Divija Chowdary",
    Class: "9G"
  },
  {
    Committee: "DISEC",
    Country : "Islamic Republic of Iran",
    Name: "Shubhankar Singh ",
    Class: "9A"
  },
  {
    Committee: "DISEC",
    Country : "Republic of Iraq",
    Name: "Saara.Niraj.Kalamkar",
    Class: "10E"
  },
  {
    Committee: "DISEC",
    Country : "State of Israel",
    Name: "Kopparthi Annarapu Karthikeya Reddy",
    Class: "9E"
  },
  {
    Committee: "DISEC",
    Country : "Italian Republic",
    Name: "Gayathri kilaru ",
    Class: "9D"
  },
  {
    Committee: "DISEC",
    Country : "Japan",
    Name: "Aarav Shrivastava ",
    Class: "9B"
  },
  {
    Committee: "DISEC",
    Country : "Republic of Kenya",
    Name: "Niharika Jha",
    Class: "9I"
  },
  {
    Committee: "DISEC",
    Country : "State of Libya",
    Name: "Nimisha Reddy Vanga",
    Class: "8I"
  },
  {
    Committee: "DISEC",
    Country : "United Mexican States",
    Name: "Samrat Karn",
    Class: "8A"
  },
  {
    Committee: "DISEC",
    Country : "Kingdom of the Netherlands",
    Name: "Pehel Shah",
    Class: "8H"
  },
  {
    Committee: "DISEC",
    Country : "New Zealand",
    Name: "Mulinti VedaSree",
    Class: "8D"
  },
  {
    Committee: "DISEC",
    Country : "Kingdom of Norway",
    Name: "Sonakshi Mehar",
    Class: "8F"
  },
  {
    Committee: "DISEC",
    Country : "Islamic Republic of Pakistan",
    Name: "Arsh Mahendra",
    Class: "9I"
  },
  {
    Committee: "DISEC",
    Country : "Republic of Türkiye",
    Name: "Aadya Kiranmayee Talupuru ",
    Class: "8A"
  },
  {
    Committee: "DISEC",
    Country : "Republic of Poland",
    Name: "Mahika Mayukha Reddy Palle",
    Class: "9H"
  },
  {
    Committee: "DISEC",
    Country : "State of Qatar",
    Name: "RISHANN SINGAREDDY",
    Class: "8E"
  },
  {
    Committee: "DISEC",
    Country : "Kingdom of Saudi Arabia",
    Name: "Pitta Aaron George",
    Class: "8E"
  },
  {
    Committee: "DISEC",
    Country : "Republic of South Africa",
    Name: "Jaanya Kulshrestha",
    Class: "8C"
  },
  {
    Committee: "DISEC",
    Country : "Kingdom of Spain",
    Name: "Kotha sunay guptha",
    Class: "9C"
  },
  {
    Committee: "DISEC",
    Country : "Kingdom of Sweden",
    Name: "NAGA VENKATA AVINASH GUDIPATI",
    Class: "8G"
  },
  {
    Committee: "DISEC",
    Country : "Swiss Confederation",
    Name: "Nishanth Sai Gugulothu",
    Class: "8G"
  },
  {
    Committee: "DISEC",
    Country : "Syrian Arab Republic",
    Name: "Yashika Mittal",
    Class: "12A"
  },
  {
    Committee: "DISEC",
    Country : "Ukraine",
    Name: "Amarnadh Potlapalli",
    Class: "11I"
  },
  {
    Committee: "DISEC",
    Country : "United Arab Emirates",
    Name: "Joshnika Ulsala",
    Class: "9I"
  },
  {
    Committee: "UNCSW",
    Country : "United States of America",
    Name: "CHIPPADA NITYA ASHRITHA",
    Class: "10H"
  },
  {
    Committee: "UNCSW",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Soumya Gupta",
    Class: "10B"
  },
  {
    Committee: "UNCSW",
    Country : "People's Republic of China",
    Name: "Nishka Reddy",
    Class: "10B"
  },
  {
    Committee: "UNCSW",
    Country : "People's Republic of Bangladesh",
    Name: "Ishan Nair",
    Class: "11A"
  },
  {
    Committee: "UNCSW",
    Country : "Kingdom of Belgium",
    Name: "Riddhi Paharia",
    Class: "10F"
  },
  {
    Committee: "UNCSW",
    Country : "Belize",
    Name: "Nandan Lodha",
    Class: "9H"
  },
  {
    Committee: "UNCSW",
    Country : "Plurinational State of Bolivia",
    Name: " Riddhima Misra",
    Class: "9G"
  },
  {
    Committee: "UNCSW",
    Country : "Federative Republic of Brazil",
    Name: "Mantavya Sharma ",
    Class: "10D"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Cabo Verde",
    Name: "Suhani Bajaj",
    Class: "8I"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Chile",
    Name: "Sandhadi Shrija",
    Class: "12I"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Colombia",
    Name: "Gopisetty Sai Yashaswini ",
    Class: "10H"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Côte d'Ivoire",
    Name: "Sidhi Tickoo",
    Class: "9C"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Cuba",
    Name: "Aaradhya Sachin Kulkarni",
    Class: "9C"
  },
  {
    Committee: "UNCSW",
    Country : "Czech Republic",
    Name: "Bhaavika Prajna S",
    Class: "11B"
  },
  {
    Committee: "UNCSW",
    Country : "Democratic Republic of the Congo",
    Name: "Avnika Nair ",
    Class: "9E"
  },
  {
    Committee: "UNCSW",
    Country : "Dominican Republic",
    Name: "Moganti Sree Nithya",
    Class: "8C"
  },
  {
    Committee: "UNCSW",
    Country : "Federal Democratic Republic of Ethiopia",
    Name: "Vibha Dronamraju ",
    Class: "9I"
  },
  {
    Committee: "UNCSW",
    Country : "Gabonese Republic",
    Name: "Aarna Bartaria ",
    Class: "8C"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of India",
    Name: "Mihika Palaparthi",
    Class: "8F"
  },
  {
    Committee: "UNCSW",
    Country : "Italian Republic",
    Name: "Aashi Johri",
    Class: "10H"
  },
  {
    Committee: "UNCSW",
    Country : "Japan",
    Name: "Mythri Reddy Daggula ",
    Class: "10B"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Lithuania",
    Name: "Srihitha Reddy Bommireddy",
    Class: "10A"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Maldives",
    Name: "Swapnika Sripati ",
    Class: "12F"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Mali",
    Name: "Swaraj Rana ",
    Class: "10G"
  },
  {
    Committee: "UNCSW",
    Country : "United Mexican States",
    Name: "Kritika Tandon",
    Class: "11A"
  },
  {
    Committee: "UNCSW",
    Country : "Mongolia",
    Name: "Sannadi Ganesh Krishna Sai Reddy",
    Class: "8I"
  },
  {
    Committee: "UNCSW",
    Country : "Kingdom of Morocco",
    Name: "Anika Rao Derabail",
    Class: "11I"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Mozambique",
    Name: "ALISHA HASAN",
    Class: "9G"
  },
  {
    Committee: "UNCSW",
    Country : "Kingdom of the Netherlands",
    Name: "Krithi Vancha",
    Class: "11D"
  },
  {
    Committee: "UNCSW",
    Country : "Federal Republic of Nigeria",
    Name: "T.Durga Visishta ",
    Class: "8E"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of the Philippines",
    Name: "Thanvi Sangu",
    Class: "10D"
  },
  {
    Committee: "UNCSW",
    Country : "Portuguese Republic",
    Name: "M.Aditi Chahavan",
    Class: "9A"
  },
  {
    Committee: "UNCSW",
    Country : "State of Qatar",
    Name: "Navya Agarwal",
    Class: "10B"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of Korea",
    Name: "Tanisi alleni",
    Class: "10B"
  },
  {
    Committee: "UNCSW",
    Country : "Romania",
    Name: "Mamidi Chaitra Reddy",
    Class: "10B"
  },
  {
    Committee: "UNCSW",
    Country : "Kingdom of Saudi Arabia",
    Name: "Prisha Swain",
    Class: "10H"
  },
  {
    Committee: "UNCSW",
    Country : "Republic of South Africa",
    Name: "Varnika Nalapatla",
    Class: "12F"
  },
  {
    Committee: "UNCSW",
    Country : "Kingdom of Spain",
    Name: "Ashwika Verma",
    Class: "10E"
  },
  {
    Committee: "UNCSW",
    Country : "Democratic Socialist Republic of Sri Lanka",
    Name: "Anavi Rajurkar ",
    Class: "10A"
  },
  {
    Committee: "UNCSW",
    Country : "Afghanistan (initially Ukraine)",
    Name: "Soham Satpathy",
    Class: "10E"
  },
  {
    Committee: "ECOSOC",
    Country : "United States of America",
    Name: "Yashtika Kushwah",
    Class: "11H"
  },
  {
    Committee: "ECOSOC",
    Country : "Russian Federation",
    Name: "Anvitha Akkiraju",
    Class: "10B"
  },
  {
    Committee: "ECOSOC",
    Country : "People’s Republic of China",
    Name: "Sohalia Talwar",
    Class: "11J"
  },
  {
    Committee: "ECOSOC",
    Country : "French Republic",
    Name: "Sarayu cheruku",
    Class: "8E"
  },
  {
    Committee: "ECOSOC",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Billakanti Yoshita",
    Class: "10B"
  },
  {
    Committee: "ECOSOC",
    Country : "People’s Democratic Republic of Algeria",
    Name: "Daivik Kakati",
    Class: "8I"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Armenia",
    Name: "Amancharla Sri Ananya",
    Class: "8I"
  },
  {
    Committee: "ECOSOC",
    Country : "Commonwealth of Australia",
    Name: "Aditi Mishra ",
    Class: "10A"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Austria",
    Name: "Vihan Gupta",
    Class: "8E"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Azerbaijan",
    Name: "Kushagra Sinha ",
    Class: "8B"
  },
  {
    Committee: "ECOSOC",
    Country : "People’s Republic of Bangladesh ",
    Name: "Nupura Namana",
    Class: "8A"
  },
  {
    Committee: "ECOSOC",
    Country : "Canada",
    Name: "Mamidi Sai Samanvitha ",
    Class: "8E"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Côte d’Ivoire ",
    Name: "Maanvi Chilamkurthy ",
    Class: "10B"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Croatia",
    Name: "Neha Raghuraman",
    Class: "8B"
  },
  {
    Committee: "ECOSOC",
    Country : "Dominican Republic",
    Name: "Akshita Sharma",
    Class: "9E"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Ecuador",
    Name: "Indupalli Meghana",
    Class: "8F"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Finland",
    Name: "Suhana Karmakar ",
    Class: "9E"
  },
  {
    Committee: "ECOSOC",
    Country : "Federal Republic of Germany",
    Name: "Gajula Nikhila",
    Class: "8H"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Haiti",
    Name: "Soumya Jain",
    Class: "10B"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of India",
    Name: "Tanishka Sharma ",
    Class: "11B"
  },
  {
    Committee: "ECOSOC",
    Country : "Japan",
    Name: "Kandula Jaya Harshith ",
    Class: "8D"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Kenya",
    Name: "Saanvi Badjatia",
    Class: "10A"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Lebanon",
    Name: "Aashraya Nanduri",
    Class: "9B"
  },
  {
    Committee: "ECOSOC",
    Country : "United Mexican States (Mexico)",
    Name: "Aadhya Ram Dornala",
    Class: "8H"
  },
  {
    Committee: "ECOSOC",
    Country : "Kingdom of the Netherlands (Kingdom of the)",
    Name: "Avyukth Reddy Bellur ",
    Class: "8C"
  },
  {
    Committee: "ECOSOC",
    Country : "Kingdom of Norway ",
    Name: "Mungara Sudeepthi Bhatt",
    Class: "9C"
  },
  {
    Committee: "ECOSOC",
    Country : "Islamic Republic of Pakistan",
    Name: "Nishan Swain",
    Class: "10G"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Paraguay ",
    Name: "M. Suchitra",
    Class: "8H"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Peru ",
    Name: "Harivansha Singh",
    Class: "10H"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Poland ",
    Name: "Adla Sri Sai Vihan",
    Class: "8E"
  },
  {
    Committee: "ECOSOC",
    Country : "Kingdom of Saudi Arabia ",
    Name: "Tejaswi Pandey ",
    Class: "9A"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of South Africa ",
    Name: "Kakulavaram Aadhya shree",
    Class: "8F"
  },
  {
    Committee: "ECOSOC",
    Country : "Democratic Socialist Republic of Sri Lanka ",
    Name: "Setti lakhith ",
    Class: "8C"
  },
  {
    Committee: "ECOSOC",
    Country : "Kingdom of Spain",
    Name: "Adithya Yalamarthy ",
    Class: "8B"
  },
  {
    Committee: "ECOSOC",
    Country : "Swiss Confederation (Switzerland)",
    Name: "Amolika Dang",
    Class: "8B"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Türkiye ",
    Name: "Ananya Tummarakoti",
    Class: "11J"
  },
  {
    Committee: "ECOSOC",
    Country : "Ukraine",
    Name: "Munagala Sreenithi",
    Class: "9B"
  },
  {
    Committee: "ECOSOC",
    Country : "Oriental Republic of Uruguay ",
    Name: "Mihira Reddy Ankireddy",
    Class: "8H"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Uzbekistan ",
    Name: "Chaitanya Varma vadapalli",
    Class: "8A"
  },
  {
    Committee: "ECOSOC",
    Country : "Republic of Zambia",
    Name: "Shaurya Suman",
    Class: "8H"
  },
  {
    Committee: "UNCND",
    Country : "Argentine Republic",
    Name: "Marikanti Sri Chethan Reddy ",
    Class: "8F"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Austria",
    Name: "Mysha mabtoor ",
    Class: "10E"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Chile",
    Name: "Vundela Sree Sumedha",
    Class: "11E"
  },
  {
    Committee: "UNCND",
    Country : "People's Republic of China",
    Name: "Avantika kar",
    Class: "10G"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Colombia",
    Name: "Varnika Seth",
    Class: "8F"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Côte d'Ivoire",
    Name: "Pothuri Aaditri Hymavathi ",
    Class: "8A"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Finland",
    Name: "Akarsh Kumar Singh ",
    Class: "8B"
  },
  {
    Committee: "UNCND",
    Country : "French Republic",
    Name: "Nimisha Darur",
    Class: "8E"
  },
  {
    Committee: "UNCND",
    Country : "Federal Republic of Germany",
    Name: "Anjana Kulkarni",
    Class: "11D"
  },
  {
    Committee: "UNCND",
    Country : "Republic of India",
    Name: "NUTAKKI GNANA SRI ",
    Class: "8I"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Indonesia",
    Name: "Kankanala kartikeya reddy",
    Class: "9C"
  },
  {
    Committee: "UNCND",
    Country : "Italian Republic",
    Name: "Misthi Nigam",
    Class: "10D"
  },
  {
    Committee: "UNCND",
    Country : "Japan",
    Name: "Shreya Maharana",
    Class: "11C"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Kenya",
    Name: "Vamika Gunji",
    Class: "9C"
  },
  {
    Committee: "UNCND",
    Country : "Kingdom of Morocco",
    Name: "Prayag Sharma",
    Class: "9D"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Peru",
    Name: "Adhya Reddy",
    Class: "9C"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Poland",
    Name: "Manvik Sharma",
    Class: "10G"
  },
  {
    Committee: "UNCND",
    Country : "Portuguese Republic",
    Name: "Duttaluru Sipivishta Satvik",
    Class: "9I"
  },
  {
    Committee: "UNCND",
    Country : "State of Qatar",
    Name: "Avni Khajanchi",
    Class: "10A"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Singapore",
    Name: "Karthikeya Madisetty",
    Class: "8G"
  },
  {
    Committee: "UNCND",
    Country : "Republic of South Africa",
    Name: "Vanshika Agrawal",
    Class: "10A"
  },
  {
    Committee: "UNCND",
    Country : "Kingdom of Spain",
    Name: "Nayan Sai Arepalli ",
    Class: "9E"
  },
  {
    Committee: "UNCND",
    Country : "Swiss Confederation",
    Name: "AASHKA VIJAI",
    Class: "12B"
  },
  {
    Committee: "UNCND",
    Country : "Kingdom of Thailand",
    Name: "Harikesh krishnaswamy",
    Class: "12I"
  },
  {
    Committee: "UNCND",
    Country : "United Arab Emirates",
    Name: "AAKRITI SATPATHI ",
    Class: "10E"
  },
  {
    Committee: "UNCND",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Khairthabad Vaishnavi",
    Class: "10B"
  },
  {
    Committee: "UNCND",
    Country : "United Republic of Tanzania",
    Name: "Aakifah Ahmed ",
    Class: "10F"
  },
  {
    Committee: "UNCND",
    Country : "United States of America",
    Name: "Shivam bhardwaj",
    Class: "11G"
  },
  {
    Committee: "UNCND",
    Country : "Oriental Republic of Uruguay",
    Name: "B. Umesh Sai Kumar",
    Class: "10G"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Zimbabwe",
    Name: "Samved Bochkar ",
    Class: "8I"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Armenia",
    Name: "Prakriti Negi",
    Class: "10E"
  },
  {
    Committee: "UNCND",
    Country : "Commonwealth of Australia",
    Name: "Tisha Jhunjhunwala ",
    Class: "11I"
  },
  {
    Committee: "UNCND",
    Country : "Kingdom of Belgium",
    Name: "Purvi Boyinapalli",
    Class: "8C"
  },
  {
    Committee: "UNCND",
    Country : "Plurinational State of Bolivia",
    Name: "Arjun Ramswaroop Somani",
    Class: "9G"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Burundi",
    Name: "Kailash Sai Kadiyala ",
    Class: "9A"
  },
  {
    Committee: "UNCND",
    Country : "Dominican Republic",
    Name: "Mosalikanti Samyukta Prasad ",
    Class: "11G"
  },
  {
    Committee: "UNCND",
    Country : "Kingdom of the Netherlands",
    Name: "Shriya Rathod",
    Class: "8G"
  },
  {
    Committee: "UNCND",
    Country : "United Mexican States",
    Name: "Akshith Akkunuru",
    Class: "11G"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Guatemala",
    Name: "Lavya Agarwal",
    Class: "11H"
  },
  {
    Committee: "UNCND",
    Country : "Republic of Honduras",
    Name: "Nilima Sahoo",
    Class: "9I"
  },
  {
    Committee: "JrCSW",
    Country : "United States of America",
    Name: "VIVAAN ANAND JOSHI",
    Class: "9H"
  },
  {
    Committee: "JrCSW",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Sweksha Tiwari",
    Class: "9A"
  },
  {
    Committee: "JrCSW",
    Country : "People's Republic of China",
    Name: "Shreyansh Konda",
    Class: "9B"
  },
  {
    Committee: "JrCSW",
    Country : "People's Republic of Bangladesh",
    Name: "Zaid Khan",
    Class: "8D"
  },
  {
    Committee: "JrCSW",
    Country : "Kingdom of Belgium",
    Name: "Haana Mohan Chakka",
    Class: "8F"
  },
  {
    Committee: "JrCSW",
    Country : "Belize",
    Name: "Allawada Nainika Reddy ",
    Class: "8I"
  },
  {
    Committee: "JrCSW",
    Country : "Plurinational State of Bolivia",
    Name: "TANISHKA DAMERA",
    Class: "9C"
  },
  {
    Committee: "JrCSW",
    Country : "Federative Republic of Brazil",
    Name: "Akshara Goud Durgam",
    Class: "8B"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Cabo Verde",
    Name: "Geetha Sarvajna Nalivela",
    Class: "9B"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Chile",
    Name: "Bhoomireddy Sevitha Reddy ",
    Class: "8D"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Colombia",
    Name: "Aashi Agarwal",
    Class: "9D"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Côte d'Ivoire",
    Name: "Hamzah Irfan Ghazi",
    Class: "9D"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Cuba",
    Name: "Anouk Sareen",
    Class: "8G"
  },
  {
    Committee: "JrCSW",
    Country : "Czech Republic",
    Name: "Y Sai Akshara",
    Class: "8I"
  },
  {
    Committee: "JrCSW",
    Country : "Democratic Republic of the Congo",
    Name: "Krish Sharma",
    Class: "9B"
  },
  {
    Committee: "JrCSW",
    Country : "Dominican Republic",
    Name: "Jui Dhaval Gandhi",
    Class: "8G"
  },
  {
    Committee: "JrCSW",
    Country : "Federal Democratic Republic of Ethiopia",
    Name: "Hamdan Siddiqui",
    Class: "8G"
  },
  {
    Committee: "JrCSW",
    Country : "Gabonese Republic",
    Name: "Soma Nandan Reddy",
    Class: "9B"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of India",
    Name: "Asmi Banerjee",
    Class: "8D"
  },
  {
    Committee: "JrCSW",
    Country : "Italian Republic",
    Name: "Moksha Vempati ",
    Class: "9B"
  },
  {
    Committee: "JrCSW",
    Country : "Japan",
    Name: "Duvvuri Anarghya",
    Class: "8C"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Lithuania",
    Name: "Nivedita Aich",
    Class: "8D"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Maldives",
    Name: "Felicia Elena Bonku ",
    Class: "8B"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Mali",
    Name: "Tatineni Harshh",
    Class: "8H"
  },
  {
    Committee: "JrCSW",
    Country : "United Mexican States",
    Name: "Goddala Hetansh Reddy",
    Class: "9I"
  },
  {
    Committee: "JrCSW",
    Country : "Mongolia",
    Name: "Anvita Sirivella",
    Class: "9F"
  },
  {
    Committee: "JrCSW",
    Country : "Kingdom of Morocco",
    Name: "Aadya Peddi",
    Class: "8E"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Mozambique",
    Name: "Bhuvan Tripathi",
    Class: "8G"
  },
  {
    Committee: "JrCSW",
    Country : "Kingdom of the Netherlands",
    Name: "Aishwarya Dasari ",
    Class: "9A"
  },
  {
    Committee: "JrCSW",
    Country : "Federal Republic of Nigeria",
    Name: "B Trailokya Reddy ",
    Class: "8C"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of the Philippines",
    Name: "Aishani Dubey",
    Class: "9C"
  },
  {
    Committee: "JrCSW",
    Country : "Portuguese Republic",
    Name: "Rohith Reddy Isanaka",
    Class: "8A"
  },
  {
    Committee: "JrCSW",
    Country : "State of Qatar",
    Name: "Ira Anchala",
    Class: "9B"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Korea",
    Name: "Ameya Moksha Kondala",
    Class: "8C"
  },
  {
    Committee: "JrCSW",
    Country : "Romania",
    Name: "Ch Ajay Arnav ",
    Class: "8A"
  },
  {
    Committee: "JrCSW",
    Country : "Kingdom of Saudi Arabia",
    Name: "AARAADHYA MALLAMPATI",
    Class: "8A"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of South Africa",
    Name: "Turaga Sai Megha",
    Class: "9A"
  },
  {
    Committee: "JrCSW",
    Country : "Kingdom of Spain",
    Name: "Moksha Solanki ",
    Class: "8E"
  },
  {
    Committee: "JrCSW",
    Country : "Democratic Socialist Republic of Sri Lanka",
    Name: "Sri Hanvitha Medisetty",
    Class: "8B"
  },
  {
    Committee: "JrCSW",
    Country : "Ukraine",
    Name: "Sharvani Yeddula",
    Class: "8I"
  },
  {
    Committee: "JrCSW",
    Country : "Arab Republic of Egypt",
    Name: "Sahitra Chowdary Velaga",
    Class: "8G"
  },
  {
    Committee: "JrCSW",
    Country : "Republic of Rwanda",
    Name: "C Yashasya Rao",
    Class: "9C"
  },
  {
    Committee: "JrHRC",
    Country : "People’s Republic of China",
    Name: "Mohith Kartikeya P",
    Class: "9F"
  },
  {
    Committee: "JrHRC",
    Country : "French Republic",
    Name: "Sasrika Vemparala ",
    Class: "8B"
  },
  {
    Committee: "JrHRC",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Divya Keerthi K",
    Class: "9A"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Albania",
    Name: "Chekuri.Sri.V.Krishna Thej Varma ",
    Class: "9D"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Angola",
    Name: "Vaanya Bajoria",
    Class: "8D"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Benin",
    Name: "Prateek Kumar Tiwari",
    Class: "8F"
  },
  {
    Committee: "JrHRC",
    Country : "Plurinational State of Bolivia",
    Name: "Rishika Mehrotra",
    Class: "8E"
  },
  {
    Committee: "JrHRC",
    Country : "Federative Republic of Brazil",
    Name: "Sahasra Chandu",
    Class: "9I"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Burundi",
    Name: "Abhirup Ghosh",
    Class: "8D"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Chile",
    Name: "Piyushi Mahendrakar",
    Class: "8B"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Colombia",
    Name: "Kollapudi Sai Shashank Reddy",
    Class: "8G"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Côte d'Ivoire",
    Name: "Yeduru Sreekar Reddy",
    Class: "9A"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Cuba",
    Name: "Angad Saxena",
    Class: "8I"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Cyprus",
    Name: "Asutosh Choudhury",
    Class: "8D"
  },
  {
    Committee: "JrHRC",
    Country : "Czech Republic",
    Name: "Sanhitha devarapalli",
    Class: "8H"
  },
  {
    Committee: "JrHRC",
    Country : "Democratic Republic of the Congo",
    Name: "Aadya Dindukurthy",
    Class: "8G"
  },
  {
    Committee: "JrHRC",
    Country : "Dominican Republic",
    Name: "Vivaan Hriday reddy ",
    Class: "8B"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Ecuador",
    Name: "Vibha Reddy Beeravelli",
    Class: "8A"
  },
  {
    Committee: "JrHRC",
    Country : "Arab Republic of Egypt",
    Name: "Zara Sofia",
    Class: "9B"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Estonia",
    Name: "Eshanka Duggal",
    Class: "9f"
  },
  {
    Committee: "JrHRC",
    Country : "Federal Democratic Republic of Ethiopia",
    Name: "Deepthi Chaithanya Bandla ",
    Class: "9I"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Ghana",
    Name: "TURNER SAREENA SANOBAR",
    Class: "9F"
  },
  {
    Committee: "JrHRC",
    Country : "Iceland",
    Name: "Ishaan Lakkasani",
    Class: "8F"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of India",
    Name: "Chelikani vishrutha",
    Class: "8D"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Indonesia",
    Name: "Harshvardhan Joshi",
    Class: "9B"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Iraq",
    Name: "Tudi Saanvi Reddy",
    Class: "8D"
  },
  {
    Committee: "JrHRC",
    Country : "Italian Republic",
    Name: "Vihaan Nara",
    Class: "8B"
  },
  {
    Committee: "JrHRC",
    Country : "Japan",
    Name: "Kaashvi Singh ",
    Class: "8A"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Kenya",
    Name: "P. Aaradhya Reddy",
    Class: "8E"
  },
  {
    Committee: "JrHRC",
    Country : "State of Kuwait",
    Name: "Arnav Polamuri",
    Class: "9C"
  },
  {
    Committee: "JrHRC",
    Country : "United Mexican States",
    Name: "BAIRNENI RACHITH VAISHNAV ",
    Class: "9B"
  },
  {
    Committee: "JrHRC",
    Country : "Kingdom of the Netherlands",
    Name: "Kiara Naidu",
    Class: "8A"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of North Macedonia",
    Name: "Shrusti Avinash",
    Class: "8I"
  },
  {
    Committee: "JrHRC",
    Country : "Islamic Republic of Pakistan",
    Name: "Dukkipati Grishma Sai",
    Class: "8I"
  },
  {
    Committee: "JrHRC",
    Country : "State of Qatar",
    Name: "Puli Vijval Reddy",
    Class: "9G"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Korea",
    Name: "Kandur Akshaini",
    Class: "8I"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Slovenia",
    Name: "Yashveer singh chhabra ",
    Class: "8I"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of South Africa",
    Name: "Nishtha Priya",
    Class: "9H"
  },
  {
    Committee: "JrHRC",
    Country : "Kingdom of Spain",
    Name: "Vaibhavi Santosh Iyengar ",
    Class: "9F"
  },
  {
    Committee: "JrHRC",
    Country : "Swiss Confederation",
    Name: "Haripriya",
    Class: "8G"
  },
  {
    Committee: "JrHRC",
    Country : "Kingdom of Thailand",
    Name: "Mallavarupu Shaurya reddy ",
    Class: "9D"
  },
  {
    Committee: "JrHRC",
    Country : "Republic of Mauritius",
    Name: "Khushi Manihar ",
    Class: "9D"
  },
  {
    Committee: "WHO",
    Country : "Commonwealth of Australia",
    Name: "Aakriti Annam",
    Class: "11H"
  },
  {
    Committee: "WHO",
    Country : "United States of America",
    Name: "Gujja Sanvi Sree",
    Class: "11J"
  },
  {
    Committee: "WHO",
    Country : "Kingdom of Denmark",
    Name: "Achintya Sharma ",
    Class: "10A"
  },
  {
    Committee: "WHO",
    Country : "Kingdom of Cambodia",
    Name: "K. Mugdha Hasini ",
    Class: "9F"
  },
  {
    Committee: "WHO",
    Country : "Republic of Austria",
    Name: "Muddadi Ram Virat",
    Class: "9A"
  },
  {
    Committee: "WHO",
    Country : "Islamic Republic of Afghanistan",
    Name: "Nishka Malviya",
    Class: "11J"
  },
  {
    Committee: "WHO",
    Country : "Commonwealth of The Bahamas",
    Name: "Saanvi Gunda ",
    Class: "9I"
  },
  {
    Committee: "WHO",
    Country : "Republic of Bulgaria",
    Name: "Ashirya M.",
    Class: "12E"
  },
  {
    Committee: "WHO",
    Country : "Canada",
    Name: "Mihika Singh",
    Class: "10B"
  },
  {
    Committee: "WHO",
    Country : "Republic of Côte d'Ivoire",
    Name: "V.Aaradhya ",
    Class: "8F"
  },
  {
    Committee: "WHO",
    Country : "People's Republic of China",
    Name: "P M Saanvika Madhuri",
    Class: "9E"
  },
  {
    Committee: "WHO",
    Country : "Federative Republic of Brazil",
    Name: "SHIVALI GUPTA",
    Class: "9F"
  },
  {
    Committee: "WHO",
    Country : "Democratic People's Republic of Korea",
    Name: "Akshita Agrawal",
    Class: "9G"
  },
  {
    Committee: "WHO",
    Country : "Democratic Republic of the Congo",
    Name: "SRIYA DATLA ",
    Class: "8H"
  },
  {
    Committee: "WHO",
    Country : "Dominican Republic",
    Name: "Amrit Anand",
    Class: "8A"
  },
  {
    Committee: "WHO",
    Country : "Arab Republic of Egypt",
    Name: "Dhruv Mangal",
    Class: "9D"
  },
  {
    Committee: "WHO",
    Country : "French Republic",
    Name: "ASMI ACHARYYA ",
    Class: "8A"
  },
  {
    Committee: "WHO",
    Country : "Republic of Finland",
    Name: "Shivanshi S. Srivastava",
    Class: "11E"
  },
  {
    Committee: "WHO",
    Country : " Federal Republic of Germany ",
    Name: "Trisha Singh",
    Class: "8E"
  },
  {
    Committee: "WHO",
    Country : "Hungary",
    Name: "Neera Niraj Kalamkar ",
    Class: "10F"
  },
  {
    Committee: "WHO",
    Country : "Republic of Iraq",
    Name: "Garima Chitkara",
    Class: "9E"
  },
  {
    Committee: "WHO",
    Country : "Iceland",
    Name: "Mohammad Omar Abdullah",
    Class: "8F"
  },
  {
    Committee: "WHO",
    Country : "Republic of India",
    Name: "Tanvik.N",
    Class: "10D"
  },
  {
    Committee: "WHO",
    Country : "Jamaica",
    Name: "Yashashree Manji",
    Class: "10F"
  },
  {
    Committee: "WHO",
    Country : "Japan",
    Name: "Varnica sharma",
    Class: "9E"
  },
  {
    Committee: "WHO",
    Country : "State of Kuwait",
    Name: "Shatakshi Satish Adewar",
    Class: "8A"
  },
  {
    Committee: "WHO",
    Country : "Grand Duchy of Luxembourg",
    Name: "Venu Swaroop Esukapalli",
    Class: "9B"
  },
  {
    Committee: "WHO",
    Country : "United Mexican States",
    Name: "Mahesh Gutti",
    Class: "11B"
  },
  {
    Committee: "WHO",
    Country : "Kingdom of Morocco",
    Name: "Sreenija Bhaduri",
    Class: "9F"
  },
  {
    Committee: "WHO",
    Country : "New Zealand",
    Name: "Sara Gupta",
    Class: "9A"
  },
  {
    Committee: "WHO",
    Country : "Kingdom of the Netherlands",
    Name: "Tarun Tej Pusala",
    Class: "9I"
  },
  {
    Committee: "WHO",
    Country : "Sultanate of Oman",
    Name: "Mamidi Advaith Reddy",
    Class: "11D"
  },
  {
    Committee: "WHO",
    Country : "Kingdom of Norway",
    Name: "Y.Ved Vishruth Reddy",
    Class: "10A"
  },
  {
    Committee: "WHO",
    Country : "Republic of Peru",
    Name: "Noyonika Dey",
    Class: "11I"
  },
  {
    Committee: "WHO",
    Country : "State of Qatar",
    Name: "Susan Christudas",
    Class: "9B"
  },
  {
    Committee: "WHO",
    Country : "Russian Federation",
    Name: "Aadya Jaiswal",
    Class: "10G"
  },
  {
    Committee: "WHO",
    Country : "Republic of South Sudan",
    Name: "Kriti Chitturi ",
    Class: "9C"
  },
  {
    Committee: "WHO",
    Country : "Democratic Socialist Republic of Sri Lanka",
    Name: "S. Revanth Nikhil Chandra",
    Class: "8I"
  },
  {
    Committee: "WHO",
    Country : "Italian Republic ",
    Name: "Priyanka Sahoo ",
    Class: "12A"
  },
  {
    Committee: "WHO",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Aadvika Sarangi",
    Class: "8B"
  },
  {
    Committee: "WHO",
    Country : "Ukraine",
    Name: "Vivaan Kaushik",
    Class: "8B"
  },
  {
    Committee: "WHO",
    Country : "Republic of Argentina",
    Name: "Karthik Naidu Gudiseva ",
    Class: "10D"
  },
  {
    Committee: "WHO",
    Country : "Republic of Chile",
    Name: "Sai Srinish",
    Class: "8E"
  },
  {
    Committee: "WHO",
    Country : "Republic of Indonesia",
    Name: "Deeksha Karthikeyan ",
    Class: "10G"
  },
  {
    Committee: "WHO",
    Country : "Republic of Kenya",
    Name: "Arnav Bibhudatta Jena",
    Class: "8H"
  },
  {
    Committee: "WHO",
    Country : "Swiss Confederation",
    Name: "Triya Amirineni",
    Class: "8D"
  },
  {
    Committee: "INTERPOL",
    Country : "United States of America",
    Name: "Kasturi Neel Arjun",
    Class: "10A"
  },
  {
    Committee: "INTERPOL",
    Country : "Russian Federation",
    Name: "Radhya Reddy Chada",
    Class: "10E"
  },
  {
    Committee: "INTERPOL",
    Country : "People’s Republic of China",
    Name: "C Guru Pranavi",
    Class: "10H"
  },
  {
    Committee: "INTERPOL",
    Country : "French Republic",
    Name: "Samarth Agarwal",
    Class: "10F"
  },
  {
    Committee: "INTERPOL",
    Country : "United Kingdom of Great Britain and Northern Ireland",
    Name: "Kaneesha Agarwal",
    Class: "9B"
  },
  {
    Committee: "INTERPOL",
    Country : "Commonwealth of Australia",
    Name: "Angajala Shriya ",
    Class: "11D"
  },
  {
    Committee: "INTERPOL",
    Country : "Kingdom of Belgium",
    Name: "Yashita Dashputra",
    Class: "11C"
  },
  {
    Committee: "INTERPOL",
    Country : "Argentine Republic",
    Name: "Niyati Sangal",
    Class: "11B"
  },
  {
    Committee: "INTERPOL",
    Country : "Federative Republic of Brazil",
    Name: "Aditi Sujith Nair",
    Class: "9C"
  },
  {
    Committee: "INTERPOL",
    Country : "Canada",
    Name: "Adithya.Gangu",
    Class: "9G"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of Colombia",
    Name: "Tejas Sahoo",
    Class: "10E"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of Ecuador",
    Name: "Abhilasha Nandi",
    Class: "9G"
  },
  {
    Committee: "INTERPOL",
    Country : "Arab Republic of Egypt",
    Name: "Vajja Mahith",
    Class: "9I"
  },
  {
    Committee: "INTERPOL",
    Country : "Federal Republic of Germany",
    Name: "Anika pusarla",
    Class: "9H"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of India",
    Name: "Dyuthi Tirumuru",
    Class: "9E"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of Indonesia",
    Name: "Harikriti Kakani",
    Class: "8F"
  },
  {
    Committee: "INTERPOL",
    Country : "Islamic Republic of Iran",
    Name: "Suryabhan Srijan Singh",
    Class: "10G"
  },
  {
    Committee: "INTERPOL",
    Country : "State of Israel",
    Name: "Vasisht Wattamwar ",
    Class: "9H"
  },
  {
    Committee: "INTERPOL",
    Country : "Italian Republic",
    Name: "Yerra Joshitha Sri Lohitha ",
    Class: "11A"
  },
  {
    Committee: "INTERPOL",
    Country : "Japan",
    Name: "Varsha Lokesh",
    Class: "11D"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of Kenya",
    Name: "Hrithika Ambati",
    Class: "8C"
  },
  {
    Committee: "INTERPOL",
    Country : "Malaysia",
    Name: "ARYAMAAN SINGH THAKUR",
    Class: "9E"
  },
  {
    Committee: "INTERPOL",
    Country : "United Mexican States",
    Name: "Nakshatra Reddy ",
    Class: "9I"
  },
  {
    Committee: "INTERPOL",
    Country : "Kingdom of Morocco",
    Name: "Naman Agarwal",
    Class: "11F"
  },
  {
    Committee: "INTERPOL",
    Country : "Kingdom of the Netherlands",
    Name: "Avishkaa Atrey ",
    Class: "12A"
  },
  {
    Committee: "INTERPOL",
    Country : "Federal Republic of Nigeria",
    Name: "Shaivi Petwal",
    Class: "10F"
  },
  {
    Committee: "INTERPOL",
    Country : "Islamic Republic of Pakistan",
    Name: "SARASH REDDY SHYAMALA ",
    Class: "8A"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of the Philippines",
    Name: "Anay Rathi",
    Class: "9I"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of Poland",
    Name: "Sanvi Veeravelli",
    Class: "9D"
  },
  {
    Committee: "INTERPOL",
    Country : "State of Qatar",
    Name: "Akarapu Mayukha",
    Class: "11D"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of Korea",
    Name: "Thaman Reddy Nallaballe",
    Class: "12E"
  },
  {
    Committee: "INTERPOL",
    Country : "Kingdom of Saudi Arabia",
    Name: "Anagha Velamakanni",
    Class: "9H"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of Singapore",
    Name: "Nithya Nune",
    Class: "9E"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of South Africa",
    Name: "Tasha Behera",
    Class: "9E"
  },
  {
    Committee: "INTERPOL",
    Country : "Kingdom of Spain",
    Name: "Siddhartha Gullapalli ",
    Class: "8A"
  },
  {
    Committee: "INTERPOL",
    Country : "Swiss Confederation",
    Name: "Nishtha goel",
    Class: "11F"
  },
  {
    Committee: "INTERPOL",
    Country : "Kingdom of Thailand",
    Name: "Myneni Samridha Chowdary",
    Class: "8E"
  },
  {
    Committee: "INTERPOL",
    Country : "Republic of Türkiye",
    Name: "K. Varsha Chowdhary ",
    Class: "8B"
  },
  {
    Committee: "INTERPOL",
    Country : "Ukraine",
    Name: "Sudarshanam Tamanvi",
    Class: "9D"
  },
  {
    Committee: "INTERPOL",
    Country : "United Arab Emirates",
    Name: "Jaskaran Singh ",
    Class: "9D"
  },
  {
    Committee: "AIPPM",
    Country : "Narendra Modi — Bharatiya Janata Party (BJP)",
    Name: "Aishanee chakravarthy ",
    Class: "10G"
  },
  {
    Committee: "AIPPM",
    Country : "Amit Shah — Bharatiya Janata Party (BJP)",
    Name: "N.PREKSHA REDDY",
    Class: "10D"
  },
  {
    Committee: "AIPPM",
    Country : "Rajnath Singh — Bharatiya Janata Party (BJP)",
    Name: "Ishan Khetan ",
    Class: "11G"
  },
  {
    Committee: "AIPPM",
    Country : "Nirmala Sitharaman — Bharatiya Janata Party (BJP)",
    Name: "Ravi Sai Harsha",
    Class: "10D"
  },
  {
    Committee: "AIPPM",
    Country : "S. Jaishankar — Bharatiya Janata Party (BJP)",
    Name: "Uma Kruti Vadlamani",
    Class: "11F"
  },
  {
    Committee: "AIPPM",
    Country : "J.P. Nadda — Bharatiya Janata Party (BJP)",
    Name: "Kamma Dhruv",
    Class: "11H"
  },
  {
    Committee: "AIPPM",
    Country : "Dharmendra Pradhan — Bharatiya Janata Party (BJP)",
    Name: "PONUGOTI KRUTHI HASINI RAO ",
    Class: "11H"
  },
  {
    Committee: "AIPPM",
    Country : "Ashwini Vaishnaw — Bharatiya Janata Party (BJP)",
    Name: "Ananya Nagar ",
    Class: "8G"
  },
  {
    Committee: "AIPPM",
    Country : "Piyush Goyal — Bharatiya Janata Party (BJP)",
    Name: "Yash agrawal",
    Class: "10G"
  },
  {
    Committee: "AIPPM",
    Country : "Nitin Gadkari — Bharatiya Janata Party (BJP)",
    Name: "Pulla Tanvi",
    Class: "10E"
  },
  {
    Committee: "AIPPM",
    Country : "K. Chandrashekhar Rao— Bharatiya Rashtriya Samhiti (BRS)",
    Name: "Ananya Jindal",
    Class: "9G"
  },
  {
    Committee: "AIPPM",
    Country : "K.T. Ramarao — Bharatiya Rashtriya Samhiti (BRS)",
    Name: "M. Sai Sathwik Reddy",
    Class: "9E"
  },
  {
    Committee: "AIPPM",
    Country : "Devendra Fadnavis — Bharatiya Janata Party (BJP)",
    Name: "TRISHNOOR KAUR",
    Class: "10G"
  },
  {
    Committee: "AIPPM",
    Country : "Pavan Kalyan— Janasena Party (JSP)",
    Name: "Sreshta sai ",
    Class: "10G"
  },
  {
    Committee: "AIPPM",
    Country : "Y.S. Jagan Mohan Reddy — Yuvajana Sramika Rythu Congress Party (YSRCP)",
    Name: "Chennamaneni Aadith Rao",
    Class: "10G"
  },
  {
    Committee: "AIPPM",
    Country : "Mallu Bhatti Vikramarka— Indian National Congress (INC)",
    Name: "Sahasra bhimavarapu",
    Class: "8F"
  },
  {
    Committee: "AIPPM",
    Country : "Eknath Shinde — Shiv Sena",
    Name: "Adhishri Sawankar",
    Class: "11F"
  },
  {
    Committee: "AIPPM",
    Country : "V.D Satheesan — Indian National Congress (INC)",
    Name: "Aniya Reddy",
    Class: "11D"
  },
  {
    Committee: "AIPPM",
    Country : "N. Chandrababu Naidu — Telugu Desam Party (TDP)",
    Name: "vegesna bhavesh varma",
    Class: "9E"
  },
  {
    Committee: "AIPPM",
    Country : "Nitish Kumar — Janata Dal (United) (JD-U)",
    Name: "Kashvi Nangalia",
    Class: "10B"
  },
  {
    Committee: "AIPPM",
    Country : "Yogi Adityanath— Bhartiya Janata Party (BJP)",
    Name: "PATHIKONDA KRITISH ",
    Class: "8E"
  },
  {
    Committee: "AIPPM",
    Country : "Rahul Gandhi — Indian National Congress (INC)",
    Name: "Keerthanya Pudi",
    Class: "10F"
  },
  {
    Committee: "AIPPM",
    Country : "Priyanka Gandhi Vadra — Indian National Congress (INC)",
    Name: "Muskaan Manihar",
    Class: "9f"
  },
  {
    Committee: "AIPPM",
    Country : "Sonia Gandhi — Indian National Congress (INC)",
    Name: "Bhuuvii Amireddy",
    Class: "11D"
  },
  {
    Committee: "AIPPM",
    Country : "Siddaramaiah — Indian National Congress (INC)",
    Name: "Vattipalli Sai Vidhya Kirthi",
    Class: "12A"
  },
  {
    Committee: "AIPPM",
    Country : "Revanth Reddy — Indian National Congress (INC)",
    Name: "Rihaan vaidyan",
    Class: "11H"
  },
  {
    Committee: "AIPPM",
    Country : "Omar Abdullah— Jammu and Kashmir National Conference (JKNC)",
    Name: "Pranshu Sharma",
    Class: "11H"
  },
  {
    Committee: "AIPPM",
    Country : "Brij Bhushan Sharan Singh— Bhartiya Janata Party (INC)",
    Name: "Aarnik Ritesh Shah",
    Class: "8B"
  },
  {
    Committee: "AIPPM",
    Country : "Mamata Banerjee — All India Trinamool Congress (AITC)",
    Name: "Nanya Hiremath",
    Class: "9D"
  },
  {
    Committee: "AIPPM",
    Country : "M.K. Stalin — Dravida Munnetra Kazhagam (DMK)",
    Name: "Mishika Panigrahy",
    Class: "8A"
  },
  {
    Committee: "AIPPM",
    Country : "Lalu Prasad Yadav — Rashtriya Janata Dal (RJD)",
    Name: "SANGAM DAKSH",
    Class: "8I"
  },
  {
    Committee: "AIPPM",
    Country : "Tejashwi Yadav — Rashtriya Janata Dal (RJD)",
    Name: "Varunika Sanghisetti",
    Class: "9E"
  },
  {
    Committee: "AIPPM",
    Country : "Uddhav Thackeray — Shiv Sena (Uddhav Balasaheb Thackeray) (Shiv Sena UBT)",
    Name: "Rithwik",
    Class: "10C"
  },
  {
    Committee: "AIPPM",
    Country : "C. Joseph Vijay— Tamilaga Vettri Kazhagam (TVK)",
    Name: "Yeddula Mokshith Reddy",
    Class: "8F"
  },
  {
    Committee: "AIPPM",
    Country : "Asaduddin Owaisi - AIMIM",
    Name: "Partha Sarathy Jena ",
    Class: "10F"
  },
  {
    Committee: "AIPPM",
    Country : "Pinarayi Vijayan — Communist Party of India (CPI)",
    Name: "Jagruti skanda",
    Class: "11F"
  },
  {
    Committee: "AIPPM",
    Country : "Hemant Soren — Jharkhand Mukti Morcha (JMM)",
    Name: "Arnav Nigam ",
    Class: "9A"
  },
  {
    Committee: "AIPPM",
    Country : "Arvind Kejriwal — Aam Aadmi Party (AAP)",
    Name: "Anirudh Mishra",
    Class: "9E"
  },
  {
    Committee: "AIPPM",
    Country : "Yumnam Khemchand Singh- Bhartiya Janata Party(BJP)",
    Name: "Ishaan Sarkar ",
    Class: "9D"
  },
  {
    Committee: "AIPPM",
    Country : "Vishnu Deo Sai— Bhartiya Janata Party (BJP)",
    Name: "Tanishka Saxena",
    Class: "12F"
  },
  {
    Committee: "AIPPM",
    Country : "D.K. Shivakumar— Indian National Congress (INC)",
    Name: "Koritela Akshara",
    Class: "8D"
  },
  {
    Committee: "IP",
    Country : "UNSC",
    Name: "Kritya Buch",
    Class: "10F"
  },
  {
    Committee: "IP",
    Country : "UNSC",
    Name: "Mukta Niranjan Kulkarni",
    Class: "9C"
  },
  {
    Committee: "IP",
    Country : "UNHRC",
    Name: "Nutakki Moksha Sri",
    Class: "12C"
  },
  {
    Committee: "IP",
    Country : "UNHRC",
    Name: "SriPrajna Kamatam",
    Class: "9C"
  },
  {
    Committee: "IP",
    Country : "UNHRC",
    Name: "Moksha Naveen Kumar",
    Class: "9C"
  },
  {
    Committee: "IP",
    Country : "DISEC",
    Name: "SHASHANK RAM",
    Class: "10E"
  },
  {
    Committee: "IP",
    Country : "DISEC",
    Name: "Anvita Singh ",
    Class: "9A"
  },
  {
    Committee: "IP",
    Country : "DISEC",
    Name: "Pranjal Mahato",
    Class: "9I"
  },
  {
    Committee: "IP",
    Country : "AIPPM",
    Name: "Tanvi Kona",
    Class: "12I"
  },
  {
    Committee: "IP",
    Country : "AIPPM",
    Name: "Charudhi Varma",
    Class: "11B"
  },
  {
    Committee: "IP",
    Country : "JrHRC",
    Name: "Abhigya Priyadarshini",
    Class: "9C"
  },
  {
    Committee: "IP",
    Country : "JrHRC",
    Name: "Janya Hitesh ",
    Class: "10C"
  },
  {
    Committee: "IP",
    Country : "UNCSW",
    Name: "Asmi MRaut",
    Class: "9H"
  },
  {
    Committee: "IP",
    Country : "UNCSW",
    Name: "Rishik Maurya",
    Class: "11A"
  },
  {
    Committee: "IP",
    Country : "UNCSW",
    Name: "Adarsh V",
    Class: "12E"
  },
  {
    Committee: "IP",
    Country : "INTERPOL",
    Name: "SRESHTA PALLE",
    Class: "10C"
  },
  {
    Committee: "IP",
    Country : "INTERPOL",
    Name: "Samyuktha Darukumalli",
    Class: "9A"
  },
  {
    Committee: "IP",
    Country : "INTERPOL",
    Name: "Nynvika Vegi",
    Class: "10C"
  },
  {
    Committee: "IP",
    Country : "FIFA",
    Name: "Harleen Kaur ",
    Class: "11I"
  },
  {
    Committee: "IP",
    Country : "FIFA",
    Name: "Zainab Shaikh",
    Class: "11J"
  },
  {
    Committee: "IP",
    Country : "FIFA",
    Name: "Addepalli Surya Madhav",
    Class: "10E"
  },
  {
    Committee: "IP",
    Country : "WHO",
    Name: "Samanvi Tirunagari",
    Class: "11G"
  },
  {
    Committee: "IP",
    Country : "WHO",
    Name: "Vedika Mishra",
    Class: "11G"
  },
  {
    Committee: "IP",
    Country : "WHO",
    Name: "Anjali Ambati",
    Class: "8H"
  },
  {
    Committee: "IP",
    Country : "ECOSOC",
    Name: "Shivam Das Karmakar ",
    Class: "10E"
  },
  {
    Committee: "IP",
    Country : "ECOSOC",
    Name: "Lasya Varshini Allu",
    Class: "8A"
  },
  {
    Committee: "IP",
    Country : "ECOSOC",
    Name: "VANSHIKA CHAPARALA",
    Class: "8F"
  },
  {
    Committee: "IP",
    Country : "UNCND",
    Name: "Shri Mahalaxmi Bojja ",
    Class: "9C"
  },
  {
    Committee: "IP",
    Country : "UNCND",
    Name: "Samant Adwita Ray",
    Class: "9D"
  },
  {
    Committee: "IP",
    Country : "JrCSW",
    Name: "Lavya Chetan",
    Class: "8H"
  },
  {
    Committee: "IP",
    Country : "JrCSW",
    Name: "Sanskriti Singh ",
    Class: "8B"
  },
  {
    Committee: "FIFA",
    Country : "Brazilian Football Association (CBF)",
    Name: "Tejas Shiva Saharsh Pabba",
    Class: "8B"
  },
  {
    Committee: "FIFA",
    Country : "Russian Football Union",
    Name: "Nichinakolla Lokesh",
    Class: "10D"
  },
  {
    Committee: "FIFA",
    Country : "Ukrainian Association of Football",
    Name: "KRISHNA ARNAV SURAPANENI ",
    Class: "10E"
  },
  {
    Committee: "FIFA",
    Country : "The Football Association (England)",
    Name: "Mirza Shayaan Baig",
    Class: "10C"
  },
  {
    Committee: "FIFA",
    Country : "German Football Association",
    Name: "Aarya Peddi",
    Class: "10G"
  },
  {
    Committee: "FIFA",
    Country : "French Football Association",
    Name: "Shivansh Agarwal",
    Class: "8E"
  },
  {
    Committee: "FIFA",
    Country : "Royal Spanish Football Federation",
    Name: "Kandukuri durgaprasad",
    Class: "10H"
  },
  {
    Committee: "FIFA",
    Country : "Argentine Football Association",
    Name: "Dhruv Bhatia",
    Class: "11H"
  },
  {
    Committee: "FIFA",
    Country : "Qatar Football Association",
    Name: "VADDI VENKATA SAI BHUVAN",
    Class: "8F"
  },
  {
    Committee: "FIFA",
    Country : "Saudi Arabian Football Federation",
    Name: "Naksh jain kala",
    Class: "8E"
  },
  {
    Committee: "FIFA",
    Country : "United States Soccer Federation",
    Name: "Atharv Awasthi",
    Class: "8D"
  },
  {
    Committee: "FIFA",
    Country : "Turkish Football Federation",
    Name: "Mohammed Aatif",
    Class: "10G"
  },
  {
    Committee: "FIFA",
    Country : "Chinese Football Association",
    Name: "S. Tejas ",
    Class: "8C"
  },
  {
    Committee: "FIFA",
    Country : "Portuguese Football Federation",
    Name: "Yashaswini D Chatterjee",
    Class: "8B"
  },
  {
    Committee: "FIFA",
    Country : "Italian Football Federation",
    Name: "Vihaan Anirudha Bakore ",
    Class: "8E"
  },
  {
    Committee: "FIFA",
    Country : "Royal Moroccan Football Federation",
    Name: "Jasti Varun Tej",
    Class: "8D"
  },
  {
    Committee: "FIFA",
    Country : "Royal Dutch Football Association",
    Name: "Aarush Sivakumar Malli",
    Class: "8D"
  },
  {
    Committee: "FIFA",
    Country : "Royal Belgian Football Association",
    Name: "Sehaj Kaur",
    Class: "10F"
  },
  {
    Committee: "FIFA",
    Country : "Polish Football Association",
    Name: "Namay Agrawal",
    Class: "8G"
  },
  {
    Committee: "FIFA",
    Country : "Korea Football Association",
    Name: "Pragyan Kumar Guha ",
    Class: "12B"
  },
  {
    Committee: "FIFA",
    Country : "Japan Football Association",
    Name: "Arjun Kolla",
    Class: "9C"
  },
  {
    Committee: "FIFA",
    Country : "Colombian Football Federation",
    Name: "Riyanth.G",
    Class: "9F"
  },
  {
    Committee: "FIFA",
    Country : "Senegalese Football Federation",
    Name: "Shauryajeet Singh Thakur ",
    Class: "10A"
  },
  {
    Committee: "FIFA",
    Country : "Nigeria Football Federation",
    Name: "Sameer Dachepalli",
    Class: "8G"
  },
  {
    Committee: "FIFA",
    Country : "Egyptian Football Association",
    Name: "Jyothiradithya Varma siravuru",
    Class: "10H"
  },
  {
    Committee: "FIFA",
    Country : "Ghana Football Association",
    Name: "Shaun Ambwani ",
    Class: "9F"
  },
  {
    Committee: "FIFA",
    Country : "South African Football Association",
    Name: "Atharv Lakhera ",
    Class: "9H"
  },
  {
    Committee: "FIFA",
    Country : "Cameroon Football Federation",
    Name: "Ranbir Mishra ",
    Class: "8E"
  },
  {
    Committee: "FIFA",
    Country : "Ivorian Football Federation",
    Name: "BHIMAVARAPU SRIHARSHA REDDY",
    Class: "8F"
  },
  {
    Committee: "FIFA",
    Country : "Algerian Football Federation",
    Name: "Shanmukha Datta Sreekar Popuru",
    Class: "8E"
  },
  {
    Committee: "FIFA",
    Country : "Mexican Football Federation",
    Name: "T. Jai Karthik",
    Class: "8B"
  },
  {
    Committee: "FIFA",
    Country : "Swiss Football Association",
    Name: "Advik Bansal",
    Class: "8F"
  },
  {
    Committee: "FIFA",
    Country : "Croatian Football Federation",
    Name: "Yellasiri Lasya Priya",
    Class: "9A"
  },
  {
    Committee: "FIFA",
    Country : "Uruguayan Football Association",
    Name: "Ritika Mohanty",
    Class: "8I"
  },
  {
    Committee: "FIFA",
    Country : "Danish Football Association",
    Name: "Naman Sai Reddy DEVARAPALLI ",
    Class: "10E"
  },
  {
    Committee: "FIFA",
    Country : "Swedish Football Association",
    Name: "Mohammed Arshad Ali ",
    Class: "9I"
  },
  {
    Committee: "FIFA",
    Country : "All India Football Federation",
    Name: "Harshith Sai Alla",
    Class: "9C"
  },
  {
    Committee: "FIFA",
    Country : "Ecuadorian Football Federation",
    Name: "Visaal Maddila",
    Class: "9D"
  },
  {
    Committee: "FIFA",
    Country : "Football Australia",
    Name: "Anshuman Pattnaik ",
    Class: "9B"
  },
  {
    Committee: "FIFA",
    Country : "Canada Soccer",
    Name: "Shaurya Sachin Sawant",
    Class: "9H"
  }
];

/* ---------- FAQs Data (Edit these for your conference) ---------- */
const FAQS = [
  {
    question: "What is Model United Nations?",
    answer: "Model United Nations is a simulation of United Nations proceedings where students represent countries in various committees, debate current global issues, and draft resolutions."
  },
  {
    question: "Do I need prior experience to participate?",
    answer: "No, we have committees suited for all experience levels, from beginners to advanced delegates. Whether it's your first time or you're a seasoned delegate, there's a place for you."
  },
  {
    question: "Am I allowed to bring my smartphone and other devices?",
    answer: "No, this is strictly a no-smartphone conference. However, laptops, tablets, or other personal computers are allowed. Only one device is allowed per delegate. Please note that no internet connection will be provided. Internet dongles will be allowed if the EB approves."
  },
  {
    question: "What are the conference dates and venue?",
    answer: "DPSHMUN 2026 takes place on August 7 and 8 at Delhi Public School, Hyderabad. Check the Resources page for detailed timings."
  },
   {
    question: "Will lunch be provided?",
    answer: "Participants are requested to carry their own breakfast, lunch, and water bottles. However, a snack box will be provided to all delegates during the conference."
  },
  {
    question: "Will school transport be available?",
    answer: "For the delegates who have opted for it, school transport will be provided. However, school transport is not available for those who have opted for own transport."
  },
  {
    question: "Are delegates allowed to carry makeup or personal items?",
    answer: "Delegates are strongly advised to refrain from carrying makeup products, perfumes, or similar personal items to the conference. Possession of any prohibited items will result in strict disciplinary action. The school will not be responsible for the loss or safekeeping of any personal belongings."
  },
   {
    question: "Will all participants receive a participation certificate?",
    answer: "Yes, all participants who attend both days of the conference will receive an official e-certificate recognizing their contribution."
  },
  {
    question: "What is the dress code?",
    answer: "The dress code for the conference requires business formals on day one and Indian traditionals on day two. More information can be accessed on the Resources page."
  },
  {
    question: "What research sources can I use?",
    answer: "Certain sources, like official UN websites and other primary news sources like Reuters are the best sources for research. Some secondary sources can also be used, but are given less priority than primary ones. Sources like Wikipedia cannot be used. Other information from untrustworthy sources will be discarded."
  },
  {
    question: "What should I prepare before the conference?",
    answer: "Research your assigned country and committee topic. Prepare a position paper (usually 2-3 pages) outlining your country's stance. The secretariat will provide background guides and resources to help you prepare."
  },
];

/* ---------- Navigation (section switching) ---------- */
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const mainNav = document.getElementById("mainNav");
const navToggle = document.getElementById("navToggle");

function showSection(id) {
  pages.forEach((p) => p.classList.toggle("active", p.id === id));
  navLinks.forEach((l) => l.classList.toggle("active", l.dataset.section === id));
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Any element with data-section acts as a navigation trigger
document.querySelectorAll("[data-section]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    showSection(el.dataset.section);
  });
});

// Mobile menu toggle
navToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

/* --------- Render Secretariat --------- */
function renderSecretariat() {
  const grid = document.getElementById("secretariatGrid");
  const maxLength = 56; // character cutoff

  grid.innerHTML = SECRETARIAT.map((m, i) => {
    const shortBio = m.bio.length > maxLength ? m.bio.slice(0, maxLength) + "..." : m.bio;
    const needsMore = m.bio.length > maxLength;

    return `
    <article class="card">
      <div class="card-img-wrapper">
        <img src="${m.image}" alt="${m.name}" class="card-img">
      </div>
      <span class="role">${m.role}</span>
      <h3>${m.name}</h3>
      <p><strong>${m.grade}</strong></p>
      <p id="bio-${i}" class="bio" data-expanded="false">${shortBio}</p>
      ${needsMore ? `<button class="more-btn" onclick="toggleBio(${i})">More</button>` : ""}
    </article>
    `;
  }).join("");
}

function toggleBio(index) {
  const maxLength = 56; // same cutoff used in render
  const bioEl = document.getElementById(`bio-${index}`);
  const btn = bioEl.nextElementSibling;
  const member = SECRETARIAT[index];

  if (bioEl.dataset.expanded === "true") {
    // collapse back to original truncated preview
    bioEl.innerText = member.bio.slice(0, maxLength) + "...";
    bioEl.dataset.expanded = "false";
    btn.innerText = "More";
  } else {
    // expand to full bio
    bioEl.innerText = member.bio;
    bioEl.dataset.expanded = "true";
    btn.innerText = "Less";
  }
}


/* ---------- Render Committees ---------- */
function renderCommittees() {
  const grid = document.getElementById("committeesGrid");
  grid.innerHTML = COMMITTEES.map(
    (c) => `
      <a class="card" href="${c.page}">
        <div class="card-img-wrapper">
          <img src="${c.image}" alt="${c.name} logo" class="card-img">
        </div>
        <span class="tag">${c.abbr}</span>
        <h3>${c.name}</h3>
      </a>
    `
  ).join("");
}

/* ---------- Render FAQs ---------- */
function renderFAQs() {
  const list = document.getElementById("faqList");
  list.innerHTML = FAQS.map(
    (faq, idx) => `
    <div class="faq-item" data-index="${idx}">
      <button class="faq-question">
        <span>${faq.question}</span>
        <span class="faq-toggle">+</span>
      </button>
      <div class="faq-answer">${faq.answer}</div>
    </div>`
  ).join("");
  
  // Add click handlers for FAQ toggle
  document.querySelectorAll(".faq-question").forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".faq-item").classList.toggle("open");
    });
  });
}

/* -------- Allocations table + filtering -------- */
function populateFilter() {
  const options = ['<option value="all">All committees</option>']
    .concat([...new Set(ALLOCATIONS.map(a => a.Committee))]
      .map(c => `<option value="${c}">${c}</option>`));
  committeeFilter.innerHTML = options.join("");
}

function renderAllAllocations() {
  const committee = committeeFilter.value;
  const query = allocSearch.value.trim().toLowerCase();

  const rows = ALLOCATIONS.filter((a) => {
    const matchCommittee = committee === "all" || a.Committee === committee;
    const matchQuery =
      !query ||
      a.Country.toLowerCase().includes(query) ||
      a.Name.toLowerCase().includes(query) ||
      a.Class.toLowerCase().includes(query);
    return matchCommittee && matchQuery;
  });

  allocBody.innerHTML = rows
    .map(
      (a) => `
        <tr>
          <td><strong>${a.Committee}</strong></td>
          <td>${a.Country}</td>
          <td>${a.Name}</td>
          <td>${a.Class}</td>
        </tr>`
    )
    .join("");

  allocEmpty.hidden = rows.length > 0;
}

document.addEventListener("DOMContentLoaded", () => {
  populateFilter();
  renderAllAllocations();
});

committeeFilter.addEventListener("change", renderAllAllocations);
allocSearch.addEventListener("input", renderAllAllocations);

/* ---------- Init ---------- */
renderSecretariat();
renderCommittees();
renderFAQs();
renderAllAllocations();
populateFilter();

