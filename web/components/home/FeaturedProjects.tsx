'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabaseClient';
import { Database } from '@/types/supabase';

type Project = Database['public']['Tables']['projects']['Row'];

export function FeaturedProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            const { data, error } = await supabase
                .from('projects')
                .select('*')
                .eq('published', true)
                .order('created_at', { ascending: false });

            if (error) {
                console.error('Error fetching projects:', error);
            } else {
                setProjects(data || []);
            }
            setLoading(false);
        }

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto px-6 py-20 text-center text-gray-400">
                Loading projects...
            </div>
        );
    }

    if (projects.length === 0) {
        return (
            <div className="container mx-auto px-6 py-20 text-center text-gray-400">
                <p className="text-xl">No projects found.</p>
                <p className="text-sm mt-2">Add projects in your Supabase dashboard to see them here.</p>
            </div>
        );
    }

    return (
        <section className="container mx-auto px-6 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Link
                        href={`/projects/${project.slug}`}
                        key={project.id}
                        className="group block"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 rounded-sm mb-4">
                            {project.cover_image_url ? (
                                <Image
                                    src={project.cover_image_url}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    No Image
                                </div>
                            )}
                        </div>
                        <h2 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                            {project.title}
                        </h2>
                        {project.category && (
                            <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                        )}
                    </Link>
                ))}
            </div>
        </section>
    );
}
