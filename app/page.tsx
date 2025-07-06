import React from "react";
import { MapPin, Code, Calendar } from "lucide-react";

export default function Home() {
    return (
        <main className='min-h-screen bg-black text-white'>
            <div className='max-w-2xl mx-auto px-6 py-24'>
                <div className='space-y-8'>
                    <div className='space-y-4'>
                        <h1 className='text-4xl md:text-5xl font-bold tracking-tight'>
                            Fahreza Pratama Hidayat
                        </h1>
                        <p className='text-xl text-gray-400'>
                            Software Engineering Student
                        </p>
                    </div>
                    <div className='flex items-center space-x-2 text-gray-500'>
                        <span className='text-sm'>NIM</span>
                        <span className='text-sm'>·</span>
                        <span className='text-sm'>2206144</span>
                    </div>
                </div>
            </div>
            <div className='max-w-2xl mx-auto px-6 pb-24'>
                <div className='space-y-12'>
                    <div className='border-t border-gray-800 pt-8'>
                        <div className='space-y-6'>
                            <div className='flex items-start space-x-3'>
                                <MapPin
                                    className='text-gray-400 mt-1'
                                    size={18}
                                />
                                <div className='space-y-1'>
                                    <p className='text-white font-medium'>
                                        Institut Teknologi Garut
                                    </p>
                                    <p className='text-gray-400 text-sm'>
                                        Garut, Indonesia
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <Code
                                    className='text-gray-400 mt-1'
                                    size={18}
                                />
                                <div className='space-y-1'>
                                    <p className='text-white font-medium'>
                                        Software Engineering
                                    </p>
                                    <p className='text-gray-400 text-sm'>
                                        Bachelor&apos;s Degree Program
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <Calendar
                                    className='text-gray-400 mt-1'
                                    size={18}
                                />
                                <div className='space-y-1'>
                                    <p className='text-white font-medium'>
                                        Active Student
                                    </p>
                                    <p className='text-gray-400 text-sm'>
                                        Currently enrolled
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='border-t border-gray-800 pt-8'>
                        <div className='space-y-4'>
                            <h2 className='text-lg font-semibold text-white'>
                                Focus Areas
                            </h2>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='text-sm text-gray-400'>
                                    Web Development
                                </div>
                                <div className='text-sm text-gray-400'>
                                    Software Design
                                </div>
                                <div className='text-sm text-gray-400'>
                                    Database Systems
                                </div>
                                <div className='text-sm text-gray-400'>
                                    Programming
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-800'>
                <div className='max-w-2xl mx-auto px-6 py-8'>
                    <p className='text-gray-500 text-sm text-center'>
                        © 2025 Fahreza Pratama Hidayat
                    </p>
                </div>
            </div>
        </main>
    );
}
