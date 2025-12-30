export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            projects: {
                Row: {
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
                }
                Insert: {
                    id?: string
                    created_at?: string
                    slug: string
                    title: string
                    description?: string | null
                    content?: string | null
                    cover_image_url?: string | null
                    gallery_urls?: string[] | null
                    category?: string | null
                    published?: boolean
                }
                Update: {
                    id?: string
                    created_at?: string
                    slug?: string
                    title?: string
                    description?: string | null
                    content?: string | null
                    cover_image_url?: string | null
                    gallery_urls?: string[] | null
                    category?: string | null
                    published?: boolean
                }
            }
            press: {
                Row: {
                    id: string
                    created_at: string
                    title: string
                    source: string
                    url: string | null
                    publish_date: string | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    title: string
                    source: string
                    url?: string | null
                    publish_date?: string | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    title?: string
                    source?: string
                    url?: string | null
                    publish_date?: string | null
                }
            }
            articles: {
                Row: {
                    id: string
                    created_at: string
                    slug: string
                    title: string
                    excerpt: string | null
                    content: string | null
                    cover_image_url: string | null
                    published: boolean
                }
                Insert: {
                    id?: string
                    created_at?: string
                    slug: string
                    title: string
                    excerpt?: string | null
                    content?: string | null
                    cover_image_url?: string | null
                    published?: boolean
                }
                Update: {
                    id?: string
                    created_at?: string
                    slug?: string
                    title?: string
                    excerpt?: string | null
                    content?: string | null
                    cover_image_url?: string | null
                    published?: boolean
                }
            }
        }
    }
}
