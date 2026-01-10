"use client"
import { User, X, Check, BuildingOffice, UsersThree, CheckCircle, Sparkle } from '@phosphor-icons/react';

export default function SweetSpot() {
    const options = [
        {
            icon: User,
            title: 'Solo Dev',
            subtitle: 'The Lone Wolf',
            items: [
                { text: 'Limited Skillset', status: 'bad' },
                { text: 'High "Bus Factor" Risk', status: 'bad' },
                { text: 'Cheap Rates', status: 'good' },
            ],
            highlighted: false,
        },
        {
            icon: BuildingOffice,
            title: 'Traditional Agency',
            subtitle: 'The Corporate Machine',
            items: [
                { text: 'Broad Capabilities', status: 'good' },
                { text: 'Slow Communication', status: 'bad' },
                { text: 'Excessive Overhead Costs', status: 'bad' },
            ],
            highlighted: false,
        },
        {
            icon: UsersThree,
            title: 'MedOps',
            subtitle: 'The Precision Unit',
            items: [
                { text: 'Elite Speed & Mastery', status: 'best' },
                { text: 'Risk-Reduction First', status: 'best' },
                { text: 'Direct Senior Access', status: 'best' },
            ],
            highlighted: true,
        },
    ];

    return (
        <section className="relative px-4 py-24 lg:px-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
            </div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col gap-4 text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 mx-auto px-4 py-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">
                        <Sparkle className="text-blue-400" size={14} weight="fill" />
                        COMPARISON
                    </div>
                    <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                        The Sweet Spot
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Agencies are bloated. Solo devs are risky. We offer the precision of a special ops unit.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {options.map((option, i) => {
                        const Icon = option.icon;
                        return (
                            <div
                                key={i}
                                className={`group relative rounded-2xl p-6 transition-all duration-500 ${option.highlighted
                                        ? 'bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-blue-600/20 border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 scale-105 md:scale-110'
                                        : 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 opacity-75 hover:opacity-100'
                                    }`}
                            >
                                {/* Recommended badge */}
                                {option.highlighted && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold rounded-full shadow-lg shadow-blue-500/50 flex items-center gap-1.5 animate-pulse">
                                        <Sparkle size={12} weight="fill" />
                                        RECOMMENDED
                                    </div>
                                )}

                                {/* Icon and Title */}
                                <div className="flex flex-col items-center gap-4 mb-6 text-center">
                                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${option.highlighted
                                            ? 'bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-500/50 shadow-lg shadow-blue-500/30'
                                            : 'bg-slate-800/50 border border-slate-700/50 group-hover:border-slate-600'
                                        }`}>
                                        <Icon
                                            className={option.highlighted ? 'text-blue-400' : 'text-gray-400'}
                                            size={32}
                                            weight={option.highlighted ? 'duotone' : 'regular'}
                                        />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl font-bold mb-1 ${option.highlighted ? 'text-white' : 'text-gray-200'
                                            }`}>
                                            {option.title}
                                        </h3>
                                        <p className={`text-xs font-medium ${option.highlighted ? 'text-blue-400' : 'text-gray-500'
                                            }`}>
                                            {option.subtitle}
                                        </p>
                                    </div>
                                </div>

                                {/* Features list */}
                                <ul className="flex flex-col gap-3">
                                    {option.items.map((item, idx) => (
                                        <li
                                            key={idx}
                                            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${option.highlighted
                                                    ? 'bg-slate-900/30 hover:bg-slate-900/50'
                                                    : 'hover:bg-slate-800/30'
                                                }`}
                                        >
                                            {item.status === 'best' ? (
                                                <CheckCircle
                                                    className="text-blue-400 flex-shrink-0"
                                                    size={20}
                                                    weight="fill"
                                                />
                                            ) : item.status === 'good' ? (
                                                <Check
                                                    className="text-green-500 flex-shrink-0"
                                                    size={20}
                                                    weight="bold"
                                                />
                                            ) : (
                                                <X
                                                    className="text-red-500 flex-shrink-0"
                                                    size={20}
                                                    weight="bold"
                                                />
                                            )}
                                            <span className={`text-sm font-medium ${option.highlighted ? 'text-white' : 'text-gray-400'
                                                }`}>
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Hover glow effect */}
                                {option.highlighted && (
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Bottom text */}
                <div className="text-center mt-12">
                    <p className="text-gray-500 text-sm">
                        Get elite expertise without the agency bloat. <span className="text-blue-400 font-semibold">Experience the difference.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}