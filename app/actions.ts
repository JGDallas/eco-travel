"use server"

import { supabase } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

export async function getProducts() {
  const { data: products, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching products:", error)
    return []
  }

  return products
}

export async function getDestinations() {
  const { data: destinations, error } = await supabase
    .from("destinations")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching destinations:", error)
    return []
  }

  return destinations
}

export async function toggleFavorite(productId: number, userId: string) {
  const { data: existingFavorite } = await supabase
    .from("user_favorites")
    .select()
    .eq("user_id", userId)
    .eq("product_id", productId)
    .single()

  if (existingFavorite) {
    await supabase.from("user_favorites").delete().eq("user_id", userId).eq("product_id", productId)
  } else {
    await supabase.from("user_favorites").insert({ user_id: userId, product_id: productId })
  }

  revalidatePath("/products")
}

