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

        const $this = e.target;
        const targetVal = $this.dataset.nav;

        console.log('targetVal',targetVal);

    };

    let index = 0;
    while(index < $nav.length){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index ++;
    }



})();

