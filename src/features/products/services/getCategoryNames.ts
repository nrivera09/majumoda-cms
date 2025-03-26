// src/features/productos/services/getProductos.ts
import { api } from "@/lib/axios";

export const getCategoryNames = async (
  categoryIds: number[]
): Promise<string[]> => {
  try {
    const uniqueIds = [...new Set(categoryIds)]; // Elimina duplicados
    const requests = uniqueIds.map((id) =>
      api.get(`/categories/${id}`).then((res) => res.data.name)
    );
    return await Promise.all(requests);
  } catch (error) {
    console.error("❌ Error al obtener categorías:", error);
    return [];
  }
};
