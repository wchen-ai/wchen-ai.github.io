---
title: "From Linguists to World Models: The Hidden Thread in AI's School War"
date: 2026-07-02
summary: "An X-style long essay on symbolism, empirical learning, The Bitter Lesson, and the next opportunity in medicine."
---

*An X-style long essay on symbolism, empirical learning, The Bitter Lesson, and the next opportunity in medicine.*

At the beginning, many people thought intelligence would look like a dictionary.

Write the knowledge down. Let the machine reason over it. Linguists would write grammars. Physicians would write rules. Chess and Go players would write strategic principles. Engineers would write features. If the rules were complete enough, the machine would translate, diagnose, play, and reason.

That was the most intuitive and seductive version of the symbolic school: the world can be decomposed into concepts, rules, relations, and inference chains. Intelligence is the correct manipulation of those symbols.

A large part of AI history has been a repeated demonstration of the same fact: this intuition is beautiful inside small closed worlds, and brittle in open ones.

The opposing camp — better called the data-first, empirical, scale-first route rather than the narrow statistical meaning of frequentism — offered a different answer. Do not rush to tell the machine what the world is. Give it enough experience, data, feedback, search, and compute. Let it learn the representations that matter.

This line runs from machine translation to Google Translate, from human Go knowledge to AlphaZero, from language models swallowing human symbolic activity, and then into radiology foundation models, AI-ECG, opportunistic screening, and preventive medicine.

This is not only a technical history. It is a transfer of epistemic power. Knowledge moves from expert-written rules into data distributions, model parameters, search procedures, and environmental feedback.

![From Symbolic AI to Data-Driven Intelligence — a timeline from rules and expert knowledge to data, search, neural nets, and world models.](/essays/schools-of-ai-bitter-lesson/timeline-en.webp)

## 1954: the first illusion of machine translation

The story can start with machine translation.

In 1954, the Georgetown-IBM experiment publicly demonstrated Russian-English machine translation. The system was small. The vocabulary was small. The rules were few. But the demonstration created a powerful illusion: perhaps translation was just dictionary plus grammar.

If a source-language word has a target-language counterpart, and if a source-language sentence has a target-language structural transformation, then a machine should be able to look up words, apply rules, reorder phrases, and translate.

That was the core of early rule-based machine translation. Direct translation, transfer-based translation, and interlingua systems all shared the same belief: linguists could write down the laws of language, and machines could execute them.

This route was not useless. In controlled texts, fixed domains, fixed sentence types, and fixed terminology, rule systems can work well. The problem appears when language becomes open-ended. The rules explode.

Word-sense ambiguity, reference, ellipsis, idioms, irony, context, domain knowledge, and cultural background all push translation beyond dictionary and grammar. Translation is not simply moving a sentence from one symbol system into another. Translation requires knowing what the sentence means in the world.

## 1966: ALPAC throws cold water on symbolic translation

In 1966, the ALPAC report became an early cold shower for machine translation. Its central judgment was simple: machine translation at the time was far below expectations, especially for reliable translation of general scientific text.

This was a blow to the symbolic camp. Not because grammar was useless, but because too much of language could not be cleanly written as rules.

Machine translation exposed the knowledge acquisition bottleneck for the first time. Experts know how to perform a task, but they struggle to write all of their tacit knowledge into a complete, unambiguous, maintainable machine-readable form.

The same bottleneck would later reappear in medical expert systems, legal expert systems, and industrial rule engines.

## 1970s–1980s: expert systems, the high point of symbolic AI

By the 1970s and 1980s, symbolic AI reached its golden age.

DENDRAL handled chemical structure inference. MYCIN provided infectious disease treatment recommendations. Their idea was clear: encode expert knowledge as if-then rules, then let an inference engine perform forward or backward reasoning.

These systems had a major advantage: explainability. They could tell you why they reached a conclusion, because the rule chain was visible.

They also had a fatal weakness: maintenance cost grew with world complexity. Rules conflicted. Boundary cases multiplied. Exceptions accumulated. An expert system could look like intelligence, while in practice becoming an increasingly fragile knowledge warehouse.

Symbolic AI did not fail because it was entirely wrong. It failed because it did not scale.

When the world is small enough, rules can win. When the world is large enough, rules collapse under their own complexity.

## 1990s: the empirical camp changes the question

Around 1990, machine translation began asking a different question.

Maybe we do not need to teach the machine grammar first. Maybe we only need to show it enough human translations, then let it estimate how humans usually translate this kind of sentence in this kind of context.

