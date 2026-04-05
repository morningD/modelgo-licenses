# 💬 자주 묻는 질문

## ModelGo 라이선스가 왜 필요한가요?

ModelGo 라이선스는 ML 모델의 사용 및 배포에 관한 특정 라이선스 요구 사항을 충족하기 위해 유연한 라이선스 요소를 제공합니다.

<mark style="color:purple;">**Llama나 Gemma 라이선스를 사용하면 안 되나요?**</mark> Llama와 Gemma 라이선스는 독점 라이선스이며 Meta와 Google이 저작권 소유권을 주장합니다. 프로젝트가 Llama나 Gemma를 기반으로 한다면, 원본 라이선스를 준수할 수밖에 없습니다. 그러나 자신의 모델을 소유하고 있으며 저작권 귀속을 유지하면서 배포하고 싶다면, ModelGo 라이선스와 같은 공공 사용 라이선스를 선호할 수 있습니다.

<mark style="color:purple;">**OSS 라이선스를 사용하면 안 되나요?**</mark> 전통적인 오픈소스 소프트웨어(OSS) 라이선스는 모델, 출력, 지식 전이를 통해 생성된 파생물 등 머신러닝 개념에 대한 명확한 정의가 부족합니다. 이러한 호환성 부족으로 인해 특정 ML 활동(예: 증류, Mix-of-Expert)이 모델 소유자의 통제 범위를 벗어나 잠재적으로 지식 재산권을 손상시킬 수 있습니다.

