// src/data/domainProjects.js

export const DOMAIN_CATEGORIES = [
  {
    id: 'full-stack-web',
    title: 'Full-Stack Web Applications',
    icon: 'FaLaptopCode',
    badge: 'Web & E-Commerce',
    summary: 'Production-ready web applications, e-commerce storefronts, and role-based administrative platforms.',
    color: 'from-cyan-500/20 to-blue-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30',
  },
  {
    id: 'backend-apis',
    title: 'Backend & REST APIs',
    icon: 'FaServer',
    badge: 'API Gateway & DB',
    summary: 'Node.js/Express server architectures, RESTful API routing, database schemas, and IoT endpoint integration.',
    color: 'from-emerald-500/20 to-green-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
  },
  {
    id: 'iot-connected',
    title: 'IoT & Connected Devices',
    icon: 'FaMicrochip',
    badge: 'Hardware Telemetry',
    summary: 'ESP32 & ESP8266 embedded microcontrollers, cellular GSM telemetry, electrical power sensors, and cloud communication.',
    color: 'from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30',
  },
  {
    id: 'embedded-robotics',
    title: 'Embedded Systems & Robotics',
    icon: 'FaRobot',
    badge: 'PID & Motor Control',
    summary: 'Competition-winning PID autonomous line followers, dual H-bridge motor drivers, and P10 LED matrix scoreboards.',
    color: 'from-rose-500/20 to-red-500/20 text-rose-600 dark:text-pink-400 border-rose-500/30',
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Applications',
    icon: 'FaMobileAlt',
    badge: 'React Native & Expo',
    summary: 'Cross-platform mobile applications for iOS & Android connected to real-time REST backend APIs.',
    color: 'from-indigo-500/20 to-blue-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
  },
  {
    id: 'tools-cli',
    title: 'Engineering Tools & CLI',
    icon: 'FaTools',
    badge: 'MPI & Compiler Theory',
    summary: 'Parallel MPI computing algorithms, speedup analysis, Lex tokenizers, and compiler parsing engines.',
    color: 'from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400 border-purple-500/30',
  },
];

