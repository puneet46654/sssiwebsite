import React from "react";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function CookiePolicyPage() {
    return (
        <main className="min-h-screen bg-[#F4F6F9] text-[#3F3F3F]">
            <Header />
            {/* Top Hero Banner Section */}
            <div className="relative w-full h-[350px] md:h-[570px] aspect-[64/19] max-w-[1920px] mx-auto overflow-hidden">
                <Image
                    src="/images/cookies/image1.webp"
                    alt="Cookie Policy Banner"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-white text-3xl md:text-5xl font-bold tracking-tight">Cookie Policy</h1>
                </div>
            </div>

            {/* Content Container */}
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20 md:-mt-32 relative z-10 pb-24">
                
                {/* Main Wrapper Card / Header Card */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8 border border-[#E5E5E5]">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-[#E5E5E5]">
                        <h2 className="text-[#099F9E] text-2xl md:text-3xl font-semibold">Cookies</h2>
                        <span className="text-sm text-gray-500 bg-gray-100 px-4 py-1.5 rounded-full font-medium">
                            Last Updated: 1 June 2026
                        </span>
                    </div>

                    {/* Banner Replica Box */}
                    <div className="bg-[#121212] text-white rounded-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-lg mb-8">
                        <p className="text-[#E6E7E8] text-sm md:text-[15px] leading-relaxed">
                            We use cookies on our website to give you the most relevant experience by remembering your preferences and repeat visits. By clicking “Accept All”, you consent to the use of all the cookies. However, you may visit “Cookie Settings” to provide controlled consent.
                        </p>
                        <div className="flex items-center gap-3 shrink-0">
                            <span className="px-5 py-2.5 rounded-full border border-white text-white text-sm font-medium">
                                Cookie Settings
                            </span>
                            <span className="px-6 py-2.5 rounded-full bg-[#099F9E] text-white text-sm font-medium">
                                Accept All
                            </span>
                        </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Cookie Policy</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        This Cookie Policy explains how SS Innovations uses cookies and similar technologies on our website. It describes what cookies are, why we use them, and how visitors can manage their cookie preferences.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        By continuing to use our website, or by selecting your preferences through our cookie banner, you can choose how cookies are used on your device.
                    </p>
                </div>

                {/* Section 1: What Are Cookies? */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8 border border-[#E5E5E5]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">1. What Are Cookies?</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        Cookies are small text files placed on your device when you visit a website. They help websites function properly, remember user preferences, understand website performance, and improve the browsing experience.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Cookies may be set directly by our website, known as first-party cookies, or by third-party services used on our website, known as third-party cookies.
                    </p>
                </div>

                {/* Section 2: Why We Use Cookies */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8 border border-[#E5E5E5]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Why We Use Cookies</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">We use cookies to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm md:text-base mb-6">
                        <li>Ensure the website functions properly</li>
                        <li>Improve website performance and usability</li>
                        <li>Understand how visitors interact with our website</li>
                        <li>Remember user preferences</li>
                        <li>Support embedded content, forms, and website security</li>
                        <li>Improve communication, marketing, and user experience where consent is provided</li>
                    </ul>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed italic">
                        We do not use cookies to provide medical advice, diagnosis, or treatment.
                    </p>
                </div>

                {/* Section 3: Types of Cookies We Use */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8 border border-[#E5E5E5]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">3. Types of Cookies We Use</h3>

                    {/* Category 1 */}
                    <div className="mb-8">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Strictly Necessary Cookies</h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                            These cookies are required for the website to work properly. They support basic functions such as page navigation, security, form submission, and cookie preference management. These cookies cannot usually be switched off because the website may not function correctly without them.
                        </p>
                        
                        <div className="overflow-x-auto border border-gray-200 rounded-xl">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="p-3 border-b border-gray-200">Cookie Type</th>
                                        <th className="p-3 border-b border-gray-200">Purpose</th>
                                        <th className="p-3 border-b border-gray-200">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-600">
                                    <tr>
                                        <td className="p-3">Session cookies</td>
                                        <td className="p-3">Help pages load and function correctly</td>
                                        <td className="p-3">Session</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Security cookies</td>
                                        <td className="p-3">Protect the website from misuse or unauthorized activity</td>
                                        <td className="p-3">Session / Limited period</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Cookie preference cookies</td>
                                        <td className="p-3">Remember your cookie choices</td>
                                        <td className="p-3">Up to 12 months</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Category 2 */}
                    <div className="mb-8">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Performance and Analytics Cookies</h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                            These cookies help us understand how visitors use the website, such as which pages are visited, how long users stay, and where improvements may be needed.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">
                            These cookies help us improve the structure, content, and performance of the SSI website.
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                            These cookies should only be used after the visitor provides consent.
                        </p>

                        <div className="overflow-x-auto border border-gray-200 rounded-xl">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="p-3 border-b border-gray-200">Cookie Type</th>
                                        <th className="p-3 border-b border-gray-200">Purpose</th>
                                        <th className="p-3 border-b border-gray-200">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-600">
                                    <tr>
                                        <td className="p-3">Analytics cookies</td>
                                        <td className="p-3">Understand website traffic and page performance</td>
                                        <td className="p-3">As defined by provider</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">User interaction cookies</td>
                                        <td className="p-3">Identify how visitors navigate pages and sections</td>
                                        <td className="p-3">As defined by provider</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Category 3 */}
                    <div className="mb-8">
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Functional Cookies</h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                            Functional cookies help improve website experience by remembering choices such as language, region, display preferences, or form-related settings. Examples may include:
                        </p>

                        <div className="overflow-x-auto border border-gray-200 rounded-xl">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="p-3 border-b border-gray-200">Cookie Type</th>
                                        <th className="p-3 border-b border-gray-200">Purpose</th>
                                        <th className="p-3 border-b border-gray-200">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-600">
                                    <tr>
                                        <td className="p-3">Preference cookies</td>
                                        <td className="p-3">Remember selected website preferences</td>
                                        <td className="p-3">Up to 12 months</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Form support cookies</td>
                                        <td className="p-3">Help maintain form inputs or interactions</td>
                                        <td className="p-3">Session / Limited period</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Category 4 */}
                    <div>
                        <h4 className="text-lg font-medium text-gray-900 mb-2">Marketing and Third-Party Cookies</h4>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                            These cookies may be used to understand visitor interests, measure campaign performance, or deliver relevant communications through third-party platforms. Examples may include:
                        </p>

                        <div className="overflow-x-auto border border-gray-200 rounded-xl mb-4">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="bg-gray-100 text-gray-700">
                                    <tr>
                                        <th className="p-3 border-b border-gray-200">Cookie Type</th>
                                        <th className="p-3 border-b border-gray-200">Purpose</th>
                                        <th className="p-3 border-b border-gray-200">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 text-gray-600">
                                    <tr>
                                        <td className="p-3">Campaign tracking cookies</td>
                                        <td className="p-3">Measure campaign and referral performance</td>
                                        <td className="p-3">As defined by provider</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Advertising cookies</td>
                                        <td className="p-3">Support relevant marketing or remarketing activities</td>
                                        <td className="p-3">As defined by provider</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3">Embedded media cookies</td>
                                        <td className="p-3">Support videos, maps, or third-party content</td>
                                        <td className="p-3">As defined by provider</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            These cookies should only be activated after the visitor provides consent.
                        </p>
                    </div>
                </div>

                {/* Section 4: Third-Party Cookies */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8 border border-[#E5E5E5]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">4. Third-Party Cookies</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        Some pages on our website may include content or services provided by third parties, such as analytics tools, embedded videos, maps, social media platforms, or marketing tools.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        These third-party providers may place cookies on your device according to their own privacy and cookie policies. SS Innovations does not control all third-party cookies once they are set by external providers.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">Common third-party services may include:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm md:text-base mb-4">
                        <li>Google Analytics</li>
                        <li>Google Tag Manager</li>
                        <li>YouTube or video embeds</li>
                        <li>LinkedIn Insight Tag</li>
                        <li>Meta Pixel</li>
                        <li>CRM or enquiry form tools</li>
                    </ul>
                    <p className="text-gray-500 text-sm italic">
                        Final list should be updated based on the actual tools used on the website.
                    </p>
                </div>

                {/* Section 5: Managing Your Cookie Preferences */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8 border border-[#E5E5E5]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">5. Managing Your Cookie Preferences</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        You can manage your cookie preferences through the cookie banner or cookie settings panel available on our website.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">You may choose to:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600 text-sm md:text-base mb-4">
                        <li>Accept all cookies</li>
                        <li>Reject non-essential cookies</li>
                        <li>Customize cookie preferences by category</li>
                        <li>Change or withdraw consent at any time</li>
                    </ul>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Strictly necessary cookies will remain active because they are required for the website to function.
                    </p>
                </div>

                {/* Section 6: Browser Controls */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 mb-8 border border-[#E5E5E5]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">6. Browser Controls</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        Most web browsers allow you to manage cookies through browser settings. You may block, delete, or restrict cookies through your browser.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Please note that blocking some cookies may affect how the website functions and may limit certain features.
                    </p>
                </div>

                {/* Section 7: Updates to This Cookie Policy */}
                <div className="bg-white rounded-2xl shadow-md p-6 sm:p-10 border border-[#E5E5E5]">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">7. Updates to This Cookie Policy</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                        We may update this Cookie Policy from time to time to reflect changes in technology, legal requirements, website functionality, or our use of cookies.
                    </p>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        The updated version will be posted on this page with a revised “Last Updated” date.
                    </p>
                </div>

            </div>
            <Footer />
        </main>
    );
}

