# 💬 FAQ

## Pourquoi avons-nous besoin des licences ModelGo ?

Les licences ModelGo offrent des éléments de licence flexibles pour répondre à vos besoins spécifiques en matière d'utilisation et de distribution de vos modèles de ML.

<mark style="color:purple;">**Pourquoi ne pas utiliser les licences Llama ou Gemma ?**</mark> Les licences Llama et Gemma sont des licences propriétaires et revendiquent la propriété des droits d'auteur par Meta et Google. Si votre projet s'appuie sur Llama ou Gemma, vous n'avez pas d'autre choix que de vous conformer à leurs licences originales. Cependant, si vous possédez votre modèle et souhaitez le publier tout en conservant votre attribution de droits d'auteur, vous pouvez préférer une licence d'usage public comme les licences ModelGo.

<mark style="color:purple;">**Pourquoi ne pas utiliser les licences OSS ?**</mark> Les licences traditionnelles de logiciels open source (OSS) manquent de définitions claires concernant les concepts d'apprentissage automatique, tels que les Modèles, les Sorties et les Dérivés créés par transfert de connaissances. Ce manque de compatibilité peut entraîner que certaines activités de ML (par exemple, la Distillation, le Mix-of-Expert) échappent au contrôle du propriétaire du modèle et compromettent potentiellement ses droits de propriété intellectuelle.

