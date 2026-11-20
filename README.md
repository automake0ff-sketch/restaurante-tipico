# TÍPICO EXPERIENCE + BUSINESS

Plataforma digital personalizada para **Típico Barra de Tapas**  
Pagés del Corro 86, Triana, Sevilla · **SAME SAME BUT DIFFERENT**

> Demo comercial · Sin base de datos · Datos de carta orientativos  
> Rama de trabajo: `redesign/tipico-experience`

**Instagram:** [tipicobarradetapas](https://www.instagram.com/tipicobarradetapas/)  
**Tripadvisor:** [Tipico Barra De Tapas](https://www.tripadvisor.es/Restaurant_Review-g187443-d13564282-Reviews-Tipico_Barra_De_Tapas-Seville_Province_of_Seville_Andalucia.html)

---

## Qué funciona

| Módulo | Estado |
|--------|--------|
| Home editorial | Operativo |
| Carta digital + búsqueda | Operativo (precios ptc.) |
| Food Guide (reglas) | Operativo — no es IA conectada |
| Waitlist cliente | Operativo (localStorage) |
| Waitlist staff | Operativo — **requiere auth demo** |
| Business panel | Operativo — auth demo (sessionStorage) |
| Enlaces Instagram / Tripadvisor / Maps | Operativos |

## Qué es demo / pendiente

- Sin base de datos centralizada (waitlist = localStorage del dispositivo)
- Auth demo (no es autenticación de producción)
- Precios, alérgenos e ingredientes oficiales pendientes de validación
- Métricas e ingeniería de menú = ejemplos etiquetados DEMO
- Fotos de stock ilustrativas (no oficiales)

## Seguridad alimentaria

No se afirman platos como veganos, sin gluten o aptos para alergias.  
Avisos obligatorios: consultar siempre al personal.

## Ejecutar

```bash
npm install
npm run dev
```

- Experience: http://localhost:3000  
- Business / Staff waitlist: contraseñas demo `demo` o `tipico2026`

## Despliegue Vercel

Si la URL de producción devuelve 404 de plataforma:

1. Settings → General → **Root Directory** vacío
2. Deployments → **Promote to Production** el último build verde
3. Framework preset: **Next.js**

## Rama

Los cambios de rediseño se desarrollan en `redesign/tipico-experience`.  
No se sobrescribe `main` sin autorización explícita.
