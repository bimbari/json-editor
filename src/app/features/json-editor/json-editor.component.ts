import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class JsonEditorComponent implements OnInit {

  constructor(private http: HttpClient) { }

  jsonObject = null;

  ngOnInit() {

    this.http.get("../assets/demo.json")
      .do(data => this.jsonObject = data).subscribe();


  }



}
