# ApplyHub 기획문서

## 1. 프로젝트 개요

### 프로젝트명

**ApplyHub**

### 한 줄 소개

ApplyHub는 개발자가 여러 회사에 지원할 때 발생하는 **공고 정보, 자기소개서 문항, 포트폴리오 버전, 지원 상태 관리의 분산 문제**를 해결하기 위한 지원 관리 대시보드입니다.

### 프로젝트 목적

취업 준비 과정에서는 여러 회사의 공고를 동시에 확인하고, 회사별 자기소개서 문항과 포트폴리오 버전을 따로 관리해야 합니다.

하지만 실제로는 공고 URL, 마감일, 기술스택, 지원 상태, 자기소개서 답변, 제출한 포트폴리오 버전이 노션, 메모장, 파일 폴더, 브라우저 북마크 등에 흩어져 관리됩니다.

ApplyHub는 이 문제를 해결하기 위해 지원 정보를 하나의 서비스에서 관리하고, 사용자가 현재 어떤 지원 건에 집중해야 하는지 빠르게 판단할 수 있도록 돕는 것을 목표로 합니다.

---

## 2. 기획 배경

### 문제 정의

개발자 취업 준비 과정에서 지원 회사가 늘어날수록 다음과 같은 문제가 발생합니다.

1. 회사별 공고 URL과 마감일을 따로 관리해야 한다.
2. 자기소개서 문항과 답변이 파일별로 흩어진다.
3. 회사마다 다른 포트폴리오 버전을 제출했는지 기억하기 어렵다.
4. 지원 상태가 작성 중인지, 제출 완료인지, 면접 예정인지 한눈에 파악하기 어렵다.
5. 특정 회사가 요구하는 기술스택을 기준으로 지원 현황을 비교하기 어렵다.

### 해결 방향

ApplyHub는 회사, 지원서, 자기소개서 문항, 기술스택 태그를 관계형 데이터로 분리하여 관리합니다.

사용자는 대시보드에서 전체 지원 현황을 확인하고, 지원 목록에서 상태·기술스택·마감일 기준으로 필터링할 수 있습니다.

또한 지원 상세 페이지에서 공고 정보, 자기소개서 문항, 답변, 포트폴리오 버전, 메모를 함께 관리할 수 있습니다.

---

## 3. 타겟 사용자

### 주요 사용자

취업 준비 중인 신입 개발자 또는 주니어 개발자

### 사용자 상황

- 여러 회사에 동시에 지원하고 있다.
- 회사별 자기소개서 문항을 따로 관리하고 있다.
- 포트폴리오를 회사별로 조금씩 다르게 수정하고 있다.
- 지원 상태와 마감일을 체계적으로 관리하고 싶다.
- 본인이 어떤 기술스택을 요구하는 회사에 많이 지원하고 있는지 확인하고 싶다.

---

## 4. 핵심 가치

ApplyHub의 핵심 가치는 단순한 CRUD가 아니라 **지원 상황을 빠르게 판단할 수 있는 구조**를 제공하는 것입니다.

### 핵심 가치 1. 지원 상태 시각화

작성 중, 제출 완료, 면접 예정, 합격, 불합격 등 지원 상태를 한눈에 확인할 수 있습니다.

### 핵심 가치 2. 마감일 기반 우선순위 관리

마감일이 임박한 지원 건을 대시보드에서 강조하여 사용자가 먼저 처리해야 할 항목을 빠르게 파악할 수 있습니다.

### 핵심 가치 3. 회사별 지원 자료 통합 관리

공고 URL, 기술스택, 자기소개서 문항, 답변, 포트폴리오 버전, 메모를 하나의 상세 페이지에서 관리할 수 있습니다.

### 핵심 가치 4. 기술스택 기반 지원 현황 파악

React, TypeScript, Next.js, Node.js, Docker 등 기술 태그를 기준으로 어떤 역량을 요구하는 회사에 많이 지원하고 있는지 확인할 수 있습니다.

---

# 5. 기능 요구사항

## 5.1 대시보드 기능

### 설명

사용자가 전체 지원 현황을 빠르게 확인할 수 있는 메인 페이지입니다.

### 주요 기능

- 전체 지원 건 수 표시
- 작성 중 지원 건 수 표시
- 제출 완료 지원 건 수 표시
- 면접 예정 지원 건 수 표시
- 마감 임박 지원 건 표시
- 기술스택별 지원 건 수 표시
- 최근 수정된 지원 건 표시

