import Link from 'next/link';

export default function FindTutors() {
    const tutors = [
        {
            id: 'jisukim',
            name: 'Ji-su Kim',
            koreanName: '김지수',
            university: 'Seoul National University (Mathematics Education)',
            rate: '$45',
            rating: '4.9',
            reviews: '128',
            tags: ['Algebra', 'Calculus', 'SAT Math', 'AMC 8/10'],
            description: 'Hello! I specialize in helping Korean students abroad bridge the gap between Korean math rigor and international curricula. I focus on conceptual understanding and exam preparation...',
            experience: '8+ Years',
            img: 'AB6AXuC20CE0YJ5RsZ8AJKmrFfyxvfWCRswxstImriTIy1yZKHAlf3KPdAfmsWgUw85dKCRgfbsBWL23r6JmEIGJSsNvZzNuwnUcAzlMtm2XlgNS0uBiHom4uAW7ceKN_ZMF76rMKGQ1bzbW_HVaDWZx8NqUaOaGZhbDoGQKmiOqoFakhRlCxUUje8UwfReBvFUPm7ZpLjjR5vwzG-FE9jVX_8rU6kBorZR52KGHOGA4QJpHnEIDLedRJtcmPuIzAKFpSCkSptuJG7SCCL7a'
        },
        {
            id: 'minhopark',
            name: 'Min-ho Park',
            koreanName: '박민호',
            university: 'KAIST (Chemical Engineering)',
            rate: '$38',
            rating: '5.0',
            reviews: '42',
            tags: ['Chemistry', 'Physics', 'Biology'],
            description: 'Interactive science lessons for middle and high school students. I use virtual labs and real-world examples to make complex scientific concepts easy to digest.',
            experience: '5 Years',
            img: 'AB6AXuApLXtHOYSI1dCuHbcYL68tUItiRF2uR37rn1rPYJn7w817cVlQp3JUYx73Yk3Km-q0yFtIjojmP-ISHURTtepou3FBBRX46xFcTY0U5fLAGN5NsTKoPwI8Igs5DYufuIwHIK1TWrSEROBow-dMsFiLBjupof2uwVDHn1azv6Qr1J60HdOCCmwbgQkDi78B7kxL8siIgl9wNM6T4smwTWB_uJojTtw-A5FgSiCCWMta2cqauFpQHvFdnd_g6fgdm0Gg0l2y1JyQ1Jwb'
        },
        {
            id: 'sarahlee',
            name: 'Sarah Lee',
            koreanName: '이서연',
            university: 'Yonsei University (Korean Literature)',
            rate: '$55',
            rating: '4.8',
            reviews: '215',
            tags: ['Korean Language', 'Essay Writing', 'TOPIK Prep'],
            description: 'Expert in helping heritage learners and international students master Korean academic writing. My curriculum follows the latest Korean national standards (MOE).',
            experience: '12+ Years',
            img: 'AB6AXuDCh9uqBHyvINXaUCop8RtOwhcPo5S11DU9Cw6o2Iqlf4DLQ-dFRCMBoxExKTvciLkbhbafsuW4M1ExwlBARgvu02CB9qwXmasDiDwdSN4U41zBZ9NS_VxIl6JTL7ZALRO22zRO3rPEMTTsF2FqGj0Yj0moR7UBYQUv5FgxQYKHgR5HRceg1TGsJ2PPKPwE9-D6AwjtesjGVhtmRb-IjZROQ5fLroM2bsnK63hoFvfX52JWzIx6mSw0MXsw6d2bX0f4qhDsdQFpsmFX'
        }
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
            {/* Top Navigation Bar */}
            <header className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-8">
                            <Link href="/" className="flex items-center gap-2 text-primary dark:text-slate-100">
                                <span className="material-symbols-outlined text-3xl">school</span>
                                <h2 className="text-xl font-bold tracking-tight">K-Edu Connect</h2>
                            </Link>
                            <nav className="hidden md:flex items-center gap-6">
                                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors">Home</Link>
                                <Link href="/tutors" className="text-primary dark:text-white border-b-2 border-primary py-5 text-sm font-bold">Find Tutors</Link>
                                <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors">My Lessons</Link>
                                <Link href="#" className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white text-sm font-medium transition-colors">Resources</Link>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="hidden lg:flex relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                                    <span className="material-symbols-outlined text-xl">search</span>
                                </span>
                                <input type="text" className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64" placeholder="Search by name or subject" />
                            </div>
                            <button className="flex items-center justify-center p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
                                <span className="material-symbols-outlined">notifications</span>
                            </button>
                            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs cursor-pointer">
                                JK
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Hero Section Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-slate-900 dark:text-slate-100 font-medium">Find Tutors</span>
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Find your Tutor</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mt-1">나의 튜터 찾기 — Connect with top-tier educators from around the world.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden sticky top-24">
                            <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                                <h3 className="font-bold text-slate-900 dark:text-white">Filters</h3>
                                <button className="text-xs text-primary font-bold hover:underline">Reset All</button>
                            </div>

                            {/* Timezone Filter */}
                            <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Your Local Time Zone</label>
                                <div className="relative">
                                    <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm py-2.5 pl-3 pr-10 focus:ring-primary focus:border-primary">
                                        <option>(GMT-05:00) Eastern Time</option>
                                        <option>(GMT+09:00) Korea Standard Time</option>
                                        <option>(GMT+00:00) London / GMT</option>
                                        <option>(GMT-08:00) Pacific Time</option>
                                    </select>
                                </div>
                                <p className="text-[10px] text-slate-500 mt-2 leading-tight">We'll show you tutors available during your daytime.</p>
                            </div>

                            {/* Subject Filter */}
                            <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Subject (과목)</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" />
                                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Mathematics (수학)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Korean (국어)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Science (과학)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">Social Studies (사회)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="rounded border-slate-300 text-primary focus:ring-primary" />
                                        <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors">English (영어)</span>
                                    </label>
                                </div>
                            </div>

                            {/* Grade Level Filter */}
                            <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Grade Level</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button className="px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800 text-center transition-all">Elementary</button>
                                    <button className="px-3 py-2 border border-primary bg-primary/5 text-primary rounded-lg text-xs font-bold text-center">Middle</button>
                                    <button className="px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800 text-center transition-all">High School</button>
                                    <button className="px-3 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-800 text-center transition-all">College Prep</button>
                                </div>
                            </div>

                            {/* Price Filter */}
                            <div className="p-5 border-b border-slate-100 dark:border-slate-800">
                                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Hourly Rate</label>
                                <input type="range" className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                                <div className="flex justify-between mt-2 text-xs font-medium text-slate-500">
                                    <span>$20</span>
                                    <span>$150+</span>
                                </div>
                            </div>

                            {/* Rating Filter */}
                            <div className="p-5">
                                <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-3">Tutor Rating</label>
                                <div className="space-y-2">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="rating" className="text-primary focus:ring-primary" />
                                        <span className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-yellow-400 text-base fill-1">star</span>
                                            <span className="ml-1">4.5 &amp; up</span>
                                        </span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="rating" className="text-primary focus:ring-primary" />
                                        <span className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                                            <span className="material-symbols-outlined text-yellow-400 text-base fill-1">star</span>
                                            <span className="ml-1">4.0 &amp; up</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1">
                        {/* Sorting & Count */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                            <p className="text-slate-600 dark:text-slate-400 font-medium"><span className="text-slate-900 dark:text-white font-bold">{tutors.length}</span> tutors available for Middle School Math</p>
                            <div className="flex items-center gap-2">
                                <span className="text-sm text-slate-500">Sort by:</span>
                                <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 p-0 pr-8 cursor-pointer">
                                    <option>Most Recommended</option>
                                    <option>Highest Rating</option>
                                    <option>Price: Low to High</option>
                                </select>
                            </div>
                        </div>

                        {/* Tutor Cards Grid */}
                        <div className="space-y-6">
                            {tutors.map((tutor) => (
                                <div key={tutor.id} className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col md:flex-row gap-6 transition-all hover:shadow-lg hover:border-primary/30 group relative">
                                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold border border-blue-100 dark:border-blue-800">
                                        <span className="material-symbols-outlined text-sm font-bold">verified</span>
                                        Verified Tutor
                                    </div>
                                    <div className="flex-shrink-0 flex flex-col items-center">
                                        <div className="relative">
                                            <img src={`https://lh3.googleusercontent.com/aida-public/${tutor.img}`} alt={tutor.name} className="w-24 h-24 md:w-32 md:h-32 rounded-xl object-cover" />
                                            <div className="absolute -bottom-2 -right-2 bg-green-500 w-5 h-5 rounded-full border-4 border-white dark:border-slate-900" title="Online now"></div>
                                        </div>
                                        <div className="mt-4 flex flex-col items-center">
                                            <div className="flex items-center text-yellow-500 mb-1">
                                                <span className="material-symbols-outlined fill-1 text-lg">star</span>
                                                <span className="text-slate-900 dark:text-white font-bold ml-1">{tutor.rating}</span>
                                                <span className="text-slate-400 text-xs ml-1">({tutor.reviews} reviews)</span>
                                            </div>
                                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{tutor.experience} Experience</span>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                                    {tutor.name} <span className="text-slate-400 font-normal text-sm">{tutor.koreanName}</span>
                                                </h3>
                                                <p className="text-primary font-semibold text-sm mb-3">{tutor.university}</p>
                                            </div>
                                            <div className="text-right hidden sm:block">
                                                <p className="text-2xl font-black text-slate-900 dark:text-white">{tutor.rate}<span className="text-sm font-medium text-slate-500">/hr</span></p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {tutor.tags.map(t => (
                                                <span key={t} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-md text-xs font-medium">{t}</span>
                                            ))}
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                            {tutor.description}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-4 text-xs text-slate-500">
                                                <span className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">language</span>
                                                    Korean, English
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-sm">schedule</span>
                                                    Response time: 2hr
                                                </span>
                                            </div>
                                            <div className="flex gap-3">
                                                <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Message</button>
                                                <Link href={`/tutors/${tutor.id}`} className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all shadow-md shadow-primary/20">View Profile</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="mt-12 flex justify-center">
                            <nav className="flex items-center gap-2">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">chevron_left</span>
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary transition-all">2</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary transition-all">3</button>
                                <span className="px-2 text-slate-400">...</span>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-primary transition-all">12</button>
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-400 hover:text-primary transition-all">
                                    <span className="material-symbols-outlined">chevron_right</span>
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 text-primary dark:text-slate-100 mb-6">
                                <span className="material-symbols-outlined text-2xl">school</span>
                                <h2 className="text-lg font-bold">K-Edu Connect</h2>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">Connecting Korean students living abroad with professional mentors and high-quality Korean education resources.</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Quick Links</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><Link href="/tutors" className="hover:text-primary transition-colors">Find Tutors</Link></li>
                                <li><a href="#" className="hover:text-primary transition-colors">How it Works</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Support</h4>
                            <ul className="space-y-4 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
                                <li><Link href="/become-a-tutor" className="hover:text-primary transition-colors">Become a Tutor</Link></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Feedback</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold mb-6 text-slate-900 dark:text-white">Newsletter</h4>
                            <p className="text-sm text-slate-500 mb-4">Get the latest education tips for students abroad.</p>
                            <div className="flex gap-2">
                                <input type="email" className="flex-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-primary focus:border-primary" placeholder="Email" />
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold">Join</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-slate-400">© 2026 K-Edu Connect. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors">Privacy Policy</a>
                            <a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
