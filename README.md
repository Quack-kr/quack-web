## 🕊️ Branch Naming Convention
> "이슈 번호(Issue number)-feat-기능 내용(feature details)" ex) 1-feat-social_login

## 📍 Commit Convention
|**Type**|설명|
|:--:|:--:|
|**Docs** |  문서 작성 및 수정 작업(README 등)  |
|**Add**  |  기능이 아닌 것 생성 및 추가 작업(파일·익스텐션·프로토콜 등)  |
|**Feat**  | 새로운 기능 추가 작업  |
|**Style** |  UI 관련 작업(UI 컴포넌트, Xib 파일, 컬러·폰트 작업 등)  |
|**Fix** |  에러 및 버그 수정, 기능에 대한 수정 작업  |
|**Edit** |  Fix가 아닌 모든 수정 작업(주석, 파일 및 폴더 위치, 코드 스타일 등)  |
|**Del**   | 파일, 에셋 등 삭제 작업  |
|**Set**   | 세팅 관련 작업  |
|**Test**  |  테스트 관련 작업  |

<br />

## 🗂 Folder Architecture
 **|-- comonents  => 공통 컴포넌트 관리 <br />
   |-- store => zustand 관련 모듈들 <br />
   |-- pages  => router 페이지 관리 <br />
   |-- utils => util 파일 관리 <br />
   |-- apis => api 목록들  <br />
   |-- assets => 프로젝트에 쓸 font, image 등 <br />**

## GHCR_PAT
 - API 키 별도 발급 해야함
 - https://github.com/settings/tokens