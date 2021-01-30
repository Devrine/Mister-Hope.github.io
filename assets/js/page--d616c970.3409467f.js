(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1044:function(t,e,a){"use strict";a.r(e);var s=a(1),l=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("匹配符")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("*")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("匹配文件路径中的0个或多个字符，但不会匹配路径分隔符，除非路径分隔符出现在末尾。如，"),a("code",[t._v("\\* 能匹配 a.js,x.y,abc,abc/,但不能匹配a/b.js。 */*/*.js 能匹配 a/b/c.js,x/y/z.js,不能匹配a/b.js,a/b/c/d.js。")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("**")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("匹配路径中的0个或多个目录及其子目录,需要单独出现，即它左右不能有其他东西了。           如果出现在末尾，也能匹配文件。                                                                                                     如，"),a("code",[t._v("** 能匹配 abc,a/b.js,a/b/c.js,x/y/z,x/y/z/a.b,能用来匹配所有的目录和文件。 **/*.js 能匹配 foo.js,a/foo.js,a/b/foo.js,a/b/c/foo.js（匹配文件路径中的一个字符，不会匹配路径分隔符)。 a/**/z 能匹配 a/z,a/b/z,a/b/c/z,a/d/g/h/j/k/z。 a/**b/z 能匹配 a/b/z,a/sb/z,但不能匹配a/x/sb/z,因为只有单独出现才能匹配多级目录")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("?")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("匹配文件路径中的一个字符(不会匹配路径分隔符)                                                                       如，"),a("code",[t._v("a?? 能匹配 a.b,abc,但不能匹配ab/,因为它不会匹配路径分隔符")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[...]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[...]匹配方括号之中的任意一个字符。                                                                                        如，"),a("code",[t._v("[xyz].js 只能匹配 x.js,y.js,z.js,不会匹配xy.js,xyz.js等,整个中括号只代表一个字符")]),t._v("。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("[^...]和[!...]")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("[^...]和[!...]表示匹配不在方括号里面的字符（不包括空字符）。两种写法是等价的。              也可使用连续范围的写法[!start-end]。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("{...}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("匹配大括号里面所有的模式，模式之间使用逗号分隔。 可用于多字符的模式。                         大括号可以嵌套，可与其他模式联用。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("{start..end}")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("匹配连续范围的字符。如果遇到无法解释的扩展，模式会原样输出。 这种模式可与逗号联用。")])])])]),t._v(" "),a("p",[a("strong",[t._v("注意，{...}和[...]的区别是：如果匹配的文件不存在，[...]会失去模式的功能，变成一个单纯的字符串，而{...}依然可以展开。")])])])}),[],!1,null,null,null);e.default=l.exports}}]);