// src/data/projects.js

export const FLAGSHIP_PROJECTS = [
  {
    id: 'smart-parking',
    title: 'Smart Parking & Gate Access System',
    tagline: 'An integrated hardware and software system connecting physical barrier gates, IR occupancy sensors, Node.js REST API, and a React Native mobile app.',
    category: 'Web • Mobile • IoT',
    role: 'Hardware & Software Developer',
    metric: '< 200ms Sensor-to-Cloud Sync',
    description: 'Designed and built an end-to-end smart parking prototype to solve physical parking allocation and gate access delays. Infrared sensor arrays monitor individual parking slots and stream occupancy state to an Express/MongoDB backend via ESP32 microcontrollers. Drivers can view available slots, reserve a space on the web or mobile app, receive an OTP verification code, and enter it into an entry keypad to automatically raise the servo barrier gate.',
    architectureNodes: [
      { id: 'web', label: 'React Web Dashboard', type: 'frontend', protocol: 'HTTPS / REST' },
      { id: 'mobile', label: 'React Native App', type: 'mobile', protocol: 'HTTPS / JSON' },
      { id: 'api', label: 'Node.js & Express API', type: 'backend', protocol: 'WebSocket / HTTP' },
      { id: 'db', label: 'MongoDB Database', type: 'database', protocol: 'Mongoose' },
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
    problem: 'Drivers waste time searching for open parking spaces, while traditional facilities rely on manual tickets or uncoordinated entry gates that slow down traffic.',
    solution: 'Engineered a physical-to-cloud feedback loop where optical sensors update slot availability instantly in the database, allowing driver reservations and automated gate opening via keypad OTP validation.',
    tradeoffs: [
      'Used lightweight HTTP polling with fallback WebSockets to maintain reliable sensor state updates on low-power microcontrollers.',
      'Selected MongoDB for flexible storage of transient parking reservations, user access logs, and sensor event history.',
      'Implemented local memory buffering on the ESP32 so local keypad PIN validation works even during temporary Wi-Fi disconnects.',
    ],
    challenges: [
      'Ambient sunlight reflections occasionally triggered false positives on optical infrared sensors.',
      'Mechanical contact bounce on the 4x4 matrix keypad resulted in duplicate character inputs during fast typing.',
    ],
    debugging: [
      'Implemented digital sliding-window filtering in the C++ firmware to smooth out infrared intensity fluctuations.',
      'Added hardware RC filtering capacitors and software timer interrupts to clean up keypad signal debouncing.',
    ],
    result: 'Built a working physical prototype demonstrating real-time slot occupancy tracking, mobile OTP reservations, and automated servo gate control.',
    future: 'Integrate license plate recognition using ESP32-CAM to streamline entry without manual keypad input.',
    techStack: ['ESP32', 'React 19', 'React Native', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'IR Sensors', 'Servo Motors', 'Keypad', 'I2C LCD'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
  {
    id: 'organic-store',
    title: 'Organic Store — E-Commerce Platform',
    tagline: 'A full-stack e-commerce web platform for ordering fresh organic produce with real-time shopping cart management and order tracking.',
    category: 'Full-Stack Web',
    role: 'Full-Stack Developer',
    metric: 'Sub-100ms API Response Time',
    description: 'Developed a full-stack web application designed for direct-to-consumer organic produce ordering. The platform features categorized product browsing, dynamic keyword search, persistent shopping cart state, user session management, JWT authentication, and an administrative panel for managing daily produce inventory and order fulfillment.',
    architectureNodes: [
      { id: 'frontend', label: 'React 19 Client UI', type: 'frontend', protocol: 'Single Page App' },
      { id: 'gateway', label: 'Express.js API Router', type: 'backend', protocol: 'REST APIs' },
      { id: 'auth', label: 'JWT Auth Middleware', type: 'security', protocol: 'Bearer Token' },
      { id: 'database', label: 'MongoDB Database', type: 'database', protocol: 'BSON Queries' },
      { id: 'services', label: 'Order Dispatch Service', type: 'backend', protocol: 'Async Processing' },
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
    problem: 'Local farm producers need a fast, clean web storefront to sell seasonal produce directly without relying on bloated, slow third-party platforms.',
    solution: 'Built a lightweight custom React and Node.js application that loads quickly on mobile devices, manages cart items locally for responsive UX, and processes orders cleanly against a MongoDB backend.',
    tradeoffs: [
      'Maintained cart state client-side using React context and localStorage for zero UI lag, verifying inventory and pricing against the database at checkout.',
      'Structured MongoDB schemas to support seasonal availability flags and per-kilogram stock updates without complex migration steps.',
    ],
    challenges: [
      'Handling concurrent customer checkouts for limited seasonal items to avoid overselling stock.',
    ],
    debugging: [
      'Utilized atomic MongoDB document updates ($inc) during order confirmation to lock inventory quantities safely.',
    ],
    result: 'Delivered a clean, responsive e-commerce web application with instant page navigation, reliable cart handling, and structured database queries.',
    future: 'Integrate automated SMS/WhatsApp order status notifications for customers upon dispatch.',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
  {
    id: 'line-follower',
    title: 'High-Speed Autonomous Line Follower',
    tagline: 'A competition-winning autonomous robot utilizing an 8-channel IR sensor array, closed-loop PID control, and differential motor driving.',
    category: 'Autonomous Robotics',
    role: 'Firmware & Robotics Engineer',
    metric: '🏆 1st Place Competition Winner',
    description: 'Designed, built, and programmed an autonomous line-following robot that achieved 1st place in a regional robotics competition. The robot processes inputs from an 8-channel infrared sensor array using a custom PID feedback control loop written in C++, calculating position error continuously to adjust differential motor speeds through sharp curves and intersections.',
    architectureNodes: [
      { id: 'ir', label: '8-Channel IR Sensor Array', type: 'embedded', protocol: 'Analog Readings' },
      { id: 'calib', label: 'Sensor Calibration Module', type: 'firmware', protocol: 'Signal Mapping' },
      { id: 'pid', label: 'PID Controller Engine', type: 'firmware', protocol: 'Closed-Loop Math' },
      { id: 'pwm', label: 'PWM Speed Generator', type: 'hardware', protocol: 'Timers / Interrupts' },
      { id: 'driver', label: 'TB6612 Motor Driver', type: 'hardware', protocol: 'H-Bridge Control' },
      { id: 'motors', label: 'Dual DC Gear Motors', type: 'robotics', protocol: 'Differential Drive' },
    ],
    architectureText: `[8-Channel IR Array] ──► [Analog Signal Sampling]
                               │
                               ▼
                    [Sensor Calibration & Error Calc]
                               │
                               ▼
                    [PID Controller (Kp, Ki, Kd)]
                               │
                               ▼
                    [PWM Motor Speed Compensation]
                               │
                               ▼
                    [Dual Motor Driver & DC Motors]`,
    problem: 'Navigating sharp 90-degree turns and track crossovers at high speeds without losing path alignment or suffering motor oscillation.',
    solution: 'Implemented a closed-loop PID feedback control algorithm in C++ that calculates track offset error hundreds of times per second to deliver smooth motor corrections.',
    tradeoffs: [
      'Tuned the Derivative (Kd) parameter aggressively to dampen oscillations during high-speed straightaways.',
      'Selected high-frequency PWM driving to prevent low-speed motor chatter during micro-steering adjustments.',
    ],
    challenges: [
      'DC motor manufacturing tolerances resulted in a 5% speed imbalance between the left and right drive wheels.',
      'Varying ambient lighting conditions shifted baseline sensor reflectance thresholds between competition rounds.',
    ],
    debugging: [
      'Programmed an automatic boot-time calibration sequence to map white and black surface reflection baselines before each run.',
      'Added software motor trim factors in firmware to equalize dual-wheel RPM output.',
    ],
    result: 'Secured 1st Place in the Autonomous Rover & Line Follower competition with complete track accuracy and zero course departures.',
    future: 'Add optical rotary encoders for dead-reckoning positional tracking and velocity logging.',
    techStack: ['Arduino UNO', 'ESP32', 'C++', '8-Channel IR Array', 'PID Control', 'PWM', 'TB6612 Driver', 'Sensor Calibration', 'Differential Drive'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
  {
    id: 'argus-rover',
    title: 'ARGUS — Autonomous Reconnaissance Rover',
    tagline: 'An unmanned ground utility vehicle featuring ESP32-CAM video streaming, obstacle avoidance, and ambient environmental sensors.',
    category: 'Robotics & Telemetry',
    role: 'Embedded Software Engineer',
    metric: 'Real-Time Video Stream & Telemetry',
    description: 'ARGUS (Autonomous Reconnaissance & Ground Utility System) is an unmanned ground vehicle designed for hazardous area exploration and remote environmental inspection. Powered by dual ESP32 microcontrollers, it streams live video over Wi-Fi while logging real-time temperature, gas presence, and obstacle distances to a browser-based monitoring terminal.',
    architectureNodes: [
      { id: 'cam', label: 'ESP32-CAM Video Processor', type: 'hardware', protocol: 'MJPEG Stream' },
      { id: 'sensors', label: 'Obstacle + Gas + Temp Sensors', type: 'embedded', protocol: 'GPIO / ADC' },
      { id: 'mcu', label: 'ESP32 Main Flight Controller', type: 'firmware', protocol: 'FreeRTOS Tasks' },
      { id: 'wireless', label: 'Wi-Fi Telemetry Link', type: 'backend', protocol: 'WebSockets / HTTP' },
      { id: 'dashboard', label: 'Web Command Terminal', type: 'frontend', protocol: 'HTML5 / Canvas' },
    ],
    architectureText: `[Sensors: Temp / Gas / Obstacles]    [ESP32-CAM Camera]
                   │                          │
                   └────────────┬─────────────┘
                                ▼
                   [ESP32 Dual-Core Controller]
                                │ (Wi-Fi WebSockets)
                                ▼
                   [Web Command & Monitoring UI]`,
    problem: 'Inspecting hazardous or confined spaces poses safety risks for personnel without low-cost remote inspection tools.',
    solution: 'Built a wireless ground rover that transmits low-latency video and environmental sensor readings to a web command interface over local Wi-Fi.',
    tradeoffs: [
      'Dedicated Core 0 of the ESP32 strictly to camera frame capture while running sensor reading and motor control loops on Core 1.',
    ],
    challenges: [
      'High initial motor current draw caused power rail voltage dips, triggering ESP32 brownout resets.',
    ],
    debugging: [
      'Separated logic and motor power paths using dedicated buck converters and Li-ion 18650 battery cells.',
    ],
    result: 'Demonstrated stable video streaming and real-time sensor reporting across physical field testing.',
    future: 'Integrate ROS (Robot Operating System) nodes for autonomous SLAM mapping.',
    techStack: ['ESP32', 'ESP32-CAM', 'C++', 'FreeRTOS', 'IR & Ultrasonic Sensors', 'Gas Sensors', 'Wi-Fi Streaming', 'HTML5 Dashboard'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
  {
    id: 'basketball-scoreboard',
    title: 'Smart LED Basketball Scoreboard',
    tagline: 'An outdoor physical LED matrix scoreboard controlled wirelessly via an embedded web server hosted directly on an ESP32.',
    category: 'Embedded Systems',
    role: 'Embedded Developer',
    metric: 'Zero-Flicker Display Refresh Rate',
    description: 'Designed a smart physical sports scoreboard using high-brightness P10 LED matrix panels driven by an ESP32 microcontroller. The system hosts an embedded web server allowing referees or scorekeepers to update scores, period clocks, shot timers, and team names wirelessly from any smartphone or tablet.',
    architectureNodes: [
      { id: 'web', label: 'Mobile Referee Web UI', type: 'frontend', protocol: 'WebSocket / HTTP' },
      { id: 'mcu', label: 'ESP32 Microcontroller', type: 'hardware', protocol: 'Embedded Web Server' },
      { id: 'dma', label: 'SPI / Display Driver', type: 'firmware', protocol: 'Direct SPI Driver' },
      { id: 'display', label: 'P10 Outdoor LED Matrix', type: 'embedded', protocol: 'HUB12 SPI' },
    ],
    architectureText: `[Smartphone / Tablet Web UI]
               │ (Wi-Fi WebSocket Signals)
               ▼
[ESP32 Embedded Web Server]
               │ (Direct SPI / DMA Driver)
               ▼
[P10 Outdoor LED Matrix Display]`,
    problem: 'Commercial outdoor scoreboards are expensive and lack customizable wireless web control interfaces.',
    solution: 'Built an affordable, high-visibility LED scoreboard powered by an ESP32 hosting an interactive wireless web controller.',
    tradeoffs: [
      'Utilized direct timer interrupts and SPI transfers to refresh the display matrix continuously without flicker when processing web requests.',
    ],
    challenges: [
      'Illuminating all LED matrix segments simultaneously caused current spikes that dimmed the display.',
    ],
    debugging: [
      'Added a dedicated 5V 10A switching power supply with heavy-gauge copper wiring to stabilize supply voltage.',
    ],
    result: 'Constructed a fully functional outdoor score display capable of real-time wireless scoring adjustments.',
    future: 'Add integrated physical audio horn triggers and handheld Bluetooth remote support.',
    techStack: ['ESP32', 'Arduino', 'C++', 'P10 LED Matrix', 'SPI Driver', 'Embedded Web Server', 'WebSockets', 'HTML/CSS/JS'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
];
