import React from 'react'
import './App.css'

// khai báo type là string
let name: string = 'Trung'
// khai báo type là number
let age: number = 22
// khai báo type là boolean
let sleep: boolean = false
// khai báo type là mảng string
let myProject: string[] = ['project1', 'project2']
// khai báo type là any
let name2: any = 'Trung'

// khai báo type là object (Cách 1)
let student: {
  name: string
  age: number
} = {
  name: 'Trung',
  age: 21
}
// khai báo type là object (Cách 2)
type Student2 = {
  name: string
  age: number
}

let student2: Student2 = {
  name: 'Trung',
  age: 21
}
// khai báo type là object (Cách 3 dùng interface)
interface Student3 {
  name: string
  age: number
}

let student3: Student3 = {
  name: 'Trung',
  age: 21
}

// khai báo type là function (kiểu không trả về)
const printSomething: () => void = () => {
  console.log('Hello')
}
// khai báo type là function (kiểu trả về)
const printSomething2: () => string = () => {
  let name: string = 'Trung'
  return name
}
// khai báo type là function (kiểu trả về mảng)
const printSomething3: () => string[] = () => {
  let name: string[] = ['Trung', 'Đăng']
  return name
}
// khai báo type là function (có tham số truyền vào)
const printSomething4: (age: number) => string[] = (age: number) => {
  let name: string[] = ['Trung', 'Đăng']
  age = 21
  return name
}

// kế thừa type với từ khoá type (dùng dấu &)
type Name = {
  name: string
}

type StudentDetail = Name & {
  age: number
  address: string
}

let studentEx: StudentDetail = {
  name: 'Trung',
  age: 22,
  address: '123'
}

// kế thừa type với từ khoá interface (dùng từ khoá extends)
interface Name2 {
  name: string
}

interface StudentDetail2 extends Name2 {
  age: number
  // dấu ?: field này có cũng được, không có cũng không sao
  address?: string
}

let studentEx2: StudentDetail2 = {
  name: 'Trung',
  age: 22,
  address: '123'
}

// object array
let people: {
  name: string
  age: number
}[] = []
people.push({
  name: 'Ducky',
  age: 27
})

// Union
let price: string | number | boolean
price = 10
price = '20'
price = false

let body: { name: string | number } | { firstName: string } = {
  name: 100
}

// Enum
enum Sizes {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL'
}
let size = Sizes.S

// Generic type
const handleClick = <Type>(value: Type) => value
handleClick<number>(3)
type User = {
  name: string
  age: number
}
// type Identity = {<Input>(value: Input): Input}
interface Identity<Input> {
  (value: Input): Input
}
const identity = <Type>(value: Type) => value
// const result = identity<number>(2023)
const result = identity<User>({ name: 'John', age: 30 })

// const myIdentity: <Input>(value: Input) => Input = identity
// const myIdentity: {<Input>(value: Input): Input} = identity
// const myIdentity: Identity = identity
const myIdentity: Identity<number> = identity
myIdentity(100)

// Ràng buộc Generics
const logIdentity = <Type extends { length: number }>(value: Type) => {
  console.log(value.length)
  return value
}
logIdentity({
  length: 200
})

const getValue = <Obj, Key extends keyof Obj>(obj: Obj, key: Key) => {
  return obj[key]
}
getValue(
  {
    name: 'John',
    age: 30
  },
  'name'
)

// Default Generic
interface Box<Type = string> {
  value: Type
}
const box: Box = {
  value: 'John'
}

// Class
class Person {
  public name: string
  private age: number
  readonly money: number = 40

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const alex = new Person('Alex', 27)

function App() {}

export default App
