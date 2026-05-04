# MConfirm Component

Компонент для создания модальных окон подтверждения с возможностью кастомизации через слоты.

## Использование

```vue
<template>
  <m-confirm ref="confirmRef">
    <template #header>
      <m-confirm-header>Закрытие смены</m-confirm-header>
    </template>

    <template #body>
      <m-confirm-body>
        <div class="flex flex-col gap-2">
          <p>Вы действительно хотите закрыть текущую смену?</p>
          <p class="text-sm text-gray-500">
            После закрытия смены все операции будут недоступны до открытия новой
            смены.
          </p>
        </div>
      </m-confirm-body>
    </template>

    <template #footer="{ onConfirm, onCancel }">
      <m-confirm-footer
        confirm-text="Закрыть"
        cancel-text="Отмена"
        :onConfirm="onConfirm"
        :onCancel="onCancel"
      />
    </template>
  </m-confirm>
</template>

<script setup>
import { ref } from "vue";

const confirmRef = ref(null);

const handleCloseShift = async () => {
  const result = await confirmRef.value.open();
  if (result) {
    console.log("Смена закрыта");
  }
};
</script>
```

## Компоненты

### MConfirm

Основной компонент, который предоставляет модальное окно и управляет его состоянием.

#### Props

- `title`: String (default: 'Подтверждение') - текст заголовка
- `text`: String (default: 'Вы уверены?') - основной текст

#### Методы

- `open()`: Открывает модальное окно и возвращает Promise, который резолвится в `true` при подтверждении и `false` при отмене.

#### Слоты

- `header`: Слот для заголовка модального окна
- `body`: Слот для основного содержимого
- `footer`: Слот для кнопок действий

### MConfirmHeader

Компонент для отображения заголовка модального окна.

#### Props

- `title`: String (default: 'Подтверждение') - текст заголовка

### MConfirmBody

Компонент для отображения основного содержимого модального окна.

#### Props

- `text`: String (default: 'Вы уверены?') - основной текст

### MConfirmFooter

Компонент для отображения кнопок действий.

#### Props

- `confirmText`: String (default: 'Подтвердить') - текст кнопки подтверждения
- `cancelText`: String (default: 'Отмена') - текст кнопки отмены
- `onConfirm`: Function (required) - callback при подтверждении
- `onCancel`: Function (required) - callback при отмене
- `confirmType`: String (default: 'error') - type для кнопки, чтобы менять её цвет

## Стилизация

Компонент использует Tailwind CSS для стилизации. Основные классы:

- Кнопки растянуты на всю ширину модального окна
- Гибкая система отступов через `gap-*`
- Поддержка цветовых схем через стандартные классы Tailwind
- Передаем `confirmType` для кастомизации стилей кнопок

## Особенности

- Кнопки всегда растянуты на всю ширину модального окна
- Поддерживает асинхронные операции через Promise
- Полностью кастомизируемый через слоты
- Глобально импортирован