export const DOMAIN_PROJECTS = {
  'full-stack-web': [
    {
      id: 'smart-parking-web',
      title: 'Smart Parking Management System',
      tagline: 'An integrated web and mobile platform connecting physical barrier gates, IR occupancy sensors, Express REST APIs, and MongoDB.',
      metric: '< 200ms State Sync',
      status: 'Working Prototype',
      problem: 'Drivers waste time searching for open parking spaces, while traditional facilities rely on manual paper tickets or uncoordinated entry gates that cause physical traffic bottlenecks.',
      approach: 'Engineered a physical-to-cloud feedback loop where optical sensors update slot availability instantly in MongoDB, allowing driver reservations and automated gate opening via keypad OTP validation.',
      architectureNodes: [
        { id: 'web', label: 'React Web Dashboard', type: 'frontend', protocol: 'HTTPS / REST' },
        { id: 'mobile', label: 'React Native App', type: 'mobile', protocol: 'HTTPS / JSON' },
        { id: 'api', label: 'Node.js & Express API', type: 'backend', protocol: 'WebSocket / HTTP' },
        { id: 'db', label: 'MongoDB Cluster', type: 'database', protocol: 'Mongoose ORM' },
        { id: 'mcu', label: 'ESP32 Controller', type: 'hardware', protocol: 'Wi-Fi / HTTP API' },
        { id: 'peripherals', label: 'IR Array + Servo + Keypad + LCD', type: 'embedded', protocol: 'GPIO / PWM / I2C' },
      ],
      architectureText: `[React Web UI]      [React Native App]
       │                        │
       └───────────┬────────────┘
                   ▼
       [Node.js / Express API Gateway]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
  [MongoDB Cluster]    [ESP32 IoT Controller]
                             │
            ┌────────────────┼────────────────┐
            ▼                ▼                ▼
     [IR Sensors]      [Keypad + LCD]   [Servo Gate Motor]`,
      keyFeatures: [
        'Real-time Parking Slot Monitoring: Optical IR sensors continuously track 6 parking slots with sub-200ms dashboard state synchronization.',
        '1-Tap Slot Reservation: Web & mobile booking interface generates a single-use 4-digit OTP pin linked to the reserved slot.',
        'Automated Gate Barrier Opening: Physical 4x4 matrix keypad entry validates OTP pin against Node.js backend to drive servo barrier gate.',
        'Admin Management Console: Live occupancy analytics, reservation histories, and manual gate override controls.',
      ],
      implementationDetails: [
        'Web Application: Built responsive React UI with interactive slot grid, reservation countdown timer, and live status badges.',
        'Mobile Application: Developed React Native app for on-the-go driver reservations and OTP code retrieval.',
        'Backend Service: Implemented Express.js REST API with JWT authorization, transaction locking, and rate limiting.',
        'Database Design: Structured MongoDB schemas for Users, Slots, Reservations, and Telemetry Event Logs.',
        'Hardware Integration: Programmed ESP32 C++ firmware with Wi-Fi HTTP client routines to poll sensor arrays and post OTP entries.',
      ],
      challenges: [
        'Ambient sunlight reflections triggered false positive readings on optical infrared sensors during outdoor field tests.',
        'Keypad contact mechanical bounce caused duplicate digit inputs when typing fast OTP pins.',
      ],
      debugging: [
        'Implemented a digital sliding-window filter in the C++ firmware to average infrared intensity across 50 consecutive samples.',
        'Added hardware RC filtering capacitors and software timer interrupts to clean up keypad signal debouncing.',
      ],
      results: 'Built a physical hardware-to-cloud prototype demonstrating automated driver entry, mobile OTP reservations, and real-time slot occupancy tracking.',
      techStack: ['React 19', 'React Native', 'Node.js', 'Express', 'MongoDB', 'ESP32', 'C++', 'IR Sensors', 'Keypad', 'Servo Motors', 'I2C LCD'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/smart-parking-1.jpg', caption: 'Smart Parking Web & Hardware Setup' },
        { url: '/images/img/smart-parking-2.jpg', caption: 'Slot Reservation & OTP Verification UI' },
        { url: '/images/img/smart-parking-3.jpg', caption: 'ESP32 Keypad & Servo Gate Assembly' },
      ],
    },
    {
      id: 'organic-store',
      title: 'Organic Store — E-Commerce Platform',
      tagline: 'A full-stack e-commerce web platform for ordering fresh organic produce with real-time shopping cart state and order tracking.',
      metric: 'Sub-100ms API Response',
      status: 'Full-Stack Web App',
      problem: 'Local farm producers need a fast, responsive storefront to sell seasonal produce directly to consumers without relying on bloated, slow third-party platforms.',
      approach: 'Built a custom React 19 web application paired with a Node.js/Express API and MongoDB backend to handle produce catalog browsing, cart state, customer authentication, and order fulfillment.',
      architectureNodes: [
        { id: 'frontend', label: 'React 19 Client UI', type: 'frontend', protocol: 'Single Page App' },
        { id: 'gateway', label: 'Express.js API Router', type: 'backend', protocol: 'REST APIs' },
        { id: 'auth', label: 'JWT Auth Middleware', type: 'security', protocol: 'Bearer Token' },
        { id: 'database', label: 'MongoDB Database', type: 'database', protocol: 'Mongoose BSON' },
      ],
      architectureText: `[React 19 Responsive Client]
         │ (RESTful JSON Requests)
         ▼
[Express.js API Router] ──► [JWT Auth Middleware]
         │
         ▼
[MongoDB Storage] ──► [Products Collection]
                  ──► [Orders Collection]
                  ──► [Users Collection]`,
      keyFeatures: [
        'Produce Category Filtering: Quick filtering across fresh vegetables, fruits, dairy, and organic pantry items.',
        'Persistent Local Cart State: Client-side shopping cart managed with React Context and localStorage for instant UI updates.',
        'User Authentication & Profile: Secure signup/login using bcrypt password hashing and JWT authorization tokens.',
        'Admin Inventory Dashboard: Interface for adding seasonal crops, updating stock levels, and managing order dispatch.',
      ],
      implementationDetails: [
        'Designed modular React components with responsive Tailwind CSS styling for seamless viewing across mobile and desktop.',
        'Constructed Express REST endpoints for product querying (`/api/products`), user auth (`/api/auth`), and order placement (`/api/orders`).',
        'Implemented atomic MongoDB updates (`$inc`) during checkout to lock inventory quantities accurately.',
      ],
      challenges: [
        'Preventing overselling of limited seasonal produce during high-volume customer checkouts.',
      ],
      debugging: [
        'Added database transaction validation before order confirmation to verify stock availability atomically.',
      ],
      results: 'Delivered a fast, responsive web application with zero UI lag, reliable cart handling, and structured database queries.',
      techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: 'https://github.com/SumanChettri',
      watchDemoUrl: null,
      images: [
        { url: '/images/img/organic-store-1.jpg', caption: 'Organic Store Web Storefront' },
        { url: '/images/img/organic-store-2.jpg', caption: 'Produce Catalog & Shopping Cart UI' },
      ],
    },
    {
      id: 'feedback-system',
      title: 'College Feedback Management System',
      tagline: 'A role-based evaluation system for anonymous student teacher feedback, departmental analytics, and admin reporting.',
      metric: '100% Anonymity Guaranteed',
      status: 'Academic Full-Stack Project',
      problem: 'Traditional paper feedback forms are tedious to process, prone to bias, and lack analytical reporting for academic heads.',
      approach: 'Engineered a web application with role-based access control (Student, Teacher, Admin) that decouples student identities from submission records to guarantee complete anonymity.',
      architectureNodes: [
        { id: 'role-student', label: 'Student Portal', type: 'frontend', protocol: 'HTML5 / JS' },
        { id: 'role-teacher', label: 'Teacher Report UI', type: 'frontend', protocol: 'Dashboard' },
        { id: 'role-admin', label: 'Admin Management', type: 'frontend', protocol: 'RBAC Control' },
        { id: 'backend', label: 'Express API Server', type: 'backend', protocol: 'REST Routes' },
        { id: 'db', label: 'MySQL / Relational DB', type: 'database', protocol: 'SQL Queries' },
      ],
      architectureText: `[Student Portal] ──► [Anonymous Tokenization] ──┐
                                                 │
[Teacher Portal] ◄── [Aggregated Analytics] ◄───┼──► [Express Backend]
                                                 │           │
  [Admin Panel]  ◄── [Department Reports]  ◄─────┘           ▼
                                                     [Relational Database]`,
      keyFeatures: [
        'Role-Based Authorization (RBAC): Separate portals and permissions for Students, Teachers, and Department Administrators.',
        'Anonymous Evaluation Engine: Decouples student user tokens from stored feedback metrics so evaluation forms remain 100% anonymous.',
        'Automated Score Analytics: Computes faculty performance averages per course module and generates structured department summaries.',
        'Admin Course Configuration: Allows administrators to map faculty members to subjects and manage evaluation schedules.',
      ],
      implementationDetails: [
        'Built clean responsive form interfaces with validation rules preventing duplicate submissions per semester.',
        'Designed relational SQL schemas with foreign key constraints linking departments, courses, faculty, and evaluation forms.',
        'Implemented password hashing and session authorization middleware.',
      ],
      challenges: [
        'Ensuring that student progress tracking (knowing who has completed feedback) does not compromise the anonymity of individual ratings.',
      ],
      debugging: [
        'Created a separate `CompletionStatus` table tracking student submission flags independently from the `EvaluationRatings` table.',
      ],
      results: 'Successfully built and tested a role-based academic feedback tool delivering instant evaluation analytics for college departments.',
      techStack: ['Node.js', 'Express', 'JavaScript', 'HTML5/CSS3', 'MySQL / Relational DB', 'RBAC Auth'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/feedback-system-1.jpg', caption: 'Student Feedback Submission Interface' },
        { url: '/images/img/feedback-system-2.jpg', caption: 'Admin Faculty Analytics Dashboard' },
      ],
    },
  ],

  'backend-apis': [
    {
      id: 'smart-parking-api',
      title: 'Smart Parking REST API Service',
      tagline: 'Asynchronous Express API router with MongoDB models, IoT endpoints, JWT authorization, and hardware keypad OTP validation.',
      metric: 'Sub-100ms API Latency',
      status: 'Backend API Service',
      problem: 'Connecting physical ESP32 microcontrollers, web dashboards, and mobile apps requires a low-latency API gateway capable of verifying OTP pins and updating slot state simultaneously.',
      approach: 'Built a clean RESTful API service using Node.js and Express.js with dedicated routes for driver reservations, IoT hardware telemetry, and OTP validation.',
      architectureNodes: [
        { id: 'web-mobile', label: 'Web & Mobile Clients', type: 'frontend', protocol: 'JSON REST' },
        { id: 'router', label: 'Express Router Gateway', type: 'backend', protocol: 'Middleware' },
        { id: 'auth', label: 'JWT Security Token', type: 'security', protocol: 'Bearer Auth' },
        { id: 'iot-ep', label: 'ESP32 Hardware Routes', type: 'embedded', protocol: 'HTTP POST / GET' },
        { id: 'db', label: 'MongoDB Mongoose Models', type: 'database', protocol: 'BSON Storage' },
      ],
      architectureText: `[Web / Mobile Clients] ──► [/api/bookings/create] ──┐
                                                      ├──► [Express API Gateway]
[ESP32 Hardware MCU]   ──► [/api/gate/verify-otp]  ──┤          │
[IR Sensor Telemetry]  ──► [/api/slots/status]     ──┘          ▼
                                                        [MongoDB Database]`,
      keyFeatures: [
        '`GET /api/slots/status`: Returns real-time occupancy array of 6 parking slots for web/mobile UI polling.',
        '`POST /api/bookings/create`: Reserves an open parking slot, issues a 4-digit single-use OTP pin, and sets a 15-minute expiration timer.',
        '`POST /api/gate/verify-otp`: Called directly by ESP32 physical keypad. Validates PIN against active bookings, marks slot occupied, and returns gate-open signal.',
        '`POST /api/telemetry/update`: Ingests 6-channel optical IR sensor state array sent by ESP32 microcontrollers.',
      ],
      implementationDetails: [
        'Structured modular Express route handlers (`/routes/slots.js`, `/routes/bookings.js`, `/routes/gate.js`).',
        'Implemented JWT bearer authentication for user endpoints and API key authorization for hardware IoT endpoints.',
        'Configured Mongoose schemas with indexed fields on slot IDs and booking timestamps for fast query execution.',
      ],
      challenges: [
        'Preventing race conditions when two drivers attempt to reserve the exact same open parking space simultaneously.',
      ],
      debugging: [
        'Utilized MongoDB atomic findOneAndUpdate queries to lock slot status atomically during reservation creation.',
      ],
      results: 'Engineered a stable REST API service handling simultaneous web requests, mobile bookings, and microcontroller HTTP telemetry.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose ORM', 'JWT Auth', 'REST API Architecture', 'ESP32 HTTP Integration'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/smart-parking-api-1.jpg', caption: 'Express.js API Routes & Controller Logic' },
      ],
    },
    {
      id: 'organic-store-backend',
      title: 'Organic Store E-Commerce REST API',
      tagline: 'Backend service for product catalog querying, shopping cart state management, JWT auth, and order fulfillment.',
      metric: 'Atomic Inventory Locks',
      status: 'Backend Service',
      problem: 'Handling e-commerce catalog updates, cart checkout requests, and user profile authentication with low latency and clean error handling.',
      approach: 'Constructed an Express API architecture featuring MongoDB Mongoose models, custom middleware, password hashing, and structured JSON error responses.',
      architectureNodes: [
        { id: 'client', label: 'React Client App', type: 'frontend', protocol: 'JSON HTTP' },
        { id: 'express', label: 'Express App Engine', type: 'backend', protocol: 'REST Routes' },
        { id: 'mongoose', label: 'Mongoose ORM', type: 'database', protocol: 'MongoDB BSON' },
      ],
      architectureText: `[React UI] ──► [/api/products] ──► [Express Middleware] ──► [MongoDB Catalog]
           ──► [/api/auth]     ──► [JWT Auth Validator] ──► [MongoDB Users]
           ──► [/api/orders]   ──► [Checkout Controller]──► [MongoDB Orders]`,
      keyFeatures: [
        'Product Search & Categorization Endpoints: Fast querying with text search indexes across crop categories.',
        'JWT Token Verification: Middleware enforcing authorization on protected user profile and checkout routes.',
        'Order Dispatch Queue: State transitions tracking orders from Pending ➔ Confirmed ➔ Dispatched.',
      ],
      implementationDetails: [
        'Used bcrypt for password salt hashing before storing credential records in MongoDB.',
        'Created custom error handling middleware to sanitize database error messages into structured JSON responses.',
      ],
      challenges: ['Validating checkout totals server-side to prevent client-side price tampering.'],
      debugging: ['Re-queried MongoDB item prices inside the checkout controller to recalculate grand totals before saving order records.'],
      results: 'Built a modular backend service providing reliable API contracts for web e-commerce clients.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'bcrypt', 'Mongoose ORM'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/organic-backend-1.jpg', caption: 'Organic Store API Architecture' },
      ],
    },
  ],

  'iot-connected': [
    {
      id: 'smart-parking-iot',
      title: 'Smart Parking Hardware IoT System',
      tagline: 'ESP32/ESP8266 microcontroller hardware controlling 6 IR sensors, servo barrier gate, 4x4 keypad, and I2C LCD over Wi-Fi.',
      metric: '6-Channel IR Telemetry',
      status: 'Hardware Prototype',
      problem: 'Physical parking lots require automatic vehicle detection and entry authorization without relying on human security attendants.',
      approach: 'Built a physical microcontroller hardware assembly using an ESP32, 6 infrared occupancy sensors, a servo motor gate barrier, a 4x4 matrix keypad, and a 16x2 I2C LCD screen connected to a Wi-Fi network.',
      architectureNodes: [
        { id: 'ir', label: '6 Optical IR Sensors', type: 'embedded', protocol: 'GPIO Signals' },
        { id: 'esp32', label: 'ESP32 Main MCU', type: 'hardware', protocol: 'C++ Firmware / FreeRTOS' },
        { id: 'keypad', label: '4x4 Matrix Keypad', type: 'embedded', protocol: 'Matrix Scan' },
        { id: 'lcd', label: '16x2 I2C LCD', type: 'embedded', protocol: 'I2C Bus' },
        { id: 'servo', label: 'Servo Gate Motor', type: 'hardware', protocol: 'PWM Control' },
        { id: 'wifi', label: 'Wi-Fi HTTP Client', type: 'backend', protocol: 'REST Telemetry' },
      ],
      architectureText: `[6 IR Sensors] ──(GPIO)──┐
                          ▼
[4x4 Keypad]  ──(Matrix)─► [ESP32 Microcontroller] ──(Wi-Fi REST)─► [Node.js Backend]
                          │ (I2C)         │ (PWM)
                          ▼               ▼
                   [16x2 LCD]      [Servo Gate]`,
      keyFeatures: [
        '6-Channel IR Occupancy Sensing: Reads vehicle presence in 6 parking slots and posts state updates to cloud API.',
        'Physical Keypad PIN Entry: Matrix keypad accepts 4-digit driver OTP codes with instant local debouncing.',
        'Automated Servo Gate Control: Drives SG90/MG996R servo motor from 0° (Closed) to 90° (Open) upon OTP validation.',
        'I2C Display Interface: Displays driver prompt instructions ("ENTER OTP:", "SLOT 3 RESERVED", "ACCESS GRANTED").',
      ],
      implementationDetails: [
        'Programmed ESP32 firmware in C++ using Arduino IDE & FreeRTOS task scheduling.',
        'Configured ESP32 Wi-Fi station mode (`WiFi.h`) with automatic reconnection routines.',
        'Constructed HTTP POST requests sending JSON sensor payloads to `/api/telemetry/update`.',
      ],
      challenges: [
        'Sunlight infrared interference caused false positive slot occupancy readings.',
        'ESP32 pin voltage drops during servo motor movement caused microcontroller brownout resets.',
      ],
      debugging: [
        'Added a sliding-window digital filter in C++ to smooth infrared analog inputs.',
        'Decoupled servo power supply using a dedicated 5V 3A buck converter with a 1000uF smoothing capacitor.',
      ],
      results: 'Constructed a physical hardware prototype demonstrating real-time sensor reporting, OTP keypad validation, and servo gate control.',
      techStack: ['ESP32', 'ESP8266', 'C++', 'IR Sensors', 'Matrix Keypad', 'Servo Motor', 'I2C LCD', 'Wi-Fi HTTP Client'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/smart-parking-iot-1.jpg', caption: 'ESP32 Microcontroller & Breadboard Wiring' },
        { url: '/images/img/smart-parking-iot-2.jpg', caption: '4x4 Keypad & 16x2 I2C LCD Display' },
        { url: '/images/img/smart-parking-iot-3.jpg', caption: 'Physical Servo Gate Barrier Assembly' },
      ],
    },
    {
      id: 'smart-energy-meter',
      title: 'Smart Energy Meter & Load Controller',
      tagline: 'An ESP32-based electrical energy monitor using PZEM-004T v3.0, DS3231 RTC, A7607C GSM, I2C LCD, and relays for automated load scheduling.',
      metric: 'PZEM-004T AC Power Sensing',
      status: 'Hardware Prototype',
      problem: 'Monitoring real-time AC electrical consumption and scheduling heavy loads remotely without expensive industrial metering equipment.',
      approach: 'Engineered an embedded hardware system combining an ESP32 microcontroller with a PZEM-004T v3.0 power sensor, DS3231 real-time clock, A7607C cellular GSM module, 16x2 LCD, and dual high-current relay switches.',
      architectureNodes: [
        { id: 'pzem', label: 'PZEM-004T AC Sensor', type: 'embedded', protocol: 'UART Modbus' },
        { id: 'rtc', label: 'DS3231 Real-Time Clock', type: 'embedded', protocol: 'I2C Protocol' },
        { id: 'gsm', label: 'A7607C GSM Module', type: 'hardware', protocol: 'Cellular AT Commands' },
        { id: 'esp32', label: 'ESP32 Central MCU', type: 'hardware', protocol: 'C++ Firmware' },
        { id: 'lcd', label: '16x2 I2C LCD', type: 'embedded', protocol: 'I2C Bus' },
        { id: 'relay', label: 'AC Load Relay Switch', type: 'hardware', protocol: 'GPIO Relays' },
      ],
      architectureText: `[PZEM-004T Sensor] ──(UART)──┐
[DS3231 RTC Clock] ──(I2C)───┼──► [ESP32 Microcontroller] ──(GSM AT)──► [A7607C Module] ──► [Cellular SMS Alerts]
                             │           │ (GPIO)
                             ▼           ▼
                      [16x2 LCD]  [Relay AC Load Switches]`,
      keyFeatures: [
        'AC Power Measurement: Measures Voltage (V), Current (A), Active Power (W), Frequency (Hz), and Energy (kWh) via PZEM-004T v3.0 sensor.',
        'Real-Time Clock Scheduling: DS3231 RTC module triggers automatic relay load shedding during peak energy tariff hours.',
        'Dual Wireless Communication: Embedded Wi-Fi web server for local monitoring + A7607C GSM cellular module for remote SMS alerts.',
        'Relay Load Control: Drives high-voltage relay channels to switch appliances manually or automatically based on threshold rules.',
      ],
      implementationDetails: [
        'Programmed UART Modbus communications with the PZEM-004T power sensor in C++.',
        'Handled AT command parsing for the A7607C GSM module to send SMS notifications when energy usage exceeds safety thresholds.',
        'Constructed an embedded HTML/JS web server hosted directly inside ESP32 flash memory for local browser access.',
      ],
      challenges: [
        'High voltage AC inductive switching noise caused serial transmission errors on the UART bus.',
      ],
      debugging: [
        'Installed optocoupler isolators and shielded twisted-pair wiring between the PZEM sensor and ESP32 UART pins.',
      ],
      results: 'Successfully built a working AC energy monitoring prototype capable of live power metering, GSM alert transmission, and relay load scheduling.',
      techStack: ['ESP32', 'C++', 'PZEM-004T v3.0', 'DS3231 RTC', 'A7607C GSM', '16x2 I2C LCD', 'Relays', 'UART Modbus', 'Wi-Fi Web Server'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/energy-meter-1.jpg', caption: 'Smart Energy Meter Hardware Assembly' },
        { url: '/images/img/energy-meter-2.jpg', caption: 'PZEM-004T Power Sensor & Relay Module' },
      ],
    },
    {
      id: 'argus-rover',
      title: 'ARGUS — Autonomous Reconnaissance & Ground Utility System',
      tagline: 'An unmanned ground vehicle for hazardous environmental surveillance, obstacle detection, and wireless ESP32-CAM video streaming.',
      metric: 'Wireless Video Telemetry',
      status: 'Hardware Prototype',
      problem: 'Inspecting hazardous or fire-damaged disaster areas poses extreme safety risks for human rescue personnel.',
      approach: 'Built an unmanned ground reconnaissance vehicle equipped with dual ESP32 microcontrollers, an ESP32-CAM camera module, temperature/gas sensors, ultrasonic obstacle detectors, and an HTML5 wireless monitoring terminal.',
      architectureNodes: [
        { id: 'cam', label: 'ESP32-CAM Video Processor', type: 'hardware', protocol: 'MJPEG Stream' },
        { id: 'sensors', label: 'MQ-2 Gas + DHT Temp Sensors', type: 'embedded', protocol: 'ADC / GPIO' },
        { id: 'mcu', label: 'ESP32 Main Flight Controller', type: 'firmware', protocol: 'FreeRTOS Tasks' },
        { id: 'wireless', label: 'Wi-Fi WebSockets Link', type: 'backend', protocol: 'WebSockets / HTTP' },
        { id: 'dashboard', label: 'Web Command Terminal', type: 'frontend', protocol: 'HTML5 / Canvas' },
      ],
      architectureText: `[Sensors: Gas / Temp / Distance]   [ESP32-CAM Camera]
                   │                         │
                   └────────────┬────────────┘
                                ▼
                   [ESP32 Dual-Core Controller]
                                │ (Wi-Fi WebSockets)
                                ▼
                   [Web Command & Monitoring Terminal]`,
      keyFeatures: [
        'Real-Time MJPEG Video Stream: ESP32-CAM streams low-latency video to a browser command dashboard over Wi-Fi.',
        'Environmental Hazard Detection: MQ-2 sensor detects LPG/smoke presence while DHT sensors monitor ambient temperature.',
        'Ultrasonic Obstacle Avoidance: HC-SR04 ultrasonic sensors detect physical barriers and trigger automatic motor stop routines.',
        'Web Command Terminal: Responsive browser interface for remote joystick driving and sensor data visualization.',
      ],
      implementationDetails: [
        'Dedicated Core 0 of the ESP32 to MJPEG video frame capturing while Core 1 handled motor control and sensor loops.',
        'Programmed HTML5 web terminal hosted on ESP32 web server with WebSocket messaging for instant joystick response.',
      ],
      challenges: [
        'Initial DC motor startup current spikes caused ESP32 brownout resets during driving.',
      ],
      debugging: [
        'Separated motor power and microcontroller logic paths using 18650 Li-ion cells and LM2596 buck converters.',
      ],
      results: 'Constructed an operational reconnaissance rover prototype streaming live video and telemetry across physical field tests.',
      techStack: ['ESP32', 'ESP32-CAM', 'C++', 'FreeRTOS', 'MQ-2 Gas Sensor', 'HC-SR04 Ultrasonic', 'Wi-Fi MJPEG', 'HTML5 WebSockets'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/argus-rover-1.jpg', caption: 'ARGUS Reconnaissance Rover Hardware Chassis' },
        { url: '/images/img/argus-rover-2.jpg', caption: 'ESP32-CAM Video Stream & Dashboard UI' },
      ],
    },
  ],

  'embedded-robotics': [
    {
      id: 'line-follower-robot',
      title: 'High-Speed Autonomous Line Follower Robot',
      tagline: '🏆 1st Place Winner at NIT Ravangla Fest Robotics Competition — Closed-loop PID control, 8-channel IR sensor array, and differential motor driving.',
      metric: '🏆 1st Place Competition Winner',
      status: 'Competition Winner',
      problem: 'Navigating tight 90-degree track curves, intersections, and crossovers at maximum speed without losing line alignment or suffering motor oscillation.',
      approach: 'Engineered an autonomous high-speed line-following robot that achieved 1st place in the NIT Ravangla Fest robotics competition. Built with an 8-channel infrared sensor array, closed-loop C++ PID feedback control, LM2596 buck converters, DRV8833 motor drivers, and 300 RPM gear motors.',
      architectureNodes: [
        { id: 'ir', label: '8-Channel IR Sensor Array', type: 'embedded', protocol: 'Analog Reflectance' },
        { id: 'calib', label: 'Boot Calibration Module', type: 'firmware', protocol: 'Threshold Mapping' },
        { id: 'pid', label: 'Closed-Loop PID Engine', type: 'firmware', protocol: 'Kp, Ki, Kd Loop' },
        { id: 'pwm', label: 'PWM Speed Generator', type: 'hardware', protocol: 'Timer Interrupts' },
        { id: 'driver', label: 'DRV8833 Motor Driver', type: 'hardware', protocol: 'Dual H-Bridge' },
        { id: 'motors', label: 'BO 300 RPM DC Motors', type: 'robotics', protocol: 'Differential Drive' },
      ],
      architectureText: `[8-Channel IR Array] ──► [Analog Signal Calibration]
                               │
                               ▼
                   [Weighted Error Calc: Sum(i*Si)/Sum(Si)]
                               │
                               ▼
                   [PID Loop (Kp=18, Ki=0.2, Kd=42)]
                               │
                               ▼
                    [PWM Motor Compensation]
                               │
                               ▼
               [DRV8833 Driver & BO 300 RPM Motors]`,
      keyFeatures: [
        '🏆 Competition-Winning Performance: Secured 1st Place at NIT Ravangla Fest Autonomous Robotics Contest.',
        '8-Channel IR Sensor Array: High-density sensor array mapping track offset with weighted error calculation.',
        'Closed-Loop PID Feedback Loop: Custom C++ PID algorithm running at 500 Hz for smooth micro-steering adjustments.',
        'Boot-Time Track Calibration: Automatic boot sequence mapping white background vs black line surface reflectance thresholds.',
        'Sharp Turn & Line Recovery: Logic handling 90-degree right angles, grid crossovers, and emergency line loss recovery.',
      ],
      implementationDetails: [
        'Hardware Setup: Arduino UNO (final controller), DRV8833 dual motor driver, 2S Li-ion battery pack, LM2596 voltage regulator, BO 300 RPM motors, 6.5cm rubber wheels.',
        'Engineering Progression: Initially tested with an ESP32 microcontroller, but migrated to Arduino UNO due to ESP32 pin voltage thermal sensitivity under high motor noise.',
        'Math & Algorithm: Weighted position error equation $E = \\frac{\\sum (i \\times S_i)}{\\sum S_i}$. PID formula $\\text{Output} = K_p \\cdot E + K_i \\int E \\, dt + K_d \\frac{dE}{dt}$.',
        'Tuned Parameters: $K_p = 18.5$, $K_i = 0.2$, $K_d = 42.0$ for high-speed dampening.',
      ],
      challenges: [
        'During early prototyping, motor current back-EMF spikes overheated and damaged ESP32 GPIO pins.',
        'DC motor manufacturing variations caused a 5% speed imbalance between left and right drive wheels.',
      ],
      debugging: [
        'Migrated microcontroller from ESP32 to Arduino UNO with isolated power rails and LM2596 buck converter regulation.',
        'Programmed software motor trim compensation factors in firmware to equalize dual-wheel RPM output.',
      ],
      results: 'Won 1st Place in the NIT Ravangla Fest Autonomous Line Follower Competition with 100% track accuracy and zero course departures.',
      techStack: ['Arduino UNO', 'ESP32 (Prototyping)', 'C++', '8-Channel IR Array', 'PID Control', 'DRV8833 Driver', 'LM2596 Buck Converter', 'BO 300 RPM Motors'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/line-follower-1.jpg', caption: '1st Place Winning Line Follower Robot Chassis' },
        { url: '/images/img/line-follower-2.jpg', caption: '8-Channel IR Sensor Array & DRV8833 Wiring' },
        { url: '/images/img/line-follower-3.jpg', caption: 'NIT Ravangla Competition Track Run' },
      ],
    },
    {
      id: 'basketball-scoreboard',
      title: 'Smart Basketball P10 LED Scoreboard',
      tagline: 'An outdoor physical LED matrix scoreboard controlled wirelessly via an embedded web server hosted on an ESP32.',
      metric: 'Zero-Flicker SPI Refresh',
      status: 'Hardware Prototype',
      problem: 'Commercial outdoor sports scoreboards are expensive and lack simple wireless web control interfaces for referees.',
      approach: 'Designed a smart physical sports scoreboard combining high-brightness P10 outdoor LED matrix panels, an Arduino UNO display driver, and an ESP32 microcontroller hosting a wireless web server.',
      architectureNodes: [
        { id: 'mobile-web', label: 'Referee Smartphone Web UI', type: 'mobile', protocol: 'Wi-Fi / HTTP' },
        { id: 'esp32', label: 'ESP32 Web Server', type: 'hardware', protocol: 'UART Serial' },
        { id: 'uno', label: 'Arduino UNO Driver', type: 'embedded', protocol: 'SPI Bus' },
        { id: 'p10', label: 'P10 Outdoor LED Matrix', type: 'hardware', protocol: 'HUB12 SPI' },
      ],
      architectureText: `[Smartphone Referee Web UI]
            │ (Wi-Fi Local Hotspot)
            ▼
 [ESP32 Embedded Web Server]
            │ (UART Serial Commands)
            ▼
   [Arduino UNO Driver]
            │ (Direct SPI Hardware Bus)
            ▼
[P10 Outdoor LED Matrix Display]`,
      keyFeatures: [
        'Wireless Web Referee Controller: Hosted web app allowing referees to update scores, period clocks, shot timers, and team names from any smartphone.',
        'High-Brightness P10 LED Matrix: 32x16 LED outdoor matrix panel clearly visible under direct sunlight.',
        'Zero-Flicker Display Refresh: Dedicated SPI hardware interrupts on Arduino UNO refreshing LEDs at 60 Hz without flicker.',
        'Shot Clock & Countdown Timer: 24-second shot clock reset, period time controls, and team score increments.',
      ],
      implementationDetails: [
        'ESP32 hosts a local Wi-Fi Access Point (`Scoreboard-WiFi`) with an HTML/JS control panel.',
        'ESP32 sends compact serial command packets (e.g. `HOME:+1`, `CLOCK:START`) to Arduino UNO via UART.',
        'Arduino UNO parses commands and drives the P10 HUB12 matrix using direct SPI timer interrupts.',
      ],
      challenges: [
        'Directly running both the Wi-Fi web server and P10 matrix SPI refresh on a single Arduino UNO caused display flickering.',
      ],
      debugging: [
        'Offloaded Wi-Fi web server to ESP32 while keeping Arduino UNO dedicated strictly to high-frequency P10 SPI display driving.',
      ],
      results: 'Constructed an operational outdoor LED scoreboard driven wirelessly from smartphone browsers.',
      techStack: ['ESP32', 'Arduino UNO', 'C++', 'P10 LED Matrix', 'SPI Bus', 'Embedded Web Server', 'UART Serial'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/scoreboard-1.jpg', caption: 'P10 LED Matrix Display & Score Control UI' },
        { url: '/images/img/scoreboard-2.jpg', caption: 'ESP32 & Arduino UNO Serial Architecture' },
      ],
    },
  ],

  'mobile-apps': [
    {
      id: 'smart-parking-mobile',
      title: 'Smart Parking Mobile Application',
      tagline: 'Cross-platform React Native & Expo application for driver parking reservations, real-time bay tracking, and OTP verification.',
      metric: 'React Native & Expo',
      status: 'Mobile Application',
      problem: 'Drivers need an intuitive smartphone app to locate open parking slots on the go and generate gate access credentials.',
      approach: 'Developed a mobile application using React Native and Expo that connects to the Smart Parking Node.js backend API to display live slot occupancy and issue gate access OTPs.',
      architectureNodes: [
        { id: 'mobile', label: 'React Native Mobile App', type: 'mobile', protocol: 'Expo Framework' },
        { id: 'api', label: 'Express REST API', type: 'backend', protocol: 'HTTPS JSON' },
        { id: 'db', label: 'MongoDB Storage', type: 'database', protocol: 'Mongoose BSON' },
        { id: 'hardware', label: 'Physical Servo Gate', type: 'hardware', protocol: 'Keypad OTP' },
      ],
      architectureText: `[React Native App] ──(HTTPS)──► [Express REST API] ──► [MongoDB Database]
         │                                               │
         └── Driver Receives 4-Digit OTP ────────────────┘
                         │
                         ▼
        [Driver Enters OTP on Physical Keypad] ──► [Servo Gate Opens]`,
      keyFeatures: [
        'Live Slot Occupancy Map: Visual map showing green (Open) vs red (Occupied) parking slots updated in real time.',
        '1-Tap Slot Reservation: Reserves an open slot and generates a 4-digit single-use OTP valid for 15 minutes.',
        'OTP Gate Access Card: Displays active reservation details, slot number, and clear OTP PIN to enter at physical gate.',
        'Cross-Platform Build: Compiled for both Android and iOS mobile operating systems.',
      ],
      implementationDetails: [
        'Built with React Native, Expo CLI, and React Navigation.',
        'Integrated Async Storage for local token caching and session persistence.',
        'Constructed HTTP REST client functions communicating with Node.js backend endpoints.',
      ],
      challenges: [
        'Handling screen state refreshes when slot occupancy changes while the user is viewing the slot map.',
      ],
      debugging: [
        'Implemented auto-polling interval hooks updating slot state every 3 seconds while the screen is active.',
      ],
      results: 'Delivered a responsive mobile app prototype connecting drivers directly to physical parking hardware.',
      techStack: ['React Native', 'Expo', 'JavaScript', 'REST APIs', 'React Navigation', 'AsyncStorage'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/smart-parking-mobile-1.jpg', caption: 'React Native Parking Reservation UI' },
        { url: '/images/img/smart-parking-mobile-2.jpg', caption: 'Driver OTP Verification Screen' },
      ],
    },
  ],

  'tools-cli': [
    {
      id: 'mpi-parallel-computing',
      title: 'Parallel & Distributed Computing (MPI)',
      tagline: 'C/C++ MPI implementations of parallel matrix multiplication, 0/1 knapsack, parallel sorting, and speedup benchmark analysis.',
      metric: 'Parallel Speedup Benchmarks',
      status: 'Academic & Engineering Work',
      problem: 'Large mathematical computations and sorting tasks take excessive execution time when executed sequentially on a single CPU core.',
      approach: 'Implemented parallel computing algorithms using C/C++ and MPI (Message Passing Interface) to decompose workloads across multiple CPU processor cores and measure speedup efficiency.',
      architectureNodes: [
        { id: 'master', label: 'MPI Master Process (Rank 0)', type: 'firmware', protocol: 'Work Decomposition' },
        { id: 'comm', label: 'MPI_Bcast / MPI_Scatter', type: 'backend', protocol: 'IPC / Network' },
        { id: 'workers', label: 'MPI Worker Cores (Rank 1..N)', type: 'hardware', protocol: 'Parallel Execution' },
        { id: 'reduce', label: 'MPI_Gather / MPI_Reduce', type: 'firmware', protocol: 'Result Aggregation' },
      ],
      architectureText: `                [MPI Master Process (Rank 0)]
                             │
            ┌────────────────┼────────────────┐
            │ (MPI_Scatter)  │ (MPI_Scatter)  │ (MPI_Scatter)
            ▼                ▼                ▼
     [Worker Rank 1]  [Worker Rank 2]  [Worker Rank 3]
            │                │                │
            └────────────────┼────────────────┘
                             │ (MPI_Gather)
                             ▼
                [Final Result Matrix / Array]`,
      keyFeatures: [
        'Parallel Matrix Multiplication: Block matrix decomposition distributing row/column dot products across MPI worker ranks.',
        'Parallel 0/1 Knapsack: Dynamic programming table parallelization evaluating decision boundaries across ranks.',
        'Parallel Quick Sort & Heap Sort: Recursive domain decomposition sorting distributed array chunks simultaneously.',
        'Speedup & Efficiency Analysis: Calculating Speedup $S = T_1 / T_p$ and Efficiency $E = S / p$ across 1 to 8 worker cores.',
      ],
      implementationDetails: [
        'Written in C/C++ using MPICH / OpenMPI compiler tools.',
        'Used `MPI_Init`, `MPI_Comm_rank`, `MPI_Comm_size`, `MPI_Scatter`, `MPI_Gather`, and `MPI_Finalize`.',
        'Measured execution times using high-resolution timers (`MPI_Wtime`).',
      ],
      challenges: [
        'Communication overhead from excessive `MPI_Bcast` messages reducing parallel efficiency on smaller datasets.',
      ],
      debugging: [
        'Optimized data chunk sizes to ensure computation time dominated communication latency.',
      ],
      results: 'Demonstrated speedup gains (e.g. ~3.3x speedup on 4 worker cores) for heavy parallel algorithms.',
      techStack: ['C', 'C++', 'MPI (Message Passing Interface)', 'Parallel Computing', 'Amdahl\'s Law', 'Benchmarking'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/mpi-1.jpg', caption: 'MPI Parallel Execution Terminal Output' },
        { url: '/images/img/mpi-2.jpg', caption: 'Speedup & Efficiency Analysis Chart' },
      ],
    },
    {
      id: 'compiler-lex-analysis',
      title: 'Compiler Design & Lexical Analysis',
      tagline: 'C and Lex/Flex programs for lexical tokenization, infix-to-postfix translation, FIRST/FOLLOW calculation, and syntax parsing.',
      metric: 'AST Generation & Parsing',
      status: 'Academic & Engineering Work',
      problem: 'Converting raw human-written programming language text into token streams, abstract syntax trees (AST), and machine execution steps.',
      approach: 'Developed compiler tools using C and Lex/Flex specifications to implement lexical tokenizers, expression converters, FIRST/FOLLOW sets, and syntax parsers.',
      architectureNodes: [
        { id: 'source', label: 'Source Code Stream', type: 'frontend', protocol: 'Text Stream' },
        { id: 'lex', label: 'Lexical Tokenizer (Flex)', type: 'firmware', protocol: 'Regex Patterns' },
        { id: 'tokens', label: 'Token Stream', type: 'backend', protocol: 'Symbol Table' },
        { id: 'parser', label: 'Syntax & Expression Parser', type: 'hardware', protocol: 'AST Construction' },
      ],
      architectureText: `[Source Text] ──► [Lexical Analyzer (Lex/Flex)] ──► [Token Stream (Keywords, Identifiers)]
                                                         │
                                                         ▼
[Abstract Syntax Tree] ◄── [Operator Precedence Parser] ◄─┘`,
      keyFeatures: [
        'Lexical Analyzer (Lex/Flex): Scans input strings and extracts tokens (Keywords, Identifiers, Numbers, Operators) into a symbol table.',
        'Infix to Postfix Converter: Stack-based expression translator processing operator precedence rules.',
        'FIRST & FOLLOW Set Generator: Computes grammar symbol sets for context-free grammars.',
        'Recursive Descent & LR Parser: Syntax validation checking expression correctness.',
      ],
      implementationDetails: [
        'Written in C and Lex rules files (`.l`).',
        'Implemented stack data structures for token parsing and AST node creation.',
      ],
      challenges: [
        'Handling left-recursion in context-free grammar rules causing infinite loops during recursive descent parsing.',
      ],
      debugging: [
        'Eliminated left-recursion algebraically before generating parsing routines.',
      ],
      results: 'Constructed working lexical tokenizers and syntax parsing utility routines.',
      techStack: ['C', 'Lex / Flex', 'Compiler Design', 'Data Structures', 'AST Generation', 'Parsing Theory'],
      githubUrl: 'https://github.com/SumanChettri',
      liveUrl: null,
      watchDemoUrl: null,
      images: [
        { url: '/images/img/compiler-1.jpg', caption: 'Lex Tokenizer & Syntax Parser Terminal Output' },
      ],
    },
  ],
};
