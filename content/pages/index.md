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
      subhead: text-2xl font-bold font-2 border-b-3 inline-block pb-6 mb-16
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
    headline: 'InterPlanetary Consensus'
    subhead: Custom L2+ to Scale Filecoin & Beyond
    body: 'As we count down towards IPC general availability, we bring together developers, users, and other stakeholders for a day of talks and workshops. Listen to the latest developments, learn about the exciting products built on it, and take part in crafting the future of IPC.'
    buttons:
      - label: Register Here
        link: 'https://23.labweek.io/countdown-to-ipc'
    _template: tailwindFeature
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: 'pt-20 pb-0 pr-60 pl-10 sm:pt-10 sm:pb-0 sm:pr-10 sm:pl-10'
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-primary font-2 text-2xl mb-5 font-bold
      subheadStyles: 'text-black font-1 text-3xl mb-0 '
      textStyles: 'text-black font-1 text-base mb-0 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: Speakers
    subhead: ''
    body: ''
    _template: banner
  - headline: This is the main headline
    cards:
      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1655756520/consensus-factory/marko_vukoli_he2xhv.png
        name: Marko Vukolić
        title: Protocol Labs | ConsensusLab
        label: "Marko joined Protocol Labs mid-2021 as the ConsensusLab lead. Prior to this he was a Principal Research Staff Member in\_IBM Research Zurich, where he worked from 2015-2021 and earlier as a PostDoc (2008-2010). Marko obtained a Doctor of Science (PhD) degree in Distributed Systems from EPFL in the\_Distributed Programming Laboratory (LPD)\_in 2008. Prior to his PhD, Marko graduated from the\_EPFL Doctoral School in Computer and Communication Sciences\_in 2003 and obtained a dipl.ing. degree in Electrical Engineering (Telecommunications) from the\_School of Electrical Engineering, University of Belgrade, in 2001. Marko’s main research interest is in decentralized systems, that is in distributed systems that span multiple administrative and trust domains (e.g., permissionless and permissioned blockchain systems)."
        headline: ''
        text: ''
      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1652729448/consensus-factory/Alfonso_de_la_Rocha_IOHK_prxwmd.png
        name: Alfonso de la Rocha
        title: Protocol Labs | ConsensusLab
        label: >-
          Before joining Protocol Labs, Alfonso de la Rocha worked as a
          blockchain expert at Telefónica R&D, where he was responsible for the
          design and development of core technology based on blockchains,
          distributed systems, and advanced cryptography. Alfonso’s involvement
          in research and development began at Universidad Politécnica de
          Madrid, where he worked on topics related to energy efficiency in data
          centers. His broad R&D experience also includes research into the
          compression efficiency of video coding standards at Ericsson Research
          and projects related to securing interdomain routing protocols at KTH
          Royal Institute of Technology in Stockholm. Alfonso is also an avid
          reader and basketball lover.
        headline: ''
        text: ''
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
      - headline: IPC Vision and Roadmap
        time: '09:00'
        name: 'Mikhail Turilin, Protocol Labs'
      - headline: IPC Technical Strategy
        time: '09:30'
        name: 'Raúl Kripalani, Protocol Labs'
      - headline: How does IPC compare to other scaling solutions?
        time: '10:00'
        name: 'Marko Vukolić, Protocol Labs'
      - headline: 'Launch: Fendermint and Canopy'
        time: '10:30'
        name: 'Alfonso de la Rocha, Protocol Labs'
      - headline: Coffee
        time: '10:30'
        name: 'Break'
      - headline: 'Scaling Filecoin'
        time: '11:00'
        name: 'Juan Benet, Protocol Labs'
      - headline: 'IPC for Founders'
        time: '11:30'
        name: 'Parth Pathak, Protocol Labs'
      - headline: 'Lunch'
        time: '12:00'
        name: 'Break'        
      - headline: 'Workshop: Deploying an EVM Smart Contract on a Subnet'
        time: '14:00'
        name: 'Longfei Wang, Protocol Labs'
      - headline: 'Workshop: Deploying an IPC Subnet'
        time: '15:30'
        name: 'Sarah Thiam, Protocol Labs'        
    navigationLabel: ''
    _template: schedule
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-20 pb-20 pr-10 pl-10
      width: normal
      labelStyles: 'text-black font-1 text-sm mb-0 '
      headlineStyles: text-black font-2 text-2xl mb-4 font-bold
      subheadStyles: 'text-black font-1 text-lg mb-3.5 '
      textStyles: 'text-black font-1 text-lg mb-8 '
      contentOrder: labelHeadingsContent
    label: ''
    headline: ''
    subhead: ''
    body: |
      Swissôtel The Bosphorus, Istanbul, Türkiye

      16 November 2023

      ***
    buttons:
      - label: Register Here
        link: 'https://23.labweek.io/countdown-to-ipc'
        type: solid
        buttonFillStyles: bg-accent1
        textColor: white
        backgroundColor: primary
    _template: banner
meta:
  pageTitle: 'InterPlanetary Consensus: Custom L2+ to Scale Filecoin & Beyond'
  pageDescription: >-
    Listen to the latest developments, learn about the exciting products built on it, 
    and take part in crafting the future of IPC.
---

