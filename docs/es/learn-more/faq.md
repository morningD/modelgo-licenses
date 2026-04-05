# 💬 Preguntas frecuentes

## ¿Por que necesitamos las licencias ModelGo?

Las licencias ModelGo ofrecen elementos de licenciamiento flexibles para satisfacer sus necesidades especificas de licenciamiento sobre el uso y la distribucion de sus modelos de ML.

<mark style="color:purple;">**¿Por que no usar las licencias de Llama o Gemma?**</mark> Las licencias de Llama y Gemma son licencias propietarias y afirman la propiedad de los derechos de autor por parte de Meta y Google. Si su proyecto se basa en Llama o Gemma, no tiene otra opcion mas que cumplir con sus licencias originales. Sin embargo, si usted es propietario de su modelo y desea publicarlo manteniendo la atribucion de sus derechos de autor, puede preferir una licencia de uso publico como las licencias ModelGo.

<mark style="color:purple;">**¿Por que no usar licencias OSS?**</mark> Las licencias tradicionales de software de codigo abierto (OSS) carecen de definiciones claras con respecto a conceptos de aprendizaje automatico, como Modelos, Salidas y Derivados creados mediante transferencia de conocimiento. Esta falta de compatibilidad puede resultar en que ciertas actividades de ML (por ejemplo, Destilacion, Mix-of-Expert) queden fuera del control del propietario del modelo y potencialmente comprometan sus derechos de PI.

