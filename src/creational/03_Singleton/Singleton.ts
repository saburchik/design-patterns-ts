class Singleton {
  static _instance: Singleton
  data: string

  private constructor(d: string) {
    this.data = d
  }
  static getInstance(d: string) {
    if (!Singleton._instance) {
      Singleton._instance = new Singleton(d)
    }
    return Singleton._instance
  }
}

const theOne = Singleton.getInstance('Nuts')
console.log(theOne.data)
const theTwo = Singleton.getInstance('Bells')
console.log(theTwo.data)

console.log(typeof theOne, typeof theTwo)
console.log(theOne === theTwo)

// const theThree = new Singleton('Message') // There is an error;
