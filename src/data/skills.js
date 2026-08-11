// src/data/skills.js

export const SKILL_CATEGORIES = [
  'All',
  'Languages',
  'Frontend',
  'Backend',
  'Mobile',
  'IoT & Embedded',
  'Robotics',
  'Data & ML',
  'CS Foundations',
  'Tools',
];

export const SKILLS_DATA = [
  // Languages
  { name: 'C', category: 'Languages', level: 'Strong', desc: 'Pointers, manual memory allocation, and debugging segmentation faults with a smile.' },
  { name: 'C++', category: 'Languages', level: 'Strong', desc: 'OOP, STL templates, and firmware development for microcontrollers.' },
  { name: 'Java', category: 'Languages', level: 'Strong', desc: 'Solid OOP principles, data structures, and multithreading.' },
  { name: 'SQL / DBMS', category: 'Languages', level: 'Strong', desc: 'Designing clean relational schemas, indexing, and writing non-monstrous JOIN queries.' },
  { name: 'JavaScript (ES6+)', category: 'Languages', level: 'Working', desc: 'Async/Await, promises, DOM manipulation, and surviving the event loop.' },
  { name: 'Python', category: 'Languages', level: 'Familiar / Developing', desc: 'Data wrangling, script automation, and machine learning experiments.' },
  { name: 'HTML5 & CSS3', category: 'Languages', level: 'Strong', desc: 'Semantic layouts, Flexbox/Grid alignment, and responsive design.' },
  { name: 'PHP', category: 'Languages', level: 'Familiar / Developing', desc: 'Backend scripts and local XAMPP environment workflows.' },
  { name: 'Lex / Flex', category: 'Languages', level: 'Working', desc: 'Lexical analyzer rules and tokenization for compiler projects.' },

  // Frontend
  { name: 'React 19', category: 'Frontend', level: 'Working', desc: 'Hooks, state management, components, and zero unnecessary re-renders.' },
  { name: 'Vite 6', category: 'Frontend', level: 'Working', desc: 'Lightning-fast ES module bundling — because waiting for builds is overrated.' },
  { name: 'Tailwind CSS 3', category: 'Frontend', level: 'Working', desc: 'Utility-first responsive design system with custom theme tokens.' },
  { name: 'Framer Motion 12', category: 'Frontend', level: 'Working', desc: 'Fluid UI transitions, gesture animations, and scroll triggers.' },
  { name: 'Component Architecture', category: 'Frontend', level: 'Working', desc: 'Clean, reusable, and predictable UI component structures.' },
  { name: 'Responsive Dashboards', category: 'Frontend', level: 'Working', desc: 'Real-time telemetry views, data charts, and dark/light themes.' },

  // Backend & APIs
  { name: 'Node.js', category: 'Backend', level: 'Working', desc: 'Asynchronous event-driven server runtime for fast APIs.' },
  { name: 'Express.js', category: 'Backend', level: 'Working', desc: 'RESTful routing, custom middleware, and error handling.' },
  { name: 'REST APIs', category: 'Backend', level: 'Hands-on', desc: 'Clean HTTP endpoint contracts, JSON payloads, and proper status codes.' },
  { name: 'MongoDB', category: 'Backend', level: 'Working', desc: 'NoSQL document modeling, aggregation pipelines, and Mongoose schemas.' },
  { name: 'MySQL', category: 'Backend', level: 'Strong', desc: 'Relational data models, foreign keys, and relational constraints.' },
  { name: 'Sequelize ORM', category: 'Backend', level: 'Hands-on', desc: 'Object-relational mapping for SQL databases in Node.js.' },
  { name: 'Authentication & OTP', category: 'Backend', level: 'Hands-on', desc: 'JWT security tokens and single-use OTP verification flows.' },
  { name: 'Render / Cloud Hosting', category: 'Backend', level: 'Hands-on', desc: 'Deploying live web services and database backends.' },

  // Mobile
  { name: 'React Native', category: 'Mobile', level: 'Hands-on', desc: 'Cross-platform mobile apps for iOS and Android.' },
  { name: 'Expo', category: 'Mobile', level: 'Hands-on', desc: 'Rapid mobile prototyping, native device APIs, and navigation.' },
  { name: 'Mobile UI & Workflows', category: 'Mobile', level: 'Hands-on', desc: 'Touch-optimized responsive layouts and mobile user sessions.' },

  // IoT & Embedded
  { name: 'ESP32 / ESP8266', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Dual-core Wi-Fi/BLE microcontrollers running C++ firmware.' },
  { name: 'Arduino UNO', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Hardware prototyping, sensor inputs, interrupts, and PWM.' },
  { name: 'ESP32-CAM', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Wireless video streaming and camera web server integration.' },
  { name: 'UART / I2C / PWM', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Hardware serial communications and pulse width modulation.' },
  { name: 'GSM A7607C / Wi-Fi', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Cellular IoT telemetry, AT command handling, and cloud sync.' },
  { name: 'PZEM-004T & DS3231 RTC', category: 'IoT & Embedded', level: 'Hands-on', desc: 'AC electrical power metering and real-time clock modules.' },
  { name: 'TB6612 / DRV8833 Drivers', category: 'IoT & Embedded', level: 'Hands-on', desc: 'H-bridge motor speed and directional controllers.' },
  { name: 'IR Arrays & Keypads', category: 'IoT & Embedded', level: 'Hands-on', desc: '8-channel IR sensor arrays, 4x4 keypad matrix, and I2C LCD displays.' },
  { name: 'P10 LED Matrix', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Driving high-brightness outdoor LED panels using SPI/DMA.' },
  { name: 'Relays & Power Systems', category: 'IoT & Embedded', level: 'Hands-on', desc: 'Relay switching, buck converters, and Li-ion battery circuits.' },

  // Robotics
  { name: 'PID Control Algorithm', category: 'Robotics', level: 'Hands-on', desc: 'Tuning Kp, Ki, and Kd feedback loops for high-speed tracking.' },
  { name: 'Sensor Array Calibration', category: 'Robotics', level: 'Hands-on', desc: 'Analog sensor normalization, thresholding, and noise filtering.' },
  { name: 'Differential Drive Motors', category: 'Robotics', level: 'Hands-on', desc: 'Motor speed balancing and PWM duty cycle compensation.' },
  { name: 'Autonomous Navigation', category: 'Robotics', level: 'Hands-on', desc: 'Line tracking, sharp turn detection, and recovery logic.' },
  { name: 'Competition Winner', category: 'Robotics', level: 'Achievement 🏆', desc: '1st Place Winner in Autonomous Rover & Line Follower Contest.' },

  // Data & ML
  { name: 'Pandas & NumPy', category: 'Data & ML', level: 'Familiar / Developing', desc: 'Data cleaning, tabular data manipulation, and matrix operations.' },
  { name: 'Matplotlib & Seaborn', category: 'Data & ML', level: 'Familiar / Developing', desc: 'Exploratory data visualization and statistical charting.' },
  { name: 'Jupyter & Anaconda', category: 'Data & ML', level: 'Familiar / Developing', desc: 'Interactive notebook data analysis environments.' },
  { name: 'PLFS Dataset Analysis', category: 'Data & ML', level: 'Familiar / Developing', desc: 'Analyzing labor market trends and unemployment statistics.' },
  { name: 'Regression & Clustering', category: 'Data & ML', level: 'Familiar / Developing', desc: 'Linear/Multiple regression, K-Means clustering, and Chi-square.' },

  // CS Foundations
  { name: 'Data Structures & Algo', category: 'CS Foundations', level: 'Strong', desc: 'Trees, Graphs, Sorting, Dynamic Programming, and complexity.' },
  { name: 'Operating Systems', category: 'CS Foundations', level: 'Strong', desc: 'Processes, threads, memory paging, concurrency, and IPC.' },
  { name: 'Computer Networks', category: 'CS Foundations', level: 'Strong', desc: 'TCP/IP stack, sockets, HTTP/HTTPS protocols, and routing.' },
  { name: 'Parallel Computing (MPI)', category: 'CS Foundations', level: 'Hands-on', desc: 'MPI C/C++ matrix multiplication, Quick Sort, and speedup analysis.' },
  { name: 'Compiler Design & Lex', category: 'CS Foundations', level: 'Hands-on', desc: 'Lexical analysis, FIRST/FOLLOW sets, LR parsers, and ASTs.' },

  // Tools
  { name: 'Git & GitHub', category: 'Tools', level: 'Strong', desc: 'Version control, branching, PRs, and avoiding merge conflict panic.' },
  { name: 'Linux', category: 'Tools', level: 'Working', desc: 'Terminal navigation, shell scripting, and permissions.' },
  { name: 'Docker', category: 'Tools', level: 'Familiar / Developing', desc: 'Containerization basics and environment isolation.' },
  { name: 'XAMPP & Apache', category: 'Tools', level: 'Working', desc: 'Local testing environment for MySQL and PHP.' },
];
