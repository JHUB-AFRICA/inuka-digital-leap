import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { SITE_CONFIG } from '../constants';

export interface SeoData {
  title: string;
  description: string;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly config = SITE_CONFIG;

  setPageSeo(data: SeoData): void {
    const fullTitle = `${data.title} | ${this.config.name}`;
    const url = this.config.url;

    this.title.setTitle(fullTitle);

    this.meta.updateTag({ name: 'description', content: data.description });

    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: data.image ?? `${url}/favicon.ico` });
    this.meta.updateTag({ property: 'og:site_name', content: this.config.name });

    this.meta.updateTag({ name: 'twitter:title', content: fullTitle });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: data.image ?? `${url}/favicon.ico` });

    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    this.setCanonical(url);
  }

  private setCanonical(url: string): void {
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
