# 야코레드 RedKorea — 프로젝트 문서

## 프로젝트 개요
한국 최대 주소모음·링크모음 포털 **야코레드(RedKorea)**의 정적 웹사이트입니다.
원본은 HTTrack으로 스크랩된 Wix 사이트였으며, 모든 Wix 블로트 및 HTTrack 주석을 제거하고
완전히 재작성하였습니다.

## 기술 스택
- **서버**: Python HTTP 서버 (포트 5000)
- **프론트엔드**: 순수 HTML5 + CSS3 + Vanilla JS
- **폰트**: Noto Sans KR (Google Fonts)
- **배포**: Replit 정적 서비스

## 디자인 시스템
- **배경색 (헤더/히어로)**: `#1a1a2e` (다크 네이비)
- **강조색 (CTA/링크)**: `#c0392b` (레드)
- **본문 배경**: `#ffffff` (화이트)
- **공유 스타일시트**: `assets/style.css`
- **공유 스크립트**: `assets/main.js` (모바일 내비 토글)

## 파일 구조

```
/
├── index.html              # 홈페이지
├── yako.html               # 야코 주소 안내
├── yatv.html               # 야티브이 주소 안내
├── yugigu.html             # 유기구 주소 안내
├── bypass.html             # 우회 접속 방법
├── link.html               # 전체 링크모음
├── contact.html            # 연락처
├── blog.html               # 블로그 (1페이지)
├── 주소월드.html            # 주소월드 안내
├── jusobox.html            # 주소박스 안내
├── jusoking.html           # 주소킹 안내
├── jusomoa.html            # 주소모아 안내
├── sitemap.xml             # 사이트맵
├── blog-feed.xml           # RSS 피드
├── assets/
│   ├── style.css           # 공유 스타일시트
│   └── main.js             # 공유 스크립트
├── images/
│   └── logo.svg            # 사이트 로고
├── post/                   # 블로그 포스트 (11개)
│   ├── 야코레드-접속-막힘-해결-방법-및-우회-접속-가이드.html
│   ├── 야코-주소모음-링크모음-사이트모음-원하는-웹사이트를-한-곳에서.html
│   ├── 주소모음의-필요성-왜-지금-반드시-필요한가.html
│   ├── 가짜-링크모음-사이트-구별법-안전하게-주소모음-이용하는-방법.html
│   ├── 웹툰-주소요-최신-웹툰-링크-찾는-가장-쉬운-방법.html
│   ├── 야코레드-다운로드-방법-쉽고-빠르게-저장하는-법-총정리.html
│   ├── 야코레드-대체-사이트-추천-안전하고-편리한-플랫폼-총정리.html
│   ├── 야코레드-바로가기-최신-주소-안내-페이지.html
│   ├── 레드코리아-최신주소-안내-페이지.html
│   ├── 야코-최신-주소-모음-2025년-실시간-업데이트-차단-우회-방법.html
│   └── 야코-여기여-순위-1등-인기-사이트의-비결과-이용-방법-총정리.html
└── blog/
    ├── page/
    │   ├── 2.html          # 블로그 2페이지
    │   └── 3.html          # 블로그 3페이지
    └── hashtags/           # 해시태그 색인 페이지 (24개)
        ├── 야코레드우회방법.html
        ├── 야코레드접속막힘.html
        ├── 주소모음사이트추천.html
        ├── 야코레드DNS변경.html
        ├── 야코레드VPN접속.html
        ├── VPN없이접속가능한사이트.html
        ├── 고화질스트리밍사이트추천.html
        ├── 인기사이트순위1등.html
        ├── 야코레드대체사이트.html
        ├── 링크모음정리하는방법.html
        ├── 야코레드사이트차단해결.html
        ├── 야코레드접속차단해결.html
        ├── 야코레드다운로드방법.html
        ├── 야코레드모바일다운로드.html
        ├── 온라인다운로드사이트추천.html
        ├── 브라우저확장프로그램다운로드.html
        ├── 야코레드영상저장.html
        ├── 북마크정리하는법.html
        ├── 사이트모음만들기.html
        ├── 빠른업데이트사이트.html
        ├── 빠른웹사이트관리팁.html
        ├── 야코여기여접속방법.html
        ├── 야코여기여최신정보.html
        └── 야코여기여순위.html

## SEO 구현 사항
모든 페이지에 적용:
- `<title>`, `<meta description>`, `<meta keywords>`
- `<link rel="canonical">`
- Open Graph 태그 (`og:title`, `og:description`, `og:type`, `og:locale`)
- Schema.org JSON-LD 구조화 데이터 (Article, Organization, WebSite)
- `lang="ko"` 속성
- 브레드크럼 내비게이션 (접근성 + SEO)

## 워크플로우
- **이름**: Start application
- **명령어**: `python3 -m http.server 5000`
- **포트**: 5000
