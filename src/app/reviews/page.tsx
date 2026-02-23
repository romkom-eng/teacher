import Link from 'next/link';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      author: '이OO 학부모님',
      location: '미국 샌프란시스코',
      tags: ['초등학생', '수학'],
      rating: 5,
      date: '2023.10.12',
      content: '아이가 내년에 귀국 예정이라 한국 수학 진도를 어떻게 맞춰야 할지 막막했는데, K-Edu Connect 덕분에 현지에서도 한국 교과 과정을 완벽하게 따라갈 수 있었어요. 선생님이 너무 친절하시고 아이 눈높이에 맞춰 수업해 주셔서 수학을 싫어하던 아이가 이제는 수학 시간을 가장 기다립니다.',
      avatar: 'NY'
    },
    {
      id: 2,
      author: '박OO 학생',
      location: '독일 베를린',
      tags: ['고등학생', '국어', '논술'],
      rating: 5,
      date: '2023.09.28',
      content: '국제학교에 다니면서 한국어 작문이나 독해 실력이 많이 떨어질까 걱정했어요. 줌으로 수업을 듣는데 선생님께서 매주 새로운 시사 지문을 가져와 토론하고 글쓰기 첨삭을 해 주셔서 한국어 실력을 완벽하게 유지하고 있습니다. 특례 입시 준비에도 큰 도움이 되고 있어요.',
      avatar: 'BE'
    },
    {
      id: 3,
      author: '최OO 학부모님',
      location: '싱가포르',
      tags: ['중학생', '과학'],
      rating: 4,
      date: '2023.08.15',
      content: '해외에서는 한국 교육과정의 실험 중심 통합과학을 배우기가 어려운데, K-Edu 선생님께서 줌 화면 공유로 시청각 자료를 꼼꼼하게 보여주시며 설명해 주셔서 만족스럽습니다. 시차도 유연하게 맞춰주셔서 방과 후 스케줄 짜기가 수월하네요.',
      avatar: 'SG'
    },
    {
      id: 4,
      author: '김OO 학생',
      location: '베트남 호치민',
      tags: ['초등학생', '한국사'],
      rating: 5,
      date: '2023.07.03',
      content: '선생님이 너무 재미있어요! 한국 역사가 외울 게 많아서 어려웠는데 스토리 형식으로 옛날 이야기 듣듯이 설명해 주시니까 머리에 쏙쏙 들어와요. 다음 시간이 늘 기대됩니다.',
      avatar: 'VN'
    },
    {
      id: 5,
      author: '정OO 학부모님',
      location: '캐나다 밴쿠버',
      tags: ['고등학생', '특례'],
      rating: 5,
      date: '2023.06.21',
      content: '재외국민 특례 전형을 준비하면서 정보가 부족해 답답했는데, K-Edu 튜터 선생님이 입시 노하우까지 짚어주시며 철저하게 대비시켜주십니다. 최상위권 강사진만 모여있다는 말이 진짜네요. 믿고 맡깁니다.',
      avatar: 'CA'
    },
    {
      id: 6,
      author: '서OO 학생',
      location: '호주 시드니',
      tags: ['중학생', '전과목'],
      rating: 4,
      date: '2023.05.11',
      content: '한국에 갔을 때 학교 진도를 못 따라갈까 봐 시작했어요. 생각보다 숙제가 좀 있지만, 선생님이 격려해주시고 제가 헷갈리는 부분은 몇 번이고 다시 알려주셔서 포기하지 않고 6개월째 듣고 있습니다.',
      avatar: 'AU'
    }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <span className="material-symbols-outlined block">school</span>
              </div>
              <Link href="/" className="text-xl font-extrabold tracking-tight text-primary dark:text-slate-100 uppercase hover:opacity-80 transition-opacity">
                K-Edu Connect
              </Link>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/tutors" className="text-sm font-semibold hover:text-primary transition-colors">
                과외 찾기 <span className="block text-[10px] font-normal opacity-60">Find Tutors</span>
              </Link>
              <Link href="/curriculum" className="text-sm font-semibold hover:text-primary transition-colors">
                과정 안내 <span className="block text-[10px] font-normal opacity-60">Curriculum</span>
              </Link>
              <Link href="/reviews" className="text-sm font-semibold text-primary">
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

      <main>
        {/* Hero Section */}
        <section className="bg-slate-50 dark:bg-slate-900/50 py-20 px-4 text-center border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
              <span className="material-symbols-outlined text-sm">star</span>
              수강생 평균 만족도 4.9/5
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
              수천 명의 학생들이<br className="sm:hidden" /> 증명하는 <span className="text-primary">K-Edu Connect</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              전 세계 각지의 해외 거주 한인 학생들과 학부모님들이 직접 남겨주신 솔직한 수강 후기를 확인하세요.
              지구 반대편에서도 한국 교실의 열기를 그대로 느낄 수 있습니다.
            </p>

            <div className="flex justify-center flex-wrap gap-8 text-slate-900 dark:text-slate-100">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black">10,000+</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Class Hours</span>
              </div>
              <div className="w-px h-12 bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black">98%</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Satisfaction</span>
              </div>
              <div className="w-px h-12 bg-slate-200 dark:bg-slate-700 hidden sm:block"></div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black">45+</span>
                <span className="text-xs text-slate-500 uppercase font-bold tracking-widest mt-1">Countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-b border-slate-100 dark:border-slate-800 bg-white dark:bg-background-dark sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
              <button className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-sm font-bold shadow-md">
                전체 보기 All
              </button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                초등부 Elementary
              </button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                중등부 Middle
              </button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                고등/특례 High School
              </button>
              <div className="w-px h-6 bg-slate-300 dark:bg-slate-700 shrink-0 mx-2"></div>
              <button className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                수학 Math
              </button>
              <button className="whitespace-nowrap px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition">
                국어 Korean
              </button>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 bg-white dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="break-inside-avoid bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined fill-1 text-lg">
                          {i < review.rating ? 'star' : 'star_border'}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-slate-400 font-medium">{review.date}</span>
                  </div>
                  <h3 className="text-base font-medium text-slate-800 dark:text-slate-200 mb-4 leading-relaxed">
                    "{review.content}"
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {review.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-[10px] font-bold text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary flex-shrink-0">
                      {review.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1">
                        {review.author}
                        <span className="material-symbols-outlined text-green-500 text-[14px]" title="Verified Student">verified</span>
                      </h4>
                      <p className="text-xs text-slate-500 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">location_on</span>
                        {review.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <button className="px-6 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition">
                더 많은 후기 보기 Load More Reviews
              </button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary dark:bg-primary/90 text-white text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-6">다음 후기의 주인공이 되어보세요</h2>
            <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
              지금 무료 체험 수업을 신청하고, 검증된 1% 튜터와 함께 성적 향상의 기쁨을 경험하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tutors" className="px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:bg-slate-50 hover:scale-105 transition-all">
                무료 체험 신청하기
              </Link>
              <Link href="/support" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                학습 상담 받기
              </Link>
            </div>
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
              <div className="flex gap-4">
                <Link href="/" className="hover:text-white transition-colors"><span className="material-symbols-outlined">language</span></Link>
                <Link href="/" className="hover:text-white transition-colors"><span className="material-symbols-outlined">share</span></Link>
                <Link href="/" className="hover:text-white transition-colors"><span className="material-symbols-outlined">mail</span></Link>
              </div>
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
