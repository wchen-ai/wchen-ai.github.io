---
title: "从语言学家到世界模型：AI 学派之争的一条暗线"
date: 2026-07-02
summary: "一篇 X 长文式叙事：符号派、频率派、Bitter Lesson，以及医学里的下一个机会。"
---

*一篇 X 长文式叙事：符号派、频率派、Bitter Lesson，以及医学里的下一个机会。*

一开始，大家以为智能会像一本词典。

把知识写进去，机器照着推理。语言学家写语法，医生写规则，棋手写棋理，工程师写特征。只要规则足够完整，机器就能翻译、诊断、下棋、推理。

这就是符号学派最朴素、也最有诱惑力的直觉：世界可以被拆成概念、规则、关系和推理链。智能就是在这些符号上做正确操作。

后来几十年的 AI 史，很大一部分都在反复证明一件事：这个直觉在封闭小世界里很漂亮，在开放世界里很脆弱。

而频率派，或者更准确说数据驱动 / 经验主义 / scale-first 路线，给出了另一种答案：不要急着告诉机器世界是什么。先给它足够多的经验、数据、反馈、搜索和计算，让它自己学出有用的表征。

这条线，从机器翻译开始，到 Google Translate 爆发，到 AlphaZero 砍掉人类棋理，到大语言模型吞下人类符号活动，再到今天的 radiology foundation model、AI-ECG、opportunistic screening 和 preventive medicine。

这不是一条单纯的技术史。它更像一场知识权力的转移：知识从专家脑中的规则，转移到数据分布、模型参数、搜索过程和环境反馈里。

![从符号学派到频率学派——一条从规则、语法和专家知识，到数据、搜索、神经网络与世界模型的时间线。](/essays/schools-of-ai-bitter-lesson/timeline.webp)

## 1954：机器翻译的第一个幻觉

故事可以从机器翻译讲起。

1954 年，Georgetown-IBM 实验公开演示俄英机器翻译。系统很小，词表很小，规则很少，但那次演示给了人们一个强烈错觉：翻译也许就是词典加语法。

如果源语言有一个词，目标语言有一个对应词；如果句子有一个语法结构，目标语言有一个转换结构；那么机器只要查词典、套规则、重排顺序，就可以翻译。

这就是早期规则式机器翻译的核心。直接翻译、transfer-based translation、interlingua，本质上都相信同一件事：语言学家能把语言的规律写出来，机器负责执行。

这条路在局部任务上不是没用。受控文本、固定领域、固定句型、固定术语，规则系统可以表现不错。问题是，一旦进入开放语言，规则开始爆炸。

词义歧义、指代、省略、成语、反讽、上下文、领域知识、文化背景，都会让翻译越出词典和语法的边界。翻译不是把句子从一种符号系统搬到另一种符号系统。翻译需要知道这句话在世界中是什么意思。

## 1966：ALPAC 给符号式翻译泼冷水

1966 年，ALPAC 报告成为早期机器翻译的一次冷水。它的核心判断很简单：当时的机器翻译远没有达到人们期待的水平，尤其不能可靠处理一般科学文本。

这件事对符号学派是一次打击。不是因为语法无用，而是因为语言里太多东西无法被干净地写成规则。

机器翻译第一次暴露了所谓 knowledge acquisition bottleneck：专家知道怎么做，但专家很难把自己所有隐性知识完整、无歧义、可维护地写给机器。

这个瓶颈后来会在医学专家系统、法律专家系统、工业规则系统里反复出现。

## 1970s–1980s：专家系统的黄金时代，也是符号派的高峰

到 1970s 和 1980s，符号派迎来黄金时代。

DENDRAL 处理化学结构推断，MYCIN 处理感染诊疗建议。它们的思路很清楚：把专家知识写成 if-then rules，再让推理机做前向或后向推理。

这类系统有一个巨大优势：可解释。它可以告诉你为什么得出某个结论，因为规则链就在那里。

但它也有一个致命问题：维护成本会随着世界复杂度爆炸。规则之间会冲突，边界条件会增长，例外会越来越多。专家系统看起来像智能，实际上像一个越来越难维护的知识仓库。

所以符号派不是输在完全错误，而是输在扩展性。

当世界足够小，规则可以赢。当世界足够大，规则会被自己的复杂度拖垮。

## 1990s：频率派换了一个问题

1990 年前后，机器翻译出现了另一个想法。

也许我们不需要先教机器语法。也许我们只需要给机器足够多的人类翻译，让它统计：在这种上下文中，人类通常怎么译。

