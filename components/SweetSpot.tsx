"use client"
import { User, X, Check, BuildingOffice, UsersThree, CheckCircle } from '@phosphor-icons/react';

export function SweetSpot() {
    return (
        <section className="px-4 py-20 lg:px-20 bg-background">
            <div className="max-w-[1080px] mx-auto flex flex-col gap-12">
                <div className="flex flex-col gap-4 text-center md:text-left">
                    <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">The Sweet Spot</h2>
                    <p className="text-gray-400 max-w-2xl">Agencies are bloated. Solo devs are risky. We offer the precision of a special ops unit.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-xl border border-border bg-surface  p-6 flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-3">
                            <User className="material-symbols-outlined text-gray-400 text-3xl" />
                            <h3 className="text-xl font-bold text-white">Solo Dev</h3>
                        </div>
                        <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <X className="material-symbols-outlined text-red-500 text-lg" /> Limited Skillset
                            </li>
                            <li className="flex items-center gap-2">
                                <X className="material-symbols-outlined text-red-500 text-lg" /> High "Bus Factor" Risk
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="material-symbols-outlined text-green-500 text-lg" /> Cheap Rates
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl border border-border bg-surface  p-6 flex flex-col gap-4 opacity-60 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-3">
                            <BuildingOffice className="material-symbols-outlined text-gray-400 text-3xl" />
                            <h3 className="text-xl font-bold text-white">Traditional Agency</h3>
                        </div>
                        <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <Check className="material-symbols-outlined text-green-500 text-lg" /> Broad Capabilities
                            </li>
                            <li className="flex items-center gap-2">
                                <X className="material-symbols-outlined text-red-500 text-lg" /> Slow Communication
                            </li>
                            <li className="flex items-center gap-2">
                                <X className="material-symbols-outlined text-red-500 text-lg" /> Excessive Overhead Costs
                            </li>
                        </ul>
                    </div>
                    <div className="rounded-xl border border-primary bg-primary/10 p-6 flex flex-col gap-4 relative overflow-hidden shadow-[0_0_30px_rgba(13,89,242,0.1)]">
                        <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">RECOMMENDED</div>
                        <div className="flex items-center gap-3">
                            <UsersThree className="material-symbols-outlined text-primary text-3xl" />
                            <h3 className="text-xl font-bold text-white">Strike Team</h3>
                        </div>
                        <ul className="flex flex-col gap-3 text-white text-sm">
                            <li className="flex items-center gap-2">
                                <CheckCircle className="material-symbols-outlined text-primary text-lg" /> Elite Speed & Mastery
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="material-symbols-outlined text-primary text-lg" /> Risk-Reduction First
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle className="material-symbols-outlined text-primary text-lg" /> Direct Senior Access
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
