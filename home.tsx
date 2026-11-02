import type { Route } from './+types/home';
import { seo } from '@/lib/seo';
import { harbour } from '@/data/divisions';
import { Hero } from '@/components/home/hero';
import { Introduction } from '@/components/home/introduction';
import { Sectors } from '@/components/home/sectors';
import { Operations } from '@/components/home/operations';
import { Inquiry } from '@/components/inquiry';
export function meta({ matches,location }: Route.MetaArgs) { return seo({matches,location},{title:'ANTM Hong Kong | International Sourcing & Trade',description:'Direct manufacturing partnerships and reliable global sourcing across furniture, packaging, electronics, mobility, and footwear. Connect with ANTM Hong Kong.',image:harbour,jsonLd:[{'@context':'https://schema.org','@type':'WebSite',name:'ANTM Hong Kong Limited'},{'@context':'https://schema.org','@type':'Organization',name:'ANTM Hong Kong Limited',email:'info@antmhk.com',telephone:'+852 9498 9177',address:{'@type':'PostalAddress',streetAddress:'10/Floor, The Wave, 4 Hing Yip Street',addressLocality:'Kwun Tong, Kowloon',addressCountry:'HK'}}]}); }
export default function HomePage() { return <main><Hero/><Introduction/><Sectors/><Operations/><Inquiry/></main>; }
