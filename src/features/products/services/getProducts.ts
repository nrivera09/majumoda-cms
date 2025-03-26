// src/features/productos/services/getProductos.ts
import { api } from "@/lib/axios";
import { getCategoryNames } from "./getCategoryNames";

export interface IProducto {
  id: number;
  date: string;
  date_gmt: string;
  guid: {
    rendered: string;
  };
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  featured_media: number;
  parent: number;
  menu_order: number;
  template: string;
  categories: number[];
  class_list: string[];
  acf: {
    precio_por_unidad: string;
    precio_por_mayor: string;
    texto_incentivador: string;
    desea_activar_ofertas: string;
    fecha_de_inicio: string;
    fecha_de_fin: string;
    desea_aplicar_un_texto_para_incentivar_la_venta: string;
    colores: {
      color: string;
      nombre_del_color: string;
    }[];
    galeria_de_fotos_del_producto: string[];
  };
  _links: {
    [key: string]: Array<{
      href: string;
      embeddable?: boolean;
      templated?: boolean;
      targetHints?: {
        allow: string[];
      };
    }>;
  };
}

// Función para obtener los nombres de las categorías desde un array de IDs
export const getProducts = async () => {
  try {
    const { data: productos } = await api.get("/producto/");

    const productosConCategorias = await Promise.all(
      productos.map(async (producto: IProducto) => {
        const categoryNames = producto.categories
          ? await getCategoryNames(producto.categories)
          : [];
        return {
          ...producto,
          categoryNames,
        };
      })
    );

    console.log(
      "📦 Productos con nombres de categorías:",
      productosConCategorias
    );
    return productosConCategorias;
  } catch (error) {
    console.error("❌ Error al obtener productos:", error);
    return [];
  }
};
