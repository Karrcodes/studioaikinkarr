import { createClient } from './server'

export type Project = {
    id: string
    created_at: string
    slug: string
    title: string
    description: string | null
    content: string | null
    cover_image_url: string | null
    gallery_urls: string[] | null
    category: string | null
    published: boolean
    order?: number | null
    featured?: boolean | null
    tags?: string[] | null
}

export async function getPublishedProjects(): Promise<Project[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('published', true)
        .order('order', { ascending: true, nullsFirst: false })
        .order('created_at', { ascending: false })


    if (error) {
        if (process.env.NODE_ENV === 'development') {
            console.log('No projects found in database yet')
        }
        return []
    }

    return data || []
}

export async function getProjectsByCategory(category: string): Promise<Project[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('published', true)
        .eq('category', category)
        .order('order', { ascending: true, nullsFirst: false })
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching projects by category:', error)
        return []
    }

    return data || []
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single()

    if (error) {
        console.error('Error fetching project by slug:', error)
        return null
    }

    return data
}

export async function getFeaturedProjects(limit: number = 6): Promise<Project[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('published', true)
        .eq('featured', true)
        .order('order', { ascending: true, nullsFirst: false })
        .limit(limit)

    if (error) {
        console.error('Error fetching featured projects:', error)
        return []
    }

    return data || []
}

export async function getCategories(): Promise<string[]> {
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('projects')
        .select('category')
        .eq('published', true)
        .not('category', 'is', null)

    if (error) {
        console.error('Error fetching categories:', error)
        return []
    }

    // Get unique categories
    const categories = [...new Set(data.map(p => p.category).filter(Boolean))] as string[]
    return categories
}
