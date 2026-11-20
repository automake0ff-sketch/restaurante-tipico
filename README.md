# TÍPICO EXPERIENCE + BUSINESS

Plataforma digital personalizada para **Típico Barra de Tapas**  
Pagés del Corro 86, Triana, Sevilla · Lema: **SAME SAME BUT DIFFERENT**

> Demo comercial profesional. Sin base de datos. Datos de carta orientativos.  
> Listo para evolucionar a producción con autenticación real y persistencia centralizada.

---

## Qué funciona hoy

### TÍPICO EXPERIENCE (público)
- Portada móvil-first premium
- Carta digital con búsqueda, categorías y filtros ligeros
- Detalle de plato + avisos fuertes de seguridad alimentaria
- **TÍPICO FOOD GUIDE** — recomendador basado en reglas (solo platos de la carta)
- Lista de espera (cliente + vista staff) sobre **localStorage** del navegador
- Multidioma base (ES / EN / FR en portada)
- Enlaces reales: teléfono, email, Instagram

### TÍPICO BUSINESS (privado · demo)
- Acceso de demostración (sessionStorage) — **no es autenticación de producción**
- Dashboard con KPIs claramente marcados como **DEMO**
- Vista de carta
- Ingeniería de menú (ejemplo ilustrativo; requiere datos de ventas/costes reales)
- Auditoría que distingue HECHO / INDICADOR / HIPÓTESIS / RECOMENDACIÓN
- Business AI de demostración

---

## Qué NO es (transparencia)

| Aspecto | Estado actual |
|---------|----------------|
| Base de datos | **No**. Waitlist = localStorage del dispositivo |
| Autenticación real | **No**. Solo demo con sessionStorage |
| Precios oficiales | Pendientes de confirmación del restaurante |
| Alérgenos / dietas | **No confirmados**. Avisos obligatorios al cliente |
| Fotografías | Stock ilustrativo (Unsplash), no oficiales |
| Métricas / ventas | Cifras simuladas etiquetadas como DEMO |
| Integración TPV / reservas | Preparada, no activa |

---

## Seguridad alimentaria

- No se afirman platos como veganos, sin gluten o aptos para alergias.
- Los filtros alimentarios fuertes están desactivados o muy matizados.
- En cada ficha y en la carta aparece el aviso: **consultar siempre al personal**.

---

## Cómo ejecutar

```bash
npm install
npm run dev
```

- Experience: http://localhost:3000  
- Business: http://localhost:3000/business  
  Contraseñas demo: `demo` o `tipico2026`

---

## Arquitectura actual

```
src/
  app/           → páginas (App Router)
  data/menu.ts   → carta (fuente única)
  lib/demo-auth.ts → acceso demo (comentado para producción)
```

Sin backend. Sin base de datos. Preparado para:
- Auth real (Auth.js / Clerk / Supabase Auth…)
- Persistencia (Supabase, PlanetScale, Neon…)
- Eventos de analítica
- API de IA real

---

## Variables de entorno (futuro)

Cuando se pase a producción:

```
# .env.local (ejemplo)
DATABASE_URL=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
# etc.
```

Ningún secreto debe residir en el código fuente del cliente.

---

## Presentación comercial

Esta demo está pensada para enseñar al propietario de Bar Típico:

1. Experiencia de cliente (carta + guía + waitlist)
2. Visión del panel de gestión
3. Transparencia sobre qué es real y qué es simulado
4. Camino claro hacia implantación real (auth + DB + TPV)

---

TÍPICO EXPERIENCE + BUSINESS · Construido específicamente para Bar Típico · Triana
