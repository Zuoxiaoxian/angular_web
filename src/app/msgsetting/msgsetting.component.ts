import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msgsetting',
  templateUrl: './msgsetting.component.html',
  styleUrls: ['./msgsetting.component.css']
})
export class MsgsettingComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  // 执行提交函数之前，我们需要判定是否具有这个修改权限
  left_submit(left_value_1, left_value_2, left_value_3, left_value_4, left_value_5){
    console.log(left_value_1.value)
    console.log(left_value_2.value)
    console.log(left_value_3.value)
    console.log(left_value_4.value)
    console.log(left_value_5.value)
    left_value_1.value = ''
    left_value_2.value = ''
    left_value_3.value = ''
    left_value_4.value = ''
    left_value_5.value = ''
  }
  
  center_submit(center_value_1, center_value_2, center_value_3, center_value_4, center_value_5){
    console.log(center_value_1.value)
    console.log(center_value_2.value)
    console.log(center_value_3.value)
    console.log(center_value_4.value)
    console.log(center_value_5.value)
    center_value_1.value = ''
    center_value_2.value = ''
    center_value_3.value = ''
    center_value_4.value = ''
    center_value_5.value = ''
  }

  right_submit(right_value_1, right_value_2, right_value_3, right_value_4, right_value_5){
    console.log(right_value_1.value)
    console.log(right_value_2.value)
    console.log(right_value_3.value)
    console.log(right_value_4.value)
    console.log(right_value_5.value)
    right_value_1.value = ''
    right_value_2.value = ''
    right_value_3.value = ''
    right_value_4.value = ''
    right_value_5.value = ''
  }
}