### 예시 데이터

```text
전체 지원: 12건
작성 중: 4건
제출 완료: 5건
면접 예정: 2건
합격: 1건
마감 임박: 3건
```

---

## 5.2 지원 목록 기능

### 설명

등록된 지원 건을 목록 형태로 조회하는 페이지입니다.

### 주요 기능

- 지원 목록 조회
- 회사명 검색
- 지원 상태별 필터
- 기술스택별 필터
- 마감일 기준 정렬
- 최근 수정일 기준 정렬
- 지원 건 삭제
- 지원 상세 페이지 이동

### 목록 항목

```text
회사명
포지션
지원 상태
마감일
기술스택 태그
포트폴리오 버전
최근 수정일
```

---

## 5.3 지원 등록 기능

### 설명

새로운 회사 지원 정보를 등록하는 기능입니다.

### 입력 항목

```text
회사명
서비스 유형
회사 홈페이지 URL
공고 URL
지원 포지션
지원 상태
마감일
기술스택 태그
포트폴리오 버전
메모
```

### 기본 지원 상태

```text
작성 중
```

---

## 5.4 지원 상세 기능

### 설명

하나의 지원 건에 대한 상세 정보를 확인하고 수정하는 페이지입니다.

### 주요 기능

- 회사 정보 확인
- 공고 URL 확인
- 지원 상태 변경
- 마감일 수정
- 포트폴리오 버전 수정
- 메모 수정
- 자기소개서 문항 목록 관리
- 기술스택 태그 관리

---

## 5.5 자기소개서 문항 관리 기능

### 설명

지원 건별 자기소개서 문항과 답변을 관리하는 기능입니다.

### 주요 기능

- 문항 추가
- 문항 수정
- 문항 삭제
- 답변 작성
- 답변 수정
- 글자 수 표시
- 문항 순서 관리

### 예시

```text
문항: 지원동기를 작성해주세요.
답변: ...
글자 수: 684자
```

---

## 5.6 기술스택 태그 기능

### 설명

지원 공고에서 요구하는 기술스택을 태그로 관리하는 기능입니다.

### 주요 기능

- 기술스택 태그 추가
- 지원 건에 기술스택 태그 연결
- 기술스택 기준 필터링
- 기술스택별 지원 건 수 집계

### 예시 태그

```text
React
TypeScript
Next.js
Node.js
Spring
SQL
Docker
Kubernetes
```

---

# 6. 비기능 요구사항

## 6.1 사용성

- 사용자는 지원 현황을 첫 화면에서 바로 파악할 수 있어야 합니다.
- 지원 등록 폼은 복잡하지 않아야 합니다.
- 상태 변경은 상세 페이지에서 빠르게 가능해야 합니다.
- 마감 임박 항목은 시각적으로 구분되어야 합니다.

## 6.2 성능

- 지원 목록 조회는 빠르게 렌더링되어야 합니다.
- 검색, 필터, 정렬은 사용자 입력에 즉각 반응해야 합니다.
- 대시보드 통계는 서버 API를 통해 집계하거나, 클라이언트에서 목록 데이터를 기반으로 계산할 수 있습니다.

## 6.3 유지보수성

- 프론트엔드와 백엔드 책임을 분리합니다.
- API 응답 타입을 TypeScript interface로 관리합니다.
- DB 모델은 Prisma schema로 관리합니다.
- 공통 UI 컴포넌트는 재사용 가능하게 분리합니다.

## 6.4 실행 환경 재현성

- Docker Compose를 사용하여 프론트엔드, 백엔드, 데이터베이스를 한 번에 실행할 수 있어야 합니다.
- README에 실행 방법을 명확히 작성합니다.

---

# 7. 기술 스택

## Frontend

```text
Next.js
TypeScript
Tailwind CSS
TanStack Query
```

### 선택 이유

Next.js는 React 기반의 웹 애플리케이션을 빠르게 구성할 수 있고, 페이지 라우팅과 데이터 로딩 구조를 명확하게 설계할 수 있습니다.

TypeScript는 지원서, 회사, 자기소개서 문항, 기술스택 태그 등 도메인 데이터를 안정적으로 다루기 위해 사용합니다.

