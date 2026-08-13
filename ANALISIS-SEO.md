# Análisis SEO — Hielos Tenerife SL

> **Web analizada:** `hielostenerife.es` (provisional)
> **Fecha:** 11 de agosto de 2026
> **Tipo de negocio:** Empresa local de reparto de hielo (B2B + B2C eventos)
> **Mercado objetivo:** Isla de Tenerife (Santa Cruz de Tenerife, provincia)

---

## 1. Resumen ejecutivo

| Categoría | Antes | Después |
|---|---|---|
| SEO técnico | ⚠️ Básico | ✅ Bueno |
| Contenido on-page | ⚠️ Genérico | ✅ Optimizado con keywords |
| SEO local | ❌ Inexistente | ✅ Schema LocalBusiness + zonas |
| FAQ / Long-tail | ❌ Inexistente | ✅ Sección + Schema FAQPage |
| robots.txt / sitemap | ❌ Faltaba | ✅ Creados |
| Open Graph / Twitter | ❌ Faltaba | ✅ Añadido |
| Accesibilidad (a11y) | ⚠️ Aceptable | ✅ Mejorada (skip-link, aria, etc.) |

**Veredicto:** la base era buena pero le faltaban las señales que Google usa para entender un negocio local. Tras los cambios, la web está lista para indexarse y competir por keywords como *"hielo Tenerife"*, *"reparto de hielo Tenerife"*, *"hielo para eventos Tenerife"*, etc.

---

## 2. Auditoría SEO inicial (problemas detectados)

### 2.1 Técnico
- ❌ No existía `robots.txt` → bots sin guía de rastreo
- ❌ No existía `sitemap.xml` → Google descubría la URL solo
- ❌ No había etiqueta `canonical` → riesgo de contenido duplicado con `www`/sin `www`/HTTP
- ❌ No había `meta robots` explícito
- ❌ No había datos estructurados (Schema.org) → Google no podía mostrar rich snippets
- ❌ No había etiquetas `geo.*` ni `ICBM` → pérdida de señal para SEO local
- ❌ No había Open Graph ni Twitter Card → compartir en WhatsApp/redes sin preview

### 2.2 Contenido
- ⚠️ El `<h1>` ("Hielo fresco, cuando lo necesitas") era creativo pero no contenía la keyword principal *"hielo Tenerife"*
- ⚠️ Faltaba una sección de **zonas de reparto** con ciudades de Tenerife → Google no podía asociar el negocio con localizaciones específicas
- ⚠️ No había FAQ → se perdía tráfico long-tail ("cuánto cuesta el hielo en Tenerife", "reparto 24h", etc.)
- ⚠️ Faltaba diferenciación visual/argumental frente a competencia

### 2.3 Local SEO
- ❌ No había NAP (Name / Address / Phone) consistente y marcado semánticamente
- ❌ No había horarios de apertura marcados (importante para Google Business Profile)
- ❌ No había lista de áreas servidas en formato estructurado
- ❌ No se mencionaban ciudades/municipios clave

---

## 3. Keyword research (keywords objetivo)

### 3.1 Head terms (alta intención, alta competencia)
| Keyword | Intención |
|---|---|
| `hielo tenerife` | Transaccional / informativa |
| `reparto de hielo tenerife` | Transaccional |
| `comprar hielo tenerife` | Transaccional |
| `distribuidor de hielo tenerife` | Transaccional B2B |

### 3.2 Long-tail (menor competencia, alta conversión)
| Keyword | Intención |
|---|---|
| `hielo en cubitos tenerife` | Producto específico |
| `hielo picado tenerife` | Producto específico |
| `hielo para bares tenerife` | Segmento |
| `hielo para eventos tenerife` | Segmento |
| `hielo para fiestas tenerife` | Segmento |
| `hielo para festivales canarias` | Segmento |
| `hielo 24 horas tenerife` | Servicio |
| `hielo a domicilio tenerife` | Servicio |
| `bolsa de hielo precio tenerife` | Precio |
| `hielo para pescaderías tenerife` | B2B nicho |

### 3.3 Geo-modificadas (local SEO)
`hielo Santa Cruz de Tenerife`, `hielo La Laguna`, `hielo Puerto de la Cruz`, `hielo Adeje`, `hielo Arona`, `hielo Playa de las Américas`, `hielo Los Cristianos`, etc.

Estas se cubren implícitamente con la **sección "Zonas de reparto"** y el **Schema LocalBusiness con `areaServed`**.

---

## 4. Cambios aplicados en la web

### 4.1 `<head>` — meta tags completos
- ✅ `<title>` con keyword principal + marca + teléfono (55 caracteres, ideal)
- ✅ `<meta name="description">` con propuesta de valor + keywords (158 caracteres)
- ✅ `<meta name="keywords">` (aunque Google lo ignora, otros buscadores sí lo usan)
- ✅ `<meta name="robots" content="index, follow, max-image-preview:large">`
- ✅ `<link rel="canonical">` para evitar duplicados
- ✅ **Open Graph** completo (Facebook, WhatsApp, LinkedIn)
- ✅ **Twitter Card** (`summary_large_image`)
- ✅ **Meta geo** (`geo.region=ES-CN`, `geo.placename=Tenerife`, `geo.position`, `ICBM`)
- ✅ `lang="es-ES"` (más preciso que `lang="es"`)

### 4.2 Datos estructurados (JSON-LD)
Se han añadido **tres bloques** de Schema.org:

1. **`LocalBusiness`** → nombre, teléfono, dirección, geo, horarios 24/7, área servida, redes sociales
2. **`FAQPage`** con 6 preguntas → habilita rich snippets de FAQ en Google
3. **`BreadcrumbList`** → mejora la navegación en SERPs

