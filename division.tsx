import type { Route } from './+types/division';
import { seo } from '@/lib/seo';
import { divisions } from '@/data/divisions';
import { DivisionOverview } from '@/components/divisions/division-overview';
import { Heritage } from '@/components/divisions/heritage';
import { Inquiry } from '@/components/inquiry';
export function loader({ params }: Route.LoaderArgs) { const division = divisions.find(d => d.slug === params.slug); if (!division) throw new Response('Division not found', {status:404}); return {division}; }
export function meta({ matches,location,loaderData }: Route.MetaArgs) { return seo({matches,location},{title: loaderData ? loaderData.division.title+' | ANTM Hong Kong' : 'Division not found | ANTM',description:loaderData?.division.summary+' Direct manufacturing coordination, quality oversight, and international export support from ANTM Hong Kong.',image:loaderData?.division.image,jsonLd:loaderData ? {'@context':'https://schema.org','@type':'Service',name:loaderData.division.title,provider:{'@type':'Organization',name:'ANTM Hong Kong Limited'}} : undefined}); }
export default function DivisionPage({ loaderData }: Route.ComponentProps) { return <main><DivisionOverview division={loaderData.division}/><Heritage/><Inquiry key={loaderData.division.slug} division={loaderData.division.title}/></main>; }
