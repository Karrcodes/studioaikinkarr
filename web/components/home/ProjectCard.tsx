'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { scaleOnHover, imageOverlay } from '@/lib/animations'
import { Project } from '@/lib/supabase/queries'

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const categorySlug = project.category?.toLowerCase().replace(/\s+/g, '-') || 'projects'

    return (
        <Link
            href={`/projects/${categorySlug}/${project.slug}`}
            className="group block w-full no-underline"
        >
            <motion.div
                className="flex flex-col gap-3.5 cursor-pointer"
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                {/* Image Container */}
                <motion.div
                    className="relative w-full aspect-[698/749] rounded-[10px] overflow-hidden bg-gray-200"
                    variants={scaleOnHover}
                >
                    {project.cover_image_url ? (
                        <>
                            <Image
                                src={project.cover_image_url}
                                alt={project.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {/* Overlay on hover */}
                            <motion.div
                                className="absolute inset-0 bg-black/20"
                                variants={imageOverlay}
                            />
                        </>
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-800">
                            <span className="text-white text-lg">No Image</span>
                        </div>
                    )}
                </motion.div>

                {/* Project Title */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-[24px] md:text-[31px] lg:text-[49px] font-medium leading-[24.6px] md:leading-[33.6px] lg:leading-[50.6px] tracking-[-0.8px] text-white mix-blend-difference">
                        {project.title}
                    </h3>

                    {project.description && (
                        <p className="text-[16px] md:text-[19px] font-medium leading-[25.2px] text-white/70 mix-blend-difference">
                            {project.description}
                        </p>
                    )}

                    {project.category && (
                        <span className="text-[13px] font-normal leading-[13px] uppercase text-white/50 mix-blend-difference">
                            {project.category}
                        </span>
                    )}
                </div>
            </motion.div>
        </Link>
    )
}