TanStack Query는 서버 상태를 관리하고, 지원 목록과 상세 데이터 조회 시 캐싱 및 로딩 상태 관리를 편하게 처리하기 위해 사용합니다.

---

## Backend

```text
Node.js
Express
Prisma
```

### 선택 이유

Node.js와 Express를 사용하여 REST API 서버를 별도로 구성합니다.

Next.js 내부 API Route만 사용하지 않고 백엔드 서버를 분리함으로써 프론트엔드와 백엔드 책임을 명확히 나눕니다.

Prisma는 PostgreSQL과 연결하여 타입 안정성이 있는 ORM 환경을 구성하기 위해 사용합니다.

---

## Database

```text
PostgreSQL
```

### 선택 이유

회사, 지원서, 자기소개서 문항, 기술스택 태그는 관계형 데이터로 관리하기 적합합니다.

PostgreSQL을 사용해 지원서와 문항, 태그 간의 관계를 명확하게 설계합니다.

---

## Infra

```text
Docker
Docker Compose
```

### 선택 이유

프론트엔드, 백엔드, 데이터베이스 실행 환경을 컨테이너로 구성하여 개발 환경 재현성을 높입니다.

---

# 8. 시스템 구조

## 전체 구조

```text
사용자
  ↓
Next.js Frontend
  ↓
Node.js Express API Server
  ↓
Prisma ORM
  ↓
PostgreSQL Database
```

## Docker Compose 구성

```text
docker-compose.yml
 ├── frontend container
 ├── backend container
 └── postgres container
```

---

# 9. 디렉토리 구조

## 전체 디렉토리

```text
applyhub/
 ├── frontend/
 ├── backend/
 ├── docker-compose.yml
 └── README.md
```

## Frontend 구조

```text
frontend/
 ├── src/
 │   ├── app/
 │   │   ├── page.tsx
 │   │   ├── applications/
 │   │   │   ├── page.tsx
 │   │   │   ├── new/
 │   │   │   │   └── page.tsx
 │   │   │   └── [id]/
 │   │   │       └── page.tsx
 │   │   └── layout.tsx
 │   │
 │   ├── components/
 │   │   ├── common/
 │   │   ├── dashboard/
 │   │   ├── application/
 │   │   └── question/
 │   │
 │   ├── hooks/
 │   │   ├── queries/
 │   │   └── mutations/
 │   │
 │   ├── api/
 │   │   ├── client.ts
 │   │   ├── applications.ts
 │   │   ├── companies.ts
 │   │   └── questions.ts
 │   │
 │   ├── types/
 │   │   ├── application.ts
 │   │   ├── company.ts
 │   │   ├── question.ts
 │   │   └── tag.ts
 │   │
 │   └── utils/
 │       ├── date.ts
 │       └── status.ts
 │
 ├── package.json
 └── Dockerfile
```

## Backend 구조

```text
backend/
 ├── src/
 │   ├── app.ts
 │   ├── server.ts
 │   │
 │   ├── routes/
 │   │   ├── applications.routes.ts
 │   │   ├── companies.routes.ts
 │   │   ├── questions.routes.ts
 │   │   └── tags.routes.ts
 │   │
 │   ├── controllers/
 │   │   ├── applications.controller.ts
 │   │   ├── companies.controller.ts
 │   │   ├── questions.controller.ts
 │   │   └── tags.controller.ts
 │   │
 │   ├── services/
 │   │   ├── applications.service.ts
 │   │   ├── companies.service.ts
 │   │   ├── questions.service.ts
 │   │   └── tags.service.ts
 │   │
 │   ├── validators/
 │   │   ├── application.schema.ts
 │   │   └── question.schema.ts
 │   │
 │   └── lib/
 │       └── prisma.ts
 │
 ├── prisma/
 │   └── schema.prisma
 │
 ├── package.json
 └── Dockerfile
```

---

# 10. 데이터베이스 설계

## Company

회사 정보를 관리합니다.

```text
id
name
serviceType
websiteUrl
createdAt
updatedAt
```

## Application

지원 건 정보를 관리합니다.

```text
id
companyId
position
jobUrl
status
deadline
memo
portfolioVersion
createdAt
updatedAt
```

## CoverLetterQuestion

지원 건별 자기소개서 문항과 답변을 관리합니다.

```text
id
applicationId
question
answer
orderIndex
createdAt
updatedAt
```

## TechTag

