(this.webpackJsonplife_calendar=this.webpackJsonplife_calendar||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(7),c=a.n(n),i=(a(12),a(2)),l=a(3),o=a(5),h=a(4),j=(a(13),a(14),a(15),1997),d=new Date(1997,9,29),u=new Date,v=a(0),b=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={months:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},s}return Object(l.a)(a,[{key:"daysInMonth",value:function(e,t){return new Date(t,e,0).getDate()}},{key:"generateDayTitle",value:function(){for(var e=[],t=this.daysInMonth(this.props.monthValue,this.props.yearValue),a=1;a<=31;a++)if(a>t)e.push(Object(v.jsx)("div",{className:"day-not-exist"},a));else{var s=new Date(this.props.yearValue,this.props.monthValue-1,a),r=new Date;r.setHours(0,0,0,0);var n="day-container";s.getMonth()===d.getMonth()&&s.getDate()===d.getDate()&&((s.getFullYear()-j)%10===0?n+=" important-birthday":n+=" birthday"),s.getTime()<r.getTime()?n+=" past-day":s.getTime()===r.getTime()&&(n+=" current-day"),!0===this.props.showDate&&console.log(typeof this.props.showDate),s.getFullYear()===r.getFullYear()?e.push(Object(v.jsx)("div",{className:n,children:Object(v.jsx)("div",{className:"day-date",style:{display:this.props.showDate?"inline":"none"},children:a})},a)):e.push(Object(v.jsx)("div",{className:n},a))}return e}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"month-container",children:[Object(v.jsx)("div",{className:"month-title",children:this.state.months[this.props.monthValue-1]}),Object(v.jsx)("div",{style:{flexGrow:1,display:"flex"},children:this.generateDayTitle()})]})}}]),a}(r.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={showDate:!1},s}return Object(l.a)(a,[{key:"generateMonthList",value:function(){for(var e=[],t=1;t<13;t++){var a=t;e.push(Object(v.jsx)(b,{showDate:this.state.showDate,monthValue:a,yearValue:this.props.yearValue},a))}return e}},{key:"handleClickShowDate",value:function(e){this.setState({showDate:!e})}},{key:"render",value:function(){var e=this;return Object(v.jsxs)("div",{className:"year-container",children:[Object(v.jsxs)("div",{children:[this.props.yearValue," - ",this.props.yearValue-j," years old",u.getFullYear()===this.props.yearValue?Object(v.jsx)("button",{className:"show-date",onClick:function(){return e.handleClickShowDate(e.state.showDate)},children:"Show Date"}):""]}),this.generateMonthList()]})}}]),a}(r.a.Component),O=(a(17),function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"generateAges",value:function(){var e=(new Date).getFullYear()-j,t=e/70*100;return Object(v.jsxs)("div",{className:"personal-age-progress",style:{width:t.toString()+"%"},children:["Your age ",e]})}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"event-progress-container",children:[Object(v.jsxs)("div",{className:"age-mark",children:[this.generateAges(),Object(v.jsx)("div",{className:"age-mark-line"})]}),Object(v.jsxs)("div",{className:"age-progress",children:[Object(v.jsx)("div",{className:"ten-age",children:"1 - 10"}),Object(v.jsx)("div",{className:"twenty-age",children:"11 - 20"}),Object(v.jsx)("div",{className:"thirty-age",children:"21 - 30"}),Object(v.jsx)("div",{className:"fourty-age",children:"31 - 40"}),Object(v.jsx)("div",{className:"fifty-age",children:"41 - 50"}),Object(v.jsx)("div",{className:"sixty-age",children:"51 - 60"}),Object(v.jsx)("div",{className:"seventy-age",children:"61 - 70"})]}),Object(v.jsxs)("div",{className:"career-progress",children:[Object(v.jsx)("div",{className:"primary-school",children:"Primary School"}),Object(v.jsx)("div",{className:"secondary-school",children:"Secondary"}),Object(v.jsx)("div",{className:"high-school",children:"High"}),Object(v.jsx)("div",{className:"university",children:"University"}),Object(v.jsx)("div",{className:"professional",children:"Professional"}),Object(v.jsx)("div",{className:"retirement",children:"Retirement"})]})]})}}]),a}(r.a.Component)),m=function(e){Object(o.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).state={},s}return Object(l.a)(a,[{key:"generateYearList",value:function(){for(var e=[],t=[],a=0,s=2021;s<2068;s++)++a,t.push(Object(v.jsx)(p,{yearValue:s},s)),2===a&&(a=0,e.push(Object(v.jsx)("div",{className:"row-year",children:t},s)),t=[]);return t&&e.push(Object(v.jsx)("div",{className:"row-year",children:t},"2067")),e}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)("p",{children:"Life Calendar"})}),Object(v.jsxs)("div",{className:"content",children:[Object(v.jsx)(O,{}),Object(v.jsx)("div",{className:"years-container",children:this.generateYearList()})]}),Object(v.jsx)("footer",{})]})}}]),a}(r.a.Component);c.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(m,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.44fe6f50.chunk.js.map