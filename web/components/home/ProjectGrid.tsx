'use client'

import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { Project } from '@/lib/supabase/queries'

interface ProjectGridProps {
    projects: Project[]
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    // Get unique categories
    const categories = ['All', ...Array.from(new Set(projects.map(p => p.category).filter(Boolean)))] as string[]

    // Filter projects
    const filteredProjects = selectedCategory && selectedCategory !== 'All'
        ? projects.filter(p => p.category === selectedCategory)
        : projects

    return (
        <section className="w-full max-w-[1480px] mx-auto flex flex-col items-center gap-10 px-6 md:px-24 py-20 bg-white">
            {/* Section Title */}
            <ScrollReveal className="w-full">
                <h2 className="text-[49px] md:text-[76px] lg:text-[128px] font-semibold leading-[50.6px] md:leading-[68px] lg:leading-[108px] tracking-[-0.8px] md:tracking-[-4px] lg:tracking-[-6px] text-white mix-blend-difference">
                    Selected Projects
                </h2>
            </ScrollReveal>

            {/* Category Filter */}
            {categories.length > 2 && (
                <ScrollReveal className="w-full flex flex-wrap gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category === 'All' ? null : category)}
                            className={`px-6 py-3 rounded-full text-[14px] font-semibold transition-all duration-300 ${(selectedCategory === category || (!selectedCategory && category === 'All'))
                                    ? 'bg-white text-black'
                                    : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </ScrollReveal>
            )}

            {/* Projects Grid */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <ScrollReveal key={project.id} delay={index * 0.1}>
                        <ProjectCard project={project} />
                    </ScrollReveal>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="w-full py-20 text-center">
                    <p className="text-[19px] font-medium text-white/50">
                        No projects found in this category.
                    </p>
                </div>
            )}
        </section>
    )
}
