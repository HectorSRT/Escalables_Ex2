import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvShowService } from '../../services/tv-show.service';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.css',
})
export class TvShowDetailsComponent {
  showName: string = '';
  show: Show | undefined;

  constructor(
    private route: ActivatedRoute,
    private tvShowService: TvShowService
  ) {
    this.showName = this.route.snapshot.paramMap.get('name') || '';
    this.show = this.tvShowService.getShowByName(this.showName);
  }
}
