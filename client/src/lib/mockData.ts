export interface MockProject {
  title: string;
  abstract: string;
  objectives: string[];
  tools: string[];
  references: string[];
}

export const mockProjects: Record<string, MockProject> = {
  engineering: {
    title: "Smart IoT-Based Environmental Monitoring System for Urban Areas",
    abstract: "This project aims to develop an intelligent Internet of Things (IoT) based environmental monitoring system designed for urban areas. The system will utilize various sensors to collect real-time data on air quality, noise levels, temperature, humidity, and other environmental parameters. The collected data will be processed using machine learning algorithms to provide predictive analytics and early warning systems for environmental hazards. The system will feature a user-friendly web dashboard and mobile application for real-time monitoring and data visualization. This project addresses the critical need for continuous environmental monitoring in rapidly urbanizing areas, helping city planners and residents make informed decisions about environmental health.",
    objectives: [
      "Design and implement a network of IoT sensors for comprehensive environmental monitoring",
      "Develop machine learning algorithms for environmental data analysis and prediction",
      "Create a real-time data visualization dashboard and mobile application",
      "Establish early warning systems for environmental hazards and air quality alerts",
      "Evaluate system performance and accuracy through pilot testing in urban environments"
    ],
    tools: [
      "Arduino/Raspberry Pi",
      "Various Environmental Sensors",
      "Node.js/Python",
      "MongoDB/PostgreSQL",
      "React.js/Vue.js",
      "Machine Learning Libraries (TensorFlow/scikit-learn)",
      "Cloud Services (AWS/Azure)",
      "Mobile Development (React Native/Flutter)"
    ],
    references: [
      "Smith, J. et al. (2023). 'IoT-Based Environmental Monitoring: A Comprehensive Review.' Journal of Environmental Technology, 45(3), 234-256.",
      "Kumar, A. & Patel, R. (2022). 'Machine Learning Applications in Environmental Data Analysis.' IEEE Transactions on Environmental Engineering, 18(7), 1245-1260.",
      "Johnson, M. (2023). 'Urban Air Quality Monitoring Systems: Current Trends and Future Directions.' Environmental Science & Policy, 89, 45-62.",
      "Chen, L. et al. (2022). 'Real-time Environmental Monitoring Using IoT: Implementation and Challenges.' Sensors and Actuators, 156, 112-128.",
      "Williams, S. & Brown, T. (2023). 'Predictive Analytics for Environmental Management in Smart Cities.' Journal of Urban Technology, 30(2), 78-95."
    ]
  },
  
  management: {
    title: "Digital Transformation Strategies for Small and Medium Enterprises in the Post-Pandemic Era",
    abstract: "This research project examines the digital transformation strategies adopted by Small and Medium Enterprises (SMEs) in response to the challenges posed by the COVID-19 pandemic. The study investigates how SMEs have leveraged digital technologies to maintain business continuity, enhance operational efficiency, and explore new market opportunities. Through a mixed-methods approach combining surveys, interviews, and case studies, this project analyzes the effectiveness of various digital transformation initiatives including e-commerce adoption, remote work implementation, digital marketing strategies, and cloud-based business solutions. The research aims to identify best practices, common challenges, and success factors that can guide other SMEs in their digital transformation journey.",
    objectives: [
      "Analyze the impact of COVID-19 on SME operations and digital adoption patterns",
      "Identify key digital transformation strategies implemented by successful SMEs",
      "Evaluate the effectiveness of different digital technologies in improving business performance",
      "Examine the challenges and barriers faced by SMEs during digital transformation",
      "Develop a framework for successful digital transformation in small and medium enterprises"
    ],
    tools: [
      "Survey Design Software (Qualtrics/SurveyMonkey)",
      "Statistical Analysis Software (SPSS/R)",
      "Qualitative Analysis Tools (NVivo/Atlas.ti)",
      "Business Intelligence Tools (Tableau/Power BI)",
      "Microsoft Office Suite",
      "Interview Recording Software",
      "Case Study Documentation Tools",
      "Literature Review Management (Mendeley/Zotero)"
    ],
    references: [
      "Anderson, P. & Martinez, L. (2023). 'Digital Transformation in SMEs: Lessons from the Pandemic.' Harvard Business Review, 98(4), 56-68.",
      "Thompson, R. et al. (2022). 'Post-Pandemic Business Strategies: A Comprehensive Analysis.' Journal of Business Strategy, 43(5), 289-305.",
      "Davis, K. (2023). 'E-commerce Adoption Among Small Businesses: Success Factors and Challenges.' International Journal of Electronic Commerce, 27(2), 178-195.",
      "Singh, A. & Wilson, M. (2022). 'Remote Work and Digital Collaboration in SMEs.' Technology in Society, 68, 112-125.",
      "Lee, S. et al. (2023). 'Cloud Computing Adoption in Small Enterprises: Benefits and Implementation Strategies.' Information Systems Research, 34(3), 445-462."
    ]
  },

  science: {
    title: "Investigating the Antimicrobial Properties of Plant-Derived Natural Compounds Against Multidrug-Resistant Bacteria",
    abstract: "This research project focuses on the investigation of antimicrobial properties of plant-derived natural compounds as potential alternatives to conventional antibiotics in combating multidrug-resistant (MDR) bacterial infections. The study involves the extraction and purification of bioactive compounds from selected medicinal plants, followed by comprehensive antimicrobial testing against clinically relevant MDR bacterial strains. The research employs various analytical techniques including chromatography, spectroscopy, and microbiological assays to identify, characterize, and evaluate the efficacy of these natural compounds. The project aims to contribute to the development of novel antimicrobial agents that could address the growing global health threat of antibiotic resistance.",
    objectives: [
      "Extract and purify bioactive compounds from selected medicinal plant species",
      "Characterize the chemical structure and properties of isolated natural compounds",
      "Evaluate antimicrobial activity against multidrug-resistant bacterial strains",
      "Determine minimum inhibitory concentrations (MIC) and minimum bactericidal concentrations (MBC)",
      "Investigate potential mechanisms of antimicrobial action and cytotoxicity profiles"
    ],
    tools: [
      "High-Performance Liquid Chromatography (HPLC)",
      "Gas Chromatography-Mass Spectrometry (GC-MS)",
      "Nuclear Magnetic Resonance (NMR) Spectroscopy",
      "UV-Visible Spectrophotometer",
      "Microplate Reader",
      "Autoclave and Biosafety Cabinet",
      "Bacterial Culture Media and Strains",
      "Extraction Equipment (Rotary Evaporator, Sonicator)"
    ],
    references: [
      "Garcia, M. et al. (2023). 'Plant-Derived Antimicrobial Compounds: A Review of Recent Discoveries.' Journal of Natural Products, 86(4), 892-915.",
      "Rahman, S. & Kumar, P. (2022). 'Natural Products as Alternatives to Antibiotics: Current Research and Future Prospects.' Antimicrobial Agents and Chemotherapy, 66(8), e00245-22.",
      "Zhou, X. et al. (2023). 'Mechanisms of Action of Plant-Based Antimicrobial Compounds.' Nature Reviews Microbiology, 21(3), 156-172.",
      "Patel, N. & Johnson, R. (2022). 'Evaluation of Medicinal Plants Against Multidrug-Resistant Bacteria.' Phytotherapy Research, 36(7), 2845-2862.",
      "Li, Y. et al. (2023). 'Chromatographic Analysis and Bioactivity Assessment of Plant Extracts.' Journal of Chromatography A, 1695, 463952."
    ]
  },

  social: {
    title: "The Impact of Social Media on Mental Health Among College Students: A Comprehensive Analysis",
    abstract: "This research project investigates the complex relationship between social media usage and mental health outcomes among college students. The study examines how different patterns of social media engagement, including time spent, types of platforms used, and interaction behaviors, correlate with various mental health indicators such as anxiety, depression, self-esteem, and sleep quality. Through a combination of quantitative surveys, qualitative interviews, and digital behavior analysis, this research aims to identify risk factors and protective factors associated with social media use. The project will contribute to understanding the psychological mechanisms underlying social media's impact on mental health and provide evidence-based recommendations for healthy digital habits among young adults.",
    objectives: [
      "Assess the relationship between social media usage patterns and mental health outcomes",
      "Identify specific social media behaviors that contribute to positive or negative mental health effects",
      "Examine the role of social comparison and FOMO (Fear of Missing Out) in digital well-being",
      "Analyze differences in mental health impacts across various social media platforms",
      "Develop guidelines for healthy social media use among college students"
    ],
    tools: [
      "Survey Design Platforms (Qualtrics, Google Forms)",
      "Statistical Analysis Software (SPSS, R, Python)",
      "Qualitative Analysis Tools (NVivo, ATLAS.ti)",
      "Mobile Usage Tracking Apps",
      "Mental Health Assessment Scales",
      "Interview Recording and Transcription Tools",
      "Data Visualization Software (Tableau, matplotlib)",
      "Literature Review Management (Zotero, Mendeley)"
    ],
    references: [
      "Roberts, A. & Thompson, K. (2023). 'Social Media and Mental Health: A Systematic Review of Recent Research.' Journal of Behavioral Addictions, 17(2), 45-62.",
      "Martinez, L. et al. (2022). 'Digital Well-being Among College Students: Patterns and Predictors.' Cyberpsychology, Behavior, and Social Networking, 25(8), 512-528.",
      "Chen, S. & Wilson, J. (2023). 'The Role of Social Comparison in Social Media-Related Mental Health Outcomes.' Journal of Social and Clinical Psychology, 42(3), 234-251.",
      "Anderson, M. (2022). 'Sleep Quality and Social Media Use: A Longitudinal Study of College Students.' Sleep Medicine Reviews, 58, 101-115.",
      "Taylor, R. et al. (2023). 'FOMO and Mental Health: Understanding the Psychological Mechanisms.' Clinical Psychological Science, 11(4), 678-695."
    ]
  },

  arts: {
    title: "Digital Storytelling in Contemporary Art: Exploring New Forms of Narrative Expression",
    abstract: "This project explores the emergence and evolution of digital storytelling within contemporary art practices, examining how artists are utilizing new technologies to create immersive narrative experiences. The research investigates various forms of digital storytelling including interactive installations, virtual reality experiences, augmented reality art, and multimedia performances. Through case studies, artist interviews, and theoretical analysis, this project examines how digital tools are transforming traditional concepts of narrative, audience engagement, and artistic expression. The study aims to document current trends, analyze the artistic and cultural significance of digital storytelling, and explore its potential for future artistic innovation and social commentary.",
    objectives: [
      "Analyze the evolution and current state of digital storytelling in contemporary art",
      "Examine how digital technologies are reshaping narrative structures and audience experience",
      "Document and categorize different approaches to digital storytelling in artistic practice",
      "Investigate the cultural and social implications of technology-mediated art forms",
      "Explore the potential for digital storytelling to address contemporary social issues"
    ],
    tools: [
      "Video Editing Software (Adobe Premiere, Final Cut Pro)",
      "3D Modeling and Animation (Blender, Maya)",
      "Interactive Media Tools (Unity, TouchDesigner)",
      "VR/AR Development Platforms (Oculus SDK, ARKit)",
      "Digital Art Software (Adobe Creative Suite)",
      "Documentation Equipment (Cameras, Audio Recording)",
      "Survey and Interview Tools",
      "Academic Research Databases"
    ],
    references: [
      "Lambert, J. (2023). 'Digital Storytelling: Capturing Lives, Creating Community.' 5th Edition, Routledge.",
      "Manovich, L. (2022). 'The Language of New Media in Contemporary Art Practice.' MIT Press, Cambridge.",
      "Hayles, N. K. (2023). 'Interactive Narratives and Embodied Cognition in Digital Art.' New Literary History, 54(2), 289-312.",
      "Bolter, J. D. & Grusin, R. (2022). 'Remediation and Digital Art: Understanding New Media Forms.' Journal of Digital Media Arts, 15(3), 45-67.",
      "Paul, C. (2023). 'Digital Art and Meaning: Exploring Technology's Role in Contemporary Expression.' Thames & Hudson, London."
    ]
  },

  medicine: {
    title: "Telemedicine Implementation in Rural Healthcare: Challenges, Opportunities, and Patient Outcomes",
    abstract: "This research project examines the implementation and effectiveness of telemedicine programs in rural healthcare settings, focusing on the challenges and opportunities presented by remote healthcare delivery. The study investigates how telemedicine technologies can improve access to healthcare services in underserved rural communities, while analyzing barriers to adoption including technological infrastructure, provider training, and patient acceptance. Through a mixed-methods approach involving healthcare provider surveys, patient interviews, and clinical outcome analysis, this research evaluates the impact of telemedicine on healthcare quality, patient satisfaction, and health outcomes in rural populations. The project aims to provide evidence-based recommendations for successful telemedicine implementation in resource-limited settings.",
    objectives: [
      "Assess the current state of telemedicine adoption in rural healthcare facilities",
      "Identify key barriers and facilitators to successful telemedicine implementation",
      "Evaluate patient and provider satisfaction with telemedicine services",
      "Analyze clinical outcomes and health improvements associated with telemedicine use",
      "Develop recommendations for expanding telemedicine access in rural communities"
    ],
    tools: [
      "Telemedicine Platforms and Software",
      "Electronic Health Record (EHR) Systems",
      "Video Conferencing Technology",
      "Remote Monitoring Devices",
      "Survey Design Tools (REDCap, Qualtrics)",
      "Statistical Analysis Software (SAS, R, SPSS)",
      "Qualitative Analysis Tools (NVivo)",
      "Healthcare Data Analytics Platforms"
    ],
    references: [
      "Smith, D. et al. (2023). 'Telemedicine in Rural Health: A Systematic Review of Implementation Strategies.' Journal of Rural Health, 39(2), 156-172.",
      "Johnson, L. & Brown, M. (2022). 'Patient Satisfaction with Telehealth Services: A Meta-Analysis.' Telemedicine and e-Health, 28(8), 1145-1159.",
      "Garcia, R. (2023). 'Barriers to Telemedicine Adoption in Underserved Communities.' Health Affairs, 42(4), 567-582.",
      "Wilson, K. et al. (2022). 'Clinical Outcomes of Telemedicine vs. In-Person Care: A Comparative Study.' New England Journal of Medicine, 387(12), 1089-1098.",
      "Thompson, A. & Davis, S. (2023). 'Technology Infrastructure Requirements for Rural Telemedicine.' Journal of Medical Internet Research, 25(3), e45123."
    ]
  },

  education: {
    title: "The Effectiveness of Gamification in Online Learning Environments: A Comparative Study",
    abstract: "This research project investigates the effectiveness of gamification elements in online learning environments and their impact on student engagement, motivation, and academic performance. The study compares traditional online learning approaches with gamified learning systems, examining how game mechanics such as points, badges, leaderboards, and progress tracking influence student behavior and learning outcomes. Through experimental design involving multiple educational contexts and student populations, this research analyzes the psychological mechanisms underlying gamification's effectiveness and identifies optimal gamification strategies for different learning objectives. The project aims to provide evidence-based guidelines for educators and instructional designers implementing gamification in educational technology.",
    objectives: [
      "Compare learning outcomes between traditional and gamified online learning environments",
      "Analyze the impact of specific gamification elements on student engagement and motivation",
      "Investigate how gamification affects different types of learners and learning styles",
      "Examine the long-term sustainability of gamification effects on learning behavior",
      "Develop best practice guidelines for implementing gamification in educational settings"
    ],
    tools: [
      "Learning Management Systems (Moodle, Canvas, Blackboard)",
      "Gamification Platforms (Kahoot, Classcraft, Duolingo for Schools)",
      "Data Analytics Tools (Google Analytics, Learning Analytics)",
      "Survey Design Software (Qualtrics, SurveyMonkey)",
      "Statistical Analysis Software (SPSS, R, Python)",
      "Video Conferencing Tools (Zoom, Microsoft Teams)",
      "Screen Recording Software (Camtasia, OBS Studio)",
      "Educational Assessment Tools"
    ],
    references: [
      "Deterding, S. et al. (2023). 'Gamification in Education: A Comprehensive Review of Empirical Studies.' Educational Technology Research and Development, 71(2), 445-467.",
      "Kapp, K. M. (2022). 'The Gamification of Learning and Instruction: Game-based Methods and Strategies.' 2nd Edition, Pfeiffer.",
      "Hamari, J. & Koivisto, J. (2023). 'Measuring Flow in Gamified Learning Environments.' Computers & Education, 189, 104-118.",
      "Ryan, R. M. & Deci, E. L. (2022). 'Self-Determination Theory and Gamification: Understanding Motivation in Digital Learning.' Journal of Educational Psychology, 114(5), 891-908.",
      "Seaborn, K. & Fels, D. I. (2023). 'Gamification in Theory and Action: A Survey of Current Research and Applications.' International Journal of Human-Computer Studies, 158, 102-125."
    ]
  },

  law: {
    title: "Artificial Intelligence and Legal Decision-Making: Ethical Implications and Regulatory Frameworks",
    abstract: "This research project examines the growing role of artificial intelligence in legal decision-making processes and the associated ethical, legal, and social implications. The study investigates how AI systems are being implemented in various aspects of the legal system, including case prediction, document review, sentencing recommendations, and legal research. Through comparative analysis of different jurisdictions, expert interviews, and case study examination, this research explores the challenges and opportunities presented by AI in law, including issues of bias, transparency, accountability, and due process. The project aims to contribute to the development of comprehensive regulatory frameworks and ethical guidelines for AI implementation in legal systems.",
    objectives: [
      "Analyze current applications of AI technology in legal decision-making processes",
      "Examine ethical implications and potential biases in AI-assisted legal systems",
      "Compare regulatory approaches to AI in law across different jurisdictions",
      "Investigate the impact of AI on legal profession practices and employment",
      "Develop recommendations for ethical AI implementation in legal contexts"
    ],
    tools: [
      "Legal Research Databases (Westlaw, LexisNexis, HeinOnline)",
      "Case Law Analysis Software",
      "AI and Machine Learning Platforms",
      "Interview Recording and Transcription Tools",
      "Qualitative Analysis Software (NVivo, ATLAS.ti)",
      "Comparative Legal Analysis Frameworks",
      "Survey Design Tools",
      "Legal Document Management Systems"
    ],
    references: [
      "Passmore, A. & Martinez, C. (2023). 'AI in the Courtroom: Examining Algorithmic Decision-Making in Judicial Systems.' Stanford Law Review, 75(3), 567-612.",
      "Chen, L. et al. (2022). 'Bias and Fairness in AI-Powered Legal Systems: A Critical Analysis.' Harvard Journal of Law & Technology, 36(1), 123-158.",
      "Robinson, K. (2023). 'Regulating Artificial Intelligence in Legal Practice: International Perspectives.' Oxford Journal of Legal Studies, 43(2), 289-315.",
      "Taylor, M. & Wilson, R. (2022). 'The Future of Legal Work: How AI is Transforming the Legal Profession.' Georgetown Journal of Legal Ethics, 35(4), 789-825.",
      "Anderson, S. et al. (2023). 'Transparency and Explainability in AI Legal Systems: Technical and Legal Challenges.' Journal of Law and Technology, 28(2), 45-78."
    ]
  },

  default: {
    title: "Innovative Approaches to Modern Challenges: A Comprehensive Research Study",
    abstract: "This interdisciplinary research project explores innovative approaches to addressing contemporary challenges in the chosen field of study. The project combines theoretical frameworks with practical applications to develop novel solutions and insights. Through comprehensive literature review, data collection, and analysis, this study aims to contribute meaningful knowledge to the academic community while providing practical implications for real-world applications. The research methodology incorporates both qualitative and quantitative approaches to ensure robust and reliable findings.",
    objectives: [
      "Conduct comprehensive literature review of current research and methodologies",
      "Develop innovative theoretical framework for addressing identified challenges",
      "Design and implement appropriate research methodology and data collection strategies",
      "Analyze collected data using appropriate statistical and analytical techniques",
      "Provide recommendations and implications for future research and practical applications"
    ],
    tools: [
      "Research Design Software",
      "Statistical Analysis Tools",
      "Data Collection Instruments",
      "Literature Review Management Systems",
      "Presentation and Documentation Software",
      "Quality Assurance Tools",
      "Project Management Software",
      "Academic Writing and Citation Tools"
    ],
    references: [
      "Author, A. et al. (2023). 'Contemporary Research Methodologies: Best Practices and Applications.' Academic Journal, 45(3), 123-145.",
      "Researcher, B. & Scholar, C. (2022). 'Innovative Approaches to Modern Challenges.' International Review, 38(7), 234-256.",
      "Expert, D. (2023). 'Theoretical Frameworks in Contemporary Research.' Journal of Advanced Studies, 52(2), 78-95.",
      "Professional, E. et al. (2022). 'Data Analysis Techniques for Modern Research.' Research Methods Quarterly, 29(4), 456-478.",
      "Academic, F. & Practitioner, G. (2023). 'Future Directions in Interdisciplinary Research.' Future Studies Review, 15(1), 12-28."
    ]
  }
};
