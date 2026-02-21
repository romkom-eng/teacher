'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CheckoutContent() {
    const searchParams = useSearchParams();
    const tutorId = searchParams.get('tutorId') || 'Ji-su Kim';
    return (
        <div className="bg-background-light dark:bg-background-dark min-h-screen font-display text-slate-900 dark:text-slate-100 flex flex-col">
            {/* Top Header - Simplified for Checkout */}
            <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-4 px-6 lg:px-8 shrink-0">
                <div className="max-w-6xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-primary dark:text-slate-100">
                        <span className="material-symbols-outlined text-3xl">school</span>
                        <span className="text-xl font-bold tracking-tight">K-Edu Connect</span>
                    </Link>
                    <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                        <span className="material-symbols-outlined text-green-500 text-lg">lock</span>
                        Secure Checkout
                    </div>
                </div>
            </header>

            <main className="flex-1 py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Progress Stepper */}
                    <div className="mb-10 max-w-3xl mx-auto flex items-center justify-between relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-800 -z-10 rounded-full"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-1 bg-primary -z-10 rounded-full transition-all"></div>

                        <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">
                                <span className="material-symbols-outlined text-sm">check</span>
                            </div>
                            <span className="text-xs font-bold text-primary">Lesson Details</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2">
                            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md shadow-primary/20 ring-4 ring-primary/10">2</div>
                            <span className="text-xs font-bold text-primary">Payment</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 bg-background-light dark:bg-background-dark px-2 opacity-50">
                            <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center font-bold text-sm">3</div>
                            <span className="text-xs font-bold text-slate-500">Confirmation</span>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                        {/* Left Column: Payment Details */}
                        <div className="w-full lg:flex-1 space-y-6">

                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">payment</span>
                                    Payment Method
                                </h2>

                                <div className="space-y-4">
                                    {/* Credit Card Option (Selected) */}
                                    <label className="flex items-start gap-4 p-4 rounded-xl border-2 border-primary bg-primary/5 cursor-pointer relative overflow-hidden transition-all">
                                        <div className="mt-1">
                                            <div className="w-5 h-5 rounded-full border-4 border-primary bg-white"></div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center mb-1">
                                                <span className="font-bold text-slate-900 dark:text-white">Credit / Debit Card</span>
                                                <div className="flex gap-1 h-6">
                                                    <div className="w-8 bg-slate-200 rounded flex items-center justify-center"><span className="text-[8px] font-black">VISA</span></div>
                                                    <div className="w-8 bg-slate-200 rounded flex items-center justify-center"><span className="text-[8px] font-black">MC</span></div>
                                                    <div className="w-8 bg-slate-200 rounded flex items-center justify-center"><span className="text-[8px] font-black">AMEX</span></div>
                                                </div>
                                            </div>
                                            <p className="text-xs text-slate-500 mb-4">Secure transaction via Stripe</p>

                                            {/* Card Form (Visible when selected) */}
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Card Number</label>
                                                    <div className="relative">
                                                        <input type="text" className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="0000 0000 0000 0000" />
                                                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">credit_card</span>
                                                    </div>
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Expiry Date</label>
                                                        <input type="text" className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="MM/YY" />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">CVC/CVV</label>
                                                        <div className="relative">
                                                            <input type="text" className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all pr-8" placeholder="123" />
                                                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm cursor-help" title="3 digits on back of card">info</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">Name on Card</label>
                                                    <input type="text" className="w-full px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all" placeholder="JANE DOE" />
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                    {/* PayPal Option */}
                                    <label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary/50 transition-all bg-slate-50 dark:bg-slate-800/50">
                                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600"></div>
                                        <div className="flex-1 flex justify-between items-center">
                                            <span className="font-bold text-slate-700 dark:text-slate-300">PayPal</span>
                                            <div className="h-6 w-16 bg-[#003087] rounded flex items-center justify-center text-white text-[10px] font-black italic">PayPal</div>
                                        </div>
                                    </label>

                                    {/* KakaoPay / Toss (Korean Local Options) */}
                                    <label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary/50 transition-all bg-slate-50 dark:bg-slate-800/50">
                                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600"></div>
                                        <div className="flex-1 flex justify-between items-center">
                                            <div>
                                                <span className="font-bold text-slate-700 dark:text-slate-300 block">Korean Local Payments</span>
                                                <span className="text-[10px] text-slate-500">KakaoPay, Toss, NaverPay</span>
                                            </div>
                                            <div className="flex gap-1 h-6">
                                                <div className="w-6 bg-[#FAE100] rounded flex items-center justify-center text-[#371D1E] text-[8px] font-black">K</div>
                                                <div className="w-6 bg-[#0050FF] rounded flex items-center justify-center text-white text-[8px] font-black">T</div>
                                            </div>
                                        </div>
                                    </label>

                                    {/* Bank Transfer Option */}
                                    <label className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer hover:border-primary/50 transition-all bg-slate-50 dark:bg-slate-800/50">
                                        <div className="w-5 h-5 rounded-full border-2 border-slate-300 dark:border-slate-600"></div>
                                        <div className="flex-1 flex justify-between items-center">
                                            <span className="font-bold text-slate-700 dark:text-slate-300">Direct Bank Transfer (무통장 입금)</span>
                                            <span className="material-symbols-outlined text-slate-400">account_balance</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="w-full lg:w-96 shrink-0">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden sticky top-6">
                                <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>

                                    {/* Lesson Details */}
                                    <div className="flex gap-4 mb-4">
                                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs4QE4hfYYagPMC3Ynt1KNreVz29ht-Jj9rcaWxsVpOYHDSaGpCOSK3ueWqywTzJEd1IcFM1TRrQClRS3L9NXPBpJ2ODBliwDc8rDRgu1tlpcifjQ3LzTwd_vDS_SNMSKjdNQeHlcyw8hxwEWc06oIdWP_hYW0_eCDwq1y9m496zBSvYHsEaWY34ZxUAJeCyKskL0FBuKBT0jL-ydjT4Mo8LVSYuEtkw57rhukOQTaHubJQXWxTgA1Q8xWKIq9mmyK79GSgE3Tn5tF" alt="Tutor" className="w-16 h-16 rounded-xl object-cover shadow-sm" />
                                        <div className="flex-1">
                                            <h4 className="font-bold text-sm">60-min Trial Lesson</h4>
                                            <p className="text-xs text-slate-500">with {tutorId}</p>
                                            <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-primary bg-primary/5 inline-flex px-2 py-0.5 rounded">
                                                <span className="material-symbols-outlined text-[14px]">calendar_month</span>
                                                Oct 26, 02:00 PM (KST)
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Price Breakdown */}
                                <div className="p-6 bg-slate-50 dark:bg-slate-800/30">
                                    <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 mb-6">
                                        <div className="flex justify-between">
                                            <span>Standard Rate (60 min)</span>
                                            <span>₩45,000</span>
                                        </div>
                                        <div className="flex justify-between text-green-600 dark:text-green-400 font-medium">
                                            <span>First Trial Discount (50%)</span>
                                            <span>-₩22,500</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Service Fee</span>
                                            <span>₩2,500</span>
                                        </div>
                                    </div>

                                    <div className="border-t border-slate-200 dark:border-slate-700 pt-4 mb-6">
                                        <div className="flex justify-between items-end">
                                            <span className="font-bold">Total (KRW)</span>
                                            <div className="text-right">
                                                <span className="text-2xl font-black text-slate-900 dark:text-white">₩25,000</span>
                                                <div className="text-[10px] text-slate-500">Approx. $18.50 USD</div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-[10px] text-slate-500 text-center mb-6 leading-relaxed">
                                        By confirming this payment, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Cancellation Policy</a>.
                                    </p>

                                    <button className="w-full py-4 bg-primary text-white font-bold text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-2">
                                        <span className="material-symbols-outlined">lock</span>
                                        Confirm Payment
                                    </button>
                                </div>

                                {/* Trust Badges */}
                                <div className="bg-slate-100 dark:bg-slate-800 p-4 flex justify-center items-center gap-4 text-slate-400 opacity-70">
                                    <span className="material-symbols-outlined">security</span>
                                    <span className="material-symbols-outlined">verified</span>
                                    <span className="material-symbols-outlined">encrypted</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer for Checkout */}
            <footer className="py-6 text-center text-xs text-slate-400 border-t border-slate-200 dark:border-slate-800 shrink-0">
                <div className="flex justify-center items-center gap-4 mb-2">
                    <a href="#" className="hover:text-primary transition-colors">Help</a>
                    <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms</a>
                </div>
                © 2026 K-Edu Connect. Secure Payment Portal.
            </footer>
        </div>
    );
}

export default function Checkout() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading checkout...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
