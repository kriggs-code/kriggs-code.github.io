create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  worldview text,
  openness text,
  struggle text,
  goal text,
  streak_count integer default 0,
  last_check_in date,
  created_at timestamp with time zone default now()
);

create table if not exists reflections (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  scripture text,
  prayer text,
  reflection text,
  created_at timestamp with time zone default now()
);

alter table profiles enable row level security;
alter table reflections enable row level security;

create policy "Users can view their own profile" on profiles for select using (auth.uid() = id);
create policy "Users can insert their own profile" on profiles for insert with check (auth.uid() = id);
create policy "Users can update their own profile" on profiles for update using (auth.uid() = id);
create policy "Users can view their own reflections" on reflections for select using (auth.uid() = user_id);
create policy "Users can create their own reflections" on reflections for insert with check (auth.uid() = user_id);
