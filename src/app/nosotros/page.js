"use client";
import { ProgressLoaderContainer } from "progress-loader-js";
import "progress-loader-js/dist/style.css";

export default function Nosotros() {
  ProgressLoaderContainer({
    backgroundColor: "#ccc",
    barColor: "crimson",
  });

  return (
    <div>
      <h1>Página de Nosotros</h1>
    </div>
  );
}
