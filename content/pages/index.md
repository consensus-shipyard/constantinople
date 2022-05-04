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
      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1651552471/consensus-factory/alin-tomescu_eldqft.jpg
        name: Alin Tomescu
        title: Aptos labs
        label: 'Talk 7:'
        headline: Are Merkle trees a panacea
        text: >
          Are Merkle trees a panacea? In this talk, I argue they are not and
          present several tree-based vector commitments that offer interesting
          trade-offs when compared to Merkle’s classic construction. First, I
          will cover previous work on tree-based VCs from polynomial commitments
          and lattices. Unlike Merkle trees, these constructions have a
          combination of smaller proof sizes, useful homomorphisms and more
          efficient proof aggregation.
      - imageSrc: >-
          https://res.cloudinary.com/protocolai/image/upload/v1651551192/consensus-factory/chris-peikert_cmwkxw.jpg
        name: Chris Peikert
        title: Algorand and U. of Michigan
        label: 'Talk 6:'
        headline: Vector and Functional Commitments from Lattices
        text: >
          Vector commitments (VCs) allow one to commit concisely to an ordered
          sequence of values, so that the values at desired positions can later
          be concisely and verifiably revealed. In addition, a VC can be
          statelessly updatable, meaning that commitments and proofs can be
          updated to reflect changes to individual entries, using knowledge of
          just those changes (and not the entire vector). To date, there have
          been relatively few post-quantum constructions.
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
      - headline: A journey in vector commitments
        time: '11:00 am'
        name: Dario Fiore
      - headline: On the efficiency and flexibility of Linear-map vector commitments
        time: '1:00 pm'
        name: Arantxa Zapico
      - headline: Are Merkle trees a panacea
        time: '2:00 pm'
        name: Alin Tomescu
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

