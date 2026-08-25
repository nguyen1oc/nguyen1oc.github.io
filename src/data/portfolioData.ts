export interface EducationInfo {
  school: string;
  degree: string;
  period: string;
  honors: string;
}

export interface PersonalInfo {
  fullName: string;
  englishName: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  phone: string;
  dob: string;
  location: string;
  github: string;
  linkedin: string;
  facebook: string;
  whoAmI: string;
  whatImPassionateAbout: string;
  whatImLookingFor: string;
  education: EducationInfo;
  avatarLandscapeLocal: string;
  avatarFallbackLandscape: string;
}

export interface TechCategory {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  points: string[];
  skills: string[];
}

export interface ProjectItem {
  title: string;
  subtitle?: string;
  period: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  badge?: string;
}

export interface PhotoItem {
  id: string;
  title: string;
  location: string;
  year: string;
  caption: string;
  story: string;
  cameraInfo: string;
  localPath: string;
  fallbackUrl: string;
}

export interface MovieItem {
  id: string;
  title: string;
  director: string;
  releaseYear: number;
  category: string;
  quote?: string;
  localPath: string;
  fallbackUrl: string;
}

export interface SongItem {
  title: string;
  youtubeUrl: string;
}

export interface ArtistItem {
  id: string;
  name: string;
  genre: string;
  bio: string;
  localPath: string;
  avatarUrl: string;
  topTracks: SongItem[];
}

export const PERSONAL_INFO: PersonalInfo = {
  fullName: 'Nguyen Thien Loc',
  englishName: 'Nguyen Thien Loc',
  title: 'AI Engineer',
  tagline: 'Senior from HCMUT.',
  bio: 'Final-year Computer Science student at HCMUT with hands-on experience in LLM Systems & Multi-Agent Architectures (LangGraph, MCP, A2A, RAG) and Computer Vision / Deep Learning (Adversarial Training, Generative Models). Backed by enterprise training at VinUniversity and production internship experience, seeking to leverage strong modeling foundations, software engineering, and an AI product mindset to build scalable, high-impact intelligent systems in production.',
  email: 'nguyenloc1606.cse@gmail.com',
  phone: '0933366454',
  dob: 'June 16, 2004',
  location: 'Ho Chi Minh City, Vietnam',
  github: 'https://github.com/nguyen1oc',
  linkedin: 'https://www.linkedin.com/in/nguyen-thien-loc',
  facebook: 'https://www.facebook.com/BKFCBuiThiXuan',
  whoAmI: 'Final-year Computer Science student at Ho Chi Minh City University of Technology (HCMUT - VNU-HCM) with strong academic standing and real-world engineering experience in AI Infrastructure, Multi-Agent systems, and Computer Vision.',
  whatImPassionateAbout: 'Architecting robust AI agent systems with Model Context Protocol (MCP), building production-grade Hybrid RAG pipelines, and training generative deep learning models that solve tangible engineering challenges.',
  whatImLookingFor: 'Seeking AI Engineer and Software Engineer opportunities where I can apply end-to-end LLM orchestration, scalable backend architectures, and deep learning into production environments.',
  education: {
    school: 'Ho Chi Minh City University of Technology (VNU - HCMUT)',
    degree: 'Bachelor of Computer Science',
    period: 'Sep. 2022 — Oct. 2026',
    honors: 'Outstanding Academic Performance 2024 — 2025',
  },
  avatarLandscapeLocal: '/images/avatar/landscape_avatar.jpg',
  avatarFallbackLandscape: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
};

