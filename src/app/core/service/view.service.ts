import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  toggle: boolean = true;
  constructor() { }
  subject = new Subject();
  getView() {
    this.gridview(this.toggle);
    return this.subject.asObservable();
  }

  gridview(result) {
    this.toggle = result
    if (this.toggle == false) {
      this.subject.next({ data: "column" });
    }
    else {
      this.subject.next({ data: "row" });

    }
}
}




