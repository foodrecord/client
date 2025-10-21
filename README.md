# FoodRecord Client

> 맛지도 기반 맛집 공유 플랫폼

## 📋 소개

Food Record는 사용자별로 개인화된 맛집 지도를 가지고 다른 사람들과 맛집이나 자신의 지도를 공유할 수 있는 플랫폼입니다. Next.js를 사용해서 추후 SEO 최적화까지 고려해서 진행되었습니다.

## ✨ 주요 기능

- 음식점 검색 및 찜
- 음식점 사진 및 후기 작성 후 내 지도에 저장
- 다른 사람을 검색 후 맛지도 탐색

## 🛠️ 기술 스택

- Next.js
- Typescript
- Tailwind CSS
- Tanstack Query
- Redis
- Zustand

## 📁 프로젝트 구조

```
food-record/
├── app/                    # Next.js App Router 디렉토리
│   ├── api/                # 메인 페이지
│   ├── home/               # 페이지 레이아웃
│   └── ...                 # 그 외 페이지들
├── views/                  # 재사용 가능한 컴포넌트
├── widgets/                # 정적 파일
├── features/               # 스타일 파일
├── entities/               # 유틸리티 함수
├── shared/                 # TypeScript 타입 정의
```
