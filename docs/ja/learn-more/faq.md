# 💬 よくある質問

## なぜModelGoライセンスが必要なのですか？

ModelGoライセンスは、MLモデルの使用と配布に関する特定のライセンスニーズを満たすために、柔軟なライセンス要素を提供します。

<mark style="color:purple;">**LlamaやGemmaのライセンスではなぜダメなのですか？**</mark> LlamaおよびGemmaのライセンスはプロプライエタリライセンスであり、MetaとGoogleによる著作権の所有を主張しています。プロジェクトがLlamaやGemmaに基づいている場合、元のライセンスに従うしかありません。しかし、自分のモデルを所有しており、著作権帰属を保持しながら公開したい場合は、ModelGoライセンスのようなパブリックユースライセンスが適しているかもしれません。

<mark style="color:purple;">**OSSライセンスではなぜダメなのですか？**</mark> 従来のオープンソースソフトウェア（OSS）ライセンスには、モデル、出力、知識転送によって作成された派生物など、機械学習の概念に関する明確な定義がありません。この互換性の欠如により、特定のML活動（蒸留、Mixture-of-Expertなど）がモデル所有者のコントロール外となり、知的財産権を損なう可能性があります。

<mark style="color:purple;">**CCsではなぜダメなのですか？**</mark> [HuggingFace](https://huggingface.co/models?license=license:cc-by-nc-nd-4.0&sort=likes)上の多くの開発者が、モデルの商用利用を制限するためにCreative Commonsライセンス（CCs）を選択しています。しかし、CCsは主に記事、音楽、画像などの著作物向けに設計されており、MLモデルに適用する場合は互換性がありません。したがって、モデル専用の新しいライセンス方法が必要です。

<mark style="color:purple;">**OpenRAILsではなぜダメなのですか？**</mark> 近年、AI技術のガバナンスの必要性に対応するため、Responsible AIライセンス（RAILs）が広く提唱され、モデルの違法かつ非倫理的な使用を制限することを目指しています。私たちはそのようなガバナンスの新たな必要性を認識しており（ModelGoライセンスでRAIオプションを提供しているのはそのためです）、同時に、モデル開発者の利益を保護するために、商用利用の禁止、派生物の共有禁止、強制的なオープンソース化など、より厳格な制限に対する需要も認識しています。ModelGoを提案し、このギャップを埋めるためにより多くのライセンスオプションを提供するのはこのためです。

## ModelGoとOpenRAILsの違いは何ですか？

構成の観点から、[OpenRAILs(-M)](https://www.licenses.ai/ai-licenses)はApache-2.0をベースに、ML分野向けの追加条項を加えて構築されています。主な変更点は、使用制限の付録の追加と、ライセンステキスト内の使用ベースの行動制限条項です。より包括的なライセンス管理を提供するため、ModelGoは先行ライセンスに着想を得ていますが、それらの条項をコピーしていません。ライセンステキストの著作権問題を心配することなくMGライセンスを使用できます。

目的の観点から、OpenRAILs(-M)は違法かつ非倫理的な使用からモデルを保護することを提唱しています。最近では、ドメイン固有の使用制限リストを生成する[ライセンスジェネレーター](https://www.licenses.ai/rail-license-generator)を提供しています。ModelGoの目的はやや異なり、公開されたモデルの使用と配布を管理するためのCCsのようなフレームワークを提供することを目指しています。例えば、開発者はMG0-2.0やMG-BY-2.0のような最も寛容なライセンスを自由に選択して、モデルに対するほとんどの制限を放棄したり、NCオプション（撤回可能）を選択して、モデルや生成コンテンツの望まない商業化を防いだりすることができます。SAオプションは共有と貢献を奨励することを目的としています。

大まかに言えば、MG-BY-RAIはOpenRAILsに似ていると見なすことができます。ただし、私たちはRAIをモデル公開者の選択肢として残しているだけです。さらに、モデルの悪用をより抑止するため、MG-BY-RAIで付与される権利は撤回可能であり、これがOpenRAILsとの違いです。

## ModelGoとAI2 ImpACTの違いは何ですか？

目的の観点から、[AI2 ImpACT](https://allenai.org/impact-license)はAI2がリリースしたモデルとデータセットのライセンスを目的として設計されており、一般的なモデルライセンスのニーズには適さない特定の使用条項が含まれています。一方、ModelGoは開発者の一般的なモデルライセンスニーズを満たすために設計されています。

配布管理の観点から、AI2 ImpACTはライセンシーに対し、ライセンスされた著作物の使用目的を宣言するDerivative Impact Reportの提出を求め、使用目的の透明性について誠実な努力が期待されています。しかし、ModelGoにはこの種の制限は含まれていません。さらに、AI2 ImpACT Medium Risk Licenseは原本の共有を禁止していますが、派生物の共有は許可しており、これはMG with NDとは正反対です。

AI2 ImpACTにはコピーレフトスタイルの使用ベース制限（RAI）が含まれており、MLプロジェクト全体がGPL-3.0コンポーネントと非互換になる可能性があることは言及に値します。AI2 ImpACTライセンスの著作物をプロジェクト構築に再利用する際の潜在的なリスクとして、付与されたライセンスが撤回される可能性があります。

## ModelGoライセンスの適用範囲は何ですか？

MGライセンスはモデルにのみ適用されますが、その条項は<mark style="color:purple;">モデルとその派生物、およびそれらの出力、ならびに補完的なコードとスクリプトの使用と配布</mark>を規定します。これらのオブジェクトを、Licensed Materials、Derivative Materials、Outputの3つのカテゴリに分類し、条項の範囲を定義しており、それぞれ異なる制限条項と使用ポリシーがあります。例えば、MG-BY-ND-2.0の条項によれば、Licensed Materialsの完全なコピーの共有は許可されていますが、いかなるDerivative Materialsの共有も禁止されています。

MGライセンスは、サードパーティの素材（オープンソースソフトウェアやフリーコンテンツの著作物など）、システムライブラリ、およびデータセット（トレーニングセット、バリデーションセット、テストセットなど）には適用されません。これは、MG with SAを選択しても、モデル開発に使用したデータのオープンソース化を義務付けないことを意味します。データプライバシーの懸念と、これらのデータセットやそのデータサンプルが既にフリーコンテンツライセンス（通常CCs）を持っているという事実により、データセットはMGライセンスの範囲外と考えています。

<figure><img src="/images/scope.webp" alt="MGの適用範囲"><figcaption><p>MGの適用範囲</p></figcaption></figure>

## ModelGo Licenses V1を引き続き使用すべきですか？

<mark style="color:purple;">**使用しないことをお勧めします。**</mark> V1は既存のライセンステキストのリミックスであり、予期しない著作権問題が含まれている可能性があります。さらに、V2はより包括的で、派生物における知的財産権をより適切に扱う条項が含まれています。V2の使用を強くお勧めします。

## 生成されたコンテンツを配布しても良いですか？

<mark style="color:purple;">**もちろんです。**</mark> MGライセンスは生成コンテンツに伝播せず、それらに対する著作権を主張しません。ただし、MG with NCおよびNDは、生成コンテンツがデータセットとして収集・公開される場合、生成に使用された出所モデルの通知を含めることを要求します。詳細は「<mark style="color:purple;">2.2 Conditions (b)</mark>」条項を参照してください。

## 生成されたコンテンツに帰属情報を保持すべきですか？

<mark style="color:purple;">**場合によります。**</mark> MGのBYオプションはモデルとその派生物にのみ適用されます（コードとスクリプトは別のOSSライセンスで既にカバーされている場合があるため除外）。ただし、MG with NCおよびNDは、生成コンテンツがデータセットとして収集・公開される場合、生成に使用された出所モデルの通知を含めることを要求します。

## 撤回可能 vs. 撤回不可能；サブライセンス可能 vs. サブライセンス不可。

知的財産（IP）には、特許、著作権、商標が含まれます。ほとんどのソフトウェア、コンテンツ、モデルのライセンスは商標の使用権を付与しませんが、限定的な特許権や著作権ライセンスを提供する場合としない場合があります。しかし、一部のライセンスは付与されたライセンスが撤回可能か撤回不可能か、サブライセンス可能かサブライセンス不可かを明示的に記載しておらず、著作物のライセンスに曖昧さをもたらしています。以下の表にこの問題をまとめました：

<mark style="color:purple;">**特許ライセンスの付与：**</mark>

| ライセンス名 | 撤回可能？ | サブライセンス可能？ |
|---|---|---|
| Apache-2.0 | No | <mark style="color:orange;">Not Stated</mark> |
| CodeML-OpenRAIL-M | No | <mark style="color:orange;">Not Stated</mark> |
| CreativeML-OpenRAIL-M | No | <mark style="color:orange;">Not Stated</mark> |
| GPL-3.0 (Copyleft) | <mark style="color:orange;">Not Stated</mark> | Auto Licensing |
| CC-BY-4.0 | N.A. | N.A. |
| Llama License Agreement | <mark style="color:orange;">Not Stated</mark> | <mark style="color:orange;">Not Stated</mark> |
| SEER License Agreement | <mark style="color:orange;">Not Stated</mark> | <mark style="color:orange;">Not Stated</mark> |
| AFL-3.0 | <mark style="color:orange;">Not Stated</mark> | Yes |
| Llama2 Community License | <mark style="color:orange;">Not Stated</mark> | <mark style="color:orange;">Not Stated</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">Not Stated</mark> | <mark style="color:orange;">Not Stated</mark> |

<mark style="color:purple;">**著作権ライセンスの付与：**</mark>

| ライセンス名 | 撤回可能？ | サブライセンス可能？ |
|---|---|---|
| Apache-2.0 | No | Yes |
| CodeML-OpenRAIL-M | No | Yes |
| CreativeML-OpenRAIL-M | No | Yes |
| GPL-3.0 (Copyleft) | No | Auto Licensing |
| CC-BY-4.0 | No | Auto Licensing |
| Llama License Agreement | Yes | No ✤ |
| SEER License Agreement | Yes | No ✤ |
| AFL-3.0 | <mark style="color:orange;">Not Stated</mark> | Yes |
| Llama2 Community License | <mark style="color:orange;">Not Stated</mark> | <mark style="color:orange;">Not Stated</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">Not Stated</mark> | <mark style="color:orange;">Not Stated</mark> |

**注記：** CCライセンスはコンテンツに対する著作権ライセンスを付与するために設計されているため、特許使用の付与は適用外です。<mark style="color:orange;">Not Stated：</mark>ライセンスが撤回可能性を明示的に記載していない場合、一般的に暗黙的に撤回可能であると解釈されます。✤：これらのライセンスには暗黙的に自動ライセンス条項が含まれています。Auto Licensingとは、受領者が元のライセンサーから自動的にライセンスを受け取ることを意味し、サブライセンスは不要です。

ModelGoライセンスは、対象シナリオを慎重に考慮して撤回可能性とサブライセンスを決定しています（下表参照）。NCおよびNDについては、ライセンシーの管理を最大化し、すべてのライセンスが撤回可能であることを確保することを目指しています。したがって、サブライセンスの代わりに自動ライセンスメカニズム（この場合サブライセンサーは存在せず、ヘッドライセンスが撤回されるとすべてのライセンスが終了します）を採用しています。例外はSAで、貢献者の利益保護を優先し、SAライセンスを撤回不可能かつ[コピーレフト](https://en.wikipedia.org/wiki/Copyleft)としています。MG0やMG-BYのような非常に寛容なライセンスについては、共有と自由な使用を奨励するため、撤回不可能でサブライセンスを許可しています。

<mark style="color:purple;">**ModelGoにおける特許権および著作権ライセンスの付与：**</mark>

| ライセンス名 | 撤回可能？ | サブライセンス可能？ |
|---|---|---|
| MG0 | No | Yes |
| MG-BY | No | Yes |
| MG-BY-SA (Copyleft) | No | No |
| MG-BY-RAI | Yes | No |
| MG-BY-NC | Yes | No |
| MG-BY-ND | Yes | No |
| MG-BY-NC-ND | Yes | No |
| MG-BY-NC-RAI | Yes | No |

ModelGoライセンスは、ライセンシーに特許権および著作権ライセンスを付与するか付与しないかを明示的に記載しています。この明確さにより、モデルユーザーはモデルの再利用や貢献を行う際に、自らの権利と潜在的なリスクを理解することができます。

## MG-BY-SAはオープンソースライセンスと見なされますか？

<mark style="color:purple;">**現時点ではいいえ。**</mark> ModelGoライセンスのいずれのバリエーションも、まだOpen Source Initiative（OSI）によって承認されていません。ただし、MG-BY-SA-2.0がモデルを「オープン」に保つことを目指しています。「オープン」の意味はソフトウェアとモデルの間で異なる場合があることも言及に値します。ModelGoライセンスにおいて、SAは**Licensed Materials**と**Derivative Materials**の利用可能性を意味し、データセットの公開性は含まれません（MGライセンスの適用範囲外と考えているため）。

## MG with SA下でライセンスされたモデルをクローズドソースにできますか？

<mark style="color:purple;">**できません。**</mark> これはその派生物にも適用されます。MG-BY-SA-2.0はコピーレフトライセンスであり、すべての派生著作物も同じライセンスの下でカバーされなければなりません。GPL-3.0が付与された特許ライセンスの撤回不可能性を明示的に主張していないのとは異なり、MG-BY-SA-2.0は撤回することもできません。

## ModelGoライセンスはより多くのライセンスオプションをサポートしますか？

<mark style="color:purple;">**可能性はあります。**</mark> 公開シナリオに最も適したライセンスオプションの使用をお勧めします。モデルライセンスの新たなニーズに対応するため、ライセンステキストの改訂や新しいライセンスオプションの追加を行う場合があります。ただし、MLプロジェクトにおけるライセンス競合を避けるために重要な、シンプルさと簡潔さも考慮する要素です。

## ModelGoライセンスのテキストを再利用して独自のライセンスを作成できますか？

<mark style="color:purple;">**はい、できます。**</mark> ModelGoライセンスは「MODIFICATION OF THIS LICENSE」セクションに記載されているように、明示的にそれを許可しています。ただし、元のModelGoライセンスへの変更内容を読みやすく記載した通知を提供する必要があります。しかし、モデルライセンスの標準化を促進し、MLプロジェクトにおけるライセンス分析を簡素化するために、公開シナリオに最も適したライセンスオプションの使用をお勧めします。

## Model Sheetへの変更は有効になりますか？

<mark style="color:purple;">**いいえ。**</mark> Model SheetはMGライセンスの条項および条件の一部ではないため、変更は有効になりません。Model Sheetは、あなたとユーザーがライセンスを選択し、その内容を理解するためのものです。ModelGoライセンスにカスタムニーズを追加したい場合は、条項および条件部分の規定を変更する必要があります。

## MGライセンス下の2つのモデルをリミックスするとどうなりますか？

リミックスの結果が<mark style="color:purple;">**分離可能**</mark>か<mark style="color:purple;">**分離不可能**</mark>かによって、2つのシナリオがあります。

最初のシナリオでは、2つのモデルが互いに分離可能なまま残る場合、そのようなリミックス（Voting、Stacking、MoE、Pipelineなど）は全く新しい著作物を作成せず、元のモデルは元のライセンスの下に残ります。リミックスの作業（ゲーティングネットワークの重みなど）に新しいライセンスを適用することはできますが、この行為はベースモデルの元のライセンスに影響しません。

2番目のシナリオでは、リミックスプロセスが分離不可能な結果をもたらす場合（重み平均、モデル融合、レイヤー連結など）、リミックス前にベースモデルの2つの元のライセンス間の互換性を確認する必要があります。MGライセンスには、寛容から条件付き、厳格への一方向の互換性があります。これは、リミックス結果をより厳格なMGオプションでライセンスすることはできますが、より少ないオプションは許可されないことを意味します。このルールを示す互換性テーブルを提供します：

<figure><img src="/images/compati.webp" alt="MG互換性テーブル"><figcaption><p>MG互換性テーブル</p></figcaption></figure>

リミックスしたい2つのモデルのライセンスを行と列から選択してください。✅マークは2つのモデルをリミックスでき、リミックス結果を再ライセンスするための実行可能なライセンスソリューションがあることを意味します。⚠️マークは、NoDerivativesの条項により、リミックス結果を共有できないため、結果にライセンスを適用できないことを意味します。❌マークは、そのようなリミックスに実行可能なライセンスソリューションがないため、元のライセンスの派生物に関する条項に従う必要があるが、リミックス結果を再ライセンスすることはできないことを意味します。

例えば、MG-BY-NCとMG-BY-RAIでそれぞれライセンスされた2つのモデルをリミックスする場合、リミックス結果をMG-BY-NC-RAIで再ライセンスできます。MG-BYとMG-BY-NDのモデルをリミックスしたい場合、リミックス結果にMG-BY-NDを適用できるように見えますが、MG-BY-NDのNoDerivatives条項に従い、そのようなリミックスを共有することはできず、適用可能なライセンスはありません。MG-BY-SAとMG-BY-RAIをリミックスしたい場合、リミックス結果に実行可能なライセンスソリューションがないため、そのようなリミックスはModelGoライセンスではサポートされていません。

全体として、ほとんどの場合、寛容なMGライセンスのモデルは競合なく自由にリミックスでき、条件付きMGライセンスのモデルも同じ制限に従えばリミックスできますが、厳格なMGライセンスのモデルのリミックスは困難であり、MG with NDライセンスのモデルのリミックスは不可能です。

## ModelGoライセンスがSA with RAIをサポートしないのはなぜですか？

私たちの以前の[MLライセンス分析研究](https://github.com/Xtra-Computing/ModelGo)に従い、RAIライセンスにおけるコピーレフトスタイルの使用ベース制限は、GPL-3.0のセクション10における追加制限に関する条項と互換性がありません。したがって、RAI種の制限がオープンソースの精神から外れ、潜在的にクローズドソースにつながる懸念から（参考：Greenbaum, E. (2015). The Non-Discrimination Principle in Open Source Licensing. Cardozo L. Rev., 37, 1297）、MG-BY-SA-RAIライセンスは起草しませんでした。

> ### GPL-3.0 Section 10
>
> You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

MG with RAIを選択するかどうかは完全にあなた次第です。ただし、プロジェクトにGPLまたはLGPLのコードやMLコンポーネントが既に含まれている、または含める予定がある場合は、RAIライセンスを避けることをお勧めします（注：OpenRAILsやAI2 ImpACTライセンスなど、使用ベースの制限条項を含むすべてのライセンスに同じことが当てはまります）。プロジェクトにRAIコンポーネント（生成コンテンツや派生物を含む）が含まれている限り、ライセンス競合につながるリスクが高くなります。
