export const pomodorToMinutes = (count:number, duration: number) => {
  const time = count * duration

  if (time < 60) return `${time} мин`

  const hours = Math.floor(time / 60)
  const minutes = time % (hours * 60)

  console.log()

  switch (hours) {
    case 1:
    case 21:
    case 31:
      return `${hours} час ${minutes} мин`
    case 2:
    case 3:
    case 4:
      return `${hours} часа ${minutes} мин`
    default:
      return `${hours} часов ${minutes} мин`
  }
}