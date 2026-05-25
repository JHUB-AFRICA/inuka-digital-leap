import { Component, ChangeDetectionStrategy, signal, OnInit, OnDestroy, inject } from '@angular/core';
import { RouterOutlet, NavigationEnd, NavigationStart, NavigationCancel, NavigationError, Router, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { SpinnerComponent } from './shared/ui/spinner/spinner.component';
import { Subscription } from 'rxjs';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, SpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit, OnDestroy {
  protected readonly loading = signal(false);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  private sub: Subscription | null = null;

  ngOnInit(): void {
    this.sub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading.set(true);
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
        this.loading.set(false);
      }

      if (event instanceof NavigationEnd) {
        let child = this.route.snapshot.firstChild;
        while (child?.firstChild) child = child.firstChild;
        const data = child?.data as { title?: string; description?: string } | undefined;
        if (data?.title) {
          this.seo.setPageSeo({
            title: data.title,
            description: data.description ?? '',
          });
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
