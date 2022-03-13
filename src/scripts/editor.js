const html = document.getElementById('html');
const css = document.getElementById('css');
const js = document.getElementById('js');
const code = document.getElementById('code').contentWindow.document;
const saveBtn = document.getElementById('saveBtn');
const runBtn = document.getElementById('runBtn');
const miniBtn = document.getElementById('miniBtn');
const textareaContent = document.querySelector('.textarea-code');
const codeIframe = document.getElementById('code');

const showCodePreview = () => {
    code.open();
    code.writeln(
        `${html.value}<style>${css.value}</style>` +
        `<script>${js.value} </script>`,
    );
    code.close();
    saveBtn.classList.remove("active");
    runBtn.classList.remove("active");
    localStorage.setItem("codeHtml", `${html.value}<style>${css.value}</style>` +
        `<script>${js.value} </script>`);
}

const compile = (e) => {
    document.addEventListener("keydown", function(e) {
        if (e.keyCode === 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            e.preventDefault();
            showCodePreview();
        }
        if ((html.value || css.value || js.value).length > 0) {
            saveBtn.classList.add("active");
            runBtn.classList.add("active");
        } else {
            saveBtn.classList.remove("active");
            runBtn.classList.remove("active");
        }
    })
};

const minimizeContent = () => {
    textareaContent.classList.toggle("minimize");
    codeIframe.classList.toggle("active");
}

saveBtn.addEventListener("click", showCodePreview);
runBtn.addEventListener("click", showCodePreview);
miniBtn.addEventListener("click", minimizeContent);

compile();