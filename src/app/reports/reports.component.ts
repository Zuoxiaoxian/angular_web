import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { AgGridNg2 } from 'ag-grid-angular';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridNg2;
  constructor(private http: HttpClient) { }

  // 列定义
  columnDefs = [
    {headerName: 'Make', field: 'make', checkboxSelection: true},
    {headerName: 'Model', field: 'model' },
    {headerName: 'Price', field: 'price'}
  ];

  // 数据定义

    // 模拟实例数据
  // rowData = [
  //     { make: 'Toyota', model: 'Celica', price: 35000 },
  //     { make: 'Ford', model: 'Mondeo', price: 32000 },
  //     { make: 'Porsche', model: 'Boxter', price: 72000 }
  // ];  
  
  rowData: any;

  ngOnInit() {
    this.rowData = this.http.get('https://api.myjson.com/bins/15psn9')
  }

  // 得到 前端选中的数据
  getSelectedRows(){
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
    }

}
