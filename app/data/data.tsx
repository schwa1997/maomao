import { Blog, Resources, Tutorial } from "../types/type";

//for profile page
export const profile = {
  name: "关于我",
  description:
    "我是一个工程师，来自最颠的江西省，出生在计划生育下的一个女宝。目前人在申根区欧漂。成长过程受到很多女性的庇佑，得以重生构建自我。之前也内耗过，也是个弱者。但，现在的我只会是个强者。",
  roleModels: [
    {
      name: "林毛毛",
      description:
        "新浪微博禁言一年流量博主，微博新号林毛毛2020和林毛毛2021，豆瓣还叫林毛毛，B站林毛毛2020，一天之内全部被炸掉的网络难民",
      twitterUrl: "https://x.com/linmaomao2020",
    },
    {
      name: "海马星球",
      description: "海马星球是一个很活跃的社群",
      twitterUrl: "https://x.com/linmaomao2020",
    },
  ],
  notes: [
    {
      tweet_id: 1729722043,
      comment: "人无外财不富，马无夜草不肥！",
    },
    {
      tweet_id: 1720219375,
      comment: "人无外财不富，马无夜草不肥！",
    },
    {
      tweet_id: 1718945131,
      comment: "人无外财不富，马无夜草不肥！",
    },
  ],
  timeline: [
    {
      id: 1,
      date: "最初",
      title: "厌女",
      description: "在不知道被男权结构压迫时，我也是个厌女者",
      work: "学生",
    },
    {
      id: 2,
      date: "初期",
      title: "平权仙子",
      description: "刚接触一些自由主义关于性别的看法",
      work: "学生",
    },
    {
      id: 3,
      date: "初期",
      title: "发疯发癫",
      description:
        "在看到一些社会事件之后，以及经历了社会之后，就触发了对于我的原生家庭的一些思考，此阶段发现了自己是个受害者的身份，很愤怒，想突破枷锁",
      work: "工程师",
    },
    {
      id: 4,
      date: "2024-10-28",
      title: "混沌",
      description:
        "激女预备期间，肉身还没出国。在社交媒体的影响下，接触到了一些关于激进女权的概念，但是受到自己一些同理心和周围环境的裹挟，还是一个内核不够强，女本位也很难渗透到生活中",
      work: "工程师/润党",
    },
    {
      id: 5,
      date: "2024-10-28",
      title: "激女（预备）",
      description:
        "脱离环境之后，就开始有更多精力思考自己的选择。激进女权才是从根本上解放父权对于女性的压迫，这个方法也在实操层面逻辑更加自洽。",
      work: "欧洲的程序员/自由职业",
    },
  ],
};

//for landing page
export const highlights = [
  {
    text: "强女管不了那么多。",
    highlight: ["强女"],
  },
  {
    text: "我71年被出生的",
    highlight: ["被"],
  },
  {
    text: "我认为有的人，天生不容易被洗脑。",
    highlight: ["天生"],
  },
  {
    text: "强女，目前没掌权，缺资源，无红利，光凭一腔热血，解救不了任何弱女，只能把她们推出去，剥夺女籍",
    highlight: ["强女", "解救", "女籍"],
  },
  {
    text: "在这样一个信息爆炸的环境里，有人专门掏屎，这，还是跟基因为蛆有关吧",
    highlight: ["信息爆炸", "掏屎", "基因为蛆"],
  },
  {
    text: "人无外财不富，马无夜草不肥",
    highlight: ["外财", "夜草"],
  },
];

