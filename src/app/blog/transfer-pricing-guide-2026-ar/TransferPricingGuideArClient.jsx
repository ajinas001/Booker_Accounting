"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ArrowLeft,
  Info,
  ShieldCheck,
  Scale,
  Sparkles,
  Layers,
  Lightbulb,
  FolderGit2,
  Check,
  AlertCircle,
  Database,
  Building,
  Globe
} from "lucide-react";
import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import FloatingService from "@/components/FloatingService";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Section = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function TransferPricingGuideArClient() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const quickPoints = [
    {
      num: "١",
      title: "مبدأ السعر المحايد هو القاعدة",
      body: "يجب أن تعادل الإتاوة بين الأطراف المرتبطة ما تتفق عليه أطراف مستقلة في ظروف ومعاملات تجارية مماثلة.",
    },
    {
      num: "٢",
      title: "امتلاك الملكية الفكرية لا يكفي",
      body: "يبحث تحليل DEMPE في من يصنع قيمة الملكية الفكرية ويتحكم فيها فعلياً، لا في اسم من سُجّلت باسمه رسمياً فقط.",
    },
    {
      num: "٣",
      title: "اختر الطريقة المناسبة",
      body: "طريقة المعاملة المستقلة المماثلة (CUT) هي الأكثر مباشرة عند توفر اتفاقيات ترخيص مماثلة، وطريقة تقسيم الأرباح تناسب الأصول الفريدة.",
    },
    {
      num: "٤",
      title: "اعرف الحدود المطبقة في الإمارات",
      body: "بحسب حجم إيراداتك، قد تكون ملزماً بإعداد ملف رئيسي وملف محلي وتقديم نموذج إفصاح سنوي عن تسعير المعاملات.",
    },
    {
      num: "٥",
      title: "التوثيق هو خط دفاعك",
      body: "اتفاقية ترخيص مكتوبة ودراسة مقارنة معتمدة ومراجعات دورية منتظمة هي ما يحمي النسبة التي اخترتها أمام الهيئة الاتحادية للضرائب.",
    },
  ];

  const ipTypes = [
    {
      type: "براءات الاختراع",
      examples: "حقوق الاختراعات، التصاميم الهندسية، التركيبات، المنتجات أو العمليات الصناعية الاحتكارية",
      icon: Lightbulb,
    },
    {
      type: "العلامات والأسماء التجارية",
      examples: "الشعارات، الأسماء التجارية، مفاهيم المطاعم والمقاهي، الهويات البصرية ومتاجر التجزئة",
      icon: Sparkles,
    },
    {
      type: "حقوق النشر والبرمجيات",
      examples: "التطبيقات الذكية، المنصات السحابية، الأنظمة الداخلية، قواعد البيانات، والمحتوى الإبداعي",
      icon: Layers,
    },
    {
      type: "المعرفة الفنية والأسرار التجارية",
      examples: "الوصفات، التركيبات الكيميائية، أساليب التصنيع، أدلة التشغيل القياسية (SOPs)",
      icon: FolderGit2,
    },
    {
      type: "قوائم العملاء والعلاقات",
      examples: "قواعد بيانات العملاء والموردين الحصرية التي بُنيت عبر سنوات طويلة من النشاط التجاري",
      icon: Database,
    },
  ];

  const dempeFunctions = [
    {
      letter: "D",
      name: "التطوير (Development)",
      desc: "إنشاء وابتكار الملكية الفكرية وتصميمها وتمويل أبحاثها الأولية.",
    },
    {
      letter: "E",
      name: "التحسين (Enhancement)",
      desc: "تطوير الملكية الفكرية وتعزيز قيمتها وتحديثها المستمر لمواكبة السوق.",
    },
    {
      letter: "M",
      name: "الصيانة (Maintenance)",
      desc: "إبقاؤها محدثة وضمان استمراريتها التقنية وجودتها التشغيلية.",
    },
    {
      letter: "P",
      name: "الحماية (Protection)",
      desc: "تسجيلها قانونياً، والدفاع عنها ضد الانتهاكات والتعديات التجارية.",
    },
    {
      letter: "E",
      name: "الاستغلال (Exploitation)",
      desc: "استخدامها تجارياً في التسويق والبيع وتحقيق العوائد والأرباح.",
    },
  ];

  const methods = [
    {
      name: "طريقة المعاملة المستقلة المماثلة (CUT)",
      how: "تقارن إتاوتك بالنسب والأسعار الواردة في اتفاقيات ترخيص فعلية بين شركات مستقلة وغير مرتبطة.",
      bestFor: "عند توفر اتفاقيات ترخيص مماثلة موثوقة في السوق. وهي الطريقة الأكثر مباشرة والمفضلة دولياً.",
      highlight: true,
    },
    {
      name: "طريقة تقسيم الأرباح (Profit Split)",
      how: "تقسم صافي الأرباح المشتركة الناتجة عن الملكية الفكرية بحسب القيمة الاقتصادية والمخاطر التي تسهم بها كل شركة.",
      bestFor: "الملكية الفكرية الفريدة، أو عندما تقدم الشركتان مساهمات جوهرية غير روتينية في تطوير الأصل.",
      highlight: false,
    },
    {
      name: "طريقة صافي هامش المعاملات (TNMM)",
      how: "تتحقق من هامش الربح التشغيلي للمرخَّص له للتأكد من أنه لا يزال يحقق ربحاً طبيعياً معتاداً بعد سداد الإتاوة.",
      bestFor: "الاختبار الثانوي: التأكد من أن الإتاوة لا تستنزف أرباح المرخَّص له أو تتركه بهامش غير تجاري.",
      highlight: false,
    },
  ];

  const benchmarkingFactors = [
    {
      factor: "نوع الملكية الفكرية وقوتها",
      effect: "براءة اختراع قوية أو علامة تجارية مرموقة تبرر نسبة إتاوة أعلى بكثير من علامة تجارية ناشئة أو غير مسجلة.",
    },
    {
      factor: "الحصرية (Exclusivity)",
      effect: "التراخيص الحصرية تمنح المرخَّص له حماية سوقية مطلقة، مما يبرر فرض إتاوة أعلى مقارنة بالتراخيص غير الحصرية.",
    },
    {
      factor: "النطاق الجغرافي والمدة",
      effect: "الحقوق الممنوحة لنطاق جغرافي أوسع (مثل مستوى دول الخليج) ولمدد تعاقدية أطول تحمل قيمة اقتصادية أعلى.",
    },
    {
      factor: "هوامش القطاع التجاري",
      effect: "القطاعات ذات الهوامش المرتفعة (كالبرمجيات والسلع الفاخرة) تتحمل إتاوات أعلى من القطاعات ذات الهوامش الضعيفة.",
    },
    {
      factor: "مرحلة التطوير والجاهزية",
      effect: "الملكية الفكرية المثبتة والمدرة للتدفقات النقدية قيمتها السوقية أعلى بكثير من الأصول في مراحلها التجريبية الأولى.",
    },
    {
      factor: "مستوى الحماية القانونية",
      effect: "تسجيل الملكية الفكرية رسمياً في جميع الأسواق المستهدفة يقلل المخاطر القانونية ويدعم نسبة إتاوة أعلى.",
    },
    {
      factor: "مساهمة المرخَّص له التسويقية",
      effect: "إذا كان المرخَّص له يستثمر ميزانيات ضخمة في الإعلان وبناء شهرة العلامة محلياً، فإن ذلك يبرر خفض نسبة الإتاوة.",
    },
  ];

  const benchmarkingSteps = [
    { step: "١", text: "حدد الملكية الفكرية والحقوق بدقة: ما المرخّص بالتحديد، وفي أي نطاق جغرافي، ولأي مدة، وهل الترخيص حصري." },
    { step: "٢", text: "حلّل الشركتين المرتبطتين: الوظائف التشغيلية، الأصول المستخدمة، والمخاطر الاقتصادية التي تتحملها كل جهة." },
    { step: "٣", text: "أَجْرِ تحليل DEMPE: حدد من يسيطر فعلياً على وظائف صنع القيمة ومن يتحمل المخاطر المالية المرتبطة بها." },
    { step: "٤", text: "ابحث عن تراخيص مماثلة: باستخدام قواعد بيانات التراخيص العالمية المعتمدة والإفصاحات المالية الرسمية." },
    { step: "٥", text: "فرز المقارنات وتنقيتها: حسب القطاع، نوع الأصل، الحصرية، النطاق الإقليمي، والمدة الزمنية." },
    { step: "٦", text: "عدّل الفروقات الاقتصادية: مراعاة الفروقات التي تؤثر في النسبة متى أمكن قياسها بدرجة موثوقة." },
    { step: "٧", text: "حدد النطاق المحايد: استخراج النطاق الربيعي (Interquartile Range) للنسب المستخلصة من عينة المقارنة." },
    { step: "٨", text: "اختر نسبتك ووثّق أسبابها: تثبيت النسبة المختارة ضمن النطاق مع إيضاح المبررات التجارية لاختيارها." },
    { step: "٩", text: "راجع النسبة دورياً: مراجعة الإتاوة كلما طرأ تغيير جوهري على حجم الأعمال أو قيمة الأصل أو ظروف السوق." },
  ];

  const thresholds = [
    {
      requirement: "الملف الرئيسي (Master File)",
      when: "إيراداتك تبلغ 200 مليون درهم أو أكثر، أو إيرادات المجموعة الموحدة 3.15 مليار درهم أو أكثر.",
      what: "نظرة عامة شاملة على المجموعة العالمية، تشمل هيكل ملكية الملكية الفكرية وسياسات تسعير المعاملات المعتمدة.",
    },
    {
      requirement: "الملف المحلي (Local File)",
      when: "نفس حدود الملف الرئيسي (200 مليون درهم على المستوى الفردي أو عضو بمجموعة دولية تتجاوز 3.15 مليار).",
      what: "توثيق مفصل للمشروعات والمعاملات مع الأطراف المرتبطة، والتحليل الوظيفي (FAR)، وتحليل DEMPE، ودراسة المقارنة.",
    },
    {
      requirement: "نموذج الإفصاح عن تسعير المعاملات",
      when: "إجمالي المعاملات مع الأطراف المرتبطة يتجاوز 40 مليون درهم (مع الإفصاح عن كل فئة، كالملكية الفكرية، إذا فاقت 4 ملايين درهم).",
      what: "جدول إلزامي يُقدّم سنوياً مع إقرار ضريبة الشركات يفصح عن قيم المعاملات البينية والطرق المستخدمة لتسعيرها.",
    },
    {
      requirement: "جدول الأشخاص المرتبطين",
      when: "المدفوعات لأي شخص مرتبط (كالمالكين والمديرين والشركاء) تتجاوز 500,000 درهم خلال الفترة الضريبية.",
      what: "جدول تفصيلي يرفق مع الإقرار الضريبي يثبت توافق المبالغ والرواتب والرسوم المدفوعة مع القيمة السوقية العادلة.",
    },
  ];

  const defenceDocuments = [
    "اتفاقية ترخيص رسمية مكتوبة: تحدد بوضوح موضوع الملكية الفكرية، النطاق الجغرافي، الحصرية، المدة، أساس احتساب الإتاوة ونسبتها.",
    "تحليل وظيفي متكامل (FAR): يوضح المهام التي تقوم بها كل شركة، والأصول المستخدمة، والمخاطر التي تتحملها كل جهة.",
    "خريطة تحليل DEMPE: مستندات تثبت من يؤدي كل وظيفة صانعة للقيمة ويشرف عليها ويمولها فعلياً.",
    "دراسة مقارنة مستقلة (Benchmarking Study): مستندة إلى بيانات سوقية معتمدة تحدد النطاق المحايد للنسب المقبولة.",
    "نماذج مالية واختبارات ربحية: توضح أثر الإتاوة على هامش ربح المرخَّص له وتثبت عدم تحوله إلى خسائر غير تجارية.",
    "سجلات المراجعة السنوية: محاضر وقرارات تثبت مراجعة الإتاوة والتأكد من استمرار عدالتها التجارية مع تغير الظروف.",
  ];

  const redFlags = [
    {
      title: "غياب اتفاقية ترخيص مكتوبة",
      desc: "من الصعب جداً الدفاع عن الإتاوة أمام الهيئة بدون عقد رسمي محدد الشروط والأحكام والتواريخ.",
    },
    {
      title: "مالك للملكية الفكرية بلا وجود فعلي",
      desc: "شركة صورية تملك الاسم التجاري لكنها تفتقر للموظفين والمكاتب ولا تدير الملكية الفكرية أو تحميها قانونياً.",
    },
    {
      title: "غياب دراسة المقارنة السوقية",
      desc: "تحديد نسبة الإتاوة بناءً على اجتهاد شخصي أو قواعد تقريبية دون الاستناد إلى أدلة وبيانات موثوقة من السوق.",
    },
    {
      title: "إتاوة تمحو أرباح المرخَّص له بالكامل",
      desc: "عندما تؤدي الإتاوة إلى تحويل الشركة التشغيلية المحلية إلى كيان خاسر بشكل دائم، مما يثير شكوك ترحيل الأرباح.",
    },
    {
      title: "إتاوات يدفعها مرخَّص له يعاني خسائر متكررة",
      desc: "في الواقع التجاري، يمتنع الطرف المستقل عن الاستمرار في سداد إتاوة باهظة تدفعه نحو الإفلاس التشغيلي.",
    },
    {
      title: "الاحتساب المزدوج للرسوم",
      desc: "تقاضي إتاوة ملكية فكرية مستقلة بالإضافة إلى رسوم إدارية أو إشرافية تغطي في جوهرها نفس الخدمات الفنية.",
    },
    {
      title: "نسبة إتاوة لم تُراجع منذ سنوات",
      desc: "إبقاء نفس النسبة ثابتة رغم تغير حجم السوق أو تقادم التكنولوجيا أو تحمل المرخَّص له لمعظم نفقات الدعاية.",
    },
  ];

  const faqs = [
    {
      q: "ما هي نسبة الإتاوة المحايدة؟",
      a: "هي النسبة التي تقع ضمن النطاق السعري الذي كانت ستتفق عليه شركتان مستقلتان تماماً عند ترخيص ملكية فكرية مماثلة في ظل نفس الشروط والظروف الاقتصادية، وهو المعيار الإلزامي المنصوص عليه في المادة 34 من قانون ضريبة الشركات وإرشادات منظمة التعاون الاقتصادي والتنمية (OECD).",
    },
    {
      q: "هل يمكن لشركة مرتبطة استخدام ملكيتنا الفكرية مجاناً؟",
      a: "في حالات نادرة ومحدودة للغاية فقط، مثل أن تكون الملكية الفكرية عديمة القيمة التجارية المستقلة، أو عندما يقوم الكيان المستخدم نفسه بتطوير وخلق معظم القيمة السوقية للأصل. أما بالنسبة للأصول القيمة كالعلامات والبرمجيات، فإن الإتاوة الصفرية ستُعتبر ترحيلاً مصطنعاً للأرباح وستخضع لتعديل الهيئة.",
    },
    {
      q: "كم مرة يجب مراجعة نسبة الإتاوة؟",
      a: "يجب مراجعة التأثير المالي للإتاوة على أرباح الشركتين سنوياً، مع تحديث دراسة المقارنة الشاملة وقواعد البيانات كل 3 إلى 5 سنوات، أو بصورة فورية عند حدوث أي إعادة هيكلة كبرى أو إطلاق منتجات جديدة أو تغير جوهري في هوامش الربحية.",
    },
    {
      q: "ماذا يحدث إذا لم تكن نسبتنا محايدة؟",
      a: "إذا تبين للهيئة الاتحادية للضرائب أثناء التدقيق أن نسبة الإتاوة لا تتوافق مع مبدأ السعر المحايد، فيحق لها بموجب القانون تعديل وعائك الضريبي الخاضع للضريبة، مما يترتب عليه فرض ضريبة شركات إضافية، وغرامات تأخير وإفصاح، وتوسيع نطاق التدقيق ليشمل سنوات مالية سابقة.",
    },
  ];

  return (
    <div dir="rtl" className="font-arabic text-right selection:bg-textprimary selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/uaecorporatetax.webp"
            alt="دليل تسعير المعاملات للملكية الفكرية 2026 في الإمارات - بوكر للمحاسبة"
            priority
            fill
            sizes="100vw"
            className="object-cover object-center transform-gpu select-none"
            style={{
              WebkitTransform: "translateZ(0)",
              backfaceVisibility: "hidden",
              transformStyle: "preserve-3d",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-black/95 via-black/80 to-black/90 pointer-events-none" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          {/* Breadcrumb + Language Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex flex-wrap items-center justify-between gap-4"
          >
            <div className="text-sm md:text-base flex flex-wrap text-gray-300 gap-x-2">
              <Link href="/" className="text-white hover:text-textprimary transition-colors">
                الرئيسية
              </Link>
              <span>‹</span>
              <Link href="/blog" className="text-white hover:text-textprimary transition-colors">
                المدونة
              </Link>
              <span>‹</span>
              <span className="text-textprimary font-medium">
                دليل تسعير المعاملات 2026 · الإمارات
              </span>
            </div>

            {/* Language Switcher Badge */}
            <Link
              href="/blog/transfer-pricing-guide-2026"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-sans text-gray-200 hover:text-white transition-all backdrop-blur-sm"
              title="Read English Version"
            >
              <Globe className="w-3.5 h-3.5 text-textprimary" />
              <span>English Version</span>
            </Link>
          </motion.div>

          {/* Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-textprimary border border-textprimary/40 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-sm">
              دليل تسعير المعاملات 2026 &nbsp;·&nbsp; الإمارات
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.2] mb-6"
          >
            تسعير المعاملات للملكية الفكرية:<br />
            <span className="text-transparent bg-clip-text bg-textprimary">
              نسب الإتاوات وقواعد الإمارات.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-lg md:text-2xl text-gray-200 max-w-4xl leading-relaxed"
          >
            كيف تحدد إتاوة وفق مبدأ السعر المحايد للعلامات التجارية والبرمجيات والمعرفة الفنية بين الشركات المرتبطة، وما الذي تطلبه ضريبة الشركات في الإمارات منك الاحتفاظ به.
          </motion.p>

          {/* Meta line */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1 }}
            className="mt-6 text-sm text-gray-400"
          >
            بوكر للمحاسبة والاستشارات &nbsp;|&nbsp; نوفمبر 2026 &nbsp;|&nbsp; bookeraccounting.com
          </motion.p>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="min-h-screen bg-white">
        {/* Reading Progress Bar (mirrored for RTL) */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-textsecondary origin-right z-50"
          style={{ scaleX }}
        />

        <main className="max-w-7xl mx-auto px-6 py-16">
          {/* Quick Highlight Stats Cards */}
          <Section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-center">
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">المادة ٣٤</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                مبدأ السعر المحايد القانوني
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">DEMPE</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                ٥ وظائف اقتصادية لصنع القيمة
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">٣ طرق</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                CUT وتقسيم الأرباح و TNMM
              </p>
            </div>
            <div className="p-6 bg-purpletint rounded-2xl shadow-sm border border-purpletint hover:border-textsecondary/30 transition-all">
              <div className="text-3xl lg:text-4xl font-bold text-textsecondary mb-2">٧ سنوات</div>
              <p className="text-xs text-gray-600 uppercase tracking-wide font-semibold">
                المدة الإلزامية لحفظ السجلات
              </p>
            </div>
          </Section>

          {/* Narrative Introduction */}
          <Section className="mb-14">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              عندما تسمح شركة ضمن مجموعة لشركة أخرى باستخدام علامتها التجارية أو برمجياتها أو معرفتها الفنية، فإنها عادةً ما تتقاضى مقابل ذلك إتاوة. وبين الشركات المرتبطة، لا يمكن أن تكون هذه الإتاوة أي رقم تختاره بحرية أو وفق تقديرات ضريبية خاصة. فبموجب ضريبة الشركات في دولة الإمارات، يجب أن تعادل الإتاوة ما كانت ستتفق عليه شركتان مستقلتان تماماً في السوق الحر. وإذا أخطأت في تسعيرها، تمتلك الهيئة الاتحادية للضرائب الصلاحية القانونية الكاملة لتعديل دخلك الخاضع للضريبة.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              يشرح هذا الدليل بلغة مهنية مبسطة تسعير المعاملات للملكية الفكرية (IP): كيف تُحدد نسب الإتاوات العادلة، وما المقصود بتحليل DEMPE الدولي، وما الطرق المعتمدة، وما الوثائق الرسمية التي يجب أن تحتفظ بها الشركات في الإمارات لحماية موقفها الضريبي.
            </p>
          </Section>

          {/* The Quick Version (الخلاصة السريعة) */}
          <Section className="mb-20">
            <div className="p-8 md:p-12 bg-slate-900 rounded-3xl text-white shadow-xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  الملخص التنفيذي
                </span>
                <h2 className="text-2xl md:text-4xl font-bold">
                  الخلاصة السريعة <span className="text-textprimary">(إذا لم تقرأ سوى هذا القسم)</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quickPoints.map((p) => (
                  <div
                    key={p.num}
                    className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-textprimary/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-textprimary/20 text-textprimary font-extrabold flex items-center justify-center text-lg mb-4">
                        {p.num}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-white">{p.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{p.body}</p>
                    </div>
                  </div>
                ))}

                {/* Direct takeaway box */}
                <div className="p-6 rounded-2xl bg-textsecondary/30 border border-textprimary/40 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-textprimary font-bold text-sm uppercase tracking-wide mb-2">
                    <ShieldCheck className="w-5 h-5" /> متطلب جوهري
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed">
                    بموجب المادة 34 من قانون ضريبة الشركات، يجب إبرام العقود وتحديد نسب الإتاوات على أسس تجارية مسبقة قبل إقفال السنة المالية، وليس بأثر رجعي عند بدء التدقيق الضريبي.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Section: What is transfer pricing for intellectual property? */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-6">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                ٠١ · التعريف الأساسي
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ما هو تسعير المعاملات للملكية الفكرية؟
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="text-gray-700 leading-relaxed space-y-4">
                <p>
                  تسعير المعاملات للملكية الفكرية هو الطريقة التي تُسعّر بها الشركات المرتبطة استخدام الأصول غير الملموسة أو نقلها فيما بينها. مثل شركة أم في الإمارات ترخّص علامتها التجارية لشركة شقيقة تفتتح فروعاً في السعودية، أو شركة في منطقة حرة ترخّص برمجياتها وتطبيقاتها الذكية لشركة تابعة في البر الرئيسي.
                </p>
                <p>
                  تحظى الملكية الفكرية باهتمام بالغ ورقابة استثنائية من السلطات الضريبية لأنها لا تتخذ شكلاً مادياً ملموساً، وقيمتها الفعلية يصعب قياسها بأساليب التكلفة المعتادة، ويمكن نقلها عبر الحدود بسهولة. وقد يؤدي تغيير بسيط بنسبة 1% أو 2% في الإتاوة إلى نقل ملايين الدراهم من الأرباح الخاضعة للضريبة من شركة إلى أخرى، أو من دولة إلى دولة أخرى.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-purpletint border border-gray-200">
                <h3 className="font-bold text-slate-900 text-lg mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5 text-textsecondary" /> لماذا تركز الهيئة الاتحادية للضرائب عليها؟
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span><strong>مرونة النقل:</strong> سهولة تسجيل الأصول في كيانات تخضع لنسبة ضريبية 0% أو إعفاءات خاصة.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span><strong>صعوبة التقييم الموضوعي:</strong> غياب أسعار استرشادية علنية كالموجودة في السلع والخدمات التقليدية.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
                    <span><strong>مخاطر تآكل الوعاء الضريبي:</strong> اعتبار الإتاوة مصاريف قابلة للخصم في الشركة التشغيلية يقلل ربحها الخاضع للضريبة.</span>
                  </li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Section: What counts as IP for transfer pricing? */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                ٠٢ · نطاق الأصول
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ما الذي يُعد ملكية فكرية لأغراض تسعير المعاملات؟
              </h2>
              <p className="text-gray-600">
                لا يقتصر مفهوم الملكية الفكرية في تسعير المعاملات على براءات الاختراع والعلامات المسجلة رسمياً فحسب، بل يشمل كل أصل تجاري غير ملموس يسهم في توليد أرباح وعوائد تفوق المعتاد:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {ipTypes.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.type}
                    className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-xl bg-textsecondary/10 text-textsecondary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.type}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.examples}</p>
                  </div>
                );
              })}

              {/* The Key Takeaway Box */}
              <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div>
                  <span className="text-xs font-bold tracking-widest uppercase text-textprimary block mb-2">
                    القاعدة الذهبية في التقييم
                  </span>
                  <h3 className="text-xl font-bold mb-3 text-white">صنع القيمة أهم من التسجيل</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    السؤال الأساسي ليس ما إذا كانت الملكية الفكرية مسجلة بشهادة رسمية، بل ما إذا كانت تصنع قيمة اقتصادية حقيقية يدفع طرف مستقل مقابل استخدامها في السوق الحر.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 text-xs text-textprimary font-semibold">
                  معيار المادة ٣٤ من قانون ضريبة الشركات
                </div>
              </div>
            </div>
          </Section>

          {/* Section: How IP royalties are usually structured */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                ٠٣ · صياغة الإتاوات
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                كيف تُصاغ إتاوات الملكية الفكرية عادةً؟
              </h2>
              <p className="text-gray-600">
                الإتاوة هي المقابل المالي الذي يدفعه مستخدم الملكية الفكرية (المرخَّص له) لمالكها القانوني (المرخِّص). ويمكن تحديدها تعاقدياً بعدة هياكل:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-textsecondary/10 text-textsecondary flex items-center justify-center font-bold shrink-0">
                    %
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">نسبة من الإيرادات (الأكثر شيوعاً)</h3>
                    <p className="text-sm text-gray-600">تُحتسب كنسبة مئوية من إجمالي أو صافي المبيعات الناتجة عن المنتجات أو الخدمات التي تعتمد على الملكية الفكرية.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-textsecondary/10 text-textsecondary flex items-center justify-center font-bold shrink-0">
                    📈
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">نسبة من الأرباح التشغيلية</h3>
                    <p className="text-sm text-gray-600">ربط المقابل بصافي الربح المحقق من الأصل، وهي مناسبة عندما يتحمل المرخَّص له مخاطر تسويقية وتشغيلية عالية.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-textsecondary/10 text-textsecondary flex items-center justify-center font-bold shrink-0">
                    🏷️
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">رسم مقطوع ثابت عن كل وحدة</h3>
                    <p className="text-sm text-gray-600">تحديد مبلغ درهمي ثابت عن كل منتج يتم تصنيعه أو بيعه، أو عن كل مستخدم نشط للبرمجيات.</p>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-gray-200 bg-white flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-textsecondary/10 text-textsecondary flex items-center justify-center font-bold shrink-0">
                    💼
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">مبلغ مقطوع لمرة واحدة أو نموذج مختلط</h3>
                    <p className="text-sm text-gray-600">سداد دفعة أولى عند بدء تشغيل الامتياز أو الترخيص، يتبعها إتاوات دورية منتظمة بحسب حجم النشاط.</p>
                  </div>
                </div>
              </div>

              {/* Callout Box: Why the base matters */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 text-white shadow-xl">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  اعتبار استراتيجي حاسم
                </span>
                <h3 className="text-2xl font-bold mb-4">لماذا يهم أساس الاحتساب؟</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong>الإتاوة القائمة على الإيرادات</strong> بسيطة حسابياً ومستقرة التوقع، لكنها قد تستنزف أرباح المرخَّص له بالكامل إذا كانت هوامش ربحه الصافية ضعيفة (مثل 3% إلى 5%)، مما يحوله إلى خسائر تشغيلية تثير شبهات التدقيق الضريبي.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  أما <strong>الإتاوة القائمة على الأرباح</strong> فتتبع الأداء المالي الحقيقي بصورة أدق وتضمن عدالة المشاركة في العائد، لكن مقارنتها بقواعد بيانات السوق الخارجية أكثر تعقيداً لقلة الاتفاقيات المتاحة القائمة على الربح.
                </p>
              </div>
            </div>
          </Section>

          {/* Section: The arm's length principle, in plain words */}
          <Section className="mb-20">
            <div className="p-8 md:p-12 bg-purpletint rounded-3xl border border-gray-200">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                  ٠٤ · المعيار القانوني الإلزامي
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  مبدأ السعر المحايد بكلمات بسيطة
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  بموجب <strong>المادة 34 من المرسوم بقانون اتحادي رقم 47 لسنة 2022 بشأن الضريبة على الشركات والأعمال</strong>، يجب أن تتبع المعاملات بين الأطراف المرتبطة والأشخاص المرتبطين مبدأ السعر المحايد، بما يتماشى مع إرشادات منظمة التعاون الاقتصادي والتنمية (OECD). وبالنسبة للإتاوة، يعني ذلك الإجابة عن ثلاثة أسئلة جوهرية:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-textsecondary text-white font-bold flex items-center justify-center mb-4">
                    ١
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">تحديد الملكية الفكرية وقيمتها</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    ما الملكية الفكرية المرخّصة بالتحديد، وما قيمتها الاقتصادية والتجارية الحقيقية للمستخدم؟
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-textsecondary text-white font-bold flex items-center justify-center mb-4">
                    ٢
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">سعر السوق المستقل</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    كم كان سيتقاضى مالك مستقل في السوق المفتوح مقابل ترخيص حقوق مماثلة وبشروط تجارية مماثلة؟
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-textsecondary text-white font-bold flex items-center justify-center mb-4">
                    ٣
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">التوافق مع أدلة السوق</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    هل تعطي الطريقة المطبقة نتيجة مالية تتوافق وتتطابق مع أدلة وبيانات السوق الموثوقة؟
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-sm text-amber-900">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>صلاحية الهيئة الاتحادية للضرائب:</strong> إذا لم تجتز الإتاوة هذا الاختبار ولم تتمكن من تقديم دراسة مقارنة ومبررات معتمدة تثبت توافقها مع مبدأ السعر المحايد، فيحق للهيئة تعديل دخلك الخاضع للضريبة إلى المبلغ المحايد وفرض الغرامات القانونية المترتبة.
                </p>
              </div>
            </div>
          </Section>

          {/* Section: DEMPE: who really creates the value? */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                ٠٥ · نسب العوائد الاقتصادية
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                تحليل DEMPE: من يصنع القيمة فعلاً؟
              </h2>
              <p className="text-gray-600 leading-relaxed">
                DEMPE هو الإطار المعتمد دولياً من منظمة التعاون الاقتصادي والتنمية لتحديد الشركة التي تستحق اقتصادياً عوائد وأرباح الملكية الفكرية، بناءً على خمس وظائف جوهرية:
              </p>
            </div>

            {/* DEMPE 5 Pillars Visual */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
              {dempeFunctions.map((item) => (
                <div
                  key={item.name}
                  className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between hover:border-textsecondary transition-all"
                >
                  <div>
                    <div className="text-3xl font-extrabold text-textsecondary mb-2 font-sans">
                      {item.letter}
                    </div>
                    <h3 className="font-bold text-base text-slate-900 mb-2">{item.name}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* DEMPE Substance Comparisons */}
            <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                <Scale className="w-5 h-5 text-textprimary" /> الملكية القانونية مقابل الجوهر الاقتصادي
              </h3>

              <div className="space-y-4 text-sm leading-relaxed">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 font-bold flex items-center justify-center shrink-0">✕</span>
                  <p>
                    <strong>المالك الصوري على الورق:</strong> الشركة التي تملك علامة تجارية مسجلة باسمها لكنها تُسند كل أعمال التسويق والتطوير والإشراف والحماية القانونية إلى شركات تابعة، قد لا تستحق الإتاوة كاملة أمام مفتش الضريبة.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center shrink-0">✓</span>
                  <p>
                    <strong>مركز اتخاذ القرار والتمويل:</strong> الشركة التي تمول الملكية الفكرية وتتحكم في القرارات الأساسية (كالاستراتيجية العامة، معايير الجودة، والحماية القانونية) لديها أسس قانونية واقتصادية قوية لتلقي العوائد، حتى لو قام غيرها بأعمال روتينية نيابة عنها.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold flex items-center justify-center shrink-0">i</span>
                  <p>
                    <strong>مقدم الخدمات الروتينية:</strong> الشركة التابعة التي تؤدي أعمالاً روتينية فقط (مثل الدعم الفني أو إعداد التصاميم)، دون التحكم في القرارات أو تحمل المخاطر المالية، تستحق عادةً رسماً على أساس التكلفة زائد هامش معتاد، وليس حصة من أرباح الملكية الفكرية.
                  </p>
                </div>
              </div>
            </div>
          </Section>

          {/* Section: Which transfer pricing method fits IP royalties? */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                ٠٦ · المنهجيات المعتمدة
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                ما طريقة تسعير المعاملات المناسبة لإتاوات الملكية الفكرية؟
              </h2>
              <p className="text-gray-600">
                تحدد المادة 34 من قانون ضريبة الشركات الطرق المعتمدة لتسعير المعاملات. وفي معاملات الملكية الفكرية والإتاوات، تبرز ثلاث طرق رئيسية:
              </p>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-right border-collapse rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">الطريقة</th>
                    <th className="py-4 px-6 font-semibold">كيف تعمل</th>
                    <th className="py-4 px-6 font-semibold">الأنسب لـ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-sm">
                  {methods.map((m) => (
                    <tr
                      key={m.name}
                      className={`hover:bg-gray-50 transition-colors ${m.highlight ? "bg-teal-50/50" : ""}`}
                    >
                      <td className="py-5 px-6 font-bold text-slate-900">
                        {m.name}
                        {m.highlight && (
                          <span className="mr-2 inline-block px-2 py-0.5 text-[10px] font-bold uppercase rounded-full bg-textsecondary text-white">
                            الأكثر تفضيلاً
                          </span>
                        )}
                      </td>
                      <td className="py-5 px-6 text-gray-700 leading-relaxed">{m.how}</td>
                      <td className="py-5 px-6 text-gray-700 leading-relaxed font-medium">{m.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-gray-500 italic">
              ملاحظة: لا توجد طريقة &quot;صحيحة&quot; واحدة مطلقة. فالطريقة المناسبة تعتمد كلياً على وقائع كل حالة والبيانات والمعاملات المقارنة المتاحة في السوق.
            </p>
          </Section>

          {/* Section: How to benchmark an arm's length royalty rate */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                ٠٧ · معايير المقارنة
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                كيف تحدد نسبة إتاوة وفق مبدأ السعر المحايد؟
              </h2>
              <p className="text-gray-600">
                يتساءل الكثير من رواد الأعمال عما إذا كان هناك معدل إتاوة افتراضي (كأن يُقال 5% كنسبة ثابتة). الحقيقة أن الهيئات الضريبية ترفض القواعد التقريبية وتلزمك بدراسة مقارنة موثقة.
              </p>
            </div>

            {/* Factors influencing royalty rates */}
            <div className="mb-12">
              <h3 className="font-bold text-xl text-slate-900 mb-4">
                العوامل التي تؤدي إلى رفع نسبة الإتاوة أو خفضها
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benchmarkingFactors.map((bf) => (
                  <div key={bf.factor} className="p-5 rounded-xl border border-gray-200 bg-white">
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{bf.factor}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{bf.effect}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Callout box: No Magic Number */}
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 mb-12">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm uppercase tracking-wide mb-2">
                <AlertCircle className="w-5 h-5 text-amber-700" /> لا يوجد رقم سحري
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">
                لا توجد &quot;نسبة سوقية&quot; موحدة للإتاوات في دولة الإمارات. القواعد التقديرية لا تكفي أمام مفتشي الضريبة، ويجب أن تكون نسبتك مدعومة بأدلة وعقود حقيقية من معاملات مماثلة مسجلة في قواعد البيانات المعتمدة.
              </p>
            </div>

            {/* 9-Step Benchmarking Roadmap */}
            <div>
              <h3 className="font-bold text-xl text-slate-900 mb-6">
                الخطوات التسع لإجراء دراسة مقارنة السعر المحايد
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {benchmarkingSteps.map((s) => (
                  <div
                    key={s.step}
                    className="p-5 rounded-2xl bg-purpletint border border-gray-200 flex flex-col justify-start"
                  >
                    <div className="w-8 h-8 rounded-lg bg-textsecondary text-white font-bold flex items-center justify-center text-sm mb-3">
                      {s.step}
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed font-medium">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Section: UAE transfer pricing rules for IP and royalties */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                ٠٨ · القواعد والحدود في الإمارات
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                قواعد تسعير المعاملات في الإمارات للملكية الفكرية والإتاوات
              </h2>
              <p className="text-gray-600">
                يجب تسعير الإتاوات المدفوعة أو المقبوضة بين الأطراف المرتبطة (المادة 35) والأشخاص المرتبطين (المادة 36) وفق مبدأ السعر المحايد. ويتحدد حجم التوثيق الإلزامي المطلوب منك وفق شروط محددة:
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-right border-collapse rounded-2xl overflow-hidden shadow-sm border border-gray-200">
                <thead>
                  <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-4 px-6 font-semibold">المتطلب</th>
                    <th className="py-4 px-6 font-semibold">متى ينطبق</th>
                    <th className="py-4 px-6 font-semibold">ما هو محتواه</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white text-sm">
                  {thresholds.map((t) => (
                    <tr key={t.requirement} className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 font-bold text-slate-900 whitespace-nowrap">{t.requirement}</td>
                      <td className="py-5 px-6 text-gray-700 leading-relaxed font-medium">{t.when}</td>
                      <td className="py-5 px-6 text-gray-600 leading-relaxed">{t.what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 rounded-2xl bg-purpletint border border-gray-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">أقل من الحدود الرقمية؟</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  يبقى مبدأ السعر المحايد مطبقاً قانوناً على <strong>كل إتاوة ومعاملة بين أطراف مرتبطة</strong> مهما بلغت قيمتها. وحتى في حال عدم إلزامك بإعداد ملف رئيسي أو محلي، يجب أن تحتفظ بحسابات وقيود تثبت أن نسبتك عادلة ومبررة.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purpletint border border-gray-200">
                <h3 className="font-bold text-slate-900 text-base mb-2">مهلة الـ 30 يوماً لتقديم المستندات</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  إذا طلبت الهيئة الاتحادية للضرائب وثائق وملفات تسعير المعاملات أثناء مراجعة إقرارك، يكون لديك عادةً مهلة <strong>30 يوماً فقط</strong> لتقديمها. وإعداد دراسات المقارنة والتحليلات الوظيفية خلال هذه المهلة القصيرة يُعد أمراً بالغ الصعوبة إن لم تكن جاهزة مسبقاً.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic">
              <strong>ضريبة الاستقطاع:</strong> لا تفرض دولة الإمارات عموماً ضريبة استقطاع عند المنبع (0% WHT) على الإتاوات المحولة إلى الخارج بموجب قواعدها المحلية الحالية، لكن ينبغي دوماً مراجعة الوضع الضريبي في الدولة الأجنبية المستفيدة واتفاقيات تجنب الازدواج الضريبي الموقعة مع الإمارات.
            </p>
          </Section>

          {/* Section: The documents that defend your royalty rate */}
          <Section className="mb-20">
            <div className="p-8 md:p-12 bg-slate-900 rounded-3xl text-white shadow-xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  قائمة الجاهزية للتدقيق الضريبي
                </span>
                <h2 className="text-2xl md:text-4xl font-bold">
                  المستندات التي تحمي نسبة الإتاوة
                </h2>
                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  أعدّ هذه المستندات والملفات وقت توقيع وتطبيق اتفاقية الترخيص، وليس بعد وصول طلب استفسار أو تدقيق من الهيئة. وعموماً يجب الاحتفاظ بجميع السجلات الضريبية لمدة <strong>سبع (7) سنوات</strong> على الأقل.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {defenceDocuments.map((doc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3 hover:border-textprimary/50 transition-colors"
                  >
                    <Check className="w-5 h-5 text-textprimary mt-0.5 shrink-0" strokeWidth={2.5} />
                    <p className="text-xs md:text-sm text-gray-200 leading-relaxed">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Section: Red flags & Practical Example */}
          <Section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Right: Red flags (RTL placement) */}
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-red-600 block mb-2">
                  ٠٩ · مؤشرات المخاطر الضريبية
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  علامات التحذير التي تبحث عنها الهيئة
                </h2>

                <div className="space-y-3">
                  {redFlags.map((rf) => (
                    <div
                      key={rf.title}
                      className="p-4 rounded-xl bg-red-50/60 border border-red-200/80 flex items-start gap-3"
                    >
                      <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-bold text-red-950 text-sm">{rf.title}</h3>
                        <p className="text-xs text-red-900/80 mt-1 leading-relaxed">{rf.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Left: How It Works In Practice Case Study Box */}
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                  دراسة حالة واقعية
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">
                  مثال: علامة مطعم في دبي
                </h2>

                <div className="p-7 rounded-3xl bg-purpletint border border-gray-200 space-y-4 text-sm text-gray-700 leading-relaxed shadow-sm">
                  <div className="flex items-center gap-2 text-textsecondary font-bold uppercase text-xs tracking-wider">
                    <Building className="w-4 h-4" /> هيكل الأعمال
                  </div>
                  <p>
                    تملك شركة في دبي علامة مطعم شهيرة وناجحة، بالإضافة إلى وصفاتها السرية ودليل تشغيلها المتكامل. قامت بترخيصها لشركة شقيقة تفتتح سلسلة فروع ومطاعم في المملكة العربية السعودية.
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-2 text-xs">
                    <p><strong>شركة دبي (المرخِّص):</strong> تطوّر الوصفات وقوائم الطعام الجديدة، وتضع معايير الهوية، وتسجل العلامة في المنطقة، وتتحمل المخاطر القانونية.</p>
                    <p><strong>شركة السعودية (المرخَّص له):</strong> تدير المطاعم ميدانياً، وتوظف الكوادر، وتتحمل ميزانية تسويقية وإعلانية ضخمة لتأسيس الحصة السوقية.</p>
                  </div>

                  <div className="flex items-center gap-2 text-textsecondary font-bold uppercase text-xs tracking-wider pt-2">
                    <Scale className="w-4 h-4" /> الحل وفق السعر المحايد
                  </div>
                  <p>
                    أجرت بوكر دراسة مقارنة لعقود الامتياز وترخيص العلامات لشركات مطاعم مستقلة في المنطقة، لتحديد نطاق محايد تراوح بين 4.5% و 7.0% من الإيرادات.
                  </p>
                  <p>
                    ونظراً لأن الشركة السعودية تنفق مبالغ تسويقية كبيرة تساهم في بناء سمعة العلامة محلياً، تم تثبيت وتوثيق نسبة <strong>5.0%</strong> (بالقرب من الحد الأدنى للنطاق)، مما يعكس مساهمتها التشغيلية العادلة.
                  </p>

                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium">
                    ✓ أُدرجت الدراسة في الملف المحلي، وأُفصح عنها في نموذج الإفصاح، وجُدولت للمراجعة الدورية المنتظمة.
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* FAQ Accordion Section */}
          <Section className="mb-20">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold tracking-wider uppercase text-textsecondary block mb-2">
                ١٠ · تساؤلات شائعة
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                الأسئلة الشائعة
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-right flex items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-bold text-slate-900 text-base md:text-lg">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 transition-transform duration-300 shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-sm md:text-base text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Strategic Closing Callout */}
          <Section className="mb-16">
            <div className="p-8 md:p-14 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-950 rounded-3xl text-white shadow-2xl text-right flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-widest uppercase text-textprimary px-3 py-1 bg-white/10 rounded-full inline-block mb-3">
                  استشارات ضريبية متخصصة
                </span>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                  لنجعل نسبة إتاوتك قابلة للدفاع عنها.
                </h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  في بوكر للمحاسبة والاستشارات، نراجع ترتيبات الملكية الفكرية بين شركاتك، ونُعدّ التحليل الوظيفي وتحليل DEMPE، وندعم دراسات المقارنة والتوثيق، ونساعدك في نموذج الإفصاح عن تسعير المعاملات وإقرار ضريبة الشركات.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  href="/taxation"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-textprimary hover:bg-teal-400 text-slate-950 font-bold transition-all shadow-lg shadow-textprimary/20 text-sm md:text-base"
                >
                  <span>تحدث مع فريقنا الضريبي</span>
                  <ArrowLeft className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Legal Disclaimer */}
            <p className="mt-8 text-xs text-gray-500 leading-relaxed text-center max-w-4xl mx-auto">
              هذا الدليل يقدم معلومات عامة تستند إلى المرسوم بقانون اتحادي رقم 47 لسنة 2022 بشأن الضريبة على الشركات والأعمال والقرارات الوزارية ذات الصلة وإرشادات منظمة التعاون الاقتصادي والتنمية لتسعير المعاملات، كما في نوفمبر 2026. ولا يُعد استشارة ضريبية أو قانونية. يعتمد تسعير المعاملات بشكل كبير على وقائع كل حالة، لذا يُرجى استشارة مستشار مؤهل قبل تحديد نسبة إتاوة أو تغييرها. © 2026 بوكر للمحاسبة والاستشارات.
            </p>
          </Section>
        </main>
      </div>

      <ContactSection />
      <Footer />
      <FloatingActions />
      <FloatingService />
    </div>
  );
}

