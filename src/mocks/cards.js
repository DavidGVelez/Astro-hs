const allCards = {
    cards: [
      {
        id: 38913,
        name: 'A Light in the Darkness',
        text: '<b>Discover</b> a minion. Give it +1/+1.',
        collectible: 1,
        slug: '38913-a-light-in-the-darkness',
        classes: [
          {
            slug: 'paladin',
            id: 5,
            name: 'Paladin'
          }
        ],
        rarity: {
          slug: 'common',
          id: 1,
          craftingCost: [40, 400],
          dustValue: [5, 50],
          name: 'Common'
        },
        set: {
          id: 21,
          name: 'Whispers of the Old Gods',
          slug: 'whispers-of-the-old-gods'
        },
        artist: 'Zoltan Boros',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/289b8a4599a7119ddbe3abc1d767e12efbda64db3631936cda76dd8c8f651126.png',
        flavor:
          'Wait, how can you have a light in the dark? If you turn on a light while it’s dark, doesn’t that mean it’s no longer dark?',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/3e52c45971994b62bd90cf71adb97e583146760a45a2e283ba67a9557746c61a.png',
        imageGold: '',
        keywords: [
          {
            id: 21,
            slug: 'discover',
            name: 'Discover',
            refText: 'Choose one of three cards to add to your hand.',
            text: 'Choose one of three cards to add to your hand.'
          }
        ],
        manaCost: 2,
        spellSchool: [
          {
            slug: 'holy',
            id: 5,
            name: 'Holy'
          }
        ]
      },
      {
        id: 72923,
        name: 'Queen Azshara',
        text: "<b>Battlecry:</b> If you've cast three spells while holding this, choose an Ancient Relic. <i>( left!)</i> <i>(Ready!)</i>",
        collectible: 1,
        slug: '72923-queen-azshara',
        classes: [
          {
            slug: 'neutral',
            id: 12,
            name: 'Neutral'
          }
        ],
        rarity: {
          slug: 'legendary',
          id: 5,
          craftingCost: [1600, 3200],
          dustValue: [400, 1600],
          name: 'Legendary'
        },
        set: {
          id: 1658,
          name: 'Voyage to the Sunken City',
          slug: 'voyage-to-the-sunken-city'
        },
        artist: 'Daniel Orive',
        cropImage:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4ace1bd344ccf339f7ef24478f3d05ed4d06a55125ab915e3a8aff710f805bc0.png',
        flavor:
          'Hobbies include: Ordering subjects around, making deals with old gods, and taking long walks under the beach.',
        image:
          'https://d15f34w2p8l1cc.cloudfront.net/hearthstone/4568452e1ac42cda89b24fd20f826276f1063791e855e8ffe4899363fff40f9e.png',
        imageGold: '',
        keywords: [
          {
            id: 8,
            slug: 'battlecry',
            name: 'Battlecry',
            refText: 'Does something when you play it from your hand.',
            text: 'Does something when you play it from your hand.',
            gameModes: [1, 2, 4, 5]
          }
        ],
        manaCost: 5,
        minionType: [
          {
            slug: 'naga',
            id: 92,
            name: 'Naga',
            gameModes: [1, 2, 4, 5]
          }
        ]
      }
    ]
  }
  
  export { allCards }
  