IBM statistical machine translation turned translation into a probability problem. Given a source sentence, the target sentence was not produced by explicit rules. It was searched for under a probabilistic model.

In the classic noisy-channel framing, given a source sentence f, the system searches for the most likely target sentence e. The translation model estimates how source and target correspond. The language model estimates whether the target sentence itself sounds natural.

The philosophical change was large.

The symbolic camp asked: what are the laws of language? The empirical camp asked: among many samples, what output is most likely to be accepted by humans?

The former tried to write knowledge as rules. The latter compressed human behavior into a statistical distribution.

## 2001: Breiman and the two cultures

In 2001, Leo Breiman wrote "Statistical Modeling: The Two Cultures." The paper belongs to statistics, but it also reads like a footnote to the broader turn in AI.

One culture assumes that data come from an interpretable stochastic model, and that the analyst should estimate that model. The other treats the true mechanism as a complex black box and focuses on accurate prediction and generalization.

This is not simply frequentist versus Bayesian. The split is closer to explanation-first versus prediction-first; human modeling first versus algorithmic learning first.

Machine learning, deep learning, clinical prediction, recommender systems, and computational advertising mostly expanded along the second culture.

## 2006: Google Translate brings the empirical camp to the public

In 2006, Google Translate launched statistical machine translation at public scale. It was a watershed.

Traditional commercial translation systems still relied heavily on linguists, dictionaries, grammars, and transfer rules. Google took a different route: feed the system large monolingual corpora and parallel texts, then let statistical learning decide how to translate.

There is an irony here that is often missed. Google Translate did not make human translators disappear. It turned the accumulated labor of human translators into training data.

Linguists and translators no longer stood in front of the system writing rules. They entered the model as corpora, edits, terminology, and aligned texts.

Knowledge did not disappear. Its location changed.

From that point on, the main battlefield of open-domain translation was no longer who had the most elegant grammar rules. It was who had more data, better alignment, stronger models, and more compute.

## 2012: vision and speech move onto the same road

Around 2012, computer vision and speech recognition reached similar inflection points.

In vision, handcrafted features such as SIFT, HOG, edges, textures, and part models started to be overtaken by deep convolutional networks. In speech, traditional acoustic models such as GMM-HMMs were gradually displaced by deep neural networks.

This was the same hidden thread as machine translation.

Previously, experts designed the features: this edge matters, this texture matters, this phoneme structure matters. Later the model said: give me the raw signal and the labels, and I will learn which representation is useful.

This was a preview of The Bitter Lesson. Human-designed intermediate representations can be useful in the short run. In the long run, they are often beaten by general learning methods that can absorb more data and compute.

## 2016: AlphaGo is still a hybrid

In 2016, AlphaGo defeated Lee Sedol. The public saw a machine break through Go. Technically, it was a hybrid system.

AlphaGo used a policy network, a value network, Monte Carlo tree search, supervised learning from human expert games, and then self-play reinforcement learning.

So the Lee Sedol version of AlphaGo was not a pure empirical route. It still carried human game records as a prior. It represented a transition: human experience, neural networks, search, and reinforcement learning began to fuse.

The later Zero systems pushed the story closer to The Bitter Lesson.

## 2017: AlphaGo Zero and AlphaZero cut out human Go knowledge

The key point of AlphaGo Zero and AlphaZero was not that they could play board games. It was that they no longer needed human game records or human strategic doctrine.

What did they keep? Game rules, self-play, neural networks, search, and win-loss feedback.

This creates a classification problem.

If one defines symbolic as any discrete rule, then AlphaZero is obviously not pure. Go has legal move rules. MCTS explicitly expands a search tree.

But that definition has little explanatory value. Every task has an environment definition. The rules of Go are not Go theory, just as a physical environment is not a human prior, and an API specification is not expert intelligence.

In the historical school-war sense, symbolic knowledge means human-written domain knowledge: joseki, opening theory, shapes, thickness, sente, sacrifice, and handcrafted evaluation functions.

Those are exactly the things AlphaZero discarded.

So if we classify systems by whether they depend on human domain knowledge, AlphaZero belongs on the empirical, data-driven side. It is not a pure feed-forward neural network, but it is a learning-plus-search case of The Bitter Lesson.

Put more sharply: human Go theory can be understood as compressed heuristics formed under limited human experience and limited human computation. AlphaZero had self-play, search, and compute. It did not need to inherit those heuristics first.

## 2019: Sutton names it The Bitter Lesson

In 2019, Rich Sutton wrote "The Bitter Lesson."

