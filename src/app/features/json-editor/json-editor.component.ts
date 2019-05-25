import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import * as uuid from 'uuid';
import { IJsonProperty } from '../json-property';


@Component({
  selector: 'app-json-editor',
  templateUrl: './json-editor.component.html',
  styleUrls: ['./json-editor.component.scss']
})
export class JsonEditorComponent implements OnInit {


  constructor(private http: HttpClient, ) {
  }

  jsonObject = null;
  jsonProperties: IJsonProperty[] = [];
  rootId: string;

  ngOnInit() {

    this.http.get("../assets/demo.json")
      .subscribe((response) => {
        this.jsonObject = JSON.stringify(response, undefined, 2);
        this.rootId = uuid.v4();
        this.serialize(JSON.parse(this.jsonObject), 0, this.rootId);
        setTimeout(() => { this.adjustHeight(); }, 0);
      },
        error => { });
  }

  serialize(obj: any, index: number, _id: string) {
    Object.entries(obj).forEach(([key, value]) => {
      let _newId = uuid.v4();
      this.jsonProperties.push({ name: key, level: index, value: value, uniqueId: _newId, parentId: _id });

      if (typeof obj[key] == "object" && obj[key] !== null) {
        this.serialize(obj[key], index + 1, _newId);
      }
    });
  }

  errorMessage: string = "";
  jsonChange($event) {
    this.jsonProperties = [];
    this.jsonObject = $event.srcElement.value;
    try {
      this.serialize(JSON.parse(this.jsonObject), 0, this.rootId);
      this.errorMessage = "";
    } catch (e) {
      if (this.jsonObject != null && this.jsonObject != "")
        this.errorMessage = e;
    }
  }

  adjustHeight() {
    let jsonText = document.getElementById("jsonText")
    jsonText.style.overflow = 'hidden';
    jsonText.style.height = '0px';
    jsonText.style.height = jsonText.scrollHeight + 'px';
  }

  formatJSON() {
    try {
      this.jsonObject = JSON.stringify(JSON.parse(this.jsonObject), undefined, 2);
      setTimeout(() => { this.adjustHeight(); }, 0);
    } catch (e) {
      if (this.jsonObject != null && this.jsonObject != "")
        this.errorMessage = e;
    }
  }
}


