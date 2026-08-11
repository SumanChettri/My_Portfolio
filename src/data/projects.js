// src/data/projects.js

export const FLAGSHIP_PROJECTS = [
  {
    id: 'smart-parking',
    title: 'Smart Parking & Gate System',
    tagline: 'A connected hardware-to-cloud system bridging physical IR barrier gates, keypad OTP access, Node.js API, and React Native mobile app.',
    category: 'Web + Mobile + Backend + IoT',
    role: 'Hardware & Software Lead',
    metric: '< 200ms Hardware-to-Cloud Sync',
    description: 'Ever spent 20 minutes circling a parking lot wondering if the universe is testing your patience? I built this system to fix that. IR sensors track slot availability in real time and send data via ESP32 to an Express/MongoDB backend. Drivers can reserve spots on the web or mobile app, get an instant OTP, and punch it into a physical keypad at the gate to raise the servo barrier.',
    architectureNodes: [
      { id: 'web', label: 'React Web Dashboard', type: 'frontend', protocol: 'HTTPS / REST' },
      { id: 'mobile', label: 'React Native App', type: 'mobile', protocol: 'HTTPS / JSON' },
      { id: 'api', label: 'Node.js & Express API', type: 'backend', protocol: 'WebSocket / HTTP' },
      { id: 'db', label: 'MongoDB Database', type: 'database', protocol: 'Mongoose' },
      { id: 'mcu', label: 'ESP32 / ESP8266 MCU', type: 'hardware', protocol: 'UART / Wi-Fi API' },
      { id: 'peripherals', label: 'IR Array + Servo + Keypad + LCD', type: 'embedded', protocol: 'I2C / PWM' },
    ],
    architectureText: `[React Web UI]      [React Native App]
       │                        │
       └───────────┬────────────┘
                   ▼
       [Node.js / Express API Gateway]
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
  [MongoDB Cluster]    [ESP32 / ESP8266 IoT Controller]
                             │
            ┌────────────────┼────────────────┐
            ▼                ▼                ▼
     [8x IR Sensors]   [Keypad + LCD]   [Servo Gate Motor]`,
    problem: 'Drivers waste fuel searching for empty parking spaces, while facility managers rely on outdated manual ticket counters that lag behind real-world slot occupancy.',
    solution: 'Designed an automated physical-to-digital loop: hardware sensors auto-detect cars, update cloud databases instantly, and grant gate access via secure single-use keypad OTPs.',
    tradeoffs: [
      'Used HTTP client polling with fallback WebSockets so the microcontrollers stay responsive even under spotty Wi-Fi signals.',
      'Selected MongoDB for its document flexibility when logging transient parking reservations and sensor event streams.',
      'Configured local fallback memory on the ESP32 so the physical keypad still unlocks the gate if internet connectivity drops.',
    ],
    challenges: [
      'Direct sunlight reflecting off car windshields confused the IR optical sensors into detecting non-existent phantom cars.',
      'Rapid keypad presses caused mechanical debouncing noise, turning a simple "1234" OTP into "11223344".',
    ],
    debugging: [
      'Added software digital window filtering in C++ to smooth out erratic infrared intensity spikes.',
      'Implemented hardware RC decoupling filter circuits and software interrupt timers to stop keypad double-triggering.',
    ],
    result: 'Built a reliable physical hardware prototype with sub-200ms sensor sync, instant mobile OTP generation, and smooth servo barrier gate actuation.',
    future: 'Add license plate recognition via ESP32-CAM so drivers don\'t even have to roll down their windows.',
    techJoke: 'Why do hardware engineers hate dark mode? Because light attracts real bugs, but dark mode hides bad wiring!',
    techStack: ['ESP32', 'ESP8266', 'React 19', 'React Native', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'IR Sensors', 'Servo Motors', 'Keypad', 'I2C LCD'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
  {
    id: 'organic-store',
    title: 'Organic Store — E-Commerce Platform',
    tagline: 'A full-stack e-commerce web platform for ordering farm-fresh organic produce with real-time cart state & fast checkout.',
    category: 'Full-Stack Web & E-Commerce',
    role: 'Full-Stack Engineer',
    metric: 'Sub-100ms API Response & Instant Cart',
    description: 'Shopping for fresh organic fruits and veggies should be as smooth as eating them. Organic Store is a full-stack e-commerce site equipped with produce categories, real-time product search, persistent cart state, user profile management, secure JWT authentication, and an intuitive admin dashboard for managing inventory.',
    architectureNodes: [
      { id: 'frontend', label: 'React 19 UI (Tailwind + Framer)', type: 'frontend', protocol: 'Client SPA' },
      { id: 'gateway', label: 'Express.js API Router', type: 'backend', protocol: 'REST APIs' },
      { id: 'auth', label: 'JWT Auth & Middleware', type: 'security', protocol: 'Bearer Token' },
      { id: 'database', label: 'MongoDB (Products, Orders, Users)', type: 'database', protocol: 'BSON Queries' },
      { id: 'services', label: 'Order Dispatch & Email Notifier', type: 'backend', protocol: 'Async Service' },
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
    problem: 'Local organic farmers often struggle to sell directly to consumers because existing template builders are bloated, slow, and hard to customize for daily produce inventory updates.',
    solution: 'Engineered a tailored, lightweight full-stack web app that loads instantly on mobile devices, manages cart items locally for smooth UX, and syncs orders with a Node.js/MongoDB backend.',
    tradeoffs: [
      'Kept the shopping cart state in client-side React hooks synced with localStorage for zero-latency UI updates, validating final prices against the server at checkout.',
      'Designed flexible Mongoose schemas to handle seasonal produce price shifts and per-kilogram inventory metrics easily.',
    ],
    challenges: [
      'Preventing race conditions where two customers try to buy the last basket of organic strawberries simultaneously.',
    ],
    debugging: [
      'Used atomic MongoDB document updates ($inc) during order creation to ensure inventory locks cleanly or throws a friendly out-of-stock notice.',
    ],
    result: 'Delivered an inviting, super fast e-commerce platform with zero lag, smooth UI animations, and clean database architecture.',
    future: 'Add WhatsApp order notification webhooks so farmers get instant notifications when fresh orders drop.',
    techJoke: 'There are only two hard things in Computer Science: cache invalidation, naming things, and off-by-one errors.',
    techStack: ['React 19', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'REST APIs'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
  {
    id: 'line-follower',
    title: 'High-Speed Autonomous Line Follower',
    tagline: 'Competition-winning autonomous robot built with an 8-channel IR array, closed-loop PID control algorithm, and differential drive.',
    category: 'Autonomous Robotics & Embedded',
    role: 'Robotics Engineer & Firmware Developer',
    metric: '🏆 1st Place Winner — 100% Track Completion',
    description: 'Building a robot that races along a tricky track at breakneck speeds without flying off the edges takes real control engineering. My high-speed line follower won 1st Place in the robotics competition. It uses an 8-channel IR sensor array, real-time sensor calibration, a tuned PID feedback algorithm in C++, and PWM motor speed compensation.',
    architectureNodes: [
      { id: 'ir', label: '8-Channel IR Sensor Array', type: 'embedded', protocol: 'Analog Readings' },
      { id: 'calib', label: 'Calibration & Noise Filter', type: 'firmware', protocol: 'DSP / Mapping' },
      { id: 'pid', label: 'PID Controller Engine', type: 'firmware', protocol: 'Closed-Loop Math' },
      { id: 'pwm', label: 'PWM Duty Cycle Generator', type: 'hardware', protocol: 'Timers / Interrupts' },
      { id: 'driver', label: 'TB6612 / DRV8833 Motor Driver', type: 'hardware', protocol: 'H-Bridge PWM' },
      { id: 'motors', label: 'High-RPM DC Gear Motors', type: 'robotics', protocol: 'Differential Motion' },
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
    problem: 'Maintaining high speed on straight paths while taking tight 90-degree turns and sharp hairpin bends without overshooting the line or stalling the motors.',
    solution: 'Wrote a closed-loop PID algorithm in C++ that calculates position error hundreds of times per second, continuously adjusting motor speeds to keep the robot centered on the line.',
    tradeoffs: [
      'Aggressively tuned the Derivative (Kd) constant to damp down oscillations at high speeds, accepting slight turn latency to guarantee track stability.',
      'Selected high-frequency PWM driving to prevent low-speed motor chattering during micro-corrections.',
    ],
    challenges: [
      'DC motor manufacturing variances meant the left motor spun 5% faster than the right motor at equal voltage.',
      'Venue lighting changes between test runs altered baseline IR sensor surface readings.',
    ],
    debugging: [
      'Wrote an automatic boot-up calibration sequence so the robot scans the surface and auto-adjusts white/black thresholds before every race.',
      'Added software motor trim factors in firmware to perfectly balance dual-wheel RPM.',
    ],
    result: 'Took 1st Place in the Autonomous Rover & Line Follower competition with the fastest lap time and zero course departures.',
    future: 'Add optical wheel encoders for full dead-reckoning positional mapping and telemetry transmission.',
    techJoke: 'Robotics Rule #1: If at first you don\'t succeed, call it version 1.0 and blame the hardware!',
    techStack: ['Arduino UNO', 'ESP32', 'C++', '8-Channel IR Array', 'PID Control', 'PWM', 'TB6612 Driver', 'Sensor Calibration', 'Differential Drive'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
  {
    id: 'argus-rover',
    title: 'ARGUS — Autonomous Reconnaissance Rover',
    tagline: 'An unmanned ground utility vehicle equipped with ESP32-CAM video streaming, obstacle avoidance, and hazardous gas/temp sensors.',
    category: 'Robotics & Remote Monitoring',
    role: 'Embedded & Robotics Developer',
    metric: 'Real-Time Video Stream & Live Sensor Feeds',
    description: 'ARGUS (Autonomous Reconnaissance & Ground Utility System) was built for environments where sending a human is either dangerous or impractical. Powered by dual ESP32 microcontrollers, it streams live video over Wi-Fi while monitoring ambient temperature, humidity, gas leaks, and obstacle distances for emergency search and rescue support.',
    architectureNodes: [
      { id: 'cam', label: 'ESP32-CAM Video Processor', type: 'hardware', protocol: 'MJPEG Stream' },
      { id: 'sensors', label: 'Obstacle + Gas + Temp Array', type: 'embedded', protocol: 'GPIO / ADC' },
      { id: 'mcu', label: 'ESP32 Main Flight Controller', type: 'firmware', protocol: 'FreeRTOS Tasks' },
      { id: 'wireless', label: 'Wi-Fi AP Telemetry Link', type: 'backend', protocol: 'WebSockets / HTTP' },
      { id: 'dashboard', label: 'Web Recon Command Center', type: 'frontend', protocol: 'HTML5 / Canvas' },
    ],
    architectureText: `[Sensors: Temp / Gas / Obstacles]    [ESP32-CAM Camera]
                   │                          │
                   └────────────┬─────────────┘
                                ▼
                   [ESP32 Dual-Core Controller]
                                │ (Wi-Fi WebSockets)
                                ▼
                   [Web Command & Monitoring UI]`,
    problem: 'First responders in disaster scenarios lack low-cost, portable ground rovers to inspect hazardous rooms or unstable structures before entering.',
    solution: 'Built a lightweight wireless ground rover that streams live video feeds directly to a web browser dashboard while constantly measuring air quality and temperature.',
    tradeoffs: [
      'Dedicated Core 0 of the dual-core ESP32 strictly to video camera frame processing, leaving Core 1 free for FreeRTOS motor control and sensor loops.',
    ],
    challenges: [
      'High motor starting current caused power voltage drops that occasionally triggered ESP32 brownout resets.',
    ],
    debugging: [
      'Separated the microcontroller logic power rail from the motor power rail using dedicated buck converters and Li-ion 18650 cells.',
    ],
    result: 'Successfully completed physical field tests with stable wireless video feeds and continuous telemetry reporting.',
    future: 'Integrate ROS (Robot Operating System) nodes for autonomous SLAM mapping and path planning.',
    techJoke: 'Hardware rule: It\'s not a bug, it\'s a thermal emission feature!',
    techStack: ['ESP32', 'ESP32-CAM', 'C++', 'FreeRTOS', 'IR & Ultrasonic Sensors', 'Gas Sensors', 'Wi-Fi Streaming', 'HTML5 Dashboard'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
  {
    id: 'basketball-scoreboard',
    title: 'Smart LED Basketball Scoreboard',
    tagline: 'An outdoor physical LED matrix scoreboard controlled wirelessly via a browser interface hosted directly on an ESP32.',
    category: 'Embedded Systems + Web Control',
    role: 'Embedded Software Engineer',
    metric: 'Zero-Flicker LED Matrix Refresh Rate',
    description: 'Commercial sports scoreboards are either ridiculously expensive or inconvenient to operate. I built a smart physical scoreboard using high-brightness P10 LED matrix panels driven by an ESP32. Court referees can update team scores, period timers, shot clocks, and team names right from their phone via an embedded web interface.',
    architectureNodes: [
      { id: 'web', label: 'Browser Referee Controller', type: 'frontend', protocol: 'WebSocket / HTTP' },
      { id: 'mcu', label: 'ESP32 Microcontroller', type: 'hardware', protocol: 'Embedded Web Server' },
      { id: 'dma', label: 'HUB12 SPI / DMA Driver', type: 'firmware', protocol: 'Direct Memory Access' },
      { id: 'display', label: 'P10 LED Matrix Panel', type: 'embedded', protocol: 'High-Brightness LED' },
    ],
    architectureText: `[Smartphone / Tablet Web UI]
               │ (Wi-Fi WebSocket Signals)
               ▼
[ESP32 Embedded Web Server]
               │ (Direct SPI / DMA Driver)
               ▼
[P10 Outdoor LED Matrix Display]`,
    problem: 'Manual flip scoreboards require dedicated scorekeepers standing at courtside, while commercial LED displays cost thousands and lack open web interfaces.',
    solution: 'Designed an affordable, high-visibility P10 LED scoreboard driven by an ESP32 microcontroller hosting its own wireless web dashboard.',
    tradeoffs: [
      'Used direct SPI and timer interrupts so the LED matrix refreshes continuously at high speed without flickering when web requests arrive.',
    ],
    challenges: [
      'Turning on all LEDs simultaneously caused a massive current surge that dimmed the display.',
    ],
    debugging: [
      'Upgraded to a 5V 10A switching power supply with heavy-gauge copper wiring to handle peak brightness bursts.',
    ],
    result: 'Built a crisp outdoor sports display capable of real-time wireless game scoring from any smartphone.',
    future: 'Add loud physical buzzer triggers and Bluetooth handheld button remotes.',
    techJoke: 'Why did the hardware engineer cross the road? To lower the impedance on the other side!',
    techStack: ['ESP32', 'Arduino', 'C++', 'P10 LED Matrix', 'SPI / DMA', 'Embedded Web Server', 'WebSockets', 'HTML/CSS/JS'],
    githubUrl: 'https://github.com/SumanChettri',
    liveUrl: 'https://github.com/SumanChettri',
  },
];
