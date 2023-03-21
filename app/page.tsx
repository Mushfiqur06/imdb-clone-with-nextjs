import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <h2 className="text-3xl font-bold underline">Hello App Page</h2>;
}
