// src/lib/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL:
    (process.env.NEXT_PUBLIC_DOMINIO || "defaultDominio") +
    (process.env.NEXT_PUBLIC_DOMINIO_API || "defaultApi"),
  headers: {
    "Content-Type": "application/json",
  },
});