//for tutorial page
export const tuturials: Tutorial[] = [
  {
    id: 1,
    title: "搞钱的底层逻辑",
    description: "认知搞钱",
    content: `<h1 class="text-4xl font-bold mb-8">搞钱的底层逻辑</h1>
              <p class="mb-6">搞钱的底层逻辑通常包括以下几个关键点：</p>
                <h2 class="text-3xl font-semibold mt-8 mb-6">1. 认知搞钱的底层逻辑</h2>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fgirl-holding-money-her-hand-vector-girl-holding-money-her-hand-vector-illustration-127422321.jpg&f=1&nofb=1&ipt=2f8300e6574441de547bacb40d5d8f12573f4a7f046b088a83b0f0f8f13740e1&ipo=images" alt="mb-6" className="text-sm" />
                <p class="mb-6">搞钱的底层逻辑通常包括以下几个关键点：</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">认知的重要性</h3>
                <p class="mb-4 text-gray-700">搞钱首先要从认知开始，要理解金钱的本质和运作规律。要明白金钱是一种交换媒介，而不仅仅是数字。理解市场需求、价值创造和财富积累的基本原理。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">价值创造</h3>
                <p class="mb-4 text-gray-700">真正的财富来源于创造价值。要思考如何为他人解决问题，提供有价值的产品或服务。价值创造是可持续赚钱的基础。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">杠杆效应</h3>
                <p class="mb-4 text-gray-700">要学会利用各种形式的杠杆，包括时间杠杆、人力杠杆、资金杠杆和技术杠杆。杠杆可以帮助我们突破个人能力的限制，实现财富的快速增长。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">风险管理</h3>
                <p class="mb-4 text-gray-700">搞钱过程中必须重视风险管理。要学会评估风险，做好风险控制，保护已有资产。同时也要明白风险和收益的关系，在可控范围内适度冒险。</p>
                <h2 class="text-3xl font-semibold mt-8 mb-6">2. 搞钱的具体策略</h2>
                <p class="mb-6">在实际操作中，可以采取以下策略：</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">技能变现</h3>
                <p class="mb-4 text-gray-700">将个人技能转化为收入来源。可以通过提供服务、教学、咨询等方式实现技能变现。要不断提升核心技能，扩大收入来源。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">投资理财</h3>
                <p class="mb-4 text-gray-700">学习基本的投资知识，合理配置资产。可以通过股票、基金、房地产等多种渠道进行投资，实现资产的保值增值。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">商业模式</h3>
                <p class="mb-4 text-gray-700">建立可持续的商业模式，创造被动收入。可以通过开展网络业务、建立品牌、发展加盟等方式实现。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">资源整合</h3>
                <p class="mb-4 text-gray-700">学会整合各种资源，包括人脉资源、信息资源、资金资源等。善于利用资源可以创造更多机会。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">持续学习</h3>
                <p class="mb-4 text-gray-700">保持学习的心态，跟踪市场变化，及时调整策略。财富机会往往与新技术、新趋势密切相关。</p>`,
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image:
      "https://thumbs.dreamstime.com/b/girl-holding-money-her-hand-vector-girl-holding-money-her-hand-vector-illustration-127422321.jpg",
    tags: ["网站", "教程"],
  },
  {
    id: 2,
    title: "如何收集信息",
    description: "帮助大家学习建立网站。",
    content:
      "林毛毛语录是一个收集林毛毛语录的网站，你可以在这里找到林毛毛的所有语录，并且可以收藏你喜欢的语录。",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["网站", "教程"],
  },
  {
    id: 3,
    title: "编程技术汇编",
    description: "帮助姐妹们了解互联网技术。",
    content:
      "林毛毛语录是一个收集林毛毛语录的网站，你可以在这里找到林毛毛的所有语录，并且可以收藏你喜欢的语录。",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["网站", "教程"],
  },
  {
    id: 4,
    title: "计算机基础",
    description: "帮助姐妹们了解互联网技术。",
    content:
      "林毛毛语录是一个收集林毛毛语录的网站，你可以在这里找到林毛毛的所有语录，并且可以收藏你喜欢的语录。",
    video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    image: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    tags: ["网站", "教程"],
  },
];

//for resources page
export const resources: Resources = {
  communities: [
    {
      id: 1,
      name: "海马星球",
      description: "发掘女性力量，构建母系社会",
      image: "/images/image1.jpg",
      url: "https://seahorseplanet.net/",
    },
    {
      id: 2,
      name: "海马星球",
      description: "发掘女性力量，构建母系社会",
      image: "/images/image1.jpg",
      url: "https://seahorseplanet.net/",
    },
    {
      id: 3,
      name: "海马星球",
      description: "发掘女性力量，构建母系社会",
      image: "/images/image1.jpg",
      url: "https://seahorseplanet.net/",
    },
    {
      id: 4,
      name: "海马星球",
      description: "发掘女性力量，构建母系社会",
      image: "/images/image1.jpg",
      url: "https://seahorseplanet.net/",
    },
  ],
  media: [
    {
      id: 12,
      name: "我的天才女友",
      creator: "Elena Ferrante",
      category: "小说",
      description: "一个关于女性主义的书",
      image:
        "https://pic.nfapp.southcn.com/nfplus/ossfs/pic/xy/201812/29/f1b34a50-138a-4df5-9b85-1a8055d123ee.jpg",
      quotes: ["I'm not a feminist, I'm a humanist."],
      comments: [
        "Labour既有工作、劳动的意思，又有生育的意思。'you make me do too much labour'，所以说这里不仅仅有让我做了太多劳动，还有一直不停让我生孩子的意思。一句双关！真是绝啊！",
      ],
    },

    {
      id: 2,
      name: "The Man",
      creator: "Taylor Swift",
      category: "歌曲",
      description: "一个关于女性主义的歌",
      image:
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Taylor-Swift-in-The-Man-music-video.jpg",
      comments: [
        "Labour既有工作、劳动的意思，又有生育的意思。'you make me do too much labour'，所以说这里不仅仅有让我做了太多劳动，还有一直不停让我生孩子的意思。一句双关！真是绝啊！",
      ],
      quotes: ["I'm not a feminist, I'm a humanist."],
    },
    {
      id: 3,
      name: "Labour",
      creator: "Paris Paloma",
      category: "歌曲",
      description:
        "All day, everyday,therapist, mother, maidNymph then a virgin, nurse then a servantJust an appendage, live to attend himSo that he never lifts a finger24/7,babymachineSo he can live out his picket fence dreamsIt's not an act oflove ifyou make herYou make me do too much labour",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Paris_Paloma_-_Labour.png/220px-Paris_Paloma_-_Labour.png",
      comments: [
        "Labour既有工作、劳动的意思，又有生育的意思。'you make me do too much labour'，所以说这里不仅仅有让我做了太多劳动，还有一直不停让我生孩子的意思。一句双关！真是绝啊！",
      ],
      quotes: ["I'm not a feminist, I'm a humanist."],
    },
    {
      id: 1,
      name: "Fleabag",
      creator: "Phoebe Waller-Bridge",
      category: "电视剧",
      description: "一个关于女性主义的电视剧",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjA4MzU5NzQxNV5BMl5BanBnXkFtZTgwOTg3MDA5NzM@._V1_FMjpg_UX1000_.jpg",
      quotes: ["I'm not a feminist, I'm a humanist."],
      comments: [
        "Labour既有工作、劳动的意思，又有生育的意思。'you make me do too much labour'，所以说这里不仅仅有让我做了太多劳动，还有一直不停让我生孩子的意思。一句双关！真是绝啊！",
      ],
    },
  ],
};