기술스택 태그 정보를 관리합니다.

```text
id
name
createdAt
```

## ApplicationTechTag

지원 건과 기술스택 태그의 N:M 관계를 관리합니다.

```text
applicationId
techTagId
```

---

# 11. ERD 개념

```text
Company 1 ─── N Application

Application 1 ─── N CoverLetterQuestion

Application N ─── M TechTag
              ApplicationTechTag
```

---

# 12. API 설계

## Application API

### 지원 목록 조회

```http
GET /api/applications
```

### 지원 상세 조회

```http
GET /api/applications/:id
```

### 지원 등록

```http
POST /api/applications
```

### 지원 수정

```http
PUT /api/applications/:id
```

### 지원 삭제

```http
DELETE /api/applications/:id
```

---

## Question API

### 문항 추가

```http
POST /api/applications/:applicationId/questions
```

### 문항 수정

```http
PUT /api/questions/:id
```

### 문항 삭제

```http
DELETE /api/questions/:id
```

---

## Tag API

### 태그 목록 조회

```http
GET /api/tags
```

### 태그 생성

```http
POST /api/tags
```

---

## Dashboard API

### 대시보드 통계 조회

```http
GET /api/dashboard/summary
```

응답 예시:

```json
{
  "totalCount": 12,
  "draftCount": 4,
  "submittedCount": 5,
  "interviewCount": 2,
  "acceptedCount": 1,
  "upcomingDeadlines": [
    {
      "id": 1,
      "companyName": "플링",
      "position": "FullStack Developer",
      "deadline": "2026-05-31"
    }
  ],
  "tagStats": [
    {
      "tagName": "React",
      "count": 8
    },
    {
      "tagName": "Node.js",
      "count": 4
    }
  ]
}
```

---

# 13. 상태값 정의

## ApplicationStatus

```text
DRAFT        작성 중
SUBMITTED    제출 완료
COFFEE_CHAT  커피챗
INTERVIEW    면접 예정
ACCEPTED     합격
REJECTED     불합격
ON_HOLD      보류
```

---

# 14. 화면 요구사항

## 14.1 Dashboard Page

경로:

```text
/
```

기능:

```text
지원 현황 요약 카드 표시
마감 임박 지원 건 표시
기술스택별 지원 분포 표시
최근 수정된 지원 건 표시
```

---

## 14.2 Application List Page

경로:

```text
/applications
```

기능:

```text
지원 목록 조회
회사명 검색
상태 필터
기술스택 필터
마감일 정렬
상세 페이지 이동
삭제
```

---

## 14.3 Application Create Page

경로:

```text
/applications/new
```

기능:

```text
회사명 입력
서비스 유형 입력
공고 URL 입력
포지션 입력
마감일 입력
기술스택 태그 입력
포트폴리오 버전 입력
메모 입력
등록 버튼
```

---

## 14.4 Application Detail Page

경로:

```text
/applications/:id
```

기능:

```text
지원 정보 조회
지원 상태 변경
공고 URL 이동
포트폴리오 버전 수정
메모 수정
자기소개서 문항 추가
자기소개서 답변 수정
자기소개서 문항 삭제
글자 수 표시
```

---

# 15. MVP 범위

일주일 안에 완성하기 위한 MVP 범위는 다음과 같습니다.

## 반드시 구현

```text
지원 등록
지원 목록 조회
지원 상세 조회
지원 수정
지원 삭제
자기소개서 문항 CRUD
기술스택 태그 연결
상태 필터
회사명 검색
대시보드 요약
Docker Compose 실행 환경
README 작성
```

## 선택 구현

```text
로그인
문항 순서 드래그 앤 드롭
포트폴리오 파일 업로드
알림 기능
캘린더 뷰
차트 라이브러리 기반 시각화
```

## 구현하지 않을 기능

```text
AI 자기소개서 생성
채용 공고 자동 크롤링
이메일 알림
실제 파일 저장 서버
Kubernetes 배포
```

이번 프로젝트의 목적은 기능을 많이 넣는 것이 아니라, **Next.js + Node.js + PostgreSQL + Docker 기반의 풀스택 구조를 완성도 있게 구현하는 것**입니다.

---

# 16. 개발 일정

## 1일차

```text
프로젝트 초기 세팅
Next.js 프로젝트 생성
Express 프로젝트 생성
PostgreSQL Docker Compose 구성
Prisma schema 작성
기본 ERD 확정
```