// Exact 4 Categories from User's CV
export const TECH_CATEGORIES: TechCategory[] = [
  {
    category: 'Languages & Frameworks',
    skills: ['Python', 'C++', 'SQL', 'PyTorch', 'FastAPI', 'Scikit-learn'],
  },
  {
    category: 'LLM & Agent Systems',
    skills: ['LangGraph', 'Model Context Protocol (MCP)', 'Agent-to-Agent (A2A)', 'RAG', 'LlamaIndex', 'AI Guardrails'],
  },
  {
    category: 'Databases & Observability',
    skills: ['PostgreSQL', 'Redis', 'Qdrant', 'Langfuse'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['Google Cloud (GCP)', 'Terraform', 'Docker', 'Playwright', 'CI/CD', 'Linux'],
  },
];

// Exact 4 Experiences from main.tex
export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'VINUNIVERSITY - AI in Action Program Cohort 3',
    role: 'AI Talent (Track 2: AI Infrastructure)',
    period: 'Jul. 2026 — Present',
    location: 'Ho Chi Minh City, Vietnam',
    points: [
      'Completed an intensive 12-week program by Vingroup & VinUniversity, built around global SFIA standards and an end-to-end AI product mindset.',
      'Phase 1 (Foundations & Product): Built and evaluated LLM application pipelines, Multi-Agent workflows (MCP, A2A), Prompt Engineering, and AI Safety/Guardrails.',
      'Phase 2 (Track 2: AI Infrastructure): Provisioned cloud AI infrastructure on GCP via Terraform, engineered Data Lakehouses (Delta Lake, Iceberg), and managed Vector/Feature Stores (Qdrant, Feast).',
    ],
    skills: ['GCP', 'Terraform', 'MCP', 'A2A', 'Qdrant', 'Delta Lake', 'Feast'],
  },
  {
    company: 'bTaskee',
    role: 'AI Engineer Intern',
    period: 'May 2026 — Jul. 2026',
    location: 'Ho Chi Minh City, Vietnam',
    points: [
      'Developed a Hybrid RAG pipeline (Dense + BM25 Sparse via Qdrant & LlamaIndex) to accurately match unstructured customer complaints with relevant Tasker training modules.',
      'Built a FastMCP tool server that standardized issue extraction, vector retrieval, and LLM verification for autonomous multi-agent execution.',
      'Orchestrated Agent-to-Agent (A2A) multi-agent workflows on an asynchronous Kanban engine to automate test-case generation and Playwright execution.',
      'Engineered robust LLM pipelines with strict JSON schema validation, provider fallback mechanisms, and Langfuse observability.',
    ],
    skills: ['Hybrid RAG', 'Qdrant', 'LlamaIndex', 'FastMCP', 'A2A', 'Playwright', 'Langfuse'],
  },
  {
    company: 'DFM Engineering',
    role: 'AI Engineer Intern',
    period: 'Apr. 2025 — Jul. 2025',
    location: 'Ho Chi Minh City, Vietnam',
    points: [
      'Fine-tuned a Pix2Pix (cGAN) model to translate 2D architectural layouts into scaffold structure maps, supporting automated construction planning.',
      'Developed C# AutoCAD automation scripts to generate 3D slicing workflows, reducing manual modeling effort.',
    ],
    skills: ['Pix2Pix cGAN', 'PyTorch', 'C#', 'AutoCAD API', 'CUDA'],
  },
  {
    company: 'Grab',
    role: 'Grab Tech Bootcamp 2025 (Top 4/14 teams)',
    period: 'Apr. 2025 — May 2025',
    location: 'Ho Chi Minh City, Vietnam',
    points: [
      'Unipath: Developed an exam analytics platform for score prediction and personalized university admission recommendations.',
      'Built an end-to-end ETL pipeline using Apache Airflow, Selenium, and BeautifulSoup to automate large-scale data collection and processing.',
      'Trained and optimized an XGBoost regression model for admission cutoff prediction, achieving Top 4/14 teams.',
    ],
    skills: ['XGBoost', 'Apache Airflow', 'Selenium', 'ETL', 'Python'],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'ViVi: Multi-Agent Test-Drive Booking Assistant',
    subtitle: 'Automated conversational agent with multi-step slot scheduling & 4-tier guardrails',
    period: 'Aug. 2026',
    badge: 'LangGraph & FastMCP',
    description: 'Architected a stateful LangGraph multi-agent system with skill-based routing, intent classification, and sensitive policies coordinating a 9-step booking state machine. Implemented real-time concurrency with atomic slot reservations (Redis/PostgreSQL), SSE token streaming, and 4-layer AI Guardrail.',
    techStack: ['FastAPI', 'LangGraph', 'PostgreSQL', 'Redis', 'GCP', 'React'],
    demoUrl: 'https://c3-app-053.pages.dev',
  },
  {
    title: 'Capstone Project: Adversarial Training for Face Super-Resolution',
    subtitle: 'High-Fidelity Human Face Hallucination with Frequency-Aware Adversarial Loss',
    period: 'May 2026',
    badge: 'PyTorch & CUDA',
    description: 'Conducted a comprehensive benchmark of state-of-the-art Face Super-Resolution models. Proposed an adversarial training strategy to balance perceptual realism and identity preservation, integrating SPARNet and CTCNet evaluated on CelebA, HELEN, and FFHQ.',
    techStack: ['Python', 'PyTorch', 'CUDA', 'SPARNet', 'CTCNet', 'LPIPS / FID'],
    demoUrl: 'https://github.com/nguyen1oc',
  },
];

