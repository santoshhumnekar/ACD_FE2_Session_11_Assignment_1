import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  datalist(){
    return [
      {'Name':"Danny", 'Dob':"9.02.1992",'Email':"danny@gmail.com",'Status':"Active",'Enroll':"Enroll Test"},
      {'Name':"Jack", 'Dob':"22.10.1990",'Email':"jack@gmail.com",'Status':"Unactive",'Enroll':"Enroll Test"},
      {'Name':"Jessica", 'Dob':"19.08.1994",'Email':"jess@gmail.com",'Status':"Active",'Enroll':"Enroll Test"}
    ]
  }

  constructor() { }

}
