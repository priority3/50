<route>
{meta:{title:'plum',id:2}}
</route>

<script lang="ts" setup>
const el = $ref<HTMLCanvasElement>()
const ctx = $computed(() => el.getContext('2d'))
interface Point {
  x: number
  y: number
}
interface Branch {
  start: Point
  length: number
  theta: number
}
function init() {
  ctx.strokeStyle = '#747d8c'
  const startPoint = {
    start: {
      x: 1000,
      y: 0,
    },
    length: 10,
    theta: Math.PI / 4,
  }
  drawBranch(startPoint)
}

const pendingTasks: Function [] = []

function drawBranch(b: Branch, depth = 0) {
  const end = getEndPoint(b)
  lineTo(b.start, end)
  const leftBranch = {
    start: end,
    length: b.length + Math.random() * 2,
    theta: b.theta - 0.5 * Math.random(),
  }
  const rightBranch = {
    start: end,
    length: b.length + Math.random() * 2,
    theta: b.theta + 0.5 * Math.random(),
  }
  if (depth < 4 || Math.random() < 0.5)
    pendingTasks.push(() => drawBranch(leftBranch, depth + 1))
  if (depth < 4 || Math.random() < 0.5)
    pendingTasks.push(() => drawBranch(rightBranch, depth + 1))
}

function frame() {
  const tasks = [...pendingTasks]
  pendingTasks.length = 0
  tasks.forEach(fn => fn())
}

// 根据浏览器的fps 重绘前执行 每一帧前执行
let framesCount = 0
function startFrame() {
  requestAnimationFrame(() => {
    framesCount++
    // 3 帧画一次
    if (framesCount % 3 === 0)
      frame()
    startFrame()
  })
}

startFrame()

function getEndPoint(b: Branch): Point {
  return {
    x: b.start.x + b.length * Math.cos(b.theta),
    y: b.start.y + b.length * Math.sin(b.theta),
  }
}

function lineTo(start: Point, end: Point) {
  ctx.moveTo(start.x, start.y)
  ctx.lineTo(end.x, end.y)
  ctx.stroke()
}

onMounted(() => {
  init()
})
</script>

<template>
  <base-header />
  <div>
    <canvas ref="el" width="2000" height="2000" scale-50 origin-top-left border="~ gray solid" />
  </div>
</template>>

