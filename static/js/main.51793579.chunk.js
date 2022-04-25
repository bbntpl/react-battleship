(this["webpackJsonpreact-battleship"]=this["webpackJsonpreact-battleship"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(21),i=n.n(c),u=(n(28),n(29),n(4)),s=n(17),o=n(2),l=n(15),f=n(12),d=n(9),h=n.n(d),p=n(0);function b(){var e=Object(o.f)();return Object(p.jsxs)("li",{id:"Return",onClick:function(){e.push("/react-battleship/")},children:[Object(p.jsx)("i",{className:"fas fa-arrow-circle-left"}),"Return to Menu"]})}function j(e){var t=e.p,n=e.currentPlayer,a=e.categoryNum,c=e.coordinate,i=e.outcomesArr,u=e.setOutcomesArr;Object(r.useEffect)((function(){if(i.length>5){var e=i.slice(1);u(e)}!function(){if(null!==a)switch(a){case 2:i.push("".concat(n," successfully hit an attack at ").concat(c,"."));break;case 3:i.push("".concat(n," missed an attack at ").concat(c,"."))}}()}),[t,n,i,c]);var s=i.map((function(e,t){return Object(p.jsx)("li",{children:e},t)}));return Object(p.jsx)("ul",{id:"Outcomes",children:s})}var m=n(6),v=function(e,t){var n="safe",r=t,a=function(){return 0===r?n="sunk":null};return{getName:function(){return e},getHealth:function(){return r},getCurrentState:function(){return n},hit:function(){r-=1,n="hit",a()},isSunk:a}};function g(){var e=[["Carrier",5],["Battleship",4],["Cruiser",3],["Submariner",3],["Destroyer",2]],t={x:-15,y:-15},n=function(e,t){for(var n=[],r=0;r<e;r++){for(var a=[],c=0;c<t;c++){var i=[];i.push("".concat(String.fromCharCode(65+r)).concat(c+1),0),a.push(i)}n.push(a)}return n}(10,10),r=[];function a(e,t){this.x=e,this.y=t}var c=[],i=function e(t,n){for(var r=[],c=function(e){var t=10-e;return Math.floor(Math.random()*t)+1}(t),i=Math.floor(Math.random()*n),u=Math.round(Math.random()),o=function(e){return e>.5?0:1}(u),l=0;l<t;l++){var f=[c+l,i];r.push(new a(f[u],f[o]))}return!0===s(c,i,t,u)?e(t,n):r},u=function(){for(var t=[],n=0;n<e.length;n++){var a=e[n][0],c=e[n][1],u=i(c,10);r.push.apply(r,Object(m.a)(u));var s=v(a,c);t.push({ship:s,pos:u})}return t},s=function(e,t,n,a){return 0!==r.length&&r.some((function(r){return 0===a?r.x>=e&&r.x<=e+n&&r.y===t:r.y>=e&&r.y<=e+n&&r.x===t}))},o=u(),f=o.length,d=function(e){"sunk"===e.ship.getCurrentState()&&(f-=1)},h=function(e,t,n){var a,c=Object(l.a)(n);try{for(c.s();!(a=c.n()).done;){var i,u=a.value,s=Object(l.a)(u.pos);try{for(s.s();!(i=s.n()).done;){var o=i.value;if(o.x===e&&o.y===t)return u.ship.hit(),d(u),p(r,e,t),!1}}catch(f){s.e(f)}finally{s.f()}}}catch(f){c.e(f)}finally{c.f()}return!0},p=function(e,n,r){e.forEach((function(a,c){if(a.x===n&&a.y===r){var i,u=e.splice(c,1);return t=u[0],(i=[]).concat.apply(i,Object(m.a)(u))}}))};return{shipsOnTheBoard:o,addShipsToTheBoard:u,board:n,resetArray:function(e){for(;e.length>0;)e.pop()},resetBoard:function(){n.map((function(e){e.map((function(e){e[1]=0}))}))},currentTotalShips:f,missedAtks:c,receiveAttack:function(e,t,r){e>10&&t>10||(n[e][t][1]||(n[e][t][1]=1-n[e][t][1],!0===h(e,t,r)&&c.push({x:e,y:t})))},occupiedPos:r,isShipGotHit:h,getRecentCoordinate:function(){return t},getOccupiedPos:function(){return r},getCurrentTotalShips:function(){return f}}}function O(e,t,n,r,a,c,i,u,s,o){var l,f,d=Math.floor(Math.random()*e.length-1),h=function(e,t){if(0===t.length)return!1;if(!Array.isArray(t[0])){var n=function(e,n){return e[0]===t[0]+n},r=function(e,n){return e[1]===t[1]+n};return e.some((function(e){return n(e,1)&&r(e,0)||n(e,-1)&&r(e,0)||n(e,0)&&r(e,1)||n(e,0)&&r(e,-1)}))}for(var a=function(n){var r=function(e,r){return e[0]===t[n][0]+r},a=function(e,r){return e[1]===t[n][1]+r};if(e.some((function(e){return r(e,1)&&a(e,0)||r(e,-1)&&a(e,0)||r(e,0)&&a(e,1)||r(e,0)&&a(e,-1)})))return{v:!0};t.splice(n,1)},c=t.length-1;c>=0;c--){var i=a(c);if("object"===typeof i)return i.v}},p=function(e,n,a){if(null===a)return d;var c=n.target,i=n.axis,u=a?r[r.length-1]:t,s=e.findIndex((function(e){return"y"===i?e[1]===u[1]+c&&e[0]===u[0]:e[0]===u[0]+c&&e[1]===u[1]}));return-1===s?b(e):s},b=function(n){var a=!1;h(e,t)?a=!1:h(e,r)?a=!0:r.length||(a=null);var i=function(e){var t=Math.floor(Math.random()*e.length);return e.splice(t,1)}(c);return p.apply(void 0,[n].concat(Object(m.a)(i),[a]))};function j(){0===c.length&&a(t),i([{target:1,axis:"x"},{target:-1,axis:"x"},{target:1,axis:"y"},{target:-1,axis:"y"}])}return s&&(n(null),o(!s),j()),function(){if(null!==t){var n=b(e);f=e.splice(n,1)}else f=e.splice(d,1)}(),function(){if(null===t&&u.some((function(e){return e.x===f[0][0]&&e.y===f[0][1]})))n.apply(void 0,Object(m.a)(f));else if(null!==t&&u.some((function(e){return e.x===f[0][0]&&e.y===f[0][1]}))){var e=r;e.push.apply(e,Object(m.a)(f)),a(e)}j(),a(r)}(),(l=[]).concat.apply(l,Object(m.a)(f))}function y(e,t,n,r){var a=e,c=t,i=r,u=c?"Player":"AI",s=n,o=g(),l=17,f=function(e){for(var t=[],n=0;n<e;n++)for(var r=0;r<e;r++)t.push([n,r]);return t},d=f(10),h=!1;function p(e){h=e}var b=null,j=[];function v(e){b=e}function y(e){j=e}var x=[{target:1,axis:"x"},{target:-1,axis:"x"},{target:1,axis:"y"},{target:-1,axis:"y"}];function k(e){x=e}return{gameboard:o,turn:a,togglePlayerTurn:function(e){return!e},aiMove:function(e){if(0!==e.length){var t;if(2==s)return O(e,b,v,j,y,x,k,l,h,p);var n=e.splice((r=e.length-1,Math.floor(Math.random()*r)),1);return(t=[]).concat.apply(t,Object(m.a)(n))}var r},aiLegalAtks:d,recentSunk:h,opponentOccupiedPosLeft:l,selectedAtk:function(e,t){return[e,t]},isWinner:!1,isHuman:c,displayName:u,toggleLegality:function(e,t){var n=d.findIndex((function(n){return n[0]===e&n[1]===t}));d.splice(n,1)},refillLegalAtks:function(){return f(10)},playerNum:i,getAiLegalAtks:function(){return d},setAiLegalAtks:function(e){d=e},setOpponentOccupiedPosLeft:function(e){l=e},setRecentSunk:p}}var x=y(!0,!0,1,1),k=y(!1,!1,1,2);function A(){return(A=Object(f.a)(h.a.mark((function e(t,n,r){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0==t?(x=y(!0,!0,null,1),k=y(!1,!0,null,2),x.displayName="Player 1",k.displayName="Player 2"):1==t?(x=y(!0,!0,null,1),k=y(!1,!1,r,2),x.displayName="Player",k.displayName="AI"):(x=y(!0,!1,n,1),k=y(!1,!1,r,2),x.displayName="AI 1",k.displayName="AI 2");case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(e,t){e.turn=e.togglePlayerTurn(e.turn),t.turn=t.togglePlayerTurn(t.turn)},S=function(e,t){0==e.gameboard.getOccupiedPos().length?t.isWinner=!0:0==t.gameboard.getOccupiedPos().length&&(e.isWinner=!0)},w=function(e,t){C(e,t),C(t,e),S(e,t),N(e,t)},C=function(e,t){if(e.turn){e.setOpponentOccupiedPosLeft(t.gameboard.getOccupiedPos());var n=t.gameboard.getCurrentTotalShips(),r=e.aiMove(e.aiLegalAtks),a=t.gameboard.shipsOnTheBoard;t.gameboard.receiveAttack(r[0],r[1],a),n!==t.gameboard.getCurrentTotalShips()&&e.setRecentSunk(!0)}},P=function(e){var t=e.gameboard;t.resetArray(t.occupiedPos),t.shipsOnTheBoard=t.addShipsToTheBoard()},T=function(e){P(e),e.isWinner&&(e.isWinner=!1),e.gameboard.resetBoard();var t=e.refillLegalAtks();e.isHuman?e.setAiLegalAtks(t):e.aiLegalAtks=t};function H(){var e={},t=1;this.add=function(n){for(var r,a=arguments.length,c=new Array(a>1?a-1:0),i=1;i<a;i++)c[i-1]=arguments[i];(r=n.addEventListener||n.add||n.addListener).call.apply(r,[n].concat(c));var u=t++;if(e[u]={elem:n,args:c},c.length<2)throw new Error("too few args");return u},this.remove=function(t){var n=e[t];if(n){var r;delete n[t];var a=n.elem;(r=a.removeEventListener||a.removeListener).call.apply(r,[a].concat(Object(m.a)(n.args)))}},this.removeAll=function(){var t=e;e={},Object.keys(t).forEach((function(e){var n,r=t[e];if(r.args<2)throw new Error("too few args");var a=r.elem;(n=a.removeEventListener||a.removeListener).call.apply(n,[a].concat(Object(m.a)(r.args)))}))}}function E(e){var t=e.gamemode,n=(e.difficulty,window.innerWidth),a=n<600?.6*n:.2*n,c=Object(r.useState)(x),i=Object(u.a)(c,1)[0],s=Object(r.useState)(k),o=Object(u.a)(s,1)[0],d=Object(r.useState)([]),m=Object(u.a)(d,2),v=m[0],g=m[1],O=Object(r.useState)(!1),y=Object(u.a)(O,2),A=y[0],C=y[1],E=Object(r.useState)(!1),L=Object(u.a)(E,2),B=L[0],I=L[1],M=Object(r.useState)(!1),R=Object(u.a)(M,2),D=R[0],W=R[1],G=Object(r.useState)({turn:1,isHuman:x.isHuman}),z=Object(u.a)(G,2),J=z[0],V=z[1],X=Object(r.useState)(0),Y=Object(u.a)(X,2),q=Y[0],F=Y[1],K=new H,Q=Object(r.useRef)(null),U=Object(r.useRef)(null),Z=Object(r.useState)(!0),$=Object(u.a)(Z,2),_=$[0],ee=$[1],te=Object(r.useState)(!0),ne=Object(u.a)(te,2),re=ne[0],ae=ne[1],ce=Object(r.useState)(null),ie=Object(u.a)(ce,2),ue=ie[0],se=ie[1],oe=Object(r.useState)(null),le=Object(u.a)(oe,2),fe=le[0],de=le[1],he=function(){B||0!==t.value||(ee(!1),ae(!1)),I(!B),g(["The game has started..."])},pe=function(){W(!D)};function be(){return new Promise((function(e){setTimeout((function(){T(i),T(o),e("resolved")}),200)}))}var je=function(){I(!B),C(!1),se(null),V({turn:1,isHuman:i.isHuman}),K.removeAll()};function me(){return ve.apply(this,arguments)}function ve(){return(ve=Object(f.a)(h.a.mark((function e(){var t,n,r,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=Q.current,n=U.current,r=t.getContext("2d"),c=n.getContext("2d"),r.clearRect(0,0,t.width,t.height),c.clearRect(0,0,n.width,n.height),!B){e.next=13;break}return i.turn||N(i,o),e.next=10,be();case 10:ke(r,a,i),ke(c,a,o),je();case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ge=function(e){var t=Q.current,n=U.current,r=t.getContext("2d"),c=n.getContext("2d");if("randomize-p1"===e.target.id)return P(i),void ke(r,a,i);P(o),ke(c,a,o)},Oe=function(e){e.target.id.includes("1")?ee(!_):ae(!re)},ye=function(e,t,n,r){n.fillStyle="rgb(7,67,114)",n.fillRect(e*r,t*r,r,r),n.strokeStyle="rgb(7,100,176)",n.strokeRect(e*r,t*r,r,r)},xe=function(e,t,n,r,a,c){n.fillStyle="rgb(224,224,224)",n.strokeStyle="rgb(34,34,34)";for(var i=0;i<a;i++)0===c?n.fillRect(e*r,t*r,r,r*a):n.fillRect(e*r,t*r,r*a,r);0===c?n.strokeRect(e*r,t*r,r,r*a):n.strokeRect(e*r,t*r,r*a,r)},ke=function(e,t,n){var r=.1*t,a=n.gameboard.shipsOnTheBoard,c=n.gameboard.getOccupiedPos();n.gameboard.board.forEach((function(t,i){t.forEach((function(t,u){(_||!0!==n.turn)&&(re||!1!==n.turn)&&n.isHuman&&1===c.filter((function(e){return e.x===i&&e.y===u})).length?Ae(a,u,i,e,r):ye(u,i,e,r)}))}))},Ae=function(e,t,n,r,a){var c,i=Object(l.a)(e);try{for(i.s();!(c=i.n()).done;){var u=c.value;u.pos[0].x===n&&u.pos[0].y===t&&(u.pos[0].x===n&&u.pos[1].x===n?xe(t,n,r,a,u.pos.length,1):xe(t,n,r,a,u.pos.length,0))}}catch(s){i.e(s)}finally{i.f()}},Ne=function(e,t,n){var r=.1*t,a=n.gameboard.board,c=n.gameboard.getRecentCoordinate();a.forEach((function(t,n){t.forEach((function(t,a){1===t[1]&&(de(t[0]),c.x===n&&c.y===a?(se(2),Se(a+1,n+1,e,r,!0),we(a+1,n+1,e,r,!0)):(se(3),Se(a+1,n+1,e,r,!1),we(a+1,n+1,e,r,!1)),t[1]=2)}))}))},Se=function(e,t,n,r,a){n.beginPath(),n.lineWidth=2,n.moveTo(e*r-r*(3/4),t*r-r*(3/4)),n.lineTo(e*r-r/4,t*r-r/4),n.moveTo(e*r-r/4,t*r-r*(3/4)),n.lineTo(e*r-r*(3/4),t*r-r/4),n.strokeStyle=Ce(a),n.stroke()},we=function(e,t,n,r,a){var c=e*r-r+r/2,i=t*r-r+r/2,u=Math.PI+Math.PI*e/2;n.beginPath(),n.lineWidth=2,n.arc(c,i,r/3,0,u),n.strokeStyle=Ce(a),n.stroke()},Ce=function(e){return e?"red":"rgb(77,166,215)"},Pe=function(e,t,n,r){return Object(p.jsx)("div",{className:"base-container",children:Object(p.jsxs)("div",{className:"canvas-container",children:[Te(r),Object(p.jsx)("canvas",{ref:e,className:"cv",id:n,width:"".concat(t,"px"),height:"".concat(t,"px")}),!B&&r.isHuman?Ee(n):null]})})},Te=function(e){return Object(p.jsx)("div",{className:"player-resource-container",children:Object(p.jsx)("p",{children:e.displayName})})},He=function(){return A?Object(p.jsx)("p",{className:n>500?"display-victory":"mobile-display-victory",children:i.isWinner?"".concat(i.displayName," wins!!"):"".concat(o.displayName," wins!!")}):Object(p.jsx)("p",{className:n>500?"display-turn":"mobile-display-turn",children:i.turn?"".concat(i.displayName," turn"):"".concat(o.displayName," turn")})},Ee=function(e){return Object(p.jsx)("div",{className:"button-container",children:Object(p.jsxs)("div",{id:"p1-bottom-side",children:[Object(p.jsx)("button",{className:"in-game-btn",id:"cv1"===e?"randomize-p1":"randomize-p2",onClick:ge,children:"Randomize"}),Object(p.jsx)("button",{className:"in-game-btn",id:"cv1"===e?"tglVsb-p1":"tglVsb-p2",onClick:Oe,children:"Toggle visibility"})]})})};return Object(r.useEffect)((function(){var e=Q.current,t=U.current,n=e.getContext("2d"),r=t.getContext("2d");ke(n,a,i),ke(r,a,o)}),[_,re]),Object(r.useEffect)((function(){var e=Q.current,t=U.current,n=e.getContext("2d"),r=t.getContext("2d"),c=.1*a,u=function(e,t,n,r){var a=n.getBoundingClientRect(),i=r.clientX-a.left,u=r.clientY-a.top;return function(e,t,n,r){if(!e.getAiLegalAtks().some((function(e){return e[0]==n&&e[1]==r})))return!0;var a=t.gameboard.shipsOnTheBoard;return e.toggleLegality(n,r),t.gameboard.receiveAttack(r,n,a),S(x,k),N(x,k),!1}(e,t,Math.round((i-c/2)/c),Math.round((u-c/2)/c))},s=function(e,t,n,r){e.turn&&B&&K.add(n,"mousedown",(function c(i){if(u(e,t,n,i))return F(q+1),void n.removeEventListener("mousedown",c);Ne(r,a,t),V({turn:t.playerNum,isHuman:t.isHuman}),n.removeEventListener("mousedown",c)}))},l=function(){s(i,o,t,r),s(o,i,e,n)},d=function(){i.turn?(w(i,o),Ne(r,a,o),V({turn:o.playerNum,isHuman:o.isHuman})):o.turn&&(w(i,o),Ne(n,a,i),V({turn:i.playerNum,isHuman:i.isHuman}))};function p(e){return b.apply(this,arguments)}function b(){return(b=Object(f.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout((function(){d()}),t),e.abrupt("return");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(f.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i.isWinner&&!o.isWinner){e.next=3;break}return C(!0),e.abrupt("return");case 3:if(J.isHuman){e.next=7;break}return e.next=6,p(1100);case 6:return e.abrupt("return");case 7:return l(),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return B&&!A&&function(){j.apply(this,arguments)}(),function(){clearTimeout(p)}}),[J,B,q]),Object(p.jsxs)("div",{id:"Battle",children:[Object(p.jsxs)("div",{id:"upper-container",children:[Object(p.jsx)(b,{}),Object(p.jsx)("div",{id:"instructions-wrapper",children:A?Object(p.jsx)("span",{children:"Game ended"}):(i.isHuman||o.isHuman)&&B?Object(p.jsx)("span",{children:"Destroy the enemy's ships"}):!i.isHuman&&!o.isHuman||B?2!=t.value||B?Object(p.jsx)("span",{children:"Get some popcorn"}):Object(p.jsx)("span",{children:"Start the battle"}):Object(p.jsx)("span",{children:"Place the ships"})}),Object(p.jsxs)("div",{id:"upper-button-container",children:[Object(p.jsx)("button",{onClick:B?me:he,children:B?Object(p.jsx)("i",{className:"fas fa-redo-alt"}):Object(p.jsx)("i",{className:"fas fa-play"})}),Object(p.jsx)("button",{id:"outcome-visibility-button",onClick:pe,children:D?Object(p.jsx)("i",{className:"fas fa-eye"}):Object(p.jsx)("i",{className:"fas fa-eye-slash"})})]})]}),(null!==i||null!==o)&&n<=500?He():null,Object(p.jsxs)("div",{id:"main-battle",children:[Pe(Q,a,"cv1",i),(null!==i||null!==o)&&n>500?He():null,Pe(U,a,"cv2",o)]}),D?Object(p.jsx)(j,{p:i.turn,currentPlayer:i.turn?o.displayName:i.displayName,categoryNum:ue,coordinate:fe,outcomesArr:v,setOutcomesArr:g}):null]})}var L=n(16);function B(e){var t=e.setGamemode,n=e.gamemode,r=e.difficulty,a=e.setDifficulty,c=function(e){e.target.id.includes(2)||1==n.value?a(Object(L.a)(Object(L.a)({},r),{},{value:e.target.value,valB:e.target.value})):a(Object(L.a)(Object(L.a)({},r),{},{value:e.target.value,valA:e.target.value}))};return Object(p.jsxs)("div",{id:"Settings",children:[Object(p.jsx)("div",{className:"custom-select",children:Object(p.jsxs)("select",{name:"gamemodes",value:n.value,onChange:function(e){t({value:e.target.value})},children:[Object(p.jsx)("option",{value:"0",children:"PvP"}),Object(p.jsx)("option",{value:"1",children:"PvAI"}),Object(p.jsx)("option",{value:"2",children:"AIvAI"})]})}),2==n.value?Object(p.jsx)(I,{gamemode:n,difficulty:r,id:1,handleDifficultyChange:c}):null,0!=n.value?Object(p.jsx)(I,{gamemode:n,difficulty:r,id:2,handleDifficultyChange:c}):null]})}var I=function(e){var t=e.gamemode,n=e.difficulty,r=e.id,a=e.handleDifficultyChange;return Object(p.jsx)("div",{className:"custom-select",children:Object(p.jsxs)("select",{name:"diff",value:1==t||2==r?n.valB:n.valA,id:"ai-diff".concat(r),onChange:a,children:[Object(p.jsx)("option",{value:"1",children:1==t.value||1==r?"AI: Easy":"AI 2: Easy"}),Object(p.jsx)("option",{value:"2",children:1==t.value||1==r?"AI: Hard":"AI 2: Hard"})]})})};function M(){var e=Object(r.useState)({value:"0"}),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)({value:"1",valA:"1",valB:"1"}),i=Object(u.a)(c,2),o=i[0],l=i[1];return Object(p.jsx)(s.a,{children:Object(p.jsx)(R,{gamemode:n,setGamemode:a,difficulty:o,setDifficulty:l})})}function R(e){var t=e.gamemode,n=e.setGamemode,r=e.difficulty,a=e.setDifficulty;return Object(p.jsxs)(o.c,{children:[Object(p.jsx)(o.a,{exact:!0,path:"/react-battleship/",children:Object(p.jsx)(D,{setGamemode:n,gamemode:t,difficulty:r,setDifficulty:a})}),Object(p.jsx)(o.a,{exact:!0,path:"/react-battleship/battle",children:Object(p.jsx)(E,{gamemode:t,difficulty:r})})]})}function D(e){var t=e.setGamemode,n=e.gamemode,a=e.difficulty,c=e.setDifficulty;return Object(r.useEffect)((function(){document.getElementById("prf").onclick=function(){window.location.href="https://github.com/bvrbryn445s"}})),Object(r.useEffect)((function(){!function(e,t){!function(e,t,n){A.apply(this,arguments)}(parseInt(e.value),parseInt(t.valA),parseInt(t.valB))}(n,a)}),[n,a]),Object(p.jsxs)("div",{id:"menu",children:[Object(p.jsxs)("div",{className:"title-wrapper",children:[Object(p.jsx)("h1",{id:"title",className:"title",children:"Battleship"}),Object(p.jsxs)("div",{className:"author-wrapper",children:[Object(p.jsx)("h2",{className:"divider",children:" | "}),Object(p.jsx)("h5",{className:"author",children:"Created by B.B. Ant"}),Object(p.jsx)("div",{className:"frame",children:Object(p.jsx)("img",{id:"prf",className:"prof",src:"https://avatars.githubusercontent.com/u/96958013?v=4",alt:"profile"})})]})]}),Object(p.jsx)("nav",{id:"nav-menu",children:Object(p.jsx)("ul",{children:Object(p.jsx)("div",{children:Object(p.jsx)("li",{children:Object(p.jsx)(s.b,{to:"/react-battleship/battle",children:"Start Game"})})})})}),Object(p.jsx)(B,{setGamemode:t,gamemode:n,difficulty:a,setDifficulty:c})]})}var W=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(M,{})})};i.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(W,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.51793579.chunk.js.map