import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="bg-primary text-white p-1.5 rounded-lg">
                <span className="material-symbols-outlined block">school</span>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-primary dark:text-slate-100 uppercase">K-Edu Connect</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/tutors" className="text-sm font-semibold hover:text-primary transition-colors">
                과외 찾기 <span className="block text-[10px] font-normal opacity-60">Find Tutors</span>
              </Link>
              <Link href="/curriculum" className="text-sm font-semibold hover:text-primary transition-colors">
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

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-primary/5"></div>
            <img
              className="w-full h-full object-cover opacity-20 dark:opacity-10"
              alt="A student smiling while studying on a laptop at home"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtA2Yu9mkoXHI6zn59-zk-OPGLUBn9n4izQCh3q1lT1xEhfcngH7jucAfI5f7HvgUhWsqE_tB8TdB_eWsnNqCxKDPzqyPyrIDuufbPe8kKwB7VFfDLWKm4ILWyvoJrajCA08eC-LryDIMyII8JtleH7ZKlpAzUZ-U8lWKdnjMQMPWRC_YMlbQ0dRUa9dBCRrii637dGHU6CeG3F7MIRcmKDAL1-g5x4eQ36AjgJpagZ1BOFrCRcCtEBX6vayXIiHor5ZfwWnWJMFDX"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
              세상 어디서든,<br className="hidden sm:block" /> 한국 교실을 집으로
              <span className="block text-2xl md:text-3xl font-medium text-primary/70 mt-4 leading-normal">
                Bring the Korean Classroom to Your Home, Anywhere in the World.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              귀국 준비를 위한 한국 교과 과정 전문 줌(Zoom) 과외 전문 튜터와 함께하세요. 해외에서도 한국 교육의 흐름을 놓치지 마세요.
              <span className="block text-sm mt-2 opacity-80">Expert Korean tutors available via Zoom for students catching up on the Korean curriculum while living abroad. Perfect for those planning to return to Korea.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/tutors" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:translate-y-[-2px] transition-all flex items-center justify-center">
                지금 튜터 찾기 <span className="ml-2 font-normal text-sm opacity-80">Find My Tutor</span>
              </Link>
              <Link href="/curriculum" className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all flex items-center justify-center">
                커리큘럼 보기 <span className="ml-2 font-normal text-sm opacity-60">View Curriculum</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="max-w-6xl mx-auto px-4 -mt-12 relative z-20">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-100 dark:border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">book</span> 과목 Subject
                </label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary p-2">
                  <option>전체 과목 (All Subjects)</option>
                  <option>수학 (Mathematics)</option>
                  <option>국어 (Korean)</option>
                  <option>사회/과학 (Social/Science)</option>
                  <option>논술 (Essay Writing)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">school</span> 학년 Grade
                </label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary p-2">
                  <option>전체 학년 (All Grades)</option>
                  <option>초등학생 (Elementary)</option>
                  <option>중학생 (Middle School)</option>
                  <option>고등학생 (High School)</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">schedule</span> 시간대 Time Zone
                </label>
                <select className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:ring-primary p-2">
                  <option>내 지역 (Local Time)</option>
                  <option>미국 동부 (US East)</option>
                  <option>미국 서부 (US West)</option>
                  <option>유럽 (Europe)</option>
                  <option>동남아시아 (SEA)</option>
                </select>
              </div>
              <div className="flex items-end">
                <Link href="/tutors" className="w-full bg-primary text-white h-[42px] rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors">
                  <span className="material-symbols-outlined">search</span>
                  검색하기 Search
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why K-Edu Connect */}
        <section className="py-24 bg-white dark:bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">왜 K-Edu Connect 인가요?</h2>
              <p className="text-slate-600 dark:text-slate-400">Why K-Edu Connect? The best choice for global Korean students.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">public</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Global Reach</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">전 세계 어디서든 줌(Zoom)을 통한 실시간 수업. 거주하시는 지역의 시차에 맞춘 유연한 수업 시간표를 제공합니다.</p>
                <p className="text-xs mt-3 text-slate-400">Classes via Zoom across all time zones with flexible scheduling.</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">menu_book</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Curriculum Matching</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">한국 국가 교육과정(교과서) 완벽 분석. 귀국 후 학교 생활에 바로 적응할 수 있도록 맞춤형 진도를 구성합니다.</p>
                <p className="text-xs mt-3 text-slate-400">Specialized in Korean national curriculum for smooth repatriation.</p>
              </div>
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Tutors</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">엄격한 심사를 거친 상위 1% 실력파 강사진. 학업 성취도뿐만 아니라 해외 생활의 정서적 교감까지 고려합니다.</p>
                <p className="text-xs mt-3 text-slate-400">Top-tier educators from Korea, verified for excellence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Tutors Section */}
        <section className="py-24 bg-background-light dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">이달의 추천 튜터</h2>
                <p className="text-slate-600 dark:text-slate-400">Meet our highly-rated featured tutors of the month.</p>
              </div>
              <Link href="/tutors" className="text-primary font-bold flex items-center gap-1 hover:underline">
                전체 보기 View All <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: '김지수', eng: 'Ji-su Kim', subj: '수학 Math', tag: '초/중등', rating: '4.9', img: 'AB6AXuCBT5gZwILVtitnGXwqvnikGyewlvqL99Vd3ZDWIHhSboLwHYB9WOtfllOIBRnmUpJy2Wuny7BT2HxmVt6F0X7iRM9ivV7iDqv7_JaHuEAEb5iIIIryS1ME60NPCoeuEtMV5LAPlFQDB1q9lHwoxvhUNMeAY19U681DTq6H_LwnGEbWcVoHVNuobBSno2amnbHRfEGU-ZQOuQZqEezoyVtyJFVXbG_KoB86OoFJyR5wHyz7RSFCI8zmUPPKeDiT2upR1rpf1f-Zl8oM', id: 'jisukim', quote: '"수학이 즐거워지는 마법, 개념부터 확실하게 잡아드립니다."' },
                { name: '박민호', eng: 'Min-ho Park', subj: '국어 Korean', tag: '고등/수능', rating: '5.0', img: 'AB6AXuBRYxjvdtiFRDO-qyC2U0kXJf51bn_sKj34PwryiAnmP_Zei_ufNQmBHQ42ms-JNfshH3nlgF3TsmUqa2OCxcAva3Wu3ghxx01AuPzZItk2hAIuU7hMSgnMCgMV8GNnR_uYsUfeG_fZ0fSHYTzybU9DgX4rSYLSdYi_9m751RFs2g9hLgiFWIGvW-XIqCbzLPuxmyViul769_wIKwny7wgpnBR_AbKB07WXqJ6XlFA6KsRs0vggv1pJtCFJivI-dDmpfgQSV9ac5Gx4', id: 'minhopark', quote: '"특례 입시 전문, 한국어 문해력을 키워주는 정통 국어 수업."' },
                { name: '최유진', eng: 'Yu-jin Choi', subj: '과학 Science', tag: '중/고등', rating: '4.8', img: 'AB6AXuBVTorxao9L2GlIEtTQYQ-mosTmnP57gq42rE8klS0xiU9G1HF-pQndk5zbcIP5Ivesf1Qp6Imhmrnwbo4bOYqUjP_dK2Lfl0NTsZ5su0jixx23txdDfMD1VwTghiQSCZsr0NXUrpyRv6Vz7bilcZw0lXR0H-GUZZgL5GerABTW0dTEzi5uul8roe_Rweuzn_SXHrjuwsjGZ8xedNMaCN5zyrAnboyh4u0zY_s7YVEO3Kow2iungtyvakPFnuCkf4gjvkBQq0Vx_LNs', id: 'yujinchoi', quote: '"실험과 원리 중심의 과학 수업, 통합 과학의 절대 강자."' },
                { name: '이도현', eng: 'Do-hyeon Lee', subj: '사회 Social', tag: '중등/역사', rating: '4.9', img: 'AB6AXuAXvm4P2ZLES6Y4vDARIuT9rfAdBbkCb-hFmDT-bf7k2eSNhVs4i4gmoL7rfcsvtqjzyD7gbLDlEURNg-Ed9AP1zksB-NeIaYMJdNXVlhIwugk2rj7xvvhU9CGegMY9KXtmgjyVmq0CP5AchQThSeovYmkfTncchNLdy_XU68eyhg1qhUT-g6Z57osSUeSRBGT0iDGcD5GdmiulFOt1PxzDUgch2XW6AJqQtOe2HQXSXAMKTRLhmnfwtTwokHcSDnqCZll6w0n-B1KO', id: 'dohyeonlee', quote: '"스토리텔링으로 배우는 한국사, 복잡한 사회 개념을 한눈에."' },
              ].map((t) => (
                <div key={t.id} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 group flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={t.eng} src={`https://lh3.googleusercontent.com/aida-public/${t.img}`} />
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">
                      VERIFIED
                    </div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-bold text-lg">{t.name} 튜터</h4>
                        <p className="text-xs text-slate-500">{t.eng}</p>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{t.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-[10px] font-medium uppercase">{t.subj}</span>
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 rounded text-[10px] font-medium uppercase">{t.tag}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 italic flex-1">{t.quote}</p>
                    <Link href={`/tutors/${t.id}`} className="w-full py-2 bg-primary/5 text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-colors text-center block mt-auto">
                      상세 프로필 Profile
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals & Testimonials */}
        <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">학부모님들의 생생한 후기</h2>
              <p className="text-slate-600 dark:text-slate-400">Trusted by parents worldwide. See what our global community says.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">NY</div>
                  <div>
                    <h5 className="font-bold text-sm">샌프란시스코 이OO 학부모님</h5>
                    <p className="text-[10px] text-slate-500 uppercase">San Francisco, USA</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                  "미국 현지 학교 진도 따라가기도 바쁜데, 한국 수학을 어떻게 챙겨야 하나 막막했어요. K-Edu 덕분에 한국 교과 과정도 탄탄하게 유지하고 있습니다. 아이가 선생님을 너무 좋아해요!"
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">BE</div>
                  <div>
                    <h5 className="font-bold text-sm">베를린 박OO 학부모님</h5>
                    <p className="text-[10px] text-slate-500 uppercase">Berlin, Germany</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                  "귀국을 6개월 앞두고 국어 문해력 걱정이 많았는데, 맞춤형 커리큘럼으로 자신감을 많이 회복했습니다. 해외 거주 가정에게는 한줄기 빛 같은 서비스입니다."
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">SG</div>
                  <div>
                    <h5 className="font-bold text-sm">싱가포르 최OO 학부모님</h5>
                    <p className="text-[10px] text-slate-500 uppercase">Singapore</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic">
                  "줌 수업이라 걱정했는데 대면 수업보다 집중력이 더 좋은 것 같아요. 칠판 공유 시스템이랑 자료 전달이 체계적이라 아주 만족스럽습니다."
                </p>
              </div>
            </div>
            <div className="pt-10 border-t border-slate-100 dark:border-slate-800">
              <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by families from</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-black text-slate-800 dark:text-slate-200">KOREA HERALD</span>
                <span className="text-2xl font-black text-slate-800 dark:text-slate-200">EXPATS DAILY</span>
                <span className="text-2xl font-black text-slate-800 dark:text-slate-200">GLOBAL EDU</span>
                <span className="text-2xl font-black text-slate-800 dark:text-slate-200">SEOUL TIMES</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-9xl">auto_stories</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">우리 아이에게 맞는 최적의 튜터를 찾아보세요</h2>
              <p className="text-primary/10 text-lg mb-8 text-slate-300">Start your first trial lesson today and bring the Korean classroom home.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Link href="/tutors" className="bg-white text-primary px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-colors text-center inline-block">
                  무료 체험 수업 신청하기 <span className="block text-xs font-normal opacity-70">Apply for Free Trial</span>
                </Link>
                <Link href="/become-a-tutor" className="bg-primary/50 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-primary/70 transition-colors flex items-center justify-center flex-col">
                  튜터 지원하기 <span className="block text-xs font-normal opacity-70">Become a Tutor</span>
                </Link>
              </div>
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
