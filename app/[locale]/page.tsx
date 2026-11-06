import { notFound } from "next/navigation";
import Showcase from "@/components/showcase";
import type { Locale } from "@/lib/projects";
export function generateStaticParams() { return [{locale:"en"},{locale:"es"}]; }
export default async function Page({ params }: {params: Promise<{locale:string}>}) {
  const {locale} = await params;
  if(locale !== "en" && locale !== "es") notFound();
  return <Showcase locale={locale as Locale}/>;
}
