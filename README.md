# My Arc Showcase - 개인 포트폴리오 웹사이트

> React + TypeScript + Vite + shadcn/ui로 구축된 현대적인 개인 포트폴리오 웹사이트

## 🚀 프로젝트 정보

**개발 환경**: React 18 + TypeScript + Vite  
**UI 라이브러리**: shadcn/ui + Tailwind CSS  
**배포**: GitHub Actions + GitHub Pages  
**개발 플랫폼**: [Lovable](https://lovable.dev/projects/e7aed7b8-a77f-4757-b772-568b0a16c8bb)

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/e7aed7b8-a77f-4757-b772-568b0a16c8bb) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## 📦 배포 방법

### GitHub Actions 자동 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다:

1. **GitHub Pages 설정**
   - 저장소 Settings > Pages > Source를 "GitHub Actions"로 설정
   - Actions 탭에서 워크플로우 권한 활성화

2. **자동 배포 트리거**
   - `main` 브랜치에 push하면 자동으로 빌드 및 배포
   - Pull Request 생성 시에도 빌드 테스트 실행

3. **배포 URL**
   - 배포 완료 후: `https://[your-username].github.io/my-arc-showcase/`

### 수동 배포

```bash
# 프로덕션 빌드
npm run build:prod

# 빌드 결과물 미리보기
npm run preview:build
```

### Lovable 플랫폼 배포

[Lovable](https://lovable.dev/projects/e7aed7b8-a77f-4757-b772-568b0a16c8bb)에서 Share -> Publish를 통해 즉시 배포 가능합니다.

## 🛠️ 개발 명령어

```bash
# 개발 서버 시작
npm run dev

# 코드 린팅
npm run lint
npm run lint:fix

# 타입 체크
npm run type-check

# 프로덕션 빌드
npm run build:prod
```

## 📁 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── ui/             # shadcn/ui 컴포넌트
│   └── ...             # 페이지별 컴포넌트
├── data/               # 정적 데이터 (portfolio.json)
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티 함수
└── pages/              # 페이지 컴포넌트
```

## 🔧 환경 설정

환경 변수가 필요한 경우 `env.example` 파일을 참고하여 `.env.local` 파일을 생성하세요.

## 📝 커밋 규칙

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등

예시: `feat: 포트폴리오 프로젝트 섹션 추가`
