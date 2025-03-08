import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: number
          name: string
          description: string
          price: number
          image_url: string
          created_at: string
          category: string
        }
        Insert: Omit<Database["public"]["Tables"]["products"]["Row"], "id" | "created_at">
      }
      destinations: {
        Row: {
          id: number
          name: string
          description: string
          image_url: string
          created_at: string
        }
        Insert: Omit<Database["public"]["Tables"]["destinations"]["Row"], "id" | "created_at">
      }
      user_favorites: {
        Row: {
          id: number
          user_id: string
          product_id: number
          created_at: string
        }
        Insert: Omit<Database["public"]["Tables"]["user_favorites"]["Row"], "id" | "created_at">
      }
    }
  }
}

