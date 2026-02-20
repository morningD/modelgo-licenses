# 💬 常见问题

## 为什么我们需要 ModelGo 许可证？

ModelGo 许可证提供灵活的许可要素，以满足您对 ML 模型使用和分发的特定许可需求。

<mark style="color:purple;">**为什么不使用 Llama 或 Gemma 许可证？**</mark> Llama 和 Gemma 许可证是专有许可证，声明版权归 Meta 和 Google 所有。如果您的项目建立在 Llama 或 Gemma 之上，您别无选择，只能遵守其原始许可证。但是，如果您拥有自己的模型并希望在保留版权署名的情况下发布它，您可能会更倾向于使用像 ModelGo 许可证这样的公共使用许可证。

<mark style="color:purple;">**为什么不使用 OSS 许可证？**</mark> 传统的开源软件 (OSS) 许可证缺乏对机器学习概念的明确定义，例如模型、输出以及通过知识迁移创建的衍生品。这种不兼容性可能导致某些 ML 活动（如蒸馏、混合专家）超出模型所有者的控制范围，并可能损害其知识产权。

<mark style="color:purple;">**为什么不使用 CCs？**</mark> [HuggingFace](https://huggingface.co/models?license=license:cc-by-nc-nd-4.0&sort=likes) 上的许多开发者选择使用 Creative Commons 许可证 (CCs) 来限制其模型的商业使用。然而，CCs 主要是为文章、音乐和图片等作品设计的，将其应用于 ML 模型时存在不兼容性。因此，需要一种专门针对模型的新许可方法。

<mark style="color:purple;">**为什么不使用 OpenRAILs？**</mark> 最近，负责任 AI 许可证 (RAILs) 被广泛倡导以解决 AI 技术治理的需求，旨在限制模型的非法和不道德使用。我们承认这种新兴治理需求（这就是我们在 ModelGo 许可证中提供 RAI 选项的原因），但我们也认识到对更严格限制的需求，例如禁止商业使用、禁止共享衍生品以及强制开源以保护模型开发者的利益。这就是我们提出 ModelGo 并提供更多许可选项来填补这一空白的原因。

## ModelGo 和 OpenRAILs 有什么区别？

从组成角度来看，[OpenRAILs(-M)](https://www.licenses.ai/ai-licenses) 是在 Apache-2.0 基础上构建的，附加了针对 ML 领域的条款。其主要修改包括添加使用限制附件和许可证文本中基于使用的行为限制条款。为了提供更全面的许可控制，ModelGo 借鉴了先前的许可证但没有复制其任何条款。您可以放心使用 MG 许可证，无需担心许可证文本的版权问题。

从目标角度来看，OpenRAILs(-M) 倡导保护模型免受非法和不道德使用。最近，他们提供了一个 [许可证生成器](https://www.licenses.ai/rail-license-generator) 来生成特定领域的使用限制列表。ModelGo 的目标有所不同；我们旨在提供一个类似 CCs 的框架来控制已发布模型的使用和分发。例如，开发者可以自由选择最宽松的许可证如 MG0-2.0 和 MG-BY-2.0 来放弃对其模型的大部分限制，或者选择 NC 选项（可撤销）来防止其模型和生成内容的不期望商业化。SA 选项旨在激励共享和贡献。

粗略地说，MG-BY-RAI 可以被视为类似于 OpenRAILs。但我们只是将 RAI 作为模型发布者的一种选择。此外，为了进一步阻止模型的滥用，MG-BY-RAI 授予的权利是可撤销的，这使其与 OpenRAILs 有所区别。

## ModelGo 和 AI2 ImpACT 有什么区别？

从目标角度来看，[AI2 ImpACT](https://allenai.org/impact-license) 旨在为 AI2 发布的模型和数据集提供许可，其特定使用条款可能不适合一般的模型许可需求。然而，ModelGo 旨在满足开发者的一般模型许可需求。

从分发控制角度来看，AI2 ImpACT 要求被许可方提交衍生品影响报告以声明其对许可作品的预期使用，并期望他们诚信地公开其预期用途。然而，ModelGo 不包含此类限制。此外，AI2 ImpACT 中风险许可证禁止共享原始作品但允许共享衍生品，这与带有 ND 的 MG 相反。

值得一提的是，AI2 ImpACT 包含 Copyleft 风格的基于使用限制 (RAI)，这可能使整个 ML 项目与 GPL-3.0 组件不兼容。重用 AI2 ImpACT 许可作品来构建您的项目的一个潜在风险是其授予的许可证可以被撤销。

## ModelGo 许可证的管辖范围是什么？

MG 许可证仅适用于模型，但其条款管辖 <mark style="color:purple;">模型及其衍生品的使用和分发，以及其输出和配套代码和脚本</mark>。我们将这些对象分为三类来定义条款范围：许可材料、衍生材料和输出，每类有不同的限制条款和使用政策。例如，根据 MG-BY-ND-2.0 的条款，允许共享许可材料的逐字副本，但禁止共享任何衍生材料。

MG 许可证不应适用于第三方材料（如开源软件和自由内容作品）、系统库和数据集（如训练集、验证集、测试集）。这意味着选择带有 SA 的 MG 不要求开源用于开发模型的数据。由于数据隐私问题以及这些数据集或其中的数据样本已经有自由内容许可证（通常是 CCs），我们认为数据集不在 MG 许可证的范围之内。

<figure><img src="/images/scope.webp" alt="MG 管辖范围"><figcaption><p>MG 管辖范围</p></figcaption></figure>

## 我应该继续使用 ModelGo 许可证 V1 吗？

<mark style="color:purple;">**我们建议不要。**</mark> V1 是现有许可证文本的混合版本，可能包含不可预见的版权问题。此外，V2 更加全面，包含了更好地处理衍生品知识产权的条款。我们强烈建议使用 V2。

## 我可以分发生成的内容吗？

<mark style="color:purple;">**当然可以。**</mark> MG 许可证不会传播到生成的内容，也不主张对其版权。但是，带有 NC 和 ND 的 MG 要求用户在将生成内容收集并发布为数据集时注明来源模型。更多信息请参阅条款"<mark style="color:purple;">2.2 条件 (b)</mark>"。

## 我应该在生成的内容中保留署名信息吗？

<mark style="color:purple;">**视情况而定。**</mark> MG 中的 BY 选项仅适用于模型及其衍生品（不包括可能已被单独 OSS 许可证覆盖的代码和脚本）。但带有 NC 和 ND 的 MG 要求用户在将生成内容收集并发布为数据集时注明来源模型。

## 可撤销与不可撤销；可再许可与不可再许可。

知识产权 (IP) 包括专利、版权和商标。大多数软件、内容和模型许可证不赋予商标使用权，它们可能会也可能不会提供有限的专利或版权许可。然而，有些许可证没有明确说明其授予的许可证是可撤销还是不可撤销、可再许可还是不可再许可，导致作品许可存在模糊性。我们在下表中总结了这个问题：

<mark style="color:purple;">**专利许可的授予：**</mark>

| 许可证名称 | 可撤销？ | 可再许可？ |
|---|---|---|
| Apache-2.0 | 否 | <mark style="color:orange;">未声明</mark> |
| CodeML-OpenRAIL-M | 否 | <mark style="color:orange;">未声明</mark> |
| CreativeML-OpenRAIL-M | 否 | <mark style="color:orange;">未声明</mark> |
| GPL-3.0 (Copyleft) | <mark style="color:orange;">未声明</mark> | 自动许可 |
| CC-BY-4.0 | 不适用 | 不适用 |
| Llama License Agreement | <mark style="color:orange;">未声明</mark> | <mark style="color:orange;">未声明</mark> |
| SEER License Agreement | <mark style="color:orange;">未声明</mark> | <mark style="color:orange;">未声明</mark> |
| AFL-3.0 | <mark style="color:orange;">未声明</mark> | 是 |
| Llama2 Community License | <mark style="color:orange;">未声明</mark> | <mark style="color:orange;">未声明</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">未声明</mark> | <mark style="color:orange;">未声明</mark> |

<mark style="color:purple;">**版权许可的授予：**</mark>

| 许可证名称 | 可撤销？ | 可再许可？ |
|---|---|---|
| Apache-2.0 | 否 | 是 |
| CodeML-OpenRAIL-M | 否 | 是 |
| CreativeML-OpenRAIL-M | 否 | 是 |
| GPL-3.0 (Copyleft) | 否 | 自动许可 |
| CC-BY-4.0 | 否 | 自动许可 |
| Llama License Agreement | 是 | 否 ✤ |
| SEER License Agreement | 是 | 否 ✤ |
| AFL-3.0 | <mark style="color:orange;">未声明</mark> | 是 |
| Llama2 Community License | <mark style="color:orange;">未声明</mark> | <mark style="color:orange;">未声明</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">未声明</mark> | <mark style="color:orange;">未声明</mark> |

**注意：** CC 许可证旨在为内容授予版权许可，因此专利使用的授予不适用。<mark style="color:orange;">未声明：</mark> 许可证未明确声明其可撤销性，通常被理解为隐含可撤销。✤：这些许可证隐含包含自动许可条款。自动许可意味着接收者自动从原始许可方获得许可，因此不需要再许可。

ModelGo 许可证经过仔细考虑其目标场景来确定可撤销性和再许可（见下表）。对于 NC 和 ND，我们的目标是最大化许可方控制并确保所有许可证可以被撤销。因此，我们采用自动许可机制（在这种情况下没有再许可方，如果头部许可证被撤销，所有许可证将被终止）而不是再许可。SA 是例外，我们也优先保护贡献者的利益，使 SA 许可证不可撤销且具有 [Copyleft](https://en.wikipedia.org/wiki/Copyleft) 特性。至于其他非常宽松的许可证如 MG0 和 MG-BY，它们鼓励共享和自由使用，是不可撤销的并允许再许可。

<mark style="color:purple;">**ModelGo 中专利和版权许可的授予：**</mark>

| 许可证名称 | 可撤销？ | 可再许可？ |
|---|---|---|
| MG0 | 否 | 是 |
| MG-BY | 否 | 是 |
| MG-BY-SA (Copyleft) | 否 | 否 |
| MG-BY-RAI | 是 | 否 |
| MG-BY-NC | 是 | 否 |
| MG-BY-ND | 是 | 否 |
| MG-BY-NC-ND | 是 | 否 |
| MG-BY-NC-RAI | 是 | 否 |

ModelGo 许可证明确声明是否授予被许可方专利和版权许可。这种清晰性确保模型用户在复用和贡献模型时了解他们的权利和潜在风险。

## MG-BY-SA 被认为是开源许可证吗？

<mark style="color:purple;">**目前不是。**</mark> ModelGo 许可证的任何变体都尚未获得开源促进会 (OSI) 的批准。但是，我们的目标是让 MG-BY-SA-2.0 保持模型"开放"。值得一提的是，"开放"的含义在软件和模型之间可能有所不同。在 ModelGo 许可证中，SA 意味着**许可材料**和**衍生材料**的可用性，不包括数据集的开放性（因为我们认为数据集不在 MG 许可证的管辖范围内）。

## 我可以对使用带有 SA 的 MG 许可的模型闭源吗？

<mark style="color:purple;">**不可以。**</mark> 这也适用于其衍生品。MG-BY-SA-2.0 是一个 Copyleft 许可证，意味着所有衍生作品也必须受相同许可证的保护。您也不能撤销 MG-BY-SA-2.0，这不同于 GPL-3.0，后者没有明确声明授予的专利许可是不可撤销的。

## ModelGo 许可证会支持更多许可选项吗？

<mark style="color:purple;">**可能会。**</mark> 我们建议使用最适合您发布场景的许可选项。我们可能会修改许可证文本或添加新的许可选项来解决模型许可中的新兴需求。然而，简洁性也是我们考虑的因素，这对于避免 ML 项目中的许可证冲突非常重要。

## 我可以重用 ModelGo 许可证文本来制作自己的许可证吗？

<mark style="color:purple;">**是的，您可以。**</mark> ModelGo 许可证明确允许您这样做，如"本许可证的修改"一节所述，前提是您提供描述您对原始 ModelGo 许可证所做修改的可读通知。但是，我们鼓励使用最适合您发布场景的许可选项，以促进模型许可的标准化并简化 ML 项目中的许可证分析。

## 我对 Model Sheet 的修改会生效吗？

<mark style="color:purple;">**不会。**</mark> Model Sheet 不是 MG 许可证条款和条件的一部分，因此对其的修改不会生效。Model Sheet 仅用于帮助您和用户选择许可证并理解其内容。如果您有自定义需求需要添加到 ModelGo 许可证中，您应该修改条款和条件部分中的规定。

## 如果我混合两个使用 MG 许可证的模型会怎样？

有两种场景，取决于混合结果是 <mark style="color:purple;">**可分离的**</mark> 还是 <mark style="color:purple;">**不可分离的**</mark>。

在第一种场景中，两个模型彼此保持可分离，这种混合（例如投票、堆叠、MoE、管道等）不会创建一个全新的作品，原始模型将保留在其原始许可证下。如果适用，您可以为您的混合工作（如门控网络的权重）应用新许可证，但此操作不会影响基础模型的原始许可证。

在第二种场景中，混合过程产生不可分离的结果（例如权重平均、模型融合、层拼接等），在混合之前需要检查两个基础模型原始许可证之间的兼容性。MG 许可证从宽松到有条件到严格存在单向兼容性。这意味着混合结果可以在更严格的 MG 选项下许可，但不允许更少的选项。我们提供一个兼容性表来展示此规则：

<figure><img src="/images/compati.webp" alt="MG 兼容性表"><figcaption><p>MG 兼容性表</p></figcaption></figure>

从行和列中选择您要混合的两个模型的许可证。✅ 标记表示您可以混合这两个模型，并且有一个可行的许可解决方案来重新许可您的混合结果；⚠️ 标记表示由于禁止衍生品条款，您不能共享您的混合结果，导致您无法对结果应用任何许可证；❌ 标记表示此类混合没有可行的许可解决方案，因此您应该遵循原始许可证关于衍生品的条款，但不能重新许可您的混合结果。

例如，如果我们分别混合使用 MG-BY-NC 和 MG-BY-RAI 许可的两个模型，我们可以将混合结果重新许可为 MG-BY-NC-RAI。如果我们想混合使用 MG-BY 和 MG-BY-ND 的模型，虽然将 MG-BY-ND 应用于混合结果似乎可行，但根据 MG-BY-ND 的禁止衍生品条款，我们不能共享这种混合，导致没有许可证适用。如果我们想混合 MG-BY-SA 和 MG-BY-RAI，问题是混合结果没有可行的许可解决方案，因此 ModelGo 许可证不支持这种混合。

总体而言，在大多数情况下，您可以自由地将宽松 MG 许可的模型混合到您的模型中而不会产生冲突，并且在遵循相同限制的情况下可以混合有条件 MG 许可的模型，但混合严格 MG 许可的模型很困难，混合带有 ND 的 MG 许可的模型是不可能的。

## 为什么 ModelGo 许可证不支持 SA 与 RAI？

根据我们之前的 [ML 许可证分析研究](https://github.com/Xtra-Computing/ModelGo)，RAI 许可证中 Copyleft 风格的基于使用限制与 GPL-3.0 第 10 节中关于进一步限制的条款不兼容。因此，考虑到 RAI 类型的限制不符合开源精神并可能导致闭源（参考 Greenbaum, E. (2015). The Non-Discrimination Principle in Open Source Licensing. Cardozo L. Rev., 37, 1297），我们没有起草 MG-BY-SA-RAI 许可证。

> ### GPL-3.0 Section 10
>
> You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

选择是否使用带有 RAI 的 MG 完全取决于您。但是，如果您的项目已经包含或计划包含任何 GPL 或 LGPL 代码和 ML 组件，建议避免 RAI 许可证（注意：这同样适用于任何带有基于使用限制条款的许可证，如 OpenRAILs 和 AI2 ImpACT 许可证）。只要您的项目包含任何 RAI 组件（包括生成的内容和衍生品），这些都会导致许可证冲突的高风险。
