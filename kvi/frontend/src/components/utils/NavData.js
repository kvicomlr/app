


const NavData = [
  {
    id:1,
    navitem: 'Technology Consulting',
    submenu: true,
    portfolio:'Bring the best Tech to your environment',
    src:`https://media.1lives.us/wp-content/uploads/2022/11/hero.png`,
    sublinks: [
      {
        id:11,
        subnav: 'FinTech',
        link: '/fintech',
      },
      {
        id:12,
        subnav: 'Digital Transformation',
        link: '/digital',
      },
      {
        id:13,
        subnav: 'Procurement',
        link: '/cloud',
      },
      {
        id:14,
        subnav: 'Training & Certifications',
        link: '/training',
      },
    
     
    ],
  },
    {
      id:2,
      navitem: 'DevOps',
      submenu: true,
      portfolio:'DevOps Services',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/devops.png`,
      sublinks: [
        {
          id:21,
          subnav: 'Web',
          link: '/web',
          
        },
        {
          id:22,
          subnav: 'Android',
          link: '/android',
        },
       
        {
          id:23,
          subnav: 'iOS',
          link: '/ios',
        },
        {
          id:24,
          subnav: 'SaaS',
          link: '/saas',
        }
       
      ],
    },
    {
      id:3,
      navitem: 'SECaaS',
      submenu: true,
      portfolio:'Security as a Service',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/secaas.png`,
      sublinks: [
       
        {
          id:31,
          subnav: 'Secure Websites & APIs',
          link: '/swapi',
        },
        {
          id:32,
          subnav: 'Zero Trust Access',
          link: '/zta',
        },
        
        {
          id:33,
          subnav: 'L3 DDoS Mitigation',
          link: '/ddoS-mitigation',
        },
        
        {
          id:34,
          subnav: 'Phishing-resistant MFA',
          link: '/prmfa',
        },
       
      ],
    },
    {
      id:4,
      navitem: 'Assistive Technology',
      submenu: true,
      portfolio:'Virtual Memory',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/mind-e1669148523677.png`,
      sublinks: [
       
        {
          id:41,
          subnav: 'Learning',
          link: '/learning',
        },
        {
          id:42,
          subnav: 'Communication',
          link: '/communication',
        },
        {
          id:43,
          subnav: 'Cognitive',
          link: '/cognitive',
        },
       
        {
          id:44,
          subnav: 'Low Vision',
          link: '/low-vision',
        },
       
      
       
      ],
    },
    {
      id:5,
      navitem: 'Solar Energy',
      submenu: true,
      portfolio:'Solar Energy Management',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/solar-scaled-e1669149322142.jpg`,
      sublinks: [
        {
          id:51,
          subnav: 'Design Software',
          link: '/design-software',
        },
        {
          id:52,
          subnav: 'Asset Management',
          link: '/asset-mgmt',
        },
        {
          id:53,
          subnav: 'Field Service',
          link: '/field-service',
        },
        {
          id:54,
          subnav: 'Solar Monitoring',
          link: '/solar-monitor',
        },
      ],
    },
   
    {
      id:6,
      navitem: 'Shop Now',
      submenu: true,
      portfolio:'Lowest Cost | Quality Products & Services!',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/shop.png`,
      sublinks: [
        {
          id:61,
          subnav: 'Software',
          link: '/software',
        },
        {
          id:62,
          subnav: 'Hardware',
          link: '/hardware',
        },
        {
          id:63,
          subnav: 'General Merchandise',
          link: '/gm',
        },
       
        
       
      ],
    },
    
    {
      id:7,
      navitem: 'About Us',
      submenu: true,
      portfolio:'We want to be part of your success!',
      src:`https://media.1lives.us/wp-content/uploads/2022/11/about.png`,
      sublinks: [
       
        {
          id:71,
          subnav: 'Projects',
          link: '/projects',
        },
        {
          id:72,
          subnav: 'Careers',
          link: '/careers',
        },
        {
          id:73,
          subnav: 'Contact Us',
          link: '/contact',
        },
      
       
      ],
    },
   
  ];
  
  export default NavData;