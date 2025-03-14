-- Create products table
create table public.products (
  id bigint generated by default as identity primary key,
  name text not null,
  description text,
  price decimal(10,2) not null,
  image_url text,
  category text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create destinations table
create table public.destinations (
  id bigint generated by default as identity primary key,
  name text not null,
  description text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create user_favorites table
create table public.user_favorites (
  id bigint generated by default as identity primary key,
  user_id uuid references auth.users not null,
  product_id bigint references public.products not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, product_id)
);

-- Set up Row Level Security (RLS)
alter table public.products enable row level security;
alter table public.destinations enable row level security;
alter table public.user_favorites enable row level security;

-- Create policies
create policy "Products are viewable by everyone" on public.products
  for select using (true);

create policy "Destinations are viewable by everyone" on public.destinations
  for select using (true);

create policy "Users can manage their own favorites" on public.user_favorites
  for all using (auth.uid() = user_id);