IBM 的 statistical machine translation 把翻译写成概率问题。源语句子给定后，目标语句子不是由规则生成，而是由概率模型搜索出来。

经典 noisy-channel 公式可以写作：给定源语 f，寻找最可能的目标语 e。翻译模型估计源语和目标语如何对应，语言模型估计目标语本身是否自然。

这一步的哲学变化很大。

符号派问：语言规律是什么？频率派问：在大量样本中，什么输出最常被人类接受？

前者试图把知识写成规则。后者把人类行为压缩进统计分布。

## 2001：Breiman 的「两种文化」

2001 年，Leo Breiman 写下《Statistical Modeling: The Two Cultures》。这篇文章不只属于统计学，也可以看作整个 AI 转向的注脚。

一种文化认为数据来自某个可解释的随机模型，我们应当估计这个模型。另一种文化把真实机制当作复杂黑箱，重点是预测准确、泛化有效。

这不是简单的 frequentist vs Bayesian。这里的分裂更像：解释优先，还是预测优先；人类建模优先，还是算法学习优先。

后来机器学习、深度学习、临床预测、推荐系统、计算广告，基本都沿着第二种文化扩张。

## 2006：Google Translate 把频率派推到公众面前

2006 年，Google Translate 的统计机器翻译上线。这是一个分水岭。

传统商业翻译系统仍大量依赖语言学家、词典、语法和 transfer rules。Google 的路线不同：把大量单语文本和平行语料喂给模型，让统计学习决定怎么翻。

这件事有一个常被忽略的反讽：Google Translate 并没有让人类译者消失。它把人类译者过去积累的劳动变成训练数据。

语言学家和译员不再站在系统前台写规则，而是以语料、校对、术语、平行文本的形式进入模型。

知识没有消失，只是位置变了。

从这以后，开放域翻译的主战场不再是「谁的语法规则更漂亮」，而是「谁有更多数据、更好对齐、更强模型、更大算力」。

## 2012：视觉和语音也走上同一条路

2012 年左右，计算机视觉和语音识别同时出现拐点。

视觉里，手工特征如 SIFT、HOG、边缘、纹理、部件模型，开始被深度卷积网络压过。语音里，GMM-HMM 这类传统统计声学模型，也被深度神经网络逐步替代。

这和机器翻译是同一条暗线。

过去我们让专家设计特征：这个边缘重要，这个纹理重要，这个音素结构重要。后来模型说：把原始信号和标签给我，我自己学哪种表征有用。

这就是 Bitter Lesson 的预演。人类设计的中间表征，短期有用；长期会被能吃更多数据和计算的一般学习方法超过。

## 2016：AlphaGo 仍然是混合体

2016 年，AlphaGo 击败李世石。公众看到的是围棋被机器攻破，技术上看到的是一个混合系统。

AlphaGo 使用 policy network、value network、Monte Carlo tree search，也使用了人类专家棋谱进行 supervised learning，再通过自博弈强化学习提升。

所以 AlphaGo Lee 版不是纯频率路线。它还带有人类棋谱这个先验。它代表的是过渡阶段：人类经验、神经网络、搜索、强化学习开始融合。

真正把故事推向 Bitter Lesson 的，是后面的 Zero。

## 2017：AlphaGo Zero / AlphaZero 砍掉人类棋理

AlphaGo Zero 和 AlphaZero 的关键，不是它们会下棋，而是它们不再需要人类棋谱和人类棋理。

它们保留的是什么？游戏规则、自博弈、神经网络、搜索、胜负反馈。

这里有一个分类问题。

如果你把「符号」定义成任何离散规则，那么 AlphaZero 当然不纯，因为围棋有合法落子规则，MCTS 也显式展开搜索树。

但这种定义没有解释力。因为任何任务都有环境定义。围棋规则不是「棋理」，就像物理环境不是「人类先验」，API spec 不是「专家智能」。

在学派史意义上，符号学派指的是人类写进去的领域知识：定式、布局、棋形、厚势、先手、弃子、手写 evaluation function。

AlphaZero 舍弃的正是这些东西。

所以如果按「是否依赖人类领域知识」分类，AlphaZero 应该站在频率 / 经验主义 / 数据驱动阵营。它不是纯前向神经网络，但它是 learning + search 的 Bitter Lesson 案例。

更尖锐地说，人类棋理可以看作人在有限经验和有限计算下形成的压缩启发式。AlphaZero 有自博弈、有搜索、有算力，它不需要先接受这些启发式。

