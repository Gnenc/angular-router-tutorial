import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.css']
})
export class CrisisListComponent implements OnInit {
  crises$: Observable<Crisis[]>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private crisisService: CrisisService
  ) { }

  ngOnInit(): void {
    this.crises$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = +params.get('id');
        return this.crisisService.getCrises();
      })
    );
  }

}
