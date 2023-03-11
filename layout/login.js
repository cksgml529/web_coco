const userID = document.querySelector("#userID");
const userPW = document.querySelector("#userPW");
const search = document.querySelectorAll(".none");


search.forEach((item) => {
    item.addEventListener("click",()=>alert('현재 작업중입니다.'));
});

window.alert("현재 아이디:portpolio, 비밀번호:1234567으로 동작성 확인 가능합니다.")
// 텍스트 로그인
function userLogin(){
 if(userID.value==="portpolio"&&userPW.value==="1234567"){ 
    alert("로그인 되었습니다.");
}else if(userID.value!=="portpolio"||userPW.value!=="1234567"){
    alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 확인해주세요.");
}else alert("해당 회원이 존재하지 않습니다. 재확인 해주세요.");
}
const submit = document.querySelector(".submit");
submit.addEventListener("click",userLogin)
   


// 카카오 로그인
const key = 'cd780fc8ec61a6d008c1b5518e5dd55b';
Kakao.init(key);
  function kakaoLogin() {
            window.Kakao.Auth.login({
                scope: 'profile_nickname, profile_image, account_email', 
                success: function(response) {
                    console.log(response) // 로그인 성공하면 받아오는 데이터
                    window.Kakao.API.request({ // 사용자 정보 가져오기 
                        url: '/v2/user/me',
                        success: (res) => {
                            const kakao_account = res.kakao_account;
                            console.log(kakao_account);
                        }
                    });
                    alert('로그인 성공하였습니다.');
                },
                fail: function(error) {
                    console.log(error);
                }
            });
        }
        // 로그아웃
        function kakaoLogout() {
    	if (!Kakao.Auth.getAccessToken()) {
		    alert('현재 로그인 되어있지 않습니다.');
		    return;
	    }
	    Kakao.Auth.logout(function(response) {
    		alert('로그아웃 되었습니다.');
	    });

    };
    // 연결 끊기
         function unlinkApp() {
           Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response) {
          alert("탈퇴 성공하였습니다.");
      },
      fail: function(error) {
          alert('탈퇴 미완료되었습니다. 현상태 지속될 경우 고객센터에 문의바랍니다.');
          console.log(error);
      },
  });
};
