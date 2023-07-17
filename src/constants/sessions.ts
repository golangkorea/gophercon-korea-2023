export interface Speaker {
  name: string;
  company: string;
  description: string;
  profileImage: string;
}
export interface Session {
  id: number;
  date: string;
  startTime: string;
  endTime: string;
  title: string;
  category: string;
  description: string;
  speaker: Speaker;
}

export const SESSIONS: Session[] = [
  {
    id: 1,
    date: "08-05",
    startTime: "09:00",
    endTime: "10:00",
    title: `Check-in`,
    category: "",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 2,
    date: "08-05",
    startTime: "10:00",
    endTime: "10:30",
    title: `오프닝 및 후원사 홍보`,
    category: "Keynote",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 3,
    date: "08-05",
    startTime: "10:30",
    endTime: "10:40",
    title: `쉬는시간`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 4,
    date: "08-05",
    startTime: "10:40",
    endTime: "11:10",
    title: `Open Source in Go`,
    category: "Main Talk",
    description: `Go 언어 관련 강연에 참석하면 자주 들리는 질문이 있습니다. \n‘Go 언어로는 무엇을 할 수 있나요?’ \n이번 세션에서는 왜 Go 언어가 오픈소스에 기여할 수 있는 강력한 도구인지 이야기하고 Go 언어로 구현된 클라우드 네이티브 오픈소스들을 소개합니다. \n더 나은 이해를 위해 데모 애플리케이션을 활용합니다.\n \
      이후 ‘오픈소스 컨트리뷰션 아카데미’, ‘LFX Mentorship’등 오픈소스 기여를 도와주는 국내외 여러 프로그램에 참여한 경험을 소개합니다.`,
    speaker: {
      name: "박남규",
      company: "LitmusChaos",
      description:
        "클라우드 네이티브 기술에 관심이 많은 Gopher 입니다. Litmus(CNCF 인큐베이팅 프로젝트)라는 오픈소스에 기여하고 있습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4PLCV6hkhc6WQFNnb61Hv7P78x78-mp8I57zAoivUvsfY4LfOAuPlmhPkdhk3nC6WUB_s8rsbWQcCQ8c49hOkD_fF6HgiUDuAmZe8V3PswxBT4QM-fC_USrPg2LFDo_nEkaCZsbOEDWkNouch0QAmoEBL0xPN2EiJZtT5ZG29wBoUfpfAjQUxsruntTyTn8nRr2kVJ9TFGNZDiE-b4mESizQ8dE8illa5n4yh7mALccHSwO8Vh9i6oTUxfUB8A0E1XHxHUI-_ownFIzXj3lqm9C8PNK6NqXIpmoVyjpnfz__9r6A3YAfeW4vuX5eASI7DFiWl0JozqRToTN0Ux5AMN-5AePi2ZV7feuN3fZboYw-icunD1er6eJbZYyVponIEbivccWu80QQbjg3yP_8Cvi6ImF2OY4Yc8e3g1vprhp34UfsLp5r8p40Buk5OJx8nTx05hKdKpepyusiW_XxmG7PLPnqE0dT-_3-sCG0RQttp8Y8Q8_tGgtlMRQROenAaeBz7Dk-Q0r",
    },
  },
  {
    id: 5,
    date: "08-05",
    startTime: "11:10",
    endTime: "11:20",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 6,
    date: "08-05",
    startTime: "11:20",
    endTime: "11:50",
    title: `Go 테스트의 모든 것, 모든 것을 테스트해보자`,
    category: "Main Talk",
    description:
      "테스트 관련 패키지(testing, testify, httptest)들에 대해 알아봅니다.\n \
      테스트 코드 작성 방법(서브테스트, TestMain, 네이밍/스타일, 블랙박스 테스트), 서버 mocking, 커버리지 100% 달성하는 방법을 논의합니다.\n \
      그외의 테스트 관련 주제(패닉, 고루틴, race, benchmark, github actions)에 대한 경험을 공유합니다.",
    speaker: {
      name: "김정민",
      company: "삼성SDS",
      description:
        "삼성SDS에서 k8s 관련 업무를 하며, Go를 주언어로 다룹니다.\n \
        컨퍼런스 발표 경험은 3회 정도 있습니다.\n \
        오픈소스 lethe/venti( https://github.com/kuoss )를 개발하면서 겪은 테스트 관련 경험을 공유하고자 합니다.",
      profileImage: "",
    },
  },
  {
    id: 7,
    date: "08-05",
    startTime: "11:50",
    endTime: "12:00",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 8,
    date: "08-05",
    startTime: "12:00",
    endTime: "12:30",
    title: `TBD`,
    category: "Sponsor",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 9,
    date: "08-05",
    startTime: "12:30",
    endTime: "14:00",
    title: `1.Generative AI with GO (30분) \n 
    2.Event(60분)`,
    category: "Lunch",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 10,
    date: "08-05",
    startTime: "14:00",
    endTime: "14:30",
    title: `컨텍스트를 이용한 상태관리`,
    category: "Main Talk",
    description:
      "현재 배포된 컨텍스트 패키지의 기능과 곧 추가될 기능을 합쳐 고 언어에서 활용할 수 있는 기초적인 상태관리 방법에 대한 발표입니다. 컨텍스트 타입을 알아보고, 어떤 곳에 활용할 수 있는 지 간단한 예시를 통해 알아봅시다!",
    speaker: {
      name: "권용민",
      company: "AfreecaTV",
      description:
        "누구나 안전하고 편리한 네트워크를 꿈꾸는 백엔드 개발자입니다. 고 언어는 누구나 쉽고 빠르게 네트워크에 접근할 수 있게 해주고, 통신에 필요한 라이브러리들을 안전하게 별도로 제공할 수 있다는 것에 매력을 느껴 시작하게 되었습니다. 지금은 어떻게 해야 고 언어에 대한 생산성을 높일 수 있을 지에 큰 관심을 두고 있습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4NU84dzw8XTSpxr-koYkVLl2sY-0Uh-7N6CGmTiS7oBbq6GUq3XxgPG2Ws97BpXh5tuuSpxxm4hCl5F3zTtCwgdC8JGX6PboxIe3EBsILCFy_aUNzXz5zeOHfEm1URG42JMeDPHH-vDjknf0ARti6QaXTOMxTIf3omNQC4DGKJo-k6wn3iZMFrk-DL4hpVabQnSsim6lwthiX8-M6g9FOrMPrFltYYqXRNbTrM2T5uCACSpKF2anK0yYcCv0F5i48y_fEI1Utea7_h3u8vTOHX4c4OhtE0WjC-eJwrJ_FfN6JespSlgqXIHqP4-G5_yi0MlOdu-DpOrWgUIKPR3IDCSAcopMGT8TXHC5eDnMil8b4k1F9FzMM_afI7dE4UXpwNpvSG7LBa7s2RpfeKKnk-ESUfRSPVnmaLLNlh0fotYtgfi6GR3yQP9mJ4ZJUFlXQYt-mWb495BSoJWjaAokP0OSJ3W5LihZjuGBTyZzV0mk73veUgLjcdLEIckkXTs3VxKBuBNTENt",
    },
  },
  {
    id: 11,
    date: "08-05",
    startTime: "14:30",
    endTime: "14:40",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 12,
    date: "08-05",
    startTime: "14:40",
    endTime: "15:40",
    title: `API 서버 테스트코드 A-Z : 케이스별 효과적인 테스트코드 작성 전략`,
    category: "Main Talk",
    description:
      "테스트를 잘 짜기 위해서는 어떤 프로젝트 구조를 가지는 것이 유리한지, 외부의존성이 있는 경우에는 테스트를 어떻게 작성해야하는지에 대해서 설명하고 유용하게 사용할 수 있는 툴들에 대해서 설명합니다.",
    speaker: {
      name: "김진용",
      company: "룩코",
      description:
        "글로벌 서비스인 에이클로젯을 만드는 룩코에서 백엔드 리드로서 일하고 있습니다. \
        팀이 어떻게 함께 일하고, 소통하며, 문제를 해결하고, 학습하고, 지속적으로 성장하는 방법에 대해서 관심이 많습니다.",
      profileImage: "",
    },
  },
  {
    id: 13,
    date: "08-05",
    startTime: "15:40",
    endTime: "15:50",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 14,
    date: "08-05",
    startTime: "15:50",
    endTime: "16:20",
    title: `TBD`,
    category: "Sponsor",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 15,
    date: "08-05",
    startTime: "16:20",
    endTime: "16:30",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 16,
    date: "08-05",
    startTime: "16:30",
    endTime: "17:00",
    title: `Profiling and Tracing Tips in Go: OLAP 데이터베이스를 개발하며 얻은 교훈들`,
    category: "Main Talk",
    description:
      "OLAP 데이터베이스를 개발하며 얻은 실전적 사례들을 통해, go tool pprof, go tool trace 의 활용법에 대해 소개합니다.",
    speaker: {
      name: "박재완",
      company: "AB180",
      description:
        "AB180 query engine 팀에서 Backend Engineer 로 일하고 있으며, \
        분산 OLAP 데이터베이스인 Luft 를 개발중입니다. \
        빠른 개발속도와 높은 실행성능에 관심이 많습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MO6xm2pNWnkU4Ajn93sOhxKUhdkHnq8UYlAhmMIFtd3v8BzG6ngNsJkE5nMHbFcxcPIi01XTR3ktiJmVsUXop01Sb6t8cx0vK8SsvFnM2qgszBvGmKLYE1wimkSPh1BDr5QcMAWcPm0y0H3Oo8nEisOQrhU1W9LXbd9un__Ja08_mwTCxSkHsNZmh-Eus8ArmTWFJFfZcoGF8yuu4hD15ouyBkQLpH8hm16efkcZi6Zw307ZarNp_-jw_WyQVrHx0SXGySBEAW2YF8dCucCbR14c0cBoTj_ylvZ1Pp8PclqQUPxeyPY7rHqbP_nJqUFJnQRVjcg8ZQDYa6XN2cOUtNYyRPIp99-oigltiQBp-0eXjINsKSLVWdg8RLyclZv0scncrseDWrKA7JYE8KSgxL3sMxhXg6KOsdaPZEd1igemV-uCpOmTHzqU4n2gLyr2Vgt5TpBaLaJEVfBP8GDAaQ4mz1xq1Jtd71wSy-p_Nr_0of3w4u2IXCi8LhRR51zusgiVVgr4Q",
    },
  },
  {
    id: 17,
    date: "08-05",
    startTime: "17:00",
    endTime: "17:10",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 18,
    date: "08-05",
    startTime: "17:10",
    endTime: "17:40",
    title: `eBPF 도구를 이용해 Go 애플리케이션 추적하기`,
    category: "Main Talk",
    description:
      "eBPF 도구를 이용해 Go 언어로 개발된 애플리케이션을 추적하는 기본적인 내용을 다뤄보려고 합니다.\n \
      eBPF 기본 개념을 간단하게 살펴보고 eBPF 도구들이 어떻게 활용하는지 살펴봅니다.\n \
      그리고 이 도구를 이용해 Go 애플리케이션 내부를 추적해보고 가능성과 한계점을 정리하며 발표를 마무리합니다.",
    speaker: {
      name: "임찬식",
      company: "라인플러스",
      description:
        "고성능 워크로드 실행을 위한 쿠버네티스 플랫폼 운영 및 오퍼레이터 개발 업무를 진행하고 있습니다. Go 언어로 개발한 애플리케이션을 eBPF 도구를 이용해 추적하는 방법을 정리해 공유하는 발표를 준비해 보았습니다.",
      profileImage: "",
    },
  },
  {
    id: 19,
    date: "08-05",
    startTime: "17:40",
    endTime: "17:50",
    title: `이벤트(추첨)`,
    category: "Event",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 20,
    date: "08-05",
    startTime: "17:50",
    endTime: "18:00",
    title: `클로징 (10분)`,
    category: "Closing",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 21,
    date: "08-06",
    startTime: "09:00",
    endTime: "10:00",
    title: `Check-in`,
    category: "",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 22,
    date: "08-06",
    startTime: "10:00",
    endTime: "10:20",
    title: `오프닝 (20분)`,
    category: "Keynote",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 23,
    date: "08-06",
    startTime: "10:20",
    endTime: "10:30",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 24,
    date: "08-06",
    startTime: "10:30",
    endTime: "11:00",
    title: `Golang으로 서버 모니터링 툴 개발`,
    category: "Main Talk",
    description:
      "Golang으로 /proc 디렉토리에 접근해, 커널 지표로 서버모니터링을 개발하는 방법에 대해 공유드립니다. 대부분의 모니터링 툴이 Java로 구현이 되어있어 이와 비교하는 내용도 포함됩니다.",
    speaker: {
      name: "최정민",
      company: "와탭랩스/Devops엔지니어",
      description:
        "안녕하세요 와탭랩스라는 모니터링을 SaaS로 제공하는 회사에서 DevOps엔지니어로 약 2년째 재직 중입니다. 운영과정에 필요한 툴을 만드는 과정에서 Golang과 Python을 적극 활용합니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MZR_RGxZzr_7IYqEJebuIWh-d54dkOQID-IBVuU7yTFB_BYFelLy81LWPufOjvbU0TVpDhhm8_u-ocPvUCM7pqEBwthgHfQjqAITlRx23xFavXa5l1DXJNI42snOtxn7sU0JMmOqdyysCv3K8eqfFGdELhEk-TKLb_QI5cvWMgSvPIry5CIXubiW4M3pS2tknEP9GwIMakZmehpJyZpU4oZ54vYmCQaKvDDc_zdvd7iUzFdWFA76kqkQKkd77ck06F4VUD0wJ3p_meqiu3VOkR0YeyXcoDptVmAMoAZIQ9A1rEHGdUTKMcNLjTAesXDAFmvEt-DhSDYfErjJoJLNmP6iUHP5KTzxrC3Go3pOV3YtE1KzRYy5cuDVG3YAXCGMS8JoqE4u_DHxsKT8LZruDQQ_W0e4dA29KH6cA9RPT2ROe3TU9wZo-9jlIYjJlrZZJ3j6_LWXynK62mMcvy_h-TSO4RsT0FHmD4YkVvOneycp6pkVyBoWsAfnlzpQt0GG0GQyC-KpDx",
    },
  },
  {
    id: 25,
    date: "08-06",
    startTime: "11:00",
    endTime: "11:10",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 26,
    date: "08-06",
    startTime: "11:10",
    endTime: "11:40",
    title: `AWS Lambda in Go \n(with Kafka)`,
    category: "Main Talk",
    description:
      "기존 모놀리식 서비스에서 이벤트를 웹훅으로 받아 처리하던 아키텍처에서 문제를 겪고, AWS Lambda와 Go를 이용해 서버리스 웹훅 서비스를 개발, 배포한 경험에 대해 소개드립니다.",
    speaker: {
      name: "김수빈",
      company: "비바리퍼블리카 (TOSS)",
      description:
        "현재 비바리퍼블리카에서 서버 개발자로 일하고 있는 김수빈입니다. 저는 팀 내에서 다른 개발자 분들의 개발 생산성을 개선하는 플랫폼 엔지니어링을 주로 하고 있는데요, 그 과정에서 얻은 여러 경혐들을 공유 드리고자 합니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4MYDZ6R9Vg13arCDpSkbrePrIox0POZZdKyCXebA9KqjQWeUUs8TfMTNlEfVaCheJDW6Z-t8ONATx1YHWPiweZppA34C7F8uvkaci7p2g34swAJPARIZcQF9K1yiXS7spGI430CFgWPL1YhHURwe7sm-0Dl7wNgKswZkhcrFgtCx8H8loqnjLBaYfSfEhrAIxmxpBqpb519eUyAAzyONwaxLOPRRAoGQeVr8-Bta2Z7S0iD5UVcQGRSjKBKo9yvv5rN3TzI_7yU7d3et_d_4E6ccVGV0XSuagLkrwosy0ZBkirmyKyRKoLKuBEHSPzflLLaanUvmnTpm_EtHRMvsWC1hsZt0xnxbCuNy0AfAXfa0dBsUk8vyxZzTK3BuZ6DfaE95hvN892NYxONSQ9usP1oXbx1XBrigIjOlrLgrfxGnYiy2diiITJfTbuCP9TV1JidySlj6-x6iWIRLqIINRESG_ezO-cXRHVGq3n8bfFHc_jUfuRzirxV07hMRfKBIDVSbwU2frT8dq_1udyjCsgkbI5yq1D4BTRDjuwA_tRxVCIEIzknQKtjVVap4x12j1stEpJvXiiReA_-6rNSqfMfAIotZvWLw7BcZVP3oZpBrKNOCJ1iPNHs4nw3gmUhmct25nKwr1KgEaDMfZIiUNTRpmXAKXyp53pYjRhvfYlLgJjzW4Gtlj3BRJQmnAvgX7q3HdotDup824Dml7e4cN3wS1ePwoQc2_pthcHzS9vJjzxTEJuDqu1A2_mOCSOofPDonL_EqxYdR_3mhsHe-1m98KgFmc5RCO-gjwKqX0wtZWKjWP62j9b2ixGUJ71hIJ5iqURjelb8CECZ0pAh3Fyf8dhSUL09r5Wyf7aj9niQoPWQp0DxBLck6ho3ppyTGKoVmqyDbBWvogHc83sRLlOcgqWGBrbNGNK7KVtS_jYjw-X8JLN-uz-icW4DLktalXhWsC_7m_6inBtS3J7bnnFZm4ch0XaP-TX4szeOv8jUn3fpAgY2rvn2j5g4lWxoKDCJ_DOBTlZU-OXtwxQ5sVKqMbzjuxuaHVP1LLN6oDcSn9eJpg9mvf_aUgIOZyJcvA9RrBkXytCxdsMmpAtV3cl5c-gXcCYz_Me7NxYi7pH-3TKjBoIE0XKFH1A0r11wxSA4cn57HOB7Y8yKLUpNlDURUJSXUGsYUbUQl8BrRt8joCDhvojGXSut_xD0rxSJmaP8PhYZu3djSiUJZenY0IcIp7Yqn3I2EAxCnEBSW3M1cHWpj75eT-QlmsztLkiFdW6U2ZkrTgqVcjqIUsX79QG8xCK45pQyZwZJWtLUM8vgIXW-DHc08SCbTx_F8hLfg7SO-6LzBd5_BleuvFVGBDr79pkZOPIBgNha5p0aqSGPauCEqCsn4Ev_VJM8-x0AGOVIjc12DursR34PupxS",
    },
  },
  {
    id: 27,
    date: "08-06",
    startTime: "11:40",
    endTime: "11:50",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 28,
    date: "08-06",
    startTime: "11:50",
    endTime: "12:20",
    title: `TBD`,
    category: "Sponsor",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 29,
    date: "08-06",
    startTime: "12:20",
    endTime: "13:50",
    title: `1. 해외 GDE 영상 (30분) \n 2. 이벤트 가능! (60분)`,
    category: "Lunch",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 30,
    date: "08-06",
    startTime: "13:50",
    endTime: "14:20",
    title: `버그 없는 프로그램 만들기: 테스팅의 관점으로. 근데 이제 블록체인을 곁들인`,
    category: "Main Talk",
    description:
      "흔히들 말합니다. 이 세상에 버그 없는 프로그램은 존재하지 않는다고.\n \
      이 발표를 통해 버그 없는 프로그램을 만드는 방법에 대해서 소개해드리고 싶습니다. ",
    speaker: {
      name: "박창현",
      company: "오스모시스",
      description:
        '분산 시스템, p2p 네트워킹, 그리고 블록체인을 사랑하는 Gopher입니다.\n \
        현재 Osmosis에서 블록체인 엔지니어링을 맡고 있으며, 합의 알고리즘과 Proof-of-Stake(POS) 블록체인을 만들수 있는 오픈 소스 프레임워크를 개발하고 있습니다. 고언어 개발자를 위한 "버그 없는 프로그램을 만드는 방법:테스팅의 관점으로, 근데 이제 블록체인을 곁들인"를 주제로 한 발표를 준비해보았습니다. 버그없는 프로그램을 만드는 비밀에 대해 알려드리고 싶습니다.\n \
        －－＝＝(/･_･)/==≡≡卍',
      profileImage: "",
    },
  },
  {
    id: 31,
    date: "08-06",
    startTime: "14:20",
    endTime: "14:30",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 32,
    date: "08-06",
    startTime: "14:30",
    endTime: "15:00",
    title: `Scenario Tester: 인수 테스트 자동화로 자신감, 생산성 높이기`,
    category: "Main Talk",
    description:
      "- 성능, 강타입 언어 등의 이점을 누리기 위해 거대한 레거시 시스템을 Python에서 Go로 마이그레이션 했던 경험을 간단하게 소개합니다.\n \
      - 마이그레이션 검증 과정에서 큰 역할을 했던 자동화 테스트 도구 Scenario Tester를 Go로 개발하기 위해 사용했던 전략, 도구 등을 소개합니다.\n \
      - 그럼에도 불구하고 발생했던 장애 경험과 개선기를 공유합니다.",
    speaker: {
      name: "김재원",
      company: "AB180",
      description:
        "AB180에서 Data Pipeline Team Lead를 맡고있습니다. 대용량 데이터를 안정적이고 효율적으로 처리하기 위해 팀에서 Go, Kafka 등을 적극 활용하고 있습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4N9idAngXz9Y0Kd1ZK63pOdBH5UoF7G-vAb7zEoAtz_rnx0TYLRWjsNoHHTfRbmedhqRUJEt7Z98tcjiSS7ARpvcs8CPTN1iIgjf8fvxd4j_xVVygXoVZusRpOWB4hGKG_YY3YBzfehjEjWiH91UP1F7aA58_xVhSjkbSTDDgfwNffpPkxQlXibQOtnXujXFvpwbBo5qyq8nuZCns16_KyQsdpQcCZGZSy_oqVetz9IBE-vfZF8gT9kV6l-WQmXSZ_4jT1R12X3XbCz2AN5Cs2OMrohc-9QzQTcOQCwMT97IKiZtgdyEp5m-IJks_8OWkfi18x0WiIQIkXvo4wiox0jWzFHxhlBmU6995lgCq4ODvv4nzT7L7nokrT3R1SiTWS4ZgbrB3KVUPu4OM15R4iLZpcaDz3gkbJnmiwLoWUZsQ2dKyu5fKGjWLoalykU0nd1k5DY-jVfBK0R5jn8bdimM2ycMlcr4qGy_F4s10Yq2CytUFosizGCOWssXfnbGb8nUHi0m-NJ8BoSC6NY0gycpOeph0xGMUQ8EuSiauWkidcXwfk2f--bqXZ2zWyi4plQLBGRQxKovv4FbObkV5XC36NVXKMiz4prcaOYuf03hZqW1ZNVOOkw6yyrI0-QJGjvPgfSiFU4sRvt7CLQquJbrHWtxsdu48FBDrjmDaTNfSzeHupskfpwBdDuKtrFM0Qfa_K_aS9PiGrPvfb9PKgwI2hgf3I5v20APu7lhq86eU01X3bNQMpIYVuyvvEVqa75u_boZiuEaKhTWURtCzMQQNALfL9XmpVfoaPGtUxZeU1Ach56xhQT0wiIVtv6US26Q2vJEpcZWzCEjb9ccsvydzC3mMdQjJfKAurJpkQdmgXrYY4i-hYaWekDutqOBChuNd1Nmf5lLnxzkvYBS-aiYcfzN4ySzFyCbyMbqzRNgV83THwTFsaXD0nhjoepwScSRA06GdQ8G1bM3H6oQEJXlqd4KWNgVGzZkfyba4k9x1qJO1r9G0kRGzUiaX36OcPgv9sukOjPz92dmSv6Ae0P5do7yT2SDV48T3YUdawmON3BTJNEgJf3JLG-r5YNLYxu75etEkyXFTFtUNU4fsokRpc6SbiUqXS0kOioBkt5TboDVR1NV8cyfnFyyY67dye06cz8O5BphnrVTtcrs71ZPBSKM6f7gZkymeC2lsRCI3bXouoFfWmrebVQ5iYijaqi4Kd33okANm7YEONbfbpADam3BQNfzTzI7ezSTfoJ_dMDCUHyMOgq5pnqwvS4nIsOSMZydBuyI2ZdoKmXi7cXkAb2k5DgJmE0w9z3w2gA7j3fmRWm8_AuU6F1yD4m859kJ2gbTy46nX8vGZqrR-cMaskCdnL4lgGNuoZvn1cX3dQ7",
    },
  },
  {
    id: 33,
    date: "08-06",
    startTime: "15:00",
    endTime: "15:10",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 34,
    date: "08-06",
    startTime: "15:10",
    endTime: "15:40",
    title: `TBD`,
    category: "Sponsor",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 35,
    date: "08-06",
    startTime: "15:40",
    endTime: "15:50",
    title: `쉬는시간 + 네트워킹`,
    category: "Break Time",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 36,
    date: "08-06",
    startTime: "15:50",
    endTime: "16:50",
    title: `GC in Golang`,
    category: "Main Talk",
    description:
      "Golang은 Concurrent Mark and Sweep을 사용한 GC를 채택하고 있습니다.\n \
      이 과정에서 latency를 줄이기 위하여 Stop The World를 줄이는 것이 주요한 목표입니다.\n \
      이러한 목표를 이루기 위하여 sweep을 위한 gc assist goroutine를 없애거나, mark단계를 하나로 만드는 등의 많은 노력을 하고있습니다. \
      이러한 노력들을 설명하고 어떤 이점이 있는지 소개합니다.",
    speaker: {
      name: "라스",
      company: "-",
      description:
        "분산 시스템에 관심이 많은 3년차 개발자입니다. 서버 개발을 주로 합니다.\n \
        PyconKR에서 2018년부터 2021년까지 4차례 발표를 했으며, PyconJP 2020에서도 발표를 진행했었습니다.\n \
        Golang과 관련하여 Golang Korea MeetUp in Seoul 2019.04 에서도 한차례 발표를 했었습니다.",
      profileImage:
        "https://lh3.googleusercontent.com/fife/AKsag4Oi0rMFCo9bMdwISS63xnPhmMj8gfBumNTclbxngbFnjhKyBOBPr9-2xYGPGIHHmf802fE-F99aC5Pn-kH4Tf-LF5yx4BhmNoQ46f5B9jF8e4P21qEExQWmpmjc4M4cLPHMmOHLSaMYuSYlgLvw8s8SgshAfiQWdd5oXoaAf59X6wHDpCk5TTVa8JQgGojkBgMnAAZdBhLlWZoAREKPa3J_835FnA8pguj3Sy30983Ym4S32Ei61EGybxGRbLbIAHH2d_bXvG0O8Mprz0xCpOEyJSs6IEPaObTp2Br70LUzNbXdZP-ngj6-peLOGzos1whrOA6N6Ym_xrGMuM3nHQJZtImK445pU3fwGjAEAH21Ap5YiYzBtaYeOUjc3mJIKFS7apvB7TsUO0Tov9xzqU7XKWLjp3XVCqo2X-95LwCH7ufweANJlRRmiOPeB5Su-E_pELJJOIyBL_NZBW-cRayTqUMZ_ew87NltcqJv-zXvqD139yc0XtXofpePpgSYHf8ew8dz8tZ_",
    },
  },
  {
    id: 37,
    date: "08-06",
    startTime: "16:50",
    endTime: "17:30",
    title: `이벤트 + 네트워킹`,
    category: "Event + Networking",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 38,
    date: "08-06",
    startTime: "17:30",
    endTime: "17:40",
    title: `이벤트 (추첨)`,
    category: "Event",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
  {
    id: 39,
    date: "08-06",
    startTime: "17:40",
    endTime: "18:00",
    title: `클로징 (20분)`,
    category: "Closing",
    description: ``,
    speaker: {
      name: "",
      company: "",
      description: "",
      profileImage: "",
    },
  },
];
