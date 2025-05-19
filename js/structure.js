// 동작 원리.
// 'DOMContentLoaded' : 1번째 매개변수 : 해당 문서가 로드가 되면
// , function () { } :2번째 매개변수 : 이 함수가 실행됨. 
//
document.addEventListener('DOMContentLoaded', function () {
    // 토글 버튼 요소 가리킴
    const toggleBtn = document.getElementById('menuToggle');
    // 탑 메뉴 요소 가리킴
    const topMenu = document.getElementById('topMenu');
    // 
    toggleBtn.addEventListener('click', function () {
        topMenu.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('main > form');
    const header = document.querySelector('header');
    let isMoved = false;

    function updateLoginForm() {
        if(window.innerWidth <= 768) {
            // 768px 이하: 폼 숨기기
            loginForm.style.display = 'none';
            if(isMoved) {
                const main = document.querySelector('main');
                main.appendChild(loginForm);
                isMoved = false;
            }
        } 
        else if(window.innerWidth > 768 && window.innerWidth <= 1024) {
            // 768~1024px: 폼 표시 및 헤더 아래 이동
            loginForm.style.display = '';
            if(!isMoved) {
                header.insertAdjacentElement('afterend', loginForm);
                isMoved = true;
            }
        }
        else {
            // 1024px 초과: 원래 위치 복원
            loginForm.style.display = '';
            if(isMoved) {
                const main = document.querySelector('main');
                main.appendChild(loginForm);
                isMoved = false;
            }
        }
    }

    updateLoginForm();
    window.addEventListener('resize', updateLoginForm);
});