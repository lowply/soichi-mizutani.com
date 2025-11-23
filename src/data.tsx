export interface Work {
  title_en: string
  title_ja: string
  photos: number
  body?: string
}

export interface Category {
  title: string
  works: Record<string, Work>
}

export const Data: Record<string, Category> = {
  'architecture-house': {
    title: 'Architecture / House',
    works: {
      'hasegawa-house': {
        title_en: 'Hasegawa Dental Office',
        title_ja: 'はせがわ歯科医院',
        photos: 8
      },
      'ito-ex': {
        title_en: 'Ito Dental Clinic',
        title_ja: '伊藤デンタルクリニック',
        photos: 6
      },
      'murakami-ex': {
        title_en: 'Murakami House Ex',
        title_ja: '村上邸 外観',
        photos: 6
      },
      'murakami-in': {
        title_en: 'Murakami House In',
        title_ja: '村上邸 内観',
        photos: 6
      },
      'mhouse': {
        title_en: 'M House',
        title_ja: 'M邸',
        photos: 9
      },
      'thouse': {
        title_en: 'T House',
        title_ja: 'T邸',
        photos: 6
      },
      'khouse': {
        title_en: 'K House',
        title_ja: 'K邸',
        photos: 16
      },
      'jhouse': {
        title_en: 'J House',
        title_ja: 'J邸',
        photos: 2
      },
      'fmhouse': {
        title_en: 'F.M. House',
        title_ja: 'F.M.邸',
        photos: 5
      },
    }
  },
  'exhibition': {
    title: 'Exhibition',
    works: {
      'pole': {
        title_en: '一本の棒 / 2011',
        title_ja: '一本の棒 / 2011',
        photos: 7
      },
      'void': {
        title_en: 'Void > 0 / 1998',
        title_ja: '高密度のゼロ空間 / 1998',
        body: '空間インスタレーション, Minamiaoyama HOUSE 6119',
        photos: 6
      },
    }
  },
  'interior-bar': {
    title: 'Interior Design / Bar',
    works: {
      'mbjakarta': {
        title_en: 'Motion Blue Jakarta',
        title_ja: 'モーションブルー ジャカルタ',
        photos: 7
      },
      'baryuki': {
        title_en: 'Bar Yuki',
        title_ja: 'バー 雪',
        photos: 7
      },
      'barnobu': {
        title_en: 'Bar NOBU',
        title_ja: 'バー ノブ',
        photos: 5
      },
      'airblancservice': {
        title_en: 'Air Blanc Service',
        title_ja: 'エールブランサービス',
        photos: 2
      },
    }
  },
  'interior-gallery': {
    title: 'Interior Design / Gallery',
    works: {
      'washiya': {
        title_en: 'WASHIYA SUGIHARA WASHIPAPER',
        title_ja: '杉原商店 和紙屋',
        photos: 4
      },
      'shanghai': {
        title_en: 'Shanghai EXPO 2010',
        title_ja: '上海エキスポ2010',
        photos: 3
      },
      'eyes': {
        title_en: 'Showroom EYES',
        title_ja: 'ショールーム EYES',
        photos: 6
      },
      'altemeister': {
        title_en: 'Altemeister Showroom',
        title_ja: 'アルテマイスター ショールーム',
        photos: 3
      },
      'hermes-ex': {
        title_en: 'Hermes Exhibition',
        title_ja: '「エルメスが出会う日本の美」展',
        photos: 3
      },
      'mediahouse': {
        title_en: 'Media House',
        title_ja: '大日本印刷メディアハウス',
        photos: 3
      },
      'qualia': {
        title_en: 'Qualia',
        title_ja: 'クオリア',
        photos: 3
      },
    }
  },
  'interior-hotel': {
    title: 'Interior Design / Hotel',
    works: {
      'azabu-kyoto': {
        title_en: 'Auberge Azabu Kyoto',
        title_ja: 'オーベルジュ麻布京都',
        photos: 5
      }
    }
  },
  'interior-medical': {
    title: 'Interior Design / Medical',
    works: {
      'hasegawa': {
        title_en: 'Hasegawa Dental Office Fujinomiya',
        title_ja: 'はせがわ歯科医院 富士宮',
        photos: 9
      },
      'e': {
        title_en: 'E.Dental&Ortho',
        title_ja: 'E.Dental&Ortho',
        photos: 16
      },
      'konoha': {
        title_en: 'Konoha Dental Clinic Shizuoka',
        title_ja: 'このは歯科 静岡',
        photos: 9
      },
      'mamuro': {
        title_en: 'Mamuro Dental Clinic Yamagata',
        title_ja: 'まむろ歯科 山形',
        photos: 17
      },
      'funada': {
        title_en: 'Funada Dental Clinic Chofu',
        title_ja: '船田歯科医院 調布',
        photos: 16
      },
      'ito': {
        title_en: 'Ito Dental Clinic Odawara',
        title_ja: '伊藤デンタルクリニック 小田原',
        photos: 17
      },
      'nakagawa': {
        title_en: 'Nakagawa Dental Clinic Osaka',
        title_ja: '中川歯科 大阪',
        photos: 3
      },
      'kuragano': {
        title_en: 'Kuragano Dental Clinic Toyonaka',
        title_ja: 'クラガノ歯科医院 豊中',
        photos: 5
      },
    }
  },
  'interior-office': {
    title: 'Interior Design / Office',
    works: {
      'dnp-lab': {
        title_en: 'DNP P&I Lab Gotanda',
        title_ja: 'DNP P&I ラボ 五反田',
        photos: 5
      },
      'hermes-office': {
        title_en: 'Hermes Japon Office',
        title_ja: '銀座エルメスジャポン 本社オフィス',
        photos: 3
      },
      'mori66': {
        title_en: 'Roppongi 66',
        title_ja: '森ビル六本木66プロジェクト',
        photos: 3
      },
      'stadium': {
        title_en: 'Office Stadium',
        title_ja: 'オフィス スタジアム',
        photos: 4
      }
    }
  },
  'interior-restaurant': {
    title: 'Interior Design / Restaurant',
    works: {
      'al-che-cciano-con-cert': {
        title_en: 'Al-che-cciano con cert',
        title_ja: 'アル・ケッチァーノ コンチェルト',
        photos: 9
      },
      'sugimoto': {
        title_en: 'Ginza Sugimoto',
        title_ja: '銀座 杉もと',
        photos: 7
      },
      'ootoku': {
        title_en: 'Ootoku',
        title_ja: '海のレストラン おおとく',
        photos: 9
      },
      'senshu': {
        title_en: 'Senshu Jakarta',
        title_ja: '千秋 ジャカルタ',
        photos: 19
      },
      'tesate-kemang': {
        title_en: 'TeSaTe Kemang Jakarta',
        title_ja: 'テサテ ケマンギ ジャカルタ',
        photos: 10
      },
      'tesate-menteng': {
        title_en: 'Tesate Menteng',
        title_ja: 'テサテ メンテン',
        photos: 14
      },
      'tesate': {
        title_en: 'TeSaTe Plaza Senayan Jakarta',
        title_ja: 'テサテ プラザセナヤン ジャカルタ',
        photos: 7
      },
      'kemangi': {
        title_en: 'Kemangi Bali',
        title_ja: 'ケマンギ バリ',
        photos: 5
      },
      'katsura': {
        title_en: 'Japanese Restaurant Katsura Jakarta',
        title_ja: 'ジャパニーズレストラン 桂 ジャカルタ',
        photos: 13
      },
      'kutani': {
        title_en: 'Kutani Ginza',
        title_ja: '銀座 九谷',
        photos: 6
      },
      'marycafe': {
        title_en: 'Mary Cafe',
        title_ja: 'マリーカフェ',
        photos: 2
      },
      'jyu': {
        title_en: 'Jyu',
        title_ja: 'レストラン充',
        photos: 3
      },
      'lessense': {
        title_en: 'Les Sense',
        title_ja: 'レ・サンス',
        photos: 2
      },
      'azabu': {
        title_en: 'Azabu Paris',
        title_ja: '麻布 パリ',
        photos: 3
      },
      'setsugekka': {
        title_en: 'Setsugekka Shibuya',
        title_ja: '雪月花 渋谷',
        photos: 10
      },
    }
  },
  'interior-shop': {
    title: 'Interior Design / Shop',
    works: {
      'iguaneye': {
        title_en: 'iGUANEYE',
        title_ja: 'イグアナアイ',
        photos: 6
      },
      '0035kiyokawaya': {
        title_en: '0035 Kiyokawaya Yamagata',
        title_ja: '0035 Kiyokawaya 山形',
        photos: 16
      },
      '0035gather': {
        title_en: '0035 gather Yamagata',
        title_ja: '0035 gather 山形',
        photos: 11
      },
      'kanemon': {
        title_en: 'CHAYA KAN É MON By KIYOKAWAYA Matsushima',
        title_ja: '茶屋勘右衛門 By KIYOKAWAYA 松島',
        photos: 12
      },
      'hamabowl': {
        title_en: 'Hamabowl',
        title_ja: 'ハマボール',
        photos: 6
      },
      'chocolate-shop': {
        title_en: 'Chocolate Shop in Yokohama',
        title_ja: 'チョコレートショップ 横浜',
        photos: 3
      },
      'freude': {
        title_en: 'Freude Koriyama',
        title_ja: 'フロイデ 郡山',
        photos: 6
      },
      'kiyokawaya': {
        title_en: 'Kiyokawaya TsuruokaInter',
        title_ja: '清川屋鶴岡インター店',
        photos: 7
      },
      'altemeister': {
        title_en: 'Altemeister',
        title_ja: 'アルテマイスター',
        photos: 9
      },
      'pellegrino': {
        title_en: 'Renaude Pellegrino',
        title_ja: 'ルノー・ペルグリーノ',
        photos: 2
      }
    }
  },
  'other-complex': {
    title: 'Other / Complex',
    works: {
      'qualia': {
        title_en: 'Qualia Minami-Azabu',
        title_ja: 'クオリア 南麻布',
        photos: 3
      }
    }
  }
}
