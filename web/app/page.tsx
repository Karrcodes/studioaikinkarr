import HeroSection from '@/components/home/HeroSection'
import ProjectGrid from '@/components/home/ProjectGrid'
import { getPublishedProjects } from '@/lib/supabase/queries'

export default async function Home() {
  const projects = await getPublishedProjects()

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-black">
      <HeroSection />
      <ProjectGrid projects={projects} />
    </div>
  )
}
