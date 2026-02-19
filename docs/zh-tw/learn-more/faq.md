# 💬 常見問題

## 為什麼我們需要 ModelGo 授權條款？

ModelGo 授權條款提供靈活的授權要素，以滿足您對 ML 模型使用和分發的特定授權需求。

<mark style="color:purple;">**為什麼不使用 Llama 或 Gemma 授權條款？**</mark> Llama 和 Gemma 授權條款是專有授權條款，聲明版權歸 Meta 和 Google 所有。如果您的專案建立在 Llama 或 Gemma 之上，您別無選擇，只能遵守其原始授權條款。但是，如果您擁有自己的模型並希望在保留版權署名的情況下發布它，您可能會更傾向於使用像 ModelGo 授權條款這樣的公共使用授權條款。

<mark style="color:purple;">**為什麼不使用 OSS 授權條款？**</mark> 傳統的開源軟體 (OSS) 授權條款缺乏對機器學習概念的明確定義，例如模型、輸出以及透過知識遷移創建的衍生品。這種不相容性可能導致某些 ML 活動（如蒸餾、混合專家）超出模型所有者的控制範圍，並可能損害其智慧財產權。

<mark style="color:purple;">**為什麼不使用 CCs？**</mark> [HuggingFace](https://huggingface.co/models?license=license:cc-by-nc-nd-4.0&sort=likes) 上的許多開發者選擇使用 Creative Commons 授權條款 (CCs) 來限制其模型的商業使用。然而，CCs 主要是為文章、音樂和圖片等作品設計的，將其應用於 ML 模型時存在不相容性。因此，需要一種專門針對模型的新授權方法。

<mark style="color:purple;">**為什麼不使用 OpenRAILs？**</mark> 最近，負責任 AI 授權條款 (RAILs) 被廣泛倡導以解決 AI 技術治理的需求，旨在限制模型的非法和不道德使用。我們承認這種新興治理需求（這就是我們在 ModelGo 授權條款中提供 RAI 選項的原因），但我們也認識到對更嚴格限制的需求，例如禁止商業使用、禁止共享衍生品以及強制開源以保護模型開發者的利益。這就是我們提出 ModelGo 並提供更多授權選項來填補這一空白的原因。

## ModelGo 和 OpenRAILs 有什麼區別？

從組成角度來看，[OpenRAILs(-M)](https://www.licenses.ai/ai-licenses) 是在 Apache-2.0 基礎上構建的，附加了針對 ML 領域的條款。其主要修改包括添加使用限制附件和授權條款文本中基於使用的行為限制條款。為了提供更全面的授權控制，ModelGo 借鑑了先前的授權條款但沒有複製其任何條款。您可以放心使用 MG 授權條款，無需擔心授權條款文本的版權問題。

從目標角度來看，OpenRAILs(-M) 倡導保護模型免受非法和不道德使用。最近，他們提供了一個 [授權條款生成器](https://www.licenses.ai/rail-license-generator) 來生成特定領域的使用限制列表。ModelGo 的目標有所不同；我們旨在提供一個類似 CCs 的框架來控制已發布模型的使用和分發。例如，開發者可以自由選擇最寬鬆的授權條款如 MG0-2.0 和 MG-BY-2.0 來放棄對其模型的大部分限制，或者選擇 NC 選項（可撤銷）來防止其模型和生成內容的不期望商業化。SA 選項旨在激勵共享和貢獻。

粗略地說，MG-BY-RAI 可以被視為類似於 OpenRAILs。但我們只是將 RAI 作為模型發布者的一種選擇。此外，為了進一步阻止模型的濫用，MG-BY-RAI 授予的權利是可撤銷的，這使其與 OpenRAILs 有所區別。

## ModelGo 和 AI2 ImpACT 有什麼區別？

從目標角度來看，[AI2 ImpACT](https://allenai.org/impact-license) 旨在為 AI2 發布的模型和資料集提供授權，其特定使用條款可能不適合一般的模型授權需求。然而，ModelGo 旨在滿足開發者的一般模型授權需求。

從分發控制角度來看，AI2 ImpACT 要求被授權方提交衍生品影響報告以聲明其對授權作品的預期使用，並期望他們誠信地公開其預期用途。然而，ModelGo 不包含此類限制。此外，AI2 ImpACT 中風險授權條款禁止共享原始作品但允許共享衍生品，這與帶有 ND 的 MG 相反。

值得一提的是，AI2 ImpACT 包含 Copyleft 風格的基於使用限制 (RAI)，這可能使整個 ML 專案與 GPL-3.0 組件不相容。重用 AI2 ImpACT 授權作品來構建您的專案的一個潛在風險是其授予的授權條款可以被撤銷。

## ModelGo 授權條款的管轄範圍是什麼？

MG 授權條款僅適用於模型，但其條款管轄 <mark style="color:purple;">模型及其衍生品的使用和分發，以及其輸出和配套程式碼和腳本</mark>。我們將這些對象分為三類來定義條款範圍：授權材料、衍生材料和輸出，每類有不同的限制條款和使用政策。例如，根據 MG-BY-ND-2.0 的條款，允許共享授權材料的逐字副本，但禁止共享任何衍生材料。

MG 授權條款不應適用於第三方材料（如開源軟體和自由內容作品）、系統函式庫和資料集（如訓練集、驗證集、測試集）。這意味著選擇帶有 SA 的 MG 不要求開源用於開發模型的資料。由於資料隱私問題以及這些資料集或其中的資料樣本已經有自由內容授權條款（通常是 CCs），我們認為資料集不在 MG 授權條款的管轄範圍之內。

<figure><img src="/images/scope.jpg" alt="MG 管轄範圍"><figcaption><p>MG 管轄範圍</p></figcaption></figure>

## 我應該繼續使用 ModelGo 授權條款 V1 嗎？

<mark style="color:purple;">**我們建議不要。**</mark> V1 是現有授權條款文本的混合版本，可能包含不可預見的版權問題。此外，V2 更加全面，包含了更好地處理衍生品智慧財產權的條款。我們強烈建議使用 V2。

## 我可以分發生成的內容嗎？

<mark style="color:purple;">**當然可以。**</mark> MG 授權條款不會傳播到生成的內容，也不主張對其版權。但是，帶有 NC 和 ND 的 MG 要求使用者在將生成內容收集並發布為資料集時註明來源模型。更多資訊請參閱條款「<mark style="color:purple;">2.2 條件 (b)</mark>」。

## 我應該在生成的內容中保留署名資訊嗎？

<mark style="color:purple;">**視情況而定。**</mark> MG 中的 BY 選項僅適用於模型及其衍生品（不包括可能已被單獨 OSS 授權條款覆蓋的程式碼和腳本）。但帶有 NC 和 ND 的 MG 要求使用者在將生成內容收集並發布為資料集時註明來源模型。

## 可撤銷與不可撤銷；可再授權與不可再授權。

智慧財產權 (IP) 包括專利、版權和商標。大多數軟體、內容和模型授權條款不賦予商標使用權，它們可能會也可能不會提供有限的專利或版權授權。然而，有些授權條款沒有明確說明其授予的授權是可撤銷還是不可撤銷、可再授權還是不可再授權，導致作品授權存在模糊性。我們在下表中總結了這個問題：

<mark style="color:purple;">**專利授權的授予：**</mark>

| 授權條款名稱 | 可撤銷？ | 可再授權？ |
|---|---|---|
| Apache-2.0 | 否 | <mark style="color:orange;">未聲明</mark> |
| CodeML-OpenRAIL-M | 否 | <mark style="color:orange;">未聲明</mark> |
| CreativeML-OpenRAIL-M | 否 | <mark style="color:orange;">未聲明</mark> |
| GPL-3.0 (Copyleft) | <mark style="color:orange;">未聲明</mark> | 自動授權 |
| CC-BY-4.0 | 不適用 | 不適用 |
| Llama License Agreement | <mark style="color:orange;">未聲明</mark> | <mark style="color:orange;">未聲明</mark> |
| SEER License Agreement | <mark style="color:orange;">未聲明</mark> | <mark style="color:orange;">未聲明</mark> |
| AFL-3.0 | <mark style="color:orange;">未聲明</mark> | 是 |
| Llama2 Community License | <mark style="color:orange;">未聲明</mark> | <mark style="color:orange;">未聲明</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">未聲明</mark> | <mark style="color:orange;">未聲明</mark> |

<mark style="color:purple;">**版權授權的授予：**</mark>

| 授權條款名稱 | 可撤銷？ | 可再授權？ |
|---|---|---|
| Apache-2.0 | 否 | 是 |
| CodeML-OpenRAIL-M | 否 | 是 |
| CreativeML-OpenRAIL-M | 否 | 是 |
| GPL-3.0 (Copyleft) | 否 | 自動授權 |
| CC-BY-4.0 | 否 | 自動授權 |
| Llama License Agreement | 是 | 否 ✤ |
| SEER License Agreement | 是 | 否 ✤ |
| AFL-3.0 | <mark style="color:orange;">未聲明</mark> | 是 |
| Llama2 Community License | <mark style="color:orange;">未聲明</mark> | <mark style="color:orange;">未聲明</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">未聲明</mark> | <mark style="color:orange;">未聲明</mark> |

**注意：** CC 授權條款旨在為內容授予版權授權，因此專利使用的授予不適用。<mark style="color:orange;">未聲明：</mark> 授權條款未明確聲明其可撤銷性，通常被理解為隱含可撤銷。✤：這些授權條款隱含包含自動授權條款。自動授權意味著接收者自動從原始授權方獲得授權，因此不需要再授權。

ModelGo 授權條款經過仔細考慮其目標場景來確定可撤銷性和再授權（見下表）。對於 NC 和 ND，我們的目標是最大化授權方控制並確保所有授權條款可以被撤銷。因此，我們採用自動授權機制（在這種情況下沒有再授權方，如果頭部授權條款被撤銷，所有授權條款將被終止）而不是再授權。SA 是例外，我們也優先保護貢獻者的利益，使 SA 授權條款不可撤銷且具有 [Copyleft](https://en.wikipedia.org/wiki/Copyleft) 特性。至於其他非常寬鬆的授權條款如 MG0 和 MG-BY，它們鼓勵共享和自由使用，是不可撤銷的並允許再授權。

<mark style="color:purple;">**ModelGo 中專利和版權授權的授予：**</mark>

| 授權條款名稱 | 可撤銷？ | 可再授權？ |
|---|---|---|
| MG0 | 否 | 是 |
| MG-BY | 否 | 是 |
| MG-BY-SA (Copyleft) | 否 | 否 |
| MG-BY-RAI | 是 | 否 |
| MG-BY-NC | 是 | 否 |
| MG-BY-ND | 是 | 否 |
| MG-BY-NC-ND | 是 | 否 |
| MG-BY-NC-RAI | 是 | 否 |

ModelGo 授權條款明確聲明是否授予被授權方專利和版權授權。這種清晰性確保模型使用者在複用和貢獻模型時了解他們的權利和潛在風險。

## MG-BY-SA 被認為是開源授權條款嗎？

<mark style="color:purple;">**目前不是。**</mark> ModelGo 授權條款的任何變體都尚未獲得開源促進會 (OSI) 的批准。但是，我們的目標是讓 MG-BY-SA-2.0 保持模型「開放」。值得一提的是，「開放」的含義在軟體和模型之間可能有所不同。在 ModelGo 授權條款中，SA 意味著**授權材料**和**衍生材料**的可用性，不包括資料集的開放性（因為我們認為資料集不在 MG 授權條款的管轄範圍內）。

## 我可以對使用帶有 SA 的 MG 授權的模型閉源嗎？

<mark style="color:purple;">**不可以。**</mark> 這也適用於其衍生品。MG-BY-SA-2.0 是一個 Copyleft 授權條款，意味著所有衍生作品也必須受相同授權條款的保護。您也不能撤銷 MG-BY-SA-2.0，這不同於 GPL-3.0，後者沒有明確聲明授予的專利授權是不可撤銷的。

## ModelGo 授權條款會支援更多授權選項嗎？

<mark style="color:purple;">**可能會。**</mark> 我們建議使用最適合您發布場景的授權選項。我們可能會修改授權條款文本或添加新的授權選項來解決模型授權中的新興需求。然而，簡潔性也是我們考慮的因素，這對於避免 ML 專案中的授權條款衝突非常重要。

## 我可以重用 ModelGo 授權條款文本來製作自己的授權條款嗎？

<mark style="color:purple;">**是的，您可以。**</mark> ModelGo 授權條款明確允許您這樣做，如「本授權條款的修改」一節所述，前提是您提供描述您對原始 ModelGo 授權條款所做修改的可讀通知。但是，我們鼓勵使用最適合您發布場景的授權選項，以促進模型授權的標準化並簡化 ML 專案中的授權條款分析。

## 我對 Model Sheet 的修改會生效嗎？

<mark style="color:purple;">**不會。**</mark> Model Sheet 不是 MG 授權條款條款和條件的一部分，因此對其的修改不會生效。Model Sheet 僅用於幫助您和使用者選擇授權條款並理解其內容。如果您有自訂需求需要添加到 ModelGo 授權條款中，您應該修改條款和條件部分中的規定。

## 如果我混合兩個使用 MG 授權條款的模型會怎樣？

有兩種場景，取決於混合結果是 <mark style="color:purple;">**可分離的**</mark> 還是 <mark style="color:purple;">**不可分離的**</mark>。

在第一種場景中，兩個模型彼此保持可分離，這種混合（例如投票、堆疊、MoE、管線等）不會創建一個全新的作品，原始模型將保留在其原始授權條款下。如果適用，您可以為您的混合工作（如閘控網路的權重）應用新授權條款，但此操作不會影響基礎模型的原始授權條款。

在第二種場景中，混合過程產生不可分離的結果（例如權重平均、模型融合、層拼接等），在混合之前需要檢查兩個基礎模型原始授權條款之間的相容性。MG 授權條款從寬鬆到有條件到嚴格存在單向相容性。這意味著混合結果可以在更嚴格的 MG 選項下授權，但不允許更少的選項。我們提供一個相容性表來展示此規則：

<figure><img src="/images/compati.jpg" alt="MG 相容性表"><figcaption><p>MG 相容性表</p></figcaption></figure>

從行和列中選擇您要混合的兩個模型的授權條款。✅ 標記表示您可以混合這兩個模型，並且有一個可行的授權解決方案來重新授權您的混合結果；⚠️ 標記表示由於禁止衍生品條款，您不能共享您的混合結果，導致您無法對結果應用任何授權條款；❌ 標記表示此類混合沒有可行的授權解決方案，因此您應該遵循原始授權條款關於衍生品的條款，但不能重新授權您的混合結果。

例如，如果我們分別混合使用 MG-BY-NC 和 MG-BY-RAI 授權的兩個模型，我們可以將混合結果重新授權為 MG-BY-NC-RAI。如果我們想混合使用 MG-BY 和 MG-BY-ND 的模型，雖然將 MG-BY-ND 應用於混合結果似乎可行，但根據 MG-BY-ND 的禁止衍生品條款，我們不能共享這種混合，導致沒有授權條款適用。如果我們想混合 MG-BY-SA 和 MG-BY-RAI，問題是混合結果沒有可行的授權解決方案，因此 ModelGo 授權條款不支援這種混合。

總體而言，在大多數情況下，您可以自由地將寬鬆 MG 授權的模型混合到您的模型中而不會產生衝突，並且在遵循相同限制的情況下可以混合有條件 MG 授權的模型，但混合嚴格 MG 授權的模型很困難，混合帶有 ND 的 MG 授權的模型是不可能的。

## 為什麼 ModelGo 授權條款不支援 SA 與 RAI？

根據我們之前的 [ML 授權條款分析研究](https://github.com/Xtra-Computing/ModelGo)，RAI 授權條款中 Copyleft 風格的基於使用限制與 GPL-3.0 第 10 節中關於進一步限制的條款不相容。因此，考慮到 RAI 類型的限制不符合開源精神並可能導致閉源（參考 Greenbaum, E. (2015). The Non-Discrimination Principle in Open Source Licensing. Cardozo L. Rev., 37, 1297），我們沒有起草 MG-BY-SA-RAI 授權條款。

> ### GPL-3.0 Section 10
>
> You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

選擇是否使用帶有 RAI 的 MG 完全取決於您。但是，如果您的專案已經包含或計劃包含任何 GPL 或 LGPL 程式碼和 ML 組件，建議避免 RAI 授權條款（注意：這同樣適用於任何帶有基於使用限制條款的授權條款，如 OpenRAILs 和 AI2 ImpACT 授權條款）。只要您的專案包含任何 RAI 組件（包括生成的內容和衍生品），這些都會導致授權條款衝突的高風險。
