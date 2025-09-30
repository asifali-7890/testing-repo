'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const router = useRouter();

    const handleLogin = () => {
        if (email === "admin@test.com" && password === "1234") {
            localStorage.setItem("isLoggedIn", "true");
            router.push("/admin");
        } else {
            alert("Invalid credentials");
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLogin();
    };

    return (
        <div className="min-h-screen flex">
            {/* Left side - Login Form */}
            <div className="flex-1 bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h1 className="text-5xl font-light text-gray-900 mb-8">Terra</h1>
                        <p className="text-gray-600 text-sm leading-relaxed mb-12">
                            The worlds largest avatar-based social commerce takes place inside a
                            virtual world powered blockchain metaverse where players play to earn
                            Crypto & NFT through shared experiences, build deeper friendships,
                            creativity counts, and all relationships matter.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm text-gray-600 mb-2">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="text-blue-600 hover:text-blue-500 transition-colors">
                                    Forget Password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium text-sm tracking-wide"
                        >
                            SIGN IN
                        </button>
                    </form>
                </div>
            </div>

            {/* Right side - Visual Elements */}
            <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
                    <div className="absolute bottom-32 right-16 w-24 h-24 bg-yellow-400 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-400 rounded-lg"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-16 right-16">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                    </div>
                </div>

                <div className="absolute bottom-16 left-16">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                    </div>
                </div>

                {/* Professional Image Cards */}
                <div className="absolute top-1/4 right-1/4 transform -translate-x-1/2">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-48 h-32">
                        <Image
                            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Professional woman working"
                            width={192}  // w-48 = 192px
                            height={128} // h-32 = 128px
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="absolute bottom-1/4 right-1/3 transform translate-x-1/2">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-56 h-36">
                        <Image
                            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Business team meeting"
                            width={224}  // w-56 = 224px
                            height={144} // h-36 = 144px
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="absolute top-1/2 left-1/4">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden w-40 h-28">
                        <Image
                            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Professional man at desk"
                            width={160}  // w-40 = 160px
                            height={112} // h-28 = 112px
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Additional floating icons */}
                <div className="absolute top-1/3 left-1/3">
                    <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </div>
                </div>

                <div className="absolute bottom-1/3 right-1/4">
                    <div className="w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}