export const PHOTOS: PhotoItem[] = [
  {
    id: 'p1',
    title: 'Saigon Alley Golden Hour',
    location: 'District 3, Ho Chi Minh City',
    year: '2024',
    caption: 'Soft golden light cutting through electric wires and narrow heritage corridors.',
    story: 'Caught between afternoon rain and twilight, the low sun revealed intricate textures of old wooden shutters and hanging wires that characterize central Saigon.',
    cameraInfo: 'Fujifilm X-T30 II • 35mm f/2 • 1/250s ISO 200',
    localPath: '/images/photography/photo1.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p2',
    title: 'Neon Crossing at Midnight',
    location: 'Nguyen Hue Boulevard, HCMC',
    year: '2024',
    caption: 'Reflections on wet asphalt after a sudden tropical downpour.',
    story: 'Walking with an umbrella in one hand and the camera in the other, capturing the vibrant neon signs bleeding into rain puddles.',
    cameraInfo: 'Sony A7 IV • 50mm f/1.4 GM • 1/160s ISO 800',
    localPath: '/images/photography/photo2.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p3',
    title: 'Morning Market Rhythm',
    location: 'Ben Thanh, District 1',
    year: '2024',
    caption: 'Steam rising from fresh coffee kettles in early dawn bustle.',
    story: 'The quiet energy of street vendors prepping before the city wakes up. Street photography at its most sincere.',
    cameraInfo: 'Fujifilm X-T30 II • 23mm f/1.4 • 1/400s ISO 400',
    localPath: '/images/photography/photo3.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p4',
    title: 'Architectural Shadows & Steel',
    location: 'Thu Thiem Bridge, HCMC',
    year: '2024',
    caption: 'Geometric silhouettes against modern skyline structures.',
    story: 'A study in brutalist concrete lines contrasting with the gentle curves of the riverbank.',
    cameraInfo: 'Sony A7 IV • 24-70mm f/2.8 • 1/500s ISO 100',
    localPath: '/images/photography/photo4.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p5',
    title: 'Solitude on the Balcony',
    location: 'Old French Apartment, District 1',
    year: '2023',
    caption: 'A quiet pause amidst the restless noise of a 10-million metropolis.',
    story: 'Looking up from a cafe, framing an elderly resident watering bougainvillea flowers three floors above street chaos.',
    cameraInfo: 'Fujifilm X-T30 II • 50mm f/2 • 1/320s ISO 160',
    localPath: '/images/photography/photo5.jpg',
    fallbackUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop&q=80',
  },
];

