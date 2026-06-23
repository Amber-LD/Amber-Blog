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

const note002 = defineNoteConfig({
  dir: 'JavaScript详细版',
  link: '/notes/note002/',
  sidebar: ['', '01.JS概述','02.JS语法基础','03.运算符','04.流程控制','05.函数','06.标准库','07.dom核心', '08.dom事件', '09.bom', '10.JS进阶'],
})

const note003 = defineNoteConfig({
  dir: 'HTML+CSS收官',
  link: '/notes/note003/',
  sidebar: ['', '01.HTML+CSS收官1', '02.HTML+CSS收官2'],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/notes',
  notes: [note001, note002, note003],
})
