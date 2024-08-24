/* eslint-disable */

const _projects = [
    {
        "id": "pay-up-or-else",
        "title": "Pay Up or Else",
        "descShort": "A web application that provides comprehensive transaction breakdowns.",
        "descLong": `Pay Up or Else is a web application that provides comprehensive transaction breakdowns. The application allows for advanced value configurations for both payers and buyers, sharing of breakdowns through JSON exports and JSON loading, and browser autosaves. The application also pushes analytics events to Google Analytics for easy application observability.
        
        I used to compute the reimbursements that need to be made within my group of friends, usually after a group staycation or get-together. I wrote a program written in dart that allowed me to easily compute the needed reimbursements. Once I saw the value of sharing this application to the internet, I moved the logic to a Flutter Web app and Pay Up or Else was born.`,
        "languages": ["Flutter", "Firebase"],
        "img": [
            "https://lh3.googleusercontent.com/d/1IbVjC1g_0cgppODezlVOyyHvpRqiP4CE",
            "https://lh3.googleusercontent.com/d/19hjTH-VW2Qn5FJUEEWcExmoqhT8ayGRC",
            "https://lh3.googleusercontent.com/d/1BIH00e30ViUKEbKJqd2XdupxBE6vNVmQ",
            "https://lh3.googleusercontent.com/d/13cduNhQgyoONYcP309rIYB4MEztV1rz6",
            "https://lh3.googleusercontent.com/d/1cSVYsnsvJOEO2NGUlpQgfutLFQSCsE5M"
        ],
        "website": "https://pay-up-or-else.web.app/",
    },
    {
        "id": "cdscdb-database",
        "title": "CDSCDB Student Database",
        "descShort": "A student database that manages college and senior highschool level students.",
        "descLong": `The CDSCDB Database manages more than 2500 college, senior highschool, junior highschool, and TESDA level students information of the Quezon-based school of the Colegio de Santo Cristo de Burgos. For each student, student information including parent information; contact information; student file documents such as birth certificates, good moral certificates, diplomas, and barangay residencies; subject enrollments and grades information are managed throughout the application. Additionally, the system shares the same database with an integrated enrollment front-end deployed elsewhere, but programmed to be orchestrated into one seamless enrollment system.

        Along the years, different update iterations of the application was requested and delivered. These feature requests include updates like audit logs on all accounting and enrollment data, database integrity reports, build-in account management, accounting functions and summarization of payments.
        
        I am really proud of this project since it has came a long way since its initial deployment. I've started this project as a personal test for myself on my knowledge of Flutter Web, with no intention of releasing it to the school; but when I initially implemented the basic usecases needed, I presented it to my friend (who was working in the school) just to share as a personal achievement, but they were impressed to the point of actually using paying and using for the application.
        
        Initial deployment for the application started on July 2021; and the application is still in use until this day.`,
        "languages": ["Flutter", "Firebase"],
        "img": [
            "https://lh3.googleusercontent.com/d/1PfDj8GDaIJjSIaRiNXDdaQMpYHE6xH4F",
            "https://lh3.googleusercontent.com/d/1JO7w4s0eslR2BqitiHRX1VJHlmRTLxnk",
            "https://lh3.googleusercontent.com/d/1LY0lez2JBK8HzaA5Q30e-0EYt6VPQmdX",

        ],
        "website": "https://cdscdbdb.web.app/",
    },
    {
        "id": "cdscdb-enrollment",
        "title": "CDSCDB Enrollment Form",
        "descShort": "An online enrollment form for students to enter information and documents.",
        "descLong": `The CDSCDB Enrollment Form allows students to enroll into a certain semester in the Quezon-based school of the Colegio de Santo Cristo de Burgos. All student types including college, senior highschool, junior highschool, and TESDA level students are allowed and can be handled by the system. New and existing students have appropriately separate logic upon data input and submission. The form directly sends data to the CDSCDB Database backend, for processing by the administrators and registrars of the school.

        With regards to enrollment form access control, the main CDSCDB Database system controls the access of all student types that the enrollment form can accommodate (e.g. disable for old college students, enable for new college students, enable for old TESDA students, etc.).

        This project is in close development of the CDSCDB Database system. Over the years, the form has mostly stayed the same; but the systems grew along the years, and new student types have been progressively added. As such, Appropriate duplicating and editing of enrollment form data and validation have been performed to the application.

        Initial deployment for the application started on 2022; and the application is still in use until this day.`,
        "languages": ["React JS", "Firebase", "Tailwind CSS"],
        "img": [
            "https://lh3.googleusercontent.com/d/1BmEra1SJWcWcTP5CB3QPYCsY28HcaPC_",
            "https://lh3.googleusercontent.com/d/1pUh2ieFZxVt9InCW6BH3zcJAvTc1vbNf",
            "https://lh3.googleusercontent.com/d/1A3QnS_OBZcdwky_de6UhmF1AI-wl37E7",
            "https://lh3.googleusercontent.com/d/1WzD17ooeyBTUn27v-7hWULCZKDi5n0Dx",
        ],
        "website": "https://cdscdbenrollment.web.app/",
    },
    {
        "id": "kairoscore",
        "title": "Kairos Core Website",
        "descShort": "Promotional website for the Kairos Cores NFT minting launch.",
        "descLong": `This website promotes the Kairos Cores NFT minting launch during the month of February in 2022. The webflow plan was provided, as well as a Figma wireframe, and I was commissioned to polish and improve the initial layout using CSS and implement a countdown timer for different events in the minting process using Javascript.

        This was one of the weird part-time commissions that I accepted during my time studying for my Bachelor's Degree. It was weird since the stance of the company towards NFTs and the use of blockchain technology did not really match my own interests, but I did what I had to do in order to deliver the tasks I signed up to do.
        
        This entry was added to my portfolio with permission from the Kairos Core team.`,
        "languages": ["Webflow", "CSS", "Javascript"],
        "img": [
            "https://lh3.googleusercontent.com/d/1r9xp6Jqe8Oke_vs0es2q-DC9HcLs_ZyZ",
            "https://lh3.googleusercontent.com/d/1rWsksXIIR_uJ8wtQ--ThVSj_jdXAh7Bd",
            "https://lh3.googleusercontent.com/d/1Ln6kGgPOoN9brxiqNRlelJD3bfkKSKoO",
        ],
        "website": "https://www.kairoscore.xyz/",
    },
    {
        "id": "up-crest-25",
        "title": "UP CREST Photoshow",
        "descShort": "A virtual photoshow for the 25th Anniversary of UP CREST.",
        "descLong": `This website serves as a virtual photoshow for the 25th Anniversary of UP CREST, an organization I was part of during my last few years in college. The website features a timeline of events and activities along the organization's history, as well as an animated background to mimic the theme of one of Taylor Swift's music videos, as per the organization's request.

        For a bit of context, the photoshow was somewhat of an annual event for the organization that was held in the university campus; But since a certain pandemic was happening during this time, a physical photoshow was just not possible. So I proposed a virtual version of the annual photoshow which still highlights the organization's history. It was approved, thus I proceeded with the project, whilst taking full advantage of the online medium.
        `,
        "languages": ["React JS", "Tailwind CSS", "p5.js"],
        "img": [
            "https://lh3.googleusercontent.com/d/1wx1PIatFufyiNLKeUbiUJHV18H0coaTR",
            "https://lh3.googleusercontent.com/d/1EqC-7i4J_6H8GxCfzfmDgJEVu8i-WlXp",
            "https://lh3.googleusercontent.com/d/14O7kdW3E3vbGUUSGXKbS_djQX0MryCSJ",
        ],
        "website": "https://upcrest25.web.app/",
    },
    {
        "id": "i-cant-decide",
        "title": "I Can't Decide",
        "descShort": "A simple tool aims to help solve difficult decisions between choices.",
        "descLong": `I Can't Decide is a simple web application that aims to help you in making difficult decision between choices. The app takes in your choices, what your factors are, which factors matter the most to you, rating each choice per factor, then generating a weighted sum to give your choices a numerical value.
        
        The idea for this application stemmed from the need of deciding between two or more options where the factors to consider are too complex to mentally think over. The application considers the fact that not all factors are of equal value to the decider, and that each option has different weights in different factors. This was just a fun little project that I wanted to make during the times where I actually had free time.`,
        "languages": ["React JS", "Tailwind CSS", "p5.js"],
        "img": [
            "https://lh3.googleusercontent.com/d/1uK4xWSjS5JI6dtwXYjX33kFGjQHOPM_V",
            "https://lh3.googleusercontent.com/d/1xr1f-uTDDA6XmNyFHKBItg9gINJsqoY2",
            "https://lh3.googleusercontent.com/d/1hh-ElCnYYWmNwJTrclslfuYilvfrsi17",
        ],
        "github": "https://github.com/OverdriveNGain/i-cant-decide",
        "website": "https://i-cant-decide.web.app/",
    },
    {
        "id": "website-portfolio",
        "title": "Website Portfolio",
        "descShort": "This website you are on right now!",
        "descLong": `Literally, this website. This website serves as my online portfolio where you can see an overview of my skills and projects, as well as the option to send me a message, or download my CV as a PDF file.
        
        I hope you are enjoying your stay :)`,
        "languages": ["React JS", "Bootstrap", "SASS", "p5.js"],
        "DO_NOT_USE_github": "https://github.com/OverdriveNGain/portfolio"
    },
    {
        "id": "simple-money-counter",
        "title": "Simple Money Counter",
        "descShort": "A simple money counter app that adds up different cash denominations.",
        "descLong": `This is a simple android application that helps you counts physical cash with single taps for each denomination. The app also includes an easy-to-access calculator at a moments notice.
        
        This was my actual first mobile application created using Flutter. I always wanted to learn mobile app development; and the moment I finished my online course, this was the app idea that I wanted to try and create first (my dad gave me the idea, thanks dad!).
        
        This app is uploaded to the Google Play Store; although it may have been taken down since yearly updates are needed for all applications.`,
        "languages": ["Flutter"],
        "DO_NOT_USE_playstore": "https://play.google.com/store/apps/details?id=com.jeremydevelops.simplemoneycounter",
        // "github": "https://github.com/OverdriveNGain/counter-calc",
        "img": [
            "https://lh3.googleusercontent.com/d/1LDQwo0PF8nGWi1lasNa6R_Jb1nw2LgS3",
            "https://lh3.googleusercontent.com/d/1lHo9kgjF-uh8vNjrwnMFvclfBmmjW2O6",
            "https://lh3.googleusercontent.com/d/1X1vtdNIJyhUzwM9mdQrzyzrL4AiDRNH-"
        ],
        "imgPortrait": true
    },
    // {
    //     "id": "buwad-republic",
    //     "title": "Buwad Republic",
    //     "descShort": "A promotional website for a growing dried fish business",
    //     "descLong": "This promotional website for a growing dried fish (buwad) business was aimed to help with the online order management of this business. It features a simple product selection with an add-to-cart design, which also integrates into a local order delivery service.",
    //     "languages": ["Flutter", "Firebase"],
    //     // "website": "https://buwad-republic.web.app/",
    //     "img": [
    //         "https://lh3.googleusercontent.com/d/1zJkTLpSRr9CE1emI62uEL05MrpPL2Iig",
    //         "https://lh3.googleusercontent.com/d/1o53HYkCmnx1gc_H5zWhkQjIpfeOadbZt",
    //         "https://lh3.googleusercontent.com/d/1JNptpt0ZoJo5RIfMg7UrpNLp7gVNoKFx",
    //         "https://lh3.googleusercontent.com/d/1rt19o5e_Skcz_gTSWFdNh5Knl2nRnJTH"
    //     ]
    // },
    {
        "id": "loose-blocks",
        "title": "Loose Blocks",
        "descShort": "A classic game without the training wheels",
        "descLong": `This game was essentially a Tetris clone, but the pieces are not constrained to 90 degree rotations. This *does* make the game a lot harder, but it makes the line clears much more fun.
        
        This game was one of the few projects that I have completed with Unity 3D; complete with self-produced assets.

        This app is uploaded to the Google Play Store; although it may have been taken down since yearly updates are needed for all applications.`,
        "languages": ["Unity 3D", "Adobe Illustrator"],
        "DO_NOT_USE_playstore": "https://play.google.com/store/apps/details?id=com.jeremydevelops.looseblocks",
        "img": [
            "https://lh3.googleusercontent.com/d/1bI_fOm0DWA1Gnu1B4O3z7T5Z5IhaAYvE",
            "https://lh3.googleusercontent.com/d/1S2ZZpoXhNBY3_ClNMtLVAJUWYX2cwa6A",
            "https://lh3.googleusercontent.com/d/13j1W3_MknfUzaRNySZ8d4EmNZgSHgoWN",
            "https://lh3.googleusercontent.com/d/1ivtWxkplYa1N6Ijvi5Csjam0q-LF8YPn"
        ],
        "imgPortrait": true
    },
    {
        "id": "cell-trace",
        "title": "Cell Trace",
        "descShort": "A simple mobile puzzle game",
        "descLong": `This mobile puzzle game is a game created in late 2019 that was created using Unity 3D. The goal is to clear the grid of all numbered cells by tracing your finger to each cell by that amount of times per cell, without lifting your finger.
        
        This was my first mobile game app, and its progress was almost entirely done during the Christmas season of 2019.

        This app is uploaded to the Google Play Store; although it may have been taken down since yearly updates are needed for all applications.`,
        "languages": ["Unity 3D", "Adobe Illustrator"],
        "DO_NOT_USE_playstore": "https://play.google.com/store/apps/details?id=com.jeremydevelops.celltrace",
        "img": [
            "https://lh3.googleusercontent.com/d/1T7Eu6_OAzt9H2o4rgH4pE5BwP9SHa2hp",
            "https://lh3.googleusercontent.com/d/1MRNwUd5v74Fg9vxgpkG5JrTNfyzRwgW8",
            "https://lh3.googleusercontent.com/d/1ob-Vhs04d9zfA0cU8_HaCBCZIfePLEA3",
            "https://lh3.googleusercontent.com/d/1MhgifHRS_pdrtqVZXgyvoNCOO07U6zkG"
        ],
        "imgPortrait": true
    },
    {
        "id": "loose-tower",
        "title": "Loose Tower",
        "descShort": "A 3D mobile game where you create a tower",
        "descLong": `In this mobile game, you carefully drop 3D Tetris pieces on an ever-growing 3D tower. If any of the pieces fall down from the tower, you lose. It was somewhat like the illegal child of Tetris and Stack, another famous mobile game.
        
        This was done during my free time in my early college years, and is the only game that I have fully completed in full 3D.

        This app is uploaded to the Google Play Store; although it may have been taken down since yearly updates are needed for all applications."`,
        "languages": ["Unity 3D", "Adobe Illustrator"],
        "DO_NOT_USE_playstore": "https://play.google.com/store/apps/details?id=com.jeremydevelops.loosetower",
        "img": [
            "https://lh3.googleusercontent.com/d/1ZfDGpPkO1mduScsUl_WbdfCUN2beYFFA",
            "https://lh3.googleusercontent.com/d/1q-tHsPYNj0zPbC7m8zj-iCIO3BkrM39-",
            "https://lh3.googleusercontent.com/d/1py_vTEWEfxhGwQQRfqcowCSmPmfnpQCO",
            "https://lh3.googleusercontent.com/d/1NJ5i0T1s0AZMp7rkEkw3Fhdr6kd6e7zA"
        ],
        "imgPortrait": true
    },
    // {
    //     "id": "just-crafts-ph",
    //     "title": "Just Crafts PH App",
    //     "descShort": "A mobile app that showcases a sticker business' designs",
    //     "descLong": `This mobile app showcases the sticker designs of Just Crafts PH, a sticker business which provides various designs and sticker categories.
        
    //     This was one of my personal mobile app projects to test my skills in Flutter. As to the concerning sticker business, it   was me and my ex-girlfriend's business. She's now my ex-girlfriend, because she's now my wife :)`,
    //     "languages": ["Flutter"]
    // }
];
const allProjects = () => _projects;

const getProject = (id) => _projects.find((proj) => proj.id === id);

export { allProjects, getProject };