// 16 Curated Iconic Films (Nolan filmography, The Hobbit, 300, Amazing Spider-Man, etc.)
export const MOVIES: MovieItem[] = [
  {
    id: 'm1',
    title: 'Oppenheimer',
    director: 'Christopher Nolan',
    releaseYear: 2023,
    category: 'Biography & History',
    quote: 'Now I am become Death, the destroyer of worlds.',
    localPath: '/images/movies/oppenheimer.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg',
  },
  {
    id: 'm2',
    title: 'Interstellar',
    director: 'Christopher Nolan',
    releaseYear: 2014,
    category: 'Sci-Fi & Space',
    quote: 'Do not go gentle into that good night. Rage, rage against the dying of the light.',
    localPath: '/images/movies/interstellar.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
  },
  {
    id: 'm3',
    title: 'Inception',
    director: 'Christopher Nolan',
    releaseYear: 2010,
    category: 'Sci-Fi & Thriller',
    quote: 'An idea is like a virus. Resilient. Highly contagious.',
    localPath: '/images/movies/inception.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg',
  },
  {
    id: 'm4',
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    releaseYear: 2008,
    category: 'Action & Crime',
    quote: 'Why so serious?',
    localPath: '/images/movies/dark_knight.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg',
  },
  {
    id: 'm5',
    title: 'Tenet',
    director: 'Christopher Nolan',
    releaseYear: 2020,
    category: 'Sci-Fi & Action',
    quote: 'Don’t try to understand it. Feel it.',
    localPath: '/images/movies/tenet.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
  },
  {
    id: 'm6',
    title: 'The Prestige',
    director: 'Christopher Nolan',
    releaseYear: 2006,
    category: 'Drama & Mystery',
    quote: 'Are you watching closely?',
    localPath: '/images/movies/the_prestige.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Prestige_poster.jpg',
  },
  {
    id: 'm7',
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    releaseYear: 1968,
    category: 'Sci-Fi & Masterpiece',
    quote: 'I am putting myself to the fullest possible use.',
    localPath: '/images/movies/space_odyssey.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/1/11/2001_A_Space_Odyssey_%281968%29.png',
  },
  {
    id: 'm8',
    title: 'The Hobbit: An Unexpected Journey',
    director: 'Peter Jackson',
    releaseYear: 2012,
    category: 'Fantasy & Adventure',
    quote: 'The world is not in your books and maps, it’s out there.',
    localPath: '/images/movies/hobbit.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg',
  },
  {
    id: 'm9',
    title: 'The Amazing Spider-Man',
    director: 'Marc Webb',
    releaseYear: 2012,
    category: 'Action & Superhero',
    quote: 'We all have secrets: the ones we keep... and the ones that are kept from us.',
    localPath: '/images/movies/amazing_spiderman.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e0/The_Amazing_Spider-Man_%28film%29_poster.jpg',
  },
  {
    id: 'm10',
    title: '300: Rise of an Empire',
    director: 'Noam Murro',
    releaseYear: 2014,
    category: 'Action & War',
    quote: 'Seize your glory!',
    localPath: '/images/movies/300_rise_empire.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/9/91/300_Rise_of_an_Empire.jpg',
  },
  {
    id: 'm11',
    title: 'When Life Gives You Tangerines',
    director: 'Kim Won-seok',
    releaseYear: 2025,
    category: 'Korean Drama & Romance',
    quote: 'A nostalgic journey through love and the seasons of Jeju Island.',
    localPath: '/images/movies/tangerines.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e8/When_Life_Gives_You_Tangerines_poster.png',
  },
  {
    id: 'm12',
    title: 'A Normal Family (Một Seoul Chưa Biết Đến)',
    director: 'Hur Jin-ho',
    releaseYear: 2024,
    category: 'Drama & Mystery',
    quote: 'When morals collapse, ordinary families face extraordinary choices.',
    localPath: '/images/movies/normal_family.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/d/dc/A_Normal_Family.jpeg',
  },
  {
    id: 'm13',
    title: 'Ám Ảnh (Obsession)',
    director: 'Kim Dae-woo',
    releaseYear: 2014,
    category: 'Romance & Drama Thriller',
    quote: 'A dangerous passion that consumes everything in its path.',
    localPath: '/images/movies/obsession.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/3/30/Obsessed_2014_film_poster.jpg',
  },
  {
    id: 'm14',
    title: 'Dunkirk',
    director: 'Christopher Nolan',
    releaseYear: 2017,
    category: 'War & History',
    quote: 'We shall never surrender.',
    localPath: '/images/movies/dunkirk.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg',
  },
  {
    id: 'm15',
    title: 'Memento',
    director: 'Christopher Nolan',
    releaseYear: 2000,
    category: 'Mystery & Psychological',
    quote: 'We all need mirrors to remind ourselves who we are.',
    localPath: '/images/movies/memento.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c7/Memento_poster.jpg',
  },
  {
    id: 'm16',
    title: 'Blade Runner 2049',
    director: 'Denis Villeneuve',
    releaseYear: 2017,
    category: 'Sci-Fi & Cyberpunk',
    quote: 'All the best memories are hers.',
    localPath: '/images/movies/bladerunner2049.jpg',
    fallbackUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png',
  },
];

