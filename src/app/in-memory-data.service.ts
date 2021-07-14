import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  createDb() {
    const doubtList = [
      { id: 1, title: 'How to do Ajax in Rails?', description: 'description', askedBy: 'askedBy', time: 'August 8 7:37', Comments: [{ by: "john", comment: 'comment 1' }],status:'UNRESOLVED' },
      { id: 2, title: 'title 2', description: 'description 2', askedBy: 'askedBy 2', time: 'August 8 7:37', Comments: [{ by: "john 2", comment: 'comment 2' }],status:'RESOLVED',answer:'answer' },
      { id: 3, title: 'What is life?', description: 'description', askedBy: 'askedBy', time: 'August 8 7:37', Comments: [{ by: "john", comment: 'comment 1' }],status:'UNRESOLVED' },
    ];
    return {doubtList};
  }

  genId(doubtList:any): number {
    return doubtList.length > 0 ? Math.max(...doubtList.map((doubt: { id: any; }) => doubt.id)) + 1 : 1;
  }

}
