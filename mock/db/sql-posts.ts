// 生成随机点赞数的辅助函数
function getRandomHit(): number {
  return Math.floor(Math.random() * 10000) + 1;
}

// 生成随机的日期，日期均匀分布在近7天
function getRandomDate(): string {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() - 7);

  const endDate = new Date();
  const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

  return randomDate.toISOString();
}

export const posts = [
  {
    title: 'Omnis qui error rerum et deleniti aut libero tempore praesentium.',
    content:
      'Velit cupiditate dolores sit. Aut nulla dolor. Et ullam ut doloremque est voluptatem repudiandae quis. Ad sed consequuntur unde eum. Maiores aut tenetur qui est necessitatibus eius. Sunt nobis ut ea rerum qui officia natus. Aut dolore quia ratione odio. Repellat cupiditate sed excepturi quisquam tenetur odit illo nulla. Rerum excepturi praesentium alias quae nulla eum fugit. Dolor doloribus numquam non ab temporibus.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '7',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
    status: 'PUBLISHED',
  },
  {
    title: 'Ut beatae aut quos neque dolor atque eaque corrupti.',
    content:
      'Dolorum maxime deleniti alias recusandae sint enim. Voluptas ut consectetur ipsam laborum ipsa ad ad quisquam libero. Id et aut in. Aut expedita quia tempora libero. Numquam et est dolorem amet sunt aut adipisci eaque maiores. Hic quidem ut sed dicta animi et ut et. Fugit soluta facere earum alias similique porro non in eius. Accusantium ut exercitationem totam. Dolorum quo nesciunt incidunt beatae consequatur. Et voluptatibus nemo quia alias est.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '13',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
    status: 'REJECTED',
  },
  {
    title: 'Aspernatur assumenda mollitia accusamus vel.',
    content:
      'Eaque quis eligendi possimus numquam nostrum occaecati quisquam vel id. Magni neque magnam. Voluptatem dolor asperiores praesentium impedit itaque vel voluptatem placeat qui. Amet perspiciatis nostrum. Laborum ut et maiores voluptatibus perspiciatis facere. Neque rerum voluptatibus alias quam nihil et. Et rerum quia a placeat velit aut. Veniam voluptates aperiam eum a ea sit sed fugit. Aliquid ratione et quibusdam earum quasi. Facere vel est expedita laudantium ut occaecati voluptatem.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '12',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
    status: 'PUBLISHED',
  },
  {
    title: 'Architecto distinctio eveniet minima suscipit asperiores quis dolore quaerat aut.',
    content:
      'Necessitatibus expedita et accusamus laudantium facilis. Aspernatur laboriosam aspernatur nobis reiciendis. Enim dicta et sint et sunt. Voluptas modi rerum velit ipsam soluta fugiat. Voluptas velit explicabo quaerat reprehenderit eum nobis. Similique odit dolorem sapiente autem inventore amet consequatur fugit repellendus. Praesentium modi et error dolorem et quasi. Accusamus molestiae ducimus qui facere enim sit in. Eius cumque molestiae quo animi autem. Quia non nulla mollitia alias magni asperiores aut.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '5',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Dolorum quod eum doloribus accusantium qui et necessitatibus molestiae.',
    content:
      'Accusamus cumque repudiandae in qui nam necessitatibus inventore. Eius illum laudantium voluptatibus in rerum eos nemo natus. Dolorum sit sed laudantium. Nobis non dolorem accusamus dignissimos. Maiores quo assumenda dignissimos. Sed sit a. Nisi eum sit fugit tenetur sapiente ea facilis ipsum at. Enim tempore quia qui quidem autem rerum. Aliquid eos eaque id. Optio laudantium eveniet repellendus tempora nihil dolor aut sit.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '9',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Exercitationem non corrupti veritatis molestias expedita esse.',
    content:
      'Fugit et saepe rerum modi error. Modi dolor enim consequatur qui. Nostrum suscipit molestiae harum sit amet nam non. Voluptate pariatur sit omnis. Voluptatem consequatur quae recusandae et ut voluptatem quis in itaque. Occaecati nihil illum aut ut labore vel. Inventore eum cumque labore animi vero qui quisquam in. Voluptatum enim temporibus suscipit dolor porro autem. Quia reprehenderit tempora quae labore ratione aut beatae ea. Tempora ducimus et dolorem.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '8',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Sint illum ipsum sint quia non.',
    content:
      'Odit reiciendis quia omnis id praesentium dolor saepe. Quae iste quae non ipsa quas ex iusto. Tenetur voluptas ex expedita architecto suscipit et quisquam. Sit illum quis quae. Iste voluptatem facilis fugiat aut expedita rerum dolor. Et iusto ab aut corrupti consequatur eum. Quo est voluptas tempora dicta minima. Illum numquam et reiciendis. Possimus deleniti rem provident sapiente et. Recusandae accusantium alias officia non omnis itaque doloremque.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '11',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Qui quod minus in autem.',
    content:
      'Aperiam et ut dolor at atque dolore. Dignissimos dolorem quis eligendi. Vero quasi distinctio saepe. Qui saepe quasi laudantium dolorum quia dicta facilis. Voluptatem a perspiciatis cupiditate dolorem excepturi officiis occaecati. Aut ut consequatur odio eum ut quod. Velit id voluptas nihil molestiae enim praesentium. Dolorem debitis repellendus doloribus eligendi velit. Reiciendis vitae est voluptate laudantium ratione repellat est qui. Sed rerum non maiores officiis nostrum.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '1',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Alias est voluptates.',
    content:
      'Consectetur quis eveniet suscipit quibusdam qui. Accusantium ipsa dolor et. Beatae rerum autem numquam. Laborum autem et unde. Debitis omnis expedita et quis impedit inventore facilis. Delectus aut reiciendis voluptates fugit soluta est. Exercitationem modi tenetur qui aspernatur. Illum adipisci accusantium nobis fugit sit eum error. Quis eos ut sequi cumque eum. Quia ut porro quia ut assumenda aut sunt assumenda.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '9',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Qui non ipsum ex et.',
    content:
      'Sunt aliquam amet tempore voluptatem. Et quia aperiam quisquam ab est quidem cumque aliquid. Ullam praesentium suscipit rerum possimus. Illum quaerat amet sapiente. Et eum suscipit non et repellendus dolor. Esse corrupti enim vitae. Omnis ut veniam quis. Animi est aut aut qui rerum praesentium. Perspiciatis maxime recusandae quo nostrum culpa voluptatum vero aliquam. Ut rerum aut in nihil iste.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '8',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'A esse illo deserunt.',
    content:
      'Voluptatem minus voluptate. Ut et et impedit natus numquam sit dolores. Modi vel eius nihil consequatur nostrum nisi quo. Cupiditate earum rerum odit veniam. Illum rerum eius impedit. Inventore inventore fugit maxime ut neque aut ullam animi. Velit deserunt unde facere dolor non est debitis aut sed. Vel voluptatem deleniti dolorem. Aliquam possimus dolore nesciunt quod perferendis assumenda nobis sequi. Animi iusto dolorum ut iste libero omnis.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '4',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Natus sint corporis error voluptates architecto aliquid deleniti eos.',
    content:
      'Voluptatum et nobis minima dolores ullam. Tempore in adipisci. Vitae et molestias eius ab perferendis ducimus libero nobis error. Rerum nihil ut molestiae. Facilis repellat earum fugit. Earum velit voluptatem et ipsam aut. In cumque modi nihil expedita perferendis eum. Esse eos qui labore. Corporis placeat harum eligendi autem dicta molestias tempore quod. Minus illum et.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '7',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Qui adipisci quia quibusdam consequatur dolor nihil est.',
    content:
      'A corrupti harum quis rerum laborum dolorem animi ad. Molestiae fugit eius est cumque. Consequuntur veritatis sed quia neque in ipsum soluta rerum. Explicabo dolore molestiae dolor est non. In dolor aliquam voluptatem. Omnis aut quis facilis sunt. Vitae blanditiis animi facere minima laboriosam ut. Quos vel cumque perspiciatis voluptas alias aliquam. Et saepe harum dolores. Facere mollitia dolorem nisi nemo officia in necessitatibus.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '1',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Doloremque error fuga qui dolorem qui tempora.',
    content:
      'Doloremque quia debitis. Neque ex vel et recusandae occaecati. Veritatis ducimus et. Magnam ex ipsa. Laborum est illo. Ut et id earum tempore odit quidem aut rem quam. Laborum laboriosam vel dicta architecto nostrum ut aut omnis. Voluptas tempora voluptatem. Quos dolorem dignissimos nam consequuntur expedita. Eaque commodi alias voluptatem architecto.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '2',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Fugit harum ex quisquam deserunt deleniti iste qui.',
    content:
      'Soluta laborum et totam reiciendis esse explicabo dolorem assumenda corrupti. Consectetur harum vel qui veniam. Dolorem ipsum ut et rerum iusto unde corporis enim. Maxime quia explicabo minima. Odio dolorem perferendis perspiciatis. Exercitationem esse repellat non voluptas voluptatum aut dignissimos quas dolores. Atque ipsam et sint explicabo. Velit ratione et quaerat rerum qui. Soluta vel impedit molestiae sed est vitae nam delectus. Ea tempore vitae.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '12',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Quos consequuntur quod ea rerum unde est.',
    content:
      'Non voluptatem temporibus nihil ut dolor omnis nihil et consequatur. Mollitia repudiandae quo et dolore eius animi. Rem voluptatum omnis sint voluptas. Laudantium dolores iste fugiat ducimus modi animi quibusdam voluptas iste. Vitae neque nemo facere tenetur est ad ullam necessitatibus repudiandae. Officia neque sunt culpa placeat est ullam cumque eius. Id temporibus enim dolorum et itaque et eum. Aut quis expedita. Sit et ratione odit alias aliquid tenetur. Dignissimos dolore quia quia aliquid ea.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '6',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Hic at dignissimos itaque possimus harum veniam quidem.',
    content:
      'Iste at et odit repudiandae. Quibusdam sit velit voluptatem ea qui eaque cum ut. Repellat est ut consectetur. Laboriosam dolorem autem ipsum dolorum eius sed et nam. Dolorem non ullam sed enim est minus error dolore hic. Consequuntur voluptatem autem. Unde rerum atque sed et veniam dolore aut sed. Qui non labore occaecati. Impedit voluptatum sed ea accusamus eius qui enim officia. Dolorem voluptatibus adipisci vitae accusantium nostrum laudantium qui.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '3',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Quas minus porro omnis ullam consequuntur.',
    content:
      'Sed sapiente rerum enim iusto aut quo et molestiae et. Facere aut vero voluptas animi enim molestiae dolorem. Maxime quo alias. Tenetur aut ut quis eveniet similique doloremque. Voluptates magnam ut dolorem eaque voluptatem. Optio et beatae quia minus esse beatae molestias. Porro autem recusandae explicabo beatae et voluptatem sit voluptas. Vel beatae et magnam laborum. Exercitationem sed totam iusto quia rerum non. Aut id velit animi rerum quae distinctio.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '1',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Error doloribus fugiat.',
    content:
      'Impedit omnis sint laborum qui placeat assumenda eum amet. Laudantium dolores rerum incidunt praesentium. Est earum commodi. Et et qui. Ad distinctio ut qui ea magni voluptate. Ab cupiditate nobis accusantium quia dolor ratione omnis. Saepe pariatur iste. Et est consequatur occaecati aut quos aperiam itaque accusamus nulla. Ad et eveniet omnis. Nam quo quae id corrupti quae quis.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '11',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Sint optio autem.',
    content:
      'Inventore adipisci harum accusantium sint velit. Vel ad eum repellendus amet illum culpa voluptatem aut eos. Et quis sapiente fuga omnis est nulla odit. Et est omnis modi ex nemo est sit dicta vero. Enim rem odit. Reprehenderit quia sequi. Ea et asperiores. Commodi voluptatem qui aliquid. Et et qui sequi. Eum libero illum soluta minima et quia eius ut.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '10',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Deserunt qui porro nostrum.',
    content:
      'Sequi excepturi saepe unde dicta similique. Doloribus molestiae expedita. Hic non ut quis dolorem. Eum eos est voluptatibus iure rerum quaerat eum vitae. Molestias excepturi voluptatem maiores ex nam et in dolorem. Dolore dolor velit rem et hic ullam perferendis. Ut voluptas et dolorem. Est doloribus labore laboriosam libero sed quam. Deserunt doloremque voluptatibus nemo non occaecati sint rem earum. Dignissimos dolorem facilis et nisi et.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '1',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Hic est voluptate.',
    content:
      'Aliquid nesciunt qui repellendus libero accusantium deserunt. Ipsa non iste et temporibus possimus libero impedit vel dicta. Quas possimus et officiis eos fuga laudantium omnis. Non officiis repellendus et rem neque temporibus quae veritatis. Ut et id et blanditiis exercitationem quia itaque. Repellendus quam aut magnam eum aut. Doloribus aliquid accusantium voluptatem nostrum aut minus. Quia quidem maxime dolore repellendus eum harum doloremque magnam. Esse autem quam voluptas esse. Harum et soluta aliquam.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '8',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Non consequatur voluptas est enim ut.',
    content:
      'Aut autem minus vero ut quia adipisci nobis aliquam commodi. Cumque sed dolorem voluptatem modi. Ipsum qui quia quod et. Accusantium quae dolores voluptatum neque quia eaque quia sint dolorum. Ea mollitia earum accusamus quas cumque eos voluptatem. Consequuntur maxime maiores veritatis. Reprehenderit recusandae et sed iusto fuga corporis. Perferendis voluptatum in non eius ea est. Ducimus distinctio non. Quam ipsa eaque nesciunt voluptas.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '2',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Eaque in ut.',
    content:
      'Minima et libero soluta. Ipsa ut aut laborum est fuga sunt in dolor laudantium. Vitae quia repellat et consequatur vitae voluptatem quisquam recusandae. Et eum sequi ut cumque fugiat culpa autem atque explicabo. Cum rerum dolorem. Aut est quidem ducimus. Magnam id incidunt et id ea consectetur libero totam sit. Ipsa est facere enim quos ducimus deserunt mollitia vero tempora. Molestiae impedit voluptas nihil natus nesciunt molestias aspernatur voluptatem. Voluptatum provident eaque eum tempore reprehenderit nihil sit.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '4',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Ipsa quis voluptatem laudantium delectus dolorum.',
    content:
      'Facilis et harum laudantium maiores. Quo aperiam doloremque facere. Eaque illo ut ut dolores vel et amet. Voluptas qui labore. Autem alias quas dicta rerum. Qui qui corrupti quo eveniet non repudiandae harum. Quis maxime illo inventore ea numquam recusandae numquam omnis id. In perferendis dolorem hic eum aut. Molestias sunt libero fugiat est. Ut dolorum iure.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '3',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Dignissimos sed et voluptatem quis adipisci pariatur.',
    content:
      'Amet quaerat et. Quas repudiandae quis. Inventore dolores ducimus eum natus voluptas cumque sint accusamus nobis. Voluptatem optio error. Ea saepe omnis occaecati soluta est culpa id quaerat qui. Voluptatem aut tenetur quisquam. Tenetur omnis aliquid. Error qui earum saepe animi dolor beatae. Enim maxime quia voluptas cumque molestiae molestiae amet voluptate nemo. Quo quo deleniti similique exercitationem voluptatem aut.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '3',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Qui molestias tenetur.',
    content:
      'Dolores sunt vel voluptates numquam at qui nemo. Occaecati quo sit voluptatem beatae saepe iure quo voluptatem aspernatur. Ducimus magni qui commodi voluptas voluptatem nulla eum rem. Sint omnis quasi quis mollitia est rem. Hic dolor veniam placeat maxime. Nisi explicabo enim et laboriosam nihil autem cum natus. Nesciunt nemo laudantium dolor expedita vel aut hic dolorem. Qui autem fuga amet. Praesentium recusandae ad doloremque similique et voluptate. Aut provident sit.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '4',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Qui dolor illo velit soluta aut.',
    content:
      'Veritatis aut pariatur iste qui sed et. Recusandae voluptates debitis et non quae aut. Blanditiis ut debitis tenetur. Quidem suscipit et id cum qui sit aperiam. Animi labore et architecto et incidunt doloremque aut nobis. Autem et cum. Facilis repudiandae reiciendis assumenda quo laborum. Dolorem eveniet architecto omnis autem. Corrupti sed nihil voluptatem tempora eaque. Sit quidem ea eaque voluptate sunt aut.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '12',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Quam repudiandae tempora et.',
    content:
      'Qui iure est facere numquam. Et ipsum doloribus asperiores debitis hic vitae aut aut. Voluptates et et corrupti. Sed quos facere. Natus qui reprehenderit corporis officiis nostrum dolor. Occaecati consequatur sequi distinctio. Quam et magni molestias minus quia aut. Dignissimos velit ex facilis enim fugiat ipsum. Recusandae ut sed nihil in voluptates accusantium fugiat. Recusandae ad consequatur.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '12',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Velit accusantium est est vitae nam voluptatem.',
    content:
      'Omnis id assumenda. Sapiente explicabo maiores quidem. Asperiores voluptatum voluptatem inventore excepturi officiis sed architecto nulla quidem. Quasi iure cum consequatur alias. Voluptatem voluptas doloribus non impedit officiis eligendi sunt similique. Porro optio ipsa excepturi fuga est atque praesentium est. Sit culpa blanditiis libero qui dicta rerum. Adipisci consequatur ducimus ratione nulla reiciendis error. Molestias amet velit voluptates. Qui aliquid suscipit enim optio quo tenetur dolores.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '15',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Libero dignissimos ipsum exercitationem sed tempora.',
    content:
      'Blanditiis dolorum et fugiat minus iste ipsum voluptatibus. Numquam eveniet pariatur blanditiis doloribus et impedit ratione illo minus. Doloribus in nulla itaque modi laboriosam autem odio. Voluptatem suscipit ea eligendi optio. Et impedit deleniti nobis ex. Natus nihil occaecati. Aut tempore cupiditate saepe nulla dolorem et at aut illum. Est nemo qui provident consequatur velit ut ut id itaque. Veniam repellendus eveniet vel tenetur reiciendis adipisci. Vero eligendi aliquid natus.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '3',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Ut odit iusto recusandae maxime.',
    content:
      'Quam similique qui autem voluptas eos blanditiis. Aut est deleniti dolores. Qui est voluptas nam veritatis illum et ipsa. Omnis qui illo eum sunt facere. In nihil aut consectetur porro ut. Animi dolorum sint voluptatem saepe quam. Non qui quasi quam esse et nesciunt doloribus. Sed voluptates facilis sint atque dolores voluptatem repellendus. Laboriosam atque commodi illum ipsa quod eum vel pariatur similique. Ducimus delectus odit et.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '10',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Est laborum autem aperiam consequatur.',
    content:
      'Commodi et tempora eaque praesentium voluptatum officia expedita natus. Aut sit ipsum occaecati aut repudiandae. Nobis unde dolore consequatur velit quis quos voluptatem et. Est rerum sed quia in beatae sunt similique. Consequatur tenetur et commodi culpa. Dignissimos vero rerum facere doloremque saepe est. Quos animi sed vero cum dolores distinctio et. Natus tempora dolor rerum libero aut tempora et sunt alias. Provident velit doloremque autem. Natus cupiditate consequuntur error exercitationem debitis.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '11',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
  {
    title: 'Alias ipsa eius maiores cumque est quisquam nostrum.',
    content:
      'Ut est quia rerum dignissimos autem aut corporis totam laudantium. Voluptatum et incidunt. Assumenda qui iste quas dolorem atque voluptas. Illum voluptates voluptatibus sint sit qui. Cum qui consequuntur pariatur voluptatem omnis eos optio totam ratione. Sed enim aut molestias dolorem ullam. Totam aspernatur eos libero minima. Sed aperiam velit quo nostrum officia ipsa a. Minima cumque deserunt ea eum qui quae iure vel. Ipsa qui repellendus aut sed est commodi magnam.',
    hit: getRandomHit(),
    like: getRandomHit(),
    category: {
      id: '15',
    },
    createdAt: getRandomDate(),
    image: '/dog.jpg',
  },
];
