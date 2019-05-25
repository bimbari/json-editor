import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { IJsonProperty } from '../json-property';

@Component({
  selector: 'app-json-tree',
  templateUrl: './json-tree.component.html',
  styleUrls: ['./json-tree.component.scss']
})
export class JsonTreeComponent implements OnInit {

  constructor() {
  }

  @Input() parentId: string;
  @Input() jsonProperties: IJsonProperty[];
  @Input() rootId: string;

  ngOnInit() {
  }

  removeCurrentLevelItems = (jsonProperties, parentId) => {
    return jsonProperties.filter(p => p.parentId != parentId)
  }

  showChildren = {};
  toggleChildren(id: string) {
    if (!this.showChildren[id] != null)
      this.showChildren[id] = !this.showChildren[id];
    else
      this.showChildren[id] = false;
  }

  hasChildren(id: string) {
    return this.jsonProperties.filter(j => j.parentId == id).length;
  }

  show(p: IJsonProperty) {
    return this.showChildren[p.uniqueId] == true;
  }

  getValueType(value: any) {
    return typeof value;
  }

  getText(value: any) {
    let type = this.getValueType(value);
    switch (type) {
      case "object":
        return "Object";
      case "number":
      case "boolean":
        return value;
      case "string":
      default:
        return `"${value}"`;
    }
  }

  jsonStringify(value: any) {
    return JSON.stringify(value);
  }
}
