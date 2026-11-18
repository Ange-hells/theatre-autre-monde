export const siteModel = {
  navigation: [
    { label: "Accueil", href: "index.html", key: "accueil" },
    { label: "Spectacles", href: "spectacles.html", key: "spectacles" },
    { label: "Entre-sort", href: "entre-sort.html", key: "entre-sort" },
    { label: "Rue", href: "rue.html", key: "rue" },
    { label: "Animations", href: "animations.html", key: "animations" },
    { label: "Contact", href: "contact.html", key: "contact" },
    { label: "Références", href: "references.html", key: "references" }
  ],
  footer: {
    copyright: "© 2002 - 2026 par le Théâtre de l'Autre Monde",
    descriptor: "Spectacles de marionnettes",
    legal: "Mentions légales"
  },
  pages: {
    accueil: {
      title: "Bienvenue sur le site du Théâtre de l'Autre Monde",
      type: "home"
    },
    spectacles: {
      title: "Nos Spectacles",
      type: "cards",
      items: [
        { title: "Bergerac", 
          meta: "(Jeu d'acteur, Théâtre d'objet, Marionnettes sur table)", 
          image: "assets/images/spectacle/Ber.png", 
          paragraphs: ["Redécouvrez la célèbre histoire de Cyrano de Bergerac de façon déjantée, pleine d'humour et de dérision."], 
          emphasis: "Tout Cyrano en 50 minutes."
        },
        { title: "Dis-moi Doudou",
          meta: "Marianettes à manipulation diverses", 
          text: "Dis-moi Doudou ? Qu'est-ce que toi tu fais pendant que moi je dors ?  Un spectacle plein de tendresse et de douceur pour les enfants à partir de 6 mois. ", 
          image: "assets/images/bergerac.jpg" 
        },
        { title: "L'Entre Acte", 
          meta: "(Spectacle surprise) ",
          // text: "Ambiance Cabaret et Music-Hall d'époque. Assistez à une véritable revue en pleine rue ! ​La question étant : à laquelle de nos trois mini revue allez-vous assister ? Un mini spectacle de marionnettes à voir et à revoir absolument !", 
          paragraphs: [
            "Ambiance Cabaret et Music-Hall d'époque.", 
            "Assistez à une véritable revue en pleine rue !", 
            "La question étant : à laquelle de nos trois mini revue allez-vous assister ?", 
            "Un mini spectacle de marionnettes à voir et à revoir absolument !"
          ],
          image: "assets/images/entre-acte.jpg" 
        },
        { title: "Miroir mon beau miroir", 
          meta: "(Marionnettes à main prenante)",
          text: "Tancrède, le mage est amoureux de la belle princesse Isabeau. Seulement, lui n’est pas beau ! Un spectacle à mi-chemin entre kasimodo et Cyrano de Bergerac.", 
          image: "assets/images/scene-marionnettes.jpg" 
        },
        { title: "Circus Mania", 
          meta: "(Marionnettes à manipulations diverses)",
          text: "Circus Mania vous accueil pour une représentation unique avec des numéros exceptionnels que vous n'avez jamais vus et que vous ne reverrez plus jamais dans votre vie.", 
          image: "assets/images/bergerac.jpg" 
        },
        { title: "L'astronautre",
          meta: "(Marionnettes sur table) ", 
          text: "Jules, cinq ans, pense que tout est mieux ailleurs que chez lui. Prenez place, attachez vous bien et rejoignez le voyage fabuleux de Jules à travers l’univers.", 
          image: "assets/images/entre-acte.jpg" 
        },
      ]
    },
    "entre-sort": {
      title: "Nos Entresorts",
      type: "text",
      paragraphs: [
        "L'entresort est une forme courte et intimiste : le public entre dans un espace de jeu pour découvrir une petite proposition théâtrale.",
        "Le Théâtre de l'Autre Monde imagine des formats de proximité, adaptés aux événements, aux festivals et aux rencontres avec le public."
      ],
      items: [
        { title: "Bergerac", 
          meta: "(Jeu d'acteur, Théâtre d'objet, Marionnettes sur table)", 
          image: "assets/images/bergerac.jpg", 
          paragraphs: ["Redécouvrez la célèbre histoire de Cyrano de Bergerac de façon déjantée, pleine d'humour et de dérision."], 
          emphasis: "Tout Cyrano en 50 minutes." },
        { title: "L'Entre Acte", 
          meta: "(Marionnettes à tringles)", 
          image: "assets/images/entre-acte.jpg", 
          paragraphs: [
            "Ambiance Cabaret et Music-Hall d'époque.", 
            "Assistez à une véritable revue en pleine rue !", 
            "La question étant : à laquelle de nos trois mini revue allez-vous assister ?", 
            "Un mini spectacle de marionnettes à voir et à revoir absolument !"
          ] 
        }
      ]
    },
    rue: {
      title: "Nos Spectacles de rue",
      type: "shows",
      items: [
        { title: "Bergerac", 
          meta: "(Jeu d'acteur, Théâtre d'objet, Marionnettes sur table)", 
          image: "assets/images/Rue/Ber.png", 
          paragraphs: ["Redécouvrez la célèbre histoire de Cyrano de Bergerac de façon déjantée, pleine d'humour et de dérision."], emphasis: "Tout Cyrano en 50 minutes." },
        { title: "L'Entre Acte", 
          meta: "(Marionnettes à tringles)", 
          image: "assets/images/entre-acte.jpg", 
          paragraphs: ["Ambiance Cabaret et Music-Hall d'époque.", "Assistez à une véritable revue en pleine rue !", "La question étant : à laquelle de nos trois mini revue allez-vous assister ?", "Un mini spectacle de marionnettes à voir et à revoir absolument !"] }
      ]
    },
    animations: {
      title: "Animations",
      type: "text",
      paragraphs: [
        "Le Théâtre de l'Autre Monde propose des animations artistiques autour du spectacle vivant et de l'univers des marionnettes.",
        "Les formats peuvent être adaptés à votre événement, à votre lieu et à votre public. Contactez-nous pour échanger sur votre projet."
      ]
    },
    references: {
      title: "Nos Références",
      type: "text",
      paragraphs: [
        "Le Théâtre de l'Autre Monde intervient dans des contextes variés : événements culturels, festivals, programmations de spectacles et manifestations destinées à tous les publics.",
        "Cette page peut être complétée avec les lieux, collectivités, festivals et structures ayant accueilli la compagnie."
      ]
    }
  }
};
