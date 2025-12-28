export const IMAGES = {
  limingStanding: '/images/liming.png',
  xiaoyuStanding: '/images/xiaoyu.png',
  limingAvatar: '/images/liming.png', // 使用相同图片作为头像，实际项目中可能需要裁剪
  xiaoyuAvatar: '/images/xiaoyu.png',
  
  // 数据可视化图表
  charts: {
    map: '/images/image1.png', // 全国持证残疾人地区分布图
    trend: '/images/image2.png', // 2018-2024年不同残疾类型对比统计图
    sankey: '/images/image3.gif', // 桑基图
    bubble: '/images/image4.gif', // 气泡图
    wordcloud: '/images/image5.png', // 词云
    genderRatio: '/images/image6.png', // 性别比
    marriageStatus: '/images/image7.png', // 婚姻状况
    demandMap: '/images/image8.png', // 征婚需求地图
    ageDist: '/images/image9.png', // 年龄分布
    education: '/images/image10.png', // 学历分布
    disabilityType: '/images/image11.png', // 残疾类型分布
    attitude: '/images/image12.png', // 婚恋态度
    income: '/images/image13.png', // 收入比较
    keywords: '/images/image14.gif', // 关键词动态图
    expense: '/images/image15.png', // 消费支出
    needs: '/images/image16.png', // 需求类型
  }
};

export const CHARACTERS = [
  {
    id: 'liming',
    name: '李明',
    avatar: IMAGES.limingAvatar,
    standingImg: IMAGES.limingStanding,
    details: {
      age: '35岁',
      disabilityType: '视觉障碍（完全失明）',
      disabilityLevel: '一级',
      education: '本科（计算机科学）',
      marriageStatus: '离异',
      job: '互联网公司无障碍测试工程师'
    }
  },
  {
    id: 'xiaoyu',
    name: '晓雨',
    avatar: IMAGES.xiaoyuAvatar,
    standingImg: IMAGES.xiaoyuStanding,
    details: {
      disabilityType: '肢体残疾（需要使用轮椅）',
      education: '本科',
      marriageStatus: '未婚'
    }
  }
];
