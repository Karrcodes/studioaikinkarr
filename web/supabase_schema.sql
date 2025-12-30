-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROJECTS TABLE
create table public.projects (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  slug text not null unique,
  title text not null,
  description text,
  content text, -- Markdown or Rich Text
  cover_image_url text, -- URL from Storage
  gallery_urls text[], -- Array of URLs
  category text, -- 'Architecture', 'Product Design', etc.
  published boolean default false
);

-- PRESS TABLE
create table public.press (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  title text not null,
  source text not null, -- e.g. "Deezen"
  url text, -- Link to external article
  publish_date date
);

-- ARTICLES TABLE (Optional, for internal blog)
create table public.articles (
  id uuid default uuid_generate_v4() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  slug text not null unique,
  title text not null,
  excerpt text,
  content text,
  cover_image_url text,
  published boolean default false
);

-- UNCOMMENT IF YOU WANT ROW LEVEL SECURITY (Recommended)
-- alter table public.projects enable row level security;
-- create policy "Public projects are viewable by everyone." on public.projects for select using ( published = true );
-- create policy "Users can insert their own projects." on public.projects for insert with check ( auth.role() = 'authenticated' );
-- create policy "Users can update own projects." on public.projects for update using ( auth.role() = 'authenticated' );
