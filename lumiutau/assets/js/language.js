function redirectToLanguagePage() {
    // 사용자의 브라우저 언어 설정을 가져옵니다.
    var userLang = navigator.language || navigator.userLanguage; 

    // 언어 코드를 기반으로 적절한 페이지 URL을 결정합니다.
    var pageUrl = '';
	if (userLang.includes('ko')) { // 한국어
        pageUrl = 'index_ko.html';
    }
	else if (userLang.includes('ja')) { // 일본어
        pageUrl = 'index_ja.html';
    }

    // 페이지 URL이 설정되어 있으면 해당 페이지로 리디렉션합니다.
    if (pageUrl) {
        window.location.href = pageUrl;
    }
}

// 페이지 로드 시 해당 함수를 실행합니다.
redirectToLanguagePage();