import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
}

export function SEO({ title, description = "Personal academic portfolio" }: SEOProps) {
  return (
    <Helmet>
      <title>{title} | Mohammed W. Hammami</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