## 2일차

```text
Company / Application 모델 구현
Application CRUD API 구현
Prisma migration 적용
API 테스트
```

## 3일차

```text
Next.js 지원 목록 페이지 구현
지원 등록 페이지 구현
지원 상세 페이지 기본 구조 구현
TanStack Query 연결
```

## 4일차

```text
자기소개서 문항 CRUD API 구현
상세 페이지에서 문항 추가/수정/삭제 구현
답변 글자 수 표시 구현
```

## 5일차

```text
기술스택 태그 기능 구현
상태 필터 구현
회사명 검색 구현
마감일 정렬 구현
```

## 6일차

```text
대시보드 요약 API 구현
상태별 카운트 표시
마감 임박 지원 건 표시
기술스택별 지원 수 표시
UI 정리
```

## 7일차

```text
Docker Compose 최종 점검
README 작성
아키텍처 다이어그램 작성
ERD 이미지 정리
포트폴리오용 캡처 정리
트러블슈팅 기록 작성
```

---

# 17. 포트폴리오 어필 포인트

## 17.1 Next.js 사용 근거

- App Router 기반 페이지 구성
- 지원 목록, 등록, 상세 페이지 라우팅 설계
- 컴포넌트 단위 UI 구성
- TypeScript 기반 도메인 타입 관리

## 17.2 Node.js 사용 근거

- Express 기반 REST API 서버 구현
- Controller / Service / Route 구조 분리
- Prisma ORM을 통한 DB 접근
- API 요청 검증 구조 적용

## 17.3 SQL 사용 근거

- 회사, 지원서, 문항, 태그 간 관계형 데이터 모델링
- 1:N, N:M 관계 설계
- 지원 상태와 마감일 기준 조회 구조 구현

## 17.4 Docker 사용 근거

- frontend, backend, postgres 컨테이너 구성
- docker-compose로 전체 개발 환경 실행
- 로컬 환경 의존성 최소화

## 17.5 사용자 중심 문제 해결

- 지원 정보가 흩어지는 문제를 하나의 관리 흐름으로 통합
- 마감 임박, 상태별 카운트, 기술스택 필터를 통해 사용자가 우선순위를 빠르게 판단하도록 설계
- 단순 기록 도구가 아니라 “다음 행동을 결정할 수 있는 지원 관리 대시보드”로 구성

---

# 18. README 핵심 구성

README에는 다음 내용을 포함합니다.

```text
1. 프로젝트 소개
2. 문제 정의
3. 주요 기능
4. 기술 스택
5. 시스템 아키텍처
6. ERD
7. API 명세
8. 실행 방법
9. Docker Compose 실행 방법
10. 트러블슈팅
11. 향후 개선점
```

---

# 19. 최종 프로젝트 설명 문장

포트폴리오에는 아래처럼 정리하면 좋습니다.

```text
ApplyHub는 여러 기업에 지원하는 개발자가 공고 정보, 자기소개서 문항, 포트폴리오 버전, 지원 상태를 한 곳에서 관리할 수 있도록 만든 지원 관리 대시보드입니다.

Next.js와 Node.js Express 서버를 분리하여 프론트엔드와 백엔드 책임을 명확히 나누었고, PostgreSQL과 Prisma를 활용해 회사, 지원서, 자기소개서 문항, 기술스택 태그 간 관계를 설계했습니다.

Docker Compose를 통해 프론트엔드, 백엔드, 데이터베이스를 한 번에 실행할 수 있도록 구성하여 개발 환경 재현성을 높였습니다.

단순 CRUD를 넘어서 마감 임박 지원 건, 상태별 지원 현황, 기술스택별 지원 분포를 제공함으로써 사용자가 현재 집중해야 할 지원 건을 빠르게 판단할 수 있도록 설계했습니다.
```

---

# 20. 프로젝트 목표 요약

ApplyHub의 목표는 다음 5가지를 포트폴리오에서 증명하는 것입니다.

```text
Next.js로 사용자 화면을 설계하고 구현할 수 있다.
Node.js Express로 REST API 서버를 구성할 수 있다.
PostgreSQL 기반 관계형 데이터를 설계할 수 있다.
Docker Compose로 실행 환경을 구성할 수 있다.
사용자 문제를 기능 요구사항으로 정의하고 구현할 수 있다.
```
