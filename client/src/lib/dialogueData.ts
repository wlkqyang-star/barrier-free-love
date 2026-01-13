import { ChapterData } from './types';

export const DIALOGUE_DATA: ChapterData = {
  chapter1: [
    {
      type: 'text',
      speaker: 'narrator',
      text: "又是一个周五晚上。李明摘下耳机，准备打开一个新的婚恋应用。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "这已经是他这个月尝试的第三个。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "前两个，他的信息石沉大海。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "这一次，他决定尝试一个\"专门\"的平台——为残疾人设计的婚恋应用。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "他不知道，这个决定会让他看到一个完全不同的世界。",
      character: null
    },
    {
      type: 'choice',
      question: "李明的恋爱宣言是：",
      options: [
        { id: "A", text: "平凡的皮囊包裹着有趣的灵魂，在等待的解封" },
        { id: "B", text: "征婚有啥可介绍的，聊聊微信见个面比啥都强~" },
        { id: "C", text: "在一起不容易，缺点可以改，性格可以磨合，但是错过了就真的没有了" },
        { id: "D", text: "真心诚意找女朋友，性格有点脾气" },
        { id: "E", text: "我虽然视力有缺陷，但是不影响正常工作和生活，只要你不离不弃，我定生死相依" }
      ]
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "一周过去了，没有人主动联系他。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "他的信息被淹没在数百万条信息中。",
      character: null
    },
    {
      type: 'choice',
      question: "你觉得李明的信息淹没的原因是什么：",
      options: [
        { id: "male", text: "男的太少了", data: "gender-ratio" },
        { id: "divorced", text: "因为结过婚", data: "marriage-status" },
        { id: "location", text: "异地不好找", data: "location-map" }
      ]
    }
  ],
  
  chapter2: [
    {
      type: 'text',
      speaker: 'narrator',
      text: "然后，他转向了一个残疾人专门平台。在这里，他\"可见\"了。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "但这种可见性带来的是什么呢？",
      character: null
    },
    {
      type: 'choice',
      question: "选择一个话题与晓雨对话：",
      options: [
        { id: "age", text: "谈恋爱看年龄差吗？", dialogue: "ageDialogue" },
        { id: "education", text: "谈恋爱看学历吗？", dialogue: "educationDialogue" },
        { id: "disability", text: "谈恋爱看残疾程度吗？", dialogue: "disabilityDialogue" }
      ]
    }
  ],
  
  // 生育对话分支
  fertilityDialogue: [
    {
      type: 'text',
      speaker: "李明",
      text: "晓雨，我想问一个可能很冒昧的问题。你想要孩子吗？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "我……想。但我也很害怕。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "一个医生告诉我，“鉴于你的身体状况，我不建议你生育”。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "那你怎么回答他的？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "从那以后，我就没有再去看过医生。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "但这不意味着你不能……",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "如果我想要孩子。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "我需要克服的不仅是身体上的困难，还有社会的偏见，甚至是我自己内心的恐惧。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "对我来说，难度加倍。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "那你现在怎么想的？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "也许我应该先找到一个真正爱我、接纳我的人。然后，我们再一起决定是否要孩子。",
      character: "xiaoyu"
    },
    {
      type: 'choice',
      question: "如果你是晓雨，你会怎么做：",
      options: [
        { id: "A", text: "选择生育" },
        { id: "B", text: "拒绝生育" },
        { id: "C", text: "不确定" }
      ]
    },
    {
      type: "data",
      dataType: "birth-attitude",
      title: "残疾人生育与婚恋态度"
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "李明和小雨的对话还在继续。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "他们没有找到答案，但他们找到了彼此。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "也许这就是“转向”的真正意义",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "也许这就是\"转向\"的真正意义——不是转向一个更好的平台，而是转向彼此，转向那些真正理解困境的人",
      character: null
    }
  ],
  
  // 年龄对话分支
  ageDialogue: [
    {
      type: 'text',
      speaker: "小雨",
      text: "你有没有发现，在这个平台上，年龄其实很敏感。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "为什么这么说？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "因为它从来不被写成硬性条件，却决定了你能不能被点开。30岁以下的女性，浏览量明显更高。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "我后来发现，比起\"合适的年龄\"，有人愿意认真看完我的资料，已经很难得了。",
      character: "xiaoyu"
    },
    {
      type: 'choice',
      question: "你怎么想：",
      options: [
        { id: "A", text: "年龄真的有这么重要吗？" },
        { id: "B", text: "这说明年龄在残疾人婚恋中同样构成一种筛选与排除机制" }
      ]
    },
    {
      type: "data",
      dataType: "age-distribution",
      title: "婚恋平台用户年龄分布"
    }
  ],
  
  // 学历对话分支
  educationDialogue: [
    {
      type: 'text',
      speaker: "小雨",
      text: "你有没有发现，在这个平台上，学历其实很敏感。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "为什么？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "学历、工作、残疾程度……一切都成了\"筛选条件\"。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "但有趣的是，这些高学历女性中，很多人的配偶要求里都写着\"健全人优先\"。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "我早就放弃了'要求'。我现在的要求就是'能接纳我'。",
      character: "xiaoyu"
    },
    {
      type: 'choice',
      question: "你怎么想：",
      options: [
        { id: "A", text: "学历真的这么重要吗？" },
        { id: "B", text: "残疾人之间也存在歧视！" }
      ]
    },
    {
      type: "data",
      dataType: "education-radar",
      title: "征婚平台用户学历分布"
    }
  ],
  
  // 残疾程度对话分支
  disabilityDialogue: [
    {
      type: 'text',
      speaker: "晓雨",
      text: "你有没有发现，在这个平台上，残疾程度其实很敏感。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "什么意思？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "比如，视障人士被认为更有可能恢复，所以被关注度相对较高。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "但我们肢体残疾人，尤其是需要使用轮椅的，被认为永久残疾，所以被关注度就低。这很讽刺，对吧？",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "晓雨",
      text: "我们逃离了普通平台上的歧视，却发现自己陷入了残疾人之间的歧视。",
      character: "xiaoyu"
    },
    {
      type: 'choice',
      question: "你怎么想：",
      options: [
        { id: "A", text: "这太不公平了" },
        { id: "B", text: "唉，这好像也在情理之中" }
      ]
    },
    {
      type: "data",
      dataType: "disability-treemap",
      title: "残疾类型与残疾程度分布"
    }
  ],
  
  chapter5: [
    {
      type: 'text',
      speaker: "李明",
      text: "小雨，我想问一个可能很冒昧的问题。你想要孩子吗？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "我……想。但我也很害怕。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "一个医生告诉我，\"鉴于你的身体状况，我不建议你生育\"。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "那你怎么回答他的？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "从那以后，我就没有再去看过医生。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "但这不意味着你不能……",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "如果我想要孩子，我需要克服的不仅是身体上的困难，还有社会的偏见，甚至是我自己内心的恐惧。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "对我来说，难度加倍。",
      character: "xiaoyu"
    },
    {
      type: 'text',
      speaker: "李明",
      text: "那你现在怎么想的？",
      character: "liming"
    },
    {
      type: 'text',
      speaker: "小雨",
      text: "也许我应该先找到一个真正爱我、接纳我的人。然后，我们再一起决定是否要孩子。",
      character: "xiaoyu"
    },
    {
      type: 'choice',
      question: "如果你是小雨，你会怎么做：",
      options: [
        { id: "birth", text: "选择生育" },
        { id: "refuse", text: "拒绝生育" },
        { id: "uncertain", text: "不确定" }
      ]
    },
    {
      type: "data",
      dataType: "birth-attitude",
      title: "残疾人生育与婚恋态度"
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "李明和晓雨的对话还在继续。他们没有找到答案，但他们找到了彼此。",
      character: null
    },
    {
      type: 'text',
      speaker: 'narrator',
      text: "也许这就是\"转向\"的真正意义——不是转向一个更好的平台，而是转向彼此，转向那些真正理解困境的人",
      character: null
    }
  ]
};
