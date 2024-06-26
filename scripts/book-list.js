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
  {
    id: 16,
    title: 'The Sentinel',
    authors: [ 'Troy Denning' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-Ii8jjxVcJ7rsGK9EaKEj',
      part: 5
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 17,
    title: 'The Godborn',
    authors: [ 'Paul S Kemp' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-Ii8jjxVcJ7rsGK9EaKEj',
      part: 2
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 18,
    title: 'The Companions',
    authors: [ 'R A Salvatore' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-Ii8jjxVcJ7rsGK9EaKEj',
      part: 1
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 19,
    title: 'The Adversary',
    authors: [ 'Erin M Evans' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-Ii8jjxVcJ7rsGK9EaKEj',
      part: 3
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 20,
    title: 'The Reaver',
    authors: [ 'Richard Lee Byers' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-Ii8jjxVcJ7rsGK9EaKEj',
      part: 4
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 21,
    title: 'The Herald',
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-Ii8jjxVcJ7rsGK9EaKEj',
      part: 6
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 22,
    title: 'The Black Talon',
    authors: [ 'Richard A Knaak' ],
    tags: [ 'dragonlance' ],
    series:
    {
      id: 'sid-akjyDmMBeoied4u20GS7',
      part: 1
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 23,
    title: 'The Fire Rose',
    authors: [ 'Richard A Knaak' ],
    tags: [ 'dragonlance' ],
    series:
    {
      id: 'sid-akjyDmMBeoied4u20GS7',
      part: 2
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 24,
    title: 'The Gargoyle King',
    authors: [ 'Richard A Knaak' ],
    tags: [ 'dragonlance' ],
    series:
    {
      id: 'sid-akjyDmMBeoied4u20GS7',
      part: 3
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 25,
    title: 'The Temptation of Elminster',
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 3
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 26,
    title: 'Elminster in Myth Drannor',
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 2
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 27,
    title: 'Elminster in Hell',
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 4
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 28,
    title: `Elminster's Daughter`,
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 5
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 29,
    title: `Elminster: The Making of a Mage`,
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 1
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 30,
    title: `Elminster Must Die`,
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 6
    },
    stats:
    {
      nRead: 0,
      acquire: false
    }
  },
  {
    id: 31,
    title: `Bury Elminster Deep`,
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 7
    },
    stats:
    {
      nRead: 0,
      acquire: false
    }
  },
  {
    id: 32,
    title: `Elminster Enraged`,
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 8
    },
    stats:
    {
      nRead: 0,
      acquire: false
    }
  },
  {
    id: 33,
    title: `The Herald`,
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 9
    },
    stats:
    {
      nRead: 0,
      acquire: false
    }
  },
  {
    id: 34,
    title: `Spellstorm`,
    authors: [ 'Ed Greenwood' ],
    tags: [ 'forgotten realms' ],
    series:
    {
      id: 'sid-LO68Q6x2Nq57iyxe39Gk',
      part: 10
    },
    stats:
    {
      nRead: 0,
      acquire: false
    }
  },
  {
    id: 35,
    title: `Blood and Honor`,
    authors: [ 'Graeme Davis' ],
    tags: [ 'eberron' ],
    series:
    {
      id: 'sid-TCZOD1xrBGWyUpMzixaJ',
      part: 4
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 36,
    title: `The Crimson Talisman`,
    authors: [ 'Adrian Cole' ],
    tags: [ 'eberron' ],
    series:
    {
      id: 'sid-TCZOD1xrBGWyUpMzixaJ',
      part: 1
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 37,
    title: `The Orb of Xoriat`,
    authors: [ 'Edward Bolme' ],
    tags: [ 'eberron' ],
    series:
    {
      id: 'sid-TCZOD1xrBGWyUpMzixaJ',
      part: 2
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 38,
    title: `In the Claws of the Tiger`,
    authors: [ 'James Wyatt' ],
    tags: [ 'eberron' ],
    series:
    {
      id: 'sid-TCZOD1xrBGWyUpMzixaJ',
      part: 3
    },
    stats:
    {
      nRead: 0,
      acquire: true
    }
  },
  {
    id: 39,
    title: `The Chronicles of Malus Darkblade`,
    subtitle: `Volume One`,
    authors: [ 'Dan Abnett', 'Mike Lee' ],
    novels:
    [
      { title: 'The Blood Price' },
      { title: `The Daemon's Curse` },
      { title: 'Bloodstorm' },
      { title: 'Reaper of Souls' },
    ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-l3liuexnktPPWE6puDJn',
      part: 1,
      parts: [ 0, 1, 2, 3 ]
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 40,
    title: `The Chronicles of Malus Darkblade`,
    subtitle: `Volume Two`,
    authors: [ 'Dan Abnett', 'Mike Lee', 'C L Werner' ],
    novels:
      [
        { title: 'Warpsword', authors: [ 'Dan Abnett', 'Mike Lee' ] },
        { title: `Lord of Ruin`, authors: [ 'Dan Abnett', 'Mike Lee' ] },
        { title: 'Deathblade', authors: [ 'C L Werner' ] },
        { title: 'Bloodwalker', authors: [ 'C L Werner' ] },
      ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-l3liuexnktPPWE6puDJn',
      part: 2,
      parts: [ 4, 5, 6, 7 ]
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 41,
    title: `Lord of Ruin`,
    subtitle: `A Tale of Malus Darkblade`,
    authors: [ 'Dan Abnett', 'Mike Lee' ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-l3liuexnktPPWE6puDJn',
      part: 5
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 42,
    title: `Warpsword`,
    subtitle: `A Tale of Malus Darkblade`,
    authors: [ 'Dan Abnett', 'Mike Lee' ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-l3liuexnktPPWE6puDJn',
      part: 4
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 43,
    title: `Ship of Magic`,
    authors: [ 'Robin Hobb' ],
    series:
    {
      id: 'sid-AQTJKLE7sgWYZx3s93RT',
      part: 1
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 44,
    title: `The Mad Ship`,
    authors: [ 'Robin Hobb' ],
    series:
    {
      id: 'sid-AQTJKLE7sgWYZx3s93RT',
      part: 2
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 45,
    title: `Ship of Destiny`,
    authors: [ 'Robin Hobb' ],
    series:
    {
      id: 'sid-AQTJKLE7sgWYZx3s93RT',
      part: 3
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 46,
    title: `Gotrek and Felix`,
    subtitle: `The First Omnibus`,
    authors: [ 'William King' ],
    novels:
    [
      { title: 'Trollslayer', authors: [ 'William King' ] },
      { title: 'Skavenslayer', authors: [ 'William King' ] },
      { title: 'Daemonslayer', authors: [ 'William King' ] },
      { title: 'A Place of Quite Assembly', authors: [ 'John Brunner' ] },
      { title: 'Blood Sport', authors: [ 'Josh Reynolds' ] },
      { title: 'Kineater', authors: [ 'Jordan Ellinger' ] },
      { title: 'Mind-Stealer', authors: [ 'C L Werner' ] },
      { title: 'Death and Glory!', authors: [ 'William King' ] },
    ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-EKaM8wdkqt13cq4WAgDo',
      part: 1
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 47,
    title: `Gotrek and Felix`,
    subtitle: `The Second Omnibus`,
    authors: [ 'William King' ],
    novels:
      [
        { title: 'Dragonslayer' },
        { title: 'Beastslayer' },
        { title: 'Vampireslayer' },
        { title: `The Tilean's Talisman` },
        { title: `A Cask of Wynters` },
        { title: `Prophecy` },
        { title: `Lord of Undeath` },
        { title: `The Two Crowns of Ras Karim` },
      ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-EKaM8wdkqt13cq4WAgDo',
      part: 2
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 48,
    title: `Gotrek and Felix`,
    subtitle: `The Third Omnibus`,
    authors: [ 'William King', 'Nathan Long' ],
    novels:
    [
      { title: 'Giantslayer', authors: [ 'William King' ] },
      { title: `Redhand's Daughter`, authors: [ 'William King' ] },
      { title: `Orcslayer`, authors: [ 'Nathan Long' ] },
      { title: `Manslayer`, authors: [ 'Nathan Long' ] },
      { title: `The Oberwald Ripper`, authors: [ 'L J Goulding' ] },
      { title: `Red Snow`, authors: [ 'Nathan Long' ] },
      { title: `Last Orders`, authors: [ 'Andy Smillie' ] },
    ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-EKaM8wdkqt13cq4WAgDo',
      part: 3
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 49,
    title: `Gotrek and Felix`,
    subtitle: `The Fourth Omnibus`,
    authors: [ 'Nathan Long' ],
    novels:
    [
      { title: 'Elfslayer' },
      { title: 'Slayer of the Storm God' },
      { title: 'Shamanslayer' },
      { title: 'Zombieslayer' },
      { title: 'The Funeral of Gotrek Gurnisson', authors: [ 'Richard Salter' ] },
      { title: `Slayer's Honour` },
    ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-EKaM8wdkqt13cq4WAgDo',
      part: 4
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 50,
    title: `Gardens of the Moon`,
    authors: [ 'Steven Erikson' ],
    series:
    {
      id: 'sid-JdKOYHLDhXmjEth6RPfA',
      part: 1
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 51,
    title: `The Uriel Ventris Chronicles`,
    subtitle: `Volume One`,
    authors: [ 'Graham McNeill' ],
    novels:
    [
      { title: `Chains of Command` },
      { title: `Nightbringer` },
      { title: `Leviathan` },
      { title: `Warriors of Ultramar` },
      { title: `Consequences` },
      { title: `Dead Sky, Black Sun` },
    ],
    tags: [ 'warhammer' ],
    series:
    {
      id: 'sid-0dlWFGs7UtZdB8ku5nuC',
      part: 1
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 52,
    title: `The Magos`,
    authors: [ 'Dan Abnett' ],
    series:
    {
      id: 'sid-a2gjOYF3gQ8XAsfiGu3Y',
      part: 4
    },
    stats:
    {
      nRead: 0
    }
  },
  {
    id: 53,
    title: `Night Lords`,
    subtitle: `The Omnibus`,
    authors: [ 'Aaron Dembski-Bowden' ],
    novels:
    [
      { title: `Shadow Knight` },
      { title: `Soul Hunter` },
      { title: `Throne of Lies` },
      { title: `Blood Reaver` },
      { title: `The Core` },
      { title: `Void Stalker` },
    ],
    tags: [ 'warhammer' ],
    stats:
    {
      nRead: 0
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