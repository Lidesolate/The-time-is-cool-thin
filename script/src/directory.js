// const directoryUl = document.querySelector('.directory');
const directoryListLi = document.querySelectorAll('.directory_lists');
const directoryListUl = document.querySelectorAll('.directory_children');

/**
 * 左侧目录显示及其隐藏
 */
function directory() {
    for (let i=0; i< directoryListLi.length; i+=1){
        directoryListLi[i].addEventListener('click',() => {
            event.preventDefault();
            const target = event.target.nextElementSibling;
            if(target.style.display == 'none'){
                target.style.display='block';
            } else{
                target.style.display='none';
            }
        })
    }


}

directory();