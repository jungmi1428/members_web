const ver = navigator.userAgent;
console.log(ver);


const isIE = /chromn/i.test(ver);
console.log(isIE);

if(isIE) {
  alert('익스플로러 브라우저로 접속하셨습니다. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요!!')
}



// i 라는 것은 대소문자 구분없다.
