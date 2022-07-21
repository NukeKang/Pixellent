<p align="center">
  <img src="public/logo192.png" alt="logo" width="100"/> 
  <h1 align="center">Pixellent</h1>
</p>
<p align="center">
  <h3 align="center">
    🎨  Make Pixel Art Easy
  </h3>
</p>

<br>

## 💁🏻‍♂️ Introduction

**Pixellent**는 픽셀 아트를 쉽게 제작할 수 있는 웹어플리케이션 입니다. <br>
자신이 만든 이미지를 png 파일로 다운받을 수 있습니다. <br>
또한, 저장과 불러오기가 가능합니다.

<p align="center">
  <img width="600" src="src/assets/EditorPage.png">
</p>

<br>

## 📋 Contents

- [💁🏻‍♂️ Introduction](#-introduction)
- [🖇 Link](#-link)
- [⚙️ Tech Stack](#-tech-stack)
- [🗝 Installation](#-installation)
- [📆 Schedule](#-schedule)
- [🕹 Features](#-features)
- [🏁 Challenge](#-challenge)
- [🤵🏻‍♂️소감](#-소감)

<br>

## 🖇 Link

**Deploy**

- [Pixellent](https://www.pixellent.site/)

**Portfolio**

- [Frontend](https://github.com/Ravender91/Pixellent)

<br>

## ⚙️ Tech Stack

**FrontEnd**

- [React](https://facebook.github.io/react/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Styled-Components](https://styled-components.com/)
- [React-router-dom](https://reactrouter.com/)

**Test**

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

**Deploy**

- [Netilfy](https://www.netlify.com/)

<br>

## 🗝 Installation

```bash
npm install
npm start
```

<br>

## 📆 Schedule

- 2022년 6월 27일 - 2022년 7월 2일: 아이디어 선정 및 기술 검증, 계획 (칸반, 목업 작성)
  - [Idea](https://www.notion.so/Idea-f82783994eb343d0a74d3e8a8ea8d5c6)
  - [MockUp](https://www.notion.so/Mockup-8c3a4108a5a745da8a5f3e11482de2a8)
  - [KANBAN](https://www.notion.so/1d76579d574f4cd79a807cdb845d235e?v=b7e8fa10381d48f79d5a1a480402af51)
- 2022년 7월 3일 - 2022년 7월 15일: 개발 기능 구현
- 2022년 7월 16일 - 2022년 7월 22일: Stand Up 발표 준비 및 리팩토링

<br>

## 🕹 Features

<details>
<summary><span style="font-size:15px">Landing Page</span></summary>
<div markdown="1">

![LandingPage](/src/assets/LandingPage.png)

- START 버튼을 누르면 editor 페이지로 이동합니다.
</div>
</details>

<details>
<summary><span style="font-size:15px">Tools</span></summary>
<div markdown="1">

![Tools](/src/assets/Tools.png)

- Brush: react color 라이브러리 사용, 해당 버튼 누르면 색을 고를 수 있는 창이 등장. Drag 가능 (단축키: Q)
- Eraser: 작업물 지우기, Drag 가능 (단축키: W)
- Bucket: 채우기 기능 (단축키: E)
- Eyedropper: 색 추출 기능 (단축키: R)
- DownloadImage: png 파일로 저장할 수 있습니다.
- Palette: 색 고를 수 있는 기능 (선택한 색은 따로 나타내 줍니다.)

</div>
</details>

<details>
<summary><span style="font-size:15px">Canvas</span></summary>
<div markdown="1">

![Canvas](/src/assets/Canvas.png)

- 위의 기능들을 사용하여 픽셀아트를 그릴 수 있습니다.
- Undo는 이전의 작업을 되돌릴 수 있습니다. (단축키: CTRL + Z)
</div>
</details>

<details>
<summary><span style="font-size:15px">Preview</span></summary>
<div markdown="1">

![Preview](/src/assets/Preview.png)

- 현재 작업 중인 그림을 실시간으로 볼 수 있습니다.
</div>
</details>

<details>
<summary><span style="font-size:15px">Dimension</span></summary>
<div markdown="1">

![Dimension](/src/assets/Dimension.png)

- 캔버스의 크기를 조절할 수 있습니다.
</div>
</details>

<details>
<summary><span style="font-size:15px">Local Storage</span></summary>
<div markdown="1">

![Local Storage](/src/assets/localStorage.png)
![Load](/src/assets/Load.png)

- new 버튼을 누르면 캔버스가 초기화됩니다.
- save 버튼을 누르면 Local Storage에 저장됩니다.
- load 버튼을 누르면 Local Storage에 저장된 작업물들을 보여줍니다. 클릭하면 해당 작업을 이어나갈 수 있습니다. 삭제도 가능합니다.
</div>
</details>

<br>

## 🏁 Challenge

### **상태관리 및 구조**

Canvas(Grid, Cell, Row), Tools 등 모든 것이 상태로 이루어져 있다 보니, 과도한 리렌더링과 라이프싸이클과 같은 리액트의 가장 큰 어려움이 역시나 가장 큰 문제점으로 등장했습니다.

개발 초기에는 Zustand로 관리하다 보니 Redux보다 굉장히 쉽고, 전역 상태를 관리하기가 쉬웠지만 저의 서비스 특성상 서로 서로 의존성이 강하다 보니, 구조 짜기에도 쉽지 않았고 렌더링 최적화 시키는 것이 무척이나 어려웠습니다.

구조를 한 번 잘못 설계해서 작업하다 보니 갈아엎은 적이 한두 번이 아니었던 것 같습니다. 이 부분에서 애를 많이 먹게 되어 개발 속도에 큰 영향이 갔습니다. 개발 시작 전 전체적인 설계와 구조 등을 잡는 것이 얼마나 어렵고 중요한 것인지 다시 한번 느끼게되었습니다.

### Bucket(채우기 기능)

그림판 같은 에디터들에는 보통 채우기 기능이 들어있습니다. 해당 기능을 직접 구현해 보려고 하니 처음에 감도 잡히지 않고, 제가 작성한 코드 구조 상 쉽지 않다는 걸 느꼈습니다.

조사를 통해 DFS/BFS을 기초로 하는 ‘Flood Fill’ 알고리즘을 사용해서 구현했습니다.

부트캠프 기간 중 매일 아침 알고리즘 푸는 시간이 있었습니다. 솔직히 속으로는 FrontEnd 개발자가 알고리즘 공부를 이렇게까지 해야 되나 싶었는데, 이번 프로젝트를 하면서 꼭 필요한 부분이라는 것을 몸소 깨달았습니다.

비슷한 문제가 나온 적이 있어, 한편으로 신기하기도 했고 좀 더 이해하기 수월했던 것 같습니다. 앞으로도 알고리즘 공부는 계속해 나갈 예정입니다.

### 관심사 분리(함수형 프로그래밍)

픽셀 캔버스를 만들어 주는 util 함수, 로컬 스토리지 생성, 팔레트 제작 함수 등 여러 비즈니스 로직들을 나눠주고 관심사 분리하는 것이 역시나 쉽지 않았습니다. 완벽한 함수형 프로그래밍을 할 수는 없었지만, side effect도 낮춰주고 재사용성을 높여주는 방식으로 코드를 짜려고 하다보니 확실히 컴포넌트 내 코드도 간결해지고 깔끔해지는 것을 느낄 수 있었습니다.

<br>

## 🤵🏻‍♂️ 소감

개인 프로젝트까지 오는 길이 순탄치 만은 않았습니다. 정말 매 순간 포기를 생각했던 적이 많았습니다. 그래도 여기까지 어떻게든 끌고 온 제 자신이 조금이나마 기특 (?) 합니다.

팀플과는 다르게 모든 것을 저 혼자 판단하고 시도해 보아야 하는 점이 무척이나 두렵고, 망설여졌습니다. 레퍼런스 참고할 것들도 갈수록 줄어들고, 내가 할 수 있을까 라는 의문점 속에서 결과물이 나오는 것을 보니 하면 되는 구나 라는 자신감도 붙게 되었습니다.

비록 아쉬운 점도 많고, 반성할 점도 많은 프로젝트였습니다. 하지만, 부트캠프 1주차 시절의 저를 돌이켜 생각해 보면 미약하지만, 성장했다고 느껴집니다. 아직 매우 부족하다는 것을 알지만, 이번 프로젝트가 마지막이 아니고 다음에 만들 서비스는 이번 것보다 훨씬 다듬어진 서비스를 만들 수 있는 개발자가 되고 싶습니다.

개발을 하면 할수록 기본이 중요하다는 걸 다시 한번 느끼고 있습니다. 멀리 돌아가는 길이라도, 천천히 밟아가며 개발을 해나가도록 하겠습니다.