### 4.3 Contenido
- ✅ `<h1>` ahora incluye explícitamente "Tenerife" y "reparto 24/7"
- ✅ Nueva sección **"Zonas de reparto"** con 16 municipios principales de Tenerife
- ✅ Nueva sección **"Preguntas frecuentes"** con accordion accesible
- ✅ Cada producto ahora tiene `article` semántico con datos estructurados individuales

### 4.4 Accesibilidad (también ayuda al SEO)
- ✅ Skip-link "Saltar al contenido"
- ✅ `aria-label` en botones y enlaces decorativos
- ✅ `<address>` para datos de contacto
- ✅ Botones del FAQ con `aria-expanded` y `aria-controls`
- ✅ Orden de headings estrictamente jerárquico (H1 → H2 → H3)

### 4.5 Ficheros nuevos
- ✅ `robots.txt` con `Sitemap:` apuntando al sitemap
- ✅ `sitemap.xml` con 7 URLs (anclas + principal) e `hreflang` `es-ES`

---

## 5. SEO Off-Page — Acciones pendientes (no se pueden hacer solo con código)

Estas acciones son **críticas** para posicionar un negocio local. Requieren acción manual:

### 5.1 Google Business Profile (PRIORIDAD #1)
- Crear/verificar ficha en [business.google.com](https://business.google.com)
- Categoría principal: *"Proveedor de hielo"*
- Categorías secundarias: *"Servicio de entrega"*, *"Mayorista de alimentos"*
- Subir **fotos reales** de la furgoneta, bolsas de hielo, equipo
- Horarios: 24/7 (o el horario real)
- Responder a todas las reseñas
- Publicar **posts semanales** (Google premia la actividad)

### 5.2 Directorios locales y sectoriales
Dar de alta la empresa en:
- Páginas Amarillas
- 11870
- Yelp
- Cylex España
- Hotfrog
- CanariaseCoge
- Guía de empresas de Tenerife

En todos: **mismo NAP exacto** (Nombre, Dirección, Teléfono).

### 5.3 Reseñas
Pedir reseñas en Google a clientes satisfechos. Apuntar a **20+ reseñas** con 4.5★ mínimo.

### 5.4 Redes sociales
- Crear/perfil de **Instagram** (fotos de repartos, eventos, producto)
- Crear **Facebook Business Page** enlazada a la web
- Publicar con geotags en Tenerife

### 5.5 Backlinks locales
- Patrocinar eventos locales (festivales, fiestas del Carmen, etc.) → nota de prensa + enlace
- Notas de prensa en *eldia.es*, *laopinion.es*, *canarias7.es*
- Colaboración con bares/restaurantes de Tenerife (testimonio + enlace)

### 5.6 Blog / contenido
Crear una sección de **blog** con artículos como:
- *"¿Cuánto hielo necesitas para una boda de 100 personas?"*
- *"Cómo conservar pescado fresco con hielo en escamas"*
- *"5 consejos para mantener el hielo más tiempo en tu terraza"*
- *"Guía: cómo elegir entre hielo en cubitos y hielo picado"*

Cada artículo debe tener:
- Keyword en H1, H2, title, meta description, URL
- Mínimo 800-1200 palabras
- Imágenes con `alt` descriptivo
- Enlace interno a `#contacto` y `#productos`

### 5.7 Schema adicional recomendado
Cuando se tenga blog, añadir:
- `Article` en cada post
- `BreadcrumbList` en cada post
- `HowTo` en artículos tipo guía

---

## 6. Core Web Vitals — Notas

La web actual es ligera y debería pasar los Core Web Vitals sin problemas. Puntos a vigilar:

- ⚠️ Las Google Fonts son externas → añade ~200ms al LCP. Considera self-host o `font-display: swap` (ya está aplicado en el CSS).
- ⚠️ Si se añaden imágenes reales, usar **WebP/AVIF** y `loading="lazy"` (excepto la imagen above-the-fold).
- ⚠️ Activar **Gzip/Brotli** en el servidor.
- ⚠️ Servir el sitio bajo **HTTPS** (obligatorio hoy, ya es factor de ranking).

---

## 7. Métricas de éxito (KPIs a monitorizar)

Una vez desplegada la web:

| KPI | Herramienta | Meta a 3 meses |
|---|---|---|
| Posición media "hielo tenerife" | Google Search Console | Top 10 |
| Impresiones locales | Google Search Console | +200% |
| Clics desde Google | Google Search Console | +150% |
| Llamadas desde la web | Google Business / Call tracking | +30/mes |
| Reseñas Google | Google Business | 20+, 4.5★+ |
| Velocidad (LCP) | PageSpeed Insights | < 2.5s |
| Core Web Vitals | PageSpeed Insights | Todas en verde |

---

## 8. Checklist rápida antes de publicar

- [x] Title, description, OG, Twitter Card
- [x] Schema LocalBusiness, FAQ, Breadcrumb
- [x] robots.txt + sitemap.xml
- [x] Canonical
- [x] Sección Zonas de reparto
- [x] Sección FAQ
- [x] a11y básica
- [ ] **Pendiente:** Crear imagen `og-image.jpg` (1200×630 px) y subir a la raíz
- [ ] **Pendiente:** Cambiar `https://hielostenerife.es/` por el dominio real en:
  - canonical
  - Open Graph (`og:url`, `og:image`)
  - Twitter Card
  - JSON-LD (`url`, `image`, `logo`)
  - sitemap.xml
  - robots.txt
- [ ] **Pendiente:** Crear Google Business Profile
- [ ] **Pendiente:** Conectar el dominio y desplegar bajo HTTPS
- [ ] **Pendiente:** Dar de alta la web en Google Search Console y enviar el sitemap

---

*Documento generado el 11/08/2026 — Próxima revisión recomendada en 90 días.*