His central claim was that AI history keeps repeating the same pattern. Researchers like to write human knowledge, human intuition, and human understanding into systems, because this often works in the short term. But over the long term, the methods that win are the general methods that scale with computation, especially search and learning.

That is the bitter part.

It is not simply bitter that machines become stronger. It is bitter that humans repeatedly overestimate the long-term value of their hand-written knowledge.

In machine translation, handwritten grammar lost to statistical corpora, then to neural networks. In vision, handcrafted features lost to representation learning. In Go, human strategic doctrine lost to self-play and search.

The Bitter Lesson does not say that structure is useless. It says that non-scalable human domain knowledge should not occupy the performance core of the system.

Better structure means scalable search, learnable representations, executable environments, automatic feedback, tools, and verifiers.

## After 2020: language models turn symbolic activity into data

After large language models appeared, the boundary between the symbolic and empirical camps became stranger.

The symbolic camp once said: intelligence is symbolic manipulation.

The LLM answer is almost: then give me enough traces of human symbolic manipulation. Books, papers, websites, code, legal text, medical notes, question answering, translations, proofs, programs, and API documentation are all residues of symbolic activity.

The model does not have to be explicitly taught what grammar, logic, or translation rules are. By predicting the next token, it learns how humans use symbols.

This does not mean that LLMs possess perfect understanding. They hallucinate. They are unstable. They can confuse linguistic distribution with reality.

But they did perform a historically important move: they absorbed many operations once emphasized by the symbolic camp into the training distribution of the empirical camp.

Modern AI systems therefore become strange hybrids. The lower layer is neural networks and statistical learning. The upper layer increasingly resembles a symbolic system: prompts, JSON schemas, tool calls, retrieval, workflows, planners, verifiers, unit tests, and policy engines.

But the order has inverted.

Before, rules generated the answer and statistics assisted. Now, the model generates candidates, and symbolic layers constrain, verify, and execute.

## After 2021: scientific modeling also becomes empirical

AlphaFold2 is another marker.

Protein structure prediction has long involved physical, geometric, evolutionary, and biochemical intuition. AlphaFold2 did not eliminate science. It compressed large amounts of structural and sequence experience into a model and learned a stronger structural prior.

This kind of success shows that The Bitter Lesson is not limited to language and games. Whenever there is enough data, clear feedback, and scalable models, scientific modeling can also be reshaped by empirical learning.

But science will not become pure frequency. Science still needs mechanism, causal intervention, experimental validation, physical constraints, and reproducibility.

The more precise conclusion is: the empirical camp wins the performance core; experiment and mechanism remain the truth layer.

## Now: the endpoint is not pure frequency, but frequency core plus symbolic shell

If we extend this line to the present, one stable judgment emerges: most domains will not become purely empirical, but their performance cores will become increasingly empirical.

![How the schools divide the work — not replacement, but a redistribution between the performance core and the control layer.](/essays/schools-of-ai-bitter-lesson/schools-divide-en.webp)

The perceptual core of computer vision has almost fully moved in that direction. Image classification, detection, segmentation, and visual representation now revolve around self-supervised learning, multimodal pretraining, and foundation models. The symbolic layer remains in label taxonomies, task definitions, safety constraints, and medical or industrial workflows.

Machine translation is even more typical. Rule-based translation has largely left the open-domain battlefield. NMT and LLMs are the core. Yet in law, medicine, patents, diplomacy, and regulated domains, glossaries, translation memory, style guides, version control, and expert review still matter.

Speech is similar. The acoustic-to-text mapping is dominated by large learned models, but medical dictation, legal transcripts, call-center compliance, and identity-sensitive settings still need vocabularies, formatting, auditability, and responsibility chains.

Recommendation, search, and advertising are among the most frequency-first domains because they have massive behavioral data and fast feedback. They also need some of the strongest symbolic rules: anti-fraud, child protection, political advertising policy, medical and financial compliance, copyright, and platform governance.

Code generation makes the structure even clearer. LLMs produce proposals. Compilers, type systems, unit tests, static analysis, and runtimes judge them. Code cannot be pure frequency, because program correctness is not determined by whether the text looks plausible. It is determined by executable semantics.

Mathematical proof is even less likely to be pure frequency. An LLM can propose proof ideas. A real proof must pass a proof checker. Here the neural model supplies search heuristics; the symbolic system supplies truth.

