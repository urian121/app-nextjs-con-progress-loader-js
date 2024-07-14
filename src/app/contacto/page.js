"use client";
import { ProgressLoaderContainer } from "progress-loader-js";
import "progress-loader-js/dist/style.css";

export default function Contacto() {
  ProgressLoaderContainer({
    backgroundColor: "#ccc",
    barColor: "#1fb141",
  });
  return (
    <div>
      <h1>Página de Contacto 😯</h1>
    </div>
  );
}
