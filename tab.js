(() =>{

    const  $doc = document;
    const $tab = $doc.getElementById("js-tab");
    const $nav =$tab.querySelectorAll('[data-nav ]');
    const $content = $tab.querySelectorAll('[data-content ]');

    console.log($content)


    // 初期化
    const init = () => {
        $content[0].style.display = 'block';
    };
    init ();

    // クリックしたら起こるイベント
    const handleClick = (e) => { 
        e.preventDefault();

        console.log('e',e);

    };

    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index ++;
    }



})();

