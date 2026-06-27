import { ref, watch } from "vue";

type Locale = "en" | "id" | "zh" | "es";

const STORAGE_DARK = "it26-dark";
const STORAGE_LOCALE = "it26-locale";

function loadDark(): boolean {
  const v = localStorage.getItem(STORAGE_DARK);
  if (v !== null) return v === "true";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function loadLocale(): Locale {
  return (localStorage.getItem(STORAGE_LOCALE) as Locale) || "en";
}

const isDark = ref(loadDark());
const locale = ref<Locale>(loadLocale());

function applyDark() {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
applyDark();

const localeLabels: Record<Locale, string> = {
  en: "English",
  id: "Indonesia",
  zh: "中文 (Mandarin)",
  es: "Español",
};

const localeFlags: Record<Locale, string> = {
  en: "EN",
  id: "ID",
  zh: "中文 (Mandarin)",
  es: "ES",
};

const locales: { code: Locale; label: string; flag: string }[] = Object.keys(
  localeLabels,
).map((k) => ({
  code: k as Locale,
  label: localeLabels[k as Locale],
  flag: localeFlags[k as Locale],
}));

type Translations = Record<string, Record<string, any>>;

const translations: Translations = {
  en: {
    nav: {
      search: "Search",
      home: "Home",
      directory: "Directory",
      projects: "Projects",
      media: "Media",
      openMenu: "Open main menu",
    },
    home: {
      tagline1: "Information Technology",
      tagline2: "Batch 2026 • President University",
      tagline3:
        "Empowering the future through technology, innovation, and leadership. Discover our journey, our projects, and our people.",
      meetBatch: "Meet the Batch",
      viewProjects: "View Projects",
      ourVision: "Our Vision",
      shapingDigital: "Shaping the Digital World",
      communityDesc:
        "We are a community of passionate developers, designers, and engineers dedicated to solving real-world problems.",
      techExcellence: "Technical Excellence",
      techExcellenceDesc:
        "Mastering modern frameworks, algorithms, and software architectures to build robust solutions.",
      innovationFirst: "Innovation First",
      innovationFirstDesc:
        "Pushing boundaries and adopting cutting-edge technologies to stay ahead of the curve.",
      strongCommunity: "Strong Community",
      strongCommunityDesc:
        "Collaborating, learning together, and building a supportive network that lasts beyond graduation.",
    },
    directory: { title: "Student Directory" },
    projects: { title: "Our Projects" },
    media: { title: "Media Gallery" },
    footer: {
      title: "IT Batch 2026",
      subtitle: "President University",
      copyright: "IT Batch 2026 President University. All rights reserved.",
    },
  },
  id: {
    nav: {
      search: "Cari",
      home: "Beranda",
      directory: "Direktori",
      projects: "Proyek",
      media: "Media",
      openMenu: "Buka menu utama",
    },
    home: {
      tagline1: "Teknologi Informasi",
      tagline2: "Angkatan 2026 • President University",
      tagline3:
        "Mengembangkan masa depan melalui teknologi, inovasi, dan kepemimpinan. Temukan perjalanan, proyek, dan mahasiswa kami.",
      meetBatch: "Angkatan Kami",
      viewProjects: "Proyek Kami",
      ourVision: "Visi Kami",
      shapingDigital: "Membentuk Dunia Digital",
      communityDesc:
        "Kami merupakan komunitas pengembang, desainer, dan insinyur yang bersemangat, berdedikasi untuk memecahkan masalah dunia nyata.",
      techExcellence: "Keunggulan Teknis",
      techExcellenceDesc:
        "Menguasai kerangka kerja modern, algoritma, dan arsitektur perangkat lunak untuk membangun solusi yang tangguh.",
      innovationFirst: "Adaptasi Dalam Inovasi",
      innovationFirstDesc:
        "Mendorong batasan dan mengadopsi teknologi baru di dunia yang terus berkembang untuk tetap unggul.",
      strongCommunity: "Komunitas Yang Kuat",
      strongCommunityDesc:
        "Berkolaborasi, belajar bersama, dan membangun jaringan yang mendukung hingga melampaui kelulusan kami.",
    },
    directory: { title: "Direktori Mahasiswa" },
    projects: { title: "Proyek Kami" },
    media: { title: "Galeri Media" },
    footer: {
      title: "TI Angkatan 2026",
      subtitle: "President University",
      copyright: "IT Angkatan 2026 President University. Hak cipta dilindungi.",
    },
  },
  zh: {
    nav: {
      search: "搜索",
      home: "首页",
      directory: "目录",
      projects: "项目",
      media: "媒体",
      openMenu: "打开主菜单",
    },
    home: {
      tagline1: "信息技术",
      tagline2: "2026届 • 总统大学",
      tagline3: "通过技术、创新和领导力赋能未来。探索我们的旅程、项目和人才。",
      meetBatch: "认识本届",
      viewProjects: "查看项目",
      ourVision: "我们的愿景",
      shapingDigital: "塑造数字世界",
      communityDesc:
        "我们是一个由充满激情的开发者、设计师和工程师组成的社区，致力于解决现实世界的问题。",
      techExcellence: "技术卓越",
      techExcellenceDesc: "掌握现代框架、算法和软件架构，构建稳健的解决方案。",
      innovationFirst: "创新为先",
      innovationFirstDesc: "突破界限，采用尖端技术，保持领先。",
      strongCommunity: "强大社区",
      strongCommunityDesc: "协作学习，共同建立超越毕业的支持网络。",
    },
    directory: { title: "学生目录" },
    projects: { title: "我们的项目" },
    media: { title: "媒体库" },
    footer: {
      title: "2026届信息技术",
      subtitle: "总统大学",
      copyright: "2026届信息技术 总统大学。版权所有。",
    },
  },
  es: {
    nav: {
      search: "Buscar",
      home: "Inicio",
      directory: "Directorio",
      projects: "Proyectos",
      media: "Medios",
      openMenu: "Abrir menú principal",
    },
    home: {
      tagline1: "Tecnología de la Información",
      tagline2: "Promoción 2026 • President University",
      tagline3:
        "Impulsando el futuro a través de la tecnología, la innovación y el liderazgo. Descubre nuestro viaje, nuestros proyectos y nuestra gente.",
      meetBatch: "Conoce la Promoción",
      viewProjects: "Ver Proyectos",
      ourVision: "Nuestra Visión",
      shapingDigital: "Moldeando el Mundo Digital",
      communityDesc:
        "Somos una comunidad de desarrolladores, diseñadores e ingenieros apasionados, dedicados a resolver problemas del mundo real.",
      techExcellence: "Excelencia Técnica",
      techExcellenceDesc:
        "Dominando frameworks modernos, algoritmos y arquitecturas de software para construir soluciones robustas.",
      innovationFirst: "Innovación Primero",
      innovationFirstDesc:
        "Superando límites y adoptando tecnologías de vanguardia para mantenernos a la vanguardia.",
      strongCommunity: "Comunidad Fuerte",
      strongCommunityDesc:
        "Colaborando, aprendiendo juntos y construyendo una red de apoyo que perdura más allá de la graduación.",
    },
    directory: { title: "Directorio de Estudiantes" },
    projects: { title: "Nuestros Proyectos" },
    media: { title: "Galería de Medios" },
    footer: {
      title: "TI Promoción 2026",
      subtitle: "President University",
      copyright:
        "TI Promoción 2026 President University. Todos los derechos reservados.",
    },
  },
};

export function useSettings() {
  watch(isDark, (v) => {
    localStorage.setItem(STORAGE_DARK, String(v));
    applyDark();
  });

  watch(locale, (v) => {
    localStorage.setItem(STORAGE_LOCALE, v);
  });

  function toggleDark() {
    isDark.value = !isDark.value;
  }

  function setLocale(l: Locale) {
    locale.value = l;
  }

  function t(key: string): string {
    const keys = key.split(".");
    let val: any = translations[locale.value];
    for (const k of keys) {
      val = val?.[k];
    }
    return val ?? key;
  }

  return {
    isDark,
    toggleDark,
    locale,
    setLocale,
    t,
    locales,
    localeLabels,
    localeFlags,
  };
}
