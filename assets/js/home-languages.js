/* Academic homepage only — complete, keyed, six-language translations.
 * Blog and other routes retain their existing layout and language script.
 * Canonical English text lives in _pages/about.md; no translation network API.
 */
(() => {
  'use strict';
  if (location.pathname !== '/' && location.pathname !== '/about/' && location.pathname !== '/about.html') return;
  const supported = ['en','zh','ja','ko','de','fr'];
  const translations = {
  "zh": {
    "welcome": "<strong>欢迎来到我的网站！</strong>",
    "aboutTitle": "关于我",
    "introEducation": "我于 2025 年毕业于中国安徽省芜湖市的<strong>安徽工程大学</strong>，取得<strong>电气工程及其自动化学士学位</strong>。目前，我正在美国<strong>内华达大学里诺分校（UNR）</strong>攻读<strong>计算机科学博士学位</strong>，导师为 <a href=\"https://niusenc.github.io/\" target=\"_blank\" rel=\"noopener noreferrer\">Niusen Chen 博士</a> (<a href=\"https://www.unr.edu/cse/people/niusen-chen\" target=\"_blank\" rel=\"noopener noreferrer\">UNR 官方教师主页</a>)。",
    "introResearch": "我的研究兴趣包括<strong>计算机系统安全、操作系统、存储系统、AI 智能体安全和硬件安全</strong>。目前我研究拥有高权限的 AI 智能体带来的安全风险，评估文件系统、内核及块设备层的主机侧防护机制，并探索能够防止敏感数据被未经授权修改或删除的更可靠的安全边界。",
    "educationTitle": "教育经历",
    "unrTitle": "内华达大学里诺分校",
    "unrDegree": "<strong>计算机科学博士（在读）</strong><br>美国内华达州里诺市<br><em>2026 年 9 月至今</em>",
    "anhuiTitle": "安徽工程大学",
    "anhuiDegree": "<strong>电气工程及其自动化学士</strong><br>中国安徽省芜湖市<br><em>2021 年 9 月—2025 年 6 月 20 日</em>",
    "undergradTitle": "本科科研经历",
    "undergradDesc": "本科期间，我重点探索<strong>智能算法的工程应用</strong>，开展了<strong>视觉惯性 SLAM 与建图</strong>、电池健康状态预测和能源预测方面的研究。我也学习了<strong>计算机视觉、三维重建</strong>及<strong>大语言模型（LLM）</strong>的概念与应用。这些经历为我当前的系统安全与 AI 智能体安全研究提供了跨学科基础。",
    "learnResearch": "<a href=\"/research/\">了解更多我的研究</a>",
    "interestsTitle": "研究兴趣",
    "interest1": "<strong>AI 智能体安全：</strong>研究高权限智能体带来的风险，包括未经授权的文件修改或删除。",
    "interest2": "<strong>操作系统与内核安全：</strong>Linux 安全机制、访问控制和内核级策略执行。",
    "interest3": "<strong>存储与硬件安全：</strong>研究超越主机软件栈的数据完整性与保护机制。",
    "interest4": "<strong>AI 驱动的安全分析：</strong>机器学习与程序分析在软件安全领域的应用。",
    "projectTitle": "代表性科研项目",
    "projectName": "当 AI 智能体失控：谁来保护你的文件？",
    "projectDesc": "本项目研究：当 AI 智能体拥有 root 权限时，由主机控制的防护机制能否保护敏感文件？我考察不同软件层级的防御，包括 <strong>AppArmor</strong>、<strong>eBPF LSM</strong> 和<strong>块设备层防护</strong>，以分析主机侧保护的局限，并探索更强的数据完整性信任边界。",
    "projectNote": "<em>研究及海报项目；正式论文发表后将在这里补充引用信息。</em>",
    "projectLink": "有关研究兴趣与项目的更多信息，请访问<a href=\"/research/\">研究页面</a>。",
    "pubTitle": "学术成果",
    "pubDesc": "我的论文与预印本涉及高效三维重建、电池健康状态预测、视觉惯性 SLAM 和电力需求预测。完整引用、论文与代码链接可在<a href=\"/publications/\">学术论文页面</a>查看。",
    "contactTitle": "联系方式",
    "primaryEmail": "<strong>主要邮箱（UNR）：</strong> <a href=\"mailto:zedongz@unr.edu\">zedongz@unr.edu</a>",
    "alternativeEmail": "<strong>备用邮箱：</strong> <a href=\"mailto:2350082187zhou@gmail.com\">2350082187zhou@gmail.com</a>",
    "linksTitle": "相关链接",
    "navAbout": "关于我",
    "navResearch": "研究方向",
    "navPublications": "学术论文",
    "navBlog": "技术博客",
    "navDeadlines": "会议截稿日",
    "navCv": "简历",
    "sidebarBio": "计算机科学博士研究生 | 系统安全与 AI 智能体安全",
    "sidebarLocation": "内华达州里诺市",
    "sidebarInstitution": "内华达大学里诺分校",
    "sidebarEmail": "电子邮箱",
    "sidebarFollow": "关注",
    "mapEyebrow": "学术网站访问活跃度",
    "mapHeading": "网站访问概况 <span>与访客来源</span>",
    "mapDescription": "按国家和近似地区查看学术主页的页面访问来源。这是浏览次数统计，不代表独立访客人数。",
    "mapBadge": "来源地统计",
    "mapVisits": "页面浏览量 · 近 90 天",
    "mapCountries": "国家 / 地区",
    "mapLocations": "近似来源地",
    "mapPrivacy": "加载主页时自动统计国家及粗略地理区域；不使用 Cookie，也不保存完整 IP、精确 GPS 或持续性访客标识。记录最多保留 90 天。"
  },
  "ja": {
    "welcome": "<strong>私のウェブサイトへようこそ！</strong>",
    "aboutTitle": "自己紹介",
    "introEducation": "私は2025年に中国・安徽省蕪湖市の<strong>安徽工程大学</strong>を卒業し、<strong>電気工学・自動化の学士号</strong>を取得しました。現在は米国の<strong>ネバダ大学リノ校（UNR）</strong>で<strong>コンピュータサイエンスの博士課程</strong>に在籍し、<a href=\"https://niusenc.github.io/\" target=\"_blank\" rel=\"noopener noreferrer\">Niusen Chen 博士</a> (<a href=\"https://www.unr.edu/cse/people/niusen-chen\" target=\"_blank\" rel=\"noopener noreferrer\">UNR 教員紹介</a>)の指導を受けています。",
    "introResearch": "私の研究分野は、<strong>コンピュータシステムセキュリティ、オペレーティングシステム、ストレージシステム、AIエージェントのセキュリティ、ハードウェアセキュリティ</strong>です。現在は、高い権限を持つAIエージェントのリスクを研究し、ファイルシステム、カーネル、ブロックデバイス層のホスト側保護機構を評価するとともに、機密データの不正な変更や削除を防ぐための、より強固な信頼境界を探究しています。",
    "educationTitle": "学歴",
    "unrTitle": "ネバダ大学リノ校",
    "unrDegree": "<strong>コンピュータサイエンス博士課程（在学中）</strong><br>米国ネバダ州リノ<br><em>2026年9月〜現在</em>",
    "anhuiTitle": "安徽工程大学",
    "anhuiDegree": "<strong>電気工学・自動化 学士</strong><br>中国安徽省蕪湖市<br><em>2021年9月〜2025年6月20日</em>",
    "undergradTitle": "学部時代の研究",
    "undergradDesc": "学部時代は<strong>知能アルゴリズムの工学応用</strong>を中心に、<strong>視覚慣性SLAMと地図生成</strong>、バッテリーの健全性予測、エネルギー需要予測に取り組みました。また、<strong>コンピュータビジョン、3D再構成</strong>、<strong>大規模言語モデル（LLM）</strong>の概念と応用にも触れました。これらの経験は、現在のシステムおよびAIエージェントのセキュリティ研究に役立っています。",
    "learnResearch": "<a href=\"/research/\">研究内容について詳しく見る</a>",
    "interestsTitle": "研究分野",
    "interest1": "<strong>AIエージェントのセキュリティ：</strong>高権限エージェントによるファイルの不正な変更・削除などのリスク。",
    "interest2": "<strong>OS・カーネルセキュリティ：</strong>Linuxのセキュリティ機構、アクセス制御、カーネルレベルのポリシー適用。",
    "interest3": "<strong>ストレージ・ハードウェアセキュリティ：</strong>ホスト側ソフトウェアだけに依存しないデータ完全性と保護機構。",
    "interest4": "<strong>AIによるセキュリティ分析：</strong>機械学習とプログラム解析のソフトウェアセキュリティへの応用。",
    "projectTitle": "主な研究プロジェクト",
    "projectName": "AIエージェントが暴走したとき、誰がファイルを守るのか？",
    "projectDesc": "本研究では、AIエージェントがroot権限を持つ場合に、ホストが管理する保護機構で機密ファイルを守れるかを検証しています。<strong>AppArmor</strong>、<strong>eBPF LSM</strong>、<strong>ブロックデバイス層の保護</strong>などを評価し、ホスト側防御の限界を明らかにするとともに、データ完全性のためのより強固な信頼境界を探ります。",
    "projectNote": "<em>研究・ポスタープロジェクトです。正式な論文が公開され次第、引用情報を追加します。</em>",
    "projectLink": "研究テーマやプロジェクトの詳細は<a href=\"/research/\">研究ページ</a>をご覧ください。",
    "pubTitle": "研究成果",
    "pubDesc": "私の論文・プレプリントは、効率的な3D再構成、バッテリーの健全性予測、視覚慣性SLAM、電力需要予測を扱っています。論文・コードへのリンクは<a href=\"/publications/\">業績一覧</a>をご覧ください。",
    "contactTitle": "連絡先",
    "primaryEmail": "<strong>主なメールアドレス（UNR）：</strong> <a href=\"mailto:zedongz@unr.edu\">zedongz@unr.edu</a>",
    "alternativeEmail": "<strong>予備メールアドレス：</strong> <a href=\"mailto:2350082187zhou@gmail.com\">2350082187zhou@gmail.com</a>",
    "linksTitle": "関連リンク",
    "navAbout": "自己紹介",
    "navResearch": "研究",
    "navPublications": "論文・業績",
    "navBlog": "ブログ",
    "navDeadlines": "投稿締切",
    "navCv": "履歴書",
    "sidebarBio": "コンピュータサイエンス博士課程 | システム・AIエージェントセキュリティ",
    "sidebarLocation": "米国ネバダ州リノ",
    "sidebarInstitution": "ネバダ大学リノ校",
    "sidebarEmail": "メール",
    "sidebarFollow": "フォロー",
    "mapEyebrow": "研究サイトのアクセス状況",
    "mapHeading": "サイトのアクセス状況 <span>と訪問者の地域</span>",
    "mapDescription": "学術サイトへのページビューを国と大まかな地域別に表示します。ユニークユーザー数ではありません。",
    "mapBadge": "訪問元の分布",
    "mapVisits": "ページビュー · 過去90日",
    "mapCountries": "国・地域",
    "mapLocations": "おおよその地域",
    "mapPrivacy": "ページを開くと国と大まかな地域を自動集計します。Cookie、完全なIPアドレス、正確なGPS情報、持続的な訪問者IDは保存しません。保存期間は最大90日です。"
  },
  "ko": {
    "welcome": "<strong>제 웹사이트에 오신 것을 환영합니다!</strong>",
    "aboutTitle": "소개",
    "introEducation": "저는 2025년 중국 안후이성 우후의 <strong>안후이공정대학교</strong>에서 <strong>전기공학 및 자동화 학사 학위</strong>를 받았습니다. 현재 미국 <strong>네바다 대학교 리노 캠퍼스(UNR)</strong>에서 <strong>컴퓨터과학 박사과정</strong>을 이수하고 있으며, <a href=\"https://niusenc.github.io/\" target=\"_blank\" rel=\"noopener noreferrer\">Niusen Chen 박사</a> (<a href=\"https://www.unr.edu/cse/people/niusen-chen\" target=\"_blank\" rel=\"noopener noreferrer\">UNR 교수진 소개</a>)의 지도를 받고 있습니다.",
    "introResearch": "저의 연구 관심 분야는 <strong>컴퓨터 시스템 보안, 운영체제, 스토리지 시스템, AI 에이전트 보안 및 하드웨어 보안</strong>입니다. 현재 높은 권한을 가진 AI 에이전트가 초래할 수 있는 보안 위험을 연구하고, 파일 시스템·커널·블록 장치 계층의 호스트 측 보호 메커니즘을 평가하며, 민감한 데이터의 무단 수정과 삭제를 막기 위한 더욱 강력한 신뢰 경계를 탐구하고 있습니다.",
    "educationTitle": "학력",
    "unrTitle": "네바다 대학교 리노 캠퍼스",
    "unrDegree": "<strong>컴퓨터과학 박사과정(재학 중)</strong><br>미국 네바다주 리노<br><em>2026년 9월~현재</em>",
    "anhuiTitle": "안후이공정대학교",
    "anhuiDegree": "<strong>전기공학 및 자동화 학사</strong><br>중국 안후이성 우후<br><em>2021년 9월~2025년 6월 20일</em>",
    "undergradTitle": "학부 연구 경험",
    "undergradDesc": "학부에서는 <strong>지능형 알고리즘의 공학적 응용</strong>을 중심으로 <strong>시각·관성 SLAM과 지도 작성</strong>, 배터리 건강 상태 예측, 에너지 수요 예측을 연구했습니다. 또한 <strong>컴퓨터 비전, 3D 재구성</strong> 및 <strong>대규모 언어 모델(LLM)</strong>의 개념과 활용을 익혔습니다. 이러한 경험은 현재의 시스템 보안 및 AI 에이전트 보안 연구와 연결됩니다.",
    "learnResearch": "<a href=\"/research/\">연구 내용 자세히 보기</a>",
    "interestsTitle": "연구 관심 분야",
    "interest1": "<strong>AI 에이전트 보안:</strong> 높은 권한을 가진 에이전트의 무단 파일 수정·삭제 등 보안 위험 연구.",
    "interest2": "<strong>운영체제 및 커널 보안:</strong> Linux 보안 메커니즘, 접근 제어, 커널 수준 정책 적용.",
    "interest3": "<strong>스토리지 및 하드웨어 보안:</strong> 호스트 소프트웨어 계층에만 의존하지 않는 데이터 무결성과 보호 메커니즘.",
    "interest4": "<strong>AI 기반 보안 분석:</strong> 머신러닝과 프로그램 분석의 소프트웨어 보안 응용.",
    "projectTitle": "주요 연구 프로젝트",
    "projectName": "AI 에이전트가 통제를 벗어나면 누가 파일을 보호할까요?",
    "projectDesc": "이 프로젝트에서는 AI 에이전트가 root 권한을 가진 상황에서 호스트가 제어하는 보호 메커니즘이 민감한 파일을 지킬 수 있는지 연구합니다. <strong>AppArmor</strong>, <strong>eBPF LSM</strong>, <strong>블록 장치 계층 보호</strong>를 평가하여 호스트 측 방어의 한계를 분석하고, 데이터 무결성을 위한 더 강한 신뢰 경계를 모색합니다.",
    "projectNote": "<em>연구 및 포스터 프로젝트이며, 정식 논문이 공개되면 인용 정보를 추가할 예정입니다.</em>",
    "projectLink": "연구 관심 분야와 프로젝트에 대한 자세한 내용은 <a href=\"/research/\">연구 페이지</a>를 참고해 주세요.",
    "pubTitle": "연구 실적",
    "pubDesc": "저의 논문과 프리프린트는 효율적인 3D 재구성, 배터리 건강 상태 예측, 시각·관성 SLAM, 전력 수요 예측을 다룹니다. 자세한 인용 정보와 논문·코드 링크는 <a href=\"/publications/\">논문 목록</a>에서 확인할 수 있습니다.",
    "contactTitle": "연락처",
    "primaryEmail": "<strong>주 이메일(UNR):</strong> <a href=\"mailto:zedongz@unr.edu\">zedongz@unr.edu</a>",
    "alternativeEmail": "<strong>보조 이메일:</strong> <a href=\"mailto:2350082187zhou@gmail.com\">2350082187zhou@gmail.com</a>",
    "linksTitle": "관련 링크",
    "navAbout": "소개",
    "navResearch": "연구",
    "navPublications": "논문",
    "navBlog": "블로그",
    "navDeadlines": "학회 마감일",
    "navCv": "이력서",
    "sidebarBio": "컴퓨터과학 박사과정 | 시스템 보안 및 AI 에이전트 보안",
    "sidebarLocation": "미국 네바다주 리노",
    "sidebarInstitution": "네바다 대학교 리노 캠퍼스",
    "sidebarEmail": "이메일",
    "sidebarFollow": "팔로우",
    "mapEyebrow": "학술 사이트 방문 현황",
    "mapHeading": "웹사이트 방문 현황 <span>및 방문자 지역</span>",
    "mapDescription": "학술 홈페이지의 국가별·대략적인 지역별 페이지 조회수입니다. 고유 방문자 수와는 다릅니다.",
    "mapBadge": "방문자 지역",
    "mapVisits": "페이지 조회수 · 최근 90일",
    "mapCountries": "국가 / 지역",
    "mapLocations": "대략적인 위치",
    "mapPrivacy": "홈페이지를 열면 국가 및 대략적인 지역별로 자동 집계합니다. 쿠키, 전체 IP, 정확한 GPS 또는 지속적인 방문자 식별자는 저장하지 않습니다. 최대 90일간 보관합니다."
  },
  "de": {
    "welcome": "<strong>Willkommen auf meiner Website!</strong>",
    "aboutTitle": "Über mich",
    "introEducation": "2025 habe ich meinen <strong>Bachelorabschluss in Elektrotechnik und Automatisierung</strong> an der <strong>Anhui Polytechnic University</strong> in Wuhu, China, erworben. Derzeit promoviere ich in <strong>Informatik</strong> an der <strong>University of Nevada, Reno (UNR)</strong> in den USA unter der Betreuung von <a href=\"https://niusenc.github.io/\" target=\"_blank\" rel=\"noopener noreferrer\">Dr. Niusen Chen</a> (<a href=\"https://www.unr.edu/cse/people/niusen-chen\" target=\"_blank\" rel=\"noopener noreferrer\">UNR-Fakultätsprofil</a>).",
    "introResearch": "Meine Forschungsschwerpunkte sind <strong>Computersystemsicherheit, Betriebssysteme, Speichersysteme, Sicherheit von KI-Agenten und Hardwaresicherheit</strong>. Ich untersuche Sicherheitsrisiken hochprivilegierter KI-Agenten, evaluiere hostseitige Schutzmechanismen auf Dateisystem-, Kernel- und Blockgeräteebene und erforsche stärkere Vertrauensgrenzen zum Schutz sensibler Daten vor unbefugter Änderung und Löschung.",
    "educationTitle": "Ausbildung",
    "unrTitle": "University of Nevada, Reno",
    "unrDegree": "<strong>Promotion in Informatik (laufend)</strong><br>Reno, Nevada, USA<br><em>Seit September 2026</em>",
    "anhuiTitle": "Anhui Polytechnic University",
    "anhuiDegree": "<strong>Bachelor in Elektrotechnik und Automatisierung</strong><br>Wuhu, Anhui, China<br><em>September 2021 – 20. Juni 2025</em>",
    "undergradTitle": "Forschung im Bachelorstudium",
    "undergradDesc": "Im Bachelorstudium beschäftigte ich mich mit <strong>angewandten intelligenten Algorithmen</strong>, insbesondere <strong>visuell-inertialem SLAM und Kartierung</strong>, der Vorhersage des Batteriezustands und Energieprognosen. Darüber hinaus sammelte ich Erfahrungen mit <strong>Computer Vision, 3D-Rekonstruktion</strong> und Konzepten sowie Anwendungen <strong>großer Sprachmodelle (LLMs)</strong>. Diese Erfahrungen ergänzen meine heutige Forschung im Bereich der System- und KI-Agentensicherheit.",
    "learnResearch": "<a href=\"/research/\">Mehr über meine Forschung erfahren</a>",
    "interestsTitle": "Forschungsinteressen",
    "interest1": "<strong>Sicherheit von KI-Agenten:</strong> Risiken hochprivilegierter Agenten einschließlich unbefugter Dateiänderungen und -löschungen.",
    "interest2": "<strong>Betriebssystem- und Kernelsicherheit:</strong> Linux-Sicherheitsmechanismen, Zugriffskontrolle und Durchsetzung von Richtlinien im Kernel.",
    "interest3": "<strong>Speicher- und Hardwaresicherheit:</strong> Datenintegrität und Schutzmechanismen jenseits des Host-Software-Stacks.",
    "interest4": "<strong>KI-gestützte Sicherheitsanalyse:</strong> Einsatz von maschinellem Lernen und Programmanalyse für Softwaresicherheit.",
    "projectTitle": "Ausgewähltes Forschungsprojekt",
    "projectName": "Wenn KI-Agenten außer Kontrolle geraten: Wer schützt Ihre Dateien?",
    "projectDesc": "In diesem Projekt untersuche ich, ob hostkontrollierte Schutzmechanismen sensible Dateien sichern können, wenn ein KI-Agent über Root-Rechte verfügt. Ich evaluiere unter anderem <strong>AppArmor</strong>, <strong>eBPF LSM</strong> und <strong>Schutz auf Blockgeräteebene</strong>, um die Grenzen hostseitiger Sicherheit zu ermitteln und robustere Vertrauensgrenzen für die Datenintegrität zu erforschen.",
    "projectNote": "<em>Forschungs- und Posterprojekt; eine zitierfähige Veröffentlichung wird ergänzt, sobald sie vorliegt.</em>",
    "projectLink": "Weitere Informationen zu meinen Interessen und Projekten finden Sie auf der <a href=\"/research/\">Forschungsseite</a>.",
    "pubTitle": "Publikationen",
    "pubDesc": "Meine Publikationen und Preprints befassen sich mit effizienter 3D-Rekonstruktion, Batteriezustandsprognosen, visuell-inertialem SLAM und Strombedarfsprognosen. Vollständige Angaben, Artikel und Code finden Sie auf der <a href=\"/publications/\">Publikationsseite</a>.",
    "contactTitle": "Kontakt",
    "primaryEmail": "<strong>Haupt-E-Mail (UNR):</strong> <a href=\"mailto:zedongz@unr.edu\">zedongz@unr.edu</a>",
    "alternativeEmail": "<strong>Alternative E-Mail:</strong> <a href=\"mailto:2350082187zhou@gmail.com\">2350082187zhou@gmail.com</a>",
    "linksTitle": "Links",
    "navAbout": "Über mich",
    "navResearch": "Forschung",
    "navPublications": "Publikationen",
    "navBlog": "Blog",
    "navDeadlines": "Konferenztermine",
    "navCv": "Lebenslauf",
    "sidebarBio": "Doktorand der Informatik | System- und KI-Agentensicherheit",
    "sidebarLocation": "Reno, Nevada",
    "sidebarInstitution": "University of Nevada, Reno",
    "sidebarEmail": "E-Mail",
    "sidebarFollow": "Folgen",
    "mapEyebrow": "AKTIVITÄT DER FORSCHUNGSWEBSITE",
    "mapHeading": "Website-Aktivität <span>&amp; Besucherherkunft</span>",
    "mapDescription": "Seitenaufrufe meiner akademischen Website nach Land und ungefährer Region. Dies sind Seitenaufrufe, keine eindeutigen Besucher.",
    "mapBadge": "BESUCHERHERKUNFT",
    "mapVisits": "Seitenaufrufe · 90 Tage",
    "mapCountries": "Länder / Regionen",
    "mapLocations": "Ungefähre Standorte",
    "mapPrivacy": "Beim Öffnen der Homepage werden Land und grobe Region automatisch gezählt. Keine Cookies, vollständigen IP-Adressen, genauen GPS-Daten oder dauerhaften Kennungen werden gespeichert. Aufbewahrung bis zu 90 Tage."
  },
  "fr": {
    "welcome": "<strong>Bienvenue sur mon site !</strong>",
    "aboutTitle": "À propos de moi",
    "introEducation": "J'ai obtenu en 2025 une <strong>licence en génie électrique et automatisation</strong> à l'<strong>Université polytechnique de l'Anhui</strong>, à Wuhu, en Chine. Je poursuis actuellement un <strong>doctorat en informatique</strong> à l'<strong>Université du Nevada à Reno (UNR)</strong>, aux États-Unis, sous la direction du <a href=\"https://niusenc.github.io/\" target=\"_blank\" rel=\"noopener noreferrer\">Dr Niusen Chen</a> (<a href=\"https://www.unr.edu/cse/people/niusen-chen\" target=\"_blank\" rel=\"noopener noreferrer\">profil UNR</a>).",
    "introResearch": "Mes recherches portent sur la <strong>sécurité des systèmes informatiques, les systèmes d'exploitation, les systèmes de stockage, la sécurité des agents d'IA et la sécurité matérielle</strong>. J'étudie les risques liés aux agents d'IA dotés de privilèges élevés, j'évalue les protections côté hôte aux niveaux du système de fichiers, du noyau et des périphériques de blocs, et j'explore des frontières de confiance plus robustes pour protéger les données sensibles.",
    "educationTitle": "Formation",
    "unrTitle": "Université du Nevada à Reno",
    "unrDegree": "<strong>Doctorat en informatique (en cours)</strong><br>Reno, Nevada, États-Unis<br><em>Depuis septembre 2026</em>",
    "anhuiTitle": "Université polytechnique de l'Anhui",
    "anhuiDegree": "<strong>Licence en génie électrique et automatisation</strong><br>Wuhu, Anhui, Chine<br><em>Septembre 2021 – 20 juin 2025</em>",
    "undergradTitle": "Recherche pendant la licence",
    "undergradDesc": "Pendant ma licence, je me suis intéressé aux <strong>applications d'algorithmes intelligents</strong>, notamment au <strong>SLAM visuo-inertiel et à la cartographie</strong>, à la prédiction de l'état de santé des batteries et à la prévision énergétique. Je me suis aussi familiarisé avec la <strong>vision par ordinateur, la reconstruction 3D</strong> et les concepts et applications des <strong>grands modèles de langage (LLM)</strong>. Cette expérience complète mes recherches actuelles en sécurité des systèmes et des agents d'IA.",
    "learnResearch": "<a href=\"/research/\">En savoir plus sur mes recherches</a>",
    "interestsTitle": "Axes de recherche",
    "interest1": "<strong>Sécurité des agents d'IA :</strong> risques des agents privilégiés, notamment la modification ou la suppression non autorisée de fichiers.",
    "interest2": "<strong>Sécurité des systèmes d'exploitation et du noyau :</strong> mécanismes de sécurité Linux, contrôle d'accès et application de politiques au niveau du noyau.",
    "interest3": "<strong>Sécurité du stockage et du matériel :</strong> intégrité des données et mécanismes de protection au-delà de la pile logicielle hôte.",
    "interest4": "<strong>Analyse de sécurité par l'IA :</strong> applications de l'apprentissage automatique et de l'analyse de programmes à la sécurité logicielle.",
    "projectTitle": "Projet de recherche sélectionné",
    "projectName": "Quand les agents d'IA dérapent : qui protège vos fichiers ?",
    "projectDesc": "J'étudie si des protections contrôlées par l'hôte peuvent sécuriser des fichiers sensibles lorsqu'un agent d'IA possède les privilèges root. J'évalue <strong>AppArmor</strong>, <strong>eBPF LSM</strong> et les protections <strong>au niveau des blocs</strong> pour comprendre les limites des mécanismes côté hôte et rechercher de meilleures frontières de confiance pour l'intégrité des données.",
    "projectNote": "<em>Projet de recherche et poster ; une référence bibliographique sera ajoutée lorsqu'elle sera disponible.</em>",
    "projectLink": "Consultez la <a href=\"/research/\">page Recherche</a> pour en savoir plus sur mes travaux et projets.",
    "pubTitle": "Publications",
    "pubDesc": "Mes publications et prépublications portent sur la reconstruction 3D efficace, la prédiction de l'état de santé des batteries, le SLAM visuo-inertiel et la prévision de la demande d'électricité. Consultez la <a href=\"/publications/\">page Publications</a> pour les références complètes, les articles et le code.",
    "contactTitle": "Contact",
    "primaryEmail": "<strong>Adresse principale (UNR) :</strong> <a href=\"mailto:zedongz@unr.edu\">zedongz@unr.edu</a>",
    "alternativeEmail": "<strong>Autre adresse e-mail :</strong> <a href=\"mailto:2350082187zhou@gmail.com\">2350082187zhou@gmail.com</a>",
    "linksTitle": "Liens",
    "navAbout": "À propos",
    "navResearch": "Recherche",
    "navPublications": "Publications",
    "navBlog": "Blog",
    "navDeadlines": "Dates limites",
    "navCv": "CV",
    "sidebarBio": "Doctorant en informatique | Sécurité des systèmes et des agents d'IA",
    "sidebarLocation": "Reno, Nevada",
    "sidebarInstitution": "Université du Nevada à Reno",
    "sidebarEmail": "E-mail",
    "sidebarFollow": "Suivre",
    "mapEyebrow": "ACTIVITÉ DU SITE DE RECHERCHE",
    "mapHeading": "Activité du site <span>et origine des visiteurs</span>",
    "mapDescription": "Répartition des pages vues sur mon site universitaire par pays et région approximative. Ce ne sont pas des visiteurs uniques.",
    "mapBadge": "ORIGINE DES VISITEURS",
    "mapVisits": "Pages vues · 90 jours",
    "mapCountries": "Pays / régions",
    "mapLocations": "Régions approximatives",
    "mapPrivacy": "Chaque chargement de la page compte automatiquement le pays et la région approximative. Aucun cookie, adresse IP complète, position GPS précise ou identifiant persistant n’est conservé. Durée maximale : 90 jours."
  }
};
  const originals = new WeakMap();
  const selectors = {
    sidebarBio: '.author__bio',
    sidebarLocation: '.author__urls li.author__desktop:first-child',
    sidebarInstitution: '.author__urls li.author__desktop:nth-child(2)',
    sidebarFollow: '.author__urls-wrapper > button',
    sidebarEmail: '.author__urls a[href^="mailto:"]'
  };
  const menuPaths = {
    '/': 'navAbout',
    '/research/': 'navResearch',
    '/publications/': 'navPublications',
    '/blog/': 'navBlog',
    '/security-deadlines/': 'navDeadlines',
    '/cv/': 'navCv'
  };
  const mapKeys = {
    eyebrow:'mapEyebrow', heading:'mapHeading',description:'mapDescription',
    badge:'mapBadge',visits:'mapVisits',countries:'mapCountries',
    locations:'mapLocations',privacy:'mapPrivacy'
  };
  function remember(el) {
    if(!originals.has(el)) originals.set(el,el.innerHTML);
    return originals.get(el);
  }
  function write(el,value) {
    if (!el) return;
    const old = remember(el);
    const desired = value === null ? old : value;
    if (el.innerHTML !== desired) el.innerHTML = desired;
  }
  function mapLocale(lang) {
    const dict = translations[lang] || {};
    document.querySelectorAll('.home-visitor-activity [data-geo-t]').forEach(el => {
      const key = mapKeys[el.getAttribute('data-geo-t')];
      write(el,lang==='en' ? null : dict[key] || null);
    });
  }
  function apply(lang){
    if(!supported.includes(lang))lang='en';
    const pack=translations[lang]||{};
    document.documentElement.lang = lang==='zh'?'zh-CN':lang;
    const select=document.querySelector('[data-home-language]');
    if(select)select.value=lang;
    document.querySelectorAll('[data-home-i18n]').forEach(el=>{
      const key=el.getAttribute('data-home-i18n');
      write(el,lang==='en'?null:pack[key] || null);
    });
    Object.entries(selectors).forEach(([key,sel])=>{
      const el=document.querySelector(sel);
      if (!el) return;
      if(key==='sidebarLocation'||key==='sidebarInstitution'){
        // Preserve native Font Awesome leading glyph markup.
        const icon=el.querySelector('i');
        if(icon){
          const clone=icon.outerHTML;
          const value=lang==='en'?null:(pack[key]||null);
          // Initial English text is preserved in a dedicated attribute.
          if(!el.dataset.homeEnglish)el.dataset.homeEnglish=el.innerHTML;
          if(el.innerHTML !== (value===null?el.dataset.homeEnglish:clone+' '+value)){
            el.innerHTML = value===null?el.dataset.homeEnglish:clone+' '+value;
          }
          return;
        }
      }
      if(key==='sidebarEmail'){
        const i=el.querySelector('i');
        const icon=i?i.outerHTML:'';
        if(!el.dataset.homeEnglish)el.dataset.homeEnglish=el.innerHTML;
        const value=lang==='en'?null:pack[key];
        const next=value===null?el.dataset.homeEnglish:(icon+' '+value);
        if(el.innerHTML!==next)el.innerHTML=next;
        return;
      }
      write(el,lang==='en'?null:pack[key] || null);
    });
    document.querySelectorAll('#site-nav .masthead__menu-item:not(.masthead__menu-item--lg) a[href]').forEach(link=>{
      if(link.closest('#theme-toggle'))return;
      const path=new URL(link.href,location.href).pathname;
      const key=menuPaths[path];
      if(key)write(link,lang==='en'?null:pack[key]||null);
    });
    mapLocale(lang);
    document.dispatchEvent(new CustomEvent('zedong:language-changed',{detail:{lang}}));
  }
  function current(){
    const q=new URL(location.href).searchParams.get('lang');
    if(supported.includes(q))return q;
    try{const pref=localStorage.getItem('zz_site_lang');if(supported.includes(pref))return pref;}catch(_){}
    return 'en';
  }
  const chosen=document.querySelector('[data-home-language]');
  if(chosen)chosen.addEventListener('change',()=>{
    const lang=supported.includes(chosen.value)?chosen.value:'en';
    try{localStorage.setItem('zz_site_lang',lang)}catch(_){}
    const u=new URL(location.href);
    if(lang==='en')u.searchParams.delete('lang');else u.searchParams.set('lang',lang);
    history.replaceState(null,'',u.pathname+u.search+u.hash);
    apply(lang);
  });
  window.addEventListener('popstate',()=>apply(current()));
  apply(current());
})();
