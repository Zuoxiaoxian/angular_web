import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  value: number = 50;
  option1: any = {};
  option2: any = {};
  option3: any = {};
  option4: any = {};
  constructor() { }

  ngOnInit() {
    this.option1 = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              // restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      series : [
          {
              name:'业务指标',
              type:'gauge',
              detail : {formatter:'{value}%'},
              data:[{value: this.value, name: '完成率'}]
          }
      ]
  };
    this.option2 = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              // restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      series : [
          {
              name:'业务指标',
              type:'gauge',
              detail : {formatter:'{value}%'},
              data:[{value: this.value, name: '完成率'}]
          }
      ]
  };
    this.option3 = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              // restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      series : [
          {
              name:'业务指标',
              type:'gauge',
              detail : {formatter:'{value}%'},
              data:[{value: this.value, name: '完成率'}]
          }
      ]
  };
    this.option4 = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              // restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      series : [
          {
              name:'业务指标',
              type:'gauge',
              detail : {formatter:'{value}%'},
              data:[{value: this.value, name: '完成率'}]
          }
      ]
  };
  }

  // 准备图标数据
  interval: any = setInterval(()=>{
    this.value = Math.ceil(Math.random()*100);
    // this.option.series[0].data[0].value = (Math.random()*100) - 0;
    // console.log(this.option.series[0].data[0].value)
    console.log(this.value)
    this.option1 = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              // restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      series : [
          {
              name:'业务指标一',
              type:'gauge',
              detail : {formatter:'{value}%'},
              data:[{value: this.value, name: '完成率'}]
          }
      ]
  };
    this.option2 = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              // restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      series : [
          {
              name:'业务指标二',
              type:'gauge',
              detail : {formatter:'{value}%'},
              data:[{value: this.value - 10, name: '完成率'}]
          }
      ]
  };
    this.option3 = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              // restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      series : [
          {
              name:'业务指标三',
              type:'gauge',
              detail : {formatter:'{value}%'},
              data:[{value: this.value - 2, name: '完成率'}]
          }
      ]
  };
    this.option4 = {
      tooltip : {
          formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              // restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      series : [
          {
              name:'业务指标四',
              type:'gauge',
              detail : {formatter:'{value}%'},
              data:[{value: this.value - 3, name: '完成率'}]
          }
      ]
  };
  
    
  }, 4000)







  
}