## 2019：Sutton 把这件事命名为 The Bitter Lesson

2019 年，Rich Sutton 写下 The Bitter Lesson。

他的核心观点是：AI 历史上反复发生同一件事。研究者喜欢把人类知识、人类直觉、人类理解写进系统，因为这短期看起来有效；但长期真正胜出的，是能随计算规模扩展的一般方法，尤其是 search 和 learning。

这就是 bitter 的地方。

苦的不是机器更强。苦的是，人类经常高估了自己手写知识的长期价值。

机器翻译里，手写语法输给统计语料，再输给神经网络。视觉里，手工特征输给表征学习。围棋里，人类棋理输给自博弈和搜索。

Bitter Lesson 不是说结构无用。它说的是：不要把不可扩展的人类领域知识放在系统核心。

更好的结构，是可扩展搜索、可学习表征、可执行环境、自动反馈、工具和验证器。

## 2020 以后：大语言模型把符号活动也变成数据

大语言模型出现后，符号派和频率派的边界变得更奇怪。

过去符号派说：智能是符号操作。

LLM 的回答像是：那就给我足够多的人类符号操作轨迹。书、论文、网页、代码、法律文本、病历、问答、翻译、证明、程序、API 文档，全部都是符号活动留下的痕迹。

模型不需要先被明确教「语法是什么」「逻辑是什么」「翻译规则是什么」。它通过预测下一个 token，学习人类如何使用符号。

这不是说 LLM 具有完美理解。它会幻觉，会不稳定，会把语言分布误当现实。

但它确实完成了一个历史性动作：把符号派曾经强调的很多操作，吸收到频率派的训练分布里。

于是现代 AI 系统开始变成一种奇怪的东西：底层是神经网络和统计学习，上层又越来越像符号系统。prompt、JSON schema、tool call、retrieval、workflow、planner、verifier、unit test、policy engine，全都是符号 scaffold。

但主次已经倒过来了。

以前是规则生成答案，统计模块辅助。现在是模型生成候选，符号层约束、验证、执行。

## 2021 以后：科学建模也开始频率化

AlphaFold2 是另一个标志。

蛋白结构预测长期有大量物理、几何、进化、生物化学直觉。AlphaFold2 并不是不要科学，而是把大量结构和序列经验压进模型，让模型学出更强的结构先验。

这类成功说明 Bitter Lesson 不只发生在语言和游戏里。只要有足够数据、明确反馈、可扩展模型，科学建模也会被经验学习重塑。

但科学不会变成纯 frequency。因为科学最后还要机制解释、因果干预、实验验证、物理约束和可重复性。

所以更准确的结论是：频率派赢得 performance core，实验和机制仍然是 truth layer。

## 现在：各行业的终局不是纯 frequency，而是 frequency core + symbolic shell

如果把这条线推到今天，可以得到一个比较稳定的判断：多数领域不会走向纯 frequency，但性能核心会越来越 frequency。

![两大学派如何分工——不是简单的谁取代谁，而是性能核心与控制层的重新分工。](/essays/schools-of-ai-bitter-lesson/schools-divide.webp)

CV 的感知核心几乎已经频率化。图像分类、检测、分割、视觉表征，主线是 self-supervised learning、multimodal pretraining、foundation model。符号层主要留在标签体系、任务定义、安全约束、医学 / 工业工作流里。

机器翻译更典型。规则式翻译基本退出开放域主战场，NMT 和 LLM 成为核心。但在法律、医学、专利、外交文本里，术语表、翻译记忆、风格指南、版本审校仍然重要。

语音也类似。声学到文本的映射由大模型主导，但医疗听写、法律庭审、客服合规仍需要词表、格式、身份、审计和责任链。

推荐、搜索、广告最 frequency-first，因为它们有海量行为数据和快速反馈。但它们也最需要符号规则：反作弊、未成年人保护、政治广告、医疗金融合规、版权和平台政策。

代码生成则更清楚。LLM 负责 proposal，编译器、类型系统、unit tests、static analysis、runtime 负责裁判。代码领域不可能纯 frequency，因为程序是否正确不是由语言像不像决定，而是由执行语义决定。

数学证明更不可能纯 frequency。LLM 可以提出证明思路，真正的证明必须交给 proof checker。这里神经模型负责搜索启发式，符号系统负责真值。

