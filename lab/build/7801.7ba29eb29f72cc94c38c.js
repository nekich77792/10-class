"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[7801,9991],{7801:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var n=s(1468),i=s(64831),o=s(30810),r=s(93315);const a="text/html-sandboxed";class p extends o.t{constructor(e){super(e),this._bootstrap="",this._inputs=[],this._p5Ready=new r.PromiseDelegate;const{p5Url:t}=e;this._bootstrap=`\n      import('${t}').then(() => {\n        // create the p5 global instance\n        window.__globalP5 = new p5();\n        return Promise.resolve();\n      })\n    `,super.ready.then((()=>{this._eval(this._bootstrap),this._p5Ready.resolve()}))}get ready(){return this._p5Ready.promise}async kernelInfoRequest(){return{implementation:"p5.js",implementation_version:"0.1.0",language_info:{codemirror_mode:{name:"javascript"},file_extension:".js",mimetype:"text/javascript",name:"p5js",nbconvert_exporter:"javascript",pygments_lexer:"javascript",version:"es2017"},protocol_version:"5.3",status:"ok",banner:"A p5.js kernel",help_links:[{text:"p5.js Kernel",url:"https://github.com/jupyterlite/jupyterlite"}]}}async executeRequest(e){const{code:t}=e;if(t.startsWith("%")){const e=await this._magics(t);if(e)return this.publishExecuteResult(e),{status:"ok",execution_count:this.executionCount,user_expressions:{}}}const s=super.executeRequest(e);return this._inputs.push(t),s}async _magics(e){var t,s;if(e.startsWith("%show")){const n=this._inputs.map((e=>`window.eval(\`${e}\`);`)).join("\n"),i=`\n        ${this._bootstrap}.then(() => {\n          ${n}\n          window.__globalP5._start();\n        })\n      `,o=/^%show(?: (.+)\s+(.+))?\s*$/,r=e.match(o),p=null!==(t=null==r?void 0:r[1])&&void 0!==t?t:void 0,l=null!==(s=null==r?void 0:r[2])&&void 0!==s?s:void 0;return{execution_count:this.executionCount,data:{[a]:['<body style="overflow: hidden;">',`<script>${i}<\/script>`,"</body>"].join("\n")},metadata:{[a]:{width:p,height:l}}}}}}const l=[{id:"@jupyterlite/p5-kernel-extension:kernel",autoStart:!0,requires:[i.q],activate:(e,t)=>{const s=n.PageConfig.getOption("p5Url")||"https://cdn.jsdelivr.net/npm/p5@1.3.1/lib/p5.js",i=n.URLExt.isLocal(s)?n.URLExt.join(window.location.origin,s):s;t.register({spec:{name:"p5js",display_name:"p5.js",language:"javascript",argv:[],spec:{argv:[],env:{},display_name:"p5.js",language:"javascript",interrupt_mode:"message",metadata:{}},resources:{"logo-32x32":"TODO","logo-64x64":"/kernelspecs/p5js.png"}},create:async e=>new p({...e,p5Url:i})})}}]}}]);
//# sourceMappingURL=7801.7ba29eb29f72cc94c38c.js.map