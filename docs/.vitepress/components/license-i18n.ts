export interface LicenseI18n {
  pickYourLicense: string
  downloading: string
  downloadLicense: string
  licenseDeclaration: string
  addToReadme: string
  modelSheetOptional: string
  copy: string
  copied: string
  badges: Record<string, { fullName: string; desc: string }>
}

export const i18n: Record<string, LicenseI18n> = {
  en: {
    pickYourLicense: 'Pick Your License',
    downloading: 'Downloading...',
    downloadLicense: 'Download {name} License',
    licenseDeclaration: 'License Declaration',
    addToReadme: 'Add to your README',
    modelSheetOptional: 'Model Sheet (Optional)',
    copy: 'Copy',
    copied: '✓ Copied!',
    badges: {
      BY: { fullName: 'Attribution', desc: 'Must give credit, retain attribution and license in copies and derivatives.' },
      NC: { fullName: 'NonCommercial', desc: 'Must use and distribute for non-commercial purposes only.' },
      ND: { fullName: 'NoDerivatives', desc: 'May not distribute any modified works based on the model.' },
      RAI: { fullName: 'ResponsibleAI', desc: 'Must comply with responsible use of AI terms.' },
      SA: { fullName: 'ShareAlike', desc: 'Must keep derivatives open source and apply the same license.' },
      MG0: { fullName: '0 Conditions', desc: 'Almost no restrictions. Maximum sharing and freedom.' },
    }
  },
  'zh-CN': {
    pickYourLicense: '选择您的许可证',
    downloading: '下载中...',
    downloadLicense: '下载 {name} 许可证',
    licenseDeclaration: '许可证声明',
    addToReadme: '添加到您的 README',
    modelSheetOptional: 'Model Sheet（可选）',
    copy: '复制',
    copied: '✓ 已复制！',
    badges: {
      BY: { fullName: '署名', desc: '必须注明出处，在副本和衍生品中保留署名和许可证。' },
      NC: { fullName: '非商业', desc: '仅限非商业目的使用和分发。' },
      ND: { fullName: '禁止衍生', desc: '不得分发基于该模型的任何修改作品。' },
      RAI: { fullName: '负责任AI', desc: '必须遵守负责任使用 AI 的条款。' },
      SA: { fullName: '相同方式共享', desc: '衍生品必须保持开源并适用相同许可证。' },
      MG0: { fullName: '零条件', desc: '几乎没有限制。最大程度的共享和自由。' },
    }
  },
  'zh-TW': {
    pickYourLicense: '選擇您的授權條款',
    downloading: '下載中...',
    downloadLicense: '下載 {name} 授權條款',
    licenseDeclaration: '授權條款聲明',
    addToReadme: '新增至您的 README',
    modelSheetOptional: 'Model Sheet（選填）',
    copy: '複製',
    copied: '✓ 已複製！',
    badges: {
      BY: { fullName: '署名', desc: '必須註明出處，在副本和衍生品中保留署名和授權條款。' },
      NC: { fullName: '非商業', desc: '僅限非商業目的使用和分發。' },
      ND: { fullName: '禁止衍生', desc: '不得分發基於該模型的任何修改作品。' },
      RAI: { fullName: '負責任AI', desc: '必須遵守負責任使用 AI 的條款。' },
      SA: { fullName: '相同方式共享', desc: '衍生品必須保持開源並適用相同授權條款。' },
      MG0: { fullName: '零條件', desc: '幾乎沒有限制。最大程度的共享和自由。' },
    }
  },
  ja: {
    pickYourLicense: 'ライセンスを選択',
    downloading: 'ダウンロード中...',
    downloadLicense: '{name} ライセンスをダウンロード',
    licenseDeclaration: 'ライセンス宣言',
    addToReadme: 'README に追加',
    modelSheetOptional: 'Model Sheet（任意）',
    copy: 'コピー',
    copied: '✓ コピーしました！',
    badges: {
      BY: { fullName: '表示', desc: 'クレジットを表示し、コピーおよび派生物に帰属表示とライセンスを保持する必要があります。' },
      NC: { fullName: '非営利', desc: '非営利目的でのみ使用および配布する必要があります。' },
      ND: { fullName: '改変禁止', desc: 'モデルに基づく改変作品を配布することはできません。' },
      RAI: { fullName: '責任あるAI', desc: '責任あるAI使用条件に準拠する必要があります。' },
      SA: { fullName: '継承', desc: '派生物をオープンソースで維持し、同じライセンスを適用する必要があります。' },
      MG0: { fullName: '条件なし', desc: 'ほぼ制限なし。最大限の共有と自由。' },
    }
  },
  ko: {
    pickYourLicense: '라이선스 선택',
    downloading: '다운로드 중...',
    downloadLicense: '{name} 라이선스 다운로드',
    licenseDeclaration: '라이선스 선언',
    addToReadme: 'README에 추가',
    modelSheetOptional: 'Model Sheet (선택사항)',
    copy: '복사',
    copied: '✓ 복사됨!',
    badges: {
      BY: { fullName: '저작자표시', desc: '출처를 밝히고, 사본 및 파생물에 저작자 표시와 라이선스를 유지해야 합니다.' },
      NC: { fullName: '비영리', desc: '비상업적 목적으로만 사용 및 배포해야 합니다.' },
      ND: { fullName: '변경금지', desc: '모델을 기반으로 한 수정된 작품을 배포할 수 없습니다.' },
      RAI: { fullName: '책임있는AI', desc: '책임 있는 AI 사용 조건을 준수해야 합니다.' },
      SA: { fullName: '동일조건변경허락', desc: '파생물을 오픈 소스로 유지하고 동일한 라이선스를 적용해야 합니다.' },
      MG0: { fullName: '조건 없음', desc: '거의 제한 없음. 최대한의 공유와 자유.' },
    }
  },
  ru: {
    pickYourLicense: 'Выберите лицензию',
    downloading: 'Загрузка...',
    downloadLicense: 'Скачать лицензию {name}',
    licenseDeclaration: 'Декларация лицензии',
    addToReadme: 'Добавить в README',
    modelSheetOptional: 'Model Sheet (необязательно)',
    copy: 'Копировать',
    copied: '✓ Скопировано!',
    badges: {
      BY: { fullName: 'Атрибуция', desc: 'Необходимо указать авторство, сохранить атрибуцию и лицензию в копиях и производных.' },
      NC: { fullName: 'Некоммерческая', desc: 'Использование и распространение только в некоммерческих целях.' },
      ND: { fullName: 'Без производных', desc: 'Запрещено распространять модифицированные работы на основе модели.' },
      RAI: { fullName: 'Ответственный ИИ', desc: 'Необходимо соблюдать условия ответственного использования ИИ.' },
      SA: { fullName: 'С сохранением условий', desc: 'Производные должны оставаться открытыми и использовать ту же лицензию.' },
      MG0: { fullName: 'Без условий', desc: 'Почти без ограничений. Максимальная свобода обмена.' },
    }
  },
  es: {
    pickYourLicense: 'Elige tu licencia',
    downloading: 'Descargando...',
    downloadLicense: 'Descargar licencia {name}',
    licenseDeclaration: 'Declaración de licencia',
    addToReadme: 'Agregar a tu README',
    modelSheetOptional: 'Model Sheet (Opcional)',
    copy: 'Copiar',
    copied: '✓ Copiado!',
    badges: {
      BY: { fullName: 'Atribución', desc: 'Debe dar crédito, conservar la atribución y la licencia en copias y derivados.' },
      NC: { fullName: 'NoComercial', desc: 'Solo para uso y distribución con fines no comerciales.' },
      ND: { fullName: 'SinDerivadas', desc: 'No se pueden distribuir obras modificadas basadas en el modelo.' },
      RAI: { fullName: 'IA Responsable', desc: 'Debe cumplir con los términos de uso responsable de IA.' },
      SA: { fullName: 'CompartirIgual', desc: 'Los derivados deben mantenerse de código abierto y aplicar la misma licencia.' },
      MG0: { fullName: 'Sin condiciones', desc: 'Casi sin restricciones. Máxima libertad para compartir.' },
    }
  },
  fr: {
    pickYourLicense: 'Choisissez votre licence',
    downloading: 'Téléchargement...',
    downloadLicense: 'Télécharger la licence {name}',
    licenseDeclaration: 'Déclaration de licence',
    addToReadme: 'Ajouter à votre README',
    modelSheetOptional: 'Model Sheet (Facultatif)',
    copy: 'Copier',
    copied: '✓ Copié !',
    badges: {
      BY: { fullName: 'Attribution', desc: 'Doit créditer, conserver l\'attribution et la licence dans les copies et dérivés.' },
      NC: { fullName: 'NonCommercial', desc: 'Utilisation et distribution à des fins non commerciales uniquement.' },
      ND: { fullName: 'PasDeDérivés', desc: 'Interdiction de distribuer des œuvres modifiées basées sur le modèle.' },
      RAI: { fullName: 'IA Responsable', desc: 'Doit respecter les conditions d\'utilisation responsable de l\'IA.' },
      SA: { fullName: 'PartageIdentique', desc: 'Les dérivés doivent rester open source et appliquer la même licence.' },
      MG0: { fullName: 'Sans conditions', desc: 'Presque aucune restriction. Partage et liberté maximaux.' },
    }
  },
  ar: {
    pickYourLicense: 'اختر ترخيصك',
    downloading: 'جارٍ التحميل...',
    downloadLicense: 'تحميل ترخيص {name}',
    licenseDeclaration: 'إعلان الترخيص',
    addToReadme: 'أضف إلى README',
    modelSheetOptional: 'Model Sheet (اختياري)',
    copy: 'نسخ',
    copied: '✓ تم النسخ!',
    badges: {
      BY: { fullName: 'نسب المصنف', desc: 'يجب ذكر المصدر والاحتفاظ بالإسناد والترخيص في النسخ والمشتقات.' },
      NC: { fullName: 'غير تجاري', desc: 'يجب الاستخدام والتوزيع لأغراض غير تجارية فقط.' },
      ND: { fullName: 'بلا مشتقات', desc: 'لا يجوز توزيع أي أعمال معدلة بناءً على النموذج.' },
      RAI: { fullName: 'ذكاء اصطناعي مسؤول', desc: 'يجب الامتثال لشروط الاستخدام المسؤول للذكاء الاصطناعي.' },
      SA: { fullName: 'الترخيص بالمثل', desc: 'يجب أن تبقى المشتقات مفتوحة المصدر وتطبق نفس الترخيص.' },
      MG0: { fullName: 'بدون شروط', desc: 'بدون قيود تقريبًا. أقصى درجات المشاركة والحرية.' },
    }
  },
}
