(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(26),r=a.n(c),l=a(27),s=a(8),i=a.n(s),u=a(18),m=a(12),p=a(2),h=a(3),d=a(5),b=a(4),f=a(6),E=a(66),k=a(67),v=a(68),g=(a(37),a(65)),x=o.a.createContext({books:[],book:{},Cart:[],Admin:!1,getBooks:function(){},getBook:function(e){},deleteBook:function(e){},updateBook:function(e,t){},addBook:function(e){},isAdmin:function(){},notAdmin:function(){},addToCart:function(e){},removeFromCart:function(e){},cartTotal:function(){}}),C=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).ifClicked=function(){a.context.isAdmin()},a.clicked=function(){a.context.notAdmin()},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log(this.context),o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"col-1"},o.a.createElement("h1",null,"Admin"),o.a.createElement(g.a,{to:"/books"},o.a.createElement("button",{className:" btn success",onClick:this.ifClicked},"Login"))),o.a.createElement("div",{className:"col-2"},o.a.createElement("h1",null,"Customer"),o.a.createElement(g.a,{to:"/books"},o.a.createElement("button",{className:" btn success",onClick:this.clicked},"Login")))))}}]),t}(n.Component);C.contextType=x;var O=C,j=(a(40),a(41),a(42),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).total=function(){var e=a.props.context.Cart.reducer(function(e,t){return e+Number(t.price)}).toFixed(2);return console.log(e),e},a.state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.context),console.log(this.props.context.Cart.reduce(function(e,t){return console.log(t.price,e.price),Number(e.price)+Number(t.price)})),o.a.createElement("div",{className:"cart"},o.a.createElement("dt",null,this.props.context.Cart.map(function(t){return o.a.createElement("dd",{className:!0},"Book: ",t.subtitle,", price: $",t.price,o.a.createElement("button",{onClick:function(){return e.props.context.removeFromCart(t.id)}},"Remove From Cart"))})),o.a.createElement("h1",null,"Total $",this.props.context.Cart.reduce(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return e+Number(t.price)})))}}]),t}(n.Component)),N=(n.Component,function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).cartClicked=function(){var e=a.state.cartClicked;a.setState({cartClicked:!e})},a.searchBarClicked=function(){console.log("in here");var e=a.state.searchBarClicked;a.setState({searchBarClicked:!e})},a.updateSearch=function(e){a.setState({search:e.target.value.substr(0,20)})},a.state={cartClicked:!1,searchBarClicked:!1,search:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;console.log(this.state.search,this.state.cartClicked);var t=this.props.context.books.filter(function(t){return-1!==t.title.toLowerCase().indexOf(e.state.search)||-1!==t.author.toLowerCase().indexOf(e.state.search)});return console.log(t),o.a.createElement("div",null,o.a.createElement("div",{className:"topnav"},o.a.createElement(g.a,{to:"/"},o.a.createElement("p",{className:"active",onClick:this.props.notAdmin},"Back to Login")),this.props.context.Admin?null:o.a.createElement("p",{className:"active",style:{marginLeft:"10px"},onClick:this.cartClicked},"Cart (",this.props.context.Cart.length?this.props.context.Cart.length:0,")"),this.props.context.Admin?o.a.createElement(g.a,{to:"/AddBook"},o.a.createElement("p",{className:"active",style:{marginLeft:"10px"}},"Add Book")):null,o.a.createElement("input",{type:"text",placeholder:"Search..",value:this.state.search,onChange:this.updateSearch})),this.state.cartClicked?o.a.createElement(j,{context:this.props.context}):null,""!==this.state.search?o.a.createElement("div",{className:"searchBar"},o.a.createElement("dt",null,t.map(function(e){return o.a.createElement(g.a,{to:"/:".concat(e.id)},o.a.createElement("dd",{className:"theList"},e.author,", ",e.title))}))):null)}}]),t}(n.Component)),B=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(N,{context:this.context}),o.a.createElement("div",{className:"container"},o.a.createElement("dl",null,this.context.Admin?o.a.createElement("h1",null,"Admin"):o.a.createElement("h1",null,"Customer"),o.a.createElement("br",null),this.context.Admin?this.context.books.map(function(t,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{to:"/:".concat(a)},o.a.createElement("p",{className:"list",onClick:function(){e.context.getBook(t.id)}},"Title: ",t.subtitle)))}):this.context.books.map(function(t,a){return o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{to:"/:".concat(a)},o.a.createElement("p",{className:"list",onClick:function(){e.context.getBook(t.id)}},"Title: ",t.subtitle,", Author: ",t.author)),o.a.createElement("p",null,"Price: $",t.price),o.a.createElement("button",{onClick:function(){e.context.addToCart(t.id)}},"add to cart"))})),o.a.createElement("div",{className:"emptySpace"})))}}]),t}(n.Component);B.contextType=x;var y=B,w=a(15),A=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).onUpdate=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.updatedSubmit=function(e){e.preventDefault(),a.props.context.updateBook(a.props.context.book.id,a.state),a.props.history.push("/books")},a.state={title:"",subtitle:"",author:"",published:"",publisher:"",pages:"",description:"",website:"",inCart:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("form",{id:"post-form",onSubmit:this.updatedSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{name:"title",type:"text",className:"form-control",value:this.state.title,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"SubTitle"),o.a.createElement("input",{name:"subtitle",type:"text",className:"form-control",value:this.state.subtitle,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"author"),o.a.createElement("input",{name:"author",type:"text",className:"form-control",value:this.state.subtitle,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"published"),o.a.createElement("input",{name:"published",type:"text",className:"form-control",value:this.state.published,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"publisher"),o.a.createElement("input",{name:"publisher",type:"text",className:"form-control",value:this.state.publisher,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Page Count"),o.a.createElement("input",{name:"pages",type:"text",className:"form-control",value:this.state.pages,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Description"),o.a.createElement("textarea",{name:"description",className:"form-control",rows:"3",value:this.state.description,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Website"),o.a.createElement("input",{name:"website",type:"text",className:"form-control",value:this.state.website,onChange:this.onUpdate})),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Update Book")))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).clicked=function(){var e=a.state.value;a.setState({value:!e})},a.deleted=function(){a.props.context.deleteBook(a.props.context.book.id)},a.state={value:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"contain"},o.a.createElement("h1",null,"Title: ",this.props.context.book.title),o.a.createElement("h3",null,"Author: ",this.props.context.book.author),o.a.createElement("h4",null,"Publisher: ",this.props.context.book.publisher),o.a.createElement("a",{href:"".concat(this.props.context.book.website)},"website"),o.a.createElement("h4",null,this.props.context.book.description),o.a.createElement("br",null),o.a.createElement(g.a,{to:"/books"},o.a.createElement("button",{onClick:this.deleted,style:{marginBottom:"5px;"}},"Delete Book")),o.a.createElement("button",{onClick:this.clicked},"Edit Book"),this.state.value?o.a.createElement(A,{context:this.context}):null)}}]),t}(n.Component),T=(a(43),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log(this.props.context.book),o.a.createElement("div",{className:"contain"},o.a.createElement("h1",null,"Title: ",this.props.context.book.title),o.a.createElement("h3",null,"Author: ",this.props.context.book.author),o.a.createElement("h4",null,"Publisher: ",this.props.context.book.publisher),o.a.createElement("h4",null,"Page Count: ",this.props.context.book.pages),o.a.createElement("a",{href:"".concat(this.props.context.book.website)},"website"),o.a.createElement("h4",null,this.props.context.book.description),o.a.createElement("br",null),o.a.createElement("br",null))}}]),t}(n.Component)),U=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log(this.context.book),o.a.createElement("div",null,o.a.createElement(N,{context:this.context}),o.a.createElement("br",null),this.context.Admin?o.a.createElement(S,{context:this.context}):o.a.createElement(T,{context:this.context}),o.a.createElement("br",null),o.a.createElement(g.a,{to:"/books"},o.a.createElement("button",null,"go Back to Books")))}}]),t}(n.Component);U.contextType=x;var F=U,L=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(d.a)(this,Object(b.a)(t).call(this,e))).onUpdate=function(e){a.setState(Object(w.a)({},e.target.name,e.target.value))},a.updatedSubmit=function(e){e.preventDefault(),a.context.addBook(a.state)},a.state={title:"",subtitle:"",author:"",published:"",publisher:"",pages:"",description:"",website:"",inCart:!1},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("br",null),o.a.createElement("form",{id:"post-form",onSubmit:this.updatedSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Title"),o.a.createElement("input",{name:"title",type:"text",className:"form-control",value:this.state.title,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"SubTitle"),o.a.createElement("input",{name:"subtitle",type:"text",className:"form-control",value:this.state.subtitle,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"author"),o.a.createElement("input",{name:"author",type:"text",className:"form-control",value:this.state.subtitle,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"published"),o.a.createElement("input",{name:"published",type:"text",className:"form-control",value:this.state.published,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"publisher"),o.a.createElement("input",{name:"publisher",type:"text",className:"form-control",value:this.state.publisher,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Page Count"),o.a.createElement("input",{name:"pages",type:"text",className:"form-control",value:this.state.pages,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Description"),o.a.createElement("textarea",{name:"description",className:"form-control",rows:"3",value:this.state.description,onChange:this.onUpdate})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",null,"Website"),o.a.createElement("input",{name:"website",type:"text",className:"form-control",value:this.state.website,onChange:this.onUpdate})),o.a.createElement("br",null),o.a.createElement("button",{type:"submit"},"Add Book")),o.a.createElement("br",null),o.a.createElement(g.a,{to:"/books"},o.a.createElement("button",null,"Cancel")))}}]),t}(n.Component);L.contextType=x;var P=L,D=a(13),W=a.n(D),$=function(e){function t(){var e;return Object(p.a)(this,t),(e=Object(d.a)(this,Object(b.a)(t).call(this))).componentDidMount=function(){e.getBooks(),e.getBook()},e.isAdmin=function(){e.setState({Admin:!0})},e.notAdmin=function(){e.setState({Admin:!1})},e.getBooks=Object(m.a)(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:W.a.get("http://localhost:8082/api/books").then(function(t){e.setState({books:Object(u.a)(t.data)})}).catch(function(e){return console.log(e),null});case 1:case"end":return t.stop()}},t)})),e.getBook=function(){var t=Object(m.a)(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:W.a.get("http://localhost:8082/api/books/".concat(a)).then(function(t){console.log(t),e.setState({book:Object(l.a)({},t.data)})}).catch(function(e){return console.log(e),null});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.deleteBook=function(){var t=Object(m.a)(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:W.a.delete("http://localhost:8082/api/books/".concat(a)).then(function(t){e.getBooks()}).catch(function(e){return console.log(e),null});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.updateBook=function(){var t=Object(m.a)(i.a.mark(function t(a,n){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("book was udpated",a,n),W.a.put("http://localhost:8082/api/books/".concat(n),a).then(function(t){e.getBooks()}).catch(function(e){return console.log(e),null});case 2:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),e.addBook=function(){var t=Object(m.a)(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log(a),W.a.post("http://localhost:8082/api/books",a).then(function(t){e.getBooks()}).catch(function(e){return console.log(e),null});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.addToCart=function(){var t=Object(m.a)(i.a.mark(function t(a){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.state.books.find(function(e){return a===e.id}),W.a.patch("http://localhost:8082/api/books/cart/add/".concat(a)).then(function(t){e.setState({Cart:[].concat(Object(u.a)(e.state.Cart),[t.data])})}).catch(function(e){return console.log(e),null});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.removeFromCart=function(){var t=Object(m.a)(i.a.mark(function t(a){var n;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.state.books.find(function(e){return a===e.id}),W.a.patch("http://localhost:8082/api/books/cart/remove/".concat(a)).then(function(t){var a=e.state.Cart.filter(function(e){return n.id!==e.id});e.setState({Cart:Object(u.a)(a)})}).catch(function(e){return console.log(e),null});case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.cartTotal=function(){return e.state.Cart.reduce(function(e,t){return Number(e+t.price).toFixed(2)})},e.state={books:[],book:{},Cart:[],Admin:!1},e}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return console.log(this.state.books),o.a.createElement(x.Provider,{value:{books:this.state.books,book:this.state.book,Cart:this.state.Cart,Admin:this.state.Admin,deleteBook:this.deleteBook,updateBook:this.updateBook,addBook:this.addBook,getBook:this.getBook,getBooks:this.getBooks,isAdmin:this.isAdmin,notAdmin:this.notAdmin,addToCart:this.addToCart,removeFromCart:this.removeFromCart,cartTotal:this.cartTotal}},o.a.createElement(E.a,null,o.a.createElement("div",null,o.a.createElement(k.a,null,o.a.createElement(v.a,{exact:!0,path:"/",component:O}),o.a.createElement(v.a,{path:"/books",component:y}),o.a.createElement(v.a,{exact:!0,path:"/AddBook",component:P}),o.a.createElement(v.a,{path:"/:id",component:F})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,1,2]]]);
//# sourceMappingURL=main.da8e6b0d.chunk.js.map