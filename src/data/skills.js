// src/data/skills.js

export const SKILL_CATEGORIES = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Mobile',
  'IoT & Embedded',
  'Networking',
  'Robotics',
  'Data & ML',
  'CS Foundations',
  'Tools',
];

export const SKILLS_DATA = [
  // Languages
  { name: 'C', category: 'Languages', level: 'Strong', desc: 'Low-level memory management, pointers, and foundational data structures.' },
  { name: 'C++', category: 'Languages', level: 'Strong', desc: 'Object-oriented programming, STL, and microcontroller firmware development.' },
  { name: 'Java', category: 'Languages', level: 'Strong', desc: 'OOP design patterns, data structures, and multithreaded logic.' },
  { name: 'SQL / DBMS', category: 'Languages', level: 'Strong', desc: 'Relational database schema design, indexing, and complex queries.' },
  { name: 'JavaScript (ES6+)', category: 'Languages', level: 'Working', desc: 'Async/Await, promises, DOM manipulation, and modern web application logic.' },
  { name: 'Python', category: 'Languages', level: 'Familiar / Developing', desc: 'Script automation, data manipulation, and applied ML modeling.' },
  { name: 'HTML5 & CSS3', category: 'Languages', level: 'Strong', desc: 'Semantic layouts, Flexbox/Grid, and responsive UI standards.' },
  { name: 'PHP', category: 'Languages', level: 'Familiar / Developing', desc: 'Server-side scripting and local database connection workflows.' },
  { name: 'Lex / Flex', category: 'Languages', level: 'Working', desc: 'Lexical analysis rules and compiler tokenization specifications.' },

  // Networking (User Highlighted Skill!)
  { name: 'Switch & Router Configuration', category: 'Networking', level: 'Strong', desc: 'Configuring network switches, routers, LAN subnets, static routing, and VLAN segmentations.' },
  { name: 'Computer Networks (TCP/IP)', category: 'Networking', level: 'Strong', desc: 'Deep understanding of TCP/IP protocol stack, OSI model, packet routing, and IP addressing.' },
  { name: 'Network Sockets & Gateways', category: 'Networking', level: 'Strong', desc: 'Socket programming (C/Node.js), HTTP/HTTPS, WebSockets, and IoT Wi-Fi gateway routing.' },
  { name: 'Wireless & Access Point Setup', category: 'Networking', level: 'Strong', desc: 'Configuring ESP32 Wi-Fi Access Point (AP) / Station (STA) modes and local network routing.' },

  // Frontend
  { name: 'React 19', category: 'Frontend', level: 'Working', desc: 'Functional components, hooks, state management, and modern component architecture.' },
  { name: 'Vite 6', category: 'Frontend', level: 'Working', desc: 'Fast ES module bundling and dev server tooling.' },
  { name: 'Tailwind CSS 3', category: 'Frontend', level: 'Working', desc: 'Utility-first styling, design tokens, and responsive mobile layouts.' },
  { name: 'Framer Motion 12', category: 'Frontend', level: 'Working', desc: 'Subtle UI transitions, gesture interactions, and layout animations.' },
  { name: 'Component Architecture', category: 'Frontend', level: 'Working', desc: 'Modular, reusable, and predictable UI component structures.' },

  // Backend & APIs
  { name: 'Node.js', category: 'Backend', level: 'Working', desc: 'Asynchronous event-driven server runtime for backend services.' },
  { name: 'Express.js', category: 'Backend', level: 'Working', desc: 'RESTful API routing, custom middleware, and error handling.' },
  { name: 'REST APIs', category: 'Backend', level: 'Hands-on', desc: 'Endpoint architecture, JSON payload contracts, and HTTP status codes.' },
  { name: 'MongoDB', category: 'Backend', level: 'Working', desc: 'NoSQL document modeling, aggregation pipelines, and Mongoose ORM.' },
  { name: 'MySQL', category: 'Backend', level: 'Strong', desc: 'Relational schema design, foreign key constraints, and multi-table queries.' },
  { name: 'Sequelize ORM', category: 'Backend', level: 'Hands-on', desc: 'Object-relational mapping for Node.js database interactions.' },
  { name: 'Authentication & OTP', category: 'Backend', level: 'Hands-on', desc: 'JWT security tokens and single-use OTP verification workflows.' },

  // Mobile
  { name: 'React Native', category: 'Mobile', level: 'Hands-on', desc: 'Cross-platform mobile applications for iOS and Android.' },
  { name: 'Expo', category: 'Mobile', level: 'Hands-on', desc: 'Mobile prototyping, native device APIs, and app navigation.' },

  // IoT & Embedded
  { name: 'ESP32 / ESP8266', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Dual-core Wi-Fi/BLE microcontrollers running C++ firmware.' },
  { name: 'Arduino UNO', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Microcontroller hardware prototyping, interrupts, and PWM control.' },
  { name: 'ESP32-CAM', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Wireless video streaming and camera web server integration.' },
  { name: 'UART / I2C / PWM', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Hardware serial communications and pulse width modulation.' },
  { name: 'GSM A7607C / Wi-Fi', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Cellular IoT telemetry, AT command handling, and cloud data sync.' },

  // Robotics
  { name: 'PID Control Algorithm', category: 'Robotics', level: 'Hands-on', desc: 'Tuning Kp, Ki, and Kd feedback loops for closed-loop motor control.' },
  { name: 'Sensor Array Calibration', category: 'Robotics', level: 'Hands-on', desc: 'Analog sensor signal normalization, thresholding, and noise filtering.' },
  { name: 'Competition Winner', category: 'Robotics', level: 'Achievement 🏆', desc: '1st Place Winner in Autonomous Rover & Line Follower Contest.' },

  // Data & ML
  { name: 'Pandas & NumPy', category: 'Data & ML', level: 'Familiar / Developing', desc: 'Data cleaning, tabular processing, and matrix calculations.' },
  { name: 'Matplotlib & Seaborn', category: 'Data & ML', level: 'Familiar / Developing', desc: 'Exploratory data visualization and statistical plotting.' },

  // CS Foundations
  { name: 'Computer Networks', category: 'CS Foundations', level: 'Strong', desc: 'TCP/IP architecture, IP routing, subnetting, switch/router setup, and socket programming.' },
  { name: 'Data Structures & Algo', category: 'CS Foundations', level: 'Strong', desc: 'Trees, Graphs, Sorting algorithms, Dynamic Programming, and complexity analysis.' },
  { name: 'Operating Systems', category: 'CS Foundations', level: 'Strong', desc: 'Process scheduling, paging, memory management, and concurrency.' },
  { name: 'Parallel Computing (MPI)', category: 'CS Foundations', level: 'Hands-on', desc: 'MPI C/C++ matrix multiplication, Quick Sort, and speedup analysis.' },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 'Strong', desc: 'Version control, branching strategies, code reviews, and pull requests.' },
  { name: 'Linux', category: 'Tools', level: 'Working', desc: 'Terminal navigation, shell scripting, and file permissions.' },
  { name: 'XAMPP & Apache', category: 'Tools', level: 'Working', desc: 'Local environment setup for MySQL and PHP testing.' },
];
