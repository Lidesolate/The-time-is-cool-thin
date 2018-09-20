// 编写代码把Ueditor的pre格式转成Prismjs兼容的格式。我这里的具体做法是，找到页面中所有带有class属性的pre标签，
// 用正则表达式提取出接在brush:后面的语言字符。然后把代码放置在一个code元素里边，给code元素添加一个language-xxx的class，
// 用code元素作为参数调用Prism.highlightElement。


const $codepre = $("pre[class]");
if($codepre.length>0){
  for(const i = 0;i<$codepre.length;i++){
    const item = $codepre.eq(i);
    const language = "";
    item.attr("class").replace(/brush:([^;]+)/,function(a,b){
      language = b;
    });
    if(language){
      const codehtml = item.html();
      const code = $("<code>");
      code.attr("class","language-"+language);
      code.html(codehtml);
      item.html(code);
      Prism.highlightElement(code[0]);
    }
  }
}