医学也是这样。影像、ECG、病理、组学、文本的表征会越来越 frequency；但治疗决策、指南、RCT、因果推断、监管和 shared decision-making 不会消失。医学最终要回答的不是 P(Y|X)，而是 P(Y|do(A))。

![哪些领域更接近纯频率，哪些必须混合——按数据量与验证需求划分。](/essays/schools-of-ai-bitter-lesson/domains-quadrant.webp)

## Radiology：医学影像里的中间形态

把这条线放进 radiology，会非常清楚。

![医疗版 Bitter Lesson——从专家征象，到影像表型，再到预防与行动闭环。](/essays/schools-of-ai-bitter-lesson/medical-bitter-lesson.webp)

传统放射学是 symbol-first。医生用征象和词典组织世界：ground-glass opacity、spiculation、rim enhancement、washout、restricted diffusion、BI-RADS、LI-RADS、PI-RADS、RECIST。

这些概念非常有用，因为它们把图像变成临床语言。

但 radiomics 做了一件不同的事：先不问这个病灶像什么征象，先把图像转成大量可量化变量。intensity、shape、texture、wavelet、GLCM、GLRLM、GLSZM，然后再找它们和预后、病理、基因突变、治疗反应之间的关系。

这就是典型的 frequency first, relation later。

不过 classic radiomics 不是纯 Bitter Lesson。因为它的特征空间仍然是人设计的。它不是让模型从 raw voxel 直接学 representation，而是用人工设计的定量特征做高维统计。

所以 radiomics 更像过渡形态：从 radiologist semantic signs 走向 deep representation learning 的中间层。

真正更接近 Bitter Lesson 的，是 deep radiomics、self-supervised medical imaging、image-text radiology foundation model。

## Opportunistic screening：radiomics 之后最自然的延伸

如果 radiomics 是把图像变成高维数据，那么 opportunistic screening 就是把 routine clinical data 变成公共卫生入口。

![从 routine data 到 preventive action——把隐藏信号连接到早期干预：量化表型、风险分层、确认检查、临床路径、预防干预。](/essays/schools-of-ai-bitter-lesson/routine-to-prevention.webp)

一张 CT 原本是为了查腹痛、肿瘤、肺炎、外伤。传统工作流只回答适应证问题。

但这张 CT 还可能包含骨密度、椎体压缩骨折、冠脉钙化、主动脉钙化、肝脂肪、肌肉量、内脏脂肪、肺气肿、体成分和衰弱风险。

这些信号过去不是没有，只是没人系统提取。

Opportunistic screening 的逻辑是：既然数据已经存在，为什么不自动提取隐藏 phenotype，找到尚未诊断但可干预的人？

这几乎是医疗版 Bitter Lesson 的理想土壤：routine data 足够多，人工规则覆盖不足，隐藏信号丰富，且很多风险可以干预。

但它也有危险。如果没有 confirm、notify、treat、follow-up、outcome measurement 的闭环，它会变成 incidentaloma factory。

所以 opportunistic screening 的关键不是 AUROC，而是临床路径。检测只是第一步。

## Cardiology：ECG 正在变成高维生理传感器

Cardiology 不是 AI 早期领域。ECG、echo、cardiac imaging 已经有大量 AI 工作，FDA 授权设备也不少。

但 preventive cardiology 和 silent disease screening 仍然很早。

传统 ECG interpretation 是 symbol-first：PR、QRS、QTc、ST elevation、T-wave inversion、axis、bundle branch block、LVH voltage criteria。

AI-ECG 的路线不同。它把 ECG waveform 当作高维生理信号，让模型学习人眼不稳定、甚至看不见的 latent phenotype。

低射血分数、结构性心脏病、房颤风险、肺高压、淀粉样变、心脏年龄、未来心血管事件风险，都可能藏在一张看似普通的 ECG 里。

这和 radiomics 很像：先把 routine signal 转成高维表征，再找它和 hidden disease、future risk、clinical action 的关系。

未来 cardiology 最有价值的不是让 AI 读出明显 AF 或 STEMI。那些问题已经相对成熟。更大的机会是：用低成本 ECG、wearable ECG、PPG、echo、labs、EHR 早期识别 preclinical heart failure、silent structural disease、cardiometabolic trajectory。

## Preventive medicine：真正还在前夜

如果要找还没有完整经历 frequency-first 阶段的医学领域，preventive medicine 可能是最大的一块。

今天的预防医学仍然高度依赖低维 risk score 和 guideline threshold。ASCVD risk、FRAX、FIB-4、STOP-BANG、CHA2DS2-VASc、CKD risk equation，各有价值，但它们基本是 symbol / risk-score first。