<mark style="color:purple;">**CC를 사용하면 안 되나요?**</mark> [HuggingFace](https://huggingface.co/models?license=license:cc-by-nc-nd-4.0&sort=likes)의 많은 개발자들이 모델의 상업적 사용을 제한하기 위해 Creative Commons 라이선스(CC)를 사용해 왔습니다. 그러나 CC는 주로 기사, 음악, 사진과 같은 콘텐츠를 위해 설계되었으므로 ML 모델에 적용할 때 호환되지 않습니다. 따라서 모델을 위한 새로운 전용 라이선스 방식이 필요합니다.

<mark style="color:purple;">**OpenRAIL을 사용하면 안 되나요?**</mark> 최근 책임 있는 AI 라이선스(RAIL)가 AI 기술 거버넌스 요구를 해결하기 위해 널리 주장되어 왔으며, 모델의 불법적이고 비윤리적인 사용을 제한하는 것을 목표로 합니다. 우리는 이러한 거버넌스의 필요성을 인정하지만(이것이 ModelGo 라이선스에서 RAI 옵션을 제공하는 이유입니다), 상업적 사용 금지, 파생물 공유 금지, 모델 개발자의 수익 보호를 위한 의무적 오픈소스화 등 더 엄격한 제한에 대한 수요도 인식하고 있습니다. 이것이 ModelGo를 제안하고 이 격차를 메우기 위해 더 많은 라이선스 옵션을 제공하는 이유입니다.

## ModelGo와 OpenRAIL의 차이점은 무엇인가요?

구성 관점에서, [OpenRAILs(-M)](https://www.licenses.ai/ai-licenses)는 Apache-2.0 위에 ML 분야에 맞춤화된 추가 조항을 더한 것입니다. 주요 변경 사항으로는 사용 제한 첨부 파일 추가와 라이선스 텍스트에 사용 기반 행동 제한 조항을 추가한 것이 있습니다. 더 포괄적인 라이선스 통제를 제공하기 위해, ModelGo는 이전 라이선스에서 영감을 얻었지만 그 조항을 복사하지 않았습니다. 라이선스 텍스트의 저작권 문제 걱정 없이 MG 라이선스를 사용할 수 있습니다.

목표 관점에서, OpenRAILs(-M)는 불법적이고 비윤리적인 사용으로부터 모델을 보호하는 것을 주장합니다. 최근에는 도메인별 사용 제한 목록을 생성하는 [라이선스 생성기](https://www.licenses.ai/rail-license-generator)를 제공합니다. ModelGo의 목표는 다소 다릅니다. 우리는 배포된 모델의 사용 및 배포를 통제하기 위한 CC와 유사한 프레임워크를 제공하는 것을 목표로 합니다. 예를 들어, 개발자는 MG0-2.0 및 MG-BY-2.0과 같은 가장 관대한 라이선스를 자유롭게 선택하여 모델에 대한 대부분의 제한을 면제하거나, NC 옵션(철회 가능)을 선택하여 모델과 생성된 콘텐츠의 원치 않는 상업화를 방지할 수 있습니다. SA 옵션은 공유와 기여를 장려하는 것을 목표로 합니다.

대략적으로 말하면, MG-BY-RAI는 OpenRAIL과 유사하다고 볼 수 있습니다. 그러나 우리는 RAI를 모델 배포자의 선택으로 남겨둡니다. 또한, 모델의 오용을 더욱 억제하기 위해 MG-BY-RAI로 부여된 권리는 철회 가능하며, 이는 OpenRAIL과의 차별점입니다.

## ModelGo와 AI2 ImpACT의 차이점은 무엇인가요?

목표 관점에서, [AI2 ImpACT](https://allenai.org/impact-license)는 AI2에서 배포한 모델과 데이터셋에 라이선스를 부여하기 위해 설계되었으며, 일반적인 모델 라이선스 요구에 적합하지 않을 수 있는 특정 사용 조항을 포함합니다. 반면 ModelGo는 개발자의 일반적인 모델 라이선스 요구를 충족하기 위해 설계되었습니다.

배포 통제 관점에서, AI2 ImpACT는 라이선스 수취인이 라이선스된 저작물의 의도된 사용을 선언하기 위해 파생물 영향 보고서를 제출하도록 요구하며, 의도된 사용에 대해 투명하게 노력할 것으로 기대합니다. 그러나 ModelGo는 이러한 종류의 제한을 포함하지 않습니다. 또한, AI2 ImpACT 중간 위험 라이선스는 원본 저작물의 공유를 금지하지만 파생물의 공유를 허용하는데, 이는 MG의 ND 옵션과 반대입니다.

AI2 ImpACT에는 카피레프트 스타일의 사용 기반 제한(RAI)이 포함되어 있어, 전체 ML 프로젝트가 GPL-3.0 구성 요소와 호환되지 않을 수 있다는 점을 언급할 가치가 있습니다. AI2 ImpACT 라이선스로 허가된 저작물을 프로젝트에 재사용하는 것의 잠재적 위험은 부여된 라이선스가 철회될 수 있다는 것입니다.

## ModelGo 라이선스의 관할 범위는 무엇인가요?

MG 라이선스는 모델에만 적용되지만, 그 조항은 <mark style="color:purple;">모델 및 그 파생물, 출력, 그리고 보완 코드 및 스크립트의 사용과 배포</mark>를 규율합니다. 우리는 이러한 객체를 네 가지 범주로 분류하여 조항의 범위를 정의합니다: 라이선스 자료(Licensed Materials), 파생 자료(Derivative Materials), 추출된 모델(Extracted Models), 출력(Output)이며, 각각 다른 제한 조항과 사용 정책이 있습니다. 추출된 모델은 증류 방법과 같이 모델의 출력에서 패턴을 전송하여 생성된 모델입니다. 예를 들어, MG-BY-ND-2.0 조항에 따르면 라이선스 자료의 축어적 사본 공유는 허용되지만 파생 자료 또는 추출된 모델의 공유는 금지됩니다.

MG 라이선스는 제3자 자료(예: 오픈소스 소프트웨어 및 자유 콘텐츠 콘텐츠), 시스템 라이브러리, 데이터셋(예: 학습 세트, 검증 세트, 테스트 세트)에는 적용되지 않습니다. 이는 MG의 SA 옵션을 선택해도 모델 개발에 사용된 데이터의 오픈소스화를 의무화하지 않음을 의미합니다. 데이터 개인 정보 보호 문제와 이러한 데이터셋 또는 그 데이터 샘플이 이미 자유 콘텐츠 라이선스(일반적으로 CC)를 가지고 있다는 사실로 인해, 데이터셋은 MG 라이선스의 범위 밖으로 간주합니다.

<figure><img src="/images/scope.webp" alt="MG 관할 범위"><figcaption><p>MG 관할 범위</p></figcaption></figure>

## ModelGo Licenses V1을 계속 사용해야 하나요?

<mark style="color:purple;">**사용하지 않는 것을 권장합니다.**</mark> V1은 기존 라이선스 텍스트의 리믹스이며 예기치 않은 저작권 문제를 포함할 수 있습니다. 또한, V2는 더 포괄적이며 파생물의 지식 재산권을 더 잘 다루는 조항을 포함합니다. V2 사용을 강력히 권장합니다.

## 생성된 콘텐츠를 배포해도 되나요?

<mark style="color:purple;">**물론 됩니다.**</mark> MG 라이선스는 생성된 콘텐츠로 전파되지 않으며 이에 대한 저작권을 주장하지 않습니다. 그러나 MG의 NC 및 ND 옵션은 생성된 콘텐츠를 수집하여 데이터셋으로 배포하는 경우, 콘텐츠 생성에 사용된 출처 모델의 고지를 포함하도록 요구합니다. 자세한 내용은 "<mark style="color:purple;">2.2 Conditions (b)</mark>" 조항을 참조하세요.

## 생성된 콘텐츠에 저작자 표시 정보를 유지해야 하나요?

<mark style="color:purple;">**상황에 따라 다릅니다.**</mark> MG의 BY 옵션은 모델 및 그 파생물에만 적용됩니다(이미 별도의 OSS 라이선스로 적용될 수 있는 코드 및 스크립트 제외). 그러나 MG의 NC 및 ND 옵션은 생성된 콘텐츠를 수집하여 데이터셋으로 배포하는 경우, 콘텐츠 생성에 사용된 출처 모델의 고지를 포함하도록 요구합니다.

## 철회 가능 vs. 철회 불가능; 재라이선스 가능 vs. 재라이선스 불가.

지식 재산권(IP)은 특허, 저작권, 상표를 포함합니다. 대부분의 소프트웨어, 콘텐츠 및 모델 라이선스는 상표 사용 권리를 부여하지 않으며, 제한된 특허 또는 저작권 라이선스를 제공할 수도 있고 아닐 수도 있습니다. 그러나 일부 라이선스는 부여된 라이선스가 철회 가능한지 불가능한지, 재라이선스 가능한지 불가능한지를 명시적으로 기술하지 않아 저작물 라이선스에 모호함을 초래합니다. 아래 표에 이 문제를 요약합니다:

<mark style="color:purple;">**특허 라이선스 부여:**</mark>

| 라이선스 이름 | 철회 가능? | 재라이선스 가능? |
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

<mark style="color:purple;">**저작권 라이선스 부여:**</mark>

| 라이선스 이름 | 철회 가능? | 재라이선스 가능? |
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

**참고:** CC 라이선스는 콘텐츠에 대한 저작권 라이선스를 부여하도록 설계되었으므로 특허 사용 부여는 적용 불가합니다. <mark style="color:orange;">Not Stated:</mark> 라이선스가 철회 가능성을 명시적으로 기술하지 않은 경우, 일반적으로 암묵적으로 철회 가능한 것으로 이해됩니다. ✤: 이러한 라이선스는 암묵적으로 자동 라이선스 조항을 포함합니다. Auto Licensing은 수령자가 원본 라이선스 허여자로부터 자동으로 라이선스를 받으므로 재라이선스가 불필요함을 의미합니다.

ModelGo 라이선스는 대상 시나리오를 신중히 고려하여 철회 가능성과 재라이선스를 결정합니다(아래 표 참조). NC 및 ND의 경우, 라이선스 수여자의 통제를 최대화하고 모든 라이선스가 철회될 수 있도록 하는 것이 목표입니다. 따라서 재라이선스 대신 자동 라이선스 메커니즘을 채택합니다(이 경우 재라이선스 허여자가 없으므로, 최상위 라이선스가 철회되면 모든 라이선스가 종료됩니다). 예외는 SA로, 기여자의 이익 보호를 우선시하여 SA 라이선스를 철회 불가능하고 [카피레프트](https://en.wikipedia.org/wiki/Copyleft)로 만들었습니다. MG0 및 MG-BY와 같은 매우 관대한 라이선스의 경우, 공유와 자유로운 사용을 장려하므로 철회 불가능하며 재라이선스를 허용합니다.

<mark style="color:purple;">**ModelGo의 특허 및 저작권 라이선스 부여:**</mark>

| 라이선스 이름 | 철회 가능? | 재라이선스 가능? |
|---|---|---|
| MG0 | No | Yes |
| MG-BY | No | Yes |
| MG-BY-SA (Copyleft) | No | No |
| MG-BY-RAI | Yes | No |
| MG-BY-NC | Yes | No |
| MG-BY-ND | Yes | No |
| MG-BY-NC-ND | Yes | No |
| MG-BY-NC-RAI | Yes | No |

ModelGo 라이선스는 라이선스 수취인에게 특허 및 저작권 라이선스를 부여하는지 여부를 명시적으로 기술합니다. 이러한 명확성은 모델 사용자가 모델을 재사용하고 기여할 때 자신의 권리와 잠재적 위험을 이해할 수 있도록 보장합니다.

## MG-BY-SA는 오픈소스 라이선스로 간주되나요?

<mark style="color:purple;">**현재는 아닙니다.**</mark> ModelGo 라이선스의 어떤 변형도 아직 Open Source Initiative(OSI)의 승인을 받지 못했습니다. 그러나 MG-BY-SA-2.0은 모델을 "개방"된 상태로 유지하는 것을 목표로 합니다. "개방"의 의미가 소프트웨어와 모델 간에 다를 수 있다는 점도 언급할 가치가 있습니다. ModelGo 라이선스에서 SA는 **라이선스 대상물** 및 **파생 대상물**의 가용성을 의미하며, 데이터셋의 개방성은 제외합니다(MG 라이선스의 관할 범위 밖으로 간주하기 때문입니다).

## MG의 SA 옵션으로 라이선스된 모델을 비공개할 수 있나요?

<mark style="color:purple;">**아니요.**</mark> 이는 파생물에도 적용됩니다. MG-BY-SA-2.0은 카피레프트 라이선스이므로, 모든 파생 저작물도 동일한 라이선스로 적용되어야 합니다. 또한 MG-BY-SA-2.0은 철회할 수 없으며, 이는 부여된 특허 라이선스가 철회 불가능하다고 명시적으로 주장하지 않는 GPL-3.0과 다릅니다.

## ModelGo 라이선스가 더 많은 라이선스 옵션을 지원할 예정인가요?

<mark style="color:purple;">**가능성이 있습니다.**</mark> 배포 시나리오에 가장 적합한 라이선스 옵션을 사용할 것을 권장합니다. 모델 라이선스의 새로운 요구를 해결하기 위해 라이선스 텍스트를 수정하거나 새로운 라이선스 옵션을 추가할 수 있습니다. 그러나 단순성과 간결성도 우리가 고려하는 요소이며, 이는 ML 프로젝트에서 라이선스 충돌을 방지하는 데 중요합니다.

## ModelGo 라이선스 텍스트를 재사용하여 자체 라이선스를 만들 수 있나요?

<mark style="color:purple;">**네, 가능합니다.**</mark> ModelGo 라이선스는 "이 라이선스의 수정" 섹션에 명시된 바와 같이 이를 명시적으로 허용하며, 원본 ModelGo 라이선스에 대한 수정 사항을 읽을 수 있는 고지로 제공해야 합니다. 그러나 모델 라이선스의 표준화를 촉진하고 ML 프로젝트에서의 라이선스 분석을 간소화하기 위해 배포 시나리오에 가장 적합한 라이선스 옵션을 사용할 것을 권장합니다.

## Model Sheet를 수정하면 효력이 있나요?

<mark style="color:purple;">**아니요.**</mark> Model Sheet는 MG 라이선스의 약관 및 조건의 일부가 아니므로 수정해도 효력이 없습니다. Model Sheet는 귀하와 사용자가 라이선스를 선택하고 그 내용을 이해하는 것을 돕기 위한 것입니다. ModelGo 라이선스에 사용자 정의 사항을 추가해야 하는 경우, 약관 및 조건 부분의 조항을 수정해야 합니다.

## MG 라이선스로 허가된 두 모델을 리믹스하면 어떻게 되나요?

리믹스 결과가 <mark style="color:purple;">**분리 가능한**</mark> 경우와 <mark style="color:purple;">**분리 불가능한**</mark> 경우에 따라 두 가지 시나리오가 있습니다.

첫 번째 시나리오에서, 두 모델이 서로 분리 가능한 상태로 유지되는 경우(예: Voting, Stacking, MoE, Pipeline 등), 이러한 리믹스는 완전히 새로운 저작물을 생성하지 않으며, 원본 모델은 원래 라이선스를 유지합니다. 해당되는 경우 리믹스 노력(예: 게이팅 네트워크의 가중치)에 새로운 라이선스를 적용할 수 있지만, 이 행위는 기본 모델의 원래 라이선스에 영향을 미치지 않습니다.

두 번째 시나리오에서, 리믹스 과정이 분리 불가능한 결과를 초래하는 경우(예: 가중치 평균, 모델 융합, 레이어 연결 등), 리믹스하기 전에 기본 모델의 두 원본 라이선스 간의 호환성을 확인해야 합니다. MG 라이선스에는 관대한 것에서 조건부, 엄격한 것으로의 단방향 호환성이 있습니다. 이는 리믹스 결과를 더 엄격한 옵션의 MG 라이선스로 적용할 수 있지만, 더 적은 옵션은 허용되지 않음을 의미합니다. 이 규칙을 보여주는 호환성 표를 제공합니다:

<figure><img src="/images/compati.webp" alt="MG 호환성 표"><figcaption><p>MG 호환성 표</p></figcaption></figure>

행과 열에서 리믹스하려는 두 모델의 라이선스를 선택하세요. ✅ 표시는 두 모델을 리믹스할 수 있으며 리믹스 결과를 재라이선스할 수 있는 실행 가능한 라이선스 솔루션이 있음을 의미합니다. ⚠️ 표시는 NoDerivatives 조항으로 인해 리믹스 결과를 공유할 수 없어 어떤 라이선스도 적용할 수 없음을 의미합니다. ❌ 표시는 이러한 리믹스를 위한 실행 가능한 라이선스 솔루션이 없으므로, 원본 라이선스의 파생물 관련 조항을 따라야 하지만 리믹스 결과를 재라이선스할 수 없음을 의미합니다.

예를 들어, MG-BY-NC와 MG-BY-RAI로 각각 라이선스된 두 모델을 리믹스하면, 리믹스 결과를 MG-BY-NC-RAI로 재라이선스할 수 있습니다. MG-BY와 MG-BY-ND의 모델을 리믹스하려는 경우, 리믹스 결과에 MG-BY-ND를 적용할 수 있을 것처럼 보이지만, MG-BY-ND의 NoDerivatives 조항에 따라 이러한 리믹스를 공유할 수 없어 적용 가능한 라이선스가 없습니다. MG-BY-SA와 MG-BY-RAI를 리믹스하려는 경우, 리믹스 결과를 위한 실행 가능한 라이선스 솔루션이 없으므로, 이러한 리믹스는 ModelGo 라이선스에서 지원되지 않습니다.

전반적으로, 대부분의 경우 관대한 MG 라이선스로 된 모델을 충돌 없이 자유롭게 리믹스할 수 있으며, 동일한 제한을 따르는 경우 조건부 MG 라이선스로 된 모델을 리믹스할 수 있지만, 엄격한 MG 라이선스로 된 모델을 리믹스하기는 어렵고 MG의 ND 옵션으로 된 모델을 리믹스하는 것은 불가능합니다.

## ModelGo 라이선스가 SA와 RAI를 함께 지원하지 않는 이유는 무엇인가요?

이전 [ML 라이선스 분석 연구](https://github.com/Xtra-Computing/ModelGo)에 따르면, RAI 라이선스의 카피레프트 스타일 사용 기반 제한은 GPL-3.0의 섹션 10에 있는 추가 제한에 관한 조항과 호환되지 않습니다. 따라서 RAI 종류의 제한이 오픈소스의 정신에 벗어나며 잠재적으로 비공개로 이어질 수 있다는 우려(참고: Greenbaum, E. (2015). The Non-Discrimination Principle in Open Source Licensing. Cardozo L. Rev., 37, 1297)로 인해, MG-BY-SA-RAI 라이선스를 작성하지 않았습니다.

> ### GPL-3.0 Section 10
>
> You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

MG의 RAI를 선택할지 여부는 전적으로 귀하의 결정입니다. 그러나 프로젝트에 GPL 또는 LGPL 코드 및 ML 구성 요소가 이미 포함되어 있거나 포함될 예정이라면, RAI 라이선스를 피하는 것이 좋습니다(참고: OpenRAIL 및 AI2 ImpACT 라이선스와 같은 사용 기반 제한 조항이 있는 모든 라이선스에도 동일하게 적용됩니다). 이러한 라이선스는 프로젝트에 RAI 구성 요소(생성된 콘텐츠 및 파생물 포함)가 포함되는 한 라이선스 충돌이 발생할 위험이 높습니다.
