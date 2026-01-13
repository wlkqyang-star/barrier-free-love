import { IMAGES } from './constants';

export type DataVisualization = {
  image: string;
  source: string;
  description: string;
  embed?: {
    layout: 'single' | 'row' | 'column' | 'twoTopOneBottom';
    minWidth?: number;
    frames: Array<{
      title?: string;
      src: string;
      aspectRatioPadding?: string;
      height?: string;
    }>;
  };
};

export const DATA_VISUALIZATIONS: Record<string, DataVisualization> = {
  'gender-ratio': {
    image: IMAGES.charts.genderRatio,
    source: '国家统计局、中国残疾人联合会',
    description: '全国居民、持证残疾人、婚恋需求残疾人性别比对比。',
    embed: {
      layout: 'row',
      minWidth: 300,
      frames: [
        {
          title: '全国居民性别比',
          src: 'https://public.flourish.studio/visualisation/26801040/embed',
          aspectRatioPadding: '56.25%',
        },
        {
          title: '持证残疾人性别比',
          src: 'https://public.flourish.studio/visualisation/26801114/embed',
          aspectRatioPadding: '56.25%',
        },
        {
          title: '婚恋需求残疾人性别比',
          src: 'https://public.flourish.studio/visualisation/26801162/embed',
          aspectRatioPadding: '50%',
          height: '250px',
        },
      ],
    },
  },
  'marriage-status': {
    image: IMAGES.charts.marriageStatus,
    source: '残疾人征婚平台上的9903份数据',
    description: '残疾人征婚平台上用户群体的过往婚姻状况。',
    embed: {
      layout: 'row',
      minWidth: 400,
      frames: [
        {
          title: '过往婚姻状况',
          src: 'https://public.flourish.studio/visualisation/26801382/embed',
          aspectRatioPadding: '56.25%',
        },
        {
          title: '是否有子女',
          src: 'https://public.flourish.studio/visualisation/26801472/embed',
          aspectRatioPadding: '56.25%',
        },
      ],
    },
  },
  'location-map': {
    image: IMAGES.charts.demandMap,
    source: '残疾人征婚平台上的9903份数据',
    description: '征婚需求与资源供给图',
    embed: {
      layout: 'single',
      frames: [
        {
          src: 'https://public.flourish.studio/visualisation/26740634/embed',
          aspectRatioPadding: '62%',
        },
      ],
    },
  },
  'age-distribution': {
    image: IMAGES.charts.ageDist,
    source: '残疾人征婚平台上的9903份数据',
    description: '婚恋平台用户年龄分布图',
    embed: {
      layout: 'single',
      frames: [{ src: 'https://public.flourish.studio/visualisation/26805955/embed', height: '600px' }],
    },
  },
  'education-radar': {
    image: IMAGES.charts.education,
    source: '残疾人征婚平台上的9903份数据',
    description: '征婚平台用户学历分布。',
    embed: {
      layout: 'single',
      frames: [{ src: 'https://public.flourish.studio/visualisation/26804005/embed', height: '600px' }],
    },
  },
  'disability-treemap': {
    image: IMAGES.charts.disabilityType,
    source: '残疾人征婚平台上的9903份数据',
    description: '征婚平台残疾类型分布图。',
    embed: {
      layout: 'single',
      frames: [{ src: 'https://public.flourish.studio/visualisation/26803014/embed', height: '600px' }],
    },
  },
  'birth-attitude': {
    image: IMAGES.charts.attitude,
    source: '爬取“站长之家”TOP 5的残疾人征婚平台中截止2025年11月的相关数据，经清洗，搜集9903条有效用户信息',
    description: '残疾人生育与婚恋态度',
    embed: {
      layout: 'twoTopOneBottom',
      frames: [
        { src: 'https://public.flourish.studio/visualisation/26808186/embed', height: '320px' },
        { src: 'https://public.flourish.studio/visualisation/26808409/embed', height: '320px' },
        { src: 'https://public.flourish.studio/visualisation/26807959/embed', height: '720px' },
      ],
    },
  },
  'income-comparison': {
    image: IMAGES.charts.income,
    source: '国家统计局、2024年全国残疾人家庭收入状况调查报告',
    description: '2023年全国残疾人家庭与全国居民家庭收入分项比较。'
  },
  'expense-comparison': {
    image: IMAGES.charts.expense,
    source: '国家统计局、2024年全国残疾人家庭收入状况调查报告',
    description: '2023年全国残疾人家庭与全国居民消费支出分项比较。'
  },
  'needs-sankey': {
    image: IMAGES.charts.sankey,
    source: '社交媒体平台评论数据',
    description: '残疾人婚恋需求流向图。'
  },
  'difficulties-bubble': {
    image: IMAGES.charts.bubble,
    source: '社交媒体平台评论数据',
    description: '残疾人在社媒平台上困难相关发言。'
  },
  'love-needs-wordcloud': {
    image: IMAGES.charts.wordcloud,
    source: '社交媒体平台评论数据',
    description: '残疾人在社媒平台上"爱的需求"相关发言。'
  }
};
