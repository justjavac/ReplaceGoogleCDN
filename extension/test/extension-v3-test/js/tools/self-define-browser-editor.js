let self_browser_editor=()=>{

    let newWindow = window.open("","_blank");
// id.document.body.innerHTML="<div >ABCD</div>";

    let template=`
    <meta charset="utf-8"/>
    <meta name="description" content="自定义浏览器编辑器">
    <meta name="keywords" content="HTML,CSS,XML,JavaScript">
    <meta name="author" content="jingjingxyk">
    <meta charset="utf-8">
    <style>
        body{
            /*
            background: rgb(40,41,35);
            color:rgb(248,248,242);
        
            */
             background: #f8f8f8;
             color:#31c27c;
            
            font-family: Monaco,bitstream vera sans mono,lucida console,Terminal,monospace;
        }
        .content,article{
            font-size: 1.1rem;
            line-height: 1.2rem;
            min-height: 800px;
        }
       footer{
           position: fixed;
           right: 0;
           bottom: 0;
        }
    </style>
    <article class="content" contenteditable="true" autofocus="autofocus">
    这里
   </article>
    <footer>
     Copyright © 2012-<span class="current-year"></span>
    </footer>
        <script type="application/javascript">
          document.documentElement.setAttribute("contenteditable","true");
          document.documentElement.setAttribute("charset","utf-8");
          document.querySelector('.content').focus();
          document.querySelector('.current-year').innerHTML=(new Date()).getFullYear();
    </script>
`;


    newWindow.document.write(template);
// newWindow.document.body.innerHTML=template;
    newWindow.document.title="浏览器自带编辑器";
    newWindow.focus();
}
export   { self_browser_editor }