const bookList =
[
  {
    id: 0,
    title: 'Minka Lesk',
    subtitle: 'The Last Whiteshield',
    authors: [ 'Justin D Hill' ],
    synopsis: [ `A Minka Lesk Omnibus`, `Minka Lesk began her career as a young Whiteshield, before earning her place as a Cadian officer. Follow her career through gruelling battles across the galaxy.` ],
    novels:
    [
      { title: 'Cadia Stands' },
      { title: 'The Place of Pain and Healing' },
      { title: 'The Battle for Markgraaf Hive' },
      { title: 'Cadian Honour' },
      { title: 'Traitor Rock' },
    ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 1,
    title: 'Forges of Mars',
    authors: [ 'Graham McNeill' ],
    novels:
    [
      { title: 'Priests of Mars' },
      { title: 'Lords of Mars' },
      { title: 'Gods of Mars' },
      { title: 'Zero Day Exploit' },
    ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 2,
    title: 'Blackstone Fortress',
    subtitle: 'The Omnibus',
    authors: [ 'Darius Hinks' ],
    novels:
    [
      { title: 'Blackstone Fortress', authors: [ 'Darius Hinks' ] },
      { title: 'Blackstone Fortress: Ascension', authors: [ 'Darius Hinks' ] },
      { title: 'Talisman of Vaul', authors: [ 'Darius Hinks' ] },
      { title: 'Shapes Pent in Hell', authors: [ 'Josh Reynolds' ] },
      { title: 'Past in Flames', authors: [ 'J C Stearns' ] },
      { title: 'Negavolt', authors: [ 'Nicholas Wolf' ] },
      { title: 'The Three-Edged Blade', authors: [ 'Denny Flowers' ] },
      { title: 'Motherlode', authors: [ 'Nick Kyme' ] },
      { title: 'Purity is a Lie', authors: [ 'Gav Thorpe' ] },
      { title: 'The Oath in Darkness', authors: [ 'David Annandale' ] },
      { title: 'Man of Iron', authors: [ 'Guy Haley' ] },
      { title: 'The Beast Inside', authors: [ 'Darius Hinks' ] },
      { title: 'The Last of the Longhorns', authors: [ 'Nick Kyme' ] },
      { title: 'Warsphere', authors: [ 'Darius Hinks' ] },
      { title: `The Warp's Curse`, authors: [ 'Michael J Hollows' ] },
    ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 3,
    title: 'Wrath of the Lost',
    subtitle: 'A Flesh Tearers Novel',
    authors: [ 'Chris Forrester' ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 4,
    title: 'Renegades',
    subtitle: 'Harrowmaster',
    authors: [ 'Mike Brooks' ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 5,
    title: 'God-Machines',
    subtitle: 'A Warhammer 40 000 Omnibus',
    authors: [ 'Gav Thorpe', 'David Annandale' ],
    novels:
    [
      { title: 'Imperator: Wrath of the Omnissiah', authors: [ 'Gav Thorpe' ] },
      { title: 'Vengeance of the Immortal', authors: [ 'Gav Thorpe' ] },
      { title: 'Warlord: Fury of the God-Machine', authors: [ 'David Annandale' ] },
      { title: 'Gates of the Devourer', authors: [ 'David Annandale' ] },
      { title: 'Kingsblade', authors: [ 'Andy Clark' ] },
      { title: 'Becoming', authors: [ 'Andy Clark' ] },
      { title: 'Knightsblade', authors: [ 'Andy Clark' ] },
      { title: 'Defiant', authors: [ 'Andy Clark' ] },
      { title: 'Knights of the Imperium', authors: [ 'Graham McNeill' ] },
      { title: 'Hunting Ground', authors: [ 'Ian St. Martin' ] },
    ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 6,
    title: 'The Hollow King',
    subtitle: 'A Cado Ezechiar Novel',
    authors: [ 'John French' ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 7,
    title: 'The Soul Drinkers',
    subtitle: 'Omnibus II',
    authors: [ 'Ben Counter' ],
    novels:
    [
      { title: 'Chapter War' },
      { title: 'Hellforged' },
      { title: 'Daenyathos' },
      { title: 'Phalanx' },
    ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 8,
    title: 'Sabbat War',
    subtitle: 'A Sabbat Worlds Anthology',
    authors: [ 'Dan Abnett' ],
    novels:
    [
      { title: 'This is What Victory Feels Like (Forever the Same)', authors: [ 'Dan Abnett' ] },
      { title: 'Whose Voice is Heard No More', authors: [ 'Graham McNeill' ] },
      { title: 'Glory Flight', authors: [ 'Robert Rath' ] },
      { title: 'The Death of the Prophet', authors: [ 'Marc Collins' ] },
      { title: 'Nineteen-Three Coreward, Resolved', authors: [ 'Matthew Farrer' ] },
      { title: 'The Tomb of Vichres', authors: [ 'Justin D Hill' ] },
      { title: 'Deep', authors: [ 'Edoardo Albert' ] },
      { title: 'Armaduke', authors: [ 'John French' ] },
      { title: 'Indomitable Spirit', authors: [ 'Rachel Harrison' ] },
      { title: 'From There to Here', authors: [ 'Dan Abnett' ] },
    ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 9,
    title: 'Hero of the Imperium',
    subtitle: 'A Ciaphas Cain Omnibus',
    authors: [ 'Sandy Mitchell' ],
    novels:
    [
      { title: 'Fight or Flight' },
      { title: 'For the Emperor' },
      { title: 'Echoes of the Tomb' },
      { title: 'Caves of Ice' },
      { title: 'The Beguiling' },
      { title: `The Traitor's Hand` },
    ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 10,
    title: 'The Victory, Part Two',
    subtitle: `A Gaunt's Ghosts Omnibus`,
    authors: [ 'Dan Abnett' ],
    novels:
    [
      { title: 'The Warmaster' },
      { title: 'Anarch' },
      { title: 'This is What Victory Feels Like (Forever the Same)' },
      { title: 'From There to Here' },
    ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-pomb1iU6tID4wLHBapiI',
      part: 2
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 11,
    title: 'Radical Candor',
    subtitle: 'How to get what you want by saying what you mean',
    authors: [ 'Kim Scott' ],
    stats:
    {
      nRead: 1,
      rating: 9,
      reRead: true
    }
  },
  {
    id: 12,
    title: 'Three Assassins',
    authors: [ 'Kotaro Isaka' ],
    series:
    {
      id: 'sid-FJNhIvfNBW8h2AWCnbQZ',
      part: 1
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 13,
    title: 'The Victory, Part One',
    subtitle: `A Gaunt's Ghosts Omnibus`,
    authors: [ 'Dan Abnett' ],
    novels:
    [
      { title: 'Blood Pact' },
      { title: `Salvation's Reach` },
      { title: 'Family' },
      { title: 'You Never Know' },
      { title: 'Ghosts and Bad Shadows' },
      { title: 'Killbox' },
    ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-pomb1iU6tID4wLHBapiI',
      part: 1
    },
    stats:
    {
      acquire: true
    }
  },
  {
    id: 14,
    title: 'Bullet Train',
    authors: [ 'Kotaro Isaka' ],
    series:
    {
      id: 'sid-FJNhIvfNBW8h2AWCnbQZ',
      part: 2
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 15,
    title: 'The Mantis',
    authors: [ 'Kotaro Isaka' ],
    series:
    {
      id: 'sid-FJNhIvfNBW8h2AWCnbQZ',
      part: 3
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  /*
  {
    id: 13,
    title: '',
    subtitle: '',
    authors: [],
    novels: [],
    tags: [ '' ],
    stats:
    {
      nRead: 0
    }
  },
   */
];