Medicine follows the same logic. Representations of imaging, ECG, pathology, omics, and clinical text will become increasingly empirical. But treatment decisions, guidelines, randomized trials, causal inference, regulation, and shared decision-making will not disappear. Medicine ultimately asks not only P(Y|X), but P(Y|do(A)).

![Which domains trend toward pure frequency, and which require hybrid systems — mapped by data volume and verification needs.](/essays/schools-of-ai-bitter-lesson/domains-quadrant-en.webp)

## Radiology: an intermediate form inside medical imaging

This history becomes especially clear in radiology.

![The medical version of the Bitter Lesson — from expert signs to imaging phenotypes to prevention and action loops.](/essays/schools-of-ai-bitter-lesson/medical-bitter-lesson-en.webp)

Traditional radiology is symbol-first. Radiologists organize images through signs and vocabularies: ground-glass opacity, spiculation, rim enhancement, washout, restricted diffusion, BI-RADS, LI-RADS, PI-RADS, RECIST.

These concepts are powerful because they translate images into clinical language.

Radiomics did something different. Instead of first asking which visual sign a lesion resembles, it converted images into many quantitative variables: intensity, shape, texture, wavelet features, GLCM, GLRLM, GLSZM. It then searched for relationships between those variables and prognosis, pathology, mutations, and treatment response.

That is frequency first, relation later.

Classic radiomics, however, is not pure Bitter Lesson. Its feature space is still human-designed. It does not let a model learn representation directly from raw voxels; it applies engineered quantitative features and then runs high-dimensional statistics.

So radiomics is better understood as a transitional layer: between radiologist semantic signs and deep representation learning.

The approaches closer to The Bitter Lesson are deep radiomics, self-supervised medical imaging, and image-text radiology foundation models.

## Opportunistic screening: the natural extension after radiomics

If radiomics turns images into high-dimensional data, opportunistic screening turns routine clinical data into a public-health entry point.

![From routine data to preventive action — bridging hidden signals to early intervention: quantify, stratify, confirm, route, and intervene.](/essays/schools-of-ai-bitter-lesson/routine-to-prevention-en.webp)

A CT scan may have been ordered for abdominal pain, cancer staging, pneumonia, or trauma. The traditional workflow answers the indication.

But the same CT may also contain bone density, vertebral compression fractures, coronary calcium, aortic calcification, liver fat, muscle mass, visceral fat, emphysema, body composition, and frailty risk.

These signals were not absent. They were simply not extracted systematically.

The logic of opportunistic screening is: if the data already exist, why not automatically extract hidden phenotypes and identify people who are undiagnosed but actionable?

This is almost ideal soil for a medical version of The Bitter Lesson: routine data are abundant, manual rules cover too little, hidden signals are rich, and many risks are modifiable.

But the risk is also obvious. Without a closed loop of confirmation, notification, treatment, follow-up, and outcome measurement, opportunistic screening becomes an incidentaloma factory.

So the key metric is not just AUROC. The key is the clinical pathway. Detection is only the first step.

## Cardiology: ECG is becoming a high-dimensional physiological sensor

Cardiology is not an early AI field. ECG, echocardiography, and cardiac imaging already have substantial AI work and many regulated products.

But preventive cardiology and silent disease screening remain early.

Traditional ECG interpretation is symbol-first: PR interval, QRS duration, QTc, ST elevation, T-wave inversion, axis, bundle branch block, and LVH voltage criteria.

AI-ECG takes a different route. It treats the ECG waveform as a high-dimensional physiological signal and lets the model learn latent phenotypes that human eyes detect unreliably, or cannot see at all.

Low ejection fraction, structural heart disease, atrial fibrillation risk, pulmonary hypertension, amyloidosis, cardiac age, and future cardiovascular event risk may all leave traces in an apparently ordinary ECG.

This is close to radiomics: transform a routine signal into a high-dimensional representation, then find its relationship to hidden disease, future risk, and clinical action.

The most valuable future in cardiology is probably not AI reading obvious AF or STEMI. Those problems are comparatively mature. The larger opportunity is using low-cost ECG, wearable ECG, PPG, echo, labs, and EHR data to detect preclinical heart failure, silent structural disease, and cardiometabolic trajectories earlier.

## Preventive medicine: still at the edge of the transition

If we look for a medical domain that has not yet fully passed through the frequency-first stage, preventive medicine may be the largest one.

Today, prevention still depends heavily on low-dimensional risk scores and guideline thresholds: ASCVD risk, FRAX, FIB-4, STOP-BANG, CHA2DS2-VASc, and CKD risk equations. Each has value, but the pattern is still symbol/risk-score first.

