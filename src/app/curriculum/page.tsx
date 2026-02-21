import Link from 'next/link';

export default function Curriculum() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <span className="material-symbols-outlined block">school</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary dark:text-slate-100 uppercase">K-Edu Connect</span>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/tutors" className="text-sm font-semibold hover:text-primary transition-colors">
                과외 찾기 <span className="block text-[10px] font-normal opacity-60">Find Tutors</span>
              </Link>
              <Link href="/curriculum" className="text-sm font-semibold text-primary border-b-2 border-primary pb-1">
                과정 안내 <span className="block text-[10px] font-normal opacity-60">Curriculum</span>
              </Link>
              <Link href="/reviews" className="text-sm font-semibold hover:text-primary transition-colors">
                이용 후기 <span className="block text-[10px] font-normal opacity-60">Reviews</span>
              </Link>
              <Link href="/support" className="text-sm font-semibold hover:text-primary transition-colors">
                고객 센터 <span className="block text-[10px] font-normal opacity-60">Support</span>
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/login" className="text-sm font-bold px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors inline-block text-center">
                로그인 <span className="hidden sm:inline opacity-60 text-xs font-normal">Login</span>
              </Link>
              <Link href="/tutors" className="bg-primary text-white text-sm font-bold px-5 py-2 rounded-lg hover:bg-primary/90 transition-all shadow-sm inline-block text-center">
                무료 체험 <span className="hidden sm:inline opacity-80 text-xs font-normal">Free Trial</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="bg-background-light dark:bg-background-dark min-h-screen text-slate-900 dark:text-slate-100">

        {/* Hero SEO Header */}
        <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-32 bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
              Global Standards meets Korean Curriculum
            </span>
            <h1 className="text-4xl md:text-5xl font-black leading-[1.2] tracking-tight mb-6">
              Find Your Perfect <span className="text-primary">Korean Tutor Online</span><br className="hidden md:block" />
              <span className="text-3xl md:text-4xl font-extrabold text-slate-700 dark:text-slate-300 mt-2 block">대한민국 정규 교육과정 완벽 대비</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              해외 한인 학생들을 위한 맞춤형 <strong>Tutoring Services</strong>. 귀국 후 학교 생활과 특례 입시 준비까지, 수준 높은 <strong>Private Tutor</strong> 강사진이 한국 내신과 학력 평가 진도를 완벽하게 책임집니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tutors" className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:-translate-y-0.5 transition-all text-center">
                과외 찾기 시작하기 (Find a Tutor)
              </Link>
            </div>
          </div>
        </section>

        {/* Core Subject Strategy */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Tutoring Services for Korean Learners</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">해외 체류로 발생할 수 있는 학력 격차를 핵심 교과목 연계 학습으로 채웁니다.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Korean */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">menu_book</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">국어 <span className="text-sm font-normal text-slate-500">Korean Language</span></h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                단순 회화가 아닌 정통 한국 국어 교과 진도에 맞춘 <strong>Korean Language Tutor</strong>. 어휘력, 독해력부터 중등/고등 문학 작품 분석 및 비문학 독해 훈련까지 준비합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm font-medium">초등부: 한글 떼기, 주제별 글쓰기, 어휘 네트워크 확장</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm font-medium">중/고등부: 중고등 국어 자습서 기반 내신 대비, 수능 국어 입문</span>
                </li>
              </ul>
            </div>

            {/* Math */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">calculate</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">수학 <span className="text-sm font-normal text-slate-500">Mathematics</span></h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                속도와 정확성이 중요한 한국 수학. 현지 학교 진도와 이질감이 큰 단원들(예: 기하와 벡터, 미적분)의 선행 및 심화 학습을 제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm font-medium">개념 완성: 개정 교과서 및 필수 개념서(개념원리 등) 완벽 마스터</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm font-medium">심화/응용: 쎈 수학, 블랙라벨 수준의 사고력 고난이도 문항 풀이</span>
                </li>
              </ul>
            </div>

            {/* Social/Science */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">public</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">역사 / 사회 <span className="text-sm font-normal text-slate-500">History & Social</span></h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                해외 거주로 인해 가장 취약해지기 쉬운 한국사 및 지리/사회 과목. 탄탄한 흐름 파악과 암기 노하우를 제공합니다.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm font-medium">한국사 능력 검정 시험 대비반 운영</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm font-medium">통합 사회 내신 대비 및 개념 이해</span>
                </li>
              </ul>
            </div>

            {/* University Prep */}
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl">workspace_premium</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">특례 입시 <span className="text-sm font-normal text-slate-500">University Prep</span></h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                3년/12년 재외국민 특례 입시의 바늘구멍을 통과하기 위한 지필 고사(국어/영어/수학) 실전 대비와 서류 전형 멘토링.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm font-medium">주요 대학 과거 기출문제 집중 풀이 및 약점 보완</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-primary text-sm mt-1">check_circle</span>
                  <span className="text-sm font-medium">글로벌 명문대 출신 멘토의 합격 전략 컨설팅 지원</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Grade Level Timeline Section */}
        <section className="py-24 bg-primary/5 dark:bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold mb-12 text-center">From Conversational to Academic: Tailored Programs</h3>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
              {/* Elementary */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-700 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="material-symbols-outlined text-lg">child_care</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-lg mb-2 text-primary">초등 과정 (Elementary)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    모국어의 감을 잃지 않도록 흥미를 유발하는 국어 수업. 기초 연산과 서술형 수학의 뼈대를 만들기.
                  </p>
                </div>
              </div>

              {/* Middle School */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-700 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="material-symbols-outlined text-lg">psychology</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-lg mb-2 text-primary">중등 과정 (Middle School)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    문학과 비문학의 균형 있는 발달. 고등 수학을 대비하는 방정식, 함수 등 대수와 기하 파트의 심화. 귀국 대비 자유학기제 진도 맞춤.
                  </p>
                </div>
              </div>

              {/* High School */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-700 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <span className="material-symbols-outlined text-lg">account_balance</span>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-lg mb-2 text-primary">고등 및 특례 (High School)</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    결과로 증명해야 하는 입시 플랜. 수능 과목 선행 및 등급 관리. 3특/12특 지필 고사의 완벽한 대비 및 실전 모의고사 훈련.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO FAQ Section */}
        <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">자주 묻는 질문 (FAQ)</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">How to Find a Tutor That Matches Your Goals?</p>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <h4 className="font-bold text-lg flex items-start gap-4 mb-2">
                <span className="text-primary font-black">Q.</span>
                How do I book a korean tutor online? (결제 및 예약은 어떻게 하나요?)
              </h4>
              <p className="text-slate-600 dark:text-slate-400 ml-8 text-sm leading-relaxed">
                '과외 찾기' 메뉴에서 학년, 희망 과목, 글로벌 시간대를 필터링하여 최적의 튜터를 찾아보세요. 프로필 페이지에서 무료 사전 인터뷰나 시범 수업을 예약하고 글로벌 결제 시스템으로 간편하게 시작할 수 있습니다.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <h4 className="font-bold text-lg flex items-start gap-4 mb-2">
                <span className="text-primary font-black">Q.</span>
                What makes your tutoring services different from offline academies? (오프라인 학원과 차별점은?)
              </h4>
              <p className="text-slate-600 dark:text-slate-400 ml-8 text-sm leading-relaxed">
                해외 현지 국제 학교/로컬 학교의 학기 스케줄과 방학 일정에 맞춰 유연하게 수업 일정을 조율할 수 있습니다. 1대1 맞춤형 <strong>Online Tutoring</strong>으로 한국 교육과정의 결손을 빈틈없이 메꿔줍니다.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
              <h4 className="font-bold text-lg flex items-start gap-4 mb-2">
                <span className="text-primary font-black">Q.</span>
                Can I find a private tutor for specialized topics like university prep? (특례 입시 전문 튜터도 있나요?)
              </h4>
              <p className="text-slate-600 dark:text-slate-400 ml-8 text-sm leading-relaxed">
                네, 물론입니다. K-Edu Connect 강사진 중에는 최상위권 스카이(SKY) 출신 멘토 및 대치동 입시 학원 경력을 가진 전문 <strong>Private Tutor</strong>가 다수 활동하고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Action Bottom */}
        <section className="py-20 bg-slate-900 border-t border-slate-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">우리 아이만을 위한 맞춤형 진도를 설계하세요</h2>
            <p className="text-slate-400 mb-10 text-lg">Browse our highly qualified experts and book a trial lesson today.</p>
            <Link href="/tutors" className="px-10 py-5 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-all text-lg inline-block">
              지금 튜터 찾기 (Browse Tutoring Services)
            </Link>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white text-primary p-1 rounded">
                  <span className="material-symbols-outlined block text-sm">school</span>
                </div>
                <span className="text-xl font-extrabold tracking-tight text-white">K-Edu Connect</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">
                세상의 모든 한인 학생들을 위한 맞춤형 한국 교육 서비스. 해외에서도 한국인으로서의 정체성과 실력을 키웁니다.
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">서비스 Service</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/tutors" className="hover:text-white transition-colors">과외 찾기 Find Tutors</Link></li>
                <li><Link href="/curriculum" className="hover:text-white transition-colors">학년별 커리큘럼 Curriculum</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">특례 입시 컨설팅 University Prep</Link></li>
                <li><Link href="/login" className="hover:text-white transition-colors">학습 리포트 Learning Report</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">회사 Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">회사 소개 About Us</Link></li>
                <li><Link href="/become-a-tutor" className="hover:text-white transition-colors">튜터 지원 Become a Tutor</Link></li>
                <li><Link href="/support" className="hover:text-white transition-colors">파트너십 Partnership</Link></li>
                <li><Link href="/" className="hover:text-white transition-colors">개인정보처리방침 Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6">고객 센터 Support</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">call</span> +82-2-1234-5678</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">mail</span> help@kedu-connect.com</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">location_on</span> 서울특별시 강남구 테헤란로 123</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-xs">schedule</span> 평일 09:00 - 18:00 (KST)</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-xs">
            <p>© 2026 K-Edu Connect. All rights reserved. 대한민국 교육부 가이드라인을 준수합니다.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