它们把复杂人生压缩成少数变量。年龄、性别、血压、胆固醇、吸烟、糖尿病、eGFR、BMI、既往病史。

而真实的患者轨迹远比这复杂。

EHR、labs、medications、imaging phenotype、ECG、wearables、sleep、activity、social determinants、family history、prior utilization、notes，这些数据共同构成一个动态生理状态空间。

未来的 preventive medicine 很可能从单病种 risk score 转向 patient trajectory model。

不是问：这个人十年 ASCVD 风险是多少？而是问：在未来 1、3、5、10 年，他最可能沿着哪些 disease trajectories 演化？哪些轨迹可以通过 statin、SGLT2、GLP-1、BP control、sleep apnea treatment、DXA、smoking cessation、weight intervention 或 social support 改变？

这里 frequency-first 只能完成一半。它能预测轨迹，但预防医学最终要改变轨迹。

所以 preventive medicine 的终局一定是 frequency + causality + guideline + implementation。只预测不干预，不叫预防。

## 怎么寻找下一批机会

如果我们要找下一个还没经历 Bitter Lesson 的领域，可以用一个简单筛选框架。

1. 有没有大量 routine data？
2. 这些数据里有没有未被充分使用的 hidden signal？
3. 目标疾病是不是 underdiagnosed？
4. 早发现是否能改变管理？
5. 自动提取 phenotype 是否可行？
6. 错误代价、过度诊断和 workflow burden 是否可控？

按这个标准，高分方向包括：opportunistic CT screening、AI-ECG / wearable cardiovascular screening、multimodal preventive trajectory model、frailty / sarcopenia / body composition、MASLD/MASH、CKD progression、sleep apnea、primary care preventive gap closure。

它们共同的特征是：数据早就存在，但还没有被充分转成可行动的生理表型。

## 最后：Bitter Lesson 赢的是引擎，不是整辆车

所以这条路的尽头是什么？

不是纯 frequency。至少在真实行业里不是。

更像是：frequency core + symbolic shell + causal layer + verification layer。

![为什么终局不是纯频率学派——性能核心越来越数据驱动，但部署仍然需要符号化的控制外壳。](/essays/schools-of-ai-bitter-lesson/not-pure-frequency.webp)

性能核心会越来越由数据、模型、搜索、自监督、强化学习、世界模型和 scale 推动。

符号不会消失，但它的位置会变。

过去，符号是知识来源。专家把棋理、语法、医学征象、规则写进系统。

未来，符号更多是环境、接口、约束、验证器和责任系统。

- 在 AlphaZero 里，棋理没了，但游戏规则和胜负反馈还在。
- 在 LLM coding 里，人类手写规则没法覆盖所有程序，但 compiler、tests、type system 是最终裁判。
- 在 radiology 里，模型可以学 hidden imaging phenotype，但报告结构、指南、监管和 clinical action pathway 仍然存在。
- 在 preventive medicine 里，模型可以预测未来疾病轨迹，但是否治疗、如何治疗、谁真正获益，必须回到因果推断、试验、指南和患者价值。

这就是一个更精确的结论：Bitter Lesson 不反对结构。它反对的是不可扩展的人类手写领域知识占据性能核心。

未来的强系统，不是纯黑箱，也不是专家系统复辟。它会是 learned representation 负责看见世界，search/planning 负责探索可能，symbolic constraints 负责守边界，causal inference 负责回答干预，verification 负责决定什么是真的。

从语言学家到 Google Translate，从棋理到 AlphaZero，从 radiological signs 到 radiology foundation model，从 risk score 到 preventive trajectory model，这条线其实一直在讲同一个故事。

人类的知识不是没用。只是它最适合的位置，可能不是写在模型核心里，而是定义问题、设计反馈、验证输出、管理风险、决定行动。

这也是 AI 这几十年最苦、也最有用的一课。

---

*参考线索（非正式文献表）：Georgetown-IBM machine translation demonstration；ALPAC report；IBM statistical machine translation；Breiman, Statistical Modeling: The Two Cultures；Google Statistical Machine Translation / Google Translate；GNMT；Attention Is All You Need；AlphaGo, AlphaGo Zero, AlphaZero；Sutton, The Bitter Lesson；GPT-3 / GPT-4 technical reports；AlphaFold2 / AlphaFold3；radiomics and IBSI；radiology foundation models；AI-ECG and opportunistic screening literature.*