They compress a complex life into a small number of variables: age, sex, blood pressure, cholesterol, smoking, diabetes, eGFR, BMI, and prior diagnoses.

Real patient trajectories are much more complex.

EHR, labs, medications, imaging phenotypes, ECG, wearables, sleep, activity, social determinants, family history, prior utilization, and clinical notes together form a dynamic physiological state space.

Future preventive medicine will likely move from single-disease risk scores to patient trajectory models.

The question will not only be: what is this person's 10-year ASCVD risk? It will be: over the next 1, 3, 5, and 10 years, which disease trajectories is this person most likely to follow? Which of those trajectories can be changed by statins, SGLT2 inhibitors, GLP-1 receptor agonists, blood-pressure control, sleep-apnea treatment, DXA, smoking cessation, weight intervention, or social support?

Here, frequency-first methods only solve half the problem. They can predict trajectories. But preventive medicine must ultimately change trajectories.

So the endpoint of preventive medicine is necessarily frequency plus causality plus guidelines plus implementation. Prediction without intervention is not prevention.

## How to search for the next opportunities

If we want to identify the next domains that have not yet gone through The Bitter Lesson, a simple screening framework helps.

1. Is there a large volume of routine data?
2. Does that data contain hidden signals that are not being fully used?
3. Is the target disease underdiagnosed?
4. Would earlier detection change management?
5. Is automated phenotype extraction feasible?
6. Are the harms from error, overdiagnosis, and workflow burden controllable?

By this standard, high-scoring opportunities include opportunistic CT screening, AI-ECG and wearable cardiovascular screening, multimodal preventive trajectory models, frailty and sarcopenia phenotyping, body composition, MASLD/MASH, CKD progression, sleep apnea, and primary-care preventive gap closure.

Their common feature is simple: the data already exist, but they have not yet been converted into actionable physiological phenotypes.

## Final point: The Bitter Lesson wins the engine, not the whole vehicle

So what is the endpoint of this road?

Not pure frequency. At least not in real industries.

A better description is: frequency core plus symbolic shell plus causal layer plus verification layer.

![Why the end state is not pure frequency — the performance core is increasingly data-driven, but deployment still needs a symbolic control shell.](/essays/schools-of-ai-bitter-lesson/not-pure-frequency-en.webp)

The performance core will increasingly be driven by data, models, search, self-supervision, reinforcement learning, world models, and scale.

Symbols will not disappear. Their role will change.

In the past, symbols were treated as the source of knowledge. Experts wrote Go theory, grammar, medical signs, and decision rules into the system.

In the future, symbols will more often function as environments, interfaces, constraints, verifiers, and responsibility systems.

- In AlphaZero, human Go doctrine disappeared, but game rules and win-loss feedback remained.
- In LLM coding, human-written rules cannot cover every program, but compilers, tests, and type systems remain the final judges.
- In radiology, models can learn hidden imaging phenotypes, but report structure, guidelines, regulation, and clinical action pathways remain.
- In preventive medicine, models can predict future disease trajectories, but whether to treat, how to treat, and who truly benefits must return to causal inference, trials, guidelines, and patient values.

That gives a more precise conclusion: The Bitter Lesson does not reject structure. It rejects non-scalable human-written domain knowledge occupying the performance core.

Strong future systems will not be pure black boxes, and they will not be a revival of old expert systems. Learned representation will see the world. Search and planning will explore possibilities. Symbolic constraints will guard the boundaries. Causal inference will answer intervention questions. Verification will decide what is true.

From linguists to Google Translate, from Go theory to AlphaZero, from radiological signs to radiology foundation models, from risk scores to preventive trajectory models, the same story keeps repeating.

Human knowledge is not useless. It may simply belong less inside the performance core and more in problem definition, feedback design, output verification, risk management, and action.

That is one of the bitterest and most useful lessons in the history of AI.

---

*Informal source trail: Georgetown-IBM machine translation demonstration; ALPAC report; IBM statistical machine translation; Leo Breiman, "Statistical Modeling: The Two Cultures"; Google Statistical Machine Translation / Google Translate; Google Neural Machine Translation; "Attention Is All You Need"; AlphaGo, AlphaGo Zero, and AlphaZero; Rich Sutton, "The Bitter Lesson"; GPT-3 and GPT-4 technical reports; AlphaFold2 and AlphaFold3; radiomics and IBSI literature; radiology foundation models; AI-ECG; opportunistic screening; preventive medicine and multimodal trajectory modeling literature.*
