import { Greeting } from '@/types'
export const greeting: Greeting = {
  message: 'hello',
  name: 'Mike',
}

export const greetingFunc = (data: Greeting): string => {
  return `${data.message} ${data.name}`
}
