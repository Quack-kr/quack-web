import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { socialSignin, socialSignup } from "../../apis/auth";
import axios from "axios";

const KakaoCallbackPage = () => {
  const navigate = useNavigate();

  const K_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const K_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  //code -> id_token 변환
  const fetchKakaoToken = async (code: string) => {
    const res = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        client_id: K_REST_API_KEY,
        redirect_uri: K_REDIRECT_URI,
        code: code,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data.id_token;
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    let id_token: string | null = null;

    const handleKakaoLogin = async () => {
      if (!code) {
        alert("카카오 인증 코드가 없습니다.");
        return;
      }

      try {
        //code를 id_token으로 변환
        const id_token = await fetchKakaoToken(code);

        if (!id_token) {
          alert("id_token을 가져오지 못했습니다다.");
          return;
        }

        const { accessToken, user } = await socialSignin({
          id_token,
          provider: "kakao",
        });

        if (!accessToken) {
          alert("accessToken이 존재하지 않습니다.");
          return;
        }

        localStorage.setItem("accessToken", accessToken);
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
        }

        navigate("/management");
      }
      catch (err: any) {
        if (axios.isAxiosError(err)) {
          const status = err.response?.status;

          if (status === 400 && id_token) {
            //회원가입이 필요한 상황
            try {
              const { accessToken, user } = await socialSignup({
                id_token,
                provider: "kakao",
              });

              localStorage.setItem("accessToken", accessToken);
              if (user) {
                localStorage.setItem("user", JSON.stringify(user));
              }

              navigate("/management");
            } catch (registerError) {
              console.error("회원가입 실패", registerError);
              alert("회원가입에 실패했습니다.");
              navigate("/management/signin");
            }
          } else if (err.code === "ECONNABORTED") {
            alert(
              "서버 응답이 없습니다 (시간 초과). 나중에 다시 시도해 주세요."
            );
          } else if (status) {
            alert(`요청 실패: ${status} ${err.response?.statusText}`);
          } else {
            alert("네트워크 오류가 발생했습니다.");
          }
        } else {
          alert("알 수 없는 오류가 발생했습니다.");
        }
      }

    };

    handleKakaoLogin();
  }, [navigate]);

  return <div>카카오 로그인 처리 중입니다...</div>;
};

export default KakaoCallbackPage;