<mark style="color:purple;">**¿Por que no usar CCs?**</mark> Muchos desarrolladores en [HuggingFace](https://huggingface.co/models?license=license:cc-by-nc-nd-4.0&sort=likes) han elegido usar licencias Creative Commons (CCs) para restringir el uso comercial de sus modelos. Sin embargo, las CCs estan diseñadas principalmente para artefactos como articulos, musica e imagenes, lo que las hace incompatibles cuando se aplican a modelos de ML. Por lo tanto, existe la necesidad de un nuevo metodo de licenciamiento especifico para modelos.

<mark style="color:purple;">**¿Por que no usar OpenRAILs?**</mark> Recientemente, las licencias de IA Responsable (RAILs) han sido ampliamente promovidas para abordar la necesidad de gobernar las tecnologias de IA, con el objetivo de restringir los usos ilegales y poco eticos de los modelos. Reconocemos la necesidad emergente de dicha gobernanza (por eso ofrecemos la opcion RAI en las licencias ModelGo), pero tambien reconocemos la demanda de restricciones mas estrictas, como prohibir el uso comercial, el intercambio de derivados y la obligatoriedad de codigo abierto para proteger las ganancias de los desarrolladores de modelos. Por eso proponemos ModelGo y ofrecemos mas opciones de licenciamiento para llenar este vacio.

## ¿Cual es la diferencia entre ModelGo y OpenRAILs?

Desde la perspectiva de composicion, [OpenRAILs(-M)](https://www.licenses.ai/ai-licenses) se construye sobre Apache-2.0 con terminos adicionales adaptados para campos de ML. Sus principales modificaciones incluyen agregar un anexo de Restricciones de Uso y terminos de restriccion de comportamiento basados en el uso en el texto de la licencia. Para proporcionar un control de licenciamiento mas completo, ModelGo se inspira en licencias anteriores pero no copia ninguno de sus terminos. Puede usar las licencias MG sin preocuparse por problemas de derechos de autor en el texto de la licencia.

Desde la perspectiva de los objetivos, OpenRAILs(-M) aboga por proteger los modelos del uso ilegal y poco etico. Recientemente, proporcionan un [generador de licencias](https://www.licenses.ai/rail-license-generator) para generar una lista de Restricciones de Uso especificas del dominio. Los objetivos de ModelGo son algo diferentes; nuestro objetivo es proporcionar un marco similar a CCs para controlar el uso y la distribucion de los modelos publicados. Por ejemplo, los desarrolladores pueden elegir libremente las licencias mas permisivas como MG0-2.0 y MG-BY-2.0 para renunciar a la mayoria de las restricciones sobre sus modelos, o pueden elegir la opcion NC (que es revocable) para prevenir la comercializacion no deseada de sus modelos y contenido generado. La opcion SA tiene como objetivo incentivar el intercambio y las contribuciones.

En terminos generales, MG-BY-RAI puede considerarse similar a OpenRAILs. Pero simplemente dejamos la opcion RAI como una eleccion para los publicadores de modelos. Ademas, para disuadir aun mas el uso indebido de modelos, los derechos otorgados por MG-BY-RAI son revocables, lo que lo distingue de OpenRAILs.

## ¿Cual es la diferencia entre ModelGo y AI2 ImpACT?

Desde la perspectiva de los objetivos, [AI2 ImpACT](https://allenai.org/impact-license) esta diseñado para licenciar modelos y conjuntos de datos publicados por AI2, con terminos de uso especificos que pueden no ser adecuados para las necesidades comunes de licenciamiento de modelos. Sin embargo, ModelGo esta diseñado para satisfacer las necesidades generales de licenciamiento de modelos de los desarrolladores.

Desde la perspectiva del control de distribucion, AI2 ImpACT requiere que los licenciatarios presenten Informes de Impacto de Derivados para declarar su uso previsto de la obra licenciada, y se espera que hagan esfuerzos de buena fe para ser transparentes sobre su uso previsto. Sin embargo, ModelGo no contiene este tipo de restricciones. Ademas, la Licencia de Riesgo Medio de AI2 ImpACT prohibe compartir la obra literal pero permite compartir derivados, lo cual es lo opuesto a MG con ND.

Vale la pena mencionar que AI2 ImpACT contiene restricciones basadas en el uso de estilo copyleft (RAI), lo que podria hacer que todo el proyecto de ML sea incompatible con componentes GPL-3.0. Un riesgo potencial de reutilizar obras licenciadas bajo AI2 ImpACT en la construccion de su proyecto es que su licencia otorgada puede ser revocada.

## ¿Cual es el alcance de gobernanza de las licencias ModelGo?

Las licencias MG solo se aplican al Modelo, pero sus terminos rigen el <mark style="color:purple;">uso y distribucion del Modelo y sus derivados, asi como las salidas de estos, y el codigo y scripts complementarios</mark>. Clasificamos estos objetos en cuatro categorías para definir el alcance de los términos: Materiales con licencia (Licensed Materials), Materiales derivados (Derivative Materials), Modelos extraídos (Extracted Models) y Salida (Output), cada uno con diferentes términos de restricción y políticas de uso. Los modelos extraídos son modelos creados mediante la transferencia de patrones de la salida del modelo, como a través de métodos de destilación. Por ejemplo, según los términos de MG-BY-ND-2.0, se permite compartir una copia textual de los Materiales con licencia, pero se prohíbe compartir cualquier Material derivado o Modelo extraído.

Las licencias MG no deben aplicarse a Third-Party Materials (por ejemplo, software de codigo abierto y artefactos de contenido libre), bibliotecas del sistema y conjuntos de datos (por ejemplo, conjunto de entrenamiento, conjunto de validacion, conjunto de prueba). Esto implica que elegir MG con SA no obliga a hacer codigo abierto los datos utilizados para desarrollar el modelo. Debido a las preocupaciones de privacidad de datos y al hecho de que estos conjuntos de datos o las muestras de datos que contienen ya tienen licencias de contenido libre (tipicamente CCs), consideramos que los conjuntos de datos estan fuera del alcance de las licencias MG.

<figure><img src="/images/scope.webp" alt="Alcance de gobernanza de MG"><figcaption><p>Alcance de gobernanza de MG</p></figcaption></figure>

## ¿Deberia seguir usando las licencias ModelGo V1?

<mark style="color:purple;">**Sugerimos que no.**</mark> V1 es una mezcla de textos de licencias existentes y puede contener problemas de derechos de autor imprevistos. Ademas, V2 es mas completa e incluye clausulas que abordan mejor los derechos de PI en derivados. Recomendamos encarecidamente usar V2 en su lugar.

## ¿Puedo distribuir el contenido generado?

<mark style="color:purple;">**Por supuesto que si.**</mark> Las licencias MG no se propagaran al contenido generado y no reclaman derechos de autor sobre el mismo. Sin embargo, MG con NC y ND requieren que los usuarios incluyan un aviso del modelo de procedencia utilizado para generar este contenido si se recopila y publica como un conjunto de datos. Consulte la Clausula "<mark style="color:purple;">2.2 Conditions (b)</mark>" para mas informacion.

## ¿Debo conservar la informacion de atribucion en el contenido generado?

<mark style="color:purple;">**Depende.**</mark> Las opciones BY en MG solo se aplican al modelo y sus derivados (excluyendo codigo y scripts que pueden estar cubiertos por licencias OSS separadas). Pero MG con NC y ND requieren que los usuarios incluyan un aviso del modelo de procedencia utilizado para generar este contenido si se recopila y publica como un conjunto de datos.

## Revocable vs. Irrevocable; Sublicenciable vs. No sublicenciable.

La Propiedad Intelectual (PI) abarca patentes, derechos de autor y marcas registradas. La mayoria de las licencias de software, contenido y modelos no confieren derechos de uso de marcas registradas; pueden o no proporcionar licencias limitadas de patentes o derechos de autor. Sin embargo, algunas licencias no establecen explicitamente si sus licencias otorgadas son revocables o irrevocables, sublicenciables o no sublicenciables, lo que genera ambiguedad en el licenciamiento de obras. Resumimos este problema en las tablas a continuacion:

<mark style="color:purple;">**Otorgamiento de licencia de patente:**</mark>

| Nombre de la licencia | ¿Revocable? | ¿Sublicenciable? |
|---|---|---|
| Apache-2.0 | No | <mark style="color:orange;">No declarado</mark> |
| CodeML-OpenRAIL-M | No | <mark style="color:orange;">No declarado</mark> |
| CreativeML-OpenRAIL-M | No | <mark style="color:orange;">No declarado</mark> |
| GPL-3.0 (Copyleft) | <mark style="color:orange;">No declarado</mark> | Auto Licensing |
| CC-BY-4.0 | N.A. | N.A. |
| Llama License Agreement | <mark style="color:orange;">No declarado</mark> | <mark style="color:orange;">No declarado</mark> |
| SEER License Agreement | <mark style="color:orange;">No declarado</mark> | <mark style="color:orange;">No declarado</mark> |
| AFL-3.0 | <mark style="color:orange;">No declarado</mark> | Yes |
| Llama2 Community License | <mark style="color:orange;">No declarado</mark> | <mark style="color:orange;">No declarado</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">No declarado</mark> | <mark style="color:orange;">No declarado</mark> |

<mark style="color:purple;">**Otorgamiento de licencia de derechos de autor:**</mark>

| Nombre de la licencia | ¿Revocable? | ¿Sublicenciable? |
|---|---|---|
| Apache-2.0 | No | Yes |
| CodeML-OpenRAIL-M | No | Yes |
| CreativeML-OpenRAIL-M | No | Yes |
| GPL-3.0 (Copyleft) | No | Auto Licensing |
| CC-BY-4.0 | No | Auto Licensing |
| Llama License Agreement | Yes | No ✤ |
| SEER License Agreement | Yes | No ✤ |
| AFL-3.0 | <mark style="color:orange;">No declarado</mark> | Yes |
| Llama2 Community License | <mark style="color:orange;">No declarado</mark> | <mark style="color:orange;">No declarado</mark> |
| AI2 ImpACT License (LR, MR, HR) | <mark style="color:orange;">No declarado</mark> | <mark style="color:orange;">No declarado</mark> |

**NOTA:** Las licencias CC estan diseñadas para otorgar licencias de derechos de autor para contenido, por lo que el otorgamiento de uso de patentes no es aplicable. <mark style="color:orange;">No declarado:</mark> una licencia no establece explicitamente su revocabilidad, generalmente se entiende como implicitamente revocable. ✤: Estas licencias incluyen implicitamente clausulas de licenciamiento automatico. Auto Licensing significa que el destinatario recibe automaticamente una licencia de los licenciantes originales mientras que la sublicencia es innecesaria.

Las licencias ModelGo determinan la revocabilidad y la sublicencia con una cuidadosa consideracion de sus escenarios objetivo (ver tabla a continuacion). Para NC y ND, nuestro objetivo es maximizar el control del licenciante y asegurar que todas las licencias puedan ser revocadas. Por lo tanto, adoptamos un mecanismo de licenciamiento automatizado (sin sublicenciante en este caso, todas las licencias se terminaran si la licencia principal es revocada) en lugar de sublicenciamiento. La excepcion es SA, donde tambien priorizamos la proteccion de los beneficios de los contribuyentes, haciendo las licencias SA irrevocables y [copyleft](https://en.wikipedia.org/wiki/Copyleft). En cuanto a otras licencias muy permisivas como MG0 y MG-BY, que fomentan el intercambio y el uso libre, son irrevocables y permiten la sublicencia.

<mark style="color:purple;">**Otorgamiento de licencias de patente y derechos de autor en ModelGo:**</mark>

| Nombre de la licencia | ¿Revocable? | ¿Sublicenciable? |
|---|---|---|
| MG0 | No | Yes |
| MG-BY | No | Yes |
| MG-BY-SA (Copyleft) | No | No |
| MG-BY-RAI | Yes | No |
| MG-BY-NC | Yes | No |
| MG-BY-ND | Yes | No |
| MG-BY-NC-ND | Yes | No |
| MG-BY-NC-RAI | Yes | No |

Las licencias ModelGo establecen explicitamente si otorgan o no otorgan al licenciatario licencias de patente y derechos de autor. Esta claridad asegura que los usuarios de modelos comprendan sus derechos y riesgos potenciales al reutilizar y contribuir modelos.

## ¿Se consideran las licencias MG-BY-SA como licencias de codigo abierto?

<mark style="color:purple;">**Actualmente, no.**</mark> Ninguna de las variantes de las licencias ModelGo ha sido aprobada por la Open Source Initiative (OSI) todavia. Sin embargo, nuestro objetivo es que MG-BY-SA-2.0 mantenga el modelo "abierto". Tambien vale la pena mencionar que el significado de "abierto" puede diferir entre software y modelos. En las licencias ModelGo, SA significa la disponibilidad de **Licensed Materials** y **Derivative Materials**, excluyendo la apertura del conjunto de datos (ya que lo consideramos fuera del alcance de gobernanza de las licencias MG).

## ¿Puedo hacer codigo cerrado de mis modelos licenciados bajo MG con SA?

<mark style="color:purple;">**No.**</mark> Esto tambien se aplica a sus derivados. MG-BY-SA-2.0 es una licencia copyleft, lo que significa que todas las obras derivadas tambien deben estar cubiertas por la misma licencia. Tampoco puede revocar MG-BY-SA-2.0, a diferencia de GPL-3.0, que no afirma explicitamente que la licencia de patente otorgada sea irrevocable.

## ¿Las licencias ModelGo admitiran mas opciones de licenciamiento?

<mark style="color:purple;">**Posiblemente**</mark>. Recomendamos usar las opciones de licenciamiento mas apropiadas para su escenario de publicacion. Podemos revisar el texto de la licencia o agregar nuevas opciones de licenciamiento para abordar necesidades emergentes en el licenciamiento de modelos. Sin embargo, la simplicidad y la concision tambien son factores que consideramos, lo cual es importante para evitar conflictos de licencias en un proyecto de ML.

## ¿Puedo reutilizar el texto de las licencias ModelGo para crear mis propias licencias?

<mark style="color:purple;">**Si, puede hacerlo.**</mark> Las licencias ModelGo le permiten explicitamente hacerlo como se establece en la Seccion "MODIFICATION OF THIS LICENSE", siempre que proporcione un aviso legible que describa sus modificaciones a las licencias ModelGo originales. Sin embargo, animamos a usar las opciones de licenciamiento mas apropiadas para su escenario de publicacion para facilitar la estandarizacion en el licenciamiento de modelos y simplificar el analisis de licencias en proyectos de ML.

## ¿Tendran efecto mis modificaciones al Model Sheet?

<mark style="color:purple;">**No.**</mark> El Model Sheet no forma parte de los terminos y condiciones de las licencias MG, por lo que las modificaciones al mismo no seran efectivas. El Model Sheet solo sirve para ayudarle a usted y a los usuarios a elegir una licencia y comprender su contenido. Si tiene necesidades personalizadas para agregar a las licencias ModelGo, debe modificar las disposiciones en la parte de terminos y condiciones.

## ¿Que sucede si mezclo dos modelos bajo licencias MG?

Hay dos escenarios dependiendo de si el resultado de la mezcla es <mark style="color:purple;">**separable**</mark> o <mark style="color:purple;">**inseparable**</mark>.

En el primer escenario, donde los dos modelos permanecen separables entre si, dicha mezcla (por ejemplo, Voting, Stacking, MoE, Pipeline, etc.) no creara una obra completamente nueva, y los modelos originales permanaceran bajo sus licencias originales. Puede aplicar una nueva licencia a su esfuerzo de mezcla (por ejemplo, pesos de redes de compuerta) si corresponde, pero esta accion no afectara las licencias originales de los modelos base.

En el segundo escenario, donde el proceso de mezcla resulta en un resultado inseparable (por ejemplo, promediado de pesos, fusion de modelos, concatenacion de capas, etc.), es necesario verificar la compatibilidad entre las dos licencias originales de los modelos base antes de mezclar. Existe una compatibilidad unidireccional en las licencias MG desde Permisiva a Condicional a Estricta. Esto significa que el resultado de la mezcla puede licenciarse bajo MG con opciones mas estrictas, pero no se permiten menos opciones. Le proporcionamos una tabla de compatibilidad para demostrar esta regla:

<figure><img src="/images/compati.webp" alt="Tabla de compatibilidad de MG"><figcaption><p>Tabla de compatibilidad de MG</p></figcaption></figure>

Elija las licencias de los dos modelos que desea mezclar de las filas y columnas. La marca ✅ significa que puede mezclar los dos modelos y existe una solucion de licenciamiento factible para relicenciar sus resultados de mezcla; la marca ⚠️ significa que debido a los terminos de NoDerivatives, no puede compartir sus resultados de mezcla, lo que le impide aplicar cualquier licencia a los resultados; la marca ❌ significa que no existe una solucion de licenciamiento factible para dicha mezcla, por lo que debe seguir los terminos relativos a derivados de las licencias originales pero no puede relicenciar sus resultados de mezcla.

Por ejemplo, si mezclamos dos modelos licenciados bajo MG-BY-NC y MG-BY-RAI respectivamente, podemos relicenciar los resultados de la mezcla a MG-BY-NC-RAI. Si queremos mezclar modelos con MG-BY y MG-BY-ND, aunque parece factible aplicar MG-BY-ND a los resultados de la mezcla, siguiendo los terminos de NoDerivatives de MG-BY-ND, no podemos compartir dicha mezcla, lo que lleva a que ninguna licencia sea aplicable. Si queremos mezclar MG-BY-SA y MG-BY-RAI, el problema es que no hay soluciones de licenciamiento factibles para los resultados de la mezcla, por lo que dicha mezcla no esta soportada por las licencias ModelGo.

En general, en la mayoria de los casos, puede mezclar libremente modelos con licencias MG permisivas en su modelo sin conflictos, y mezclar modelos con licencias MG condicionales en su modelo si sigue las mismas restricciones, pero es dificil mezclar modelos con licencias MG estrictas e imposible mezclar modelos con licencias MG con ND.

## ¿Por que las licencias ModelGo no admiten SA con RAI?

Siguiendo nuestro [estudio previo de analisis de licencias de ML](https://github.com/Xtra-Computing/ModelGo), las restricciones basadas en el uso de estilo copyleft en las licencias RAI son incompatibles con los terminos relativos a restricciones adicionales en la Seccion 10 de GPL-3.0. Por lo tanto, con la preocupacion de que las restricciones tipo RAI estan fuera del espiritu del codigo abierto y potencialmente conducen al codigo cerrado (Ref. Greenbaum, E. (2015). The Non-Discrimination Principle in Open Source Licensing. Cardozo L. Rev., 37, 1297), no redactamos la licencia MG-BY-SA-RAI.

> ### GPL-3.0 Section 10
>
> You may not impose any further restrictions on the exercise of the rights granted or affirmed under this License. For example, you may not impose a license fee, royalty, or other charge for exercise of rights granted under this License, and you may not initiate litigation (including a cross-claim or counterclaim in a lawsuit) alleging that any patent claim is infringed by making, using, selling, offering for sale, or importing the Program or any portion of it.

La decision de optar por MG con RAI o no es completamente suya. Sin embargo, si su proyecto ya incluye o planea incluir cualquier codigo y componente de ML bajo GPL o LGPL, es aconsejable evitar las licencias RAI (Nota: lo mismo se aplica a cualquier licencia con terminos de restriccion basados en el uso, como OpenRAILs y las licencias AI2 ImpACT). Estas representan un alto riesgo de generar conflictos de licencias siempre que su proyecto incorpore cualquier componente RAI (incluyendo contenido generado y derivados).
