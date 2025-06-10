# Changelog

Este archivo contiene los cambios relevantes en la interfaz de usuario (React).

## [Unreleased]

### Added

- Construcción del proyecto con Vite.JS, implementación de React y Typescript.
- Instalación y configuración de Prettier con ESLint.
- Instalación y configuración de **Tailwind** para el sistema de estilos.
- Implementación de **Shadcn UI** para usar componentes accesibles y personalizables.
- Integración de **Lucide Icons** como sistema de iconografía.
- Configuración de Dockerfile.
- Sistema de rutas con React Router.
- Página de login con validación de formulario.
- Helper `onInputChange` para actualizar automáticamente el valor del estado de un formulario con cada cambio en los inputs.
- Página para establecer contraseña de usuario, incluye componentes para validar existencia de usuario, formulario para establecer contraseña y confirmación de actualización de contraseña.

### Refactor

- Refactor en la página de login para usar el helper `onInputChange` en los eventos `onChange` de los inputs del formulario.
