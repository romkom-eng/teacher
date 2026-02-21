import Link from 'next/link';
import Image from 'next/image';
import { use } from 'react';

export async function generateStaticParams() {
    return [
        { id: 'jisukim' },
        { id: 'minhopark' },
        { id: 'yujinchoi' },
        { id: 'dohyeonlee' },
    ];
}

export default function TutorProfile({ params }: { params: Promise<{ id: string }> }) {
    // In Next.js 15+, dynamic route params are asynchronous and must be awaited or unwrapped using React.use().
    const resolvedParams = use(params);
    const tutorId = resolvedParams.id;

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 lg:px-20 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2 text-primary dark:text-slate-100">
                            <span className="material-symbols-outlined text-3xl">school</span>
                            <h1 className="text-xl font-bold tracking-tight">K-Edu Connect</h1>
                        </Link>
                        <nav className="hidden md:flex items-center gap-6">
                            <Link href="/tutors" className="text-sm font-medium hover:text-primary transition-colors">Find Tutors</Link>
                            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">How it Works</Link>
                            <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">Resources</Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative hidden sm:block">
                            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                            <input type="text" className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary" placeholder="Search subjects..." />
                        </div>
                        <button className="px-4 py-2 text-sm font-bold text-primary hover:bg-slate-100 rounded-lg transition-all">Log In</button>
                        <button className="px-4 py-2 text-sm font-bold bg-primary text-white rounded-lg hover:shadow-lg transition-all">Sign Up</button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 lg:px-20 py-8">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
                    <Link href="/" className="hover:text-primary">Home</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <Link href="/tutors" className="hover:text-primary">Korean Tutors</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-slate-900 font-medium">Ji-su Kim</span>
                </nav>

                {/* Profile Header Section */}
                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 mb-8 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-8 items-start">
                    <div className="relative group">
                        <div className="w-40 h-40 rounded-xl overflow-hidden shadow-xl bg-slate-200">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs4QE4hfYYagPMC3Ynt1KNreVz29ht-Jj9rcaWxsVpOYHDSaGpCOSK3ueWqywTzJEd1IcFM1TRrQClRS3L9NXPBpJ2ODBliwDc8rDRgu1tlpcifjQ3LzTwd_vDS_SNMSKjdNQeHlcyw8hxwEWc06oIdWP_hYW0_eCDwq1y9m496zBSvYHsEaWY34ZxUAJeCyKskL0FBuKBT0jL-ydjT4Mo8LVSYuEtkw57rhukOQTaHubJQXWxTgA1Q8xWKIq9mmyK79GSgE3Tn5tF" alt="Ji-su Kim Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-1 rounded-full border-4 border-white dark:border-slate-900" title="Online Now">
                            <span className="block w-3 h-3 bg-white rounded-full animate-pulse"></span>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Ji-su Kim</h2>
                            <span className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                                <span className="material-symbols-outlined text-sm">verified</span>
                                Verified Tutor
                            </span>
                        </div>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 font-medium italic">"Bridging cultures through the beauty of the Korean language."</p>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-xs uppercase tracking-wider font-bold">Rating</span>
                                <div className="flex items-center gap-1 text-amber-500 font-bold">
                                    <span className="material-symbols-outlined fill-1">star</span>
                                    <span>4.9</span>
                                    <span className="text-slate-400 font-normal text-sm ml-1">(120 reviews)</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-xs uppercase tracking-wider font-bold">Rate</span>
                                <div className="text-primary dark:text-slate-200 font-bold">
                                    ₩45,000<span className="text-slate-400 font-normal text-sm">/hr</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-xs uppercase tracking-wider font-bold">Lessons</span>
                                <div className="font-bold">1,240+</div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-slate-400 text-xs uppercase tracking-wider font-bold">Response</span>
                                <div className="font-bold">&lt; 1 hour</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <button className="w-full md:min-w-[160px] py-3 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">chat</span>
                            Message
                        </button>
                        <button className="w-full md:min-w-[160px] py-3 rounded-lg border-2 border-slate-200 dark:border-slate-700 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">share</span>
                            Share
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Me */}
                        <section>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined">person</span>
                                About Me
                            </h3>
                            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-4 leading-relaxed">
                                <p>Annyeonghaseyo! I am Ji-su, a native Korean speaker with over 8 years of experience teaching Korean to students from all over the world. My background is in Linguistics and Education, and I specialize in helping adult learners master natural conversation.</p>
                                <p>Whether you're a complete beginner starting with Hangul or an advanced student preparing for TOPIK II, I tailor every lesson to your specific goals and interests. I believe that learning a language is the best way to understand a new culture!</p>
                            </div>
                        </section>

                        {/* Teaching Philosophy */}
                        <section>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                                <span className="material-symbols-outlined">psychology</span>
                                Teaching Philosophy
                            </h3>
                            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                                <p className="mb-4">My methodology focuses on <strong>Active Immersion</strong>. Instead of rote memorization, we focus on:</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        <span>Context-based learning using K-Dramas and modern Korean media.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        <span>High-frequency vocabulary used in modern Seoul.</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                                        <span>Immediate application of grammar in real-life scenarios.</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Education & Subjects */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <section>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                                    <span className="material-symbols-outlined">workspace_premium</span>
                                    Education &amp; Certifications
                                </h3>
                                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 space-y-4">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary">history_edu</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">B.A. in Korean Education</h4>
                                            <p className="text-xs text-slate-500">Seoul National University (SNU)</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span className="material-symbols-outlined text-primary">badge</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Korean Language Teacher Level 1</h4>
                                            <p className="text-xs text-slate-500">Ministry of Culture, Sports and Tourism</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-primary">
                                    <span className="material-symbols-outlined">menu_book</span>
                                    Subjects Taught
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">Conversational Korean</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">TOPIK Prep (I &amp; II)</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">Business Korean</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">Korean for Children</span>
                                    <span className="bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-700">K-Pop Lyrics Analysis</span>
                                </div>
                            </section>
                        </div>

                        {/* Reviews */}
                        <section>
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold flex items-center gap-2 text-primary">
                                    <span className="material-symbols-outlined">reviews</span>
                                    Student Reviews
                                </h3>
                                <Link href="#" className="text-primary font-bold text-sm hover:underline">View all 120 reviews</Link>
                            </div>
                            <div className="space-y-4">
                                {/* Review 1 */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRa3rDKDFB3KRNO1zgwNp7SUF2o7Z5nyzFxyXrqC7Q-GE1CJy_2P-GIEZAEqOUa252ybH0eEjWQgP8vYvNQDCtwX_j6Q6vzTxc9n1oDFEwtplFZgWcs-Gl2m6EOXGCKCxEwOOp4Jxohm0Z5d1_3y784yERf5oeCVe1LOjvltYVm9TmJb6fBjiotqKTyd7XrDQq5dIscOJkmhNvwG6EiIwsTOh8-fdJRobItQUZE2zukAk4S3mQPaGafsPfzWqnRVUHEOcA9CBITRo7" alt="David M." className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">David M.</h4>
                                                <div className="flex text-amber-500 scale-75 -ml-4">
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs text-slate-400">2 days ago</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">"Ji-su is an incredible teacher. She's patient, encourages me to speak even when I'm nervous, and her materials are so much better than standard textbooks. Highly recommend for anyone looking to improve their fluency!"</p>
                                </div>

                                {/* Review 2 */}
                                <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex gap-3 items-center">
                                            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPFTjKdA9GJvBD0sp7ww2yAv1s4-bUgmIdI8R-suL1dJ8MK31vM_ku1ZpYtG4-8BcM9VcwTARuMXullLLy3k66XyH1gpY_oUlqIu5kih0X-O4cPIXbcieAAj-YmCiJ8DtlnFR1vUyoY4iZfve9K6Pv-L3bTEP7IVZaft3gQt62YlWyekSI9dH-iHpAX3thJk069ldcLAmK_DioBIOCvOWKbJ_ZFJ6q_m3wpsASqUtgedHBIU7CBrMVNTm6W6ejBFOjBf5mFctkaKFo" alt="Sarah L." className="w-full h-full object-cover" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm">Sarah L.</h4>
                                                <div className="flex text-amber-500 scale-75 -ml-4">
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                    <span className="material-symbols-outlined fill-1">star</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs text-slate-400">1 week ago</span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">"The best TOPIK prep ever. I passed Level 4 thanks to Ji-su's strategy-focused lessons. She knows exactly what the examiners look for!"</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Booking Widget */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
                            <div className="bg-primary p-6 text-white text-center">
                                <h3 className="text-xl font-bold">Book a Lesson</h3>
                                <p className="text-white/80 text-sm">Choose a time that works for you</p>
                            </div>
                            <div className="p-6">
                                {/* Mini Calendar Header */}
                                <div className="flex items-center justify-between mb-4">
                                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </button>
                                    <span className="font-bold text-sm">October 2023</span>
                                    <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded">
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </button>
                                </div>

                                {/* Simple Calendar Grid */}
                                <div className="grid grid-cols-7 gap-1 text-center mb-6">
                                    <span className="text-[10px] font-bold text-slate-400">S</span>
                                    <span className="text-[10px] font-bold text-slate-400">M</span>
                                    <span className="text-[10px] font-bold text-slate-400">T</span>
                                    <span className="text-[10px] font-bold text-slate-400">W</span>
                                    <span className="text-[10px] font-bold text-slate-400">T</span>
                                    <span className="text-[10px] font-bold text-slate-400">F</span>
                                    <span className="text-[10px] font-bold text-slate-400">S</span>
                                    {/* Dummy days */}
                                    <button className="h-8 w-8 flex items-center justify-center text-xs rounded-full hover:bg-primary/10 transition-colors">24</button>
                                    <button className="h-8 w-8 flex items-center justify-center text-xs rounded-full hover:bg-primary/10 transition-colors">25</button>
                                    <button className="h-8 w-8 flex items-center justify-center text-xs rounded-full bg-primary text-white font-bold">26</button>
                                    <button className="h-8 w-8 flex items-center justify-center text-xs rounded-full hover:bg-primary/10 transition-colors">27</button>
                                    <button className="h-8 w-8 flex items-center justify-center text-xs rounded-full hover:bg-primary/10 transition-colors">28</button>
                                    <button className="h-8 w-8 flex items-center justify-center text-xs rounded-full hover:bg-primary/10 transition-colors">29</button>
                                    <button className="h-8 w-8 flex items-center justify-center text-xs rounded-full hover:bg-primary/10 transition-colors">30</button>
                                </div>

                                {/* Time Slots */}
                                <div className="mb-6">
                                    <span className="block text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">Available Times</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">09:00 AM</button>
                                        <button className="py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">11:30 AM</button>
                                        <button className="py-2 text-xs border border-primary bg-primary/5 rounded-lg text-primary font-bold">02:00 PM</button>
                                        <button className="py-2 text-xs border border-slate-200 dark:border-slate-700 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">04:30 PM</button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Link href={`/checkout?tutorId=${tutorId}`} className="w-full py-4 bg-primary text-white rounded-lg font-bold shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all text-center block">
                                        Book a Trial Lesson
                                    </Link>
                                    <p className="text-[10px] text-center text-slate-400 px-4">
                                        Cancel for free up to 24 hours before your lesson. Secure payment processed by Stripe.
                                    </p>
                                </div>
                            </div>
                            <div className="border-t border-slate-100 dark:border-slate-800 p-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-lg">verified_user</span>
                                    <span className="text-xs font-medium">100% Satisfaction Guarantee</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 text-primary dark:text-slate-100 mb-6">
                            <span className="material-symbols-outlined text-3xl">school</span>
                            <h1 className="text-xl font-bold tracking-tight">K-Edu Connect</h1>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">Connecting learners worldwide with the best Korean educators. Quality education, anytime, anywhere.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">How it Works</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="/become-a-tutor" className="hover:text-primary transition-colors">Tutor Application</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Referral Program</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link href="#" className="hover:text-primary transition-colors">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6">Newsletter</h4>
                        <div className="flex gap-2">
                            <input type="email" className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary" placeholder="Your email" />
                            <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors">
                                <span className="material-symbols-outlined">send</span>
                            </button>
                        </div>
                        <div className="mt-6 flex gap-4">
                            <Link href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">social_leaderboard</span></Link>
                            <Link href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">alternate_email</span></Link>
                            <Link href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">movie</span></Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 lg:px-20 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-xs text-slate-400">
                    © 2026 K-Edu Connect Inc. All rights reserved. Professional Korean Language Learning.
                </div>
            </footer>
        </div>
    );
}
