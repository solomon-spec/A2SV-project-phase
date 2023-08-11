import Image from 'next/image'
import Todo from '@/components/todo'
const todo = {
  title: 'wake up at 6am',
  description: 'wake up at 6am and go for a run',
  done: false,
}
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <h1 className="text-4xl font-bold">Redux Todo App</h1>
      <div className="flex flex-col items-center space-y-4">
        <Todo {...todo} />
        <Todo {...todo} />
        <Todo {...todo} />
        <Todo {...todo} />
        <Todo {...todo} />
      </div>
    </main>
  )
}
