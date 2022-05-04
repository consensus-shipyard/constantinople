---
draft: true
blocks:
  - tailwind:
      section: ''
      wrap: px-10 pt-48 pb-16 flex items-center max-w-desktop-full mx-auto
      imageWrap: ''
      image: ''
      contentWrap: ''
      content: font-1 text-center text-white text-lg
      label: ''
      headline: text-3xl font-bold font-2
      subhead: text-3xl font-bold font-2 border-b-3 inline-block pb-6 mb-16
      text: mb-12
      buttons: inline-flex flex-col
      button: ' font-bold text-base py-2 px-4 mb-4 first:bg-accent1'
    background:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1651519685/consensus-factory/hero_bg_gocqtx.png
      ornaments:
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1651524196/consensus-factory/hero-ornament-left_lvldlf.svg
          alignment: bottom
          width: '460'
          height: '417'
          xOffset: '-390'
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1651524200/consensus-factory/hero-ornament-right_dhqhk7.svg
          alignment: top
          xOffset: '300'
          yOffset: '-45'
    label: Protocol Labs Research invites you to
    headline: 'ConsensusFactory: '
    subhead: Decentralized Reflections on Consensus
    body: >+
      Consensus is at the heart of decentralised systems, having taken centre
      stage with the introduction of Nakamoto’s Proof-of-Work (PoW) algorithm
      and the subsequent explosion of blockchain technology. However, it also
      poses a significant scalability bottleneck for blockchain networks. The
      goal of this workshop is to present different scalability approaches being
      pursued across different projects, and foster new ideas and
      collaborations.



    buttons:
      - label: Register
        link: /
      - label: Learn More
        link: /
    _template: tailwindFeature
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-32 pb-32 pr-10 pl-10
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: 'text-black font-1 text-5xl mb-0 '
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-1 text-2xl mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: ''
    subhead: ''
    body: >
      More about the topic(s) to be discused. Lorem ipsum dolor sit amet,
      consectetur adipiscing. Nam faucibus, eros ultrices lobortis laoreet, ex
      tellus dapibus sapien, nec sodales ligula turpis ac dui. This X-hour event
      will include a number of sessions that explore this \[adjective] topic.
    _template: banner
  - headline: This is the main headline
    cards:
      - imageSrc: ''
        name: TBD
        title: TBD
        label: 'Talk 1:'
        headline: TBA
        text: |
          Abstract
      - imageSrc: ''
        name: TBD
        title: TBD
        label: 'Talk 2:'
        headline: TBA
        text: |
          Abstract
    _template: speakerCards
  - background:
      src: >-
        https://res.cloudinary.com/protocolai/image/upload/v1651519685/consensus-factory/hero_bg_gocqtx.png
      position: object-center
      ornaments:
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1651605746/consensus-factory/event-ornament-bottom_m9sjeg.svg
          alignment: bottom
          xOffset: '-600'
        - src: >-
            https://res.cloudinary.com/protocolai/image/upload/v1651605750/consensus-factory/event-ornament-top_s0gkrv.svg
          alignment: top
          xOffset: '500'
    headline: Event Schedule
    subhead: ''
    items:
      - headline: Title 1
        time: '11:00 am'
        name: TBD
      - headline: Title 2
        time: '1:00 pm'
        name: TBD
      - headline: Title 3
        time: '2:00 pm'
        name: TBD
    _template: schedule
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-20 pb-20 pr-10 pl-10
      width: narrow
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-2 text-2xl mb-4 font-bold
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-1 undefined mb-8 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: '[registration CTA]'
    subhead: ''
    body: >
      Lorem ipsum dolor sit amet, consectetur adipiscing. Nam faucibus, eros
      ultrices lobortis laoreet, ex tellus dapibus sapien.
    buttons:
      - label: Register
        link: /
        type: solid
        buttonFillStyles: bg-accent1
        textColor: white
        backgroundColor: primary
    _template: banner
meta:
  pageTitle: Consensus Factory
  pageDescription: Consensus Factory
---