//for blogs page
export const blogs: Blog[] = [
  {
    id: 1,
    author: "大波浪味仙贝",
    title: "大胸擦边女权",
    description: "好小众的赛道",
    link: "/data/blogs/blog.md",
    content: "",
    image:
      "https://thumbs.dreamstime.com/b/girl-power-vector-lettering-illustration-pink-female-silhouette-doing-bicep-curl-hand-written-inspirational-message-120308341.jpg",
  },

  {
    id: 2,
    author: "爆炒茄子",
    title: "我是激女",
    description: "AI对于激女的理解",
    link: "/data/blogs/blog.md",
    content: `
             <h1 class="text-4xl font-bold mb-8">激女在简中如何被妖魔化</h1>
              <p class="mb-6">激进女权主义的底层逻辑通常包括以下几个关键点：</p>
                <h1 class="text-4xl font-bold mb-8">激进女权主义的底层逻辑与辩论方法</h1>
                <h2 class="text-3xl font-semibold mt-8 mb-6">1. 激进女权主义的底层逻辑</h2>
                <p class="mb-6">激进女权主义的底层逻辑通常包括以下几个关键点：</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">性别压迫的根源性</h3>
                <p class="mb-4 text-gray-700">激进女权主义认为性别压迫并非表层现象，而是根植于社会的基本结构之中。她们通常认为性别不平等是由"父权制"这一深层的社会结构所驱动的，并且这种制度通过家庭、法律、教育、宗教等各方面来维持性别不平等。</p> 
                <h3 class="text-2xl font-semibold mt-6 mb-4">父权制批判</h3>
                <p class="mb-4 text-gray-700">在激进女权主义的观点中，父权制不仅是男人对女人的控制和压迫，更是一种深层的制度和文化形态。激进女权主义者认为，父权制并非天然存在，而是被人类社会通过长时间积累建立起来的，具有文化和制度性根基。这种批判并非针对个体男性，而是针对整体社会结构的分析。</p>              
                <h3 class="text-2xl font-semibold mt-6 mb-4">女性经验视角</h3>
                <p class="mb-4 text-gray-700">激进女权主义强调基于女性经验来理解和分析社会问题，尤其是那些与性别压迫直接相关的问题。她们主张女性经验具有独特性，并且这些经验在传统的、男性主导的社会分析中往往被忽视或误解。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">系统性变革</h3>
                <p class="mb-4 text-gray-700">激进女权主义认为，想要实现真正的性别平等，必须从根本上改变社会结构，而不仅仅是改善表面现状。这意味着不只关注具体的权利提升，而是致力于改变性别权力结构本身。</p>
                <h2 class="text-3xl font-semibold mt-8 mb-6">2. 激进女权主义的辩论逻辑</h2>
                <p class="mb-6">在与他人辩论时，激进女权主义者通常采取以下辩论逻辑：</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">解构传统观念</h3>
                <p class="mb-4 text-gray-700">激进女权主义者通常会对社会中根深蒂固的传统观念提出质疑，尤其是那些被认为是"自然"或"不可改变"的性别分工。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">质疑表面性改革</h3>
                <p class="mb-4 text-gray-700">激进女权主义者通常对"渐进式"或"温和"的性别平等改革持怀疑态度。他们认为，这些改革可能只是在维持父权制的框架下让女性拥有更大的活动空间。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">揭示隐性压迫</h3>
                <p class="mb-4 text-gray-700">激进女权主义的辩论逻辑中经常会提到"隐性压迫"或"微观暴力"，即那些看似无害、甚至被合理化的行为，实际上是在维持性别不平等。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">反对个体化问题</h3>
                <p class="mb-4 text-gray-700">激进女权主义者通常反对将性别压迫问题个体化、孤立化。她们认为将压迫归因于个体行为是在忽视性别问题的系统性根源。</p>
                <h3 class="text-2xl font-semibold mt-6 mb-4">优先权衡女性视角</h3>
                <p class="mb-4 text-gray-700">激进女权主义者会强调从女性视角出发来考虑问题，因为男性视角往往在传统话语中占据主导地位。</p>
   `,
    image:
      "https://i2-prod.manchestereveningnews.co.uk/news/greater-manchester-news/article7375146.ece/ALTERNATES/s1227b/Powerpuff_girls_characters.jpg",
  },
  {
    id: 3,
    author: "爆炒茄子",
    title: "激女被冒犯",
    description: "好小众的赛道",
    link: "/data/blogs/blog.md",
    content: `
      <h1 class="text-4xl font-bold mb-8">海马星球的主播说，简中的女性主义在倒退，但是大家却不以为知。她之前也是'平权仙子'，但是之后意识到只有激女才能拯救简中的女性。</h1>
      <h1 class="text-4xl font-bold mb-8">很多现实的论调还是激女被妖魔化，但是在母系到达的时候，你就会知道激女的力量是多么重要，她们的信仰是多么的先锋。</h1>
      <h1 class="text-4xl font-bold mb-8">你进入了婚姻，我成为了独身女，我们都有美好的未来。</h1>
      <h1 class="text-4xl font-bold mb-8">留在简中的人都在等待更多婚权，等待更多女性在男权社会分得权力，但是孰不知，强者是不会等待的。</h1>
      <p class="mb-6">我也不知道我的心智是否已经足够成熟，是否可以理解激进女权的一些思维模式，是否可以贯彻，（因为我是从行为出发的人，我需要看到结果，脑袋里的东西不能落地我很痛苦），但是我知道在理论层面，激女的理论才能从根本上解放我的原生家庭和我出生的环境和中国对我的影响，但是在行为层面，我想成为一个强者，我需要找到一个我的性格和能力可以承受的一个平衡的点，我不希望自己把自己burn out，我希望我的一生是快乐的，我希望我可以把我的能力转化成实际的东西，这个能力的上限我不希望被男权限制， 我希望是我自己定义的。</p>
      <h1 class="text-4xl font-bold mb-8">先看到一些别人做出的成果，然后我再慢慢理解，慢慢实践。anyway做吧，做了就无悔了。我先按照激女的方式来贯彻我的二十岁到三十多岁。有实践的机会，我一定要向一个强女靠拢。变强 变强 变强 变强！！！！</h1>
    `,
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1794f10c-a5f1-4cf0-b4db-7d72f953be93/dfr6dqo-927b4f7d-aaeb-452d-ba66-95a51f52ab2b.png/v1/fill/w_894,h_894,q_70,strp/pink_characters__director_s_cut__by_annazeee_dfr6dqo-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwMCIsInBhdGgiOiJcL2ZcLzE3OTRmMTBjLWE1ZjEtNGNmMC1iNGRiLTdkNzJmOTUzYmU5M1wvZGZyNmRxby05MjdiNGY3ZC1hYWViLTQ1MmQtYmE2Ni05NWE1MWY1MmFiMmIucG5nIiwid2lkdGgiOiI8PTMwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.VqG7lRhVAZMEH4fTY5bIhJFcARmoKrmfqMsyF3mvlTM",
  },
  {
    id: 11,
    author: "大波浪味仙贝",
    title: "大胸擦边女权",
    description: "好小众的赛道",
    link: "/data/blogs/blog.md",
    content: "",
    image:
      "https://thumbs.dreamstime.com/b/girl-power-vector-lettering-illustration-pink-female-silhouette-doing-bicep-curl-hand-written-inspirational-message-120308341.jpg",
  },
  {
    id: 112,
    author: "大波浪味仙贝",
    title: "大胸擦边女权",
    description: "好小众的赛道",
    link: "/data/blogs/blog.md",
    content: "",
    image:
      "https://thumbs.dreamstime.com/b/girl-power-vector-lettering-illustration-pink-female-silhouette-doing-bicep-curl-hand-written-inspirational-message-120308341.jpg",
  },
];