<mark style="color:purple;">**Pourquoi ne pas utiliser les CCs ?**</mark> De nombreux développeurs sur [HuggingFace](https://huggingface.co/models?license=license:cc-by-nc-nd-4.0&sort=likes) ont choisi d'utiliser les licences Creative Commons (CCs) pour restreindre l'utilisation commerciale de leurs modèles. Cependant, les CCs sont principalement conçues pour des artefacts tels que des articles, de la musique et des images, ce qui les rend incompatibles lorsqu'elles sont appliquées aux modèles de ML. Il est donc nécessaire de disposer d'une nouvelle méthode de licence spécifique aux modèles.

<mark style="color:purple;">**Pourquoi ne pas utiliser les OpenRAILs ?**</mark> Récemment, les Responsible AI Licenses (RAILs) ont été largement promues pour répondre au besoin de gouvernance des technologies d'IA, visant à restreindre les utilisations illégales et contraires à l'éthique des modèles. Nous reconnaissons le besoin émergent d'une telle gouvernance (c'est pourquoi nous proposons l'option RAI dans les licences ModelGo), mais nous reconnaissons également la demande de restrictions plus strictes, telles que l'interdiction d'utilisation commerciale, le partage de dérivés et l'obligation d'open-sourcing pour protéger les bénéfices des développeurs de modèles. C'est pourquoi nous proposons ModelGo et offrons davantage d'options de licence pour combler cette lacune.

## Quelle est la différence entre ModelGo et OpenRAILs ?

Du point de vue compositionnel, [OpenRAILs(-M)](https://www.licenses.ai/ai-licenses) est construit sur Apache-2.0 avec des termes supplémentaires adaptés au domaine du ML. Leurs principales modifications incluent l'ajout d'une annexe de Restrictions d'Utilisation et de termes de restriction comportementale basés sur l'usage dans le texte de la licence. Pour offrir un contrôle de licence plus complet, ModelGo s'inspire des licences précédentes mais ne copie aucun de leurs termes. Vous pouvez utiliser les licences MG sans vous soucier des problèmes de droits d'auteur dans le texte de la licence.

Du point de vue des objectifs, OpenRAILs(-M) prônent la protection des modèles contre les utilisations illégales et contraires à l'éthique. Récemment, ils fournissent un [générateur de licences](https://www.licenses.ai/rail-license-generator) pour générer une liste de Restrictions d'Utilisation spécifiques au domaine. Les objectifs de ModelGo sont quelque peu différents ; nous visons à fournir un cadre de type CCs pour contrôler l'utilisation et la distribution des modèles publiés. Par exemple, les développeurs peuvent librement choisir les licences les plus permissives comme MG0-2.0 et MG-BY-2.0 pour lever la plupart des restrictions sur leurs modèles, ou ils peuvent choisir l'option NC (qui est révocable) pour empêcher la commercialisation non désirée de leurs modèles et du contenu généré. L'option SA vise à encourager le partage et les contributions.

En résumé, MG-BY-RAI peut être considéré comme similaire à OpenRAILs. Mais nous laissons simplement le RAI comme un choix pour les éditeurs de modèles. De plus, pour mieux dissuader les abus de modèles, les droits accordés par MG-BY-RAI sont révocables, ce qui le distingue des OpenRAILs.

## Quelle est la différence entre ModelGo et AI2 ImpACT ?

Du point de vue des objectifs, [AI2 ImpACT](https://allenai.org/impact-license) est conçu pour licencier les modèles et jeux de données publiés par AI2, avec des conditions d'utilisation spécifiques qui peuvent ne pas convenir aux besoins courants de licence de modèles. Cependant, ModelGo est conçu pour répondre aux besoins généraux de licence de modèles des développeurs.

Du point de vue du contrôle de la distribution, AI2 ImpACT exige des licenciés qu'ils soumettent des Rapports d'Impact des Dérivés pour déclarer leur utilisation prévue de l'œuvre licenciée, et ils sont censés faire des efforts de bonne foi pour être transparents sur leur utilisation prévue. Cependant, ModelGo ne contient pas ce type de restrictions. De plus, la licence AI2 ImpACT Medium Risk interdit le partage de l'œuvre verbatim mais autorise le partage de dérivés, ce qui est l'inverse de MG avec ND.

Il convient de mentionner qu'AI2 ImpACT contient des restrictions d'utilisation de type copyleft (RAI), qui pourraient rendre l'ensemble du projet ML incompatible avec les composants GPL-3.0. Un risque potentiel de réutiliser une œuvre sous licence AI2 ImpACT dans la construction de votre projet est que leur licence accordée peut être révoquée.

## Quelle est la portée de gouvernance des licences ModelGo ?

Les licences MG s'appliquent uniquement au Modèle, mais leurs termes régissent l'<mark style="color:purple;">utilisation et la distribution du Modèle et de ses dérivés, ainsi que des sorties correspondantes, et du code et des scripts complémentaires</mark>. Nous classons ces objets en quatre catégories pour définir la portée des termes : Matériaux sous licence (Licensed Materials), Matériaux dérivés (Derivative Materials), Modèles extraits (Extracted Models) et Sortie (Output), chacun avec des termes de restriction et des politiques d'utilisation différents. Les modèles extraits sont des modèles créés en transférant des motifs à partir de la sortie du modèle, par exemple par des méthodes de distillation. Par exemple, selon les termes de MG-BY-ND-2.0, le partage d'une copie textuelle des Matériaux sous licence est autorisé, tandis que le partage de tout Matériau dérivé ou Modèle extrait est interdit.

Les licences MG ne doivent pas s'appliquer aux Third-Party Materials (par exemple, les logiciels open source et les artefacts à contenu libre), aux bibliothèques système et aux jeux de données (par exemple, jeu d'entraînement, jeu de validation, jeu de test). Cela implique que le choix de MG avec SA n'oblige pas à rendre open source les données utilisées pour développer le modèle. En raison de préoccupations relatives à la confidentialité des données et du fait que ces jeux de données ou les échantillons de données qu'ils contiennent ont déjà des licences de contenu libre (généralement des CCs), nous considérons les jeux de données comme étant en dehors de la portée des licences MG.

<figure><img src="/images/scope.webp" alt="Portée de gouvernance MG"><figcaption><p>Portée de gouvernance MG</p></figcaption></figure>

## Dois-je continuer à utiliser les licences ModelGo V1 ?

<mark style="color:purple;">**Nous le déconseillons.**</mark> La V1 est un remix de textes de licences existants et peut contenir des problèmes de droits d'auteur imprévus. De plus, la V2 est plus complète et inclut des clauses qui traitent mieux des droits de propriété intellectuelle dans les dérivés. Nous recommandons fortement d'utiliser la V2 à la place.

## Puis-je distribuer le contenu généré ?

<mark style="color:purple;">**Bien sûr que oui.**</mark> Les licences MG ne se propagent pas au contenu généré et ne revendiquent pas de droits d'auteur sur celui-ci. Cependant, MG avec NC et ND exigent que les utilisateurs incluent un avis du modèle de provenance utilisé pour générer ce contenu s'il est collecté et publié sous forme de jeu de données. Veuillez vous référer à la Clause « <mark style="color:purple;">2.2 Conditions (b)</mark> » pour plus d'informations.

## Dois-je conserver les informations d'attribution dans le contenu généré ?

<mark style="color:purple;">**Cela dépend.**</mark> Les options BY dans MG s'appliquent uniquement au modèle et à ses dérivés (à l'exclusion du code et des scripts qui peuvent déjà être couverts par des licences OSS séparées). Mais MG avec NC et ND exigent que les utilisateurs incluent un avis du modèle de provenance utilisé pour générer ce contenu s'il est collecté et publié sous forme de jeu de données.

## Révocable vs. Irrévocable ; Sous-licenciable vs. Non sous-licenciable.

La Propriété Intellectuelle (PI) englobe les brevets, les droits d'auteur et les marques déposées. La plupart des licences de logiciels, de contenu et de modèles ne confèrent pas de droits d'utilisation de marque, elles peuvent ou non fournir des licences limitées de brevet ou de droit d'auteur. Cependant, certaines licences ne déclarent pas explicitement si leurs licences accordées sont révocables ou irrévocables, sous-licenciables ou non sous-licenciables, ce qui entraîne une ambiguïté dans la licence de l'œuvre. Nous résumons ce problème dans les tableaux ci-dessous :

<mark style="color:purple;">**Concession de licence de brevet :**</mark>

| Nom de la licence | Révocable ? | Sous-licenciable ? |
|---|---|---|
| Apache-2.0 | Non | <mark style="color:orange;">Non déclaré</mark> |
| CodeML-OpenRAIL-M | Non | <mark style="color:orange;">Non déclaré</mark> |
| CreativeML-OpenRAIL-M | Non | <mark style="color:orange;">Non déclaré</mark> |
| GPL-3.0 (Copyleft) | <mark style="color:orange;">Non déclaré</mark> | Auto Licensing |
| CC-BY-4.0 | N.A. | N.A. |
| Llama License Agreement | <mark style="color:orange;">Non déclaré</mark> | <mark style="color:orange;">Non déclaré</mark> |
| SEER License Agreement | <mark style="color:orange;">Non déclaré</mark> | <mark style="color:orange;">Non déclaré</mark> |
| AFL-3.0 | <mark style="color:orange;">Non déclaré</mark> | Oui |
| Llama2 Community License | <mark style="color:orange;">Non déclaré</mark> | <mark style="color:orange;">Non déclaré</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">Non déclaré</mark> | <mark style="color:orange;">Non déclaré</mark> |

<mark style="color:purple;">**Concession de licence de droit d'auteur :**</mark>

| Nom de la licence | Révocable ? | Sous-licenciable ? |
|---|---|---|
| Apache-2.0 | Non | Oui |
| CodeML-OpenRAIL-M | Non | Oui |
| CreativeML-OpenRAIL-M | Non | Oui |
| GPL-3.0 (Copyleft) | Non | Auto Licensing |
| CC-BY-4.0 | Non | Auto Licensing |
| Llama License Agreement | Oui | Non ✤ |
| SEER License Agreement | Oui | Non ✤ |
| AFL-3.0 | <mark style="color:orange;">Non déclaré</mark> | Oui |
| Llama2 Community License | <mark style="color:orange;">Non déclaré</mark> | <mark style="color:orange;">Non déclaré</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">Non déclaré</mark> | <mark style="color:orange;">Non déclaré</mark> |

**NOTE :** Les licences CC sont conçues pour accorder des licences de droit d'auteur pour le contenu, donc la concession de l'utilisation de brevet n'est pas applicable. <mark style="color:orange;">Non déclaré :</mark> une licence qui ne déclare pas explicitement sa révocabilité est généralement considérée comme implicitement révocable. ✤ : Ces licences incluent implicitement des clauses de licence automatique. Auto Licensing signifie que le destinataire reçoit automatiquement une licence des concédants originaux tandis que la sous-licence n'est pas nécessaire.

Les licences ModelGo déterminent la révocabilité et la sous-licence en tenant soigneusement compte de leurs scénarios cibles (voir tableau ci-dessous). Pour NC et ND, notre objectif est de maximiser le contrôle du concédant et de garantir que toutes les licences puissent être révoquées. Par conséquent, nous adoptons un mécanisme de licence automatique (sans sous-concédant dans ce cas, toutes les licences seront résiliées si la licence principale est révoquée) au lieu de la sous-licence. L'exception est SA, où nous donnons également la priorité à la protection des bénéfices des contributeurs, rendant les licences SA irrévocables et [copyleft](https://en.wikipedia.org/wiki/Copyleft). Quant aux autres licences très permissives comme MG0 et MG-BY, qui encouragent le partage et l'utilisation libre, elles sont irrévocables et autorisent la sous-licence.

<mark style="color:purple;">**Concession de licences de brevet et de droit d'auteur dans ModelGo :**</mark>

| Nom de la licence | Révocable ? | Sous-licenciable ? |
|---|---|---|
| MG0 | Non | Oui |
| MG-BY | Non | Oui |
| MG-BY-SA (Copyleft) | Non | Non |
| MG-BY-RAI | Oui | Non |
| MG-BY-NC | Oui | Non |
| MG-BY-ND | Oui | Non |
| MG-BY-NC-ND | Oui | Non |
| MG-BY-NC-RAI | Oui | Non |

Les licences ModelGo déclarent explicitement si elles accordent ou n'accordent pas au licencié des licences de brevet et de droit d'auteur. Cette clarté garantit que les utilisateurs de modèles comprennent leurs droits et les risques potentiels lors de la réutilisation et de la contribution de modèles.

## Les MG-BY-SA sont-elles considérées comme des licences Open Source ?

<mark style="color:purple;">**Actuellement, non.**</mark> Aucune des variantes des licences ModelGo n'a encore été approuvée par l'Open Source Initiative (OSI). Cependant, nous visons à ce que MG-BY-SA-2.0 maintienne le modèle « ouvert ». Il convient également de mentionner que la signification d'« ouvert » peut différer entre les logiciels et les modèles. Dans les licences ModelGo, SA signifie la disponibilité des **Licensed Materials** et des **Derivative Materials**, excluant l'ouverture du jeu de données (car nous le considérons en dehors de la portée de gouvernance des licences MG).

## Puis-je fermer le code source de mes modèles sous licence MG avec SA ?

<mark style="color:purple;">**Non.**</mark> Cela s'applique également à ses dérivés. MG-BY-SA-2.0 est une licence copyleft, ce qui signifie que toutes les œuvres dérivées doivent également être couvertes par la même licence. Vous ne pouvez pas non plus révoquer MG-BY-SA-2.0, contrairement à GPL-3.0, qui ne déclare pas explicitement que la licence de brevet accordée est irrévocable.

## Les licences ModelGo supporteront-elles davantage d'options de licence ?

<mark style="color:purple;">**Possiblement.**</mark> Nous recommandons d'utiliser les options de licence les plus appropriées à votre scénario de publication. Nous pouvons réviser le texte de la licence ou ajouter de nouvelles options de licence pour répondre aux besoins émergents en matière de licence de modèles. Cependant, la simplicité et la concision sont également des facteurs que nous prenons en compte, ce qui est important pour éviter les conflits de licence dans un projet ML.

## Puis-je réutiliser le texte des licences ModelGo pour créer mes propres licences ?

<mark style="color:purple;">**Oui, vous le pouvez.**</mark> Les licences ModelGo vous autorisent explicitement à le faire, comme indiqué dans la section « MODIFICATION OF THIS LICENSE », à condition que vous fournissiez un avis lisible décrivant vos modifications apportées aux licences ModelGo originales. Cependant, nous encourageons l'utilisation des options de licence les plus appropriées à votre scénario de publication pour faciliter la standardisation des licences de modèles et simplifier l'analyse des licences dans les projets ML.

## Ma modification du Model Sheet aura-t-elle un effet ?

<mark style="color:purple;">**Non.**</mark> Le Model Sheet ne fait pas partie des termes et conditions des licences MG, donc les modifications qui y sont apportées ne seront pas effectives. Le Model Sheet sert uniquement à vous aider, vous et les utilisateurs, à choisir une licence et à en comprendre le contenu. Si vous avez des besoins personnalisés à ajouter aux licences ModelGo, vous devez modifier les dispositions dans la partie des termes et conditions.

## Que se passe-t-il si je remixe deux modèles sous licences MG ?

Il existe deux scénarios selon que le résultat du remix est <mark style="color:purple;">**séparable**</mark> ou <mark style="color:purple;">**inséparable**</mark>.

Dans le premier scénario, où les deux modèles restent séparables l'un de l'autre, un tel remix (par exemple, Voting, Stacking, MoE, Pipeline, etc.) ne créera pas une œuvre entièrement nouvelle, et les modèles originaux resteront sous leurs licences originales. Vous pouvez appliquer une nouvelle licence à votre effort de remix (par exemple, les poids des réseaux de routage) le cas échéant, mais cette action n'affectera pas les licences originales des modèles de base.

Dans le second scénario, où le processus de remix aboutit à un résultat inséparable (par exemple, moyennage des poids, fusion de modèles, concaténation de couches, etc.), il est nécessaire de vérifier la compatibilité entre les deux licences originales des modèles de base avant le remix. Il existe une compatibilité unidirectionnelle dans les licences MG, des Permissives aux Conditionnelles puis aux Strictes. Cela signifie que le résultat du remix peut être licencié sous MG avec des options plus strictes, mais des options moins restrictives ne sont pas autorisées. Nous vous fournissons un tableau de compatibilité pour illustrer cette règle :

<figure><img src="/images/compati.webp" alt="Tableau de compatibilité MG"><figcaption><p>Tableau de compatibilité MG</p></figcaption></figure>

Choisissez les licences des deux modèles que vous souhaitez remixer dans les lignes et colonnes. La marque ✅ signifie que vous pouvez remixer les deux modèles et qu'il existe une solution de licence viable pour relicencier vos résultats de remix ; la marque ⚠️ signifie qu'en raison des termes NoDerivatives, vous ne pouvez pas partager vos résultats de remix, ce qui vous empêche d'appliquer une licence aux résultats ; la marque ❌ signifie qu'il n'existe pas de solution de licence viable pour un tel remix, vous devez donc suivre les termes relatifs aux dérivés des licences originales mais ne pouvez pas relicencier vos résultats de remix.

Par exemple, si nous remixons deux modèles sous licence MG-BY-NC et MG-BY-RAI respectivement, nous pouvons relicencier les résultats du remix sous MG-BY-NC-RAI. Si nous voulons remixer des modèles avec MG-BY et MG-BY-ND, même s'il semble possible d'appliquer MG-BY-ND aux résultats du remix, en suivant les termes NoDerivatives de MG-BY-ND, nous ne pouvons pas partager un tel remix, ce qui rend aucune licence applicable. Si nous voulons remixer MG-BY-SA et MG-BY-RAI, le problème est qu'il n'existe pas de solutions de licence viables pour les résultats du remix, donc un tel remix n'est pas supporté par les licences ModelGo.

Globalement, dans la plupart des cas, vous pouvez librement remixer des modèles sous licence MG permissive dans votre modèle sans conflit, et remixer des modèles sous licence MG conditionnelle dans votre modèle en suivant les mêmes restrictions, mais il est difficile de remixer des modèles sous licence MG stricte et impossible de remixer des modèles sous licence MG avec ND.

## Pourquoi les licences ModelGo ne supportent-elles pas SA avec RAI ?

Suite à notre précédente [étude d'analyse de licences ML](https://github.com/Xtra-Computing/ModelGo), les restrictions d'utilisation de type copyleft dans les licences RAI sont incompatibles avec les termes relatifs aux restrictions supplémentaires de la Section 10 de GPL-3.0. Par conséquent, considérant que les restrictions de type RAI sont contraires à l'esprit de l'Open Source et pourraient potentiellement conduire à la fermeture du code source (Réf. Greenbaum, E. (2015). The Non-Discrimination Principle in Open Source Licensing. Cardozo L. Rev., 37, 1297), nous n'avons pas rédigé la licence MG-BY-SA-RAI.

> ### GPL-3.0 Section 10
>
> You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

La décision d'opter pour MG avec RAI ou non vous appartient entièrement. Cependant, si votre projet inclut déjà ou prévoit d'inclure du code et des composants ML sous GPL ou LGPL, il est conseillé d'éviter les licences RAI (Note : cela s'applique également à toute licence comportant des termes de restriction d'utilisation, comme les OpenRAILs et les licences AI2 ImpACT). Celles-ci présentent un risque élevé de conflits de licence dès que votre projet intègre des composants RAI (y compris le contenu généré et les dérivés).
