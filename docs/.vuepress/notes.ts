import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

// const demoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/notes/demo/',
//   sidebar: ['', 'foo', 'bar'],
// })

const note001 = defineNoteConfig({
  dir: 'HTML+CSS宝典',
  link: '/notes/note001/',
  sidebar: ['', '01.开发准备', '02.HTML元素及路径1', '03.HTML元素及路径2', '04.元素包含关系', '05.CSS选择器及盒模型1', '06.CSS选择器及盒模型2', '07.CSS浮动和定位', '08.HTML进阶', '09.CSS进阶1', '10.CSS进阶2'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/notes',
  notes: [note001],
})
