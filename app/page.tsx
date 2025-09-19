import { redirect } from 'next/navigation';

import { locales } from '@/lib/dictionaries';

export default function IndexPage() {
  redirect(`/${locales[0]}`);
}
