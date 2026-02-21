import Link from 'next/link';

export default function BecomeATutor() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="text-primary dark:text-blue-400">
                                <span className="material-symbols-outlined text-3xl">school</span>
                            </div>
                            <h1 className="text-xl font-bold tracking-tight text-primary dark:text-slate-100">K-Edu Connect</h1>
                        </Link>

                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/tutors" className="text-sm font-medium hover:text-primary transition-colors">Find Tutors (튜터 찾기)</Link>
                            <Link href="/become-a-tutor" className="text-sm font-semibold text-primary border-b-2 border-primary">Become a Tutor (튜터 되기)</Link>
                            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Resources (자료실)</Link>
                            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">About Us (회사 소개)</Link>
                        </nav>

                        <div className="flex items-center gap-4">
                            <button className="hidden sm:flex px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-all shadow-sm">
                                Log In (로그인)
                            </button>
                            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center overflow-hidden">
                                <span className="material-symbols-outlined text-slate-500">account_circle</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 lg:py-32 bg-slate-50 dark:bg-slate-900">
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#1a355b_0%,_transparent_50%)]"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="max-w-3xl">
                            <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                                Share Your Knowledge, <br />
                                <span className="text-primary dark:text-blue-400">Shape the Future</span>
                                <div className="text-2xl lg:text-3xl font-medium mt-2 text-slate-600 dark:text-slate-300">
                                    지식을 나누고 미래를 설계하세요
                                </div>
                            </h2>
                            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                                Join our global network of professional educators and inspire students worldwide. Transform lives through education while building your own global career.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all">
                                    Apply Now (지금 지원하기)
                                </button>
                                <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-bold text-lg rounded-xl hover:bg-slate-50 transition-all">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden lg:block absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-[500px] rounded-l-[100px] overflow-hidden shadow-2xl">
                        <div
                            className="w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqq7lttvi6xJiP1-iLQZ8A88VY0kaQTDlaeBcMA_omhG0Ol31Leq4KL9Rpo56IB6d8qbqoSOGSmBEMJ1zJ7gG7Tcs62qpZl_9dVdMD5YeoMcrd3Uv9BT0lu-PL9nG4M5oM359j1VD0hTW_9URStKQT8lci1BFOG-rXlAzebe4WtgKDv4m2B7JLYMVsaqyiYblxCSabB7gQ_qZUHrMq9m2AYjhYoH1EiuwB8tLjGdx24XXWy6wOkSaRmWvs48LUEELK7PNWj3R-JIyP')" }}
                            title="A diverse group of teachers collaborating and smiling in a modern workspace"
                        />
                    </div>
                </section>

                {/* Why Teach with Us Section */}
                <section className="py-24 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Teach with Us?</h3>
                            <p className="text-xl text-slate-500 dark:text-slate-400">왜 우리와 함께 가르쳐야 할까요?</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-all group">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                    <span className="material-symbols-outlined text-3xl">calendar_month</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3">Flexible Schedule</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Work when you want, from anywhere in the world. Set your own hours and manage your balance between life and work.
                                </p>
                                <span className="text-sm font-medium text-slate-400">자유로운 일정 관리</span>
                            </div>

                            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-all group">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                    <span className="material-symbols-outlined text-3xl">public</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3">Global Impact</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Reach students across borders and cultures. Share your expertise with a diverse community of learners worldwide.
                                </p>
                                <span className="text-sm font-medium text-slate-400">전 세계적인 영향력</span>
                            </div>

                            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 hover:border-primary/30 transition-all group">
                                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all text-primary">
                                    <span className="material-symbols-outlined text-3xl">payments</span>
                                </div>
                                <h4 className="text-xl font-bold mb-3">Competitive Pay</h4>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                                    Earn what your expertise is worth with our tiered system. We value your skills and experience with fair compensation.
                                </p>
                                <span className="text-sm font-medium text-slate-400">경쟁력 있는 보수</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How it Works Section */}
                <section className="py-24 bg-slate-50 dark:bg-slate-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-20">
                            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">How it Works</h3>
                            <p className="text-xl text-slate-500 dark:text-slate-400">이용 방법</p>
                        </div>

                        <div className="relative">
                            {/* Connection Line (Desktop) */}
                            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-700"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                                {/* Step 1 */}
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-primary flex items-center justify-center mb-6 z-10 shadow-xl">
                                        <span className="material-symbols-outlined text-4xl text-primary">edit_note</span>
                                    </div>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-20">STEP 01</div>
                                    <h5 className="text-xl font-bold mb-2">Apply</h5>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Fill out the online application form with your details.</p>
                                    <span className="mt-2 text-xs font-bold text-slate-400">지원서 작성</span>
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-primary flex items-center justify-center mb-6 z-10 shadow-xl">
                                        <span className="material-symbols-outlined text-4xl text-primary">video_chat</span>
                                    </div>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-20">STEP 02</div>
                                    <h5 className="text-xl font-bold mb-2">Interview</h5>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Meet our recruitment team for a brief video interview.</p>
                                    <span className="mt-2 text-xs font-bold text-slate-400">면접 진행</span>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-full border-4 border-primary flex items-center justify-center mb-6 z-10 shadow-xl">
                                        <span className="material-symbols-outlined text-4xl text-primary">verified_user</span>
                                    </div>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full z-20">STEP 03</div>
                                    <h5 className="text-xl font-bold mb-2">Verification</h5>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Wait for your profile and documents to be verified.</p>
                                    <span className="mt-2 text-xs font-bold text-slate-400">자격 검증</span>
                                </div>

                                {/* Step 4 */}
                                <div className="relative flex flex-col items-center text-center">
                                    <div className="w-24 h-24 bg-primary rounded-full border-4 border-primary flex items-center justify-center mb-6 z-10 shadow-xl">
                                        <span className="material-symbols-outlined text-4xl text-white">rocket_launch</span>
                                    </div>
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1 rounded-full z-20">FINISH</div>
                                    <h5 className="text-xl font-bold mb-2">Start Tutoring</h5>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm">Go live and welcome your first students!</p>
                                    <span className="mt-2 text-xs font-bold text-slate-400">튜터링 시작</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="py-20 bg-primary dark:bg-slate-950">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to make an impact?</h3>
                        <p className="text-xl text-blue-100 mb-10">Start your journey as an educator with K-Edu Connect today.</p>
                        <button className="px-12 py-5 bg-white text-primary font-extrabold text-xl rounded-2xl shadow-2xl hover:bg-blue-50 transition-all">
                            Start Your Application (지원 시작하기)
                        </button>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="material-symbols-outlined text-2xl text-primary">school</span>
                                <h2 className="text-lg font-bold text-primary dark:text-white">K-Edu Connect</h2>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                                Connecting global minds through quality education and expert tutoring.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Platform (플랫폼)</h4>
                            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                <li><Link href="/tutors" className="hover:text-primary transition-colors">Find Tutors</Link></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Learning Hub</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Curriculum</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Support (지원)</h4>
                            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Safety Center</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6">Connect (연결)</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined">alternate_email</span>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined">share</span>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <span className="material-symbols-outlined">forum</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
                        <p>© 2026 K-Edu Connect. All rights reserved. (모든 권리 보유)</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-primary">Privacy Policy (개인정보 처리방침)</a>
                            <a href="#" className="hover:text-primary">Terms of Service (이용약관)</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
