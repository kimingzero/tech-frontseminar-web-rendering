# 🖥️ 웹 렌더링 방식의 비교

[우리 FIS 아카데미] 프론트엔드 세미나  
📅 2025.07.30

<img width="1919" height="963" alt="image" src="https://github.com/user-attachments/assets/1f2b7e98-b6dd-4a7b-a54e-0d86d501baae" />


🔗 [배포 사이트](https://tech-seminar-web-rendering.vercel.app/)  
📽️ [발표 자료](https://www.canva.com/design/DAGt4KxLWPA/-bPoO9yppmY0Hx7gfYbqig/edit?utm_content=DAGt4KxLWPA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

<br/>

## 📄 프로젝트 소개
**Next.js (v15.4.4)** 를 활용해 CSR, SSR, SSG, ISR의 네 가지 웹 렌더링 방식을 구현하고 비교하는 프로젝트입니다.  
각 방식의 작동 원리, 동작 시간, 데이터 패칭 차이 등을 시각적으로 확인할 수 있도록 구성했습니다.  

<br/>

## 🛠️ 사용한 기술

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">

<br/>

## ⚙️ 렌더링 방식별 구성

<img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/979342e2-9804-42f5-b32c-2d57bada61a5" />
<img width="1919" height="905" alt="image" src="https://github.com/user-attachments/assets/0cec4582-fff4-4954-b2fd-5c5d372df940" />

### 🟡 CSR (Client Side Rendering)

- **페이지가 로드된 시간**과 데이터가 로드된 후 **페이지가 완성된 시간**을 비교해 볼 수 있습니다.
- 개발자 도구의 Network 탭에서 **데이터를 fetch 하는 요청이 길다**는 것을 Waterfall로 확인할 수 있습니다.

---

<img width="1919" height="899" alt="image" src="https://github.com/user-attachments/assets/e96a1e9b-a1c9-4bff-b77c-6534546ae784" />
<img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/dbb168c4-4fbe-4263-97f8-c3e95beab507" />


### 🟢 SSR (Server Side Rendering)

- **서버에서 렌더링 된 시간**과 현재 시간을 비교해 볼 수 있습니다.
- 개발자 도구의 Network 탭에서 데이터를 fetch 하는 별도의 요청이 없음과
  **초기 SSR 페이지의 요청 시간이 길다**는 것을 Waterfall로 확인할 수 있습니다.

---

<img width="1919" height="902" alt="image" src="https://github.com/user-attachments/assets/7c27530a-27c7-48ae-8b7e-c64a4862b7a6" />


### 🔵 SSG (Static Site Generation)

- **페이지가 빌드 된 시간**과 현재 시간을 비교해 볼 수 있습니다.
- 개발자 도구의 Network 탭에서 데이터를 fetch 하는 별도의 요청이 없음과
  **초기 SSG 페이지의 요청 시간이 짧다**는 것을 Waterfall로 확인할 수 있습니다.

---

<img width="1919" height="903" alt="image" src="https://github.com/user-attachments/assets/5da43407-c08a-4d93-8d16-495203923e6a" />
<img width="1919" height="903" alt="image" src="https://github.com/user-attachments/assets/45b0fa44-c0c8-439a-b651-d1fa76373395" />

### 🟣 ISR (Incremental Static Regeneration)

- **일정 주기(30초)마다 revalidate가 발생**하며, 빌드 타임에 저장된 데이터 중 무작위로 5개 항목이 선택되어 페이지가 갱신됩니다.  
  페이지가 갱신될 때마다 **페이지가 완성된 시간이 바뀌는 것**을 확인할 수 있습니다.

<br/>

## ❗ 직면했던 문제와 해결

### 문제: 로컬 실행 시 / 배포 실행 시 현재 시간이 다르게 출력되는 현상 
- 배포 플랫폼(Vercel)은 기본적으로 **UTC(협정 세계시)** 를 사용합니다.  
`new Date()`를 그대로 사용하면 KST가 아닌 UTC 기준으로 출력됩니다.

### 해결: `toLocaleString()` + timeZone 옵션으로 KST 적용
```jsx
export function getKoreanDateTimeString(date = new Date()) {
  return (
    date.toLocaleDateString("ko-KR", { timeZone: "Asia/Seoul" }) +
    " " +
    date.toLocaleTimeString("ko-KR", { timeZone: "Asia/Seoul" })
  );
}
```

<br/>

## ☑️ 향후 개선 계획
- **Data 서버 구현 및 참조**  
  현재는 데이터를 외부 API에서 가져오고 있어 데이터의 추가, 삭제, 수정이 불가능합니다.  
  그에 따라 ISR 페이지에서 SSG와의 차이점을 직관적으로 보여주기 어려워 고민이 많았습니다.  
  추후 Ngrok나 JSON Server 등 데이터를 저장할 서버를 만들어 기능 구현을 보완하고 싶습니다.

<br/>

## ✨ 정리 및 느낀점
**기존 기술을 두고 새로운 기술이 등장한 데에는 타당한 이유가 있다.**  
**그럼에도 기존 기술만이 가진 장점이 존재하지 않을까?**  

브라우저 렌더링을 배우는 과정에서 이런 궁금증이 생겼습니다.  
이번 세미나의 주제는 이 궁금증에서 나아가, 여러 렌더링 방식들을 알아보고 각 기술들만의 장단점을 파악해보고 싶어 선정하게 되었습니다.  

각 렌더링 방식을 직접 구현해보고 개발자 도구를 통해 요청 방식과 렌더링 시점을 직접 비교해보며  
성능과 사용자 경험 측면에서 실제로 어떤 차이가 발생하는지를 체감할 수 있었습니다.

결론적으로 단순히 기술을 선택하는 것이 아니라, 제작하고 싶은 **페이지의 성격과 목적에 따라 가장 적합한 렌더링 방식을 선택하는 것이 중요하다**는 것을 깨달았습니다.

다만 아쉬웠던 점은 ISR 페이지가 제대로 구현되었는지 확신이 들지 않았다는 점입니다.  
또한 SSG와 ISR처럼 빌드 시점에 데이터를 저장하는 방식은, 클라이언트 쪽에서는 해당 데이터가 실제로 빌드 시점에 생성된 것인지 직관적으로 확인하기 어려웠다는 점도 아쉬움으로 남았습니다.  

ISR 페이지의 경우, 향후에 데이터의 추가/수정/삭제 기능을 구현하여 캐시된 데이터와 실제 데이터가 달라졌을 때 정상적으로 revalidate를 수행하는지 확인할 수 있도록 구성을 개선해볼 계획입니다.  
