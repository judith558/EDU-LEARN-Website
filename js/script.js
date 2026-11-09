/* ==========================================================
   EduLearn - shared JavaScript
   One file for every page. Each section only runs when the
   elements it needs exist on the current page.
   ========================================================== */

/* ---------- Data ---------- */

// All available courses (used by the Home and Courses pages)
const COURSES = [
  {"id": "html-fundamentals", "title": "HTML Fundamentals", "short": "HTML", "topic": "web-development", "category": "Web Development", "level": "Beginner", "description": "Learn semantic HTML, page structure, forms and accessible content.", "tags": ["Semantic HTML", "Forms", "Accessibility"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=html-fundamentals"},
  {"id": "advanced-html5", "title": "Advanced HTML5", "short": "HTML5", "topic": "web-development", "category": "Web Development", "level": "Intermediate", "description": "Build modern interfaces with HTML5 APIs, media and accessible patterns.", "tags": ["HTML5 APIs", "Media", "Accessibility"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=advanced-html5"},
  {"id": "css-fundamentals", "title": "CSS Fundamentals", "short": "CSS", "topic": "web-development", "category": "Web Development", "level": "Beginner", "description": "Style confident interfaces with selectors, color, typography and the box model.", "tags": ["Selectors", "Typography", "Box Model"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "css-basics", "link": "course.html?id=css-fundamentals"},
  {"id": "advanced-css", "title": "Advanced CSS", "short": "CSS+", "topic": "web-development", "category": "Web Development", "level": "Advanced", "description": "Master grid, animations, architecture and scalable responsive systems.", "tags": ["Grid", "Animation", "Architecture"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "css-layout", "link": "course.html?id=advanced-css"},
  {"id": "javascript-beginners", "title": "JavaScript for Beginners", "short": "JS", "topic": "web-development", "category": "Web Development", "level": "Beginner", "description": "Learn the language of the browser through variables, functions, arrays and events.", "tags": ["Variables", "Functions", "DOM"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=javascript-beginners"},
  {"id": "advanced-javascript", "title": "Advanced JavaScript", "short": "JS+", "topic": "web-development", "category": "Web Development", "level": "Advanced", "description": "Work with async code, modules, testing and production-ready JavaScript.", "tags": ["Async", "Modules", "Testing"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=advanced-javascript"},
  {"id": "responsive-web", "title": "Responsive Web Design", "short": "RWD", "topic": "web-development", "category": "Web Development", "level": "Intermediate", "description": "Create layouts that feel intentional on every screen size.", "tags": ["Mobile-first", "Media Queries", "UX"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "css-layout", "link": "course.html?id=responsive-web"},
  {"id": "bootstrap-5", "title": "Bootstrap 5", "short": "B5", "topic": "web-development", "category": "Web Development", "level": "Beginner", "description": "Ship responsive interfaces quickly with Bootstrap\u2019s grid and components.", "tags": ["Components", "Grid", "Utilities"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "css-basics", "link": "course.html?id=bootstrap-5"},
  {"id": "tailwind-css", "title": "Tailwind CSS", "short": "TW", "topic": "web-development", "category": "Web Development", "level": "Intermediate", "description": "Compose precise designs with utility-first CSS and design tokens.", "tags": ["Utilities", "Design systems", "Components"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "css-layout", "link": "course.html?id=tailwind-css"},
  {"id": "react-js", "title": "React.js", "short": "React", "topic": "web-development", "category": "Web Development", "level": "Intermediate", "description": "Build component-driven interfaces with React, state and reusable UI.", "tags": ["Components", "State", "Hooks"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-dom", "link": "course.html?id=react-js"},
  {"id": "node-js", "title": "Node.js", "short": "Node", "topic": "web-development", "category": "Web Development", "level": "Intermediate", "description": "Create server-side JavaScript applications, APIs and command-line tools.", "tags": ["Node", "APIs", "NPM"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=node-js"},
  {"id": "php-programming", "title": "PHP Programming", "short": "PHP", "topic": "web-development", "category": "Web Development", "level": "Beginner", "description": "Build dynamic web applications with PHP fundamentals and forms.", "tags": ["Syntax", "Forms", "Web apps"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-forms", "link": "course.html?id=php-programming"},
  {"id": "web-projects", "title": "Website Development Projects", "short": "Build", "topic": "web-development", "category": "Web Development", "level": "Intermediate", "description": "Turn your skills into polished portfolio projects from brief to launch.", "tags": ["Planning", "Build", "Deploy"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=web-projects"},
  {"id": "python-beginners", "title": "Python for Beginners", "short": "Py", "topic": "programming", "category": "Programming", "level": "Beginner", "description": "Start programming with Python syntax, data types, functions and files.", "tags": ["Syntax", "Functions", "Files"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=python-beginners"},
  {"id": "advanced-python", "title": "Advanced Python", "short": "Py+", "topic": "programming", "category": "Programming", "level": "Advanced", "description": "Write maintainable Python with OOP, testing, packaging and automation.", "tags": ["OOP", "Testing", "Automation"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=advanced-python"},
  {"id": "java-programming", "title": "Java Programming", "short": "Java", "topic": "programming", "category": "Programming", "level": "Intermediate", "description": "Learn object-oriented Java and create reliable console applications.", "tags": ["OOP", "Collections", "Java"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=java-programming"},
  {"id": "c-programming", "title": "C Programming", "short": "C", "topic": "programming", "category": "Programming", "level": "Intermediate", "description": "Understand memory, pointers and the foundations of systems programming.", "tags": ["Memory", "Pointers", "Systems"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=c-programming"},
  {"id": "cpp-programming", "title": "C++ Programming", "short": "C++", "topic": "programming", "category": "Programming", "level": "Intermediate", "description": "Build performant software with modern C++ concepts and STL.", "tags": ["STL", "Classes", "Performance"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=cpp-programming"},
  {"id": "data-structures", "title": "Data Structures and Algorithms", "short": "DSA", "topic": "programming", "category": "Programming", "level": "Advanced", "description": "Solve problems efficiently with core data structures and algorithmic thinking.", "tags": ["Algorithms", "Complexity", "Problem solving"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=data-structures"},
  {"id": "oop", "title": "Object-Oriented Programming", "short": "OOP", "topic": "programming", "category": "Programming", "level": "Intermediate", "description": "Model real-world systems with classes, objects and clean abstractions.", "tags": ["Classes", "Abstraction", "Design"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=oop"},
  {"id": "problem-solving", "title": "Problem Solving with Programming", "short": "Solve", "topic": "programming", "category": "Programming", "level": "Beginner", "description": "Develop a repeatable method for breaking down coding problems.", "tags": ["Logic", "Patterns", "Practice"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "js-basics", "link": "course.html?id=problem-solving"},
  {"id": "sql-fundamentals", "title": "SQL Fundamentals", "short": "SQL", "topic": "database-management", "category": "Database Management", "level": "Beginner", "description": "Query, filter and aggregate relational data with confidence.", "tags": ["Queries", "Joins", "Reports"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-forms", "link": "course.html?id=sql-fundamentals"},
  {"id": "mysql", "title": "MySQL Database Management", "short": "MySQL", "topic": "database-management", "category": "Database Management", "level": "Intermediate", "description": "Design and operate production-minded MySQL databases.", "tags": ["Schemas", "Indexes", "Backups"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-forms", "link": "course.html?id=mysql"},
  {"id": "database-design", "title": "Database Design", "short": "DB", "topic": "database-management", "category": "Database Management", "level": "Intermediate", "description": "Create normalized, maintainable data models for real products.", "tags": ["ERDs", "Normalization", "Modeling"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-forms", "link": "course.html?id=database-design"},
  {"id": "mongodb", "title": "MongoDB Fundamentals", "short": "Mongo", "topic": "database-management", "category": "Database Management", "level": "Beginner", "description": "Store and query flexible document data with MongoDB.", "tags": ["Documents", "Queries", "Indexes"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-forms", "link": "course.html?id=mongodb"},
  {"id": "computer-fundamentals", "title": "Computer Fundamentals", "short": "Comp", "topic": "computer-science", "category": "Computer Science", "level": "Beginner", "description": "Understand the hardware, software and systems behind modern computing.", "tags": ["Hardware", "Software", "Systems"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=computer-fundamentals"},
  {"id": "operating-systems", "title": "Operating Systems", "short": "OS", "topic": "computer-science", "category": "Computer Science", "level": "Intermediate", "description": "Explore processes, memory, filesystems and operating system design.", "tags": ["Processes", "Memory", "Filesystems"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=operating-systems"},
  {"id": "networking", "title": "Computer Networking", "short": "Net", "topic": "computer-science", "category": "Computer Science", "level": "Intermediate", "description": "Learn how devices connect and data travels across networks.", "tags": ["TCP/IP", "Routing", "Security"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=networking"},
  {"id": "software-engineering", "title": "Software Engineering", "short": "SE", "topic": "computer-science", "category": "Computer Science", "level": "Intermediate", "description": "Plan, build, review and ship software with professional practices.", "tags": ["Agile", "Testing", "Delivery"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=software-engineering"},
  {"id": "cybersecurity", "title": "Cybersecurity Fundamentals", "short": "Cyber", "topic": "computer-science", "category": "Computer Science", "level": "Beginner", "description": "Build security awareness with threat modeling and defensive fundamentals.", "tags": ["Threats", "Identity", "Defense"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=cybersecurity"},
  {"id": "cloud-computing", "title": "Cloud Computing Fundamentals", "short": "Cloud", "topic": "computer-science", "category": "Computer Science", "level": "Beginner", "description": "Understand cloud services, deployment patterns and shared responsibility.", "tags": ["Cloud", "Deploy", "Reliability"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=cloud-computing"},
  {"id": "ui-ux", "title": "UI/UX Design", "short": "UX", "topic": "digital-skills", "category": "Digital Skills", "level": "Beginner", "description": "Design clearer digital experiences through research, flows and visual hierarchy.", "tags": ["Research", "Wireframes", "Systems"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "css-basics", "link": "course.html?id=ui-ux"},
  {"id": "graphic-design", "title": "Graphic Design", "short": "GD", "topic": "digital-skills", "category": "Digital Skills", "level": "Beginner", "description": "Learn composition, color and type to create stronger visual communication.", "tags": ["Layout", "Color", "Type"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "css-basics", "link": "course.html?id=graphic-design"},
  {"id": "git-github", "title": "Git and GitHub", "short": "Git", "topic": "digital-skills", "category": "Digital Skills", "level": "Beginner", "description": "Track work, collaborate safely and publish projects with Git and GitHub.", "tags": ["Commits", "Branches", "Collaboration"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=git-github"},
  {"id": "digital-marketing", "title": "Digital Marketing", "short": "DM", "topic": "digital-skills", "category": "Digital Skills", "level": "Beginner", "description": "Build practical campaigns with content, channels and measurement.", "tags": ["Content", "Channels", "Analytics"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=digital-marketing"},
  {"id": "excel", "title": "Microsoft Excel", "short": "XLS", "topic": "digital-skills", "category": "Digital Skills", "level": "Beginner", "description": "Turn spreadsheets into useful tools with formulas, charts and clean data.", "tags": ["Formulas", "Charts", "Data"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=excel"},
  {"id": "word", "title": "Microsoft Word", "short": "DOC", "topic": "digital-skills", "category": "Digital Skills", "level": "Beginner", "description": "Create polished documents with styles, layouts and collaboration tools.", "tags": ["Styles", "Layouts", "Collaboration"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=word"},
  {"id": "powerpoint", "title": "PowerPoint Presentation Design", "short": "PPT", "topic": "digital-skills", "category": "Digital Skills", "level": "Beginner", "description": "Design presentations that make complex ideas easy to follow.", "tags": ["Storytelling", "Layout", "Delivery"], "duration": "4 weeks", "instructor": "EduLearn Academy", "objectives": ["Understand the core concepts", "Apply the skill in a practical exercise", "Build confidence through guided practice"], "curriculum": [{"title": "Foundations", "detail": "Core ideas and vocabulary."}, {"title": "Guided practice", "detail": "Follow a practical example."}, {"title": "Capstone challenge", "detail": "Apply your learning independently."}], "linkAnchor": "html-basics", "link": "course.html?id=powerpoint"},
];

window.EDULEARN_COURSES = COURSES;

// Every lesson on the Tutorial page (id must match the lesson's HTML id)
const LESSONS = [
  { id: "html-basics", title: "HTML: Page Structure" },
  { id: "html-forms", title: "HTML: Forms & Inputs" },
  { id: "css-basics", title: "CSS: Selectors & Colors" },
  { id: "css-layout", title: "CSS: Box Model & Flexbox" },
  { id: "js-basics", title: "JavaScript: Variables & Functions" },
  { id: "js-dom", title: "JavaScript: The DOM & Events" }
];

// Quiz questions, grouped by topic
const QUIZZES = {
  html: [
    {
      q: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"],
      answer: 0,
      explain: "HTML stands for HyperText Markup Language. It describes the structure of a web page."
    },
    {
      q: "Which tag creates the largest heading?",
      options: ["<head>", "<h6>", "<h1>", "<heading>"],
      answer: 2,
      explain: "<h1> is the largest heading and <h6> is the smallest. <head> holds page info, not a heading."
    },
    {
      q: "Which tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: 1,
      explain: "The <a> (anchor) tag creates links, using the href attribute for the address."
    },
    {
      q: "Which attribute gives an image its alternative text?",
      options: ["title", "src", "alt", "text"],
      answer: 2,
      explain: "The alt attribute describes the image for screen readers and shows if the image fails to load."
    },
    {
      q: "Which tag creates a numbered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: 1,
      explain: "<ol> is an ordered (numbered) list. <ul> is unordered (bullets), and <li> is each item."
    }
  ],
  css: [
    {
      q: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Syntax"],
      answer: 2,
      explain: "CSS stands for Cascading Style Sheets. It controls how HTML looks."
    },
    {
      q: "Which property changes the text color?",
      options: ["font-color", "text-color", "color", "background-color"],
      answer: 2,
      explain: "The color property sets text color. background-color sets the background."
    },
    {
      q: "How do you select an element with id=\"menu\"?",
      options: [".menu", "#menu", "menu", "*menu"],
      answer: 1,
      explain: "# selects by id, . selects by class, and a plain name selects by tag."
    },
    {
      q: "In the box model, which is the space INSIDE the border?",
      options: ["margin", "padding", "outline", "gap"],
      answer: 1,
      explain: "Padding is inside the border, around the content. Margin is outside the border."
    },
    {
      q: "Which declaration turns an element into a flex container?",
      options: ["display: flex;", "flex: container;", "position: flex;", "layout: flex;"],
      answer: 0,
      explain: "display: flex; makes the element a flex container so its children line up in a row."
    }
  ],
  javascript: [
    {
      q: "Which keyword declares a variable that cannot be reassigned?",
      options: ["var", "let", "const", "static"],
      answer: 2,
      explain: "const creates a variable that cannot be reassigned. let can be changed later."
    },
    {
      q: "How do you write a message to the browser console?",
      options: ["print(\"Hi\")", "console.log(\"Hi\")", "echo(\"Hi\")", "alert.console(\"Hi\")"],
      answer: 1,
      explain: "console.log() prints to the developer console, which is great for debugging."
    },
    {
      q: "What does document.getElementById(\"title\") return?",
      options: ["The text \"title\"", "All elements with class title", "The element with id=\"title\"", "A new element"],
      answer: 2,
      explain: "getElementById finds the single element whose id matches."
    },
    {
      q: "Which method runs code when a button is clicked?",
      options: ["button.onHover()", "button.addEventListener(\"click\", fn)", "button.click = run", "button.listen(fn)"],
      answer: 1,
      explain: "addEventListener(\"click\", fn) runs the function fn every time the button is clicked."
    },
    {
      q: "What is the result of 2 + \"2\" in JavaScript?",
      options: ["4", "\"22\"", "NaN", "Error"],
      answer: 1,
      explain: "When you add a number and a string, JavaScript joins them as text, giving \"22\"."
    }
  ]
};

const TOPIC_NAMES = { html: "HTML", css: "CSS", javascript: "JavaScript" };

/* ---------- Progress saved in the browser (localStorage) ---------- */

const STORAGE_KEY = "edulearnProgress";

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saved && Array.isArray(saved.completed) && saved.quizzes) return saved;
  } catch (e) {
    // ignore broken data and start fresh
  }
  return { completed: [], quizzes: {} };
}

function saveProgress(progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

/* ---------- Helpers ---------- */

function showToast(message) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}

// Builds the HTML for one course card
function courseCardHTML(course) {
  const topicClass = course.topic === "javascript" ? "js" : course.topic;
  const tags = course.tags.map(t => `<span class="tag">${t}</span>`).join("");
  return `
    <article class="course-card" data-topic="${course.topic}">
      <div class="card-top ${topicClass}">${course.short}</div>
      <div class="card-body">
        <h3>${course.title}</h3>
        <div class="level">${course.category} · ${course.level} · ${course.duration}</div>
        <p>${course.description}</p>
        <div class="tags">${tags}</div>
        <a href="${course.link}" class="btn">View course</a>
      </div>
    </article>`;
}

function matchesSearch(course, term) {
  const text = (course.title + " " + course.description + " " + course.tags.join(" ") + " " + course.topic).toLowerCase();
  return text.includes(term.toLowerCase().trim());
}

/* ---------- Navigation (every page) ---------- */

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  // Highlight the link for the current page
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

/* ---------- Home page ---------- */

function initHome() {
  const grid = document.getElementById("homeCourses");
  if (!grid) return;

  // Show the three main courses on the home page
  const featured = COURSES.slice(0, 6);
  grid.innerHTML = featured.map(courseCardHTML).join("");

  // Search bar sends the user to the Courses page with their search term
  const form = document.getElementById("homeSearch");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const term = document.getElementById("homeSearchInput").value.trim();
    location.href = "courses.html" + (term ? "?search=" + encodeURIComponent(term) : "");
  });
}

/* ---------- Courses page ---------- */

function initCourses() {
  const grid = document.getElementById("courseGrid");
  if (!grid) return;

  const searchInput = document.getElementById("courseSearch");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const noResults = document.getElementById("noResults");
  let currentTopic = "all";

  // Pre-fill search coming from the home page
  const params = new URLSearchParams(location.search);
  if (params.get("search")) searchInput.value = params.get("search");

  function render() {
    const term = searchInput.value;
    const list = COURSES.filter(c =>
      (currentTopic === "all" || c.topic === currentTopic) && matchesSearch(c, term)
    );
    grid.innerHTML = list.map(courseCardHTML).join("");
    noResults.style.display = list.length ? "none" : "block";
  }

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTopic = btn.dataset.topic;
      render();
    });
  });

  searchInput.addEventListener("input", render);
  render();
}

/* ---------- Tutorial page ---------- */

function initTutorials() {
  const lessons = document.querySelectorAll(".lesson");
  if (!lessons.length) return;

  const progress = loadProgress();

  // Copy-code buttons
  document.querySelectorAll(".code-block").forEach(block => {
    const btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    block.appendChild(btn);

    btn.addEventListener("click", () => {
      const code = block.querySelector("code").innerText;
      const done = () => {
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(() => { btn.textContent = "Copy"; btn.classList.remove("copied"); }, 1500);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(done);
      } else {
        // Fallback for opening the file directly (file://)
        const temp = document.createElement("textarea");
        temp.value = code;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        temp.remove();
        done();
      }
    });
  });

  // Mark-as-completed buttons
  function updateLessonUI(lesson) {
    const id = lesson.id;
    const btn = lesson.querySelector(".complete-btn");
    const isDone = progress.completed.includes(id);
    lesson.classList.toggle("completed", isDone);
    btn.textContent = isDone ? "✓ Completed (click to undo)" : "Mark as Completed";
    btn.classList.toggle("btn-success", isDone);
    const sideLink = document.querySelector(`.sidebar a[href="#${id}"]`);
    if (sideLink) sideLink.classList.toggle("done", isDone);
  }

  lessons.forEach(lesson => {
    const btn = lesson.querySelector(".complete-btn");
    updateLessonUI(lesson);
    btn.addEventListener("click", () => {
      const id = lesson.id;
      if (progress.completed.includes(id)) {
        progress.completed = progress.completed.filter(x => x !== id);
        showToast("Lesson marked as not completed");
      } else {
        progress.completed.push(id);
        showToast("Great job! Lesson completed 🎉");
      }
      saveProgress(progress);
      updateLessonUI(lesson);
    });
  });
}

/* ---------- Quiz page ---------- */

function initQuiz() {
  const container = document.getElementById("quizQuestions");
  if (!container) return;

  const topicButtons = document.querySelectorAll(".quiz-topic-btn");
  const submitBtn = document.getElementById("submitQuiz");
  const retryBtn = document.getElementById("retryQuiz");
  const scoreBox = document.getElementById("scoreBox");
  const quizTitle = document.getElementById("quizTitle");
  let currentTopic = "html";

  function renderQuiz() {
    const questions = QUIZZES[currentTopic];
    quizTitle.textContent = TOPIC_NAMES[currentTopic] + " Quiz";
    scoreBox.classList.remove("show");
    submitBtn.style.display = "inline-block";
    retryBtn.style.display = "none";

    container.innerHTML = "";
    questions.forEach((item, qi) => {
      const card = document.createElement("div");
      card.className = "question-card";

      const h3 = document.createElement("h3");
      h3.textContent = `${qi + 1}. ${item.q}`;
      card.appendChild(h3);

      item.options.forEach((opt, oi) => {
        const label = document.createElement("label");
        label.className = "option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "q" + qi;
        input.value = oi;
        const span = document.createElement("span");
        span.textContent = opt; // textContent keeps tags like <h1> visible as text
        label.append(input, span);
        input.addEventListener("change", () => {
          card.querySelectorAll(".option").forEach(o => o.classList.remove("selected"));
          label.classList.add("selected");
        });
        card.appendChild(label);
      });

      const feedback = document.createElement("div");
      feedback.className = "feedback";
      card.appendChild(feedback);
      container.appendChild(card);
    });
  }

  function gradeQuiz() {
    const questions = QUIZZES[currentTopic];
    const cards = container.querySelectorAll(".question-card");

    // Make sure every question has an answer
    const unanswered = questions.filter((_, qi) => !container.querySelector(`input[name="q${qi}"]:checked`));
    if (unanswered.length) {
      showToast(`Please answer all questions (${unanswered.length} left)`);
      return;
    }

    let score = 0;
    questions.forEach((item, qi) => {
      const card = cards[qi];
      const chosen = Number(container.querySelector(`input[name="q${qi}"]:checked`).value);
      const options = card.querySelectorAll(".option");
      const feedback = card.querySelector(".feedback");

      options.forEach((o, oi) => {
        o.querySelector("input").disabled = true;
        if (oi === item.answer) o.classList.add("correct");
        else if (oi === chosen) o.classList.add("wrong");
      });

      if (chosen === item.answer) {
        score++;
        feedback.className = "feedback show good";
        feedback.textContent = "✓ Correct! " + item.explain;
      } else {
        feedback.className = "feedback show bad";
        feedback.textContent = "✗ Not quite. Correct answer: " + item.options[item.answer] + ". " + item.explain;
      }
    });

    const total = questions.length;
    const percent = Math.round((score / total) * 100);
    let message = "Keep practising! Review the tutorial and try again.";
    if (percent === 100) message = "Perfect score! Outstanding work! 🏆";
    else if (percent >= 80) message = "Excellent! You really know this topic. 🎉";
    else if (percent >= 60) message = "Good job! A little more practice and you'll master it.";

    document.getElementById("scoreNumber").textContent = `${score} / ${total}`;
    document.getElementById("scorePercent").textContent = `${percent}%`;
    document.getElementById("scoreMessage").textContent = message;
    scoreBox.classList.add("show");
    submitBtn.style.display = "none";
    retryBtn.style.display = "inline-block";
    scoreBox.scrollIntoView({ behavior: "smooth" });

    // Save the result (keeps best score and latest attempt)
    const progress = loadProgress();
    const previous = progress.quizzes[currentTopic];
    progress.quizzes[currentTopic] = {
      score,
      total,
      percent,
      best: previous ? Math.max(previous.best, percent) : percent,
      attempts: previous ? previous.attempts + 1 : 1,
      date: new Date().toLocaleString()
    };
    saveProgress(progress);
  }

  topicButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      topicButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTopic = btn.dataset.topic;
      renderQuiz();
    });
  });

  submitBtn.addEventListener("click", gradeQuiz);
  retryBtn.addEventListener("click", () => {
    renderQuiz();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  renderQuiz();
}

/* ---------- About & Progress page ---------- */

function initProgressPage() {
  const lessonList = document.getElementById("lessonList");
  if (!lessonList) return;

  function render() {
    const progress = loadProgress();
    const doneCount = LESSONS.filter(l => progress.completed.includes(l.id)).length;
    const percent = Math.round((doneCount / LESSONS.length) * 100);

    document.getElementById("progressFill").style.width = percent + "%";
    document.getElementById("progressText").textContent =
      `${doneCount} of ${LESSONS.length} lessons completed (${percent}%)`;

    lessonList.innerHTML = LESSONS.map(l => {
      const done = progress.completed.includes(l.id);
      return `<li><a href="tutorial.html#${l.id}">${l.title}</a>
        <span class="${done ? "status-done" : "status-todo"}">${done ? "✓ Done" : "Not yet"}</span></li>`;
    }).join("");

    const tbody = document.getElementById("quizResults");
    const topics = Object.keys(TOPIC_NAMES).filter(t => progress.quizzes[t]);
    if (!topics.length) {
      tbody.innerHTML = `<tr><td colspan="5" class="empty">No quizzes taken yet. <a href="quiz.html">Take a quiz</a></td></tr>`;
    } else {
      tbody.innerHTML = topics.map(t => {
        const r = progress.quizzes[t];
        return `<tr><td>${TOPIC_NAMES[t]}</td><td>${r.score}/${r.total} (${r.percent}%)</td>
          <td>${r.best}%</td><td>${r.attempts}</td><td>${r.date}</td></tr>`;
      }).join("");
    }
  }

  document.getElementById("resetProgress").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset all your progress? This cannot be undone.")) {
      localStorage.removeItem(STORAGE_KEY);
      render();
      showToast("Progress has been reset");
    }
  });

  render();
}

/* ---------- Start everything ---------- */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initHome();
  initCourses();
  initTutorials();
  initQuiz();
  initProgressPage();
});
