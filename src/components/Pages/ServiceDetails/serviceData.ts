export type Service = {
  id: string;
  title: string;
  description: string;
  videoSrc: string;
  poster: string;
  tags: { title: string; description: string }[];
  bannerTitle: string;
};

export const services: Service[] = [
  {
    id: '01',
    title: 'Live Action Video Production',
    bannerTitle: 'Live Action Video Production',
    description:
      'We bring stories to life through cinematic filming, authentic performances and purposeful storytelling',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'Corporate Films',
        description:
          "Bring your company's people, purpose and vision into focus",
      },
      {
        title: 'Brand Films',
        description:
          'Authentic stories that give your brand a human connection.',
      },
      {
        title: 'Commercial Productions',
        description:
          'Cinematic commercials crafted to capture attention and inspire action.',
      },
      {
        title: 'Product Videos',
        description:
          'Showcase your products through compelling visuals and real-world experiences.',
      },
      {
        title: 'Event Films',
        description: 'Capture the energy, emotion and moments that matter.',
      },
      {
        title: 'Customer Testimonials',
        description:
          'Real voices. Genuine experiences. Stories that build trust.',
      },
      {
        title: 'Interviews & Documentaries',
        description:
          'Meaningful conversations and real stories told with cinematic depth.',
      },
      {
        title: 'Training & Educational Videos',
        description:
          'Turn information into engaging, easy-to-follow visual experiences.',
      },
    ],
  },
  {
    id: '02',
    title: 'Commercial & Product Videos',
    bannerTitle: 'Commercial & Product Video Production',
    description:
      'From product films to brand commercials, we create videos that turn attention into connection.',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-modern-smartphone-with-a-green-screen-42993-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'Commercial video production',
        description:
          'Attention grabbing commercials that make brands impossible to overlook',
      },
      {
        title: 'Corporate films',
        description:
          'Stories that communicate your company, people and purpose',
      },
      {
        title: 'Promotional videos',
        description:
          'Engaging films that showcase your brand, product or initiative.',
      },
      {
        title: 'Brand storytelling',
        description:
          'Human stories designed to build connection, emotion and trust',
      },
      {
        title: 'Product launches',
        description: 'Launch films that turn products into memorable moments.',
      },
      {
        title: 'Training videos',
        description:
          'Make complex information simple, engaging and easy to follow',
      },
      {
        title: 'Marketing campaigns',
        description:
          'Creative campaigns designed to engage across every channel',
      },
      {
        title: 'Customer testimonials',
        description: 'Real customer voices that build trust and credibility',
      },
    ],
  },
  {
    id: '03',
    title: 'Event Coverage & Content Creation',
    bannerTitle: 'Event Films & Coverage',
    description:
      'From corporate events to live experiences, we capture the energy, emotion and moments worth reliving',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-dj-mixing-music-at-a-club-festival-42698-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'Corporate Event Coverage',
        description:
          'Capture the people, purpose and moments that define your event.',
      },
      {
        title: 'Conferences & Summits',
        description:
          'Turn keynotes, conversations and insights into lasting content.',
      },
      {
        title: 'Product Launch Events',
        description:
          'Capture the excitement and energy of your next big reveal.',
      },
      {
        title: 'Product Videos',
        description:
          'Showcase your products through compelling visuals and real-world experiences.',
      },
      {
        title: 'Training & Educational Videos',
        description:
          'Turn information into engaging, easy-to-follow visual experiences.',
      },
      {
        title: 'Event Films',
        description: 'Capture the energy, emotion and moments that matter.',
      },
    ],
  },
  {
    id: '04',
    title: 'Animation & Motion Graphics',
    bannerTitle: 'Motion Graphics & Animation',
    description:
      'Bringing ideas to life through expressive animation, motion design and captivating visuals',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-tree-branches-in-the-breeze-1188-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: '2D Motion Graphics & Animation',
        description:
          'Animated visuals, typography, infographics and storytelling',
      },
      {
        title: '3D Animation & CGI',
        description:
          'Product visualisation, 3D environments and cinematic animation',
      },
      {
        title: 'Explainer Videos',
        description: 'Simplifying complex products, services and ideas',
      },
      {
        title: 'Logo & Brand Animation',
        description: 'Animated identities, brand assets and visual systems',
      },
      {
        title: 'Animated Ads & Social Content',
        description: 'Motion-led advertising, campaigns and short-form content',
      },
    ],
  },
  {
    id: '05',
    title: 'AI Powered Content Creation',
    bannerTitle: 'AI Powered Video Production',
    description:
      'Combining human creativity and AI to create extraordinary videos and visual experiences',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-with-charts-and-data-31913-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'AI-Generated Videos',
        description:
          'Create cinematic visuals, scenes and complete videos using generative AI.',
      },
      {
        title: 'AI Animation & Visual Storytelling',
        description:
          'Transform concepts, images and creative ideas into engaging animated sequences.',
      },
      {
        title: 'AI Avatars & Virtual Presenters',
        description:
          'Produce presenter-led videos for training, communication and marketing without traditional filming.',
      },
      {
        title: 'AI Visual Effects & Scene Generation',
        description:
          'Create imaginative environments, enhance footage and produce visuals beyond conventional filming',
      },
      {
        title: 'AI Video Localisation',
        description:
          'Adapt videos for different languages and audiences using AI dubbing, lip-sync and voice generation',
      },
    ],
  },
  {
    id: '06',
    title: 'Virtual Production And Interactive Design',
    bannerTitle: 'Virtual Production & Interactive Design',
    description:
      'Blending physical and digital worlds to create immersive, interactive visual experiences',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'Virtual Sets & Environments',
        description:
          'Create immersive digital sets & realistic environments for films, commercials & branded content',
      },
      {
        title: 'Real-Time 3D Production',
        description:
          'Build and render interactive 3D scenes in real time for dynamic visual storytelling',
      },
      {
        title: 'Extended Reality (XR) Experiences',
        description:
          'Blend physical and digital worlds through augmented, virtual and mixed reality experiences',
      },
      {
        title: 'Interactive 3D Experiences',
        description:
          'Create engaging, user-controlled experiences for products, brands and digital platforms',
      },
      {
        title: 'Virtual Product Showcases',
        description:
          'Bring products to life through immersive 3D demonstrations, virtual showrooms and interactive presentations',
      },
    ],
  },
  {
    id: '07',
    title: 'Post Production Services',
    bannerTitle: 'Post Production Services',
    description:
      'Transforming raw footage into compelling stories through creative editing and cinematic finishing',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'Video Editing',
        description: 'Turn raw footage into compelling, seamless stories',
      },
      {
        title: 'Visual Effects & Compositing',
        description: 'Blend reality with creative digital effects',
      },
      {
        title: 'Colour Grading',
        description: 'Set the mood and enhance every frame',
      },
      {
        title: 'Sound Design & Mixing',
        description: 'Create immersive audio experiences.',
      },
      {
        title: 'Video Cleanup & Enhancement',
        description: 'Refine footage for a polished final look.',
      },
    ],
  },
  {
    id: '08',
    title: 'SaaS & Technology Content',
    bannerTitle: 'SaaS & Technology Videos',
    description:
      'Making complex technology simple through engaging explainers, product demos and visual storytelling',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-39962-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'SaaS Explainer Videos',
        description: 'Simplify complex software into clear, engaging stories.',
      },
      {
        title: 'Product Demo Videos',
        description: 'Showcase features, workflows and product benefits.',
      },
      {
        title: 'UI & App Animations',
        description: 'Bring digital interfaces and user experiences to life',
      },
      {
        title: 'Software Tutorial Videos',
        description:
          'Guide users through features with easy-to-follow walkthroughs.',
      },
      {
        title: 'Video Cleanup & Enhancement',
        description:
          'Introduce new products and features with impactful visuals.',
      },
    ],
  },
  {
    id: '09',
    title: 'Cyber Security Awareness Content',
    bannerTitle: 'Cybersecurity Awareness Videos',
    description:
      'Making cyber threats easier to understand through engaging stories that inspire safer actions',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-server-room-rack-with-flashing-led-lights-42544-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'Security Awareness Videos',
        description: 'Make everyday cyber risks easy to understand',
      },
      {
        title: 'Phishing Awareness Videos',
        description: 'Help employees recognise scams and suspicious messages',
      },
      {
        title: 'Cybersecurity Explainer Videos',
        description:
          'Simplify complex security concepts through engaging visuals',
      },
      {
        title: 'Employee Security Training Videos',
        description:
          'Build safer digital habits with practical, relatable scenarios.',
      },
      {
        title: 'Cybersecurity Campaign Videos',
        description:
          'Drive awareness through memorable, action-focused content.',
      },
    ],
  },
  {
    id: '10',
    title: 'Social Media & Content Creation',
    bannerTitle: 'Social Media Video Production',
    description:
      'We create scroll-stopping videos that grab attention, spark engagement and make every second count.',
    videoSrc:
      'https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smartphone-scrolling-social-media-42994-large.mp4',
    poster:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80',
    tags: [
      {
        title: 'Social Media Reels & Shorts',
        description:
          'Create scroll-stopping videos for Instagram, YouTube and more',
      },
      {
        title: 'Social Media Video Ads',
        description:
          'Turn creative ideas into attention-grabbing, conversion-focused ads',
      },
      {
        title: 'Branded Social Content',
        description:
          "Bring your brand's personality to life through engaging videos",
      },
      {
        title: 'Product & Promotional Videos',
        description:
          'Showcase products, offers and launches in bite-sized formats',
      },
      {
        title: 'Social Media Campaign Videos',
        description:
          'Build connected video stories across platforms and campaigns',
      },
      {
        title: 'Motion Graphics for Social Media',
        description: 'Make messages stand out with bold, animated visuals',
      },
    ],
  },
];