// 16 Curated Vietnamese Indie & Hip-Hop Artists with Exact YouTube Channel Avatars
export const ARTISTS: ArtistItem[] = [
  {
    id: 'a1',
    name: 'Hải Sâm',
    genre: 'Indie Soul / R&B',
    bio: 'Giai điệu lãng đãng, mộc mạc và sâu lắng cho những buổi chiều muộn.',
    localPath: '/images/music/haisam.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/-YWsdwJt2EV8CDszrcccuwLzO_NI8Loh7agvnhmKm1rfpo2kbiDpj4rYhZN5JuUSNdgXQraiFg=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Cuối Chiều', youtubeUrl: 'https://www.youtube.com/results?search_query=Hai+Sam+Cuoi+Chieu' },
      { title: 'Thế Thôi', youtubeUrl: 'https://www.youtube.com/results?search_query=Hai+Sam+The+Thoi' },
      { title: 'Dù Cho Mai Về Sau', youtubeUrl: 'https://www.youtube.com/results?search_query=Hai+Sam+Du+Cho+Mai+Ve+Sau' },
      { title: 'Lãng Du', youtubeUrl: 'https://www.youtube.com/results?search_query=Hai+Sam+Lang+Du' },
    ],
  },
  {
    id: 'a2',
    name: 'Vũ.',
    genre: 'Indie Ballad / Acoustic',
    bio: 'Hoàng tử Indie Việt với những câu chuyện tình buồn da diết.',
    localPath: '/images/music/vu.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/bpKh5MyMojA9WcirbVyVO0I0F0ZqvIMLodbqT_g8pjEUXBNo2ZrZCmiDZ5PTo8lrCBdlTbMd3Q=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Bước Qua Mùa Cô Đơn', youtubeUrl: 'https://www.youtube.com/results?search_query=Vu+Buoc+Qua+Mua+Co+Don' },
      { title: 'Những Lời Hứa Bỏ Quên', youtubeUrl: 'https://www.youtube.com/results?search_query=Vu+Nhung+Loi+Hua+Bo+Quen' },
      { title: 'Lạ Lùng', youtubeUrl: 'https://www.youtube.com/results?search_query=Vu+La+Lung' },
      { title: 'Bước Qua Nhau', youtubeUrl: 'https://www.youtube.com/results?search_query=Vu+Buoc+Qua+Nhau' },
    ],
  },
  {
    id: 'a3',
    name: 'Thịnh Suy',
    genre: 'Lo-fi Acoustic / Indie',
    bio: 'Những lời tự tình mộc mạc bên tiếng đàn guitar phòng thu.',
    localPath: '/images/music/thinhsuy.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/U4kGEfFAvYvtrhPQzN6gwWWGcbqKJiVXv1izZbWcuHC3IWX_fR4pImZd6yH57137zbgrHgoM=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Một Đêm Say', youtubeUrl: 'https://www.youtube.com/results?search_query=Thinh+Suy+Mot+Dem+Say' },
      { title: 'Thắc Mắc', youtubeUrl: 'https://www.youtube.com/results?search_query=Thinh+Suy+Thac+Mac' },
      { title: 'Chuyện Rằng', youtubeUrl: 'https://www.youtube.com/results?search_query=Thinh+Suy+Chuyen+Rang' },
      { title: 'Thanh Xuân', youtubeUrl: 'https://www.youtube.com/results?search_query=Thinh+Suy+Thanh+Xuan' },
    ],
  },
  {
    id: 'a4',
    name: 'Kiên Trịnh',
    genre: 'Indie Pop / Storytelling',
    bio: 'Góc nhìn hóm hỉnh, chân thật và giàu chất thơ về cuộc sống thường nhật.',
    localPath: '/images/music/kien.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/SCZgrnxC9HPrTh8LQAfSRdK8zTTmuD2tuPn7WsWuVpE7W2d_a8PI-tRmeVl-cuYqFEv-CYD7wA=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Quả Tim Màu Lửa', youtubeUrl: 'https://www.youtube.com/results?search_query=Kien+Trinh+Qua+Tim+Mau+Lua' },
      { title: 'Tập Tành', youtubeUrl: 'https://www.youtube.com/results?search_query=Kien+Trinh+Tap+Tanh' },
      { title: 'Nghe Nhạc Anh Mỗi Khi Buồn Cười', youtubeUrl: 'https://www.youtube.com/results?search_query=Kien+Trinh+Nghe+Nhac+Anh+Moi+Khi+Buon+Cuoi' },
      { title: 'Em Ăn Cơm Chưa', youtubeUrl: 'https://www.youtube.com/results?search_query=Kien+Trinh+Em+An+Com+Chua' },
    ],
  },
  {
    id: 'a5',
    name: 'MCK // Nger',
    genre: 'Melodic Rap / Hip-Hop',
    bio: 'Âm hưởng autotune cảm xúc, năng lượng tuổi trẻ và chất riêng không thể trộn lẫn.',
    localPath: '/images/music/mck.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/7m3VPhjnofh-BoaovkOKbs42C3UUtvTguE1sUm-4pyLhhMdMI-cUST6uQxYOgHSFacorjiBVIQ=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Chìm Sâu', youtubeUrl: 'https://www.youtube.com/results?search_query=MCK+Chim+Sau' },
      { title: 'Tại Vì Sao', youtubeUrl: 'https://www.youtube.com/results?search_query=MCK+Tai+Vi+Sao' },
      { title: 'Suit & Tie', youtubeUrl: 'https://www.youtube.com/results?search_query=MCK+Suit+and+Tie' },
      { title: 'Anh Đã Ổn Hơn', youtubeUrl: 'https://www.youtube.com/results?search_query=MCK+Anh+Da+On+Hon' },
    ],
  },
  {
    id: 'a6',
    name: 'Lê Cát Trọng Lý',
    genre: 'Folk / Chamber Pop',
    bio: 'Không gian âm nhạc mộc mạc, triết lý nhân sinh và trong trẻo như suối nguồn.',
    localPath: '/images/music/lecattrongly.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/ZAajw4-f4nXjmNiHoOwECMnd8saL-SAOnilm5zD20sfUPLSPK-JI-pXJcRut8FtolKHPLEVGdg=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Chênh Vênh', youtubeUrl: 'https://www.youtube.com/results?search_query=Le+Cat+Trong+Ly+Chenh+Venh' },
      { title: 'Tám Chữ Có', youtubeUrl: 'https://www.youtube.com/results?search_query=Le+Cat+Trong+Ly+Tam+Chu+Co' },
      { title: 'Là Nghe Hoa Nở', youtubeUrl: 'https://www.youtube.com/results?search_query=Le+Cat+Trong+Ly+La+Nghe+Hoa+No' },
      { title: 'Chuyến Xe', youtubeUrl: 'https://www.youtube.com/results?search_query=Le+Cat+Trong+Ly+Chuyen+Xe' },
    ],
  },
  {
    id: 'a7',
    name: 'Da LAB',
    genre: 'Rap / Urban Pop',
    bio: 'Những câu chuyện đời thường, tình bạn và thanh xuân qua từng giai điệu gần gũi.',
    localPath: '/images/music/dalab.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/XvFuULyOHB8FEGgS6jW08wj6ZXHor5xsUwOkNf_khOVJOc_rbKnzfPny-g7vtjkceHguI2KHkQ=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Thanh Xuân', youtubeUrl: 'https://www.youtube.com/results?search_query=Da+LAB+Thanh+Xuan' },
      { title: 'Gác Lại Âu Lo', youtubeUrl: 'https://www.youtube.com/results?search_query=Da+LAB+Gac+Lai+Au+Lo' },
      { title: 'Nước Mắt Em Lau Bằng Khăn Mùi Xoa', youtubeUrl: 'https://www.youtube.com/results?search_query=Da+LAB+Nuoc+Mat+Em+Lau+Bang+Khan+Mui+Xoa' },
      { title: 'Một Nhà', youtubeUrl: 'https://www.youtube.com/results?search_query=Da+LAB+Mot+Nha' },
    ],
  },
  {
    id: 'a8',
    name: 'Chillies',
    genre: 'Indie Rock / Synthwave',
    bio: 'Chất rock hiện đại pha trộn chất thơ đô thị đầy hoài niệm.',
    localPath: '/images/music/chillies.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/6nnB3vvbwKRC0iiDxNAeXtsvdvPWjOPYBHpc9hAoqYX6b2mXXZg1gdHXoc7hir18_299W9y7=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Vùng Ký Ức', youtubeUrl: 'https://www.youtube.com/results?search_query=Chillies+Vung+Ky+Uc' },
      { title: 'Mascara', youtubeUrl: 'https://www.youtube.com/results?search_query=Chillies+Mascara' },
      { title: 'Có Em Đời Bỗng Vui', youtubeUrl: 'https://www.youtube.com/results?search_query=Chillies+Co+Em+Doi+Bong+Vui' },
      { title: 'Cứ Chill Thôi', youtubeUrl: 'https://www.youtube.com/results?search_query=Chillies+Cu+Chill+Thoi' },
    ],
  },
  {
    id: 'a9',
    name: '1nG',
    genre: 'Lo-fi Hip-Hop / Chill',
    bio: 'Không gian âm nhạc thư giãn, nhẹ nhàng như ánh nắng chiều.',
    localPath: '/images/music/1ng.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/9_bbQ1Rq8pGo9sAHXPpyWBsLaFyQGvLIhckToh8MF4LUOAOph0IGSbD4vjNVP8MdFVF_EdsE5w=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Nắng Thủy Tinh', youtubeUrl: 'https://www.youtube.com/results?search_query=1nG+Nang+Thuy+Tinh' },
      { title: 'Mơ Màng', youtubeUrl: 'https://www.youtube.com/results?search_query=1nG+Mo+Mang' },
      { title: 'Một Ngày Khác', youtubeUrl: 'https://www.youtube.com/results?search_query=1nG+Mot+Ngay+Khac' },
    ],
  },
  {
    id: 'a10',
    name: 'PARSG',
    genre: 'Indie Chill / Alternative',
    bio: 'Âm hưởng indie du dương mang sắc màu hiện đại và thư thái.',
    localPath: '/images/music/parsg.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/qR5hdJJoK_RK3zY3OmjdiGjDUX-Y7GjLOstOhwTk6-yWiZhumDvXpSUjGFpFlLPliw09NdATOvg=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Ghé Qua', youtubeUrl: 'https://www.youtube.com/results?search_query=PARSG+official' },
      { title: 'Lối Nhỏ', youtubeUrl: 'https://www.youtube.com/results?search_query=PARSG+music' },
    ],
  },
  {
    id: 'a11',
    name: 'HIEUTHUHAI',
    genre: 'Modern Hip-Hop / Trap',
    bio: 'Flow mượt mà, phong cách cuốn hút và lời nhạc dí dỏm, thời thượng.',
    localPath: '/images/music/hieuthuhai.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/ww8CFTHX3m3MVuc1zfmOBU1UB1U0tb0J_SgI3sEmWBnSPHYkQvdNFEXsTuvAlXjLK3eTfK3CoQ=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Không Thể Say', youtubeUrl: 'https://www.youtube.com/results?search_query=HIEUTHUHAI+Khong+The+Say' },
      { title: 'Ngủ Một Mình', youtubeUrl: 'https://www.youtube.com/results?search_query=HIEUTHUHAI+Ngu+Mot+Minh' },
      { title: 'NOLOVENOMERCY', youtubeUrl: 'https://www.youtube.com/results?search_query=HIEUTHUHAI+NOLOVENOMERCY' },
      { title: 'Vệ Tinh', youtubeUrl: 'https://www.youtube.com/results?search_query=HIEUTHUHAI+Ve+Tinh' },
    ],
  },
  {
    id: 'a12',
    name: 'WEAN',
    genre: 'R&B / Hip-Hop Aesthetic',
    bio: 'Gu âm nhạc độc đáo, đậm chất thời trang và cảm xúc thành thị về đêm.',
    localPath: '/images/music/wean.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/BcdHWcqaEa3izRZ6M_7Ru5P8_S1VGTfZk7q_7l6471O3ZpYKte6tSeJSbAJhXkpIA6fzlBAzEA=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Một Người Vì Em', youtubeUrl: 'https://www.youtube.com/results?search_query=WEAN+Mot+Nguoi+Vi+Em' },
      { title: 'She Said', youtubeUrl: 'https://www.youtube.com/results?search_query=WEAN+She+Said' },
      { title: 'LAVIE', youtubeUrl: 'https://www.youtube.com/results?search_query=WEAN+LAVIE' },
      { title: 'BADBYE', youtubeUrl: 'https://www.youtube.com/results?search_query=WEAN+BADBYE' },
    ],
  },
  {
    id: 'a13',
    name: 'TÙNG',
    genre: 'Acoustic / Storytelling',
    bio: 'Thế giới nội tâm sâu lắng qua những ca từ đẹp như truyện ngắn.',
    localPath: '/images/music/tung.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/dwBCN7C12jTRTxhFLqFAcTc79lkRDSjoNclEAWVW6Ps1rlZrGrrnXaNTZQVMGOSIeXPVwdtoMn8=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Con Dế Mèn Hát Vào Mùa Hè', youtubeUrl: 'https://www.youtube.com/results?search_query=Tung+Con+De+Men+Hat+Vao+Mua+He' },
      { title: 'Ở Đây Lúc Này', youtubeUrl: 'https://www.youtube.com/results?search_query=Tung+O+Day+Luc+Nay' },
      { title: 'Gam Màu Tím', youtubeUrl: 'https://www.youtube.com/results?search_query=Tung+Gam+Mau+Tim' },
      { title: 'Con Chim Trên Cành', youtubeUrl: 'https://www.youtube.com/results?search_query=Tung+Con+Chim+Tren+Canh' },
    ],
  },
  {
    id: 'a14',
    name: 'Trang',
    genre: 'Indie Pop / Acoustic',
    bio: 'Những bản tình ca dịu dàng như tách trà thơm giữa buổi chiều Sài Gòn.',
    localPath: '/images/music/trang.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/qSq7bE0stsa-H2b7mhqbin6TOJxrwy3m1nGS7nkrIAZyj7SmxL7_mlxwb03xparpb_no9x3sV9E=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Bài Hát Của Em', youtubeUrl: 'https://www.youtube.com/results?search_query=Trang+Bai+Hat+Cua+Em' },
      { title: 'Chuyện Những Người Yêu Xa', youtubeUrl: 'https://www.youtube.com/results?search_query=Trang+Chuyen+Nhung+Nguoi+Yeu+Xa' },
      { title: 'Thư Cho Anh', youtubeUrl: 'https://www.youtube.com/results?search_query=Trang+Thu+Cho+Anh' },
      { title: 'Hôn Anh', youtubeUrl: 'https://www.youtube.com/results?search_query=Trang+Hon+Anh' },
    ],
  },
  {
    id: 'a15',
    name: 'Thắng (Ngọt)',
    genre: 'Indie Rock / Alternative',
    bio: 'Chất rock thô mộc, góc nhìn sắc sảo và hoài niệm tuổi trẻ Hà Nội.',
    localPath: '/images/music/thang.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/dU67b_oWSc1kFJLGM2EWu45BVhaLLR93m8QbWziDvBcPU21F7JYYzUUpaE5g3Ex98yDGOmyNvy8=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Trước Khi Em Tồn Tại', youtubeUrl: 'https://www.youtube.com/results?search_query=Thang+Truoc+Khi+Em+Ton+Tai' },
      { title: 'Em Dạo Này', youtubeUrl: 'https://www.youtube.com/results?search_query=Ngot+Em+Dao+Nay' },
      { title: 'Lần Cuối', youtubeUrl: 'https://www.youtube.com/results?search_query=Ngot+Lan+Cuoi' },
      { title: 'Cho Tôi Đi Theo', youtubeUrl: 'https://www.youtube.com/results?search_query=Ngot+Cho+Toi+Di+Theo' },
    ],
  },
  {
    id: 'a16',
    name: 'Cam (mrdd47)',
    genre: 'Indie Hip-Hop / Soul',
    bio: 'Những câu chuyện hóm hỉnh, nhịp điệu thư thái bên ly cà phê chiều.',
    localPath: '/images/music/cam.jpg',
    avatarUrl: 'https://yt3.googleusercontent.com/PmHWCYBzL-xuTFdwpTdYhl04MpvRhKLdkxazbwdxVfAqrexeA4ZmQ0Q1EmcHVhFmb1jJjV_2=s900-c-k-c0x00ffffff-no-rj',
    topTracks: [
      { title: 'Tủn Mủn', youtubeUrl: 'https://www.youtube.com/results?search_query=Cam+mrdd47+Tun+Mun' },
      { title: 'Lạch Cạch', youtubeUrl: 'https://www.youtube.com/results?search_query=Cam+mrdd47+Lach+Cach' },
      { title: 'Đi Cà Phê', youtubeUrl: 'https://www.youtube.com/results?search_query=Cam+mrdd47+Di+Ca+Phe' },
    ],
  },
];
