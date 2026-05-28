'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';
const jobs = [
    { id: 1, title: 'Area sales manager', department: 'Sales', location: 'Gurugram, Haryana', experience: 'Fresher', type: 'Internship' },
    { id: 2, title: 'Area sales manager', department: 'Sales', location: 'Gurugram, Haryana', experience: 'Fresher', type: 'Internship' },
    { id: 3, title: 'Area sales manager', department: 'Sales', location: 'Gurugram, Haryana', experience: 'Fresher', type: 'Internship' },
    { id: 4, title: 'Area sales manager', department: 'Sales', location: 'Gurugram, Haryana', experience: 'Fresher', type: 'Internship' },
];
const filters = [
    { id: 'department', label: 'Department', options: ['Sales', 'Engineering', 'Marketing'] },
    { id: 'experience', label: 'Experience', options: ['Fresher', '1-3 Years', '3-5 Years', '5+ Years'] },
    { id: 'location', label: 'Location', options: ['Gurugram, Haryana', 'Remote', 'London, UK'] },
];
export default function LatestOpeningsSection() {
    const [openFilter, setOpenFilter] = useState<string | null>(null);
    const toggleFilter = (id: string) => {
        setOpenFilter(openFilter === id ? null : id);
    };
    return (<section className="w-full bg-[#F4F7F8] py-16 md:py-24" style={{ fontFamily: "var(--font-sora), sans-serif" }}>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="mb-12 max-w-3xl">
          <h2 className="mb-4 text-3xl font-semibold text-[#1A1A1A] md:text-[32px]">
            Latest Opening
          </h2>
          <p className="text-[16px] text-[#606060] leading-relaxed md:text-[18px]">
            Discover the most recent opportunity to join our growing team, where innovation meets impact.
          </p>
        </motion.div>

        
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          
          
          <motion.aside initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="w-full lg:w-[320px] shrink-0">
            <div className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-sm">
              
              <div className="h-[14px] w-full bg-[#39A7A7]"/>
              
              <div className="flex flex-col p-8">
                <h3 className="mb-8 text-[22px] font-semibold text-[#39A7A7]">Filters</h3>
                
                <div className="space-y-2">
                  {filters.map((filter) => (<div key={filter.id} className="border-b border-gray-200 last:border-0 pb-2 pt-2">
                      <button onClick={() => toggleFilter(filter.id)} className="flex w-full cursor-pointer items-center justify-between pb-2 text-[#606060] transition-colors hover:text-[#39A7A7]">
                        <span className="text-[15px] font-medium">{filter.label}</span>
                        {openFilter === filter.id ? (<Minus size={18} strokeWidth={2.5}/>) : (<Plus size={18} strokeWidth={2.5}/>)}
                      </button>
                      
                      
                      <AnimatePresence>
                        {openFilter === filter.id && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="flex flex-col gap-2 pb-4 pt-2">
                              {filter.options.map((opt) => (<label key={opt} className="flex cursor-pointer items-center gap-3 text-[14px] text-gray-600 hover:text-gray-900">
                                  <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-[#39A7A7] focus:ring-[#39A7A7]"/>
                                  {opt}
                                </label>))}
                            </div>
                          </motion.div>)}
                      </AnimatePresence>
                    </div>))}
                </div>

                <button className="mt-10 w-full rounded-[12px] border border-[#606060] py-3.5 text-[14px] font-medium text-[#606060] transition-colors hover:bg-gray-50 active:bg-gray-100">
                  Apply Filters
                </button>
              </div>

              
              <div className="h-[14px] w-full bg-[#39A7A7]"/>
            </div>
          </motion.aside>

          
          <div className="flex flex-1 flex-col">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {jobs.map((job, idx) => (<motion.div key={job.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 * idx }} className="flex flex-col rounded-[24px] bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                  <h3 className="mb-1.5 text-[20px] font-semibold text-[#1A1A1A]">
                    {job.title}
                  </h3>
                  <p className="mb-6 text-[15px] font-medium text-[#606060]">
                    {job.department}
                  </p>

                  <div className="mb-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] font-medium text-[#A0A0A0]">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} strokeWidth={2.5}/>
                      {job.location}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5">
                      <Briefcase size={16} strokeWidth={2.5}/>
                      {job.experience}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={16} strokeWidth={2.5}/>
                      {job.type}
                    </span>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    <button className="rounded-full bg-[#39A7A7] px-6 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-[#2F8D8D]">
                      Apply Now
                    </button>
                    <button className="rounded-full border border-gray-300 px-6 py-2.5 text-[14px] font-medium text-[#606060] transition-colors hover:bg-gray-50">
                      View Job
                    </button>
                  </div>
                </motion.div>))}
            </div>

            
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl sm:flex-row sm:items-center">
              <p className="text-[14px] text-[#808080] font-medium">
                Couldn't find the role you are looking for? Email your CV and Cover letter at{' '}
                <a href="mailto:ssicareers@ssinnovation.org" className="text-[#606060] underline transition-colors hover:text-[#39A7A7]">
                  ssicareers@ssinnovation.org
                </a>
              </p>
              
              <button className="group flex shrink-0 cursor-pointer items-center gap-2 text-[15px] font-semibold text-[#39A7A7] transition-colors hover:text-[#2F8D8D]">
                See more
                <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1"/>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);
}
